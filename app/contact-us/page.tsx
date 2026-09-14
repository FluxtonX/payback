import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/contact-us/Breadcrumbs';
import ContactUsHeader from '@/components/contact-us/ContactUsHeader';
import ContactUsForm from '@/components/contact-us/ContactUsForm';
import ContactUsFooter from '@/components/contact-us/ContactUsFooter';

export const metadata: Metadata = {
  title: 'Contact Us - Online Reclaims',
  description:
    'If you’ve been ripped off by scammers, get in touch and our team of experts will work to get your money back',
  openGraph: {
    title: 'Contact Us - Online Reclaims',
    description:
      'If you’ve been ripped off by scammers, get in touch and our team of experts will work to get your money back',
    url: 'https://onlinereclaims.com/contact-us/',
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
    title: 'Contact Us - Online Reclaims',
    description:
      'If you’ve been ripped off by scammers, get in touch and our team of experts will work to get your money back',
    images: ['/images/onlinereclaims.png'],
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
