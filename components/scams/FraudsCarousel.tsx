'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const fraudLogos = [
  { src: '/images/carousel1-new/logo-1.png', alt: 'Investigated Fraud 1' },
  { src: '/images/carousel1-new/logo-2.png', alt: 'Investigated Fraud 2' },
  { src: '/images/carousel1-new/logo-3.png', alt: 'Investigated Fraud 3' },
  { src: '/images/carousel1-new/logo-4.png', alt: 'Investigated Fraud 4' },
  { src: '/images/carousel1-new/logo-5.png', alt: 'Investigated Fraud 5' },
  { src: '/images/carousel1-new/logo-6.png', alt: 'Investigated Fraud 6' },
  { src: '/images/carousel1-new/logo-7.png', alt: 'Investigated Fraud 7' },
  { src: '/images/carousel1-new/logo-8.png', alt: 'Investigated Fraud 8' },
  { src: '/images/carousel1-new/logo-9.png', alt: 'Investigated Fraud 9' },
  { src: '/images/carousel1-new/logo-10.png', alt: 'Investigated Fraud 10' },
  { src: '/images/carousel1-new/logo-11.png', alt: 'Investigated Fraud 11' },
  { src: '/images/carousel1-new/logo-12.png', alt: 'Investigated Fraud 12' },
];

export const FraudsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const maxPages = Math.ceil(fraudLogos.length / itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxPages - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === maxPages - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [maxPages]);

  return (
    <section className="py-10 sm:py-12 xl:py-14 bg-white font-sans border-b border-gray-100">
      <div className="container max-w-[1048px] mx-auto px-4">
        <h3 className="text-[22px] sm:text-[28px] font-extrabold text-[var(--brand-deep)] text-center mb-8 sm:mb-10">
          Some of the frauds we investigated
        </h3>

        {/* Carousel Viewport */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: maxPages }).map((_, pageIdx) => {
              const start = pageIdx * itemsPerPage;
              const pageItems = fraudLogos.slice(start, start + itemsPerPage);
              return (
                <div
                  key={pageIdx}
                  className="w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-2"
                >
                  {pageItems.map((logo, idx) => (
                    <div
                      key={idx}
                      className="h-[72px] sm:h-[84px] bg-[#f8f9fa] border border-gray-100 flex items-center justify-center p-3 sm:p-4 rounded-sm hover:shadow-sm transition-shadow"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={48}
                        className="max-h-[44px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous logos"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-md border border-gray-200 flex items-center justify-center text-[var(--brand-deep)] hover:bg-[var(--brand-primary)] hover:text-white transition-colors"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next logos"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-md border border-gray-200 flex items-center justify-center text-[var(--brand-deep)] hover:bg-[var(--brand-primary)] hover:text-white transition-colors"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === idx
                  ? 'bg-[var(--brand-primary)] w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FraudsCarousel;
