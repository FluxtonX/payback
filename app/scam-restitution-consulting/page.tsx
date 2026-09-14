import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import ServiceProcessSteps from '@/components/services/ServiceProcessSteps';
import GenericServiceGuide from '@/components/services/GenericServiceGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';
import { servicesBatch82Data } from '@/data/servicesBatch82';

const data = servicesBatch82Data['scam-restitution-consulting'];

export const metadata: Metadata = {
  title: `${data.title} | Online Reclaims`,
  description: data.description,
  alternates: {
    canonical: 'https://onlinereclaims.com/scam-restitution-consulting/',
  },
  openGraph: {
    title: `${data.title} | Online Reclaims`,
    description: data.description,
    url: 'https://onlinereclaims.com/scam-restitution-consulting/',
    siteName: 'Online Reclaims',
    type: 'website',
    images: [
      {
        url: '/images/onlinereclaims.png',
        width: 1200,
        height: 630,
        alt: data.title,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `${data.title} | Online Reclaims`,
    description: data.description,
    images: ['/images/onlinereclaims.png'],
  },
};

export default function ScamRestitutionConsultingPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 01: Hero Section with Quick Intake Form */}
      <ScamHero scamType={data.heroScamType} />

      {/* 02: Step-by-Step Workflow */}
      <ServiceProcessSteps
        title="How it works"
        subtitle="A clear, structured consulting process to evaluate your restitution case and formulate actionable recovery steps."
        steps={data.steps}
      />

      {/* 03: Comprehensive Guide with TOC & Sticky CTA */}
      <GenericServiceGuide
        topIntro={data.topIntro}
        tocItems={data.tocItems}
        articles={data.articles}
        stickyTitle={data.stickyTitle}
        stickyContent={data.stickyContent}
        stickyButtonText="Get a free consultation"
        stickyButtonHref="/contact-us/"
      />

      {/* 04: Bottom CTA */}
      <LetsTalkCTA />

      {/* 05: Latest Educational Articles */}
      <LatestArticlesSection />
    </main>
  );
}
