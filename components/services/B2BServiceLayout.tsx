'use client';

import React from 'react';
import Link from 'next/link';
import ContactSection from '@/components/home/ContactSection';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';
import { B2BServiceData } from '@/data/servicesBatch84';

interface B2BServiceLayoutProps {
  data: B2BServiceData;
}

export const B2BServiceLayout: React.FC<B2BServiceLayoutProps> = ({ data }) => {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* 01: High-Tech B2B Hero */}
      <section className="relative bg-gradient-to-b from-[#063A2B] to-[#0B5D45] text-white py-16 md:py-24 px-4 overflow-hidden">
        {/* Subtle decorative background grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="container max-w-[1000px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#eef7ee] text-[13px] sm:text-[14px] font-semibold mb-6 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            Enterprise Cybersecurity Solutions
          </div>

          <h1 className="text-[34px] sm:text-[46px] lg:text-[54px] font-bold text-white mb-6 leading-tight tracking-tight">
            {data.heroTitle}
          </h1>

          <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#f4f7f5]/90 max-w-[760px] mx-auto mb-10 leading-relaxed">
            {data.heroSubtitle}
          </p>

          <div>
            <Link
              href="/contact-us/"
              className="inline-block py-3.5 px-8 bg-[#eef7ee] hover:bg-white text-[var(--brand-deep)] font-bold text-[16px] rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Get a free consultation
            </Link>
          </div>
        </div>
      </section>

      {/* 02: Service Overview Section */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container max-w-[1208px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block text-[13px] font-bold uppercase tracking-wider text-[var(--brand-primary)] bg-[#eef7ee] px-3 py-1 rounded">
                Capabilities
              </div>
              <h2 className="text-[28px] sm:text-[36px] font-bold text-[var(--brand-deep)] leading-tight">
                {data.overviewTitle}
              </h2>
              <div className="space-y-4 text-[15px] sm:text-[16px] leading-[26px] text-[#616267]">
                {data.overviewParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Right Column: Security Shield Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] p-8 rounded-2xl bg-gradient-to-br from-[#F4F7F5] to-[#eef7ee] border border-[#0B5D45]/15 shadow-sm text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[var(--brand-primary)] text-white flex items-center justify-center shadow-md">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-[20px] font-bold text-[var(--brand-deep)] mb-2">
                  Proactive Cyber Defense
                </h3>
                <p className="text-[14px] text-[#616267] leading-relaxed mb-4">
                  Multi-layered digital forensics, threat mitigation, and incident resilience tailored for enterprise systems.
                </p>
                <div className="flex items-center justify-center gap-4 text-[13px] font-semibold text-[var(--brand-primary)]">
                  <span className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    24/7 Readiness
                  </span>
                  <span className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Certified Experts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03: Feature & Service Offerings Card Sections */}
      {data.cardSections.map((sec, sIdx) => (
        <section
          key={sIdx}
          className={`py-14 md:py-20 ${sIdx % 2 === 0 ? 'bg-[#F4F7F5]' : 'bg-white'}`}
        >
          <div className="container max-w-[1208px] mx-auto px-4">
            <div className="text-center max-w-[760px] mx-auto mb-10 md:mb-14">
              <h2 className="text-[28px] sm:text-[34px] xl:text-[40px] font-bold text-[var(--brand-deep)] leading-tight mb-3">
                {sec.sectionTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sec.cards.map((card, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-white border border-[#a0a6ba]/30 rounded-xl p-6 lg:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#eef7ee] text-[var(--brand-primary)] flex items-center justify-center mb-5 group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                    <h3 className="text-[19px] sm:text-[20px] font-bold text-[var(--brand-deep)] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] leading-[24px] text-[#616267]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* 04: Contact Intake Form */}
      <ContactSection />

      {/* 05: Latest Educational Articles */}
      <LatestArticlesSection />
    </main>
  );
};

export default B2BServiceLayout;
