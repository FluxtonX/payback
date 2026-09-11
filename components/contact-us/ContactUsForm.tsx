'use client';

import React, { useState, useRef, useEffect } from 'react';

export const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    scamType: '',
    lossAmount: '',
    message: '',
  });

  const [scamTypeOpen, setScamTypeOpen] = useState(false);
  const [lossAmountOpen, setLossAmountOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scamTypeRef = useRef<HTMLDivElement>(null);
  const lossAmountRef = useRef<HTMLDivElement>(null);

  const scamTypes = [
    'Binary options',
    'Digital Currency',
    'Forex',
    'Stock Trading',
    'Property scam',
    'Romance scam',
    'Other scam',
  ];

  const lossAmounts = [
    'Less than $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$21,000 - $40,000',
    '$40,000 - $80,000',
    '$80,000 - $100,000',
    '$100,000 - $150,000',
    '$150,000 and up',
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (scamTypeRef.current && !scamTypeRef.current.contains(e.target as Node)) {
        setScamTypeOpen(false);
      }
      if (lossAmountRef.current && !lossAmountRef.current.contains(e.target as Node)) {
        setLossAmountOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-[470px] md:max-w-[720px] mx-auto px-4 md:px-0 py-12 text-center bg-white shadow-[0_4px_24px_rgba(3,14,49,0.08)] border border-[var(--brand-soft)] rounded-lg">
        <div className="w-14 h-14 bg-[var(--brand-primary)] text-[#ffd700] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-[22px] font-bold text-[var(--brand-deep)] mb-2">Thank you!</h3>
        <p className="text-[15px] text-[#616267] max-w-[420px] mx-auto">
          Your inquiry has been successfully submitted. One of our recovery specialists will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[470px] md:max-w-[720px] mx-auto px-4 md:px-0 font-sans">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* First Name */}
        <div className="relative border border-[#f4f4f4] bg-[#f4f4f4] focus-within:bg-white focus-within:border-[var(--brand-primary)] transition-colors h-[52px]">
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            maxLength={100}
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full h-full bg-transparent text-[var(--brand-primary)] px-4 pt-4 pb-1 text-[16px] outline-none peer"
            placeholder=" "
          />
          <label
            htmlFor="firstName"
            className="absolute left-4 top-3.5 text-[#616267] text-[16px] pointer-events-none transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-[12px] peer-focus:text-[var(--brand-primary)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-[var(--brand-primary)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
          >
            Your Name*
          </label>
        </div>

        {/* Last Name */}
        <div className="relative border border-[#f4f4f4] bg-[#f4f4f4] focus-within:bg-white focus-within:border-[var(--brand-primary)] transition-colors h-[52px]">
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            maxLength={100}
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full h-full bg-transparent text-[var(--brand-primary)] px-4 pt-4 pb-1 text-[16px] outline-none peer"
            placeholder=" "
          />
          <label
            htmlFor="lastName"
            className="absolute left-4 top-3.5 text-[#616267] text-[16px] pointer-events-none transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-[12px] peer-focus:text-[var(--brand-primary)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-[var(--brand-primary)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
          >
            Last Name*
          </label>
        </div>

        {/* Phone Number */}
        <div className="relative border border-[#f4f4f4] bg-[#f4f4f4] focus-within:bg-white focus-within:border-[var(--brand-primary)] transition-colors h-[52px]">
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            maxLength={48}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full h-full bg-transparent text-[var(--brand-primary)] px-4 pt-4 pb-1 text-[16px] outline-none peer"
            placeholder=" "
          />
          <label
            htmlFor="phone"
            className="absolute left-4 top-3.5 text-[#616267] text-[16px] pointer-events-none transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-[12px] peer-focus:text-[var(--brand-primary)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-[var(--brand-primary)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
          >
            Phone number*
          </label>
        </div>

        {/* Enter your E-mail */}
        <div className="relative border border-[#f4f4f4] bg-[#f4f4f4] focus-within:bg-white focus-within:border-[var(--brand-primary)] transition-colors h-[52px]">
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={100}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full h-full bg-transparent text-[var(--brand-primary)] px-4 pt-4 pb-1 text-[16px] outline-none peer"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-3.5 text-[#616267] text-[16px] pointer-events-none transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-[12px] peer-focus:text-[var(--brand-primary)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-[var(--brand-primary)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
          >
            Enter your E-mail*
          </label>
        </div>

        {/* Choose a scam type */}
        <div ref={scamTypeRef} className="relative select-none">
          <div
            onClick={() => setScamTypeOpen(!scamTypeOpen)}
            className={`relative border h-[52px] px-4 flex items-center justify-between cursor-pointer transition-colors ${
              scamTypeOpen || formData.scamType
                ? 'bg-white border-[var(--brand-primary)]'
                : 'bg-[#f4f4f4] border-[#f4f4f4]'
            }`}
          >
            <span
              className={`text-[16px] truncate ${
                formData.scamType ? 'text-[var(--brand-primary)] font-medium' : 'text-[#616267]'
              }`}
            >
              {formData.scamType || 'Choose a scam type'}
            </span>
            {formData.scamType && (
              <span className="absolute -top-2.5 left-2 px-2 bg-white text-[var(--brand-primary)] text-[12px]">
                Choose a scam type
              </span>
            )}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className={`transition-transform duration-200 ${scamTypeOpen ? 'rotate-180' : ''}`}
            >
              <path
                d="M16.9395 7.93896L12.0005 12.879L7.06145 7.93896L4.93945 10.061L12.0005 17.121L19.0615 10.061L16.9395 7.93896Z"
                fill="#616267"
              />
            </svg>
          </div>

          {scamTypeOpen && (
            <div className="absolute left-0 top-[calc(100%+4px)] w-full bg-white border border-[var(--brand-soft)] shadow-xl z-20 max-h-[240px] overflow-y-auto">
              {scamTypes.map((type, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setFormData({ ...formData, scamType: type });
                    setScamTypeOpen(false);
                  }}
                  className="group relative px-4 py-3 text-[15px] text-[var(--brand-deep)] hover:text-[var(--brand-primary)] hover:bg-[#f9fafb] cursor-pointer border-t border-[#f4f4f4] first:border-t-0 flex items-center"
                >
                  <div className="absolute left-0 top-0 w-[4px] h-full bg-[#ffd700] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* How much money was lost? */}
        <div ref={lossAmountRef} className="relative select-none">
          <div
            onClick={() => setLossAmountOpen(!lossAmountOpen)}
            className={`relative border h-[52px] px-4 flex items-center justify-between cursor-pointer transition-colors ${
              lossAmountOpen || formData.lossAmount
                ? 'bg-white border-[var(--brand-primary)]'
                : 'bg-[#f4f4f4] border-[#f4f4f4]'
            }`}
          >
            <span
              className={`text-[16px] truncate ${
                formData.lossAmount ? 'text-[var(--brand-primary)] font-medium' : 'text-[#616267]'
              }`}
            >
              {formData.lossAmount || 'How much money was lost?'}
            </span>
            {formData.lossAmount && (
              <span className="absolute -top-2.5 left-2 px-2 bg-white text-[var(--brand-primary)] text-[12px]">
                How much money was lost?
              </span>
            )}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className={`transition-transform duration-200 ${lossAmountOpen ? 'rotate-180' : ''}`}
            >
              <path
                d="M16.9395 7.93896L12.0005 12.879L7.06145 7.93896L4.93945 10.061L12.0005 17.121L19.0615 10.061L16.9395 7.93896Z"
                fill="#616267"
              />
            </svg>
          </div>

          {lossAmountOpen && (
            <div className="absolute left-0 top-[calc(100%+4px)] w-full bg-white border border-[var(--brand-soft)] shadow-xl z-20 max-h-[240px] overflow-y-auto">
              {lossAmounts.map((amount, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setFormData({ ...formData, lossAmount: amount });
                    setLossAmountOpen(false);
                  }}
                  className="group relative px-4 py-3 text-[15px] text-[var(--brand-deep)] hover:text-[var(--brand-primary)] hover:bg-[#f9fafb] cursor-pointer border-t border-[#f4f4f4] first:border-t-0 flex items-center"
                >
                  <div className="absolute left-0 top-0 w-[4px] h-full bg-[#ffd700] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {amount}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Outline your case */}
        <div className="relative border border-[#f4f4f4] bg-[#f4f4f4] focus-within:bg-white focus-within:border-[var(--brand-primary)] transition-colors md:col-span-2 h-[140px]">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full h-full bg-transparent text-[var(--brand-primary)] px-4 pt-4 pb-2 text-[16px] outline-none peer resize-none"
            placeholder=" "
          />
          <label
            htmlFor="message"
            className="absolute left-4 top-3.5 text-[#616267] text-[16px] pointer-events-none transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-[12px] peer-focus:text-[var(--brand-primary)] peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-[var(--brand-primary)] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
          >
            Outline your case
          </label>
        </div>

        {/* Submit button */}
        <div className="md:col-span-2 flex justify-center mt-2 md:mt-0">
          <button
            type="submit"
            className="w-full md:w-auto md:min-w-[340px] h-[48px] bg-[#ffd700] hover:bg-[#ffe661] text-[var(--brand-deep)] font-bold text-[16px] px-8 transition-colors flex items-center justify-center cursor-pointer border border-[#ffd700] hover:border-[#ffe661]"
          >
            Get a free consultation
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
