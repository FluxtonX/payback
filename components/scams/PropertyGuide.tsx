'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'How Do I Spot a Property Rental Scam?',
    a: 'Properties that do not match listings, landlords who refuse to meet in person or conduct video tours, and demands for immediate upfront deposits via untraceable wire methods before signing official leases.',
  },
  {
    q: 'How Do I Spot Property Buying Scams?',
    a: 'Know official market values in the target area and reject deals priced unreasonably low. Always demand independent title searches, licensed escrow officers, and in-person inspections.',
  },
  {
    q: 'What Are the Most Common Property Scams To Be Aware Of?',
    a: 'Besides fake rental listings and phantom sales, prominent schemes include escrow wire interception, deed theft / title fraud, foreclosure relief scams, and fraudulent loan flipping.',
  },
  {
    q: 'Can I Get My Money Back From a Property Scam?',
    a: 'Yes, recovery is possible. Online Reclaims’s investigative team traces domestic and international wire payments, works with receiving banks and escrow institutions, and assists in launching swift recovery proceedings.',
  },
];

const tocLinks = [
  { id: 'prop-1', title: 'How Does Property Fraud Work?' },
  { id: 'prop-2', title: 'Common Property Buying Scams' },
  { id: 'prop-3', title: 'Common Rental Property Scams' },
  { id: 'prop-4', title: 'Property Scams Online' },
  { id: 'prop-5', title: 'How To Spot Property Scams' },
  { id: 'prop-6', title: 'How To Avoid Property Scams' },
  { id: 'prop-7', title: 'Property Scams FAQ' },
];

export const PropertyGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeToc, setActiveToc] = useState('prop-1');

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
              Retrieving your losses can be a lengthy process, and it all starts with our investigation. Therefore, we must have your cooperation to compile deed records, escrow communications, and wire transfer documents.
            </div>

            {/* Section 1 */}
            <div id="prop-1" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                How Does Property Fraud Work?
              </h3>
              <p className="mb-4">
                Property scams vary greatly in how they are executed, but they all aim to steal substantial capital from unsuspecting buyers, renters, and property owners. Real estate transactions involve large sums, making them high-value targets for criminal fraudsters.
              </p>

              {/* Key Points */}
              <div className="bg-[var(--brand-soft)] p-6 border border-[var(--brand-primary)]/30 mb-6">
                <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-3">Key points</h4>
                <ul className="space-y-2.5 text-[14px]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Never pay anything upfront to view a property or before verifying the deed and executing a written contract.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Always verify escrow wire instructions by phoning your verified closing officer via a known, trusted telephone number.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>Perform independent registry checks with local county land records before transferring funds.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div id="prop-2" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Common Property Buying Scams
              </h3>

              <div className="space-y-6">
                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Escrow Wire Fraud</h4>
                  <p className="text-[14px]">
                    Hackers compromise real estate attorney or title company email accounts, emailing modified closing wire instructions to buyers shortly before completion to siphon purchase funds.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Title & Deed Theft</h4>
                  <p className="text-[14px]">
                    Scammers forge property deeds using fabricated notary stamps, transfer homeownership to shell companies, and take out mortgage equity loans against the stolen property.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 hover:border-[var(--brand-accent)] transition-colors">
                  <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Foreclosure Relief Scams</h4>
                  <p className="text-[14px]">
                    Predators prey on financially distressed homeowners, promising to "rescue" the property while surreptitiously having owners sign away deed titles under misleading documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="prop-3" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Common Rental Property Scams
              </h3>
              <p className="mb-4">
                Rental fraud accounts for thousands of complaints annually. Scammers duplicate legitimate real estate listings onto Craigslist or Facebook Marketplace, claiming to be out-of-town owners who cannot show the unit in person and demanding security deposits via P2P apps.
              </p>
            </div>

            {/* Section 4 */}
            <div id="prop-4" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                Property Scams Online
              </h3>
              <p className="mb-4">
                Criminal networks maintain sophisticated spoof websites mimicking national property agencies. These platforms capture user financial profiles, collect fictitious application fees, and disappear within weeks.
              </p>
            </div>

            {/* Section 5 */}
            <div id="prop-5" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                How To Spot Property Scams
              </h3>
              <p className="mb-4">
                Red flags include requests for wire transfers or gift cards, landlords refusing in-person or live video walkthroughs, absence of written contracts, and rental prices significantly below fair market value.
              </p>
            </div>

            {/* Section 6 */}
            <div id="prop-6" className="scroll-mt-24 mb-10">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-4">
                How To Avoid Property Scams
              </h3>
              <p className="mb-4">
                Always conduct transactions through accredited, licensed real estate brokerages and escrow agents. In-person property verification and strict verbal wire confirmation are essential safeguards.
              </p>
            </div>

            {/* Section 7: FAQ */}
            <div id="prop-7" className="scroll-mt-24">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-[var(--brand-deep)] mb-6">
                Property Scams FAQ
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
                Victim of a property scam? Recover your money with Online Reclaims lawyers and fund recovery experts.
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

export default PropertyGuide;
