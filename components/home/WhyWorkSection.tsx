import React from 'react';
import Link from 'next/link';

export const WhyWorkSection: React.FC = () => {
  return (
    <section className="py-12 xl:py-16 pb-0 xl:pb-0 bg-white font-sans">
      <div className="container max-w-[1208px] mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:justify-end xl:w-[1000px] xl:mx-auto xl:gap-[236px] items-center">
          {/* Desktop Right Illustration (placed first in DOM, visible on xl) */}
          <div className="hidden xl:flex items-center justify-center mb-0">
            <div
              className="w-[192px] h-[192px] bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: 'url(/icons/desktop/hands.svg)' }}
              aria-hidden="true"
            />
          </div>

          {/* Left Content Column */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left w-full xl:w-auto xl:ml-0">
            {/* Mobile / Tablet Icon (hidden on xl) */}
            <div className="xl:hidden">
              <div
                className="w-[104px] h-[104px] sm:w-[120px] sm:h-[120px] bg-no-repeat bg-center bg-cover mx-auto mb-6"
                style={{ backgroundImage: 'url(/icons/desktop/hands.svg)' }}
                aria-hidden="true"
              />
            </div>

            <h2 className="text-[28px] sm:text-[34px] xl:text-[40px] font-bold text-[var(--brand-deep)] mb-6 xl:mb-4 max-w-[584px] xl:w-[480px] leading-tight">
              Why work with us?
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#616267] leading-[26px] max-w-[470px] xl:max-w-[584px] xl:w-[480px]">
              We only take on cases we believe can result in a substantial retrieval and, therefore, worth investigating. That’s why we are entirely transparent when evaluating every case. If it can’t be done, we will tell you so. But if we feel there is a chance for full or partial retrieval, we&#x27;ll get to work immediately.
            </p>

            <Link
              href="/about-us/"
              className="mt-8 block w-full max-w-[344px] sm:max-w-[376px] py-3 text-center text-[16px] font-medium font-sans text-[var(--brand-deep)] border border-[var(--brand-primary)] bg-transparent hover:bg-[var(--brand-primary)] hover:text-[#f4f4f4] transition-colors"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkSection;
