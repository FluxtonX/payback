import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import FraudsCarousel from '@/components/scams/FraudsCarousel';
import HowItWorksV2 from '@/components/scams/HowItWorksV2';
import ScamAdvertisementBanner from '@/components/scams/ScamAdvertisementBanner';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import StockGuide from '@/components/scams/StockGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: "Stock Market Scam Recovery With Online Reclaims",
  description: "Our team of lawyers make it their purpose to help those who got scammed by fraudulent brokers. We are here to help you get your money back from stock market fraud.",
  alternates: {
    canonical: "https://onlinereclaims.com/stock-trading-scams/",
  },
  openGraph: {
    title: "Stock Market Scam Recovery With Online Reclaims",
    description: "Our team of lawyers make it their purpose to help those who got scammed by fraudulent brokers. We are here to help you get your money back from stock market fraud.",
    url: "https://onlinereclaims.com/stock-trading-scams/",
    siteName: 'Online Reclaims',
    type: 'website',
    images: [
      {
        url: '/images/onlinereclaims.png',
        width: 1200,
        height: 630,
        alt: 'Stock Trading Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "Stock Market Scam Recovery With Online Reclaims",
    description: "Our team of lawyers make it their purpose to help those who got scammed by fraudulent brokers. We are here to help you get your money back from stock market fraud.",
    images: ['/images/onlinereclaims.png'],
  },
};

export default function Page() {
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
      <FraudsCarousel />
      <HowItWorksV2 />
      <ScamAdvertisementBanner
        title="Stock Trading Scams: Retrieve Your Lost Funds"
        description="We all want to make money from our investments, and unfortunately, scammers know how to exploit that desire. If you suspect you've fallen victim to a stock trading scam, don't let that be the end of the story. Our Investigation services can help you expose the fraud and reclaim your losses."
      />
      <GuaranteeBlock />
      <StockGuide />
      <LetsTalkCTA />
      <LatestArticlesSection />
    </main>
  );
}
