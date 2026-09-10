'use client';

import React, { useState } from 'react';

export const PartnerContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-8 sm:py-12 xl:py-16 font-sans">
      <div className="container max-w-[1208px] mx-auto px-4">
        <div className="bg-white shadow-[8px_16px_32px_0_rgba(3,14,49,0.08)] py-8 px-4 sm:py-12 sm:px-8 md:py-12 md:px-16 xl:py-12 xl:px-24 max-w-[1000px] mx-auto flex flex-col items-center">
          {submitted ? (
            <div className="py-12 text-center max-w-[376px] mx-auto">
              <div className="w-16 h-16 bg-[#112152] rounded-full flex items-center justify-center mx-auto mb-4 text-[#ffd700]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-[#030e31] mb-2">Thank you!</h3>
              <p className="text-[#616267] text-[15px] mb-6 leading-[24px]">
                Your request has been received. One of our specialists will get back to you shortly.
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
              <h2 className="text-[28px] sm:text-[34px] xl:text-[40px] font-bold text-[#030e31] text-center mb-4 leading-tight">
                Contact us now to get started
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#616267] text-center max-w-[425px] mb-8 font-normal leading-[24px]">
                Our team of experts is here to help. If you’ve been ripped off by scammers, get in touch now.
              </p>

              <div className="w-full max-w-[470px] md:max-w-[720px] mx-auto">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* First Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      maxLength={100}
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Your Name"
                      required
                      className="w-full bg-[#f4f4f4] border border-[#f4f4f4] focus:border-[#112152] focus:bg-white px-4 py-3.5 text-[15px] sm:text-[16px] text-[#030e31] placeholder-[#616267] outline-none transition-colors"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      maxLength={100}
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Last Name"
                      required
                      className="w-full bg-[#f4f4f4] border border-[#f4f4f4] focus:border-[#112152] focus:bg-white px-4 py-3.5 text-[15px] sm:text-[16px] text-[#030e31] placeholder-[#616267] outline-none transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      maxLength={48}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone number"
                      required
                      className="w-full bg-[#f4f4f4] border border-[#f4f4f4] focus:border-[#112152] focus:bg-white px-4 py-3.5 text-[15px] sm:text-[16px] text-[#030e31] placeholder-[#616267] outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      maxLength={100}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your E-mail"
                      required
                      className="w-full bg-[#f4f4f4] border border-[#f4f4f4] focus:border-[#112152] focus:bg-white px-4 py-3.5 text-[15px] sm:text-[16px] text-[#030e31] placeholder-[#616267] outline-none transition-colors"
                    />
                  </div>

                  {/* Message (Full width 2 columns) */}
                  <div className="md:col-span-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you need"
                      className="w-full bg-[#f4f4f4] border border-[#f4f4f4] focus:border-[#112152] focus:bg-white px-4 py-3.5 text-[15px] sm:text-[16px] text-[#030e31] placeholder-[#616267] outline-none transition-colors h-[140px] resize-none"
                    />
                  </div>

                  {/* Submit Button (Full width 2 columns, centered) */}
                  <div className="md:col-span-2 flex justify-center mt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-[376px] py-3.5 bg-[#ffd700] text-[#112152] font-semibold text-[16px] hover:bg-[#ffe661] hover:border-[#ffe661] transition-colors border border-[#ffd700] text-center cursor-pointer select-none"
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

export default PartnerContactForm;
