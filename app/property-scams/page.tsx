import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import FraudsCarousel from '@/components/scams/FraudsCarousel';
import HowItWorksV2 from '@/components/scams/HowItWorksV2';
import ScamAdvertisementBanner from '@/components/scams/ScamAdvertisementBanner';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import PropertyGuide from '@/components/scams/PropertyGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: "Property Scams - Get Your Money Back! | PayBack",
  description: "Victim of a property scam? Recover your money with PayBack lawyers and fund recovery experts. Contact us today for a free consultation.",
  alternates: {
    canonical: "https://payback.com/property-scams/",
  },
  openGraph: {
    title: "Property Scams - Get Your Money Back! | PayBack",
    description: "Victim of a property scam? Recover your money with PayBack lawyers and fund recovery experts. Contact us today for a free consultation.",
    url: "https://payback.com/property-scams/",
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Property scam Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "Property Scams - Get Your Money Back! | PayBack",
    description: "Victim of a property scam? Recover your money with PayBack lawyers and fund recovery experts. Contact us today for a free consultation.",
    images: ['/images/payback_og.jpeg'],
  },
};

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <ScamHero
        scamType="Property scam"
        title={
          <>
            <span className="text-[#ffd700]">Get your money back</span> from Property Fraud & Scams
          </>
        }
      />
      <FraudsCarousel />
      <HowItWorksV2 />
      <ScamAdvertisementBanner
        title="Property Fraud: Retrieve Your Lost Funds"
        description="Property scams are becoming increasingly sophisticated, targeting both buyers and renters with deceptive tactics that can lead to significant financial losses. Our Investigation services can help you uncover the truth and take action to reclaim what's rightfully yours."
      />
      <GuaranteeBlock />
      <PropertyGuide />
      <LetsTalkCTA />
      <LatestArticlesSection />
    </main>
  );
}
