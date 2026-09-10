'use client';

import React, { useState, useEffect } from 'react';

export const WarningModal: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Show after a brief delay on client
    const hasDismissed = typeof window !== 'undefined' && sessionStorage.getItem('pb_warning_dismissed');
    if (!hasDismissed) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!visible || countdown <= 0) return;
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [visible, countdown]);

  const handleDismiss = () => {
    setVisible(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('pb_warning_dismissed', 'true');
    }
  };

  if (!visible) return null;

  return (
    <div
      role="alert"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-[420px] bg-white shadow-[0_-6px_32px_rgba(0,0,0,0.16)] p-4 z-[999] border border-[#edf2ff] font-sans"
    >
      <div className="text-[15px] leading-[22px] text-[#050424] mb-3">
        <div className="flex items-start gap-2">
          <div className="flex-shrink-0 mt-0.5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.5244 17.4469L14.3259 3.20904C14.0885 2.80293 13.7488 2.46607 13.3408 2.23197C12.9327 1.99787 12.4705 1.87469 12 1.87469C11.5296 1.87469 11.0673 1.99787 10.6593 2.23197C10.2512 2.46607 9.91154 2.80293 9.67407 3.20904L1.47564 17.4469C1.24522 17.841 1.12378 18.2892 1.12378 18.7458C1.12378 19.2023 1.24522 19.6506 1.47564 20.0447C1.71047 20.4528 2.04966 20.7911 2.4584 21.0249C2.86714 21.2587 3.33072 21.3795 3.80157 21.375H20.1985C20.669 21.3792 21.1322 21.2582 21.5406 21.0244C21.9489 20.7907 22.2878 20.4525 22.5225 20.0447C22.7532 19.6507 22.875 19.2025 22.8753 18.746C22.8756 18.2895 22.7545 17.8411 22.5244 17.4469ZM10.875 12.75V9.75C10.875 9.13 11.38 8.625 12 8.625C12.62 8.625 13.125 9.13 13.125 9.75V12.75C13.125 13.37 12.62 13.875 12 13.875C11.38 13.875 10.875 13.37 10.875 12.75ZM13.5 16.5C13.5 17.33 12.83 18 12 18C11.17 18 10.5 17.33 10.5 16.5C10.5 15.67 11.17 15 12 15C12.83 15 13.5 15.67 13.5 16.5Z"
                fill="#030e31"
              />
            </svg>
          </div>
          <div>
            <span className="font-bold text-[#030e31] text-[16px]">Note</span>
            <span className="text-[#050424]">
              {' '}- Beware of imposters:<br />
              a) Our emails end with @payback.com<br />
              b) We would NEVER ask you to send us money via Crypto.
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleDismiss}
          className="border border-[#112152] px-6 py-1.5 text-[14px] font-medium text-[#112152] bg-white hover:bg-[#112152] hover:text-white transition-colors"
        >
          OK {countdown > 0 ? `(${countdown})` : ''}
        </button>
      </div>
    </div>
  );
};

export default WarningModal;
