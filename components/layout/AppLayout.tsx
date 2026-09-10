'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookiesPopup from '../common/CookiesPopup';
import DisclaimerSection from '../common/DisclaimerSection';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <CookiesPopup />
      <Navbar />
      {/* Header is fixed; offset top is handled exclusively by Navbar spacer */}
      <main className="flex-grow">{children}</main>
      <Footer />
      <DisclaimerSection />
    </div>
  );
};

export default AppLayout;
