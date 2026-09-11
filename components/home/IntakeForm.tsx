'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface IntakeFormProps {
  onSuccess?: () => void;
}

export const IntakeForm: React.FC<IntakeFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    lossAmount: '',
    message: '',
  });

  const [selectOpen, setSelectOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const lossOptions = [
    'Less than $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$21,000 - $40,000',
    '$40,000 - $80,000',
    '$80,000 - $100,000',
    '$100,000 - $150,000',
    '$150,000 and up',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  return (
    <div className="w-full bg-white text-[#616267] p-5 sm:p-6 shadow-[8px_8px_32px_rgba(3,14,49,0.16)] font-sans">
      <h3 className="text-[22px] sm:text-[24px] font-bold text-[var(--brand-deep)] text-center mb-1 leading-tight">
        Start here
      </h3>
      <p className="text-[14px] sm:text-[15px] text-[#616267] text-center mb-4 sm:mb-5">
        Secure a free consultation
      </p>

      {submitted ? (
        <div className="py-8 text-center">
          <div className="w-12 h-12 bg-[var(--brand-primary)] text-[#ffd700] rounded-full flex items-center justify-center mx-auto mb-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h4 className="text-[18px] font-bold text-[var(--brand-deep)] mb-2">Thank you!</h4>
          <p className="text-[14px] text-[#616267]">
            Your request has been received. Our team will contact you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* First Name */}
          <div className="relative border border-[#f4f4f4] bg-[#f4f4f4] focus-within:bg-white focus-within:border-[var(--brand-primary)] transition-colors">
            <input
              type="text"
              name="firstName"
              required
              maxLength={20}
              placeholder="Your Name*"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full bg-transparent text-[var(--brand-primary)] px-3.5 py-2.5 sm:py-3 text-[15px] outline-none placeholder-[#616267]"
            />
          </div>

          {/* Last Name */}
          <div className="relative border border-[#f4f4f4] bg-[#f4f4f4] focus-within:bg-white focus-within:border-[var(--brand-primary)] transition-colors">
            <input
              type="text"
              name="lastName"
              required
              maxLength={20}
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full bg-transparent text-[var(--brand-primary)] px-3.5 py-2.5 sm:py-3 text-[15px] outline-none placeholder-[#616267]"
            />
          </div>

          {/* Phone Number */}
          <div className="relative border border-[#f4f4f4] bg-[#f4f4f4] focus-within:bg-white focus-within:border-[var(--brand-primary)] transition-colors">
            <input
              type="tel"
              name="phone"
              required
              maxLength={48}
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-transparent text-[var(--brand-primary)] px-3.5 py-2.5 sm:py-3 text-[15px] outline-none placeholder-[#616267]"
            />
          </div>

          {/* Email */}
          <div className="relative border border-[#f4f4f4] bg-[#f4f4f4] focus-within:bg-white focus-within:border-[var(--brand-primary)] transition-colors">
            <input
              type="email"
              name="email"
              maxLength={80}
              placeholder="Enter your E-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent text-[var(--brand-primary)] px-3.5 py-2.5 sm:py-3 text-[15px] outline-none placeholder-[#616267]"
            />
          </div>

          {/* How much money was lost? */}
          <div className="relative">
            <div
              onClick={() => setSelectOpen(!selectOpen)}
              className={`relative w-full border px-3.5 py-2.5 sm:py-3 flex items-center justify-between cursor-pointer select-none text-[15px] transition-colors ${
                formData.lossAmount
                  ? 'bg-white border-[var(--brand-primary)] text-[var(--brand-primary)]'
                  : 'bg-[#f4f4f4] border-[#f4f4f4] text-[#616267]'
              }`}
            >
              <span className="truncate">{formData.lossAmount || 'How much money was lost?'}</span>
              <Image
                src="/elements/chevron-down.svg"
                alt=""
                width={18}
                height={18}
                className={`transition-transform duration-200 flex-shrink-0 ${selectOpen ? 'rotate-180' : ''}`}
              />
            </div>

            {selectOpen && (
              <div className="absolute top-full left-0 w-full bg-white border border-[var(--brand-periwinkle)] shadow-lg z-30 max-h-52 overflow-y-auto">
                {lossOptions.map((opt, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setFormData({ ...formData, lossAmount: opt });
                      setSelectOpen(false);
                    }}
                    className="px-3.5 py-2 text-[14px] text-[var(--brand-deep)] hover:bg-[var(--brand-soft)] cursor-pointer"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Outline your case */}
          <div className="relative border border-[#f4f4f4] bg-[#f4f4f4] focus-within:bg-white focus-within:border-[var(--brand-primary)] transition-colors">
            <textarea
              name="message"
              rows={2}
              placeholder="Outline your case"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-transparent text-[var(--brand-primary)] px-3.5 py-2.5 text-[15px] outline-none placeholder-[#616267] resize-none h-[72px]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#ffd700] text-[var(--brand-primary)] font-medium text-[16px] hover:bg-[#ffe661] hover:border-[#ffe661] transition-colors border border-[#ffd700]"
          >
            Get a free consultation
          </button>
        </form>
      )}
    </div>
  );
};

export default IntakeForm;
