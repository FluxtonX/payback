import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import HowItWorksV2 from '@/components/scams/HowItWorksV2';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import CreditCardGuide from '@/components/scams/CreditCardGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: 'Credit Card Phishing Scams - Get Your Money Back! | PayBack',
  description:
    'Victim of a credit card phishing scam? Recover your money with PayBack lawyers and fund recovery experts. Contact us today for a free consultation.',
  alternates: {
    canonical: 'https://payback.com/credit-card-phishing/',
  },
  openGraph: {
    title: 'Credit Card Phishing Scams - Get Your Money Back! | PayBack',
    description:
      'Victim of a credit card phishing scam? Recover your money with PayBack lawyers and fund recovery experts. Contact us today for a free consultation.',
    url: 'https://payback.com/credit-card-phishing/',
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Credit Card Phishing Scams Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Credit Card Phishing Scams - Get Your Money Back! | PayBack',
    description:
      'Victim of a credit card phishing scam? Recover your money with PayBack lawyers and fund recovery experts. Contact us today for a free consultation.',
    images: ['/images/payback_og.jpeg'],
  },
};

export default function CreditCardPhishingPage() {
  return (
    <main className="bg-white min-h-screen">
      <ScamHero
        scamType="Credit card phishing"
        title={
          <>
            <span className="text-[#ffd700]">Get your money back</span> from Credit Card Fraud & Phishing Scams
          </>
        }
      />
      <HowItWorksV2 />
      <GuaranteeBlock />
      <CreditCardGuide />
      <LetsTalkCTA />
      <LatestArticlesSection />
    </main>
  );
}
