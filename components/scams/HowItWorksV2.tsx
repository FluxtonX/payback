'use client';

import React from 'react';
import Image from 'next/image';

interface StepItem {
  id: number;
  title: string;
  desc: string;
  icon: string;
  withBorder?: boolean;
}

const steps: StepItem[] = [
  {
    id: 1,
    title: 'Review your case',
    desc: 'Based on our experience, we are performing preliminary checks to assess whether your case can result in a substantial retrieval of losses.',
    icon: '/icons/file-find.svg',
  },
  {
    id: 2,
    title: 'Gather the evidence',
    desc: 'We then gather every piece of evidence you have from your contact with the scammers along the way.',
    icon: '/icons/file.svg',
  },
  {
    id: 3,
    title: 'Investigation Report',
    desc: 'We investigate your case and the people who scammed you to provide a detailed Investigation Report.',
    icon: '/icons/report.svg',
    withBorder: true,
  },
  {
    id: 4,
    title: 'Action Plan',
    desc: "With our investigation Report, you'll receive a step-by-step action plan explaining how we believe you can retrieve your losses.",
    icon: '/icons/plan.svg',
    withBorder: true,
  },
  {
    id: 5,
    title: 'Expert Assistance',
    desc: 'Our team of experts can guide you in the execution of the recommended action plan.',
    icon: '/icons/expert-assistance.svg',
  },
  {
    id: 6,
    title: 'Get your money back',
    desc: 'Once you successfully execute the suggested action plan, you could retrieve a substantial part, if not all, of your money.',
    icon: '/icons/money-back.svg',
  },
];

export const HowItWorksV2: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 xl:py-20 bg-white font-sans overflow-hidden">
      <div className="container max-w-[1048px] mx-auto px-4">
        {/* Title */}
        <h2 className="text-[28px] sm:text-[36px] xl:text-[40px] font-extrabold text-[var(--brand-deep)] text-center mb-10 sm:mb-14">
          How it works
        </h2>

        {/* 2-Column Exact Layout Grid (width: 1000px max, 2 columns on tablet/desktop) */}
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative bg-white p-6 sm:p-8 flex flex-col shadow-[8px_16px_32px_rgba(3,14,49,0.08)] transition-transform hover:-translate-y-1 ${
                step.withBorder
                  ? 'border-2 border-[var(--brand-primary)] bg-[var(--brand-soft)]/20'
                  : 'border border-gray-100'
              }`}
            >
              {/* Header line with icon and title */}
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-8 h-8 flex-shrink-0 relative">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  {step.title}
                </h4>
              </div>

              {/* Body Content */}
              <p className="text-[15px] leading-[24px] text-[#616267]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksV2;
