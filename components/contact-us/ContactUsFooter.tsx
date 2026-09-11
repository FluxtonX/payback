import React from 'react';
import Image from 'next/image';

export const ContactUsFooter: React.FC = () => {
  return (
    <div className="w-full max-w-[470px] md:max-w-[792px] mx-auto px-4 md:px-0 my-16 md:mt-32 md:mb-20 font-sans">
      <h2 className="font-bold text-[22px] sm:text-[24px] md:text-[28px] leading-[32px] text-[var(--brand-deep)] text-center mb-8 md:mb-12">
        You can also contact us in the following ways:
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-0 text-[16px] leading-[24px] text-[var(--brand-primary)]">
        {/* Left Column: Address & Email */}
        <div className="w-full md:w-[340px] md:pr-8 flex flex-col gap-4 text-center md:text-left items-center md:items-start">
          {/* Location */}
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/icons/contact/location.svg"
                alt="Location"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-[var(--brand-primary)] font-normal">
              Ha-Khilazon St 5, Ramat Gan, Israel, 5252269
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/icons/contact/mail.svg"
                alt="Mail"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            </div>
            <a
              href="mailto:info@payback.com"
              className="text-[var(--brand-primary)] underline hover:text-[var(--brand-deep)] transition-colors"
            >
              info@payback.com
            </a>
          </div>
        </div>

        {/* Right Column: WhatsApp & Phones */}
        <div className="w-full md:flex-1 md:pl-8 md:border-l md:border-[var(--brand-soft)] flex flex-col gap-5">
          {/* WhatsApp CTA */}
          <div>
            <a
              href="https://wa.me/+972539538554?text=Good day."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-[var(--brand-primary)] hover:text-[var(--brand-deep)] font-medium transition-colors group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="url(#cu_paint0_linear)"></rect>
                <path
                  d="M4.34144 11.9305C4.34106 13.2792 4.69506 14.5962 5.36819 15.757L4.27706 19.7231L8.35406 18.6589C9.48171 19.27 10.7452 19.5902 12.0291 19.5903H12.0324C16.2709 19.5903 19.7211 16.1568 19.7229 11.9365C19.7237 9.89148 18.9244 7.96847 17.4723 6.5217C16.0204 5.07506 14.0895 4.27794 12.0321 4.27701C7.79319 4.27701 4.34325 7.71038 4.3415 11.9305"
                  fill="url(#cu_paint1_linear)"
                ></path>
                <path
                  d="M4.06688 11.928C4.06644 13.3253 4.43312 14.6894 5.13025 15.8917L4 20L8.22319 18.8976C9.38681 19.5292 10.6969 19.8622 12.0301 19.8627H12.0335C16.424 19.8627 19.9981 16.3057 20 11.9343C20.0008 9.81582 19.1727 7.82368 17.6687 6.32508C16.1646 4.82667 14.1646 4.00087 12.0335 4C7.64225 4 4.06863 7.55657 4.06688 11.928ZM6.58194 15.6846L6.42425 15.4355C5.76137 14.3862 5.4115 13.1736 5.412 11.9285C5.41337 8.29507 8.38363 5.339 12.036 5.339C13.8048 5.33975 15.467 6.02617 16.7172 7.27159C17.9674 8.51714 18.6554 10.1728 18.6549 11.9338C18.6533 15.5672 15.683 18.5237 12.0335 18.5237H12.0309C10.8426 18.5231 9.67712 18.2054 8.66075 17.605L8.41888 17.4622L5.91275 18.1163L6.58194 15.6846Z"
                  fill="url(#cu_paint2_linear)"
                ></path>
                <path
                  d="M10.0424 8.61358C9.89325 8.28362 9.73631 8.27696 9.5945 8.27118C9.47837 8.2662 9.34562 8.26657 9.213 8.26657C9.08025 8.26657 8.86456 8.31629 8.68225 8.51446C8.49975 8.71282 7.9855 9.19218 7.9855 10.1671C7.9855 11.1421 8.69881 12.0843 8.79825 12.2167C8.89781 12.3488 10.1753 14.4135 12.1986 15.2078C13.8801 15.868 14.2222 15.7367 14.5872 15.7036C14.9522 15.6706 15.7649 15.2243 15.9307 14.7616C16.0967 14.2989 16.0967 13.9023 16.0469 13.8194C15.9972 13.7369 15.8644 13.6873 15.6654 13.5882C15.4663 13.4892 14.4876 13.0097 14.3052 12.9436C14.1227 12.8775 13.99 12.8445 13.8572 13.0429C13.7245 13.241 13.3433 13.6873 13.2271 13.8194C13.1111 13.9519 12.9949 13.9684 12.7959 13.8693C12.5967 13.7699 11.9556 13.5609 11.1951 12.8858C10.6033 12.3605 10.2038 11.7119 10.0877 11.5135C9.97156 11.3154 10.0752 11.208 10.1751 11.1092C10.2645 11.0204 10.3742 10.8778 10.4738 10.7621C10.5731 10.6464 10.6062 10.5638 10.6726 10.4317C10.739 10.2994 10.7057 10.1837 10.6561 10.0846C10.6062 9.98544 10.2194 9.00539 10.0424 8.61358Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient id="cu_paint0_linear" x1="12" y1="24" x2="12" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1FAF38"></stop>
                    <stop offset="1" stopColor="#60D669"></stop>
                  </linearGradient>
                  <linearGradient id="cu_paint1_linear" x1="7.76" y1="15.48" x2="7.76" y2="4.27" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1FAF38"></stop>
                    <stop offset="1" stopColor="#60D669"></stop>
                  </linearGradient>
                  <linearGradient id="cu_paint2_linear" x1="8" y1="16" x2="8" y2="4" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F9F9F9"></stop>
                    <stop offset="1" stopColor="white"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <span className="underline">+972-539-538-554</span>
            </a>
          </div>

          {/* Phones 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5">
            {/* IL */}
            <div className="flex items-center gap-2">
              <Image
                src="/icons/contact/il.svg"
                alt="IL"
                width={28}
                height={20}
                className="w-7 h-5 object-contain"
              />
              <a
                href="tel:+972777408749"
                className="text-[var(--brand-primary)] hover:text-[var(--brand-deep)] transition-colors"
              >
                +972-777408749
              </a>
            </div>

            {/* US */}
            <div className="flex items-center gap-2">
              <Image
                src="/icons/contact/us.svg"
                alt="US"
                width={28}
                height={20}
                className="w-7 h-5 object-contain"
              />
              <a
                href="tel:+13475184140"
                className="text-[var(--brand-primary)] hover:text-[var(--brand-deep)] transition-colors"
              >
                +1-347-518-4140
              </a>
            </div>

            {/* AU */}
            <div className="flex items-center gap-2">
              <Image
                src="/icons/contact/au.svg"
                alt="AU"
                width={28}
                height={20}
                className="w-7 h-5 object-contain"
              />
              <a
                href="tel:+61282105236"
                className="text-[var(--brand-primary)] hover:text-[var(--brand-deep)] transition-colors"
              >
                +61-282-105-236
              </a>
            </div>

            {/* UK */}
            <div className="flex items-center gap-2">
              <Image
                src="/icons/contact/uk.svg"
                alt="UK"
                width={28}
                height={20}
                className="w-7 h-5 object-contain"
              />
              <a
                href="tel:+442039960143"
                className="text-[var(--brand-primary)] hover:text-[var(--brand-deep)] transition-colors"
              >
                +44-203-996-0143
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFooter;
