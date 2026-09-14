import React from 'react';

export const AboutHero: React.FC = () => {
  return (
    <section className="mt-2 font-sans">
      <div className="container max-w-[1208px] mx-auto px-4">
        <div className="flex flex-col items-center xl:flex-row-reverse xl:justify-end xl:w-[1048px] xl:mx-auto">
          {/* Right Illustration Column */}
          <div className="flex items-center justify-center xl:mb-0 xl:ml-[236px]">
            <div
              className="w-[104px] h-[104px] sm:w-[112px] sm:h-[112px] md:w-[120px] md:h-[120px] lg:w-[128px] lg:h-[128px] xl:w-[192px] xl:h-[192px] bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: 'url(/icons/about-us/about.svg)' }}
              aria-hidden="true"
            />
          </div>

          {/* Left Content Column */}
          <div className="flex flex-col items-center xl:items-start xl:w-[480px]">
            <h1 className="text-[28px] sm:text-[34px] xl:text-[40px] leading-tight xl:leading-[48px] font-bold text-[var(--brand-deep)] text-center xl:text-left mt-6 xl:mt-2 mb-4 xl:mb-4">
              About Us
            </h1>

            <p className="text-[15px] sm:text-[16px] leading-[24px] text-[#616267] text-center xl:text-left max-w-[470px] xl:max-w-[584px] xl:w-[480px] mb-0">
              Founded in 2017, Online Reclaims has been at the forefront of the battle against online fraud. We have quickly established ourselves as the leader in the field. With a proven track record, we have successfully recovered over $41 million for scam victims worldwide as of 2025 and are still going strong.
            </p>

            <p className="mt-4 text-[14px] leading-[20px] text-[#a0a6ba] text-center xl:text-left max-w-[470px] xl:max-w-[584px] xl:w-[480px]">
              Registered under the Ministry of Justice in Israel (Reg No. 515711653), ASIC (Reg No. 562295), proud members of AFCA (Reg No. 109819), and with a{' '}
              <a
                href="https://www.dnb.com/business-directory/company-profiles.money_back_ltd.58bd6a362fe51694f07c43d6170082f3.html"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-[var(--brand-deep)] transition-colors"
              >
                Dun &amp; Bradstreet
              </a>{' '}
              Credibility Mark.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
