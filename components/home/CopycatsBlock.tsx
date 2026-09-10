import React from 'react';
import Link from 'next/link';

export const CopycatsBlock: React.FC = () => {
  return (
    <section className="py-12 xl:py-16 pb-0 xl:pb-0 bg-white font-sans">
      <div className="container max-w-[1208px] mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:justify-end xl:w-[1000px] xl:mx-auto xl:gap-[236px] items-center">
          {/* Desktop Right Illustration (visible on xl) */}
          <div className="hidden xl:flex items-center justify-center mb-0">
            <div
              className="w-[192px] h-[192px] bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: 'url(/icons/desktop/boci.svg)' }}
              aria-hidden="true"
            />
          </div>

          {/* Left Content Column */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left w-full xl:w-auto xl:ml-0">
            {/* Mobile / Tablet Icon (hidden on xl) */}
            <div className="xl:hidden">
              <div
                className="w-[104px] h-[104px] sm:w-[120px] sm:h-[120px] bg-no-repeat bg-center bg-cover mx-auto mb-6"
                style={{ backgroundImage: 'url(/icons/desktop/boci.svg)' }}
                aria-hidden="true"
              />
            </div>

            <h2 className="text-[28px] sm:text-[34px] xl:text-[40px] font-bold text-[#030e31] mb-6 xl:mb-4 max-w-[584px] xl:w-[480px] leading-tight">
              Beware of copycats &amp; imposters
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#616267] leading-[26px] max-w-[470px] xl:max-w-[584px] xl:w-[480px] mb-8">
              Scammers go as far as posing as legitimate scam recovery companies and even present themselves as Payback. So it&#x27;s important to remember:
              <br />
              a) Our emails end with: @payback.com
              <br />
              b) We would NEVER ask you to send us money via Crypto.
            </p>

            <Link
              href="/black-list-imposters-copycats/"
              className="block w-full max-w-[344px] sm:max-w-[376px] py-3 text-center text-[16px] font-medium font-sans text-[#030e31] border border-[#112152] bg-transparent hover:bg-[#112152] hover:text-[#f4f4f4] transition-colors"
            >
              Browse the full list
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopycatsBlock;
