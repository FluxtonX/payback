import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import FraudsCarousel from '@/components/scams/FraudsCarousel';
import ServiceProcessSteps from '@/components/services/ServiceProcessSteps';
import StatsCallout from '@/components/home/StatsCallout';
import WhyWorkSection from '@/components/home/WhyWorkSection';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import InvestigationPackages from '@/components/home/InvestigationPackages';
import OurTeamSection from '@/components/home/OurTeamSection';
import ScamTypesSection from '@/components/home/ScamTypesSection';
import CyberInvestigationGuide from '@/components/services/CyberInvestigationGuide';
import ContactSection from '@/components/home/ContactSection';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';

export const metadata: Metadata = {
  title: 'Cyber Investigation Services - Get Your Money Back! | PayBack',
  description:
    'Our Cyber Investigation and Action Plan are the tools you need to recover funds lost to various online scams. It’s Time to Get Your Money Back!',
  alternates: {
    canonical: 'https://payback.com/cyber-investigations/',
  },
  openGraph: {
    title: 'Cyber Investigation Services - Get Your Money Back! | PayBack',
    description:
      'Our Cyber Investigation and Action Plan are the tools you need to recover funds lost to various online scams. It’s Time to Get Your Money Back!',
    url: 'https://payback.com/cyber-investigations/',
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Cyber Investigation Services',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Cyber Investigation Services - Get Your Money Back! | PayBack',
    description:
      'Our Cyber Investigation and Action Plan are the tools you need to recover funds lost to various online scams. It’s Time to Get Your Money Back!',
    images: ['/images/payback_og.jpeg'],
  },
};

export default function CyberInvestigationsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 01: Hero Section with Quick Intake Form */}
      <ScamHero scamType="Cyber investigation" />

      {/* 02: Frauds Investigated Carousel */}
      <FraudsCarousel />

      {/* 03: 6-Step Forensic Investigation Workflow */}
      <ServiceProcessSteps
        title="How it works"
        subtitle="A proven, transparent step-by-step methodology to uncover digital evidence and reclaim lost assets."
      />

      {/* 04: Money Retrieved Stats Banner */}
      <StatsCallout />

      {/* 05: Why Work With Us */}
      <WhyWorkSection />

      {/* 06: 14-Day Money Back Guarantee */}
      <GuaranteeBlock />

      {/* 07: CTA Banner */}
      <LetsTalkCTA />

      {/* 08: Investigation Packages Pricing */}
      <InvestigationPackages />

      {/* 09: Our Team */}
      <OurTeamSection />

      {/* 10: Scam Types We Investigate */}
      <ScamTypesSection />

      {/* 11: Comprehensive Guide with TOC & Sticky CTA */}
      <CyberInvestigationGuide />

      {/* 12: Comprehensive 7-Field Intake Contact Form */}
      <ContactSection />

      {/* 13: Latest Articles Carousel */}
      <LatestArticlesSection />
    </main>
  );
}
