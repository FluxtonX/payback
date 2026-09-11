'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  q: string;
  a: string;
  linkText?: string;
  linkHref?: string;
}

const faqs: FAQItem[] = [
  {
    q: 'What is SEC Rule 10b-5?',
    a: 'SEC Rule 10b-5 simply states that it is unlawful to commit fraud or deceit on anyone. This involves deceptive practices, untrue information, and even material information that is intentionally omitted.',
    linkText: 'SEC Rule 10b-5 Reference',
    linkHref: 'https://www.law.cornell.edu/cfr/text/17/240.10b-5',
  },
  {
    q: 'Is it illegal to manipulate stocks?',
    a: 'When it comes to the stock market’s regulatory and legal side, few words are as broad in their definition as manipulation. Stocks are influenced by large and small entities in legal ways, but certain forms of manipulation are strictly illegal, such as front running and naked short selling.',
  },
  {
    q: 'Is the stock market a pyramid scheme?',
    a: 'No, the stock market itself is not a pyramid scheme. While fraudsters may operate Ponzi or pyramid schemes using fraudulent securities, legitimate regulated stock exchanges provide bona fide equity ownership in public companies.',
  },
  {
    q: 'How can we help you with retrieving your money?',
    a: 'Start by getting a free consultation call, and our specialists will explain how our comprehensive Forensic Investigation Report and structured Action Plan have helped recover funds for victims of stock fraud.',
    linkText: 'a free consultation call',
    linkHref: '/contact-us/',
  },
];

const tocLinks = [
  { id: 'stock-1', title: 'How does the stock market work?' },
  { id: 'stock-2', title: 'Is the stock market rigged?' },
  { id: 'stock-3', title: 'Types of Securities fraud' },
  { id: 'stock-4', title: 'Can you get your money back?' },
  { id: 'stock-5', title: 'Stock Scam FAQ' },
];

export const StockGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeToc, setActiveToc] = useState('stock-1');

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
          {/* Main Content Column */}
          <div className="w-full xl:w-[584px] flex-shrink-0 text-[#616267] text-[15px] leading-[26px]">
            <div className="bg-[var(--brand-soft)]/50 border-l-4 border-[var(--brand-primary)] p-5 mb-8 text-[15px] text-[var(--brand-deep)]">
              Retrieving your losses can be a lengthy process, and it all starts with our investigation. We must have your cooperation to ensure all relevant documents and transaction records are compiled accurately.
            </div>

            {/* Section 1 */}
            <div id="stock-1" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                How does the stock market work?
              </h3>
              <p className="mb-4">
                Stock markets are centralized exchanges where investors buy and sell equity ownership in public corporations. Examples of regulated exchanges include the NYSE (New York Stock Exchange) and NASDAQ.
              </p>
              <p>
                However, ease of digital access through mobile trading apps has created new vectors for stock manipulation, deceptive promotions, and boiler room fraud that prey on retail traders.
              </p>
            </div>

            {/* Section 2 */}
            <div id="stock-2" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Is the stock market rigged?
              </h3>
              <p className="mb-4">
                One of the most persistent concerns among retail investors is whether financial markets are rigged. While regulated equity markets operate under strict statutory oversight, predatory bad actors exploit regulatory gaps, unregulated offshore brokers, and aggressive social media promotions to defraud investors.
              </p>

              {/* Key Points */}
              <div className="bg-[var(--brand-soft)] p-6 border border-[var(--brand-primary)]/30 mb-6">
                <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-3">Key points</h4>
                <ul className="space-y-2.5 text-[14px]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Avoid individuals or entities promising "guaranteed returns" or exclusive insider trading opportunities.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Never respond to unsolicited high-pressure cold calls, boiler room tactics, or VIP stock chat rooms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Always verify broker registration on FINRA BrokerCheck or SEC official registries before committing capital.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div id="stock-3" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Types of Securities fraud
              </h3>

              <div className="space-y-6">
                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Ponzi Schemes</h4>
                  <p className="text-[14px]">
                    Ponzi schemes recruit capital by promising high, consistent returns with little or no risk. Early investors are paid returns using capital from newer investors rather than legitimate investment profits, leading to catastrophic collapses like Bernie Madoff's $65B fraud.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Pump and Dump</h4>
                  <p className="text-[14px]">
                    Fraudsters artificially inflate the price of micro-cap stocks through false statements, paid influencers, and promotional blast messages. Once the stock peaks, scammers sell their holdings, causing the share price to crash and leaving retail buyers with worthless shares.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Penny Stock & OTC Scams</h4>
                  <p className="text-[14px]">
                    Penny stocks trade on over-the-counter (OTC) bulletin boards with minimal reporting requirements and extreme illiquidity. Deceptive promoters manipulate trading volume to deceive retail buyers.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Stock Broker Fraud & Boiler Rooms</h4>
                  <p className="text-[14px]">
                    Boiler rooms employ aggressive, manipulative telemarketing to push speculative or non-existent equities on unsuspecting investors. Brokers may also engage in illegal churning or unauthorized trading.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="stock-4" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Can you get your money back after a stock trading scam?
              </h3>
              <p className="mb-4">
                If you have suffered financial losses due to stock fraud or broker misconduct, recovery is possible through structured regulatory claims and forensic tracing. Our investigative team assists in assembling transaction receipts, communications, and audit trails to initiate dispute procedures.
              </p>
            </div>

            {/* Section 5: FAQs */}
            <div id="stock-5" className="scroll-mt-24">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-6">
                Stock scam and fraud FAQ
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
                        {faq.linkHref && (
                          <p className="mt-2">
                            <Link href={faq.linkHref} className="text-[var(--brand-primary)] underline font-medium">
                              {faq.linkText || faq.linkHref}
                            </Link>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar */}
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
              <h4 className="text-[20px] font-bold mb-2">Let’s start your investigation!</h4>
              <p className="text-[14px] text-[var(--brand-soft)] mb-5">
                Get in touch and our team of experts will work tirelessly to help retrieve your lost funds.
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

export default StockGuide;
