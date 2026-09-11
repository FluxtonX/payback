'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ScamHeroProps {
  scamType: string;
  title?: React.ReactNode;
}

const scamOptions = [
  'Binary options',
  'Digital Currency',
  'Forex',
  'Stock Trading',
  'Property scam',
  'Romance scam',
  'Financial scams',
  'Credit card phishing',
  'Other scam',
];

export const ScamHero: React.FC<ScamHeroProps> = ({ scamType, title }) => {
  const router = useRouter();
  const [selectedScam, setSelectedScam] = useState(scamType || 'Binary options');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/contact-us/');
  };

  return (
    <>
      <section className="relative bg-[var(--brand-primary)] text-[#f4f4f4] pt-8 pb-12 sm:pt-10 sm:pb-14 xl:pt-14 xl:pb-16 font-sans">
        <div className="container max-w-[1208px] mx-auto px-4 flex flex-col items-center text-center relative">
          {/* Main H1 Title */}
          <h1 className="text-[34px] sm:text-[46px] xl:text-[60px] font-extrabold leading-[42px] sm:leading-[54px] xl:leading-[68px] max-w-[760px] text-white">
            {title || (
              <>
                <span className="text-[#ffd700]">Get your money back</span> from {scamType} scam
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-[16px] sm:text-[18px] text-[var(--brand-soft)] max-w-[500px] mt-4 mb-8 sm:mb-10 leading-[26px]">
            Thousands of clients used our Investigation Report to retrieve their losses. Start with a free consultation
          </p>

          {/* Intake Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-[376px] flex flex-col gap-4">
            <div className="relative text-left">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-[52px] bg-white text-[var(--brand-deep)] px-4 flex items-center justify-between text-[15px] font-medium rounded-none border border-transparent focus:outline-none"
              >
                <span>{selectedScam}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute top-[54px] left-0 w-full bg-white text-[var(--brand-deep)] shadow-lg z-30 divide-y divide-[#f4f4f4]">
                  {scamOptions.map((opt) => (
                    <div
                      key={opt}
                      onClick={() => {
                        setSelectedScam(opt);
                        setIsOpen(false);
                      }}
                      className={`px-4 py-3 text-[14px] cursor-pointer hover:bg-[var(--brand-soft)] hover:text-[var(--brand-primary)] transition-colors ${
                        selectedScam === opt ? 'bg-[var(--brand-soft)] font-semibold text-[var(--brand-primary)]' : ''
                      }`}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-[52px] bg-[#ffd700] hover:bg-[#ffe661] text-[var(--brand-primary)] font-bold text-[16px] transition-colors rounded-none flex items-center justify-center shadow-sm"
            >
              Get a free consultation
            </button>
          </form>

          {/* Desktop Overlapping 100% Money Back Stamp Badge (down right side of hero) */}
          <div className="hidden md:block absolute right-0 bottom-0 translate-y-1/2 z-20 pointer-events-auto">
            <div className="w-[124px] h-[124px] xl:w-[136px] xl:h-[136px] rounded-full drop-shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105">
              <Image
                src="/elements/money-back-stamp.svg"
                alt="Money Back 100%"
                width={136}
                height={136}
                className="w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Money Back Bar (down side of hero on mobile) */}
      <div className="md:hidden flex items-center justify-center py-2.5 bg-[#f4f4f4] text-[var(--brand-deep)] font-bold text-[15px] border-b border-gray-200">
        <div className="w-8 h-8 mr-2 flex-shrink-0">
          <Image
            src="/elements/money-back-stamp.svg"
            alt="Money Back 100%"
            width={32}
            height={32}
            className="w-full h-full"
          />
        </div>
        <span>Money Back Guarantee</span>
      </div>
    </>
  );
};

export default ScamHero;
