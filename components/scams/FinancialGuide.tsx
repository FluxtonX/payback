'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'What is a Tax Scam?',
    a: 'This con involves scammers posing as representatives of the IRS or national tax authority, aggressively claiming that immediate payment is required via wire transfer or gift cards to avoid arrest.',
  },
  {
    q: 'What about the Family Emergency Scam?',
    a: 'Fraudsters contact parents or grandparents claiming a loved one is in urgent legal or medical distress in another city/country and urgently requires bail or hospital funds.',
  },
  {
    q: 'How much money is lost to internet scams and frauds every year?',
    a: 'Tens of billions of dollars are stolen annually across digital financial scams, with the global threat landscape expanding rapidly via online platforms.',
  },
  {
    q: 'Are fake Facebook profiles common?',
    a: 'Yes, tens of millions of fake social media accounts operate globally, used specifically to establish fraudulent contacts, promote fake investments, and execute phishing scams.',
  },
  {
    q: 'Am I more likely to be targeted during the holiday season?',
    a: 'Yes. Fraudulent retail stores, charity scams, and fake discount schemes experience massive spikes during peak holiday shopping periods.',
  },
  {
    q: 'What should I do if a scammer calls me?',
    a: 'Hang up immediately. Never provide sensitive personal info, OTP verification codes, or bank details. Contact your financial institution directly using official numbers on your debit card.',
  },
  {
    q: 'What are the red flags of a Ponzi scheme?',
    a: 'Guarantees of abnormally high, risk-free returns, lack of official regulatory licensing, opaque trading strategies, and aggressive incentives for recruiting new members.',
  },
  {
    q: 'What is the difference between a Ponzi scheme and a Pyramid scheme?',
    a: 'Ponzi schemes focus on continuous investment inflow with promises of passive yields, whereas pyramid schemes require victims to actively recruit participants to receive commissions.',
  },
];

const tocLinks = [
  { id: 'fin-1', title: 'Common Types of Financial and Online Scams' },
  { id: 'fin-2', title: 'Fell For a Scam? What to do next' },
  { id: 'fin-3', title: 'How to Avoid Financial and Online Scams' },
  { id: 'fin-4', title: 'Financial Scams FAQ' },
];

export const FinancialGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeToc, setActiveToc] = useState('fin-1');

  const scrollTo = (id: string) => {
    setActiveToc(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-12 xl:py-16 bg-white font-sans">
      <div className="container max-w-[1048px] mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 items-start">
          {/* Main Column */}
          <div className="w-full xl:w-[584px] flex-shrink-0 text-[#616267] text-[15px] leading-[26px]">
            <div className="bg-[var(--brand-soft)]/50 border-l-4 border-[var(--brand-primary)] p-5 mb-8 text-[15px] text-[var(--brand-deep)]">
              Retrieving your losses can be a lengthy process, and it all starts with our investigation. Therefore, we must have your cooperation to ensure all relevant documents and transaction receipts are compiled accurately.
            </div>

            {/* Section 1 */}
            <div id="fin-1" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Common Types of Financial and Online Scams
              </h3>
              <p className="mb-6">
                More scams emerge virtually every day, so staying vigilant and remaining safe online is vital. Con artists utilize increasingly sophisticated social engineering methods to exploit investors.
              </p>

              <div className="space-y-6">
                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">CFD Scams</h4>
                  <p className="text-[14px]">
                    CFDs (Contracts for Difference) are complex leveraged derivative products. Unscrupulous brokers manipulate spreads, refuse withdrawal requests, and push clients into unsustainable margin calls.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Ponzi & Pyramid Schemes</h4>
                  <p className="text-[14px]">
                    Scammers fabricate impressive balance sheets to solicit deposits, paying initial returns with new participants' capital until withdrawal volume leads to sudden platform shutdowns.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Social Media Investment Traps</h4>
                  <p className="text-[14px]">
                    Fraudsters showcase luxurious lifestyles on Instagram and TikTok, offering "exclusive mentorship programs" that direct followers to fake trading platforms.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Charity & Emergency Scams</h4>
                  <p className="text-[14px]">
                    Criminals exploit natural disasters, wars, or public health crises by setting up counterfeit charity portals to harvest donations and credit card credentials.
                  </p>
                </div>
              </div>

              {/* Key Points */}
              <div className="bg-[var(--brand-soft)] p-6 border border-[var(--brand-primary)]/30 mt-6">
                <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-3">Key points</h4>
                <ul className="space-y-2.5 text-[14px]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Verify regulatory licensing with government authorities before transferring any funds.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Never allow remote desktop software access (AnyDesk, TeamViewer) to unverified support callers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Retain complete records of payment confirmations, email trails, and website communications.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div id="fin-2" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Fell For a Scam? Here’s What You Should Do Next
              </h3>
              <p className="mb-4">
                1. Immediately contact your bank or credit card provider to freeze affected accounts and dispute unauthorized transfers.
              </p>
              <p className="mb-4">
                2. Change all passwords and security keys across your email, financial, and digital portal accounts.
              </p>
              <p>
                3. Partner with Payback’s dispute specialists to conduct forensic analysis, trace funds across intermediary clearing houses, and file official restitution reports.
              </p>
            </div>

            {/* Section 3 */}
            <div id="fin-3" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                How to Avoid Financial and Online Scams
              </h3>
              <p className="mb-4">
                Always exercise due diligence. Scrutinize website URLs for slight misspellings, reject unsolicited investment propositions, and consult independent financial advisors prior to entering into financial contracts.
              </p>
            </div>

            {/* Section 4: FAQ */}
            <div id="fin-4" className="scroll-mt-24">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-6">
                Financial Scams FAQ
              </h3>
              <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="py-4">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex justify-between items-center text-left text-[16px] font-bold text-[var(--brand-deep)] hover:text-[var(--brand-primary)]"
                    >
                      <span>{faq.q}</span>
                      <span className="text-[20px] text-[var(--brand-accent)] ml-2">
                        {openFaq === idx ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === idx && (
                      <div className="pt-3 text-[14px] leading-relaxed text-[#616267]">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="hidden xl:block w-[360px] flex-shrink-0 sticky top-24 space-y-6">
            <div className="bg-white border border-gray-200 p-6 shadow-sm">
              <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-4">Table of Contents</h4>
              <ul className="space-y-3">
                {tocLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className={`text-left text-[14px] transition-colors ${
                        activeToc === link.id
                          ? 'text-[var(--brand-primary)] font-bold pl-2 border-l-2 border-[var(--brand-primary)]'
                          : 'text-[#616267] hover:text-[var(--brand-primary)]'
                      }`}
                    >
                      {link.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--brand-primary)] text-white p-6 text-center">
              <h4 className="text-[20px] font-bold mb-2">Let’s get your money back!</h4>
              <p className="text-[14px] text-[var(--brand-soft)] mb-5">
                Get in touch and our team of experts will work tirelessly until they provide you the tools you need to get your money back.
              </p>
              <Link
                href="/contact-us/"
                className="inline-block w-full py-3 bg-[#ffd700] hover:bg-[#ffe661] text-[var(--brand-primary)] font-bold text-[15px] transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialGuide;
