'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AccordionItemData {
  title: string;
  paragraphs: string[];
}

const faqData: AccordionItemData[] = [
  {
    title: 'About Payback',
    paragraphs: [
      'PayBack has only one mission: to protect people from frauds and scams online worldwide, whatever it takes. We help victims of online fraud retrieve what is rightfully theirs using our Investigation Reports and tailored Action plans.',
      'Although several types of scams have stood the test of time and are constantly growing in number of victims, new scams constantly pop up. Our job is to stay updated on both old and new scams to help the victims and inform our clients on how to stay safe in the future.',
      'We aim to be the number one company in the world to whom people can turn when they try to protect themselves from scams or when they need the tools to fight back after being a victim.',
    ],
  },
  {
    title: 'How do Our Investigation Reports help retrieve losses?',
    paragraphs: [
      'Very often, recovering losses from a scam doesn’t require a lawyer, court, or the legal system in general. Processes such as ADR allow one to retrieve money lost to a scam without a lengthy legal procedure. Yet to do that, one needs to be familiar with the ADR process, with the intricacies of the bodies involved, and armed with the needed evidence.',
      'This is where our Investigation Reports come in handy. The investigation report not only finds and gathers all the needed evidence in one place, but it also provides a suggested Action Plan that guides our clients through the retrieval processes (such as ADR) and shows them step-by-step how to navigate them and what exactly they should do to retrieve their losses.',
    ],
  },
  {
    title: 'Do all cases end with a successful outcome?',
    paragraphs: [
      'Unfortunately, no. For example, some scams involve people taking cash from their victims. Such cases rarely have a successful outcome, and we make sure people who come to us with such cases know it. It is very important to us to be transparent with our clients, and we make sure to give them an honest and straightforward assessment of their case and what we believe they can expect in terms of retrieval of losses. So, if we believe you can do nothing to retrieve your money, we will tell you so immediately.',
    ],
  },
  {
    title: 'How do I know if I have a chance of retrieving my money?',
    paragraphs: [
      'This is exactly why our “Free consultation call” practice is in place. It gives you a chance to tell us what happened and get our initial thoughts free of charge. Once we present our opinion and similar cases we’ve dealt with before, you can make a more educated decision about whether our services are for you or not. So, before making a decision, secure a free consultation, and let’s move on from there.',
    ],
  },
];

export const FaqAccordionSection: React.FC = () => {
  // First item open by default (Accordion_default__QqtSt)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 lg:py-20 font-sans">
      <div className="container max-w-[1208px] mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[var(--brand-deep)] text-center max-w-[700px] mb-6 md:mb-10 leading-tight">
            More about Payback and our Fraud Investigation Services
          </h2>

          <div className="w-full max-w-[470px] md:max-w-[584px] mx-auto">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="border-b border-[#a0a6ba]">
                  <h4
                    onClick={() => toggleItem(idx)}
                    className="relative py-4 md:py-6 pr-10 cursor-pointer select-none text-[20px] md:text-[24px] font-bold text-[var(--brand-deep)] leading-snug flex items-center justify-between"
                  >
                    <span>{item.title}</span>
                    <span
                      className={`w-6 h-6 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      <Image
                        src="/elements/chevron-down.svg"
                        alt=""
                        width={24}
                        height={24}
                        aria-hidden="true"
                      />
                    </span>
                  </h4>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[800px] opacity-100 pb-6 md:pb-8' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-[#616267] space-y-4 md:space-y-6">
                      {item.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordionSection;
