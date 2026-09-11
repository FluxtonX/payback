'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const InvestigationPackages: React.FC = () => {
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="py-12 lg:py-16 bg-white font-sans">
      <div className="container max-w-[1000px] mx-auto px-4">
        {/* Title and Subtitle */}
        <h2 className="text-[28px] sm:text-[32px] lg:text-[38px] font-bold text-[var(--brand-deep)] text-center mb-4 leading-tight">
          Purchase an Investigation Report
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#616267] text-center max-w-[633px] mx-auto mb-10 leading-[24px]">
          Skip the free consultation and start the investigation process right away. Once your payment is processed, our team will schedule an introduction call to get you started.
        </p>

        {/* ACFE Banner (border top and bottom) */}
        <div className="py-4 md:py-6 my-6 border-t border-b border-[#a0a6ba] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[#616267]">
          <p className="text-[15px] sm:text-[16px] font-normal text-center sm:text-left">
            Investigations lead by a Certified Fraud Examiner
          </p>
          <a
            href="https://www.acfe.com/"
            rel="noreferrer"
            target="_blank"
            className="block h-[52px]"
          >
            <Image
              src="/images/a-d.png"
              alt="acfe logo"
              width={125}
              height={52}
              className="h-[52px] w-auto object-contain"
            />
          </a>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-4 mb-4">
          {/* Card 1: Fraud Investigation Report */}
          <div className="bg-white border border-[#a0a6ba] p-6 xl:py-8 xl:px-5 flex flex-col justify-between">
            <div>
              <h3 className="text-[20px] sm:text-[24px] xl:text-[22px] font-bold text-[var(--brand-deep)] mb-5 min-h-[56px]">
                Fraud Investigation Report
              </h3>
              <div className="text-[40px] xl:text-[44px] font-semibold text-[var(--brand-deep)] leading-none mb-3">
                $3,500
              </div>
              <div className="text-[14px] text-[var(--brand-primary)] mb-5 h-6">
                + $750 per transaction
              </div>
              <div className="w-full h-px bg-[#a0a6ba] mb-6"></div>

              <p className="text-[16px] font-medium text-[var(--brand-deep)] mb-2">The service includes:</p>

              <div className="space-y-1">
                {[
                  {
                    key: 'c1_1',
                    title: 'Case Review',
                    body: 'Performing preliminary checks to assess whether your case can result in a substantial recovery, based on our experience.',
                  },
                  {
                    key: 'c1_2',
                    title: 'Evidence Gathering',
                    body: 'We then gather every piece of evidence you have from your contact with the scammers along the way.',
                  },
                  {
                    key: 'c1_3',
                    title: 'Investigation Report',
                    body: 'We investigate your case, and the company that scammed you to provide you with a detailed Investigation Report.',
                  },
                  {
                    key: 'c1_4',
                    title: 'Recommended Action Plan',
                    body: 'With our investigation report, you’ll receive a recommended step-by-step action plan that will explain how we believe you can recover your losses.',
                  },
                ].map((item) => (
                  <div key={item.key} className="border-b border-[var(--brand-soft)] last:border-0">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.key)}
                      className="w-full py-2.5 flex items-center justify-between text-left text-[15px] font-medium text-[#616267] hover:text-[var(--brand-deep)] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#616267]"></span>
                        {item.title}
                      </span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`transition-transform duration-200 ${
                          openAccordions[item.key] ? 'rotate-180' : ''
                        }`}
                      >
                        <path
                          d="M16.9395 7.93896L12.0005 12.879L7.06145 7.93896L4.93945 10.061L12.0005 17.121L19.0615 10.061L16.9395 7.93896Z"
                          fill="var(--brand-deep)"
                        />
                      </svg>
                    </button>
                    {openAccordions[item.key] && (
                      <div className="pl-3 pb-3 text-[14px] leading-[22px] text-[var(--brand-primary)]">
                        {item.body}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/contact-us/"
                className="block w-full py-3 text-center bg-[var(--brand-primary)] text-white font-medium text-[15px] hover:bg-[var(--brand-deep)] transition-colors border border-[var(--brand-primary)]"
              >
                Order Now
              </Link>
            </div>
          </div>

          {/* Card 2: Full Support Package */}
          <div className="bg-white border border-[#a0a6ba] p-6 xl:py-8 xl:px-5 flex flex-col justify-between">
            <div>
              <h3 className="text-[20px] sm:text-[24px] xl:text-[22px] font-bold text-[var(--brand-deep)] mb-5 min-h-[56px]">
                Full Support Package
              </h3>
              <div className="text-[40px] xl:text-[44px] font-semibold text-[var(--brand-deep)] leading-none mb-3">
                $10,000
              </div>
              <div className="text-[14px] text-[var(--brand-primary)] mb-5 h-6"></div>
              <div className="w-full h-px bg-[#a0a6ba] mb-6"></div>

              <p className="text-[16px] font-medium text-[var(--brand-deep)] mb-2">The service includes:</p>

              <div className="space-y-1">
                {[
                  {
                    key: 'c2_1',
                    title: 'Personalized Consultation',
                    body: 'One-on-one sessions with our experienced analysts to discuss the findings, clarify any questions, and outline the next steps.',
                  },
                  {
                    key: 'c2_2',
                    title: 'Implementation Support',
                    body: 'Hands-on assistance in executing the action plan, ensuring that each step is carried out effectively and on time.',
                  },
                  {
                    key: 'c2_3',
                    title: 'Monitoring & Feedback',
                    body: 'Regular check-ins to monitor progress, assess the effectiveness of implemented actions, and make necessary adjustments to stay on track.',
                  },
                  {
                    key: 'c2_4',
                    title: '24/7 Support Hotline',
                    body: 'Rapid-response support for any urgent questions or issues during the implementation phase.',
                  },
                ].map((item) => (
                  <div key={item.key} className="border-b border-[var(--brand-soft)] last:border-0">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.key)}
                      className="w-full py-2.5 flex items-center justify-between text-left text-[15px] font-medium text-[#616267] hover:text-[var(--brand-deep)] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#616267]"></span>
                        {item.title}
                      </span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`transition-transform duration-200 ${
                          openAccordions[item.key] ? 'rotate-180' : ''
                        }`}
                      >
                        <path
                          d="M16.9395 7.93896L12.0005 12.879L7.06145 7.93896L4.93945 10.061L12.0005 17.121L19.0615 10.061L16.9395 7.93896Z"
                          fill="var(--brand-deep)"
                        />
                      </svg>
                    </button>
                    {openAccordions[item.key] && (
                      <div className="pl-3 pb-3 text-[14px] leading-[22px] text-[var(--brand-primary)]">
                        {item.body}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/contact-us/"
                className="block w-full py-3 text-center bg-[var(--brand-primary)] text-white font-medium text-[15px] hover:bg-[var(--brand-deep)] transition-colors border border-[var(--brand-primary)]"
              >
                Order Now
              </Link>
            </div>
          </div>

          {/* Card 3: Crypto Tracing Report */}
          <div className="bg-white border border-[#a0a6ba] p-6 xl:py-8 xl:px-5 flex flex-col justify-between">
            <div>
              <h3 className="text-[20px] sm:text-[24px] xl:text-[22px] font-bold text-[var(--brand-deep)] mb-5 min-h-[56px]">
                Crypto Tracing Report
              </h3>
              <div className="text-[40px] xl:text-[44px] font-semibold text-[var(--brand-deep)] leading-none mb-3">
                $3,500
              </div>
              <div className="text-[14px] text-[var(--brand-primary)] mb-5 h-6">
                + $750 per transaction
              </div>
              <div className="w-full h-px bg-[#a0a6ba] mb-6"></div>

              <p className="text-[16px] font-medium text-[var(--brand-deep)] mb-2">The service includes:</p>

              <div className="space-y-1">
                {[
                  {
                    key: 'c3_1',
                    title: 'Asset Movement Investigation',
                    body: 'It all starts with retracing the movement of your funds from your account to its present whereabouts.',
                  },
                  {
                    key: 'c3_2',
                    title: 'Perpetrators Investigation',
                    body: 'Perform a thorough investigation of the perpetrators and case to produce an Investigation Report with important case details and valuable evidence.',
                  },
                  {
                    key: 'c3_3',
                    title: 'Recommended Action Plan',
                    body: 'With our investigation Report, you’ll receive a recommended step-by-step action plan explaining how we believe you can retrieve your losses.',
                  },
                ].map((item) => (
                  <div key={item.key} className="border-b border-[var(--brand-soft)] last:border-0">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.key)}
                      className="w-full py-2.5 flex items-center justify-between text-left text-[15px] font-medium text-[#616267] hover:text-[var(--brand-deep)] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#616267]"></span>
                        {item.title}
                      </span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`transition-transform duration-200 ${
                          openAccordions[item.key] ? 'rotate-180' : ''
                        }`}
                      >
                        <path
                          d="M16.9395 7.93896L12.0005 12.879L7.06145 7.93896L4.93945 10.061L12.0005 17.121L19.0615 10.061L16.9395 7.93896Z"
                          fill="var(--brand-deep)"
                        />
                      </svg>
                    </button>
                    {openAccordions[item.key] && (
                      <div className="pl-3 pb-3 text-[14px] leading-[22px] text-[var(--brand-primary)]">
                        {item.body}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/contact-us/"
                className="block w-full py-3 text-center bg-[var(--brand-primary)] text-white font-medium text-[15px] hover:bg-[var(--brand-deep)] transition-colors border border-[var(--brand-primary)]"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>

        {/* Free Initial Consultation Banner (spans full width across 3 columns) */}
        <div className="bg-[var(--brand-primary)] text-white p-6 sm:p-8 xl:py-14 xl:px-8 text-center mb-6">
          <div className="max-w-[584px] mx-auto flex flex-col items-center">
            <h3 className="text-[24px] sm:text-[30px] font-bold text-white mb-4">
              Free Initial Consultation
            </h3>
            <p className="text-[15px] sm:text-[16px] text-[var(--brand-soft)] leading-[24px] mb-6">
              Tell us what happened and we will estimate whether your case is worth pursuing. If not, we will be open and direct about it. If it is, we will get to work as soon as possible
            </p>
            <Link
              href="/contact-us/"
              className="px-8 py-3.5 bg-[#ffd700] text-[var(--brand-primary)] font-medium text-[16px] hover:bg-[#ffe661] hover:border-[#ffe661] transition-colors border border-[#ffd700]"
            >
              Request a Consultation
            </Link>
          </div>
        </div>

        {/* Regulatory note at bottom */}
        <div className="py-4 border-t border-b border-[#a0a6ba] text-center text-[14px] leading-[20px] text-[#a0a6ba]">
          We provide investigation and Crypto tracing services, and our services are not intended to replace the help of any local law enforcement agencies. If you’ve been scammed, we advise you to first turn to the relevant authorities in your country.{' '}
          <Link
            href="/directory-of-law-enforcement-agencies/"
            className="text-[var(--brand-deep)] font-medium underline"
          >
            See list here.
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InvestigationPackages;
