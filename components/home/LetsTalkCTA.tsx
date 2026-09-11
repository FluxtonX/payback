'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export const LetsTalkCTA: React.FC = () => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState('');
  const [open, setOpen] = useState(false);

  const scamTypes = [
    'Binary options',
    'Digital Currency',
    'Forex',
    'Stock Trading',
    'Property scam',
    'Romance scam',
    'Other scam',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/contact-us/');
  };

  return (
    <aside className="bg-[var(--brand-primary)] text-white py-12 lg:py-16 font-sans">
      <div className="container max-w-[1208px] mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-[28px] sm:text-[34px] xl:text-[40px] font-bold text-[#f4f4f4] mb-4 leading-tight">
          Retrieve your money from a scam!
        </h2>
        <div className="text-[15px] sm:text-[16px] xl:text-[18px] text-[var(--brand-soft)] mb-6 sm:mb-8 max-w-[584px] text-center">
          Thousands of clients used our Investigation Report to retrieve their losses. Start with a free consultation
        </div>

        {/* Live site startForm: vertical stack, 344px on md, 376px on xl */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-[344px] xl:max-w-[376px] mx-auto">
          {/* Select Dropdown */}
          <div className="relative w-full text-left">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="w-full bg-white text-[var(--brand-deep)] px-4 py-3 text-left text-[15px] sm:text-[16px] flex items-center justify-between focus:outline-none select-none shadow-sm"
            >
              <span className={selectedType ? 'text-[var(--brand-deep)]' : 'text-[#616267]'}>
                {selectedType || 'Choose a scam type'}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              >
                <path
                  d="M16.9395 7.93896L12.0005 12.879L7.06145 7.93896L4.93945 10.061L12.0005 17.121L19.0615 10.061L16.9395 7.93896Z"
                  fill="var(--brand-deep)"
                />
              </svg>
            </button>

            {open && (
              <div className="absolute top-full left-0 w-full bg-white text-[var(--brand-deep)] shadow-lg z-30 border border-[var(--brand-soft)] max-h-[260px] overflow-y-auto">
                {scamTypes.map((type, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedType(type);
                      setOpen(false);
                    }}
                    className="px-4 py-2.5 text-[14px] sm:text-[15px] hover:bg-[var(--brand-soft)] cursor-pointer text-left transition-colors"
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#ffd700] text-[var(--brand-primary)] font-semibold text-[16px] hover:bg-[#ffe661] hover:border-[#ffe661] transition-colors border border-[#ffd700] text-center cursor-pointer"
          >
            Get a free consultation
          </button>
        </form>
      </div>
    </aside>
  );
};

export default LetsTalkCTA;
