'use client';

import React, { useState } from 'react';

export const WhistleblowerReportForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    blockchain: '',
    amountLost: '',
    cryptoAddress: '',
    scamName: '',
    txIds: '',
    scamUrl: '',
    date: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const names = Array.from(e.target.files).map((f) => f.name);
      setFiles(names);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.amountLost) {
      alert('Please complete all required fields (*)');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-[var(--brand-primary)]/30 rounded-2xl p-8 sm:p-12 text-center shadow-lg max-w-[800px] mx-auto space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#eef7ee] text-[var(--brand-primary)] flex items-center justify-center mx-auto">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-[24px] font-bold text-[var(--brand-deep)]">
          Confidential Report Received
        </h3>
        <p className="text-[15px] leading-relaxed text-[#616267] max-w-[600px] mx-auto">
          Thank you for reporting this scam. Your submission has been securely transmitted to our forensic investigations team to aid in blacklist indexing and cross-border crypto tracing.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              blockchain: '',
              amountLost: '',
              cryptoAddress: '',
              scamName: '',
              txIds: '',
              scamUrl: '',
              date: '',
            });
            setFiles([]);
          }}
          className="inline-block py-2.5 px-6 bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] text-white text-[14px] font-bold rounded-lg transition-colors"
        >
          Submit Another Report
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#a0a6ba]/25 rounded-2xl p-6 sm:p-10 shadow-lg max-w-[900px] mx-auto">
      <div className="mb-8">
        <h2 className="text-[26px] sm:text-[32px] font-bold text-[var(--brand-deep)] mb-2">
          Report Scam / Fraud Crypto Wallets
        </h2>
        <p className="text-[15px] text-[#616267] leading-relaxed">
          If you believe you are a victim of a crypto scam, this is your opportunity to document the fraudulent wallets and prevent further illicit transactions.
        </p>
        <p className="text-[13px] font-semibold text-[var(--brand-primary)] mt-2">
          * Your information is protected in accordance with our strict data privacy policy.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-[13px] font-semibold text-[#616267] mb-1.5">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="e.g. John"
              className="w-full py-3 px-4 bg-[#F4F7F5] border border-[#a0a6ba]/30 rounded-xl text-[15px] text-[var(--brand-deep)] focus:outline-none focus:border-[var(--brand-primary)]"
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-[#616267] mb-1.5">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              placeholder="e.g. Doe"
              className="w-full py-3 px-4 bg-[#F4F7F5] border border-[#a0a6ba]/30 rounded-xl text-[15px] text-[var(--brand-deep)] focus:outline-none focus:border-[var(--brand-primary)]"
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-[#616267] mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john.doe@example.com"
              className="w-full py-3 px-4 bg-[#F4F7F5] border border-[#a0a6ba]/30 rounded-xl text-[15px] text-[var(--brand-deep)] focus:outline-none focus:border-[var(--brand-primary)]"
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-[#616267] mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +1 (555) 019-2834"
              className="w-full py-3 px-4 bg-[#F4F7F5] border border-[#a0a6ba]/30 rounded-xl text-[15px] text-[var(--brand-deep)] focus:outline-none focus:border-[var(--brand-primary)]"
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-[#616267] mb-1.5">
              Blockchain(s): ETH / BTC / Tron / BSC
            </label>
            <input
              type="text"
              name="blockchain"
              value={formData.blockchain}
              onChange={handleChange}
              placeholder="e.g. Ethereum (ERC-20), Bitcoin"
              className="w-full py-3 px-4 bg-[#F4F7F5] border border-[#a0a6ba]/30 rounded-xl text-[15px] text-[var(--brand-deep)] focus:outline-none focus:border-[var(--brand-primary)]"
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-[#616267] mb-1.5">
              Amount Lost (USD) *
            </label>
            <input
              type="number"
              name="amountLost"
              required
              value={formData.amountLost}
              onChange={handleChange}
              placeholder="e.g. 25000"
              className="w-full py-3 px-4 bg-[#F4F7F5] border border-[#a0a6ba]/30 rounded-xl text-[15px] text-[var(--brand-deep)] focus:outline-none focus:border-[var(--brand-primary)]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-semibold text-[#616267] mb-1.5">
            Digital Currency Address(es) / Suspect Wallets
          </label>
          <input
            type="text"
            name="cryptoAddress"
            value={formData.cryptoAddress}
            onChange={handleChange}
            placeholder="e.g. 0x71C... or bc1q..."
            className="w-full py-3 px-4 bg-[#F4F7F5] border border-[#a0a6ba]/30 rounded-xl text-[15px] text-[var(--brand-deep)] focus:outline-none focus:border-[var(--brand-primary)]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-[13px] font-semibold text-[#616267] mb-1.5">
              Scam Platform Name
            </label>
            <input
              type="text"
              name="scamName"
              value={formData.scamName}
              onChange={handleChange}
              placeholder="e.g. Fake Broker Co."
              className="w-full py-3 px-4 bg-[#F4F7F5] border border-[#a0a6ba]/30 rounded-xl text-[15px] text-[var(--brand-deep)] focus:outline-none focus:border-[var(--brand-primary)]"
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-[#616267] mb-1.5">
              Scam Website / URL
            </label>
            <input
              type="text"
              name="scamUrl"
              value={formData.scamUrl}
              onChange={handleChange}
              placeholder="e.g. https://scam-domain.xyz"
              className="w-full py-3 px-4 bg-[#F4F7F5] border border-[#a0a6ba]/30 rounded-xl text-[15px] text-[var(--brand-deep)] focus:outline-none focus:border-[var(--brand-primary)]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-semibold text-[#616267] mb-1.5">
            Transaction Hash / IDs (TxHash)
          </label>
          <input
            type="text"
            name="txIds"
            value={formData.txIds}
            onChange={handleChange}
            placeholder="e.g. 0x8a9b... (separate multiple with commas)"
            className="w-full py-3 px-4 bg-[#F4F7F5] border border-[#a0a6ba]/30 rounded-xl text-[15px] text-[var(--brand-deep)] focus:outline-none focus:border-[var(--brand-primary)]"
          />
        </div>

        {/* Upload Dropzone */}
        <div className="border-2 border-dashed border-[#a0a6ba]/40 rounded-xl p-6 text-center hover:border-[var(--brand-primary)] transition-colors bg-[#F4F7F5]/50">
          <input
            type="file"
            id="evidenceUpload"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="evidenceUpload"
            className="cursor-pointer flex flex-col items-center justify-center gap-2"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--brand-primary)]">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <span className="text-[14px] font-bold text-[var(--brand-primary)] underline">
              Upload Crypto Transaction Evidence (Screenshots, receipts, chats)
            </span>
            <span className="text-[12px] text-[#616267]">
              PNG, JPG, PDF up to 25MB
            </span>
          </label>
          {files.length > 0 && (
            <div className="mt-3 text-[13px] font-semibold text-[var(--brand-deep)]">
              {files.length} file(s) selected: {files.join(', ')}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] text-white font-bold text-[16px] rounded-xl shadow-lg transition-all duration-200"
        >
          Submit Whistleblower Report
        </button>
      </form>
    </div>
  );
};

export default WhistleblowerReportForm;
