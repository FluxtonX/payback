import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import HowItWorksV2 from '@/components/scams/HowItWorksV2';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import RomanceGuide from '@/components/scams/RomanceGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: 'Romance Scams Recovery With PayBack',
  description:
    'If you have been ripped off by scammers, get in touch and our team of experts will work tirelessly until they provide you the tools you need to get your money back.',
  alternates: {
    canonical: 'https://payback.com/romance-scams/',
  },
  openGraph: {
    title: 'Romance Scams Recovery With PayBack',
    description:
      'If you have been ripped off by scammers, get in touch and our team of experts will work tirelessly until they provide you the tools you need to get your money back.',
    url: 'https://payback.com/romance-scams/',
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Romance Scams Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Romance Scams Recovery With PayBack',
    description:
      'If you have been ripped off by scammers, get in touch and our team of experts will work tirelessly until they provide you the tools you need to get your money back.',
    images: ['/images/payback_og.jpeg'],
  },
};

export default function RomanceScamsPage() {
  return (
    <main className="bg-white min-h-screen">
      <ScamHero
        scamType="Romance scam"
        title={
          <>
            <span className="text-[#ffd700]">Get your money back</span> from Romance Scams
          </>
        }
      />
      <HowItWorksV2 />
      <GuaranteeBlock />
      <RomanceGuide />
      <LetsTalkCTA />
      <LatestArticlesSection />
    </main>
  );
}
