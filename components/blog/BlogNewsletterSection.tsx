'use client';

import React, { useState } from 'react';

export const BlogNewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <aside className="py-14 sm:py-16 bg-[#F4F7F5] border-y border-[#a0a6ba]/20">
      <div className="container max-w-[1208px] mx-auto px-4">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-soft)] text-[var(--brand-primary)] text-xs font-semibold mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Weekly Scam Watch & Security Intel</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[var(--brand-deep)] font-poppins mb-3">
            Want to stay in the loop? Sign Up to our Newsletter
          </h2>

          <p className="text-[#616267] text-sm sm:text-base mb-8 max-w-[560px] mx-auto">
            We value your privacy. We never send you any spam or pass your information to 3rd parties.
          </p>

          {submitted ? (
            <div className="p-4 bg-[var(--brand-soft)] border border-[var(--brand-primary)]/30 rounded-xl text-[var(--brand-primary)] font-medium text-sm flex items-center justify-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Thank you for subscribing! You will receive our latest scam intelligence updates.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[520px] mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your E-mail"
                required
                className="flex-grow px-5 py-3.5 bg-white rounded-xl border border-[#a0a6ba]/40 text-[#112152] placeholder-[#a0a6ba] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent text-sm shadow-sm transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3.5 bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] text-white font-semibold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center flex-shrink-0 disabled:opacity-75"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </div>
    </aside>
  );
};
