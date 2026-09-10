import React from 'react';

export const OfferInfoSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 font-sans">
      <div className="container max-w-[1000px] mx-auto px-4">
        <div className="bg-white shadow-[8px_16px_32px_0_rgba(3,14,49,0.08)] py-8 px-6 sm:py-12 sm:px-16 lg:py-12 lg:px-24 flex flex-col items-center text-center">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#030e31] mb-6 lg:mb-8 leading-tight">
            What you should know about our offer
          </h2>
          <div className="text-[15px] sm:text-[16px] text-[#616267] leading-[24px] max-w-[584px] mx-auto">
            We offer Investigation services. These services come in the form of an Investigation Report along with a suggested Action Plan. You can then use these as tools to get your money back yourself.
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferInfoSection;
