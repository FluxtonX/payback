'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface TocItem {
  id: string;
  label: string;
}

const tocItems: TocItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'what-is-cyber-fraud', label: 'What is Cyber Fraud?' },
  { id: 'how-we-help', label: 'How We Help People' },
  { id: 'how-it-works-guide', label: 'How it works' },
  { id: 'conclusion', label: 'Conclusion' },
];

export const CyberInvestigationGuide: React.FC = () => {
  const [activeToc, setActiveToc] = useState<string>('overview');

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
            {/* 1. Overview */}
            <article id="overview" className="scroll-mt-28 space-y-4">
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] leading-tight">
                Overview
              </h2>
              <p>
                Falling for a cyber fraud scam might seem like the end of the world, but there is a way to reclaim the money you lost, and that’s with cyber fraud investigation services. Our team of investigators has extensive experience in dealing with cybercrime.
              </p>
              <p>
                At the end of the investigation, we’ll arm you with a comprehensive Investigation Report and Action plan, which will be the tools you need to take action and get your money back. We understand all of this can be complicated and a bit overwhelming, so we’re here to explain the process to you, every step of the way.
              </p>
            </article>

            {/* 2. What is Cyber Fraud? */}
            <article id="what-is-cyber-fraud" className="scroll-mt-28 space-y-4">
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] leading-tight">
                What is Cyber Fraud?
              </h2>
              <p>
                Cyber fraud is like digital traps set by online criminals to trick you out of your money or personal information. They come in many shapes and sizes, from phishing scams and identity theft to romance scams and investment fraud—and that’s just the tip of the iceberg.
              </p>
              <p>
                Falling victim to a cyber fraud scam can leave you feeling violated and betrayed, but you're not alone. We're here to give you the tools that will help you reclaim what's rightfully yours.
              </p>
            </article>

            {/* 3. How We Help People */}
            <article id="how-we-help" className="scroll-mt-28 space-y-4">
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] leading-tight">
                How We Help People
              </h2>
              <p>
                Our team is dedicated to guiding you through the process. We’re not here to simply tell you what to do; we’re here to show you how you can reclaim your money and arm you with everything you need to do so.
              </p>
              <p>
                Our Investigation Reports and Action Plans helped clients recover more than five million dollars in scammed funds last year alone. Simply put, the tools we provide to our clients work, all thanks to expertise and years of experience.
              </p>
            </article>

            {/* 4. How it works */}
            <article id="how-it-works-guide" className="scroll-mt-28 space-y-6">
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] leading-tight">
                How it works
              </h2>

              <div className="space-y-4">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 1: Review Your Case
                </h3>
                <p>
                  We’ll start by offering you a safe space to share your story. During your free and confidential consultation, we'll ask you to describe the details of the scam, answer your questions, and address any concerns you may have. We'll work together to understand the full scope of the situation and assess the best path forward for reclaiming your losses.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 2: Gather the Evidence
                </h3>
                <p>
                  Once we understand your situation, we'll guide you through the process of collecting all the crucial evidence related to the scam. We'll provide you with a detailed checklist and offer support every step of the way, and we will make sure we leave no stone unturned.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 3: Investigation Report
                </h3>
                <p>
                  Our expert team will distill all the findings from our in-depth investigation into a clear, comprehensive report. This isn't just a collection of technical jargon; it's the tool you’ll use to get your money back, written in plain language so you can easily understand the evidence and our analysis.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 4: Action Plan
                </h3>
                <p>
                  Based on the findings in your investigation report, we'll develop a personalized action plan that outlines the specific steps you can take to reclaim your stolen assets. Our goal is to empower you to take control of your situation, get your money back, and pursue the justice you deserve.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 5: Expert Assistance
                </h3>
                <p>
                  If you choose, we’ll provide you with expert guidance and assistance in executing the Action Plan we made for you. Our team will be by your side as we guide you through the process, offering you our expertise and knowledge to help you navigate all the complexities of scam funds retrieval.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  Step 6: Get Your Money Back
                </h3>
                <p>
                  Our ultimate goal is to give you the tools you need to reclaim your assets. Armed with the evidence and insights from our Investigation Report and Action Plan, you might be able to get a substantial part, if not all, of your money back.
                </p>
              </div>
            </article>

            {/* 5. Conclusion */}
            <article id="conclusion" className="scroll-mt-28 space-y-4">
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] leading-tight">
                Conclusion
              </h2>
              <p>
                Cyber fraud scams can be devastating, but there’s still a chance for you to get your money back. Our team of experts is dedicated to giving you the tools you need to reclaim your stolen funds. We'll meticulously investigate your case, gather evidence, and provide you with a comprehensive report and personalized action plan that you’ll use to get back what was taken from you. In situations like these, you need someone in your corner, and that’s what we’re here for.
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
                  You can get your money back
                </h4>
                <p className="text-[14px] text-[#f4f4f4]/90 mb-6 leading-relaxed">
                  If you’ve been scammed online, get in touch with us now to get the tools and evidence you need to reclaim your funds.
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

export default CyberInvestigationGuide;
