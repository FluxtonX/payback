import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogArticle } from '@/data/blogArticles';

interface BlogArticleCardProps {
  article: BlogArticle;
}

export const BlogArticleCard: React.FC<BlogArticleCardProps> = ({ article }) => {
  return (
    <Link
      href={`/blogs/${article.slug}/`}
      className="group flex flex-col bg-white rounded-2xl border border-[#a0a6ba]/25 overflow-hidden hover:shadow-xl hover:border-[var(--brand-primary)]/40 hover:-translate-y-1 transition-all duration-300 h-full"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/10] bg-[#f4f7f5] overflow-hidden">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-[var(--brand-soft)] text-[var(--brand-primary)] text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm bg-white/90">
            {article.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-2.5 text-xs text-[#616267] mb-3">
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {article.date}
            </span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#112152] font-poppins leading-snug mb-3 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-[#616267] text-sm leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        {/* Footer CTA */}
        <div className="mt-6 pt-4 border-t border-[#a0a6ba]/15 flex items-center justify-between text-xs font-semibold text-[var(--brand-primary)]">
          <span>Read article</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
};
