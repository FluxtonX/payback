import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import HowItWorksV2 from '@/components/scams/HowItWorksV2';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import StockGuide from '@/components/scams/StockGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: 'Stock Market Scam Recovery With PayBack',
  description:
    'Our team of lawyers make it their purpose to help those who got scammed by fraudulent brokers. We are here to help you get your money back from stock market fraud.',
  alternates: {
    canonical: 'https://payback.com/stock-trading-scams/',
  },
  openGraph: {
    title: 'Stock Market Scam Recovery With PayBack',
    description:
      'Our team of lawyers make it their purpose to help those who got scammed by fraudulent brokers. We are here to help you get your money back from stock market fraud.',
    url: 'https://payback.com/stock-trading-scams/',
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Stock Market Scam Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Stock Market Scam Recovery With PayBack',
    description:
      'Our team of lawyers make it their purpose to help those who got scammed by fraudulent brokers. We are here to help you get your money back from stock market fraud.',
    images: ['/images/payback_og.jpeg'],
  },
};

export default function StockTradingScamsPage() {
  return (
    <main className="bg-white min-h-screen">
      <ScamHero
        scamType="Stock Trading"
        title={
          <>
            <span className="text-[#ffd700]">Get your money back</span> from Stock Market Scams
          </>
        }
      />
      <HowItWorksV2 />
      <GuaranteeBlock />
      <StockGuide />
      <LetsTalkCTA />
      <LatestArticlesSection />
    </main>
  );
}
