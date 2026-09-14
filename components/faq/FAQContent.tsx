import React from 'react';
import Link from 'next/link';
import { FAQAccordion } from './FAQAccordion';

export const FAQContent: React.FC = () => {
  return (
    <section className="w-full text-[#616267] font-sans pb-16 md:pb-24 xl:pb-20">
      <div className="w-full max-w-[470px] md:max-w-[768px] xl:max-w-[1208px] px-4 md:px-6 xl:px-0 mx-auto">
        {/* Title */}
        <h2 className="max-w-[593px] mx-auto mt-2 mb-4 md:mb-6 text-center font-bold text-[var(--brand-primary)] text-[28px] leading-[32px] md:text-[32px] md:leading-[40px] xl:text-[40px] xl:leading-[48px]">
          Online Reclaims - How Does It Work?
        </h2>

        {/* Intro Paragraph */}
        <p className="mx-auto text-center text-[#616267] text-[16px] leading-[24px] max-w-[470px] xl:max-w-[792px] mb-6 min-[360px]:mb-4 md:mb-[72px] xl:mb-8">
          In order to better understand how Online Reclaims works, and the systems we have in place for the recovery of your funds, you’ll find below a series of frequently asked questions.
        </p>

        {/* Accordion */}
        <FAQAccordion />

        {/* Bottom Content */}
        <div className="flex flex-col gap-y-8 mt-16 min-[360px]:mt-[72px] min-[414px]:mt-20 md:mt-24 xl:mt-14 text-center max-w-[470px] xl:max-w-[792px] mx-auto text-[#616267] text-[16px] leading-[24px]">
          <p>
            If you still have questions regarding any of this, feel free to reach out to us and we’ll be happy to provide any information you require.
          </p>
          <p>
            You can contact us via phone or email, simply visit our{' '}
            <Link href="/contact-us/" className="text-[var(--brand-deep)] underline hover:text-[var(--brand-primary)] transition-colors">
              Contact Us
            </Link>{' '}
            page for the relevant details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQContent;
