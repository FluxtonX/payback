'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LegalPageData } from '@/data/phase10Data';

interface LegalDocLayoutProps {
  data: LegalPageData;
  badge?: string;
}

export const LegalDocLayout: React.FC<LegalDocLayoutProps> = ({
  data,
  badge = 'Official Document',
}) => {
  const [activeSec, setActiveSec] = useState<number>(0);

  const scrollTo = (idx: number) => {
    setActiveSec(idx);
    const element = document.getElementById(`section-${idx}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* 01: Top Banner */}
      <section className="bg-gradient-to-b from-[#063A2B] to-[#0B5D45] text-white py-14 md:py-20 px-4">
        <div className="container max-w-[1000px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#eef7ee] text-[13px] font-semibold mb-4 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            {badge}
          </div>

          <h1 className="text-[32px] sm:text-[44px] lg:text-[48px] font-bold text-white mb-4 leading-tight">
            {data.title}
          </h1>

          <p className="text-[15px] sm:text-[17px] text-[#f4f7f5]/90 max-w-[760px] mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      {/* 02: Main Body with Sidebar Navigation */}
      <section className="py-12 md:py-20">
        <div className="container max-w-[1208px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
            {/* Sidebar Sticky Table of Contents (Desktop) */}
            <aside className="w-full lg:w-[30%] order-2 lg:order-1">
              <div className="sticky top-28 bg-[#F4F7F5] border border-[#a0a6ba]/25 rounded-2xl p-6 shadow-sm">
                <h3 className="text-[17px] font-bold text-[var(--brand-deep)] mb-4 pb-3 border-b border-[#a0a6ba]/20">
                  Navigation
                </h3>
                <nav className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-2">
                  {data.articles.map((art, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollTo(idx)}
                      className={`w-full text-left py-2 px-3 rounded-lg text-[14px] leading-snug transition-all flex items-center gap-2 ${
                        activeSec === idx
                          ? 'bg-white font-bold text-[var(--brand-primary)] shadow-sm'
                          : 'text-[#616267] hover:bg-white/60 hover:text-[var(--brand-deep)]'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          activeSec === idx ? 'bg-[var(--brand-primary)]' : 'bg-[#a0a6ba]'
                        }`}
                      />
                      <span className="line-clamp-1">{art.title}</span>
                    </button>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-[#a0a6ba]/20">
                  <p className="text-[13px] text-[#616267] mb-3">
                    Have questions about our terms or policies?
                  </p>
                  <Link
                    href="/contact-us/"
                    className="block w-full py-2.5 px-4 bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] text-white text-center font-bold text-[14px] rounded-lg transition-colors shadow"
                  >
                    Contact Legal Support
                  </Link>
                </div>
              </div>
            </aside>

            {/* Articles List (Left/Main Content) */}
            <div className="w-full lg:w-[70%] order-1 lg:order-2 space-y-12 text-[#616267] text-[15px] sm:text-[16px] leading-[28px]">
              {data.articles.map((art, idx) => (
                <article
                  key={idx}
                  id={`section-${idx}`}
                  className="scroll-mt-28 space-y-4 pb-8 border-b border-[#a0a6ba]/15 last:border-b-0"
                >
                  <h2 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] leading-tight">
                    {art.title}
                  </h2>
                  <div className="space-y-4">
                    {art.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LegalDocLayout;
