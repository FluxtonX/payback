import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogArticle } from '@/data/blogArticles';

interface BlogFeaturedCardProps {
  featuredArticle: BlogArticle;
  sideArticles: BlogArticle[];
}

export const BlogFeaturedCard: React.FC<BlogFeaturedCardProps> = ({
  featuredArticle,
  sideArticles,
}) => {
  return (
    <section className="pt-6 pb-12 bg-white">
      <div className="container max-w-[1208px] mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-[#616267] mb-6">
          <Link href="/" className="hover:text-[var(--brand-primary)] transition-colors">
            Home
          </Link>
          <span className="text-[#a0a6ba]">/</span>
          <span className="text-[var(--brand-deep)] font-medium">Blog</span>
        </div>

        <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[var(--brand-deep)] mb-8 font-poppins">
          Featured Articles
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Large Featured Article (7/12 cols) */}
          <div className="lg:col-span-7 flex">
            <Link
              href={`/blogs/${featuredArticle.slug}/`}
              className="group flex flex-col justify-between w-full bg-white rounded-2xl border border-[#a0a6ba]/25 overflow-hidden hover:shadow-xl hover:border-[var(--brand-primary)]/40 transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] bg-[#f4f7f5] overflow-hidden">
                <Image
                  src={featuredArticle.thumbnail}
                  alt={featuredArticle.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-[var(--brand-soft)] text-[var(--brand-primary)] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#616267] mb-3">
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#112152] font-poppins leading-snug mb-3 group-hover:text-[var(--brand-primary)] transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-[#616267] text-sm sm:text-base leading-relaxed line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] group-hover:translate-x-1 transition-transform">
                  <span>Read full analysis</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Stack of 2 Side Articles (5/12 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideArticles.slice(0, 2).map((article) => (
              <Link
                key={article.slug}
                href={`/blogs/${article.slug}/`}
                className="group flex flex-col sm:flex-row lg:flex-col xl:flex-row bg-white rounded-2xl border border-[#a0a6ba]/25 overflow-hidden hover:shadow-lg hover:border-[var(--brand-primary)]/40 transition-all duration-300 flex-1"
              >
                <div className="relative w-full sm:w-[200px] lg:w-full xl:w-[190px] aspect-[16/10] sm:aspect-auto lg:aspect-[16/9] xl:aspect-auto flex-shrink-0 bg-[#f4f7f5] overflow-hidden">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 sm:hidden xl:hidden">
                    <span className="inline-block bg-[var(--brand-soft)] text-[var(--brand-primary)] text-[11px] font-semibold px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#616267] mb-2">
                      <span className="text-[var(--brand-primary)] font-medium">
                        {article.category}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#112152] font-poppins leading-snug line-clamp-2 group-hover:text-[var(--brand-primary)] transition-colors">
                      {article.title}
                    </h4>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-primary)] group-hover:translate-x-1 transition-transform">
                    <span>Read guide</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
