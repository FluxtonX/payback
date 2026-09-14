import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import ServiceProcessSteps from '@/components/services/ServiceProcessSteps';
import AmlGuide from '@/components/services/AmlGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: 'AML Compliance Services - Anti-Money Laundering Solutions | Online Reclaims',
  description:
    'Comprehensive Anti-Money Laundering (AML) consulting, risk assessments, transaction monitoring frameworks, and compliance audits for global businesses.',
  alternates: {
    canonical: 'https://onlinereclaims.com/aml-compliance/',
  },
  openGraph: {
    title: 'AML Compliance Services - Anti-Money Laundering Solutions | Online Reclaims',
    description:
      'Comprehensive Anti-Money Laundering (AML) consulting, risk assessments, transaction monitoring frameworks, and compliance audits for global businesses.',
    url: 'https://onlinereclaims.com/aml-compliance/',
    siteName: 'Online Reclaims',
    type: 'website',
    images: [
      {
        url: '/images/onlinereclaims.png',
        width: 1200,
        height: 630,
        alt: 'AML Compliance Services',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'AML Compliance Services - Anti-Money Laundering Solutions | Online Reclaims',
    description:
      'Comprehensive Anti-Money Laundering (AML) consulting, risk assessments, transaction monitoring frameworks, and compliance audits for global businesses.',
    images: ['/images/onlinereclaims.png'],
  },
};

const amlSteps = [
  {
    number: '01',
    title: 'Risk Assessment',
    desc: 'Thorough evaluation of institutional operations, client profiles, payment gateways, and jurisdictions to identify compliance exposure.',
  },
  {
    number: '02',
    title: 'Tailored AML Program Development',
    desc: 'Bespoke compliance policy manuals, governance frameworks, and operational controls engineered to meet statutory requirements.',
  },
  {
    number: '03',
    title: 'Customer Due Diligence (CDD)',
    desc: 'Rigorous onboarding verifications, identity validation, and sanction watchlist cross-referencing to eliminate illicit accounts.',
  },
  {
    number: '04',
    title: 'Enhanced Due Diligence (EDD)',
    desc: 'In-depth forensic background investigations, source-of-wealth documentation, and corporate registry verification for high-risk accounts.',
  },
  {
    number: '05',
    title: 'Transaction Monitoring',
    desc: 'Automated rules engine and anomaly detection algorithms to identify suspicious transactional structuring and flag illicit activity.',
  },
  {
    number: '06',
    title: 'Ongoing Training and Support',
    desc: 'Comprehensive staff compliance training, regulatory updates, and audit preparation to ensure sustained operational resilience.',
  },
];

export default function AmlCompliancePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 01: Hero with Quick Intake Form */}
      <ScamHero scamType="AML Compliance" />

      {/* 02: 6-Step AML Methodology Workflow */}
      <ServiceProcessSteps
        title="How it works"
        subtitle="A structured, regulator-grade Anti-Money Laundering framework to safeguard your organization against financial crime."
        steps={amlSteps}
      />

      {/* 03: Detailed Guide with TOC & Sticky CTA */}
      <AmlGuide />

      {/* 04: CTA Banner */}
      <LetsTalkCTA />

      {/* 05: Latest Articles Carousel */}
      <LatestArticlesSection />
    </main>
  );
}
