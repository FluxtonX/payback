'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'Are Binary Options Legal in the US?',
    a: 'Binary options are legal in the US and have overlapping regulatory agencies, chiefly the CFTC (Commodities Futures Trading Commission) and the SEC (Securities and Exchange Commission). However, trading must occur on registered US exchanges like NADEX.',
  },
  {
    q: 'How do binary options robots work?',
    a: 'There are several mediums that binary options robots use – the primary is an executable piece of software, the other requires you to share account information or an API key for the robot to trade on your behalf.',
  },
  {
    q: 'What is binary options trade copying?',
    a: "Binary options trade copying is a service offered in the same vein as robots and signals. Trade copying essentially connects your brokerage account to a 'master' account, which automatically executes mirrored trades on your behalf.",
  },
  {
    q: 'I was scammed by a binary options scam. What can I do?',
    a: 'If you were scammed by a Binary Options broker, our team can investigate your case, trace digital trails, and provide a comprehensive Investigation Report and personalized Action Plan to help retrieve your capital.',
  },
];

const tocLinks = [
  { id: 'binary-1', title: 'What are Binary Options?' },
  { id: 'binary-2', title: 'Common Binary Option Types' },
  { id: 'binary-3', title: 'Are Binary Options a scam or legit?' },
  { id: 'binary-4', title: 'Lost Money? How an Investigation Helps' },
  { id: 'binary-5', title: 'Binary options scam FAQ' },
];

export const BinaryOptionsGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeToc, setActiveToc] = useState('binary-1');

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
          {/* Left Main Content Column (584px width on desktop) */}
          <div className="w-full xl:w-[584px] flex-shrink-0 text-[#616267] text-[15px] leading-[26px]">
            {/* Introductory Statement */}
            <div className="bg-[var(--brand-soft)]/50 border-l-4 border-[var(--brand-primary)] p-5 mb-8 text-[15px] text-[var(--brand-deep)]">
              At Online Reclaims, we&#x27;re passionate about empowering our clients to take back what’s rightfully theirs after fraud. Our investigation reports and action plans provide you with the tools and resources you need to retrieve your losses. We also offer informative guides to help you understand and avoid future scams.
            </div>

            {/* Section 1: What are binary options? */}
            <div id="binary-1" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                What are binary options?
              </h3>
              <p className="mb-4">
                Binary options are a type of financial product classified as an exotic option. Binary options trading may seem like a new speculative market, but they’ve existed since 1974. They were created by one of the largest derivatives markets globally, CBOE (Chicago Board Options Exchange). It wasn’t until 2008 that binary options became primarily available to the public, and many entities copied the original CBOE asset type listing.
              </p>
              <p>
                Binary options are a type of option that allows you to guess whether the option expires in the money – that’s it. Some unregulated binary options brokers allow for guessing on out of the money outcomes. A simple yes or no bet is made, hence the name binary. Contemporary binary options have expiration times between a week to a few minutes, with the majority of modern binary options platforms specializing in under one-day expirations.
              </p>
            </div>

            {/* Section 2: Common binary option types */}
            <div id="binary-2" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Common binary option types
              </h3>
              <p className="mb-4">There are three primary binary call/put options:</p>

              <div className="space-y-4">
                <div className="border border-[var(--brand-primary)]/20 p-4 rounded-sm bg-white">
                  <div className="font-semibold text-[var(--brand-deep)] text-[16px] mb-1">High/Low Binary Option</div>
                  <p className="text-[14px]">You bet whether the price will close above a specific price or below a certain price.</p>
                </div>
                <div className="border border-[var(--brand-primary)]/20 p-4 rounded-sm bg-white">
                  <div className="font-semibold text-[var(--brand-deep)] text-[16px] mb-1">Touch/no-Touch</div>
                  <p className="text-[14px]">You bet whether the price will reach or not reach a defined price level at least once before the option expires.</p>
                </div>
                <div className="border border-[var(--brand-primary)]/20 p-4 rounded-sm bg-white">
                  <div className="font-semibold text-[var(--brand-deep)] text-[16px] mb-1">Boundary</div>
                  <p className="text-[14px]">You bet that price will not reach a certain level above or below the current traded price over a defined duration.</p>
                </div>
              </div>

              {/* Key Points Sub-Card */}
              <div className="mt-6 bg-[var(--brand-soft)] p-6 border border-[var(--brand-primary)]/30">
                <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-3">Key points</h4>
                <ul className="space-y-2.5 text-[14px]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Binary options are an extremely volatile and questionable speculative market with both the EU and UK banning retail binary options.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Very few regulated binary options brokers exist globally, drastically increasing risk to your invested capital.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Online Reclaims forensic investigations help recover money for binary options fraud victims worldwide.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Always conduct thorough due diligence on trading platform licenses and user withdrawal reviews.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: Are binary options a scam or legit? */}
            <div id="binary-3" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Are binary options a scam or legit?
              </h3>
              <p className="mb-4">
                Binary options are overwhelmingly fraudulent and predominantly operate as an illegitimate market. While regulated in restricted US exchange formats, binary options retail trading was banned outright across the EU in 2018 and the UK in 2019 due to predatory broker misconduct.
              </p>

              {/* 4 Scam Types */}
              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">1. Binary options robot scams</h4>
                  <p>
                    Robots or automated bots are promoted with false promises of algorithmic returns. Fraudsters solicit account credentials or API permissions, resulting in rapid account draining and artificial losses.
                  </p>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">2. Binary options software scams</h4>
                  <p>
                    Promoted as cutting-edge AI software, these proprietary web platforms manipulate simulated pricing charts to guarantee fake wins until withdrawal is requested, after which account access is revoked.
                  </p>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">3. Binary options trading scams</h4>
                  <p>
                    Unregulated offshore brokers manipulate price feeds in final fractions of seconds, triggering artificial margin calls and wiping out investor balances regardless of market trends.
                  </p>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">4. Binary options signal scams</h4>
                  <p>
                    Deceptive signal groups on Telegram and WhatsApp demand recurring membership fees while coordinating pump-and-dump schemes with untrustworthy affiliate brokerages.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Lost Money to a Binary Options Scam? */}
            <div id="binary-4" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Lost Money to a Binary Options Scam? Here’s How an Investigation can Help
              </h3>
              <p className="mb-4">
                Falling victim to a Binary Options scam can be a disheartening experience, but it doesn&#x27;t have to be the end of the road. An investigation can be the key to uncovering the truth, holding the scammers accountable, and reclaiming your losses. With our Binary Options Investigation services, you get direct access to top investigative talent.
              </p>
              <p className="mb-6">
                Our investigation culminates with a comprehensive Investigation Report which outlines forensic evidence, tracking payment destinations, bank account routing, and merchant categories.
              </p>

              <div className="bg-[var(--brand-soft)]/60 p-5 border-l-4 border-[var(--brand-accent)]">
                <h4 className="text-[16px] font-bold text-[var(--brand-deep)] mb-2">How to avoid Binary Options trading scams:</h4>
                <ul className="space-y-2 text-[14px]">
                  <li>• Only trade on registered domestic exchanges with verifiable license IDs.</li>
                  <li>• Never grant remote desktop access (AnyDesk, TeamViewer) to brokers.</li>
                  <li>• Refuse demands for advance tax or release fees to withdraw your own profits.</li>
                </ul>
              </div>
            </div>

            {/* Section 5: FAQ Accordion */}
            <div id="binary-5" className="scroll-mt-24 mb-6">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-6">
                Binary options scam FAQ
              </h3>

              <div className="divide-y divide-[var(--brand-primary)]/20 border border-[var(--brand-primary)]/20">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full py-4 px-5 flex items-center justify-between text-left font-bold text-[16px] text-[var(--brand-deep)] hover:text-[var(--brand-primary)] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`transition-transform duration-200 text-[var(--brand-primary)] ${
                          openFaq === idx ? 'rotate-180' : ''
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-5 text-[14px] text-[#616267] leading-[24px]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Table of Contents & Sticky Intake Card (376px width on desktop) */}
          <div className="w-full xl:w-[376px] flex-shrink-0 xl:sticky xl:top-28 space-y-6">
            {/* Table of Contents */}
            <aside className="border border-[var(--brand-primary)]/30 p-6 bg-white shadow-[8px_16px_32px_rgba(5,56,43,0.06)]">
              <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-4">Table of Contents</h4>
              <ul className="space-y-3">
                {tocLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className={`text-left text-[14px] leading-[20px] transition-colors hover:text-[var(--brand-primary)] ${
                        activeToc === link.id
                          ? 'font-bold text-[var(--brand-primary)] border-l-2 border-[var(--brand-primary)] pl-2'
                          : 'text-[#616267] pl-2 border-l-2 border-transparent'
                      }`}
                    >
                      {link.title}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Sticky Consultation CTA Card */}
            <aside className="bg-[var(--brand-primary)] text-white p-6 shadow-lg">
              <h4 className="text-[20px] font-bold text-white mb-2">Let’s start your investigation!</h4>
              <p className="text-[14px] text-[var(--brand-soft)] leading-[22px] mb-6">
                Get in touch and our team of experts will work tirelessly until they provide you the tools you need to get your money back.
              </p>
              <Link
                href="/contact-us/"
                className="block w-full py-3.5 bg-[#ffd700] hover:bg-[#ffe661] text-[var(--brand-primary)] font-bold text-[15px] text-center transition-colors"
              >
                Get a free consultation
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BinaryOptionsGuide;
