import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import HowItWorksV2 from '@/components/scams/HowItWorksV2';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import PropertyGuide from '@/components/scams/PropertyGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: 'Property Scams - Get Your Money Back! | PayBack',
  description:
    'Victim of a property scam? Recover your money with PayBack lawyers and fund recovery experts. Contact us today for a free consultation.',
  alternates: {
    canonical: 'https://payback.com/property-scams/',
  },
  openGraph: {
    title: 'Property Scams - Get Your Money Back! | PayBack',
    description:
      'Victim of a property scam? Recover your money with PayBack lawyers and fund recovery experts. Contact us today for a free consultation.',
    url: 'https://payback.com/property-scams/',
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Property Scams Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Property Scams - Get Your Money Back! | PayBack',
    description:
      'Victim of a property scam? Recover your money with PayBack lawyers and fund recovery experts. Contact us today for a free consultation.',
    images: ['/images/payback_og.jpeg'],
  },
};

export default function PropertyScamsPage() {
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
      <HowItWorksV2 />
      <GuaranteeBlock />
      <PropertyGuide />
      <LetsTalkCTA />
      <LatestArticlesSection />
    </main>
  );
}
