import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import AboutHero from '@/components/about-us/AboutHero';
import TonyRobbinsQuote from '@/components/about-us/TonyRobbinsQuote';
import OurMissionSection from '@/components/about-us/OurMissionSection';
import OurVisionSection from '@/components/about-us/OurVisionSection';
import WhatSetsApartSection from '@/components/about-us/WhatSetsApartSection';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import CeoStatement from '@/components/about-us/CeoStatement';
import AboutTeamSection from '@/components/about-us/AboutTeamSection';
import PaybackTimeStatement from '@/components/about-us/PaybackTimeStatement';
import ScamTypesSection from '@/components/home/ScamTypesSection';
import PartnerContactForm from '@/components/about-us/PartnerContactForm';

export const metadata: Metadata = {
  title: 'About Us - PayBack',
  description:
    'Payback is one of the leading chargeback firms worldwide. Specializing in online trading scams (Forex, Binary Options, Digital Currencies, etc), we pride ourselves on',
  openGraph: {
    title: 'About Us - PayBack',
    description:
      'Payback is one of the leading chargeback firms worldwide. Specializing in online trading scams (Forex, Binary Options, Digital Currencies, etc), we pride ourselves on',
    url: 'https://payback.com/about-us/',
    siteName: 'Payback',
    images: [
      {
        url: 'https://payback.com/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Home',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About Us - PayBack',
    description:
      'Payback is one of the leading chargeback firms worldwide. Specializing in online trading scams (Forex, Binary Options, Digital Currencies, etc), we pride ourselves on',
    images: ['https://payback.com/images/payback_og.jpeg'],
  },
  alternates: {
    canonical: 'https://payback.com/about-us/',
  },
};

export default function AboutUsPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'About Us' }]} />

      {/* 01: About Us Hero */}
      <AboutHero />

      {/* 02: Tony Robbins Quote Card */}
      <TonyRobbinsQuote />

      {/* 03: Our Mission */}
      <OurMissionSection />

      {/* 04: Our Vision */}
      <OurVisionSection />

      {/* 05: What Sets Payback Apart */}
      <WhatSetsApartSection />

      {/* 06: Retrieve your money from a scam! CTA */}
      <LetsTalkCTA />

      {/* 07: Our CEO Card */}
      <CeoStatement />

      {/* 08: About Our Team */}
      <AboutTeamSection />

      {/* 09: It's Payback Time! Statement Card */}
      <PaybackTimeStatement />

      {/* 10: Scam Types Grid (Reusable) */}
      <ScamTypesSection />

      {/* 11: Contact Us Form */}
      <PartnerContactForm />
    </>
  );
}
