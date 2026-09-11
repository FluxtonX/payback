'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import articlesData from '@/data/featuredArticles.json';

interface Article {
  title: string;
  slug: string;
  path: string;
  tags?: string[];
  date: string;
  thumbnail: string;
}

export const LatestArticlesSection: React.FC = () => {
  const articles: Article[] = articlesData as Article[];
  const [currentIndex, setCurrentIndex] = useState(0);

  // We show 3 on desktop, 2 on tablet, 1 on mobile
  // Total slides count:
  const maxDesktopIndex = Math.max(0, articles.length - 3);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxDesktopIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxDesktopIndex ? prev + 1 : 0));
  };

  return (
    <section className="py-12 lg:py-20 font-sans bg-white">
      <div className="container max-w-[1208px] mx-auto px-4">
        <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[var(--brand-deep)] text-center mb-8 md:mb-12">
          Latest articles
        </h2>

        <div className="relative max-w-[1200px] mx-auto overflow-hidden">
          {/* Carousel container */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {articles.map((article, idx) => (
              <div
                key={idx}
                className="w-full md:w-1/2 xl:w-1/3 flex-shrink-0 px-3 md:px-4"
              >
                <Link
                  href={article.path || `/blogs/${article.slug}/`}
                  className="block group h-full"
                >
                  <div className="bg-white overflow-hidden flex flex-col h-full">
                    {/* Thumbnail */}
                    <div className="relative w-full h-[200px] sm:h-[220px] bg-[#f4f4f4] mb-4 overflow-hidden">
                      <Image
                        src={article.thumbnail}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1366px) 50vw, 33vw"
                      />
                    </div>

                    {/* Date with Calendar Icon */}
                    <div className="flex items-center gap-2 text-[#616267] text-[14px] mb-2 font-medium">
                      <Image
                        src="/icons/calendar.svg"
                        alt=""
                        width={16}
                        height={16}
                        aria-hidden="true"
                      />
                      <span>{article.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[17px] sm:text-[19px] font-bold text-[var(--brand-deep)] group-hover:text-[var(--brand-primary)] line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Dots and Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8 md:mt-10">
            {/* Prev arrow */}
            <button
              onClick={prevSlide}
              aria-label="Previous articles"
              className="w-10 h-10 flex items-center justify-center text-[var(--brand-primary)] hover:bg-[var(--brand-soft)] rounded-full transition-colors"
            >
              <Image
                src="/elements/carousel-chevron-left.svg"
                alt="Previous"
                width={24}
                height={24}
              />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxDesktopIndex + 1 }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === dotIdx
                      ? 'bg-[var(--brand-primary)]'
                      : 'bg-[#a0a6ba] hover:bg-[#616267]'
                  }`}
                />
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={nextSlide}
              aria-label="Next articles"
              className="w-10 h-10 flex items-center justify-center text-[var(--brand-primary)] hover:bg-[var(--brand-soft)] rounded-full transition-colors"
            >
              <Image
                src="/elements/carousel-chevron-right.svg"
                alt="Next"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesSection;
