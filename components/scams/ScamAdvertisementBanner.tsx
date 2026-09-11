'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ScamAdvertisementBannerProps {
  title?: string;
  description?: string;
}

export const ScamAdvertisementBanner: React.FC<ScamAdvertisementBannerProps> = ({
  title = 'Binary Options Scam: Retrieve Your Lost Funds',
  description = "If you had the misfortune of getting scammed by one of thousands of fraudulent Binary Options brokers, we're here to help you get to the bottom of what happened. The sooner we start investigating, the sooner you'll have the tools you need to reclaim what's yours.",
}) => {
  return (
    <aside className="bg-[var(--brand-primary)] text-white font-sans py-12 sm:py-14 xl:py-16">
      <div className="container max-w-[1048px] mx-auto px-4 flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12">
        {/* Left Column: Heading, text, yellow CTA button */}
        <div className="w-full xl:w-[540px] flex flex-col items-center xl:items-start text-center xl:text-left">
          {/* Mobile Image (shown only on mobile/tablet) */}
          <div className="xl:hidden mb-6 flex justify-center">
            <Image
              src="/icons/binary-icon.svg"
              alt="Scam Recovery Investigation"
              width={156}
              height={128}
              className="w-auto h-[110px] sm:h-[128px] object-contain"
            />
          </div>

          <h2 className="text-[28px] sm:text-[36px] xl:text-[40px] font-extrabold text-[#f4f4f4] leading-[36px] sm:leading-[44px] xl:leading-[48px] mb-4">
            {title}
          </h2>

          <p className="text-[#edf2ff] text-[15px] sm:text-[16px] leading-[26px] mb-8 max-w-[540px]">
            {description}
          </p>

          <Link
            href="/contact-us/"
            className="h-[52px] px-8 bg-[#ffd700] hover:bg-[#ffe661] text-[var(--brand-primary)] font-bold text-[16px] transition-colors rounded-none flex items-center justify-center shadow-md"
          >
            Get a free consultation
          </Link>
        </div>

        {/* Right Column: Large Desktop SVG Illustration */}
        <div className="hidden xl:flex w-[400px] justify-center items-center flex-shrink-0">
          <Image
            src="/icons/binary-icon.svg"
            alt="Scam Recovery Investigation"
            width={234}
            height={192}
            className="w-[234px] h-[192px] object-contain"
          />
        </div>
      </div>
    </aside>
  );
};

export default ScamAdvertisementBanner;
