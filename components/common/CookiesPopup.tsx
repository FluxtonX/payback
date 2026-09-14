'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookiesPopupProps {
  onAccept?: () => void;
}

export const CookiesPopup: React.FC<CookiesPopupProps> = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('or_cookies_accepted') || localStorage.getItem('pb_cookies_accepted');
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('or_cookies_accepted', 'true');
    setIsVisible(false);
    if (onAccept) onAccept();
  };

  if (!isVisible) return null;

  return (
    <div className="relative w-full h-[28px] bg-white shadow-[0_-6px_32px_rgba(0,0,0,0.16)] pt-[2px] z-[60] min-w-[143px] flex items-center justify-center">
      <div className="flex items-center justify-center leading-[24px] text-[16px] text-[#050424]">
        <span className="mr-1">We use cookies -&nbsp;</span>
        <Link
          href="/privacy-policy/"
          className="text-[14px] leading-[20px] font-normal text-[#050424] underline mr-3"
        >
          Here&#x27;s why...
        </Link>
        <button
          onClick={handleAccept}
          className="w-[66px] h-[24px] bg-white border border-[var(--brand-primary)] px-[5px] py-[2px] text-[14px] leading-[16px] font-medium text-[var(--brand-primary)] font-sans hover:bg-[var(--brand-primary)] hover:text-white transition-colors"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CookiesPopup;
