import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import AffiliateHowItWorks from '@/components/affiliate/AffiliateHowItWorks';
import AffiliateWhyWork from '@/components/affiliate/AffiliateWhyWork';
import AffiliateStatement from '@/components/affiliate/AffiliateStatement';

export const metadata: Metadata = {
  title: 'Affiliate page - Payback',
  description:
    'Partner with Payback and help fight scammers. Through our affiliate program, you can help scam victims reclaim their losses while earning commissions.',
};

export default function AffiliatePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs matching live DOM: Home / Affiliate Page */}
      <Breadcrumbs items={[{ name: 'Affiliate Page' }]} />

      {/* Live site negative top margin .affiliatePageTopMargin */}
      <div className="mt-[-52px] md:mt-[-48px] min-[1366px]:mt-[-104px]" />

      {/* 4 Steps How It Works */}
      <AffiliateHowItWorks />

      {/* Why Work / Partnership Section */}
      <AffiliateWhyWork />

      {/* How To Get Started Statement Block */}
      <AffiliateStatement />
    </div>
  );
}
