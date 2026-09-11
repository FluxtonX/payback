'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'Can you get scammed on Digital Coins?',
    a: 'Scammers and fraudsters exist everywhere, and this is especially true when it comes to digital currencies. As a volatile asset class, be very cautious when evaluating unregulated opportunities, staking pools, and private wallet requests in this investment space.',
  },
  {
    q: 'How can you spot a Digital Coins scammer?',
    a: 'Digital Coins scammers often use high-pressure tactics, creating artificial urgency around once-in-a-lifetime pre-sales, offering guaranteed daily interest yields, and presenting fake wallet balances or screenshots to induce larger deposits.',
  },
  {
    q: 'Can you lose money on Digital Coins?',
    a: 'Yes. Beyond ordinary market volatility and price fluctuations, fraud, unauthorized smart contract drains, and fake exchanges represent total capital loss risks. Forensic investigation helps distinguish genuine market loss from criminal misappropriation.',
  },
  {
    q: 'How We Empower You to Take Action',
    a: 'At Payback, we specialize in helping victims of cryptocurrency and digital currency fraud. We trace on-chain transactions, identify wallet clusters, unmask exchange deposit endpoints, and prepare actionable intelligence for law enforcement and dispute processes.',
  },
];

const tocLinks = [
  { id: 'crypto-1', title: 'What is digital currency?' },
  { id: 'crypto-2', title: 'Three important Digital Currencies' },
  { id: 'crypto-3', title: 'Is digital currency a scam?' },
  { id: 'crypto-4', title: 'Fall prey to a scam? How to get money back' },
  { id: 'crypto-5', title: 'What is Crypto Asset Recovery?' },
  { id: 'crypto-6', title: 'The Role of Blockchain Technology' },
  { id: 'crypto-7', title: 'Legal Frameworks and Regulations' },
  { id: 'crypto-8', title: 'A Tailored Approach' },
  { id: 'crypto-9', title: 'How to avoid digital currency scams' },
  { id: 'crypto-10', title: 'Crypto Scam FAQ' },
];

export const CryptoGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeToc, setActiveToc] = useState('crypto-1');

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
              The first step to protecting yourself from frauds and scams is to be knowledgeable of these threats and always be one step ahead of the scammers. But even if you were scammed, there’s no need to worry because our cyber specialists can help trace your digital assets and pursue fund recovery.
            </div>

            {/* Section 1: What is digital currency? */}
            <div id="crypto-1" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                What is digital currency?
              </h3>
              <p className="mb-4">
                Digital currency is a form of currency that exists only in digital or electronic form. At its core, it’s meant to be a secure and decentralized medium of exchange, often using blockchain technology to record transactions. Due to its potential for high returns, it has gained immense popularity in recent years. However, high volatility and pseudo-anonymity also make it fertile ground for sophisticated cyber fraudsters.
              </p>
            </div>

            {/* Section 2: Three important Digital Currencies */}
            <div id="crypto-2" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Three important Digital Currencies
              </h3>
              
              <div className="space-y-4">
                <div className="border border-[var(--brand-primary)]/20 p-4 rounded-sm bg-white">
                  <h5 className="font-semibold text-[var(--brand-deep)] text-[16px] mb-1">Bitcoin (Digital Coins):</h5>
                  <p className="text-[14px]">The original and most valuable digital currency, viewed as &quot;digital gold&quot; due to its fixed 21M supply cap and store-of-value potential. First deployed in 2009, it operates on a decentralized proof-of-work blockchain network.</p>
                </div>
                <div className="border border-[var(--brand-primary)]/20 p-4 rounded-sm bg-white">
                  <h5 className="font-semibold text-[var(--brand-deep)] text-[16px] mb-1">Ethereum:</h5>
                  <p className="text-[14px]">The second-largest cryptocurrency by market cap and the foundational engine for smart contracts and decentralized finance (DeFi). Its underlying virtual machine executes programmable transactions.</p>
                </div>
                <div className="border border-[var(--brand-primary)]/20 p-4 rounded-sm bg-white">
                  <h5 className="font-semibold text-[var(--brand-deep)] text-[16px] mb-1">Ripple (XRP):</h5>
                  <p className="text-[14px]">Engineered for high-speed cross-border settlement between banking institutions, highlighting the balance between decentralized protocols and institutional regulatory scrutiny.</p>
                </div>
              </div>

              {/* Key Points Sub-Card */}
              <div className="mt-6 bg-[var(--brand-soft)] p-6 border border-[var(--brand-primary)]/30">
                <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-3">Key points</h4>
                <ul className="space-y-2.5 text-[14px]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Digital currencies present novel investment opportunities alongside substantial cybersecurity and counterparty risks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Beware of unrealistic promises of rapid wealth, automated compounding, or risk-free daily interest.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Always verify destination wallet addresses, domain SSL certificates, and exchange regulatory credentials.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Never share your private keys, recovery seed phrases, or remote screen access with third parties.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: Is digital currency a scam? */}
            <div id="crypto-3" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Is digital currency a scam?
              </h3>
              <p className="mb-4">
                Cryptocurrency itself is a legitimate technological innovation, but the lack of centralized clearinghouses and irreversible transaction properties create an enticing environment for fraudsters. Here are the 7 most frequent scams targeting cryptocurrency investors:
              </p>

              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">1. Cloud Mining Scams</h4>
                  <p className="text-[14px]">Fraudulent platforms solicit investment into nonexistent cloud mining farms, promising passive dividends while simply using newer deposits to pay earlier investors until the site disappears.</p>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">2. Fake Wallet &amp; Phishing Apps</h4>
                  <p className="text-[14px]">Cloned mobile wallets and malicious browser extensions designed to steal seed phrases or silently swap recipient wallet addresses in the clipboard during copy-paste actions.</p>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">3. Pump and Dump Schemes</h4>
                  <p className="text-[14px]">Coordinated groups artificially inflate the price of low-liquidity altcoins using social media hype, then dump their reserves on unsuspecting retail buyers.</p>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">4. Multi-Level Pyramid Schemes</h4>
                  <p className="text-[14px]">Schemes disguised as educational packages or token pre-sales that mandate recruitments of new members to earn tier-based compensation.</p>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">5. ICO &amp; Rug Pull Exit Scams</h4>
                  <p className="text-[14px]">Developers mint a new token, promote it heavily on Telegram or Twitter, lock liquidity superficially, and suddenly drain the liquidity pool once substantial capital is raised.</p>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">6. Excessive Yield &amp; Fake Staking Scams</h4>
                  <p className="text-[14px]">DeFi platforms offering unsustainable 50%–200% annual percentage yields (APY), locking funds in unverified smart contracts that include backdoors for admin withdrawal.</p>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-[var(--brand-deep)] mb-1">7. Fraudulent Exchange Platforms</h4>
                  <p className="text-[14px]">Fake cryptocurrency trading platforms designed to look identical to legitimate exchanges. Users can deposit and see paper gains, but withdrawal requests result in demands for additional &quot;clearance fees&quot; or frozen accounts.</p>
                </div>
              </div>
            </div>

            {/* Section 4: Fall prey to a scam? */}
            <div id="crypto-4" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Fall prey to a Digital Currency scam? How you can get your money back
              </h3>
              <p className="mb-4">
                If you have fallen victim to a digital currency scam, remember that public blockchains are distributed ledgers where every single transaction leaves an indelible digital footprint. No transaction is entirely invisible or untraceable.
              </p>
              <p className="mb-6">
                Payback employs blockchain analytics tools and intelligence databases to track stolen tokens through intermediary mixers, cross-chain bridges, and unhosted wallets directly to Know-Your-Customer (KYC) compliant off-ramps and centralized exchanges.
              </p>
              <div className="bg-[var(--brand-soft)]/60 p-5 border-l-4 border-[var(--brand-accent)]">
                <p className="text-[14px] text-[var(--brand-deep)] font-medium">
                  Have your crypto assets been stolen?{' '}
                  <Link href="/contact-us/" className="text-[var(--brand-primary)] underline hover:text-[var(--brand-accent)] font-semibold">
                    Submit your transaction hashes for a preliminary forensic review.
                  </Link>
                </p>
              </div>
            </div>

            {/* Section 5: What is Crypto Asset Recovery? */}
            <div id="crypto-5" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                What is Crypto Asset Recovery?
              </h3>
              <p>
                Crypto asset recovery is a multidisciplinary practice combining blockchain forensic tracing, cyber intelligence, legal document preparation, and exchange liaison. By mapping the full transaction graph from the victim&apos;s wallet to custodian deposit addresses, investigators assemble verifiable evidentiary dossiers suitable for law enforcement subpoenas and asset freezing orders.
              </p>
            </div>

            {/* Section 6: The Role of Blockchain Technology */}
            <div id="crypto-6" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                The Role of Blockchain Technology
              </h3>
              <p>
                While the immutable nature of the blockchain prevents manual chargebacks, its radical transparency enables forensic tracking. Every block contains transaction timestamps, sender addresses, recipient addresses, and contract interactions. Our analysts use transaction graph visualization to follow the movement of illicit proceeds across complex laundering hops.
              </p>
            </div>

            {/* Section 7: Legal Frameworks and Regulations */}
            <div id="crypto-7" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Legal Frameworks and Regulations
              </h3>
              <p>
                Regulatory scrutiny over virtual asset service providers (VASPs) has expanded under FATF Travel Rule guidelines. Regulated exchanges across the US, EU, UK, and Asia are legally obligated to freeze flagged illicit deposits and respond to verified police disclosure notices. Payback aligns forensic reports with official law enforcement and judicial standards.
              </p>
            </div>

            {/* Section 8: A Tailored Approach */}
            <div id="crypto-8" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                A Tailored Approach
              </h3>
              <p>
                Every crypto theft involves unique technical parameters: differing chains (Bitcoin, Ethereum, Solana, TRON), smart contract interactions, and decentralized protocols. We structure an individualized recovery roadmap for every case, ensuring tailored evidence documentation that directly targets where the fraudsters cashed out.
              </p>
            </div>

            {/* Section 9: How to avoid digital currency scams */}
            <div id="crypto-9" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                How to avoid digital currency scams
              </h3>
              <ul className="space-y-2.5 text-[14px]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-accent)] font-bold">•</span>
                  <span><strong>Store in Hardware Wallets:</strong> For long-term holdings, use offline hardware devices (Ledger, Trezor) rather than leaving assets on exchanges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-accent)] font-bold">•</span>
                  <span><strong>Verify Smart Contract Approvals:</strong> Regularly audit and revoke unlimited token allowances using tools like Revoke.cash.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-accent)] font-bold">•</span>
                  <span><strong>Verify Domain URLs:</strong> Bookmark authentic exchange URLs to prevent typo-squatting and malicious Google search ad clones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--brand-accent)] font-bold">•</span>
                  <span><strong>Reject Unsolicited Direct Messages:</strong> Legitimate crypto support staff will never direct message you first asking for seed phrases.</span>
                </li>
              </ul>
            </div>

            {/* Section 10: FAQ Accordion */}
            <div id="crypto-10" className="scroll-mt-24 mb-6">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-6">
                Crypto Scam FAQ
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
              <ul className="space-y-2.5">
                {tocLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className={`text-left text-[13px] leading-[18px] transition-colors hover:text-[var(--brand-primary)] ${
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

export default CryptoGuide;
