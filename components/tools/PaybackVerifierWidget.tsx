'use client';

import React, { useState } from 'react';

const OFFICIAL_CHANNELS = {
  email: ['support@payback.com', 'contact@payback.com', 'info@payback.com', 'compliance@payback.com'],
  phone: ['+972539538554', '+16479458789', '+442038078377', '+61283173612'],
  domain: ['payback.com', 'www.payback.com'],
  whatsapp: ['+972539538554', '972539538554'],
  social: ['facebook.com/paybackltd', 'linkedin.com/company/payback-ltd', 'twitter.com/payback_ltd', 'x.com/payback_ltd']
};

export const PaybackVerifierWidget: React.FC = () => {
  const [channel, setChannel] = useState<'whatsapp' | 'phone' | 'email' | 'social'>('email');
  const [inputVal, setInputVal] = useState('');
  const [result, setResult] = useState<{ status: 'verified' | 'unverified' | 'invalid'; message: string } | null>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputVal.trim().toLowerCase().replace(/[\s\-\(\)]/g, '');
    if (!query) {
      setResult({ status: 'invalid', message: 'Please enter a valid channel value to verify.' });
      return;
    }

    let isOfficial = false;

    if (channel === 'email') {
      isOfficial = OFFICIAL_CHANNELS.email.some((em) => query.includes(em.toLowerCase())) || query.endsWith('@payback.com');
    } else if (channel === 'phone') {
      isOfficial = OFFICIAL_CHANNELS.phone.some((ph) => ph.includes(query) || query.includes(ph));
    } else if (channel === 'whatsapp') {
      isOfficial = OFFICIAL_CHANNELS.whatsapp.some((wa) => wa.includes(query) || query.includes(wa));
    } else if (channel === 'social') {
      isOfficial = OFFICIAL_CHANNELS.social.some((soc) => query.includes(soc));
    }

    if (isOfficial) {
      setResult({
        status: 'verified',
        message: 'Verified Official PayBack Channel. This representative or channel is authenticated and legitimate.',
      });
    } else {
      setResult({
        status: 'unverified',
        message: 'Unverified Entity. This contact detail or URL is NOT listed in our verified registry. Beware of impersonators.',
      });
    }
  };

  return (
    <div className="bg-white border border-[#a0a6ba]/30 rounded-2xl p-6 sm:p-10 shadow-lg max-w-[800px] mx-auto">
      <form onSubmit={handleVerify} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Channel Select */}
          <div className="md:col-span-4">
            <label className="block text-[13px] font-semibold text-[#616267] mb-2">
              Select Channel
            </label>
            <select
              value={channel}
              onChange={(e) => {
                setChannel(e.target.value as any);
                setResult(null);
              }}
              className="w-full py-3.5 px-4 bg-[#F4F7F5] border border-[#a0a6ba]/30 rounded-xl text-[15px] font-medium text-[var(--brand-deep)] focus:outline-none focus:border-[var(--brand-primary)]"
            >
              <option value="email">Email Address</option>
              <option value="phone">Phone Number</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="social">Social Media Link</option>
            </select>
          </div>

          {/* Value Input */}
          <div className="md:col-span-8">
            <label className="block text-[13px] font-semibold text-[#616267] mb-2">
              Enter detail to verify
            </label>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={
                channel === 'email'
                  ? 'e.g. support@payback.com'
                  : channel === 'phone'
                  ? 'e.g. +1 647 945-8789'
                  : channel === 'whatsapp'
                  ? 'e.g. +972 53 953 8554'
                  : 'e.g. https://linkedin.com/company/payback-ltd'
              }
              className="w-full py-3.5 px-4 bg-[#F4F7F5] border border-[#a0a6ba]/30 rounded-xl text-[15px] text-[var(--brand-deep)] placeholder-[#a0a6ba] focus:outline-none focus:border-[var(--brand-primary)]"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-6 bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] text-white font-bold text-[16px] rounded-xl shadow transition-all duration-200"
        >
          Verify Channel
        </button>
      </form>

      {/* Verification Results Box */}
      {result && (
        <div
          className={`mt-6 p-5 rounded-xl border flex items-start gap-4 transition-all duration-200 ${
            result.status === 'verified'
              ? 'bg-[#eef7ee] border-[var(--brand-primary)] text-[var(--brand-deep)]'
              : result.status === 'unverified'
              ? 'bg-amber-50 border-amber-300 text-amber-900'
              : 'bg-red-50 border-red-300 text-red-900'
          }`}
        >
          <div className="w-6 h-6 flex-shrink-0 mt-0.5">
            {result.status === 'verified' ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--brand-primary)]">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-amber-600">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
              </svg>
            )}
          </div>
          <div>
            <h4 className="font-bold text-[16px] mb-1">
              {result.status === 'verified' ? 'Authenticated Official Source' : 'Caution / Not Verified'}
            </h4>
            <p className="text-[14px] leading-relaxed opacity-90">{result.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaybackVerifierWidget;
