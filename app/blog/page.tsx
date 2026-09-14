import React from 'react';
import { Metadata } from 'next';
import { BLOG_ARTICLES } from '@/data/blogArticles';
import { BlogFeaturedCard } from '@/components/blog/BlogFeaturedCard';
import { BlogIndexClient } from '@/components/blog/BlogIndexClient';
import { BlogNewsletterSection } from '@/components/blog/BlogNewsletterSection';
import { GuaranteeBlock } from '@/components/home/GuaranteeBlock';
import { ContactSection } from '@/components/home/ContactSection';

export const metadata: Metadata = {
  title: 'Blog - Scam Intelligence & Fund Recovery Guides | Online Reclaims',
  description:
    'Explore authoritative guides, cyber scam threat intelligence, forex & crypto fraud investigations, and asset recovery methodologies from the forensic research team at Online Reclaims.',
  alternates: {
    canonical: 'https://onlinereclaims.com/blog/',
  },
  openGraph: {
    title: 'Blog - Scam Intelligence & Fund Recovery Guides | Online Reclaims',
    description:
      'Explore authoritative guides, cyber scam threat intelligence, forex & crypto fraud investigations, and asset recovery methodologies from Online Reclaims.',
    url: 'https://onlinereclaims.com/blog/',
    siteName: 'Online Reclaims',
    images: [
      {
        url: '/images/onlinereclaims.png',
        width: 1200,
        height: 630,
        alt: 'Online Reclaims Blog & Scam Intelligence Archive',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Scam Intelligence & Fund Recovery Guides | Online Reclaims',
    description:
      'Explore authoritative guides, cyber scam threat intelligence, forex & crypto fraud investigations, and asset recovery methodologies from Online Reclaims.',
    images: ['/images/onlinereclaims.png'],
  },
};

export default function BlogPage() {
  const featuredArticle =
    BLOG_ARTICLES.find((a) => a.featured) || BLOG_ARTICLES[0];
  const sideArticles = BLOG_ARTICLES.filter((a) => a.slug !== featuredArticle.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Online Reclaims Scam Intelligence Archive',
    url: 'https://onlinereclaims.com/blog/',
    description:
      'Expert analysis, threat intelligence, forensic insights, and practical guides to protect your assets and reclaim stolen funds.',
    publisher: {
      '@type': 'Organization',
      name: 'Online Reclaims',
      url: 'https://onlinereclaims.com',
      logo: 'https://onlinereclaims.com/images/onlinereclaims.png',
    },
    blogPost: BLOG_ARTICLES.map((art) => ({
      '@type': 'BlogPosting',
      headline: art.title,
      url: `https://onlinereclaims.com/blogs/${art.slug}/`,
      datePublished: art.date,
      author: {
        '@type': 'Organization',
        name: 'Online Reclaims Team',
      },
      image: art.thumbnail,
      description: art.excerpt,
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Featured Articles Hero Spotlight */}
      <BlogFeaturedCard
        featuredArticle={featuredArticle}
        sideArticles={sideArticles}
      />

      {/* Interactive Topics, Filter & Pagination Grid */}
      <BlogIndexClient articles={BLOG_ARTICLES} />

      {/* Newsletter Signup Banner */}
      <BlogNewsletterSection />

      {/* 14-Day Money Back Guarantee Block */}
      <GuaranteeBlock />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
