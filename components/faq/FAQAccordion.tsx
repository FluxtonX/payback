'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
  isDefault?: boolean;
}

export const faqData: FAQItem[] = [
  {
    question: 'How long does an average case take to complete?',
    answer:
      'Although our experienced team will look to complete your case (recover a substantial part if not all of your lost funds) as soon as possible, each case is unique. On average this process takes from 3 months to a year.',
    isDefault: true,
  },
  {
    question: 'What is the cost of pursuing a case via Payback?',
    answer:
      'Payback provides the tools you need to pursue your case in the form of a detailed Investigation Report that includes a suggested Action Plan for you to follow. Such a report costs $500, with an additional $750 per transaction.',
  },
  {
    question: "Why don't you charge me at the end of the process only?",
    answer:
      'Each case requires a significant amount of man-hours to investigate, process, and bring to successful completion. We charge a fixed fee to cover the costs of producing the investigation report, so it is necessary to arrange payment prior to the start of the investigation.',
  },
  {
    question: 'Where is Payback based?',
    answer: 'Payback is located in Ontario, Canada (100 King Street West, Suite 5600, Toronto, ON M5X 1C9).',
  },
  {
    question: 'How do I know that Payback isn’t a scam?',
    answer:
      'We believe that a question like that is best answered by the company’s clients. We invite you to check out the hundreds of great reviews by our clients to verify that we are a legitimate and reputable organization. We are also registered with the Israeli justice department, as well as this our staff will happily forward you the relevant credentials.',
  },
  {
    question: 'Why is Payback not regulated by the FCA (Financial Conduct Authority)?',
    answer:
      'We are an authorized and regulated Israeli company, based outside of the UK, hence we comply with the relevant legal exemption that applies to us. However, we do adhere to all relevant legal parameters as we go about securing the recovery of your lost assets.',
  },
  {
    question: 'Are you legal professionals?',
    answer:
      'The services are provided by and/or under the supervision of licensed attorneys. We primarily collaborate with a team of experts, including legal professionals, to conduct the investigation and produce the subsequent Investigation Report.',
  },
  {
    question: 'Will your actions lead to the taking of scammers to court?',
    answer:
      'No, our services do not include court representation. But, our methods of recovering your lost money involve Alternative Dispute Resolution outside of court in order to speed up things. So we deal with the banks and relevant agencies that made the relevant transaction. We found this is a far more effective means of securing the recovery of the funds.',
  },
  {
    question: 'Does it matter where I am based?',
    answer:
      'It doesn’t matter where you are based, our team can help you get your money back. So if you have the relevant documentation needed, we can help you regardless of your location.',
  },
];

export const FAQAccordion: React.FC = () => {
  // Store open state for each item (allowing multiple items to be toggled independently matching module 24667)
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({ 0: true });
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full mb-4 min-[414px]:mb-8 md:mb-12 xl:mb-20 mx-auto max-w-[470px] xl:max-w-[584px] font-sans">
      {faqData.map((item, idx) => {
        const isOpen = !!openItems[idx];

        return (
          <div key={idx} className="border-b border-[#a0a6ba]">
            <h4
              onClick={() => toggleItem(idx)}
              className="select-none relative cursor-pointer pr-10 py-4 min-[360px]:py-6 md:py-6 text-[var(--brand-primary)] font-bold text-[18px] leading-[24px] md:text-[24px] md:leading-[32px] xl:text-[20px] xl:leading-[24px] transition-colors"
            >
              <span>{item.question}</span>
              <span
                className={`absolute top-1/2 right-0 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 xl:w-6 xl:h-6 flex items-center justify-center transition-transform duration-300 ease-out ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                <Image
                  src="/elements/chevron-down.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="w-full h-full"
                />
              </span>
            </h4>
            <div
              ref={(el) => {
                contentRefs.current[idx] = el;
              }}
              style={{
                maxHeight: isOpen
                  ? `${contentRefs.current[idx]?.scrollHeight ? contentRefs.current[idx]!.scrollHeight + 40 : 500}px`
                  : '0px',
              }}
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
            >
              <div className="text-[#616267] text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] mb-4 min-[360px]:mb-6 md:mb-6">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
