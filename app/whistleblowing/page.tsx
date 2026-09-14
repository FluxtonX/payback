import React from 'react';
import type { Metadata } from 'next';
import WhistleblowerReportForm from '@/components/tools/WhistleblowerReportForm';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';
import { phase10LegalData } from '@/data/phase10Data';

const data = phase10LegalData['whistleblowing'];

export const metadata: Metadata = {
  title: 'Whistleblowing & Scam Wallet Reporting | PayBack',
  description:
    'Report scam crypto wallets, fraudulent platforms, and illicit blockchain transactions securely. Join our global initiative to track, expose, and recover stolen assets.',
  alternates: {
    canonical: 'https://payback.com/whistleblowing/',
  },
  openGraph: {
    title: 'Whistleblowing & Scam Wallet Reporting | PayBack',
    description:
      'Report scam crypto wallets, fraudulent platforms, and illicit blockchain transactions securely. Join our global initiative to track, expose, and recover stolen assets.',
    url: 'https://payback.com/whistleblowing/',
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Whistleblowing Portal',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Whistleblowing & Scam Wallet Reporting | PayBack',
    description:
      'Report scam crypto wallets, fraudulent platforms, and illicit blockchain transactions securely. Join our global initiative to track, expose, and recover stolen assets.',
    images: ['/images/payback_og.jpeg'],
  },
};

export default function WhistleblowingPage() {
  return (
    <main className="bg-[#F4F7F5] min-h-screen font-sans">
      {/* 01: Top Banner */}
      <section className="bg-gradient-to-b from-[#063A2B] to-[#0B5D45] text-white py-14 md:py-20 px-4">
        <div className="container max-w-[1000px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#eef7ee] text-[13px] font-semibold mb-4 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            Confidential Integrity Portal
          </div>
          <h1 className="text-[32px] sm:text-[44px] lg:text-[50px] font-bold text-white mb-4 leading-tight">
            Whistleblower &amp; Fraud Wallet Reporting
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#f4f7f5]/90 max-w-[740px] mx-auto leading-relaxed">
            Report fraudulent cryptocurrency addresses, illicit decentralized exchanges, and malicious schemes. Your forensic evidence helps protect thousands of victims worldwide.
          </p>
        </div>
      </section>

      {/* 02: Interactive Whistleblower Report Form */}
      <section className="py-12 md:py-16 px-4">
        <div className="container max-w-[1208px] mx-auto">
          <WhistleblowerReportForm />
        </div>
      </section>

      {/* 03: Crypto Tracing Capabilities & Educational Guide */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container max-w-[1000px] mx-auto px-4 space-y-12 text-[#616267] text-[15px] sm:text-[16px] leading-[28px]">
          <div className="text-center max-w-[740px] mx-auto mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[var(--brand-deep)] mb-3">
              Our Crypto Tracing Capabilities
            </h2>
            <p className="text-[#616267] text-[15px]">
              How our forensic investigators trace illicit blockchain flows and assist in asset recovery.
            </p>
          </div>

          {data.articles.map((art, idx) => (
            <article key={idx} className="space-y-4 pb-8 border-b border-[#a0a6ba]/20 last:border-b-0">
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[var(--brand-deep)]">
                {art.title}
              </h3>
              <div className="space-y-4">
                {art.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 04: Bottom CTA */}
      <LetsTalkCTA />

      {/* 05: Latest Educational Articles */}
      <LatestArticlesSection />
    </main>
  );
}
