import React from 'react';
import Link from 'next/link';

export const StatsCallout: React.FC = () => {
  return (
    <aside className="bg-[#112152] py-12 lg:py-16 font-sans">
      <div className="container max-w-[1208px] mx-auto px-4 flex flex-col xl:flex-row justify-center items-center gap-8 xl:gap-10">
        {/* Left column */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left xl:w-[480px]">
          <h2 className="text-[28px] sm:text-[34px] xl:text-[40px] font-bold text-[#f4f4f4] mb-2 xl:mb-2 leading-tight">
            Money retrieved
          </h2>
          <div className="text-[16px] xl:text-[18px] text-[#f4f4f4] mb-4 xl:mb-4">
            (Last Update: Dec 2025)
          </div>

          {/* Mobile / tablet number (hide on xl) */}
          <h3 className="xl:hidden text-[48px] sm:text-[60px] leading-[64px] sm:leading-[80px] font-extrabold text-[#ffd700] mb-4 font-sans">
            $41,073,743
          </h3>

          <p className="text-[15px] sm:text-[16px] text-[#edf2ff] leading-[26px] mb-6 max-w-[584px]">
            We provide tools and guidance to individuals and businesses in their pursuit of money they lost to scammers. Our goal is continually improving our services&#x27; effectiveness, so we believe in openly displaying our results.
          </p>

          <Link
            href="/contact-us/"
            className="inline-block py-3 px-8 bg-[#ffd700] text-[#112152] font-semibold text-[16px] hover:bg-[#ffe661] hover:border-[#ffe661] transition-colors border border-[#ffd700] text-center w-full sm:w-auto"
          >
            Get a free consultation
          </Link>
        </div>

        {/* Right column (desktop display of stat on xl) */}
        <div className="hidden xl:flex w-[480px] justify-center items-center">
          <h3 className="text-[72px] leading-[104px] font-extrabold text-[#ffd700] font-sans">
            $41,073,743
          </h3>
        </div>
      </div>
    </aside>
  );
};

export default StatsCallout;
