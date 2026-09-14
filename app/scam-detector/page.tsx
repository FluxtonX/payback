import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';
import { scamDetectorData } from '@/data/phase9Data';

export const metadata: Metadata = {
  title: 'PayBack Scam Detector - Safe Browsing Chrome Extension | PayBack',
  description:
    'Avoid online scams while you browse with the PayBack Scam Detector. Our free Chrome extension cross-references over 20,000 known fraudulent websites in real time.',
  alternates: {
    canonical: 'https://payback.com/scam-detector/',
  },
  openGraph: {
    title: 'PayBack Scam Detector - Safe Browsing Chrome Extension | PayBack',
    description:
      'Avoid online scams while you browse with the PayBack Scam Detector. Our free Chrome extension cross-references over 20,000 known fraudulent websites in real time.',
    url: 'https://payback.com/scam-detector/',
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'PayBack Scam Detector',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'PayBack Scam Detector - Safe Browsing Chrome Extension | PayBack',
    description:
      'Avoid online scams while you browse with the PayBack Scam Detector. Our free Chrome extension cross-references over 20,000 known fraudulent websites in real time.',
    images: ['/images/payback_og.jpeg'],
  },
};

export default function ScamDetectorPage() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* 01: Hero Section */}
      <section className="bg-gradient-to-b from-[#063A2B] to-[#0B5D45] text-white py-16 md:py-24 px-4">
        <div className="container max-w-[960px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#eef7ee] text-[13px] font-semibold mb-6 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            Official Chrome Extension
          </div>

          <h1 className="text-[32px] sm:text-[44px] lg:text-[50px] font-bold text-white mb-6 leading-tight">
            {scamDetectorData.title}
          </h1>

          <p className="text-[16px] sm:text-[18px] text-[#f4f7f5]/90 max-w-[760px] mx-auto mb-10 leading-relaxed">
            {scamDetectorData.description}
          </p>

          <div>
            <a
              href={scamDetectorData.installLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 py-4 px-8 bg-[#eef7ee] hover:bg-white text-[var(--brand-deep)] font-bold text-[16px] rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c2.07 0 3.96.79 5.4 2.1l-2.4 2.4c-.81-.66-1.84-1.05-2.97-1.05-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5c2.18 0 4-1.54 4.41-3.6H12v-3.3h7.82c.07.42.11.85.11 1.3 0 4.42-3.58 8-8 8-4.42 0-8-3.58-8-8s3.58-8 8-8z"/>
              </svg>
              <span>Install Free Plugin</span>
            </a>
          </div>
        </div>
      </section>

      {/* 02: Alternating Feature Blocks */}
      <section className="py-16 md:py-24 space-y-16 md:space-y-24">
        {scamDetectorData.features.map((feat, idx) => (
          <div key={idx} className="container max-w-[1208px] mx-auto px-4">
            <div
              className={`flex flex-col ${
                idx % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-10 lg:gap-16`}
            >
              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="inline-block text-[13px] font-bold uppercase tracking-wider text-[var(--brand-primary)] bg-[#eef7ee] px-3 py-1 rounded">
                  Step 0{idx + 1}
                </div>
                <h2 className="text-[28px] sm:text-[36px] font-bold text-[var(--brand-deep)] leading-tight">
                  {feat.title}
                </h2>
                <p className="text-[15px] sm:text-[17px] leading-[28px] text-[#616267]">
                  {feat.description}
                </p>
              </div>

              {/* Graphic Side */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-lg border border-[#a0a6ba]/20 bg-[#F4F7F5] p-4 flex items-center justify-center">
                  <Image
                    src={feat.image}
                    alt={feat.title}
                    width={440}
                    height={320}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 03: CTA Banner */}
      <LetsTalkCTA />

      {/* 04: Latest Articles */}
      <LatestArticlesSection />
    </main>
  );
}
