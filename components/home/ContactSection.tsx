'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    intent: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    scamType: '',
    lostAmount: '',
    message: '',
  });

  const [intentOpen, setIntentOpen] = useState(false);
  const [scamTypeOpen, setScamTypeOpen] = useState(false);
  const [lostAmountOpen, setLostAmountOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const intentOptions = [
    'Purchase a Full Support Package',
    'Purchase an Investigation Report',
    'Purchase a Crypto Tracing Report',
    'Get a free consultation call',
  ];

  const scamOptions = [
    'Binary options',
    'Digital Currency',
    'Forex',
    'Stock Trading',
    'Property scam',
    'Romance scam',
    'Other scam',
  ];

  const amountOptions = [
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
  };

  return (
    <section id="contact-form" className="py-12 lg:py-20 font-sans">
      <div className="container max-w-[1000px] mx-auto px-4">
        <div className="bg-white shadow-[8px_16px_32px_0_rgba(3,14,49,0.08)] p-5 sm:p-8 md:py-12 md:px-16 lg:px-24 flex flex-col items-center">
          {submitted ? (
            <div className="py-16 text-center max-w-[400px]">
              <div className="w-16 h-16 bg-[#112152] rounded-full flex items-center justify-center mx-auto mb-4 text-[#ffd700]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[22px] font-bold text-[#030e31] mb-2">Thank you!</h3>
              <p className="text-[#616267] text-[16px] mb-6">
                Your request has been received. One of our fraud investigation specialists will contact you shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-[#112152] text-white font-medium text-[15px]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#030e31] text-center mb-4 leading-tight">
                Contact us now to get started
              </h2>
              <p className="text-[16px] text-[#616267] text-center max-w-[584px] mb-8 font-normal">
                Our team of experts is here to help. If you’ve been ripped off by scammers, get in touch now.
              </p>

              <div className="w-full max-w-[720px]">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Row 1: Intent (Full width) */}
                  <div className="md:col-span-2 relative">
                    <div
                      onClick={() => setIntentOpen(!intentOpen)}
                      className={`relative w-full bg-[#f4f4f4] border px-4 py-3.5 flex items-center justify-between cursor-pointer select-none text-[16px] ${
                        formData.intent
                          ? 'text-[#112152] border-[#112152] bg-white'
                          : 'text-[#616267] border-[#f4f4f4]'
                      }`}
                    >
                      <span>{formData.intent || 'I want to...'}</span>
                      <Image
                        src="/elements/chevron-down.svg"
                        alt=""
                        width={20}
                        height={20}
                        className={`transition-transform duration-200 ${intentOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                    {intentOpen && (
                      <div className="absolute top-full left-0 w-full bg-white border border-[#b7c3e8] shadow-lg z-30">
                        {intentOptions.map((opt, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setFormData({ ...formData, intent: opt });
                              setIntentOpen(false);
                            }}
                            className="px-4 py-3 text-[15px] text-[#030e31] hover:bg-[#edf2ff] cursor-pointer"
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Row 2: First Name & Last Name */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="w-full bg-[#f4f4f4] border border-[#f4f4f4] focus:border-[#112152] focus:bg-white px-4 py-3.5 text-[16px] text-[#112152] outline-none transition-colors placeholder-[#616267]"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="w-full bg-[#f4f4f4] border border-[#f4f4f4] focus:border-[#112152] focus:bg-white px-4 py-3.5 text-[16px] text-[#112152] outline-none transition-colors placeholder-[#616267]"
                    />
                  </div>

                  {/* Row 3: Phone & Email */}
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full bg-[#f4f4f4] border border-[#f4f4f4] focus:border-[#112152] focus:bg-white px-4 py-3.5 text-[16px] text-[#112152] outline-none transition-colors placeholder-[#616267]"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your E-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-[#f4f4f4] border border-[#f4f4f4] focus:border-[#112152] focus:bg-white px-4 py-3.5 text-[16px] text-[#112152] outline-none transition-colors placeholder-[#616267]"
                    />
                  </div>

                  {/* Row 4: Scam Type & Lost Amount */}
                  <div className="relative">
                    <div
                      onClick={() => setScamTypeOpen(!scamTypeOpen)}
                      className={`relative w-full bg-[#f4f4f4] border px-4 py-3.5 flex items-center justify-between cursor-pointer select-none text-[16px] ${
                        formData.scamType
                          ? 'text-[#112152] border-[#112152] bg-white'
                          : 'text-[#616267] border-[#f4f4f4]'
                      }`}
                    >
                      <span className="truncate">{formData.scamType || 'Choose a scam type'}</span>
                      <Image
                        src="/elements/chevron-down.svg"
                        alt=""
                        width={20}
                        height={20}
                        className={`transition-transform duration-200 flex-shrink-0 ${scamTypeOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                    {scamTypeOpen && (
                      <div className="absolute top-full left-0 w-full bg-white border border-[#b7c3e8] shadow-lg z-30 max-h-60 overflow-y-auto">
                        {scamOptions.map((opt, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setFormData({ ...formData, scamType: opt });
                              setScamTypeOpen(false);
                            }}
                            className="px-4 py-2.5 text-[15px] text-[#030e31] hover:bg-[#edf2ff] cursor-pointer"
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <div
                      onClick={() => setLostAmountOpen(!lostAmountOpen)}
                      className={`relative w-full bg-[#f4f4f4] border px-4 py-3.5 flex items-center justify-between cursor-pointer select-none text-[16px] ${
                        formData.lostAmount
                          ? 'text-[#112152] border-[#112152] bg-white'
                          : 'text-[#616267] border-[#f4f4f4]'
                      }`}
                    >
                      <span className="truncate">{formData.lostAmount || 'How much money was lost?'}</span>
                      <Image
                        src="/elements/chevron-down.svg"
                        alt=""
                        width={20}
                        height={20}
                        className={`transition-transform duration-200 flex-shrink-0 ${lostAmountOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                    {lostAmountOpen && (
                      <div className="absolute top-full left-0 w-full bg-white border border-[#b7c3e8] shadow-lg z-30 max-h-60 overflow-y-auto">
                        {amountOptions.map((opt, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setFormData({ ...formData, lostAmount: opt });
                              setLostAmountOpen(false);
                            }}
                            className="px-4 py-2.5 text-[15px] text-[#030e31] hover:bg-[#edf2ff] cursor-pointer"
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Row 5: Outline your case (Textarea, Full width) */}
                  <div className="md:col-span-2 relative">
                    <textarea
                      placeholder="Outline your case"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full h-[140px] bg-[#f4f4f4] border border-[#f4f4f4] focus:border-[#112152] focus:bg-white px-4 py-3.5 text-[16px] text-[#112152] outline-none transition-colors placeholder-[#616267] resize-none"
                    ></textarea>
                  </div>

                  {/* Row 6: Submit Button */}
                  <div className="md:col-span-2 flex justify-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto min-w-[280px] px-8 py-3.5 bg-[#ffd700] text-[#112152] font-medium text-[16px] hover:bg-[#ffe661] hover:border-[#ffe661] transition-colors border border-[#ffd700]"
                    >
                      Get a free consultation
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
