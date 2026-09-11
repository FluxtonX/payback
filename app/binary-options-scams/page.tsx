import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import HowItWorksV2 from '@/components/scams/HowItWorksV2';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import BinaryOptionsGuide from '@/components/scams/BinaryOptionsGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: 'Binary Options Scam Recovery With PayBack',
  description:
    'Thousands of clients used our Investigation Report to retrieve their losses from binary options fraud. Start with a free consultation.',
  alternates: {
    canonical: 'https://payback.com/binary-options-scams/',
  },
  openGraph: {
    title: 'Binary Options Scam Recovery With PayBack',
    description:
      'Thousands of clients used our Investigation Report to retrieve their losses from binary options fraud. Start with a free consultation.',
    url: 'https://payback.com/binary-options-scams/',
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Binary Options Scam Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Binary Options Scam Recovery With PayBack',
    description:
      'Thousands of clients used our Investigation Report to retrieve their losses from binary options fraud. Start with a free consultation.',
    images: ['/images/payback_og.jpeg'],
  },
};

export default function BinaryOptionsScamsPage() {
  return (
    <main className="bg-white min-h-screen">
      <ScamHero scamType="Binary options" />
      <HowItWorksV2 />
      <GuaranteeBlock />
      <BinaryOptionsGuide />
      <LetsTalkCTA />
      <LatestArticlesSection />
    </main>
  );
}
