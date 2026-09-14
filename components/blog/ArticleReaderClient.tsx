'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogArticle } from '@/data/blogArticles';

interface ArticleReaderClientProps {
  article: BlogArticle;
  relatedArticles: BlogArticle[];
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export const ArticleReaderClient: React.FC<ArticleReaderClientProps> = ({
  article,
  relatedArticles,
}) => {
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Helper to create URL-safe ID from heading text
  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/<[^>]+>/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  // Process article content and extract Table of Contents headings
  const { processedHtml, tocItems } = useMemo(() => {
    let content = article.content;
    const toc: TocItem[] = [];

    // If the content is markdown (contains ## or ###), convert basic markdown to HTML
    if (content.includes('## ') || content.includes('### ')) {
      // Replace markdown headings
      content = content.replace(/^### (.*$)/gim, '<h3>$1</h3>');
      content = content.replace(/^## (.*$)/gim, '<h2>$1</h2>');
      // Replace bold
      content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Replace italic
      content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
      // Replace bullet lists
      content = content.replace(/^- (.*$)/gim, '<li>$1</li>');
      content = content.replace(/(<li>[\s\S]*?<\/li>)/gim, '<ul>$1</ul>');
      // Replace double line breaks with paragraphs
      content = content
        .split('\n\n')
        .map((chunk) => {
          const trimmed = chunk.trim();
          if (
            trimmed.startsWith('<h2') ||
            trimmed.startsWith('<h3') ||
            trimmed.startsWith('<ul') ||
            trimmed.startsWith('<ol') ||
            trimmed.startsWith('<div') ||
            !trimmed
          ) {
            return trimmed;
          }
          return `<p>${trimmed}</p>`;
        })
        .join('\n');
    }

    // Now scan for <h2> and <h3> tags to extract TOC and inject IDs
    const headingRegex = /<(h[23])([^>]*)>(.*?)<\/\1>/gi;
    let headingIndex = 0;

    const htmlWithIds = content.replace(headingRegex, (match, tag, attrs, innerText) => {
      headingIndex++;
      const plainText = innerText.replace(/<[^>]+>/g, '').trim();
      const id = slugify(plainText) || `heading-${headingIndex}`;
      const level = tag.toLowerCase() === 'h2' ? 2 : 3;

      toc.push({ id, text: plainText, level });

      return `<${tag} id="${id}" class="scroll-mt-24 font-poppins font-bold text-[#112152] ${
        level === 2 ? 'text-2xl md:text-3xl mt-10 mb-4' : 'text-xl md:text-2xl mt-8 mb-3'
      }" ${attrs}>${innerText}</${tag}>`;
    });

    return { processedHtml: htmlWithIds, tocItems: toc };
  }, [article.content]);

  // Track active heading on scroll
  useEffect(() => {
    if (tocItems.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(tocItems[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveHeadingId(tocItems[i].id);
          return;
        }
      }
      setActiveHeadingId(tocItems[0]?.id || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const shareUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
  const shareTitle = encodeURIComponent(article.title);

  return (
    <div className="bg-white">
      {/* Breadcrumbs Section */}
      <div className="border-b border-[#a0a6ba]/15 bg-[#f4f7f5]/60 py-4">
        <div className="container max-w-[1208px] mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#616267] overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[var(--brand-primary)] transition-colors">
              Home
            </Link>
            <span className="text-[#a0a6ba]">/</span>
            <Link href="/blog/" className="hover:text-[var(--brand-primary)] transition-colors">
              Blog
            </Link>
            <span className="text-[#a0a6ba]">/</span>
            <span className="text-[#112152] font-medium truncate max-w-[320px] sm:max-w-md">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      <div className="container max-w-[1208px] mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Main Article Content Column (8 of 12 cols on desktop) */}
          <article className="lg:col-span-8 flex flex-col">
            {/* Category Pill */}
            <div className="mb-4">
              <span className="inline-block bg-[var(--brand-soft)] text-[var(--brand-primary)] text-xs font-semibold px-3.5 py-1.5 rounded-full">
                {article.category}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#112152] font-poppins leading-tight sm:leading-snug mb-6">
              {article.title}
            </h1>

            {/* Meta Row & Social Sharing */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#a0a6ba]/20 mb-8 text-xs sm:text-sm text-[#616267]">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-[#112152]">{article.author}</span>
                <span>•</span>
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#a0a6ba] font-medium">Share:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="w-8 h-8 rounded-full bg-[#f4f7f5] hover:bg-[var(--brand-soft)] text-[#616267] hover:text-[var(--brand-primary)] flex items-center justify-center transition-colors"
                >
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="w-8 h-8 rounded-full bg-[#f4f7f5] hover:bg-[var(--brand-soft)] text-[#616267] hover:text-[var(--brand-primary)] flex items-center justify-center transition-colors"
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="w-8 h-8 rounded-full bg-[#f4f7f5] hover:bg-[var(--brand-soft)] text-[#616267] hover:text-[var(--brand-primary)] flex items-center justify-center transition-colors"
                >
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <button
                  onClick={handleCopyLink}
                  aria-label="Copy article link"
                  className="w-8 h-8 rounded-full bg-[#f4f7f5] hover:bg-[var(--brand-soft)] text-[#616267] hover:text-[var(--brand-primary)] flex items-center justify-center transition-colors relative"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  {copiedLink && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#112152] text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Featured Hero Thumbnail */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-[#f4f7f5] border border-[#a0a6ba]/25 shadow-sm">
              <Image
                src={article.thumbnail}
                alt={article.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            {/* Mobile Table of Contents Accordion */}
            {tocItems.length > 0 && (
              <div className="lg:hidden mb-10 p-5 bg-[#f4f7f5] rounded-2xl border border-[#a0a6ba]/25">
                <h4 className="font-bold text-sm text-[#112152] font-poppins mb-3 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                  <span>Table of Contents</span>
                </h4>
                <ul className="space-y-2 text-xs">
                  {tocItems.map((item) => (
                    <li
                      key={item.id}
                      className={item.level === 3 ? 'pl-3 text-[#616267]' : 'font-medium text-[#112152]'}
                    >
                      <a
                        href={`#${item.id}`}
                        className="hover:text-[var(--brand-primary)] transition-colors block py-0.5"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Body Content */}
            <div
              className="article-body-content text-[#616267] text-base leading-relaxed space-y-5 [&>p]:leading-relaxed [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:space-y-2 [&>blockquote]:border-l-4 [&>blockquote]:border-[var(--brand-primary)] [&>blockquote]:bg-[var(--brand-soft)] [&>blockquote]:p-4 [&>blockquote]:rounded-r-xl [&>blockquote]:italic [&>strong]:text-[#112152] [&>strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: processedHtml }}
            />

            {/* In-Article Recovery Consultation Callout */}
            <div className="my-12 p-8 bg-[var(--brand-soft)] rounded-2xl border border-[var(--brand-primary)]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <span className="inline-block text-xs font-bold text-[var(--brand-primary)] uppercase tracking-wider">
                  Need Professional Assistance?
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--brand-deep)] font-poppins">
                  Have you fallen victim to online fraud?
                </h3>
                <p className="text-sm text-[#616267] max-w-lg">
                  Speak directly with our forensic recovery specialists. We trace illicit funds, assemble evidence files, and engage financial authorities.
                </p>
              </div>
              <Link
                href="/contact-us/"
                className="px-6 py-3.5 bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] text-white text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg whitespace-nowrap flex-shrink-0"
              >
                Free Consultation
              </Link>
            </div>

            {/* Author Footer & Legal Notice */}
            <div className="pt-8 border-t border-[#a0a6ba]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#616267]">
              <div>
                <p className="font-semibold text-[#112152]">Published by Online Reclaims Forensic Research Desk</p>
                <p>Updated in accordance with 2026 international fraud directives.</p>
              </div>
              <Link
                href="/whistleblowing/"
                className="text-[var(--brand-primary)] hover:underline font-semibold"
              >
                Report scam activity anonymously →
              </Link>
            </div>
          </article>

          {/* Desktop Right Sticky Sidebar (4 of 12 cols) */}
          <aside className="hidden lg:block lg:col-span-4 space-y-8 sticky top-24">
            {/* Table of Contents Box */}
            {tocItems.length > 0 && (
              <div className="p-6 bg-[#f4f7f5] rounded-2xl border border-[#a0a6ba]/25">
                <h4 className="font-bold text-base text-[#112152] font-poppins mb-4 flex items-center gap-2 pb-3 border-b border-[#a0a6ba]/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                  <span>Table of Contents</span>
                </h4>
                <nav className="space-y-2 max-h-[380px] overflow-y-auto pr-2 text-xs">
                  {tocItems.map((item) => {
                    const isActive = activeHeadingId === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block py-1 transition-all ${
                          item.level === 3 ? 'pl-4' : 'font-medium'
                        } ${
                          isActive
                            ? 'text-[var(--brand-primary)] font-bold translate-x-1'
                            : 'text-[#616267] hover:text-[#112152]'
                        }`}
                      >
                        {item.text}
                      </a>
                    );
                  })}
                </nav>
              </div>
            )}

            {/* Sticky Consultation Box */}
            <div className="p-6 bg-[var(--brand-deep)] text-white rounded-2xl shadow-xl space-y-4">
              <span className="inline-block bg-white/15 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                Direct Expert Support
              </span>
              <h3 className="text-xl font-bold font-poppins leading-snug">
                Let&apos;s get your money back!
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                If you&apos;ve lost money to scammers, contact us now and we&apos;ll work with you to trace your funds and recover your capital.
              </p>
              <Link
                href="/contact-us/"
                className="block text-center w-full py-3 bg-[var(--brand-primary)] hover:bg-[#084232] text-white font-semibold text-xs rounded-xl transition-all shadow-md"
              >
                Get a free consultation
              </Link>
            </div>

            {/* Money-back Guarantee Card */}
            <div className="p-5 bg-white rounded-2xl border border-[#a0a6ba]/25 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--brand-soft)] text-[var(--brand-primary)] flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#112152] font-poppins">14-Day Money Back Guarantee</h4>
                <p className="text-[11px] text-[#616267]">Transparent service terms with client refund protection.</p>
              </div>
            </div>

            {/* Related Articles Mini Feed */}
            {relatedArticles.length > 0 && (
              <div className="p-6 bg-white rounded-2xl border border-[#a0a6ba]/25 space-y-4">
                <h4 className="font-bold text-sm text-[#112152] font-poppins pb-2 border-b border-[#a0a6ba]/20">
                  Related Intelligence
                </h4>
                <div className="space-y-4">
                  {relatedArticles.slice(0, 3).map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blogs/${rel.slug}/`}
                      className="group flex gap-3 items-center"
                    >
                      <div className="relative w-16 h-14 rounded-lg bg-[#f4f7f5] overflow-hidden flex-shrink-0">
                        <Image
                          src={rel.thumbnail}
                          alt={rel.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-grow">
                        <span className="text-[10px] text-[#a0a6ba] block">{rel.date}</span>
                        <h5 className="text-xs font-semibold text-[#112152] group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};
