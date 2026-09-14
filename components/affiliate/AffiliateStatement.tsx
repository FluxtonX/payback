import React from 'react';

export const AffiliateStatement: React.FC = () => {
  return (
    <section className="font-sans">
      <div className="w-full max-w-[642px] min-[1366px]:max-w-[1000px] mx-auto px-4 md:px-6 my-16 md:my-20 min-[1366px]:my-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[var(--brand-deep)] font-semibold text-[32px] leading-[40px] md:text-[40px] md:leading-[48px] mb-6 md:mb-8 text-center m-0">
            How To Get Started
          </h2>
          <div className="max-w-[584px] text-[#616267] text-center text-[16px] leading-[24px]">
            If you want to become one of our affiliates or get more information about the program itself, feel free to email us at
          </div>
          <p className="mt-2 text-[16px] leading-[24px] text-center m-0">
            <a
              href="mailto:affiliates@Online Reclaims.com"
              className="text-[var(--brand-deep)] font-medium underline hover:text-[var(--brand-accent)] transition-colors"
            >
              affiliates@Online Reclaims.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AffiliateStatement;
