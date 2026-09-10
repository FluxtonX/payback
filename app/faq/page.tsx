import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/faq/Breadcrumbs';
import FAQContent from '@/components/faq/FAQContent';

export const metadata: Metadata = {
  title: 'FAQ - Payback',
  description:
    'In order to better understand how Payback works, and the systems we have in place for the recovery of your funds, you’ll find below a series of frequently asked questions.',
  alternates: {
    canonical: 'https://payback.com/faq/',
  },
  openGraph: {
    title: 'FAQ - Payback',
    description:
      'In order to better understand how Payback works, and the systems we have in place for the recovery of your funds, you’ll find below a series of frequently asked questions.',
    url: 'https://payback.com/faq/',
    siteName: 'Payback',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Home',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'FAQ - Payback',
    description:
      'In order to better understand how Payback works, and the systems we have in place for the recovery of your funds, you’ll find below a series of frequently asked questions.',
    images: ['/images/payback_og.jpeg'],
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
