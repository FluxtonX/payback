import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import HowItWorksV2 from '@/components/scams/HowItWorksV2';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import FinancialGuide from '@/components/scams/FinancialGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: 'Financial Scams Recovery With PayBack',
  description:
    'If you have been ripped off by scammers, get in touch and our team of experts will work tirelessly until they provide you the tools you need to get your money back.',
  alternates: {
    canonical: 'https://payback.com/financial-scams/',
  },
  openGraph: {
    title: 'Financial Scams Recovery With PayBack',
    description:
      'If you have been ripped off by scammers, get in touch and our team of experts will work tirelessly until they provide you the tools you need to get your money back.',
    url: 'https://payback.com/financial-scams/',
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Financial Scams Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Financial Scams Recovery With PayBack',
    description:
      'If you have been ripped off by scammers, get in touch and our team of experts will work tirelessly until they provide you the tools you need to get your money back.',
    images: ['/images/payback_og.jpeg'],
  },
};

export default function FinancialScamsPage() {
  return (
    <main className="bg-white min-h-screen">
      <ScamHero
        scamType="Financial scams"
        title={
          <>
            <span className="text-[#ffd700]">Get your money back</span> from Financial Scams
          </>
        }
      />
      <HowItWorksV2 />
      <GuaranteeBlock />
      <FinancialGuide />
      <LetsTalkCTA />
      <LatestArticlesSection />
    </main>
  );
}
