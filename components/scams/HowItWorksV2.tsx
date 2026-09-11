import React from 'react';
import Image from 'next/image';

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: string;
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Review your case',
    desc: 'Our case managers examine the details of your case, review the documentation, and evaluate the likelihood of retrieving your funds.',
    icon: '/icons/file-find.svg',
  },
  {
    num: '02',
    title: 'Gather the evidence',
    desc: 'We collect all necessary evidence and identify key digital records, account statements, and communication logs to build an airtight file.',
    icon: '/icons/file.svg',
  },
  {
    num: '03',
    title: 'Investigation Report',
    desc: 'Our cyber and financial intelligence experts assemble a comprehensive forensic investigation report identifying the perpetrators.',
    icon: '/icons/report.svg',
  },
  {
    num: '04',
    title: 'Action Plan',
    desc: 'You receive a personalized roadmap mapping out every dispute strategy, regulatory escalation path, and legal avenue available.',
    icon: '/icons/plan.svg',
  },
  {
    num: '05',
    title: 'Expert Assistance',
    desc: 'Our team guides you through the restitution and recovery process, providing support with banks, payment processors, and agencies.',
    icon: '/icons/expert-assistance.svg',
  },
  {
    num: '06',
    title: 'Get your money back',
    desc: 'With our investigation report in hand and continuous expert support, take actionable steps toward reclaiming your stolen capital.',
    icon: '/icons/money-back.svg',
  },
];

export const HowItWorksV2: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white font-sans overflow-hidden">
      <div className="container max-w-[1208px] mx-auto px-4">
        <h2 className="text-[28px] sm:text-[34px] xl:text-[40px] font-bold text-[var(--brand-deep)] text-center mb-10 xl:mb-12">
          How it works
        </h2>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 xl:gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white border border-[var(--brand-primary)]/30 hover:border-[var(--brand-primary)] shadow-[8px_16px_32px_rgba(5,56,43,0.06)] p-5 flex flex-col justify-between transition-all hover:-translate-y-1 group"
            >
              <div>
                {/* Header line with icon and number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--brand-soft)] flex items-center justify-center group-hover:bg-[var(--brand-primary)] transition-colors">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={22}
                      height={22}
                      className="w-5 h-5 transition-all group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                  <span className="text-[14px] font-bold text-[var(--brand-accent)]">{step.num}</span>
                </div>

                <h3 className="text-[17px] font-bold text-[var(--brand-deep)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                  {step.title}
                </h3>

                <p className="text-[13px] leading-[20px] text-[#616267]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksV2;
