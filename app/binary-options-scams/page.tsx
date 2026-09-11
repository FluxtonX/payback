import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import FraudsCarousel from '@/components/scams/FraudsCarousel';
import HowItWorksV2 from '@/components/scams/HowItWorksV2';
import ScamAdvertisementBanner from '@/components/scams/ScamAdvertisementBanner';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import BinaryOptionsGuide from '@/components/scams/BinaryOptionsGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: "Binary Options Scam Recovery With PayBack",
  description: "Thousands of clients used our Investigation Report to retrieve their losses from binary options fraud. Start with a free consultation.",
  alternates: {
    canonical: "https://payback.com/binary-options-scams/",
  },
  openGraph: {
    title: "Binary Options Scam Recovery With PayBack",
    description: "Thousands of clients used our Investigation Report to retrieve their losses from binary options fraud. Start with a free consultation.",
    url: "https://payback.com/binary-options-scams/",
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Binary options Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "Binary Options Scam Recovery With PayBack",
    description: "Thousands of clients used our Investigation Report to retrieve their losses from binary options fraud. Start with a free consultation.",
    images: ['/images/payback_og.jpeg'],
  },
};

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <ScamHero scamType="Binary options" />
      <FraudsCarousel />
      <HowItWorksV2 />
      <ScamAdvertisementBanner
        title="Binary Options Scam: Retrieve Your Lost Funds"
        description="If you had the misfortune of getting scammed by one of thousands of fraudulent Binary Options brokers, we're here to help you get to the bottom of what happened. The sooner we start investigating, the sooner you'll have the tools you need to reclaim what's yours."
      />
      <GuaranteeBlock />
      <BinaryOptionsGuide />
      <LetsTalkCTA />
      <LatestArticlesSection />
    </main>
  );
}
