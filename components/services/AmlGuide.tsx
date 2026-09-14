'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface TocItem {
  id: string;
  label: string;
}

const tocItems: TocItem[] = [
  { id: 'what-is-aml', label: 'What is AML Compliance?' },
  { id: 'closer-look', label: 'A Closer Look at Our Process' },
  { id: 'conclusion', label: 'Conclusion' },
];

export const AmlGuide: React.FC = () => {
  const [activeToc, setActiveToc] = useState<string>('what-is-aml');

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
            {/* Top Intro Banner */}
            <div className="bg-[#eef7ee] border-l-4 border-[var(--brand-primary)] p-6 rounded-r-xl text-[var(--brand-deep)] font-medium leading-relaxed">
              Staying compliant with Anti-Money Laundering (AML) regulations is crucial for any business, but it can be a challenging task. The rules are constantly evolving, and the consequences of non-compliance can be severe. That&#39;s where we step in. We work closely with you to develop a robust AML program that protects your organization from financial crime and fosters trust with customers, banks, and regulators.
            </div>

            {/* 1. What is AML Compliance? */}
            <article id="what-is-aml" className="scroll-mt-28 space-y-4">
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] leading-tight">
                What is AML Compliance?
              </h2>
              <p>
                AML stands for Anti-Money Laundering. It&#39;s all about making sure that businesses aren&#39;t being used as a tool for criminals to clean illicit money. AML compliance involves a comprehensive set of legal controls, statutory procedures, and reporting systems designed to prevent, detect, and mitigate activity linked to financial fraud or terrorist financing.
              </p>
            </article>

            {/* 2. A Closer Look at Our Process */}
            <article id="closer-look" className="scroll-mt-28 space-y-6">
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] leading-tight">
                A Closer Look at Our Process
              </h2>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 1: Risk Assessment
                </h3>
                <p>
                  We start by conducting an exhaustive risk assessment across your business operations, evaluating corporate touchpoints, transaction flows, and regulatory exposure to establish a customized compliance foundation.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 2: Tailored AML Program Development
                </h3>
                <p>
                  Based on our risk assessment, we craft a complete AML policy manual, operational standard operating procedures (SOPs), and governance models aligned with international FATF and FinCEN standards.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 3: Customer Due Diligence (CDD)
                </h3>
                <p>
                  We help implement structured CDD verification workflows to substantiate client identity, beneficial ownership, and risk scoring prior to onboarding.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 4: Enhanced Due Diligence (EDD)
                </h3>
                <p>
                  For complex corporate structures, PEPs, and high-value transactional accounts, we deploy Enhanced Due Diligence protocols, forensic source-of-funds verification, and cross-border registry audits.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 5: Transaction Monitoring
                </h3>
                <p>
                  We implement automated rule-based and behavioral transaction monitoring to flag velocity anomalies, structuring attempts, and blacklisted counterparty addresses in real time.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 6: Ongoing Training and Support
                </h3>
                <p>
                  We deliver specialized compliance training to your operational staff and leadership team, ensuring constant readiness for internal reviews and external regulatory audits.
                </p>
              </div>
            </article>

            {/* 3. Conclusion */}
            <article id="conclusion" className="scroll-mt-28 space-y-4">
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] leading-tight">
                Conclusion
              </h2>
              <p>
                AML compliance is not just a regulatory obligation; it&#39;s a fundamental pillar of corporate integrity and market trust. Our certified fraud examiners and legal counsel provide ongoing advisory to keep your business resilient, ethical, and protected.
              </p>
            </article>
          </div>

          {/* Sidebar / Table of Contents + Sticky Card (Right Column) */}
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
                  Get Expert AML Compliance Guidance
                </h4>
                <p className="text-[14px] text-[#f4f4f4]/90 mb-6 leading-relaxed">
                  Looking to strengthen your AML compliance framework and audit readiness? Speak directly with our certified compliance specialists today.
                </p>
                <Link
                  href="/contact-us/"
                  className="block w-full py-3 px-4 bg-[#eef7ee] hover:bg-white text-[var(--brand-deep)] font-bold text-[15px] text-center rounded-lg shadow transition-all duration-200"
                >
                  Get a free consultation
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmlGuide;
