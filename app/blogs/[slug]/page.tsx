import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_ARTICLES, BlogArticle } from '@/data/blogArticles';
import { ArticleReaderClient } from '@/components/blog/ArticleReaderClient';
import { LatestArticlesSection } from '@/components/home/LatestArticlesSection';
import { ContactSection } from '@/components/home/ContactSection';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | Payback',
      description: 'The requested article could not be located.',
    };
  }

  const canonicalUrl = `https://payback.com/blogs/${article.slug}/`;

  return {
    title: `${article.title} - Payback`,
    description: article.excerpt,
    keywords: [article.category, ...(article.tags || []), 'Scam Recovery', 'Payback Investigation'],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} - Payback`,
      description: article.excerpt,
      url: canonicalUrl,
      siteName: 'Payback',
      images: [
        {
          url: article.thumbnail,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.thumbnail],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles: prioritize matching category, fallback to others
  const relatedArticles = BLOG_ARTICLES.filter((a) => a.slug !== article.slug)
    .sort((a, b) => {
      if (a.category === article.category && b.category !== article.category) return -1;
      if (b.category === article.category && a.category !== article.category) return 1;
      return 0;
    })
    .slice(0, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: `https://payback.com${article.thumbnail}`,
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://payback.com/blogs/${article.slug}/`,
    },
    author: {
      '@type': 'Organization',
      name: 'Payback Forensic Team',
      url: 'https://payback.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Payback',
      logo: {
        '@type': 'ImageObject',
        url: 'https://payback.com/images/payback-logo.png',
      },
    },
    keywords: [article.category, ...(article.tags || [])].join(', '),
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Article Content & Interactive Sidebar */}
      <ArticleReaderClient article={article} relatedArticles={relatedArticles} />

      {/* Latest / Related Articles Carousel */}
      <div className="border-t border-[#a0a6ba]/15">
        <LatestArticlesSection />
      </div>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
