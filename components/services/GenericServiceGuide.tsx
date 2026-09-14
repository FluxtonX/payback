'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export interface GuideArticleStep {
  title: string;
  desc: string;
}

export interface GuideArticle {
  id: string;
  title: string;
  paragraphs?: string[];
  steps?: GuideArticleStep[];
}

export interface GenericServiceGuideProps {
  topIntro?: string;
  tocItems: { id: string; label: string }[];
  articles: GuideArticle[];
  stickyTitle: string;
  stickyContent: string;
  stickyButtonText?: string;
  stickyButtonHref?: string;
}

export const GenericServiceGuide: React.FC<GenericServiceGuideProps> = ({
  topIntro,
  tocItems,
  articles,
  stickyTitle,
  stickyContent,
  stickyButtonText = 'Get a free consultation',
  stickyButtonHref = '/contact-us/',
}) => {
  const [activeToc, setActiveToc] = useState<string>(tocItems[0]?.id || '');

  const scrollTo = (id: string) => {
    setActiveToc(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-12 lg:py-20 bg-white font-sans">
      <div className="container max-w-[1208px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          {/* Main Article Content (Left Column) */}
          <div className="w-full lg:w-[68%] space-y-10 text-[#616267] leading-[26px] text-[15px] sm:text-[16px]">
            {/* Optional Top Intro Banner */}
            {topIntro && (
              <div className="bg-[#eef7ee] border-l-4 border-[var(--brand-primary)] p-6 rounded-r-xl text-[var(--brand-deep)] font-medium leading-relaxed">
                {topIntro}
              </div>
            )}

            {/* Articles */}
            {articles.map((art) => (
              <article key={art.id} id={art.id} className="scroll-mt-28 space-y-5">
                <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] leading-tight">
                  {art.title}
                </h2>

                {art.paragraphs && art.paragraphs.length > 0 && (
                  <div className="space-y-4">
                    {art.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                )}

                {/* Sub-steps if present */}
                {art.steps && art.steps.length > 0 && (
                  <div className="space-y-4 pt-2">
                    {art.steps.map((st, sIdx) => (
                      <div key={sIdx} className="space-y-2 bg-[#F4F7F5] p-5 rounded-xl border border-[#a0a6ba]/20">
                        <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                          {st.title}
                        </h3>
                        <p>{st.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Sidebar (Right Column) */}
          <div className="w-full lg:w-[32%] space-y-6">
            <div className="sticky top-28 space-y-6">
              {/* Table of Contents Box */}
              <aside className="bg-white border border-[#a0a6ba]/30 rounded-xl p-6 shadow-sm">
                <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-4 pb-2 border-b border-[#a0a6ba]/20">
                  Table of Contents
                </h4>
                <ul className="space-y-2.5">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollTo(item.id)}
                        className={`text-left text-[14px] sm:text-[15px] transition-colors flex items-center gap-2 ${
                          activeToc === item.id
                            ? 'font-bold text-[var(--brand-primary)]'
                            : 'text-[#616267] hover:text-[var(--brand-primary)]'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            activeToc === item.id ? 'bg-[var(--brand-primary)]' : 'bg-[#a0a6ba]'
                          }`}
                        />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </aside>

              {/* Sticky Action Card */}
              <aside className="bg-gradient-to-br from-[#063A2B] to-[#0B5D45] text-white rounded-xl p-6 shadow-md">
                <h4 className="text-[20px] font-bold mb-2 leading-snug">
                  {stickyTitle}
                </h4>
                <p className="text-[14px] text-[#f4f4f4]/90 mb-6 leading-relaxed">
                  {stickyContent}
                </p>
                <Link
                  href={stickyButtonHref}
                  className="block w-full py-3 px-4 bg-[#eef7ee] hover:bg-white text-[var(--brand-deep)] font-bold text-[15px] text-center rounded-lg shadow transition-all duration-200"
                >
                  {stickyButtonText}
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenericServiceGuide;
