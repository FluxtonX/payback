import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/contact-us/Breadcrumbs';
import ContactUsHeader from '@/components/contact-us/ContactUsHeader';
import ContactUsForm from '@/components/contact-us/ContactUsForm';
import ContactUsFooter from '@/components/contact-us/ContactUsFooter';

export const metadata: Metadata = {
  title: 'Contact Us - Payback',
  description:
    'If you’ve been ripped off by scammers, get in touch and our team of experts will work to get your money back',
  openGraph: {
    title: 'Contact Us - Payback',
    description:
      'If you’ve been ripped off by scammers, get in touch and our team of experts will work to get your money back',
    url: 'https://payback.com/contact-us/',
    siteName: 'Payback',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Home',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us - Payback',
    description:
      'If you’ve been ripped off by scammers, get in touch and our team of experts will work to get your money back',
    images: ['/images/payback_og.jpeg'],
  },
};

export default function ContactUsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />
      <ContactUsHeader />
      <ContactUsForm />
      <ContactUsFooter />
    </div>
  );
}
