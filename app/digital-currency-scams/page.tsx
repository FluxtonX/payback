import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import HowItWorksV2 from '@/components/scams/HowItWorksV2';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import CryptoGuide from '@/components/scams/CryptoGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: 'Digital Coins & Digital Currency Scam Recovery With Payback',
  description:
    "Recover the money lost in Digital Coins and Digital Currency scams with PayBack specialists. Retrieve the money rightfully yours!",
  alternates: {
    canonical: 'https://payback.com/digital-currency-scams/',
  },
  openGraph: {
    title: 'Digital Coins & Digital Currency Scam Recovery With Payback',
    description:
      "Recover the money lost in Digital Coins and Digital Currency scams with PayBack specialists. Retrieve the money rightfully yours!",
    url: 'https://payback.com/digital-currency-scams/',
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Digital Currency Scam Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Digital Coins & Digital Currency Scam Recovery With Payback',
    description:
      "Recover the money lost in Digital Coins and Digital Currency scams with PayBack specialists. Retrieve the money rightfully yours!",
    images: ['/images/payback_og.jpeg'],
  },
};

export default function DigitalCurrencyScamsPage() {
  return (
    <main className="bg-white min-h-screen">
      <ScamHero scamType="Digital Currency" />
      <HowItWorksV2 />
      <GuaranteeBlock />
      <CryptoGuide />
      <LetsTalkCTA />
      <LatestArticlesSection />
    </main>
  );
}
