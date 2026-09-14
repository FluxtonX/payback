'use client';

import React, { useState, useEffect } from 'react';

export const TestimonialsMiddle: React.FC = () => {
  const [activeId, setActiveId] = useState<'1' | '2' | '3'>('1');

  useEffect(() => {
    const handleScroll = () => {
      const s2 = document.getElementById('2');
      const s3 = document.getElementById('3');
      if (!s2 || !s3) return;

      const top2 = s2.getBoundingClientRect().top;
      const top3 = s3.getBoundingClientRect().top;

      if (top3 <= 200) {
        setActiveId('3');
      } else if (top2 <= 200) {
        setActiveId('2');
      } else {
        setActiveId('1');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: '1' | '2' | '3') => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const tocItems = [
    { id: '1' as const, title: 'The Process We Follow to Trace Misplaced or Lost Funds' },
    { id: '2' as const, title: 'Online Reclaims Services' },
    { id: '3' as const, title: 'Customer Testimonials' },
  ];

  return (
    <section className="w-full max-w-[1048px] mx-auto px-4 md:px-6 xl:px-0 py-16 md:py-24 font-sans">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 xl:gap-12 justify-between items-start">
        {/* Left Column (584px) */}
        <div className="w-full md:max-w-[584px] text-[#616267]">
          {/* Top Bordered Intro Paragraph */}
          <div className="border-t border-b border-[#616267]/40 py-8 md:py-10 text-[16px] leading-[26px]">
            Online Reclaims was founded to protect traders from unregulated Binary Option and Forex brokers.
            The company comprises of professionals with vast experience in the Forex industry and cybercrimes.
            For over a decade we have claimed funds for hundreds of victims worldwide.
          </div>

          {/* Section 1 */}
          <div id="1" className="pt-12 md:pt-14 scroll-mt-28">
            <h3 className="font-bold text-[22px] sm:text-[24px] md:text-[26px] leading-[32px] text-[var(--brand-deep)] mb-6 md:mb-8 font-heading">
              The Process We Follow to Trace Misplaced or Lost Funds
            </h3>
            <p className="text-[16px] leading-[26px] mb-6">
              We review the details of the complainant and collect all the necessary information,
              including correspondence with the merchant/broker, confirmation that the transaction
              actually occurred and the broker’s platform/web page. Because we respect privacy, your
              details are never sent to third parties.
            </p>
            <p className="text-[16px] leading-[26px]">
              Once you have helped us compile everything we need, we will confront the owners of the
              bank or the company in question. Finally we claim back your funds via a quick and
              secure payment method.
            </p>
          </div>

          {/* Section 2 */}
          <div id="2" className="pt-12 md:pt-14 scroll-mt-28">
            <h3 className="font-bold text-[22px] sm:text-[24px] md:text-[26px] leading-[32px] text-[var(--brand-deep)] mb-6 md:mb-8 font-heading">
              Online Reclaims Services
            </h3>
            <p className="text-[16px] leading-[26px]">
              We know the internet has become a huge part of people’s lives and that it comes with its
              fair share of challenges. The majority of websites offer genuine products and services
              and do a good job of safeguarding your information, but some companies have ulterior
              motives. This is where Online Reclaims comes in. We retrieve funds from unregulated brokers and
              any other company committing online fraud. We offer a free consultation at any time.
            </p>
          </div>

          {/* Section 3 */}
          <div id="3" className="pt-12 md:pt-14 scroll-mt-28">
            <h3 className="font-bold text-[22px] sm:text-[24px] md:text-[26px] leading-[32px] text-[var(--brand-deep)] mb-6 md:mb-8 font-heading">
              Customer Testimonials
            </h3>
            <p className="text-[16px] leading-[26px]">
              There are many genuine Online Reclaims Reviews on our website that show customer satisfaction.
              Many of our clients had lost hope in every retrieving their money but we helped to
              secure their funds. We will never give up when seeking to resolve your case.
            </p>
          </div>
        </div>

        {/* Right Sticky Sidebar (376px) */}
        <div className="hidden md:block w-full md:w-[320px] xl:w-[376px] flex-shrink-0">
          <div className="sticky top-[120px]">
            <aside className="border border-[var(--brand-soft)] p-6 xl:p-8 bg-white shadow-sm">
              <h4 className="font-bold text-[20px] md:text-[22px] leading-[28px] text-[var(--brand-deep)] mb-6 font-heading">
                Table of Contents
              </h4>
              <ul className="space-y-4 list-none m-0 p-0 select-none">
                {tocItems.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="group relative pl-4 flex items-center cursor-pointer transition-colors"
                    >
                      {/* Active 6px Gold Indicator Bar */}
                      <span
                        className={`absolute left-0 top-0 w-[6px] h-full bg-[#ffd700] transition-transform duration-200 ${
                          isActive ? 'scale-y-110 opacity-100' : 'opacity-0'
                        }`}
                      />

                      {/* Inactive Bullet Dot */}
                      <span
                        className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
                          isActive
                            ? 'opacity-0'
                            : 'w-[4px] h-[4px] bg-[#616267] group-hover:w-[6px] group-hover:h-[6px] group-hover:bg-[var(--brand-primary)]'
                        }`}
                      />

                      <p
                        className={`text-[15px] xl:text-[16px] leading-[24px] transition-colors ${
                          isActive
                            ? 'text-[var(--brand-primary)] font-semibold'
                            : 'text-[#616267] group-hover:text-[var(--brand-primary)]'
                        }`}
                      >
                        {item.title}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMiddle;
