'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface TocItem {
  id: string;
  label: string;
}

const tocItems: TocItem[] = [
  { id: 'what-is-kyc', label: 'What are KYC Services?' },
  { id: 'closer-look', label: 'A Closer Look at Our Process' },
  { id: 'conclusion', label: 'Conclusion' },
];

export const KycGuide: React.FC = () => {
  const [activeToc, setActiveToc] = useState<string>('what-is-kyc');

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
              In today&#39;s digital age, knowing who you&#39;re doing business with is more important than ever. Regardless of what type of business you run, as long as you interact with clients or customers, you need to build trust, prevent fraud, and ensure compliance. All of this can be done with a robust KYC (Know Your Customer) process.
            </div>

            {/* 1. What are KYC Services? */}
            <article id="what-is-kyc" className="scroll-mt-28 space-y-4">
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] leading-tight">
                What are KYC Services?
              </h2>
              <p>
                KYC, or Know Your Customer, is a set of processes and procedures that cryptocurrency and financial businesses use to verify the identity of their customers and assess their risk profile. It&#39;s an important element of regulatory compliance, designed to prevent financial crimes like money laundering and terrorist financing.
              </p>
            </article>

            {/* 2. A Closer Look at Our Process */}
            <article id="closer-look" className="scroll-mt-28 space-y-6">
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] leading-tight">
                A Closer Look at Our Process
              </h2>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 1: Initial Consultation
                </h3>
                <p>
                  We believe in building strong partnerships with our clients. That&#39;s why we kick off our KYC process with a consultation. We&#39;ll take the time to understand your business, its unique needs, and your risk tolerance. This helps us tailor our KYC solutions to fit your specific requirements and ensure a seamless onboarding experience for your customers.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 2: Information Gathering
                </h3>
                <p>
                  To ensure a smooth and secure onboarding process for your customers, we&#39;ll need to gather essential documentation. This might include basic identification details, proof of address, or industry-specific verification documents. Our goal is to collect all necessary information efficiently while minimizing any operational disruption.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 3: Identity Verification
                </h3>
                <p>
                  In the digital world, verifying authentic identities is essential. We utilize advanced document forensic tools, biometric checks, and database validation to confirm the authenticity of user data, helping you mitigate fraud and comply with international regulations.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 4: Assess Risk
                </h3>
                <p>
                  Not all customers pose the same level of risk. We carefully evaluate each profile taking into account geographic jurisdiction, transaction frequency, source of funds, and industry vertical, allowing us to implement the appropriate level of due diligence.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 5: Enhanced Due Diligence (EDD)
                </h3>
                <p>
                  For higher-risk accounts or PEPs (Politically Exposed Persons), we conduct Enhanced Due Diligence (EDD). This includes deep background screening, adverse media checks, and source-of-wealth verifications to ensure maximum regulatory protection.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 6: Ongoing Monitoring
                </h3>
                <p>
                  Compliance is an ongoing responsibility. We continuously monitor transactional patterns and account behavior against global sanction lists, enabling early detection and rapid mitigation of suspicious activity.
                </p>
              </div>
            </article>

            {/* 3. Conclusion */}
            <article id="conclusion" className="scroll-mt-28 space-y-4">
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] leading-tight">
                Conclusion
              </h2>
              <p>
                In today&#39;s digital landscape, robust KYC procedures are essential for building trust, preventing fraud, and ensuring regulatory compliance. Our team of certified specialists is dedicated to guiding you through every step of implementation.
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
                  We Can Help You Get Your KYC to The Next Level
                </h4>
                <p className="text-[14px] text-[#f4f4f4]/90 mb-6 leading-relaxed">
                  If you’re structuring or upgrading your KYC &amp; customer onboarding procedures, our compliance experts are ready to assist.
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

export default KycGuide;
