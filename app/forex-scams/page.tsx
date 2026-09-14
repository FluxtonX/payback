import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import FraudsCarousel from '@/components/scams/FraudsCarousel';
import HowItWorksV2 from '@/components/scams/HowItWorksV2';
import ScamAdvertisementBanner from '@/components/scams/ScamAdvertisementBanner';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import ForexGuide from '@/components/scams/ForexGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: "Forex Scam Recovery With Online Reclaims",
  description: "Thousands of clients used our Investigation Report to retrieve their losses from forex fraud. Start with a free consultation.",
  alternates: {
    canonical: "https://onlinereclaims.com/forex-scams/",
  },
  openGraph: {
    title: "Forex Scam Recovery With Online Reclaims",
    description: "Thousands of clients used our Investigation Report to retrieve their losses from forex fraud. Start with a free consultation.",
    url: "https://onlinereclaims.com/forex-scams/",
    siteName: 'Online Reclaims',
    type: 'website',
    images: [
      {
        url: '/images/onlinereclaims.png',
        width: 1200,
        height: 630,
        alt: 'Forex Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "Forex Scam Recovery With Online Reclaims",
    description: "Thousands of clients used our Investigation Report to retrieve their losses from forex fraud. Start with a free consultation.",
    images: ['/images/onlinereclaims.png'],
  },
};

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <ScamHero scamType="Forex" />
      <FraudsCarousel />
      <HowItWorksV2 />
      <ScamAdvertisementBanner
        title="Forex Scams: Retrieve Your Lost Funds"
        description="The Forex market can be risky and since the industry itself isn't very well regulated, it can be hard for an everyday person to determine whether they've been duped. If you suspect you've been scammed, we can investigate your case and expose the fraud."
      />
      <GuaranteeBlock />
      <ForexGuide />
      <LetsTalkCTA />
      <LatestArticlesSection />
    </main>
  );
}
