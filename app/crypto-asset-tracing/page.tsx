import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import ServiceProcessSteps from '@/components/services/ServiceProcessSteps';
import CryptoTracingGuide from '@/components/services/CryptoTracingGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: 'Crypto Asset Tracing - Get Your Stolen Crypto Back | Online Reclaims',
  description:
    'Our crypto asset tracing specialists utilize cutting-edge blockchain forensics to follow stolen digital currencies and build recovery strategies.',
  alternates: {
    canonical: 'https://onlinereclaims.com/crypto-asset-tracing/',
  },
  openGraph: {
    title: 'Crypto Asset Tracing - Get Your Stolen Crypto Back | Online Reclaims',
    description:
      'Our crypto asset tracing specialists utilize cutting-edge blockchain forensics to follow stolen digital currencies and build recovery strategies.',
    url: 'https://onlinereclaims.com/crypto-asset-tracing/',
    siteName: 'Online Reclaims',
    type: 'website',
    images: [
      {
        url: '/images/onlinereclaims.png',
        width: 1200,
        height: 630,
        alt: 'Crypto Asset Tracing',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Crypto Asset Tracing - Get Your Stolen Crypto Back | Online Reclaims',
    description:
      'Our crypto asset tracing specialists utilize cutting-edge blockchain forensics to follow stolen digital currencies and build recovery strategies.',
    images: ['/images/onlinereclaims.png'],
  },
};

const cryptoSteps = [
  {
    number: '01',
    title: 'Case Review',
    desc: 'Free, confidential consultation to review the specifics of your crypto loss, assess transaction hashes, and evaluate tracing feasibility.',
  },
  {
    number: '02',
    title: 'Gathering the Evidence',
    desc: 'Collaborative evidence collection including exchange receipts, destination wallet addresses, transaction IDs (TXIDs), and communications.',
  },
  {
    number: '03',
    title: 'Blockchain Analysis',
    desc: 'Multi-hop distributed ledger forensics mapping asset flows across wallets, smart contracts, bridges, and centralized crypto exchanges (CEXs).',
  },
  {
    number: '04',
    title: 'Transaction Mapping',
    desc: 'Visual flowchart documenting the exact trail of funds to identify recipient wallets, exchange deposit accounts, and KYC chokepoints.',
  },
  {
    number: '05',
    title: 'Recovery Strategies',
    desc: 'Customized restitution pathways leveraging law enforcement subpoenas, exchange freeze requests, and legal asset recovery filings.',
  },
];

export default function CryptoAssetTracingPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 01: Hero with Intake Form */}
      <ScamHero scamType="Digital Currency" />

      {/* 02: 5-Step Crypto Forensics Workflow */}
      <ServiceProcessSteps
        title="How it works"
        subtitle="Cutting-edge blockchain forensics and transaction mapping to track and recover stolen digital assets."
        steps={cryptoSteps}
      />

      {/* 03: Comprehensive Guide with TOC & Sticky CTA */}
      <CryptoTracingGuide />

      {/* 04: Call To Action Banner */}
      <LetsTalkCTA />

      {/* 05: Latest Articles Carousel */}
      <LatestArticlesSection />
    </main>
  );
}
