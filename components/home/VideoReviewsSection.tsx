'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface VideoItem {
  id: number;
  url: string;
  preview: string;
  name: string;
  highlight?: boolean;
}

const allVideos: VideoItem[] = [
  {
    id: 45,
    url: 'https://www.youtube.com/embed/qRfOakNl-uA',
    preview: '/images/video/review-45.jpeg',
    name: 'Client Video Review #45',
    highlight: true,
  },
  {
    id: 110,
    url: 'https://www.youtube.com/embed/loMk7wB-2W8',
    preview: '/images/video/review-110.jpeg',
    name: 'Client Video Review #110',
  },
  {
    id: 107,
    url: 'https://www.youtube.com/embed/jt9umbb-v24',
    preview: '/images/video/review-107.jpeg',
    name: 'Client Video Review #107',
  },
  {
    id: 90,
    url: 'https://www.youtube.com/embed/UNxPQaliqSE',
    preview: '/images/video/review-90.jpeg',
    name: 'Client Video Review #90',
  },
  {
    id: 109,
    url: 'https://www.youtube.com/embed/OYMcxr8knhQ',
    preview: '/images/video/review-109.jpeg',
    name: 'Client Video Review #109',
  },
  {
    id: 108,
    url: 'https://www.youtube.com/embed/9lhrCrpZTPs',
    preview: '/images/video/review-108.jpeg',
    name: 'Client Video Review #108',
  },
  {
    id: 105,
    url: 'https://www.youtube.com/embed/u4rD1pDDphs',
    preview: '/images/video/review-105.jpeg',
    name: 'Client Video Review #105',
  },
  {
    id: 84,
    url: 'https://www.youtube.com/embed/t_CIe9nbqw8',
    preview: '/images/video/review-84.jpeg',
    name: 'Client Video Review #84',
  },
  {
    id: 87,
    url: 'https://www.youtube.com/embed/Jw9A39cQqYU',
    preview: '/images/video/review-87.jpeg',
    name: 'Client Video Review #87',
  },
  {
    id: 60,
    url: 'https://www.youtube.com/embed/vLNXmqFaEzI',
    preview: '/images/video/review-60.jpeg',
    name: 'Client Video Review #60',
  },
  {
    id: 103,
    url: 'https://www.youtube.com/embed/BNzD7cP4MeU',
    preview: '/images/video/review-103.jpeg',
    name: 'Client Video Review #103',
  },
  {
    id: 69,
    url: 'https://www.youtube.com/embed/mXO_qTX3RLk',
    preview: '/images/video/review-69.jpeg',
    name: 'Client Video Review #69',
  },
];

export const VideoReviewsSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [totalItems, setTotalItems] = useState(12);

  // Responsive items-per-slide detection matching live slick settings
  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      if (w >= 1208) {
        setItemsPerSlide(3);
        setTotalItems(12);
      } else if (w >= 768) {
        setItemsPerSlide(2);
        setTotalItems(12);
      } else {
        setItemsPerSlide(1);
        setTotalItems(6);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const visibleVideos = allVideos.slice(0, totalItems);
  const totalSlides = Math.ceil(totalItems / itemsPerSlide);

  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(Math.max(0, totalSlides - 1));
    }
  }, [totalSlides, currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-12 sm:py-16 xl:py-20 bg-white font-sans overflow-hidden">
      <div className="container max-w-[1208px] mx-auto px-4">
        <h2 className="text-[28px] sm:text-[32px] xl:text-[40px] leading-[32px] sm:leading-[40px] xl:leading-[48px] font-bold text-[var(--brand-deep)] text-center mb-10">
          Video reviews
        </h2>

        {/* Carousel Viewport */}
        <div className="relative overflow-hidden mb-6">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIdx) => {
              const slideVideos = visibleVideos.slice(
                slideIdx * itemsPerSlide,
                (slideIdx + 1) * itemsPerSlide
              );
              return (
                <div
                  key={slideIdx}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-1"
                >
                  {slideVideos.map((vid) => (
                    <div
                      key={vid.id}
                      onClick={() => setActiveVideo(vid.url)}
                      className="group relative cursor-pointer overflow-hidden h-[208px] md:h-[248px] xl:h-[302px] bg-[var(--brand-primary)] select-none"
                    >
                      <Image
                        src={vid.preview}
                        alt={vid.name}
                        fill
                        className="object-cover transition-opacity duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1208px) 50vw, 380px"
                      />

                      {/* Filter Overlay: Review #45 has gold highlight (.videoFilterHighlight) */}
                      {vid.highlight ? (
                        <span className="absolute inset-0 bg-[rgba(255,215,0,0.72)] transition-opacity" />
                      ) : (
                        <span className="absolute inset-0 bg-[rgba(17,33,82,0.72)] group-hover:bg-[rgba(17,33,82,0.5)] transition-colors" />
                      )}

                      {/* Play Button Overlay */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center pointer-events-none">
                        <svg
                          width="56"
                          height="56"
                          viewBox="0 0 56 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full transition-transform duration-200 group-hover:scale-105"
                        >
                          <path
                            d="M28.0001 4.66699C15.1341 4.66699 4.66675 15.1343 4.66675 28.0003C4.66675 40.8663 15.1341 51.3337 28.0001 51.3337C40.8661 51.3337 51.3334 40.8663 51.3334 28.0003C51.3334 15.1343 40.8661 4.66699 28.0001 4.66699ZM28.0001 46.667C17.7077 46.667 9.33341 38.2927 9.33341 28.0003C9.33341 17.708 17.7077 9.33366 28.0001 9.33366C38.2924 9.33366 46.6667 17.708 46.6667 28.0003C46.6667 38.2927 38.2924 46.667 28.0001 46.667Z"
                            fill="var(--brand-periwinkle)"
                            className="transition-colors group-hover:fill-[#ffd700]"
                          />
                          <path
                            d="M21 39.6663L39.6667 27.9997L21 16.333V39.6663Z"
                            fill="var(--brand-periwinkle)"
                            className="transition-colors group-hover:fill-[#ffd700]"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination & Arrows (Slick Style) */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <button
            onClick={handlePrev}
            aria-label="Previous videos"
            className="w-8 h-8 flex items-center justify-center hover:opacity-75 transition-opacity cursor-pointer"
          >
            <Image
              src="/elements/carousel-chevron-left.svg"
              alt="Previous"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2.5">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx
                    ? 'bg-[var(--brand-primary)] scale-125'
                    : 'bg-[#a0a6ba] opacity-50 hover:opacity-100'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next videos"
            className="w-8 h-8 flex items-center justify-center hover:opacity-75 transition-opacity cursor-pointer"
          >
            <Image
              src="/elements/carousel-chevron-right.svg"
              alt="Next"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* See More Link */}
        <div className="flex justify-center">
          <Link
            href="/testimonials/"
            className="block w-full max-w-[344px] sm:max-w-[376px] py-3 text-center text-[16px] font-medium font-sans text-[var(--brand-deep)] border border-[var(--brand-primary)] bg-transparent hover:bg-[var(--brand-primary)] hover:text-[#f4f4f4] transition-colors"
          >
            See more video reviews
          </Link>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 bg-[rgba(3,14,49,0.8)] z-[200] flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[95%] max-w-[1000px] aspect-video bg-black shadow-2xl"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-[#ffd700] transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
            <iframe
              src={`${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoReviewsSection;
