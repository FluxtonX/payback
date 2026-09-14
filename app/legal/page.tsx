import React from 'react';
import type { Metadata } from 'next';
import LegalDocLayout from '@/components/legal/LegalDocLayout';
import { phase10LegalData } from '@/data/phase10Data';

const data = phase10LegalData['legal'];

export const metadata: Metadata = {
  title: `${data.title} | Regulatory Notice`,
  description: data.description,
  alternates: {
    canonical: 'https://onlinereclaims.com/legal/',
  },
  openGraph: {
    title: `${data.title} | Regulatory Notice`,
    description: data.description,
    url: 'https://onlinereclaims.com/legal/',
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
    title: `${data.title} | Regulatory Notice`,
    description: data.description,
    images: ['/images/onlinereclaims.png'],
  },
};

export default function LegalPage() {
  return <LegalDocLayout data={data} badge="Regulatory & Compliance Notice" />;
}
