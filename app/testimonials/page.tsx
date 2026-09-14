import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/testimonials/Breadcrumbs';
import TestimonialsHeader from '@/components/testimonials/TestimonialsHeader';
import VideoReviewsGrid from '@/components/testimonials/VideoReviewsGrid';
import TestimonialsMiddle from '@/components/testimonials/TestimonialsMiddle';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import ScamTypesSection from '@/components/testimonials/ScamTypesSection';

export const metadata: Metadata = {
  title: 'Testimonials - Online Reclaims',
  description:
    'Read real reviews from our satisfied clients and discover how Online Reclaims has successfully helped recover lost funds.',
  openGraph: {
    title: 'Testimonials - Online Reclaims',
    description:
      'Read real reviews from our satisfied clients and discover how Online Reclaims has successfully helped recover lost funds.',
    url: 'https://onlinereclaims.com/testimonials/',
    siteName: 'Online Reclaims',
    images: [
      {
        url: '/images/onlinereclaims.png',
        width: 1200,
        height: 630,
        alt: 'Home',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Testimonials - Online Reclaims',
    description:
      'Read real reviews from our satisfied clients and discover how Online Reclaims has successfully helped recover lost funds.',
    images: ['/images/onlinereclaims.png'],
  },
};

export default function TestimonialsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />
      <TestimonialsHeader />
      <VideoReviewsGrid />
      <TestimonialsMiddle />
      <LetsTalkCTA />
      <ScamTypesSection />
    </div>
  );
}
