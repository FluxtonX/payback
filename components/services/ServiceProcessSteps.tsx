'use client';

import React from 'react';

interface StepItem {
  number: string;
  title: string;
  desc: string;
}

interface ServiceProcessStepsProps {
  title?: string;
  subtitle?: string;
  steps?: StepItem[];
}

const defaultSteps: StepItem[] = [
  {
    number: '01',
    title: 'Review your case',
    desc: "We’ll start by offering you a safe space to share your story. During your free and confidential consultation, we'll ask you to describe the details of the scam, answer your questions, and assess the best path forward.",
  },
  {
    number: '02',
    title: 'Gather the evidence',
    desc: "Once we understand your situation, we'll guide you through the process of collecting all crucial evidence related to the scam. We'll provide a detailed checklist leaving no stone unturned.",
  },
  {
    number: '03',
    title: 'Investigation Report',
    desc: "Our expert team will distill all forensic findings into a clear, comprehensive report. This isn't just technical jargon; it is the evidentiary dossier you’ll use to pursue your recovery.",
  },
  {
    number: '04',
    title: 'Action Plan',
    desc: "Based on findings in your investigation report, we develop a personalized action plan outlining specific steps and regulatory channels to reclaim your stolen assets.",
  },
  {
    number: '05',
    title: 'Expert Assistance',
    desc: 'Our team will be by your side as we guide you through the execution of your Action Plan, offering our specialized knowledge to navigate complex disputes and restitution procedures.',
  },
  {
    number: '06',
    title: 'Get your money back',
    desc: 'Our ultimate goal is to give you the tools and evidence needed to reclaim your assets and recover a substantial part, if not all, of your stolen funds.',
  },
];

export const ServiceProcessSteps: React.FC<ServiceProcessStepsProps> = ({
  title = 'How it works',
  subtitle = 'Our proven forensic investigation methodology designed to build undeniable evidence.',
  steps = defaultSteps,
}) => {
  return (
    <section className="py-12 lg:py-20 bg-[#F4F7F5] font-sans">
      <div className="container max-w-[1208px] mx-auto px-4">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-[28px] sm:text-[34px] xl:text-[40px] font-bold text-[var(--brand-deep)] mb-3 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[15px] sm:text-[16px] leading-[24px] text-[#616267] max-w-[680px] mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#a0a6ba]/30 rounded-xl p-6 lg:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[28px] font-extrabold text-[var(--brand-primary)]">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#eef7ee] flex items-center justify-center text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-[20px] font-bold text-[var(--brand-deep)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-[23px] text-[#616267]">
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

export default ServiceProcessSteps;
