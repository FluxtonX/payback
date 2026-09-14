'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface TocItem {
  id: string;
  label: string;
}

const tocItems: TocItem[] = [
  { id: 'closer-look', label: 'A Closer Look at Our Process' },
  { id: 'conclusion', label: 'Conclusion' },
];

export const CryptoTracingGuide: React.FC = () => {
  const [activeToc, setActiveToc] = useState<string>('closer-look');

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
              If your digital currencies have been lost or stolen, it&#39;s not the end of the road. Our team of experts specializes in tracing digital assets and utilizing cutting-edge blockchain forensics to follow the money trail. We&#39;ll leave no stone unturned in our hunt for your funds, working tirelessly to locate your missing crypto and explore all avenues for recovery.
            </div>

            {/* 1. A Closer Look at Our Process */}
            <article id="closer-look" className="scroll-mt-28 space-y-6">
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] leading-tight">
                A Closer Look at Our Process
              </h2>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 1: Case Review
                </h3>
                <p>
                  The first step in our process is always a free and completely confidential consultation during which we’ll review your case and get into the details of your crypto asset loss. We&#39;ll listen to your story, ask questions to gain a comprehensive understanding of the situation, and assess the feasibility of tracing and recovering your assets.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 2: Gathering the Evidence
                </h3>
                <p>
                  After reviewing your case, if we decide we believe we’ll be able to trace your crypto, we&#39;ll work closely with you to gather all the necessary documentation that will serve as crucial evidence during our investigation. This might include transaction details, wallet addresses, communication logs, or any other documentation you may have.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 3: Blockchain Analysis
                </h3>
                <p>
                  Our team of experts will analyze the blockchain, tracing the movement of your lost crypto assets across the network. We&#39;ll utilize cutting-edge technology to identify the wallets, exchanges, and addresses involved in the transactions. By mapping out the flow of funds, we’ll build a strong evidentiary case for you as you proceed to reclaim your assets.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 4: Transaction Mapping
                </h3>
                <p>
                  The blockchain can be a complex and confusing web of transactions. To help you better understand the movement of your stolen crypto assets, we&#39;ll create a detailed transaction map. This visual representation will clearly illustrate the flow of funds, highlighting key points, potential leads, and any opportunities for recovery.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 5: Recovery Strategies
                </h3>
                <p>
                  Based on the insights gained from our in-depth investigation and transaction mapping, we&#39;ll develop a customized recovery strategy. We understand that every case is unique, and the strategies we develop for you will be best suited to your specific situation as you work towards reclaiming your stolen crypto assets.
                </p>
              </div>
            </article>

            {/* 2. Conclusion */}
            <article id="conclusion" className="scroll-mt-28 space-y-4">
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] leading-tight">
                Conclusion
              </h2>
              <p>
                Losing your crypto assets doesn’t have to be the end of the road. With our specialized crypto asset tracing services, you have a fighting chance to reclaim your digital assets. From meticulous investigation and transaction mapping to developing tailored retrieval strategies, we&#39;re committed to empowering you to take action and recover most, if not all, of your digital assets.
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

              {/* Sticky Recovery Action Card */}
              <aside className="bg-gradient-to-br from-[#063A2B] to-[#0B5D45] text-white rounded-xl p-6 shadow-md">
                <h4 className="text-[20px] font-bold mb-2 leading-snug">
                  Let us help you trace your lost crypto
                </h4>
                <p className="text-[14px] text-[#f4f4f4]/90 mb-6 leading-relaxed">
                  If you lost your crypto assets and don’t know what to do, our team of forensic analysts does. Reach out for a free consultation to initiate the tracing process.
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

export default CryptoTracingGuide;
