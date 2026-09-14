import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import ServiceProcessSteps from '@/components/services/ServiceProcessSteps';
import KycGuide from '@/components/services/KycGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: 'KYC Services - Identity Verification & Compliance | Online Reclaims',
  description:
    'Comprehensive KYC solutions, identity verification, risk assessments, and compliance advisory tailored for fintech, crypto, and enterprise platforms.',
  alternates: {
    canonical: 'https://onlinereclaims.com/kyc-services/',
  },
  openGraph: {
    title: 'KYC Services - Identity Verification & Compliance | Online Reclaims',
    description:
      'Comprehensive KYC solutions, identity verification, risk assessments, and compliance advisory tailored for fintech, crypto, and enterprise platforms.',
    url: 'https://onlinereclaims.com/kyc-services/',
    siteName: 'Online Reclaims',
    type: 'website',
    images: [
      {
        url: '/images/onlinereclaims.png',
        width: 1200,
        height: 630,
        alt: 'KYC Services',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'KYC Services - Identity Verification & Compliance | Online Reclaims',
    description:
      'Comprehensive KYC solutions, identity verification, risk assessments, and compliance advisory tailored for fintech, crypto, and enterprise platforms.',
    images: ['/images/onlinereclaims.png'],
  },
};

const kycSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    desc: 'In-depth review of your operating framework, regulatory jurisdictions, and risk parameters to calibrate tailored onboarding flows.',
  },
  {
    number: '02',
    title: 'Gather Information',
    desc: 'Systematic collection of client identifiers, government credentials, corporate registration, and beneficial ownership documentation.',
  },
  {
    number: '03',
    title: 'Verify Identity',
    desc: 'Multi-point biometric verification, document authenticity validation, and cross-referencing against global authoritative databases.',
  },
  {
    number: '04',
    title: 'Assess Risk',
    desc: 'Multi-variable risk scoring evaluating jurisdiction, source of wealth, expected transaction volume, and client profile type.',
  },
  {
    number: '05',
    title: 'Enhanced Due Diligence (EDD)',
    desc: 'Comprehensive investigative screening for PEPs, high-net-worth individuals, and high-risk jurisdictions to ensure full compliance.',
  },
  {
    number: '06',
    title: 'Ongoing Monitoring',
    desc: 'Real-time sanction screening, adverse media alerts, and periodic profile recertification to maintain operational integrity.',
  },
];

export default function KycServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 01: Hero with Quick Intake Form */}
      <ScamHero scamType="KYC Services" />

      {/* 02: 6-Step KYC Methodology Workflow */}
      <ServiceProcessSteps
        title="How Our KYC Process Works"
        subtitle="A secure, compliant, and transparent onboarding verification methodology designed for modern digital organizations."
        steps={kycSteps}
      />

      {/* 03: Detailed Guide with TOC & Sticky CTA */}
      <KycGuide />

      {/* 04: CTA Banner */}
      <LetsTalkCTA />

      {/* 05: Latest Articles Carousel */}
      <LatestArticlesSection />
    </main>
  );
}
