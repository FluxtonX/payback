'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'Are romance scams common?',
    a: 'Unfortunately, yes. More money is lost annually to romance scams than any other FTC fraud category. Scammers exploit emotional vulnerability to steal millions each year.',
  },
  {
    q: 'Where do romance scammers find their victims?',
    a: 'Dating websites and mobile apps are commonly used, but scammers also target individuals through social media platforms such as Instagram, Facebook, and language exchange apps.',
  },
  {
    q: 'What is a romance inheritance scam?',
    a: 'In an inheritance scam, the con artist claims they stand to inherit massive wealth overseas but need urgent funds from the victim to pay processing fees, taxes, or legal retainers.',
  },
  {
    q: 'Can a profile reveal a romance scammer?',
    a: 'Often yes. Warning signs include profile photos that look like professional models (reverse image search is vital), overseas work claims (military, offshore oil rigs, international NGOs), and refusal to video chat.',
  },
  {
    q: 'What questions can I ask to help spot a romance scammer?',
    a: 'Ask specific questions about their claimed hometown, request a live video call with specific gestures, or ask about verified mutual acquaintances to quickly expose fabricated personas.',
  },
  {
    q: 'What is the fastest-growing romance scam?',
    a: 'The "Pig Butchering" (Sha Zhu Pan) scam, combining emotional manipulation with fake cryptocurrency investment portals, is currently the fastest-growing and most devastating form of romance fraud globally.',
  },
  {
    q: 'What’s the biggest romance scam to date?',
    a: 'Multi-national syndicates have systematically defrauded hundreds of millions. In one high-profile case, syndicate members were convicted of orchestrating a decade-long scheme spanning dozens of countries.',
  },
  {
    q: 'I lost money to a romance scam. What can I do now?',
    a: 'Immediately cease all contact with the scammer, preserve every message, phone number, and wire transaction, and contact our forensic investigation team to initiate asset tracing and recovery procedures.',
  },
];

const tocLinks = [
  { id: 'romance-1', title: 'What are Romance Scams?' },
  { id: 'romance-2', title: 'Common Types of Romance Scams' },
  { id: 'romance-3', title: 'What To Do If Scammed' },
  { id: 'romance-4', title: 'How to Avoid Romance Scams' },
  { id: 'romance-5', title: 'Romance Scams FAQ' },
];

export const RomanceGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeToc, setActiveToc] = useState('romance-1');

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
              Retrieving your losses can be a lengthy process, and it all starts with our investigation. Therefore, we must have your cooperation to gather all communications and transaction records to build a winning recovery file.
            </div>

            {/* Section 1 */}
            <div id="romance-1" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                What are Romance Scams?
              </h3>
              <p className="mb-4">
                Romance scams occur when criminal con artists adopt fake online identities to gain a victim’s affection, trust, and intimacy. Once emotional dependency is established, the perpetrator manipulates the victim into sending money, gifts, or investing in fraudulent platforms.
              </p>
              <p>
                Romance scams cause devastating financial and psychological harm. Fraudsters often spend weeks or months grooming victims before requesting their first monetary transfer.
              </p>
            </div>

            {/* Section 2 */}
            <div id="romance-2" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Common Types of Romance Scams
              </h3>

              <div className="space-y-6">
                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">The "Classic" Romance Scam</h4>
                  <p className="text-[14px]">
                    The scammer matches on a dating app, professes rapid love, and creates emergency pretexts (urgent medical bills, passport renewal, flight tickets to meet) requiring wire transfers or gift cards.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">The "Pig Butchering" (Sha Zhu Pan) Scam</h4>
                  <p className="text-[14px]">
                    Scammers build long-term trust, then introduce a "lucrative trading platform." Victims see fabricated profits and deposit substantial savings, only to find withdrawals locked behind endless "taxes and clearance fees."
                  </p>
                </div>

                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">The "Military" Romance Scam</h4>
                  <p className="text-[14px]">
                    Perpetrators steal photos of real military officers deployed overseas, explaining away why they cannot meet in person or use video calls, while requesting funds for "leave forms" or equipment replacement.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Identity Theft & Money Muling</h4>
                  <p className="text-[14px]">
                    Victims are tricked into receiving funds from third parties and forwarding them overseas, unknowingly becoming illegal money mules for cybercrime networks.
                  </p>
                </div>
              </div>

              {/* Key Points */}
              <div className="bg-[var(--brand-soft)] p-6 border border-[var(--brand-primary)]/30 mt-6">
                <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-3">Key points</h4>
                <ul className="space-y-2.5 text-[14px]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Never send money, cryptocurrency, or wire transfers to someone you have never met face-to-face.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Conduct reverse image searches on all profile photos using Google Images or TinEye.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Be wary of sudden emergency requests or tips about "guaranteed crypto investments."</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div id="romance-3" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Scammed and Lost Money to a Romance Scam? Here’s What You Need to Do Next
              </h3>
              <p className="mb-4">
                1. Cut off all communications immediately. Do not confront the scammer, as this gives them time to liquidate accounts or move funds.
              </p>
              <p className="mb-4">
                2. Preserve all digital evidence, including chat logs, phone records, emails, wallet addresses, and wire receipts.
              </p>
              <p>
                3. Contact Online Reclaims’s forensic specialists. Our investigation maps transaction destinations and prepares legal reports to support bank chargeback claims and law enforcement actions.
              </p>
            </div>

            {/* Section 4 */}
            <div id="romance-4" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                How to Avoid Romance Scams
              </h3>
              <p className="mb-4">
                Always maintain healthy skepticism with online contacts. Insist on live video conversations early in the interaction, never share banking credentials, and speak with trusted family members or friends if money requests arise.
              </p>
            </div>

            {/* Section 5: FAQ */}
            <div id="romance-5" className="scroll-mt-24">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-6">
                Romance Scams FAQ
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
              <h4 className="text-[20px] font-bold mb-2">Let’s start your investigation!</h4>
              <p className="text-[14px] text-[var(--brand-soft)] mb-5">
                If you have been ripped off by scammers, our team of experts will work tirelessly to help you recover your losses.
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

export default RomanceGuide;
