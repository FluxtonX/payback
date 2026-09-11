import React from 'react';
import Image from 'next/image';

export const PbIsBackStatement: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 font-sans">
      <div className="container max-w-[1000px] mx-auto px-4">
        <div className="bg-white shadow-[8px_16px_32px_0_rgba(3,14,49,0.08)] p-6 sm:p-8 md:p-12 lg:py-12 lg:px-24 flex flex-col items-center">
          {/* Icon on mobile/tablet (hide-xl) */}
          <div className="block xl:hidden mb-6">
            <Image
              src="/icons/pbIsBack.svg"
              alt="Payback is back"
              width={136}
              height={136}
              className="w-[120px] h-[120px] sm:w-[136px] sm:h-[136px]"
            />
          </div>

          <p className="text-[var(--brand-primary)] font-medium text-[15px] sm:text-[16px] mb-1 text-center">
            Statement on recent events:
          </p>
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-[var(--brand-deep)] text-center mb-6 lg:mb-10 leading-tight">
            Payback is back
          </h2>

          <div className="w-full xl:flex xl:items-center xl:justify-between xl:gap-12">
            <div className="xl:max-w-[480px] text-center sm:text-left text-[#616267] text-[15px] sm:text-[16px] leading-[24px] space-y-6">
              <p>
                As you may be aware, the U.S. Department of Justice (DOJ) and the FBI have conducted an investigation into a number of recovery companies, including Payback. Payback fully cooperated with the authorities throughout their investigation and we are pleased with their decision to return our website in order to resume our operations in the US.
              </p>
              <p>
                This inquiry into Payback was an opportunity for us to perfect our product and services and ensure stricter compliance with applicable US law. We look forward to continuing our work helping victims of online scam get their money back.
              </p>
            </div>

            {/* Icon on desktop (show-xl) */}
            <div className="hidden xl:block flex-shrink-0">
              <Image
                src="/icons/pbIsBack.svg"
                alt="Payback is back"
                width={192}
                height={192}
                className="w-[192px] h-[192px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PbIsBackStatement;
