import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScamTypesSection from '@/components/home/ScamTypesSection';
import { fraudPreventionToolsData } from '@/data/phase9Data';

export const metadata: Metadata = {
  title: 'Fraud Prevention Tools | Online Reclaims',
  description:
    'Discover reliable fraud prevention tools, cybersecurity resources, identity protection, and anti-phishing utilities to stay safe online with Online Reclaims.',
  alternates: {
    canonical: 'https://onlinereclaims.com/fraud-prevention-tools/',
  },
  openGraph: {
    title: 'Fraud Prevention Tools | Online Reclaims',
    description:
      'Discover reliable fraud prevention tools, cybersecurity resources, identity protection, and anti-phishing utilities to stay safe online with Online Reclaims.',
    url: 'https://onlinereclaims.com/fraud-prevention-tools/',
    siteName: 'Online Reclaims',
    type: 'website',
    images: [
      {
        url: '/images/onlinereclaims.png',
        width: 1200,
        height: 630,
        alt: 'Fraud Prevention Tools',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Fraud Prevention Tools | Online Reclaims',
    description:
      'Discover reliable fraud prevention tools, cybersecurity resources, identity protection, and anti-phishing utilities to stay safe online with Online Reclaims.',
    images: ['/images/onlinereclaims.png'],
  },
};

export default function FraudPreventionToolsPage() {
  return (
    <main className="bg-[#F4F7F5] min-h-screen font-sans">
      {/* 01: Top Banner / Title Header */}
      <section className="bg-white border-b border-[#a0a6ba]/20 py-12 md:py-16">
        <div className="container max-w-[1208px] mx-auto px-4 text-center">
          <div className="inline-block text-[13px] font-bold uppercase tracking-wider text-[var(--brand-primary)] bg-[#eef7ee] px-3.5 py-1.5 rounded-full mb-4">
            Security Ecosystem
          </div>
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-[var(--brand-deep)] mb-4 leading-tight">
            Fraud Prevention Tools
          </h1>
          <p className="text-[15px] sm:text-[17px] leading-[26px] text-[#616267] max-w-[740px] mx-auto">
            Explore our curated directory of verified security, forensic analysis, identity protection, and anti-fraud tools to protect your digital assets and navigate the internet safely.
          </p>
        </div>
      </section>

      {/* 02: Tools Grid */}
      <section className="py-12 md:py-20">
        <div className="container max-w-[1208px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {fraudPreventionToolsData.map((tool, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#a0a6ba]/25 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-16 h-16 rounded-xl bg-[#F4F7F5] border border-[#a0a6ba]/20 flex items-center justify-center p-2 flex-shrink-0 overflow-hidden relative">
                      <Image
                        src={tool.logo}
                        alt={tool.title}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-[20px] sm:text-[22px] font-bold text-[var(--brand-deep)] group-hover:text-[var(--brand-primary)] transition-colors">
                        {tool.title}
                      </h2>
                      <span className="text-[12px] font-semibold text-[var(--brand-primary)] bg-[#eef7ee] px-2 py-0.5 rounded">
                        Verified Tool
                      </span>
                    </div>
                  </div>

                  <p className="text-[14px] sm:text-[15px] leading-[24px] text-[#616267] mb-6">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#a0a6ba]/15 flex items-center justify-between">
                  <a
                    href={tool.productLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2.5 px-4 bg-[#eef7ee] hover:bg-[var(--brand-primary)] text-[var(--brand-primary)] hover:text-white text-[14px] font-bold rounded-lg transition-all duration-200"
                  >
                    <span>Visit website</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>

                  {tool.reviewLink && (
                    <Link
                      href={tool.reviewLink}
                      className="text-[14px] font-medium text-[#616267] hover:text-[var(--brand-primary)] transition-colors underline"
                    >
                      Read review
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03: Scam Types Section */}
      <ScamTypesSection />
    </main>
  );
}
