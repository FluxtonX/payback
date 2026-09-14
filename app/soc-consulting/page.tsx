import React from 'react';
import type { Metadata } from 'next';
import B2BServiceLayout from '@/components/services/B2BServiceLayout';
import { servicesBatch84Data } from '@/data/servicesBatch84';

const data = servicesBatch84Data['soc-consulting'];

export const metadata: Metadata = {
  title: `${data.title} | Online Reclaims`,
  description: data.description,
  alternates: {
    canonical: 'https://onlinereclaims.com/soc-consulting/',
  },
  openGraph: {
    title: `${data.title} | Online Reclaims`,
    description: data.description,
    url: 'https://onlinereclaims.com/soc-consulting/',
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

export default function SocConsultingPage() {
  return <B2BServiceLayout data={data} />;
}
