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
    q: 'Is Forex a pyramid scheme?',
    a: "No – but there are scams and fraudsters that create pyramid schemes. This kind of behavior exists everywhere and is endemic to all traded financial markets. If you are looking for a broker and they're offering to put you into a 'team' to build a network, odds are it's a pyramid scheme.",
  },
  {
    q: 'Who regulates the forex markets?',
    a: 'Several major regulatory bodies/agencies around the globe regulate forex markets. In the US, brokers are regulated by the NFA (National Futures Association) and the CFTC (Commodity Futures Trading Commission). In the UK, the main regulatory body is the FCA (Financial Conduct Authority). In the EU, standards are established by the MiFID framework.',
  },
  {
    q: 'How do I know if a broker is legit?',
    a: 'One of the first signs that a broker is legitimate is if they disclose that they are registered with a specific major national regulatory authority such as the FCA (UK), CFTC/NFA (US), or ASIC (Australia). Another reliable way to evaluate legitimacy is to research verified independent reviews and past client experiences.',
  },
];

const tocLinks = [
  { id: 'forex-1', title: 'What is forex trading?' },
  { id: 'forex-2', title: 'Is forex trading a scam?' },
  { id: 'forex-3', title: 'How to spot a forex scam' },
  { id: 'forex-4', title: 'What can I do after a Forex scam?' },
  { id: 'forex-5', title: 'Forex Scam FAQ' },
];

export const ForexGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeToc, setActiveToc] = useState('forex-1');

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
              Forex scams are unfortunately common, which is why it’s important to understand how these scams operate and what steps you can take to protect yourself. That’s why we at Online Reclaims are dedicated to empowering our clients with the knowledge and tools they need to avoid Forex fraud altogether. We believe that informed investors are better equipped to make sound decisions.
            </div>

            {/* Section 1: What is forex trading? */}
            <div id="forex-1" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                What is forex trading?
              </h3>
              <p className="mb-4">
                Forex is the single largest traded market globally, with up to five trillion traded each day and is considered decentralized because there is no central processor for trades – in other words, there is no entity that acts as a central exchange like the NASDAQ or the NYSE. Instead, orders are completed by millions of traders using millions of various forex brokers around the world.
              </p>
              <p>
                Foreign currency trading is one of the most leveraged markets in the world as well. In the US, regulations limit a person to 50:1 leverage. In other countries, they have zero limits on leverage. It is not uncommon to see some non-US brokers offer 1000+:1. Due to these factors, scams can be prevalent within the foreign exchange market.
              </p>
            </div>

            {/* Section 2: Is forex trading a scam? */}
            <div id="forex-2" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Is forex trading a scam?
              </h3>
              <p className="mb-4">
                In the investment world, forex is the wild-west of traditional financial instruments. Most participants are massive institutions like commercial banks managing cross-currency trade. But it is also by far the most accessible market for retail investors. While stock day trading in the US requires a $25,000 minimum balance, forex brokers often require as little as $1 to open an account.
              </p>
              <p className="mb-6">
                The combination of high leverage and 24-hour liquidity makes it exceptionally appealing, which unfortunately attracts bad actors. Many offshore jurisdictions impose little to no supervision, allowing dishonest entities to launch fake brokerages. It is always safest to trade exclusively with brokers authorized in the US, EU, UK, or Australia.
              </p>

              {/* Key Points Sub-Card */}
              <div className="bg-[var(--brand-soft)] p-6 border border-[var(--brand-primary)]/30">
                <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-3">Key points</h4>
                <ul className="space-y-2.5 text-[14px]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Using a regulated broker ensures that your funds remain held in segregated tier-one bank accounts under official statutory oversight.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Avoid deceptive offerings such as guaranteed signal providers, exaggerated robotic trading bots, and misleading educational packages.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>If you have fallen victim to an unregulated Forex brokerage, Online Reclaims forensic reports help trace digital payment trails to pursue restitution.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: How to spot a forex scam */}
            <div id="forex-3" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                How to spot a forex scam
              </h3>
              <p className="mb-6">
                The scams that exist in the foreign exchange world take many shapes. Here are the 9 most prominent warning signs to watch out for:
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">1. Broker’s Excessive Leverage</h4>
                  <p className="text-[14px]">Regulated bodies cap leverage near 50:1. When an offshore platform promises 500:1 or 1000:1 leverage, they are setting up a predatory environment designed to liquidate your account instantly.</p>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">2. Undisclosed Trading Parameters</h4>
                  <p className="text-[14px]">Avoid platforms with arbitrary restrictions, such as forcing minimum stop-loss distances or forbidding trade closure within a set number of minutes.</p>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">3. Obstructive Withdrawal Rules</h4>
                  <p className="text-[14px]">Scam brokers frequently invent volume rollover minimums, claim non-existent taxes must be prepaid in advance, or freeze accounts once a withdrawal request is submitted.</p>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">4. Manipulated Spreads</h4>
                  <p className="text-[14px]">Unscrupulous brokers artificially widen spreads in the final fractions of seconds before candle close, hunting stop losses and forcing margin calls.</p>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">5. Signal Sellers &amp; Guaranteed Pips</h4>
                  <p className="text-[14px]">Telegram and social media signal sellers boasting &quot;95% accuracy&quot; are often paid affiliates earning kickbacks on client losses from partner scam brokers.</p>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">6. Broker Spam &amp; Boiler Rooms</h4>
                  <p className="text-[14px]">High-pressure phone calls urging immediate deposits, unsolicited WhatsApp messages, and fake comparison sites promoting a single broker are clear red flags.</p>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">7. Unverified Educational Academies</h4>
                  <p className="text-[14px]">Extravagant courses costing thousands of dollars that promise trading mastery in weeks often teach obsolete patterns or funnel students to offshore brokerages.</p>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">8. Automated Trading Bots &amp; Fake AI</h4>
                  <p className="text-[14px]">Beware of automated robot software marketed as self-learning AI algorithms. Real high-frequency institutional algorithms are never sold to the public for a minor fee.</p>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">9. Flashy Lifestyles &amp; Luxury Imagery</h4>
                  <p className="text-[14px]">Influencers displaying private jets, exotic supercars, and stacks of cash are using staged props to exploit psychological vulnerability. Real financial professionals never market through lifestyle vanity.</p>
                </div>
              </div>
            </div>

            {/* Section 4: What can I do after a Forex scam? */}
            <div id="forex-4" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                What can I do after a Forex scam?
              </h3>
              <p className="mb-4">
                Dealing with the aftermath of a Forex trading scam can be overwhelming, especially when communicating with uncooperative offshore companies. However, victims have legal dispute channels, banking chargeback mechanisms, and regulatory escalation frameworks available.
              </p>
              <p className="mb-6">
                Online Reclaims assists victims by reviewing payment channels (credit cards, bank wires, crypto rails), compiling an authoritative Investigation Report, and structuring an actionable recovery dossier to present to financial authorities.
              </p>
              <div className="bg-[var(--brand-soft)]/60 p-5 border-l-4 border-[var(--brand-accent)]">
                <p className="text-[14px] text-[var(--brand-deep)] font-medium">
                  Have you lost funds to an unregulated Forex brokerage?{' '}
                  <Link href="/contact-us/" className="text-[var(--brand-primary)] underline hover:text-[var(--brand-accent)] font-semibold">
                    Get in touch with our specialists for a free consultation.
                  </Link>
                </p>
              </div>
            </div>

            {/* Section 5: Forex Scam FAQ */}
            <div id="forex-5" className="scroll-mt-24 mb-6">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-6">
                Forex Scam FAQ
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

export default ForexGuide;
