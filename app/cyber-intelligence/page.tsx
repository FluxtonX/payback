import React from 'react';
import type { Metadata } from 'next';
import B2BServiceLayout from '@/components/services/B2BServiceLayout';
import { servicesBatch84Data } from '@/data/servicesBatch84';

const data = servicesBatch84Data['cyber-intelligence'];

export const metadata: Metadata = {
  title: `${data.title} | PayBack`,
  description: data.description,
  alternates: {
    canonical: 'https://payback.com/cyber-intelligence/',
  },
  openGraph: {
    title: `${data.title} | PayBack`,
    description: data.description,
    url: 'https://payback.com/cyber-intelligence/',
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

export default function CyberIntelligencePage() {
  return <B2BServiceLayout data={data} />;
}
