'use client';

import React, { useState, useEffect } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultType = '',
}) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState('');
  const [scamType, setScamType] = useState(defaultType);
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showConfirmClose, setShowConfirmClose] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultType) {
      setScamType(defaultType);
    }
  }, [defaultType]);

  if (!isOpen) return null;

  const amounts = [
    'Less than $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$21,000 - $40,000',
    '$40,000 - $80,000',
    '$80,000 - $100,000',
    '$100,000 - $150,000',
    '$150,000 and up',
  ];

  const scamTypes = [
    'Binary options',
    'Digital Currency',
    'Forex',
    'Stock Trading',
    'Property scam',
    'Romance scam',
    'Other scam',
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsSuccess(true);
    }
  };

  const handleCloseAttempt = () => {
    if (amount || scamType || name || email) {
      setShowConfirmClose(true);
    } else {
      onClose();
    }
  };

  const confirmClose = () => {
    setShowConfirmClose(false);
    setStep(1);
    setAmount('');
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex justify-end">
      {/* Backdrop */}
      <div
        onClick={handleCloseAttempt}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      {/* Sidebar Drawer */}
      <div className="relative w-full max-w-[480px] bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto font-sans">
        {/* Close Icon */}
        <button
          onClick={handleCloseAttempt}
          aria-label="Close dialog"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#616267] hover:text-[#030e31] z-20"
        >
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <path d="M9.19434 7L24.7499 22.5556L22.8054 24.5L7.24989 8.94444L9.19434 7Z" fill="#030E31" />
            <path d="M22.8057 7L7.25011 22.5556L9.19455 24.5L24.7501 8.94444L22.8057 7Z" fill="#030E31" />
          </svg>
        </button>

        {/* Header with Step indicator */}
        <div className="p-6 md:p-8 pb-4 border-b border-[#edf2ff]">
          {/* Progress bar */}
          <div className="flex gap-2 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-none transition-colors ${
                  step >= i ? 'bg-[#ffd700]' : 'bg-[#edf2ff]'
                }`}
              />
            ))}
          </div>

          <h3 className="text-[22px] md:text-[26px] font-bold text-[#030e31]">
            {isSuccess
              ? 'Request Received'
              : step === 1
              ? 'How much did you invest?'
              : step === 2
              ? 'What type of scam was it?'
              : step === 3
              ? 'Name of company or broker?'
              : 'Your contact details'}
          </h3>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 flex-1 overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-[#112152] text-[#ffd700] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="text-[20px] font-bold text-[#030e31] mb-2">Thank you!</h4>
              <p className="text-[#616267] text-[15px] mb-6">
                Our recovery specialists are reviewing your details and will get in touch shortly for your free consultation.
              </p>
              <button
                onClick={confirmClose}
                className="px-6 py-2.5 bg-[#112152] text-white font-medium text-[15px]"
              >
                Close
              </button>
            </div>
          ) : step === 1 ? (
            <div className="space-y-3">
              {amounts.map((item, idx) => (
                <label
                  key={idx}
                  onClick={() => setAmount(item)}
                  className={`flex items-center gap-3 p-3.5 border cursor-pointer select-none transition-colors ${
                    amount === item
                      ? 'border-[#112152] bg-[#edf2ff]/40 text-[#030e31] font-semibold'
                      : 'border-[#f4f4f4] bg-[#f4f4f4] hover:bg-[#edf2ff]/30 text-[#112152]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      amount === item ? 'border-[#112152] bg-[#112152]' : 'border-[#a0a6ba] bg-white'
                    }`}
                  >
                    {amount === item && <div className="w-2 h-2 rounded-full bg-[#ffd700]" />}
                  </div>
                  <span className="text-[15px]">{item}</span>
                </label>
              ))}
            </div>
          ) : step === 2 ? (
            <div className="space-y-3">
              {scamTypes.map((item, idx) => (
                <label
                  key={idx}
                  onClick={() => setScamType(item)}
                  className={`flex items-center gap-3 p-3.5 border cursor-pointer select-none transition-colors ${
                    scamType === item
                      ? 'border-[#112152] bg-[#edf2ff]/40 text-[#030e31] font-semibold'
                      : 'border-[#f4f4f4] bg-[#f4f4f4] hover:bg-[#edf2ff]/30 text-[#112152]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      scamType === item ? 'border-[#112152] bg-[#112152]' : 'border-[#a0a6ba] bg-white'
                    }`}
                  >
                    {scamType === item && <div className="w-2 h-2 rounded-full bg-[#ffd700]" />}
                  </div>
                  <span className="text-[15px]">{item}</span>
                </label>
              ))}
            </div>
          ) : step === 3 ? (
            <div className="space-y-4">
              <p className="text-[14px] text-[#616267]">
                Please provide the name of the website, broker, or platform involved (if known):
              </p>
              <input
                type="text"
                placeholder="e.g. Acme Trading Ltd"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full bg-[#f4f4f4] border border-[#f4f4f4] focus:border-[#112152] focus:bg-white p-3.5 text-[15px] text-[#112152] outline-none"
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-[#616267] mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#f4f4f4] border border-[#f4f4f4] focus:border-[#112152] focus:bg-white p-3.5 text-[15px] text-[#112152] outline-none"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#616267] mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#f4f4f4] border border-[#f4f4f4] focus:border-[#112152] focus:bg-white p-3.5 text-[15px] text-[#112152] outline-none"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#616267] mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#f4f4f4] border border-[#f4f4f4] focus:border-[#112152] focus:bg-white p-3.5 text-[15px] text-[#112152] outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {!isSuccess && (
          <div className="p-6 md:p-8 pt-4 border-t border-[#edf2ff] flex items-center justify-between">
            <button
              onClick={handleCloseAttempt}
              className="text-[#616267] hover:text-[#030e31] font-medium text-[15px] px-2 py-2"
            >
              Cancel
            </button>
            <button
              onClick={handleNext}
              disabled={
                (step === 1 && !amount) ||
                (step === 2 && !scamType) ||
                (step === 4 && (!name || !email))
              }
              className={`px-8 py-3 font-medium text-[15px] transition-colors ${
                (step === 1 && !amount) ||
                (step === 2 && !scamType) ||
                (step === 4 && (!name || !email))
                  ? 'bg-[#edf2ff] text-[#a0a6ba] cursor-not-allowed'
                  : 'bg-[#ffd700] text-[#112152] hover:bg-[#ffe661] border border-[#ffd700] hover:border-[#ffe661]'
              }`}
            >
              {step === 4 ? 'Submit' : 'Next'}
            </button>
          </div>
        )}

        {/* Close Confirmation Dialog */}
        {showConfirmClose && (
          <div className="absolute inset-0 bg-black/60 z-30 flex items-center justify-center p-6">
            <div className="bg-white p-6 shadow-2xl max-w-[360px] w-full text-center">
              <h4 className="text-[18px] font-bold text-[#030e31] mb-2">
                Are you sure you want to close this window?
              </h4>
              <p className="text-[14px] text-[#616267] mb-6">
                All entered data will be lost
              </p>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setShowConfirmClose(false)}
                  className="px-4 py-2 text-[14px] text-[#616267] hover:text-[#030e31]"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmClose}
                  className="px-5 py-2 text-[14px] bg-[#112152] text-white hover:bg-[#030e31] transition-colors"
                >
                  Yes, close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
