import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import FraudsCarousel from '@/components/scams/FraudsCarousel';
import HowItWorksV2 from '@/components/scams/HowItWorksV2';
import ScamAdvertisementBanner from '@/components/scams/ScamAdvertisementBanner';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import CryptoGuide from '@/components/scams/CryptoGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: "Cryptocurrency Scam Recovery With Online Reclaims",
  description: "Thousands of clients used our Investigation Report to retrieve their losses from digital currency fraud. Start with a free consultation.",
  alternates: {
    canonical: "https://onlinereclaims.com/digital-currency-scams/",
  },
  openGraph: {
    title: "Cryptocurrency Scam Recovery With Online Reclaims",
    description: "Thousands of clients used our Investigation Report to retrieve their losses from digital currency fraud. Start with a free consultation.",
    url: "https://onlinereclaims.com/digital-currency-scams/",
    siteName: 'Online Reclaims',
    type: 'website',
    images: [
      {
        url: '/images/onlinereclaims.png',
        width: 1200,
        height: 630,
        alt: 'Digital Currency Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "Cryptocurrency Scam Recovery With Online Reclaims",
    description: "Thousands of clients used our Investigation Report to retrieve their losses from digital currency fraud. Start with a free consultation.",
    images: ['/images/onlinereclaims.png'],
  },
};

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <ScamHero scamType="Digital Currency" />
      <FraudsCarousel />
      <HowItWorksV2 />
      <ScamAdvertisementBanner
        title="Digital Currency Scams: Retrieve Your Lost Funds"
        description="The digital currency world can be exciting but risky. Scammers often take advantage of the complexity of cryptocurrencies to deceive investors with fraudulent schemes disguised as genuine opportunities. If you've fallen victim to a digital currency scam, don't lose hope."
      />
      <GuaranteeBlock />
      <CryptoGuide />
      <LetsTalkCTA />
      <LatestArticlesSection />
    </main>
  );
}
