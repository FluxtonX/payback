'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'How do I spot a credit card phishing scam?',
    a: 'Credit card phishing scams operate in different ways, but the scammers almost always try to induce panic by claiming account suspensions or fraudulent charges requiring immediate login via suspicious links.',
  },
  {
    q: 'What are the most common types of credit card phishing scam methods?',
    a: 'The most common vectors are fraudulent emails (phishing), malicious SMS messages (smishing), counterfeit online portals, and automated phone calls (vishing) requesting CCV and OTP codes.',
  },
  {
    q: 'Can you get your money back from a credit card phishing scam?',
    a: 'Absolutely! Victims of credit card phishing scams can successfully reclaim stolen funds via bank chargeback mechanisms, card issuer dispute processes, and forensic recovery documentation provided by Online Reclaims.',
  },
];

const tocLinks = [
  { id: 'cc-1', title: 'What Is Phishing?' },
  { id: 'cc-2', title: 'How Do Credit Card Phishing Scams Work?' },
  { id: 'cc-3', title: 'The Most Common Phishing Methods' },
  { id: 'cc-4', title: 'What Can You Do Next?' },
  { id: 'cc-5', title: 'How To Avoid Credit Card Phishing' },
  { id: 'cc-6', title: 'Credit Card Phishing FAQ' },
];

export const CreditCardGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeToc, setActiveToc] = useState('cc-1');

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
              Retrieving your losses can be a lengthy process, and it all starts with our investigation. Therefore, we must have your cooperation to compile statement logs, phishing communications, and bank dispute notices.
            </div>

            {/* Section 1 */}
            <div id="cc-1" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                What Is Phishing?
              </h3>
              <p className="mb-4">
                Phishing is a cybercrime technique where attackers deceive targets into providing sensitive data, such as personally identifiable information, banking passwords, and credit card credentials.
              </p>
              <p>
                Attackers impersonate trusted institutions like Visa, MasterCard, major domestic banks, or commercial logistics couriers to compel immediate action.
              </p>
            </div>

            {/* Section 2 */}
            <div id="cc-2" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                How Do Credit Card Phishing Scams Work?
              </h3>
              <p className="mb-4">
                Credit card phishing attacks typically begin with an urgent notification warning that an account has been compromised or a high-value purchase was initiated. The notification provides a link to a fraudulent clone website that captures credit card numbers, CVVs, expiration dates, and two-factor authentication codes.
              </p>

              {/* Key Points */}
              <div className="bg-[var(--brand-soft)] p-6 border border-[var(--brand-primary)]/30 mb-6">
                <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-3">Key points</h4>
                <ul className="space-y-2.5 text-[14px]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Financial institutions will never request your full card CVV or SMS one-time passcode over the phone or email.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Verify sender email addresses and web domains for subtle misspellings (typosquatting).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Prompt action under Fair Credit Billing statutory timelines significantly improves chargeback success.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div id="cc-3" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                The Most Common Credit Card Phishing Scams Methods
              </h3>

              <div className="space-y-6">
                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Credit Card Phishing Websites</h4>
                  <p className="text-[14px]">
                    Cloned payment gateways that intercept entered credit card numbers, billing addresses, and security codes during fake checkout procedures.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Phishing Emails</h4>
                  <p className="text-[14px]">
                    Deceptive notifications mimicking bank headers, warning of "security breaches" or "suspended cards," urging the recipient to click malicious verification links.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Phishing Texts (Smishing)</h4>
                  <p className="text-[14px]">
                    Urgent SMS messages warning of unauthorized debit transactions or undelivered packages that require payment of small clearance charges.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Phishing Phone Calls (Vishing)</h4>
                  <p className="text-[14px]">
                    Automated voice recordings or live operators posing as fraud department agents, requesting card verification details to "cancel" a phantom transaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="cc-4" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Victim of a Credit Card Phishing Scam? Want to know what you can do next?
              </h3>
              <p className="mb-4">
                1. Immediately call your card issuer’s official fraud hotline to cancel the compromised card and prevent unauthorized secondary charges.
              </p>
              <p className="mb-4">
                2. Request an expedited chargeback investigation under card scheme rules (Visa / Mastercard zero liability protections).
              </p>
              <p>
                3. Consult Online Reclaims’s forensic specialists to structure formal dispute documentation that satisfies card network dispute arbitration criteria.
              </p>
            </div>

            {/* Section 5 */}
            <div id="cc-5" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                How To Avoid a Credit Card Phishing Scam
              </h3>
              <p className="mb-4">
                Enable multi-factor biometric authentication, review card statements weekly, never click direct links in unexpected communications, and verify inquiries directly through your bank’s official mobile app.
              </p>
            </div>

            {/* Section 6: FAQ */}
            <div id="cc-6" className="scroll-mt-24">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-6">
                Credit Card Phishing FAQ
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
                Victim of a credit card phishing scam? Recover your money with Online Reclaims lawyers and fund recovery experts.
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

export default CreditCardGuide;
