import React from 'react';

export const ContactUsHeader: React.FC = () => {
  return (
    <div className="max-w-[470px] md:max-w-[720px] mx-auto px-4 md:px-0 my-2 md:mt-2 md:mb-12 text-center font-sans">
      <h1 className="font-extrabold text-[32px] leading-[40px] sm:text-[42px] sm:leading-[48px] md:text-[48px] md:leading-[56px] xl:text-[56px] xl:leading-[64px] text-[#030e31] mb-2 md:mb-4">
        <span>Contact us now to get </span>
        <span className="text-[#ffd700]">your money Back!</span>
      </h1>
      <p className="text-[#616267] text-[15px] sm:text-[16px] leading-[24px] max-w-[584px] mx-auto">
        If you’ve been ripped off by scammers, get in touch and our team of experts will work to get your money back
      </p>
    </div>
  );
};

export default ContactUsHeader;
