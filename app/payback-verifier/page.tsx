import React from 'react';
import type { Metadata } from 'next';
import PaybackVerifierWidget from '@/components/tools/PaybackVerifierWidget';
import ScamTypesSection from '@/components/home/ScamTypesSection';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';
import ContactSection from '@/components/home/ContactSection';

export const metadata: Metadata = {
  title: "Verify It's Payback | Official Representative Verification",
  description:
    'Protect yourself against impersonators and copycats. Verify official Payback email addresses, phone numbers, WhatsApp contacts, and social profiles.',
  alternates: {
    canonical: 'https://payback.com/payback-verifier/',
  },
  openGraph: {
    title: "Verify It's Payback | Official Representative Verification",
    description:
      'Protect yourself against impersonators and copycats. Verify official Payback email addresses, phone numbers, WhatsApp contacts, and social profiles.',
    url: 'https://payback.com/payback-verifier/',
    siteName: 'Payback',
    type: 'website',
    images: [
      {
        url: '/images/payback_og.jpeg',
        width: 1200,
        height: 630,
        alt: "Verify It's Payback",
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "Verify It's Payback | Official Representative Verification",
    description:
      'Protect yourself against impersonators and copycats. Verify official Payback email addresses, phone numbers, WhatsApp contacts, and social profiles.',
    images: ['/images/payback_og.jpeg'],
  },
};

export default function PaybackVerifierPage() {
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* 01: Hero & Verification Widget */}
      <section className="bg-gradient-to-b from-[#063A2B] to-[#0B5D45] text-white py-16 md:py-24 px-4">
        <div className="container max-w-[1000px] mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#eef7ee] text-[13px] font-semibold mb-6 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            Official Security Portal
          </div>
          <h1 className="text-[34px] sm:text-[46px] lg:text-[52px] font-bold mb-4 leading-tight">
            Verify It&apos;s Payback
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#f4f7f5]/90 max-w-[720px] mx-auto leading-relaxed">
            To ensure your security, confirm whether a contact method or link originated from the official Payback company. Simply check an email address, phone number, WhatsApp, or social channel below.
          </p>
        </div>

        <div className="container max-w-[1208px] mx-auto px-4">
          <PaybackVerifierWidget />
        </div>
      </section>

      {/* 02: Scam Types Section */}
      <ScamTypesSection />

      {/* 03: Let's Talk CTA */}
      <LetsTalkCTA />

      {/* 04: Latest Articles Carousel */}
      <LatestArticlesSection />

      {/* 05: Contact Form */}
      <ContactSection />
    </main>
  );
}
