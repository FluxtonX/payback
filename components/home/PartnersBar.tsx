'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export const PartnersBar: React.FC = () => {
  const logos = [
    { src: '/images/carousel1-new/logo-1.png', alt: 'Scam Logo 1' },
    { src: '/images/carousel1-new/logo-2.png', alt: 'Scam Logo 2' },
    { src: '/images/carousel1-new/logo-3.png', alt: 'Scam Logo 3' },
    { src: '/images/carousel1-new/logo-4.png', alt: 'Scam Logo 4' },
    { src: '/images/carousel1-new/logo-5.png', alt: 'Scam Logo 5' },
    { src: '/images/carousel1-new/logo-6.png', alt: 'Scam Logo 6' },
    { src: '/images/carousel1-new/logo-7.png', alt: 'Scam Logo 7' },
    { src: '/images/carousel1-new/logo-8.png', alt: 'Scam Logo 8' },
    { src: '/images/carousel1-new/logo-9.png', alt: 'Scam Logo 9' },
    { src: '/images/carousel1-new/logo-10.png', alt: 'Scam Logo 10' },
    { src: '/images/carousel1-new/logo-11.png', alt: 'Scam Logo 11' },
    { src: '/images/carousel1-new/logo-12.png', alt: 'Scam Logo 12' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // We show 4 logos on desktop, 3 on tablet, 2 on mobile
  const maxIndex = logos.length - 4;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <div className="py-8 lg:py-12 bg-white font-sans border-b border-[var(--brand-soft)] overflow-hidden">
      <div className="container max-w-[1208px] mx-auto px-4">
        <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-primary)] text-center mb-6 lg:mb-8 font-raleway">
          Some of the frauds we investigated
        </h3>

        <div className="relative max-w-[1000px] mx-auto px-10">
          {/* Slider track */}
          <div className="overflow-hidden">
            <div
              className="flex items-center transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {logos.map((logo, idx) => (
                <div
                  key={idx}
                  className="w-1/2 sm:w-1/3 xl:w-1/4 flex-shrink-0 flex items-center justify-center p-4 h-[64px]"
                >
                  <div className="relative w-[120px] h-[48px] flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={96}
                      height={40}
                      className="max-h-[40px] w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous logos"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-[var(--brand-primary)] hover:text-[var(--brand-deep)]"
          >
            <Image
              src="/elements/carousel-chevron-left.svg"
              alt="Previous"
              width={20}
              height={20}
            />
          </button>

          {/* Right arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next logos"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-[var(--brand-primary)] hover:text-[var(--brand-deep)]"
          >
            <Image
              src="/elements/carousel-chevron-right.svg"
              alt="Next"
              width={20}
              height={20}
            />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: 4 }).map((_, dIdx) => (
              <button
                key={dIdx}
                onClick={() => setCurrentIndex(dIdx * 2)}
                aria-label={`Go to slide ${dIdx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  Math.floor(currentIndex / 2) === dIdx ? 'bg-[var(--brand-primary)]' : 'bg-[#cbd4f1]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersBar;
