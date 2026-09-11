import React from 'react';

export const OurMissionSection: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 xl:py-10 font-sans">
      <div className="container max-w-[1208px] mx-auto px-4">
        <div className="flex flex-col items-center xl:flex-row-reverse xl:justify-end xl:w-[1048px] xl:mx-auto">
          {/* Right Illustration Column */}
          <div className="flex items-center justify-center xl:mb-0 xl:ml-[236px]">
            <div
              className="w-[104px] h-[104px] sm:w-[112px] sm:h-[112px] md:w-[120px] md:h-[120px] lg:w-[128px] lg:h-[128px] xl:w-[192px] xl:h-[192px] bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: 'url(/icons/about-us/our-mission.svg)' }}
              aria-hidden="true"
            />
          </div>

          {/* Left Content Column */}
          <div className="flex flex-col items-center xl:items-start xl:w-[480px]">
            <h2 className="text-[28px] sm:text-[34px] xl:text-[40px] leading-tight xl:leading-[48px] font-bold text-[var(--brand-deep)] text-center xl:text-left mt-6 xl:mt-0 mb-4 xl:mb-4">
              Our Mission
            </h2>

            <p className="text-[15px] sm:text-[16px] leading-[24px] text-[#616267] text-center xl:text-left max-w-[470px] xl:max-w-[584px] xl:w-[480px] mb-0">
              To empower Individuals &amp; Businesses who have suffered losses due to scams by equipping them with the necessary tools and expert guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
