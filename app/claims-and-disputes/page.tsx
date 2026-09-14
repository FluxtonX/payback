import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import ServiceProcessSteps from '@/components/services/ServiceProcessSteps';
import GenericServiceGuide from '@/components/services/GenericServiceGuide';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';
import { servicesBatch82Data } from '@/data/servicesBatch82';

const data = servicesBatch82Data['claims-and-disputes'];

export const metadata: Metadata = {
  title: `${data.title} | PayBack`,
  description: data.description,
  alternates: {
    canonical: 'https://payback.com/claims-and-disputes/',
  },
  openGraph: {
    title: `${data.title} | PayBack`,
    description: data.description,
    url: 'https://payback.com/claims-and-disputes/',
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: data.title,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `${data.title} | PayBack`,
    description: data.description,
    images: ['/images/payback_og.jpeg'],
  },
};

export default function ClaimsAndDisputesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 01: Hero Section with Quick Intake Form */}
      <ScamHero scamType={data.heroScamType} />

      {/* 02: Step-by-Step Workflow */}
      <ServiceProcessSteps
        title="How it works"
        subtitle="Expert handling of digital asset claims, negotiations, and formal dispute proceedings."
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
