'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface VideoItem {
  id: number;
  url: string;
  preview: string;
}

const allVideos: VideoItem[] = [
  { id: 45, url: 'https://www.youtube.com/embed/qRfOakNl-uA', preview: '/images/video/review-45' },
  { id: 110, url: 'https://www.youtube.com/embed/loMk7wB-2W8', preview: '/images/video/review-110' },
  { id: 107, url: 'https://www.youtube.com/embed/jt9umbb-v24', preview: '/images/video/review-107' },
  { id: 90, url: 'https://www.youtube.com/embed/UNxPQaliqSE', preview: '/images/video/review-90' },
  { id: 109, url: 'https://www.youtube.com/embed/OYMcxr8knhQ', preview: '/images/video/review-109' },
  { id: 108, url: 'https://www.youtube.com/embed/9lhrCrpZTPs', preview: '/images/video/review-108' },
  { id: 105, url: 'https://www.youtube.com/embed/u4rD1pDDphs', preview: '/images/video/review-105' },
  { id: 84, url: 'https://www.youtube.com/embed/t_CIe9nbqw8', preview: '/images/video/review-84' },
  { id: 87, url: 'https://www.youtube.com/embed/Jw9A39cQqYU', preview: '/images/video/review-87' },
  { id: 60, url: 'https://www.youtube.com/embed/vLNXmqFaEzI', preview: '/images/video/review-60' },
  { id: 103, url: 'https://www.youtube.com/embed/BNzD7cP4MeU', preview: '/images/video/review-103' },
  { id: 69, url: 'https://www.youtube.com/embed/mXO_qTX3RLk', preview: '/images/video/review-69' },
  { id: 49, url: 'https://www.youtube.com/embed/d56j6a2719A', preview: '/images/video/review-49' },
  { id: 62, url: 'https://www.youtube.com/embed/c0Vw7JsmIkk', preview: '/images/video/review-62' },
  { id: 59, url: 'https://www.youtube.com/embed/0op67uvszLA', preview: '/images/video/review-59' },
  { id: 106, url: 'https://www.youtube.com/embed/6wDCkEnMLfQ', preview: '/images/video/review-106' },
  { id: 104, url: 'https://www.youtube.com/embed/fhTgk1k7JL0?autoplay=1', preview: '/images/video/review-104' },
  { id: 102, url: 'https://www.youtube.com/embed/B_b_77vD9jA', preview: '/images/video/review-102' },
  { id: 101, url: 'https://www.youtube.com/embed/6900iR72v44', preview: '/images/video/review-101' },
  { id: 100, url: 'https://www.youtube.com/embed/mIqN2B3gJ2s', preview: '/images/video/review-100' },
  { id: 99, url: 'https://www.youtube.com/embed/h0K8LzO_R4Q', preview: '/images/video/review-99' },
  { id: 98, url: 'https://www.youtube.com/embed/W3cDDjvzH34', preview: '/images/video/review-98' },
  { id: 97, url: 'https://www.youtube.com/embed/1ovpKMjLBpY', preview: '/images/video/review-97' },
  { id: 96, url: 'https://www.youtube.com/embed/dXdojg43EsU', preview: '/images/video/review-96' },
];

export const VideoReviewsGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const pageSize = 12;
  const totalPages = Math.ceil(allVideos.length / pageSize) || 10;
  const startIndex = (currentPage - 1) * pageSize;
  const displayedVideos = allVideos.slice(startIndex, startIndex + pageSize);

  return (
    <div className="w-full max-w-[470px] md:max-w-[768px] xl:max-w-[1300px] mx-auto px-4 md:px-6 xl:px-0 font-sans">
      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 xl:gap-x-10 gap-y-4 xl:gap-y-6">
        {displayedVideos.map((video) => {
          const isHighlight = video.id === 45;
          return (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video.url)}
              className="group relative h-[208px] md:h-[248px] xl:h-[296px] cursor-pointer overflow-hidden transition-opacity select-none"
            >
              {/* Filter Overlay */}
              <span
                className={`absolute inset-0 z-10 transition-colors ${
                  isHighlight
                    ? 'bg-[rgba(255,215,0,0.72)]'
                    : 'bg-[rgba(17,33,82,0.72)] group-hover:bg-[rgba(17,33,82,0.6)]'
                }`}
              />

              {/* Background Thumbnail */}
              <img
                src={`${video.preview}.jpeg`}
                alt={`Review ${video.id}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Play Button SVG */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 md:w-16 md:h-16 xl:w-[72px] xl:h-[72px] transition-transform group-hover:scale-105">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.0001 4.66699C15.1341 4.66699 4.66675 15.1343 4.66675 28.0003C4.66675 40.8663 15.1341 51.3337 28.0001 51.3337C40.8661 51.3337 51.3334 40.8663 51.3334 28.0003C51.3334 15.1343 40.8661 4.66699 28.0001 4.66699ZM28.0001 46.667C17.7077 46.667 9.33341 38.2927 9.33341 28.0003C9.33341 17.708 17.7077 9.33366 28.0001 9.33366C38.2924 9.33366 46.6667 17.708 46.6667 28.0003C46.6667 38.2927 38.2924 46.667 28.0001 46.667Z"
                    className="fill-[var(--brand-periwinkle)] group-hover:fill-[#ffd700] transition-colors"
                  />
                  <path
                    d="M21 39.6663L39.6667 27.9997L21 16.333V39.6663Z"
                    className="fill-[var(--brand-periwinkle)] group-hover:fill-[#ffd700] transition-colors"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Bar */}
      <div className="flex justify-center mt-10 xl:mt-12 select-none">
        <ul className="flex items-center list-none m-0 p-0 border border-[#f4f4f4] bg-[#f4f4f4]">
          {/* Double Left */}
          <li
            onClick={() => setCurrentPage(1)}
            className={`hidden md:flex items-center justify-center w-14 xl:w-16 h-12 md:h-14 cursor-pointer hover:bg-white transition-colors ${
              currentPage === 1 ? 'opacity-40 pointer-events-none' : ''
            }`}
          >
            <div className="relative w-7 h-7 flex items-center justify-center">
              <Image
                src="/elements/chevron-double-left.svg"
                alt="First"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
            </div>
          </li>

          {/* Single Left */}
          <li
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className={`flex items-center justify-center w-10 md:w-12 xl:w-16 h-12 md:h-14 cursor-pointer hover:bg-white transition-colors border-r border-[#e5e7eb] ${
              currentPage === 1 ? 'opacity-40 pointer-events-none' : ''
            }`}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <Image
                src="/elements/carousel-chevron-left.svg"
                alt="Previous"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </div>
          </li>

          {/* Page 1 */}
          <li
            onClick={() => setCurrentPage(1)}
            className={`relative flex items-center justify-center w-10 md:w-12 xl:w-16 h-12 md:h-14 font-medium text-[16px] cursor-pointer hover:bg-white transition-colors ${
              currentPage === 1 ? 'text-[var(--brand-primary)] font-bold bg-white' : 'text-[#616267]'
            }`}
          >
            1
            {currentPage === 1 && (
              <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#ffd700]" />
            )}
          </li>

          {/* Page 2 */}
          <li
            onClick={() => setCurrentPage(2)}
            className={`relative flex items-center justify-center w-10 md:w-12 xl:w-16 h-12 md:h-14 font-medium text-[16px] cursor-pointer hover:bg-white transition-colors ${
              currentPage === 2 ? 'text-[var(--brand-primary)] font-bold bg-white' : 'text-[#616267]'
            }`}
          >
            2
            {currentPage === 2 && (
              <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#ffd700]" />
            )}
          </li>

          {/* Page 3 */}
          <li
            onClick={() => setCurrentPage(3)}
            className={`relative flex items-center justify-center w-10 md:w-12 xl:w-16 h-12 md:h-14 font-medium text-[16px] cursor-pointer hover:bg-white transition-colors ${
              currentPage === 3 ? 'text-[var(--brand-primary)] font-bold bg-white' : 'text-[#616267]'
            }`}
          >
            3
            {currentPage === 3 && (
              <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#ffd700]" />
            )}
          </li>

          {/* Page 4 */}
          <li
            onClick={() => setCurrentPage(4)}
            className={`relative flex items-center justify-center w-10 md:w-12 xl:w-16 h-12 md:h-14 font-medium text-[16px] cursor-pointer hover:bg-white transition-colors ${
              currentPage === 4 ? 'text-[var(--brand-primary)] font-bold bg-white' : 'text-[#616267]'
            }`}
          >
            4
            {currentPage === 4 && (
              <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#ffd700]" />
            )}
          </li>

          {/* Ellipsis 10 */}
          <li
            onClick={() => setCurrentPage(10)}
            className={`relative flex items-center justify-center w-12 md:w-14 xl:w-16 h-12 md:h-14 font-medium text-[16px] cursor-pointer hover:bg-white transition-colors ${
              currentPage === 10 ? 'text-[var(--brand-primary)] font-bold bg-white' : 'text-[#616267]'
            }`}
          >
            ..10
            {currentPage === 10 && (
              <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#ffd700]" />
            )}
          </li>

          {/* Single Right */}
          <li
            onClick={() => setCurrentPage((p) => Math.min(10, p + 1))}
            className={`flex items-center justify-center w-10 md:w-12 xl:w-16 h-12 md:h-14 cursor-pointer hover:bg-white transition-colors border-l border-[#e5e7eb] ${
              currentPage === 10 ? 'opacity-40 pointer-events-none' : ''
            }`}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <Image
                src="/elements/carousel-chevron-right.svg"
                alt="Next"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </div>
          </li>

          {/* Double Right */}
          <li
            onClick={() => setCurrentPage(10)}
            className={`hidden md:flex items-center justify-center w-14 xl:w-16 h-12 md:h-14 cursor-pointer hover:bg-white transition-colors ${
              currentPage === 10 ? 'opacity-40 pointer-events-none' : ''
            }`}
          >
            <div className="relative w-7 h-7 flex items-center justify-center">
              <Image
                src="/elements/chevron-double-right.svg"
                alt="Last"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
            </div>
          </li>
        </ul>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-[var(--brand-deep)]/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-[1000px] aspect-video bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={activeVideo}
              title="Online Reclaims Client Testimonial"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#ffd700] text-[28px] font-bold transition-colors"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoReviewsGrid;
