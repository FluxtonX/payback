import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import PartnersBar from '@/components/home/PartnersBar';
import OfferInfoSection from '@/components/home/OfferInfoSection';
import InvestigationPackages from '@/components/home/InvestigationPackages';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import StatsCallout from '@/components/home/StatsCallout';
import WhyWorkSection from '@/components/home/WhyWorkSection';
import GuaranteeBlock from '@/components/home/GuaranteeBlock';
import CopycatsBlock from '@/components/home/CopycatsBlock';
import LetsTalkCTA from '@/components/home/LetsTalkCTA';
import VideoReviewsSection from '@/components/home/VideoReviewsSection';
import ScamTypesSection from '@/components/home/ScamTypesSection';
import FaqAccordionSection from '@/components/home/FaqAccordionSection';
import LatestArticlesSection from '@/components/home/LatestArticlesSection';
import ContactSection from '@/components/home/ContactSection';
import PbIsBackStatement from '@/components/home/PbIsBackStatement';
import WarningModal from '@/components/modals/WarningModal';

export const metadata: Metadata = {
  title: 'PayBack : Trading & Investment Scam Funds Recovery',
  description:
    'PayBack is here to help you recover funds lost in fraudulent investment or trading schemes performed by unethical brokers. It’s Time to Get Your Money Back!',
  openGraph: {
    title: 'PayBack : Trading & Investment Scam Funds Recovery',
    description:
      'PayBack is here to help you recover funds lost in fraudulent investment or trading schemes performed by unethical brokers. It’s Time to Get Your Money Back!',
    url: 'https://payback.com/',
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
    title: 'PayBack : Trading & Investment Scam Funds Recovery',
    description:
      'PayBack is here to help you recover funds lost in fraudulent investment or trading schemes performed by unethical brokers. It’s Time to Get Your Money Back!',
    images: ['https://payback.com/images/payback_og.jpeg'],
  },
  alternates: {
    canonical: 'https://payback.com/',
  },
};

export default function HomePage() {
  return (
    <>
      {/* 01 & 02: Hero Section with Intake Form */}
      <HeroSection />

      {/* 03: Partners & Credibility Bar */}
      <PartnersBar />

      {/* 04: Value Proposition & Offer Information */}
      <OfferInfoSection />

      {/* 05: Investigation Packages Pricing & Comparison */}
      <InvestigationPackages />

      {/* 06: How It Works - 4 Steps */}
      <HowItWorksSection />

      {/* 07: Money Retrieved Stats Banner */}
      <StatsCallout />

      {/* 08: Why Work With Payback */}
      <WhyWorkSection />

      {/* 09: 14-Day Money Back Guarantee */}
      <GuaranteeBlock />

      {/* 10: Beware of Copycats Warning */}
      <CopycatsBlock />

      {/* 11: Call to Action Banner (Lets Talk) */}
      <LetsTalkCTA />

      {/* 12: Video Reviews (109 YouTube Cases Carousel) */}
      <VideoReviewsSection />

      {/* 13: Types of Scams We Investigate */}
      <ScamTypesSection />

      {/* 14: FAQ Accordion Section */}
      <FaqAccordionSection />

      {/* 14b: Second CTA Banner */}
      <LetsTalkCTA />

      {/* 15: Latest Articles Carousel */}
      <LatestArticlesSection />

      {/* 16: Comprehensive Contact Form */}
      <ContactSection />

      {/* 17: Official Statement: Payback is Back */}
      <PbIsBackStatement />

      {/* 18: Global Warning Modal */}
      <WarningModal />
    </>
  );
}
