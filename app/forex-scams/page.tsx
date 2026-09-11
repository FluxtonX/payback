import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import HowItWorksV2 from '@/components/scams/HowItWorksV2';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import ForexGuide from '@/components/scams/ForexGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: 'Forex Trading Scam Recovery With PayBack',
  description:
    "Our team of highly experienced lawyers make it their purpose to help those who got scammed by Forex brokers. It's Your Money - Get it Back!",
  alternates: {
    canonical: 'https://payback.com/forex-scams/',
  },
  openGraph: {
    title: 'Forex Trading Scam Recovery With PayBack',
    description:
      "Our team of highly experienced lawyers make it their purpose to help those who got scammed by Forex brokers. It's Your Money - Get it Back!",
    url: 'https://payback.com/forex-scams/',
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Forex Trading Scam Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Forex Trading Scam Recovery With PayBack',
    description:
      "Our team of highly experienced lawyers make it their purpose to help those who got scammed by Forex brokers. It's Your Money - Get it Back!",
    images: ['/images/payback_og.jpeg'],
  },
};

export default function ForexScamsPage() {
  return (
    <main className="bg-white min-h-screen">
      <ScamHero scamType="Forex" />
      <HowItWorksV2 />
      <GuaranteeBlock />
      <ForexGuide />
      <LetsTalkCTA />
      <LatestArticlesSection />
    </main>
  );
}
