import React from 'react';

export const ReclaimTimeStatement: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 xl:py-16 font-sans">
      <div className="container max-w-[1000px] mx-auto px-4">
        <div className="bg-white shadow-[8px_16px_32px_0_rgba(3,14,49,0.08)] py-8 px-6 sm:py-12 sm:px-16 xl:py-12 xl:px-24 flex flex-col items-center text-center">
          <div className="text-[15px] sm:text-[16px] text-[#616267] leading-[24px] max-w-[584px] mx-auto">
            If you&#x27;re reading this, there&#x27;s a strong chance you&#x27;ve fallen victim to a scam. We want you to know that you&#x27;re not alone—thousands of individuals experience similar losses yearly. At Online Reclaims, we are dedicated to providing the support you need. Contact us today to access the resources and expertise you need.
          </div>
          <p className="mt-4 text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
            It&#x27;s Time to Reclaim What's Yours!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReclaimTimeStatement;
