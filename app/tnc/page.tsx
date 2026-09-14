import React from 'react';
import type { Metadata } from 'next';
import LegalDocLayout from '@/components/legal/LegalDocLayout';
import { phase10LegalData } from '@/data/phase10Data';

const data = phase10LegalData['tnc'];

export const metadata: Metadata = {
  title: `${data.title} | User Agreement`,
  description: data.description,
  alternates: {
    canonical: 'https://onlinereclaims.com/tnc/',
  },
  openGraph: {
    title: `${data.title} | User Agreement`,
    description: data.description,
    url: 'https://onlinereclaims.com/tnc/',
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
    title: `${data.title} | User Agreement`,
    description: data.description,
    images: ['/images/onlinereclaims.png'],
  },
};

export default function TermsAndConditionsPage() {
  return <LegalDocLayout data={data} badge="Terms of Service & Engagement" />;
}
