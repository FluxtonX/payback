import React from 'react';
import Image from 'next/image';
import IntakeForm from './IntakeForm';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#112152] text-[#b7c3e8] pt-8 sm:pt-12 xl:pt-24 pb-8 xl:pb-16 font-sans relative overflow-hidden">
      <div className="container max-w-[1208px] mx-auto px-4">
        <div className="xl:flex xl:items-start xl:justify-between relative">
          {/* Left Column: Headline, Subtitle, Desktop 'As Seen in' */}
          <div className="xl:max-w-[688px] text-center xl:text-left">
            <h1 className="text-[32px] sm:text-[42px] md:text-[48px] xl:text-[56px] font-extrabold text-[#f4f4f4] leading-[40px] sm:leading-[48px] md:leading-[56px] xl:leading-[64px] mb-4 xl:mb-6">
              <span className="text-[#ffd700]">Get your money back</span> from a scam
            </h1>

            <p className="text-[16px] sm:text-[18px] xl:text-[20px] text-[#edf2ff] leading-[26px] sm:leading-[28px] xl:leading-[32px] max-w-[584px] mx-auto xl:mx-0 mb-8 xl:mb-20">
              Thousands of clients used our Investigation Report to retrieve their losses. Start with securing a free consultation now
            </p>

            {/* Desktop 'As Seen In' (show-xl) */}
            <div className="hidden xl:flex items-center gap-6 text-[#a0a6ba]">
              <p className="text-[#edf2ff] font-medium text-[16px]">As seen in:</p>
              <div className="flex items-center gap-6">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.ibtimes.com.au/unveiling-payback-ltd-hope-scam-victims-australia-1846718"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/icons/ibtimes.svg"
                    alt="IBTimes"
                    width={131}
                    height={32}
                    className="h-8 w-auto brightness-200"
                  />
                </a>
                <span className="h-6 w-px bg-[#a0a6ba]/40" />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://nywire.com/how-payback-ltd-recoups-millions-for-victims-of-financial-fraud-in-the-us/"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/icons/nywire.svg"
                    alt="New York Wire"
                    width={257}
                    height={28}
                    className="h-7 w-auto brightness-200"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Intake Form Card */}
          <div className="w-full max-w-[420px] xl:max-w-[376px] mx-auto xl:mx-0 mt-8 xl:mt-0 relative z-20">
            <IntakeForm />
          </div>
        </div>

        {/* Mobile / Tablet 'As Seen In' (hide-xl) */}
        <div className="xl:hidden mt-10 pt-8 border-t border-[#1e3472] text-center">
          <p className="text-[#a0a6ba] text-[14px] font-medium mb-4">As seen in:</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ibtimes.com.au/unveiling-payback-ltd-hope-scam-victims-australia-1846718"
            >
              <Image
                src="/icons/ibtimes.svg"
                alt="IBTimes"
                width={131}
                height={32}
                className="h-7 w-auto brightness-200"
              />
            </a>
            <span className="h-5 w-px bg-[#a0a6ba]/40" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://nywire.com/how-payback-ltd-recoups-millions-for-victims-of-financial-fraud-in-the-us/"
            >
              <Image
                src="/icons/nywire.svg"
                alt="New York Wire"
                width={257}
                height={28}
                className="h-6 w-auto brightness-200"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
