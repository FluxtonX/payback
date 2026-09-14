import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/faq/Breadcrumbs';
import FAQContent from '@/components/faq/FAQContent';

export const metadata: Metadata = {
  title: 'FAQ - Online Reclaims',
  description:
    'In order to better understand how Online Reclaims works, and the systems we have in place for the recovery of your funds, you’ll find below a series of frequently asked questions.',
  alternates: {
    canonical: 'https://onlinereclaims.com/faq/',
  },
  openGraph: {
    title: 'FAQ - Online Reclaims',
    description:
      'In order to better understand how Online Reclaims works, and the systems we have in place for the recovery of your funds, you’ll find below a series of frequently asked questions.',
    url: 'https://onlinereclaims.com/faq/',
    siteName: 'Online Reclaims',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/onlinereclaims.png',
        width: 1200,
        height: 630,
        alt: 'Home',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'FAQ - Online Reclaims',
    description:
      'In order to better understand how Online Reclaims works, and the systems we have in place for the recovery of your funds, you’ll find below a series of frequently asked questions.',
    images: ['/images/onlinereclaims.png'],
  },
};

export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />
      <FAQContent />
    </div>
  );
}
