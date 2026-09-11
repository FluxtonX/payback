import React from 'react';
import Link from 'next/link';

export const GuaranteeBlock: React.FC = () => {
  return (
    <section id="guaranteeBlock" className="py-12 xl:py-16 bg-white font-sans">
      <div className="container max-w-[1208px] mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:justify-start xl:w-[1000px] xl:mx-auto xl:gap-[236px] items-center">
          {/* Left Content Column */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left w-full xl:w-auto xl:mr-0">
            {/* Mobile / Tablet Icon (hidden on xl) */}
            <div className="xl:hidden">
              <div
                className="w-[104px] h-[104px] sm:w-[120px] sm:h-[120px] bg-no-repeat bg-center bg-cover mx-auto mb-6"
                style={{ backgroundImage: 'url(/icons/desktop/moneyback.svg)' }}
                aria-hidden="true"
              />
            </div>

            <h2 className="text-[28px] sm:text-[34px] xl:text-[40px] font-bold text-[var(--brand-deep)] mb-6 xl:mb-4 max-w-[584px] xl:w-[480px] leading-tight">
              Your money back guarantee
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#616267] leading-[26px] max-w-[470px] xl:max-w-[584px] xl:w-[480px] mb-8">
              Retrieving your losses can be a lengthy process, and it all starts with our investigation. Therefore, we must have your trust every step of the way. So, if for any reason you are doubtful, you can ask for a full refund within 14 business days.*
            </p>

            <Link
              href="/tnc/"
              className="block w-full max-w-[344px] sm:max-w-[376px] py-3 text-center text-[16px] font-medium font-sans text-[var(--brand-deep)] border border-[var(--brand-primary)] bg-transparent hover:bg-[var(--brand-primary)] hover:text-[#f4f4f4] transition-colors"
            >
              *Read Terms &amp; Conditions
            </Link>
          </div>

          {/* Desktop Right Illustration (visible on xl) */}
          <div className="hidden xl:flex items-center justify-center mb-0">
            <div
              className="w-[192px] h-[192px] bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: 'url(/icons/desktop/moneyback.svg)' }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeBlock;
