import React from 'react';
import type { Metadata } from 'next';
import LegalDocLayout from '@/components/legal/LegalDocLayout';
import { phase10LegalData } from '@/data/phase10Data';

const data = phase10LegalData['legal'];

export const metadata: Metadata = {
  title: `${data.title} | Regulatory Notice`,
  description: data.description,
  alternates: {
    canonical: 'https://payback.com/legal/',
  },
  openGraph: {
    title: `${data.title} | Regulatory Notice`,
    description: data.description,
    url: 'https://payback.com/legal/',
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
    title: `${data.title} | Regulatory Notice`,
    description: data.description,
    images: ['/images/payback_og.jpeg'],
  },
};

export default function LegalPage() {
  return <LegalDocLayout data={data} badge="Regulatory & Compliance Notice" />;
}
