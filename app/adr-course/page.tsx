import React from 'react';
import type { Metadata } from 'next';
import ScamHero from '@/components/scams/ScamHero';
import ServiceProcessSteps from '@/components/services/ServiceProcessSteps';
import GenericServiceGuide from '@/components/services/GenericServiceGuide';
import ContactSection from '@/components/home/ContactSection';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';
import { servicesBatch83Data } from '@/data/servicesBatch83';

const data = servicesBatch83Data['adr-course'];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: {
    canonical: 'https://payback.com/adr-course/',
  },
  openGraph: {
    title: data.title,
    description: data.description,
    url: 'https://payback.com/adr-course/',
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
    title: data.title,
    description: data.description,
    images: ['/images/payback_og.jpeg'],
  },
};

export default function AdrCoursePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 01: Hero Section with Quick Intake Form */}
      <ScamHero scamType={data.heroScamType} />

      {/* 02: Step-by-Step Methodology */}
      <ServiceProcessSteps
        title="How it works"
        subtitle="Our core training modules designed to elevate your dispute resolution capabilities."
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

      {/* 04: Our ADR Experts Contact Form */}
      <ContactSection />

      {/* 05: Bottom CTA */}
      <LetsTalkCTA />

      {/* 06: Latest Educational Articles */}
      <LatestArticlesSection />
    </main>
  );
}
