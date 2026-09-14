'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const sitelinks = [
    { title: 'Our Team', href: '/#our-team' },
    { title: 'Contact us', href: '/contact-us/' },
    { title: 'About Us', href: '/about-us/' },
    { title: 'FAQ', href: '/faq/' },
    { title: 'Affiliate page', href: '/affiliate-page/' },
    { title: 'Fraud Prevention Tools', href: '/fraud-prevention-tools/' },
    { title: 'Online Reclaims Verifier', href: '/payback-verifier/' },
    { title: 'Scam Detector', href: '/scam-detector/' },
  ];

  const phones = [
    { country: 'IL', space: 13, number: '+972-777-408-749', tel: '+972777408749' },
    { country: 'US', space: 4, number: '+1-347-518-4140', tel: '+13475184140' },
    { country: 'AU', space: 3, number: '+61-282-105-236', tel: '+61282105236' },
    { country: 'UK', space: 7, number: '+44-203-996-0143', tel: '+442039960143' },
  ];

  const officeHours = [
    'Mon, Wed - 08:00-17:00',
    'Tue, Thu - 10:00-19:00',
    'Fri - 08:00 - 12:00',
    'Sat, Sun - closed',
  ];

  const socials = [
    { name: 'Facebook', href: 'https://www.facebook.com/paybackcom' },
    { name: 'Twitter', href: 'https://twitter.com/payback_ltd' },
    { name: 'YouTube', href: 'https://www.youtube.com/channel/UC1JdOGaJJLvDmmgIqvZSWVw' },
  ];

  return (
    <footer className="bg-[var(--brand-deep)] text-[var(--brand-soft)] font-sans pb-8 sm:pb-10">
      {/* Top Divider */}
      <hr className="w-full border-t border-[#a0a6ba]/30 m-0" />

      <div className="container max-w-[1208px] mx-auto px-4">
        {/* Mobile Accordion View (< 1208px) */}
        <div className="block xl:hidden py-4 divide-y divide-[var(--brand-primary)]/60">
          {/* Sitelinks */}
          <div className="py-2">
            <button
              onClick={() => toggleAccordion('sitelinks')}
              className="w-full flex justify-between items-center text-left py-3 text-[var(--brand-soft)] font-semibold text-[16px]"
            >
              <span>Sitelinks</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform duration-200 ${
                  openAccordion === 'sitelinks' ? 'rotate-180' : ''
                }`}
              >
                <path
                  d="M16.9395 7.93896L12.0005 12.879L7.06145 7.93896L4.93945 10.061L12.0005 17.121L19.0615 10.061L16.9395 7.93896Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
            {openAccordion === 'sitelinks' && (
              <ul className="pb-3 space-y-2.5 text-[15px]">
                {sitelinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-[#a0a6ba] hover:text-[var(--brand-soft)] transition-colors block py-0.5"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Contact us */}
          <div className="py-2">
            <button
              onClick={() => toggleAccordion('contact')}
              className="w-full flex justify-between items-center text-left py-3 text-[var(--brand-soft)] font-semibold text-[16px]"
            >
              <span>Contact us</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform duration-200 ${
                  openAccordion === 'contact' ? 'rotate-180' : ''
                }`}
              >
                <path
                  d="M16.9395 7.93896L12.0005 12.879L7.06145 7.93896L4.93945 10.061L12.0005 17.121L19.0615 10.061L16.9395 7.93896Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
            {openAccordion === 'contact' && (
              <ul className="pb-3 space-y-3 text-[15px]">
                <li>
                  <a
                    href="https://wa.me/+972539538554?text=Good day."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#a0a6ba] hover:text-[var(--brand-soft)] pb-2 border-b border-[#a0a6ba]/40 transition-colors"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0034 4.80957C22.18 4.80957 27.1867 9.81731 27.1867 15.995C27.1867 22.1728 22.18 27.1805 16.0034 27.1805C14.1 27.1832 12.2276 26.698 10.565 25.7712L10.2239 25.5721L6.83308 26.5698C6.64855 26.6242 6.4532 26.6305 6.26554 26.5882C6.07788 26.5459 5.90412 26.4564 5.76075 26.3281C5.61737 26.1999 5.50913 26.0371 5.44628 25.8552C5.38343 25.6734 5.36805 25.4785 5.40161 25.2891L5.43069 25.1671L6.42824 21.7757C5.37371 20.0322 4.81748 18.0328 4.82008 15.995C4.82008 9.81731 9.82685 4.80957 16.0034 4.80957ZM16.0034 7.04667C14.4015 7.04638 12.829 7.47625 11.4499 8.2914C10.0709 9.10655 8.93594 10.2771 8.16363 11.6807C7.39131 13.0844 7.00996 14.6697 7.05938 16.2711C7.1088 17.8726 7.58719 19.4313 8.44459 20.7847C8.66602 21.1337 8.76108 21.5632 8.68615 21.9893L8.64254 22.1717L8.14936 23.8506L9.82797 23.3573C10.3122 23.2142 10.8155 23.3014 11.2147 23.5553C12.3871 24.2978 13.7161 24.7573 15.0966 24.8976C16.4771 25.0379 17.8714 24.855 19.1691 24.3636C20.4668 23.8721 21.6324 23.0854 22.5738 22.0657C23.5152 21.0461 24.2065 19.8213 24.5932 18.4884C24.9798 17.1555 25.0512 15.7508 24.8016 14.3856C24.552 13.0203 23.9883 11.7318 23.1551 10.622C22.3219 9.51211 21.242 8.61133 20.0008 7.99081C18.7596 7.3703 17.391 7.04706 16.0034 7.04667Z"
                        fill="#A0A6BA"
                      />
                    </svg>
                    <span>+972-539-538-554</span>
                  </a>
                </li>
                {phones.map((p, idx) => (
                  <li key={idx}>
                    <a
                      href={`tel:${p.tel}`}
                      className="text-[#a0a6ba] hover:text-[var(--brand-soft)] transition-colors block py-0.5"
                    >
                      {p.country}{' '}
                      <span style={{ paddingRight: `${p.space}px` }} />{' '}
                      {p.number}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Location */}
          <div className="py-2">
            <button
              onClick={() => toggleAccordion('location')}
              className="w-full flex justify-between items-center text-left py-3 text-[var(--brand-soft)] font-semibold text-[16px]"
            >
              <span>Location</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform duration-200 ${
                  openAccordion === 'location' ? 'rotate-180' : ''
                }`}
              >
                <path
                  d="M16.9395 7.93896L12.0005 12.879L7.06145 7.93896L4.93945 10.061L12.0005 17.121L19.0615 10.061L16.9395 7.93896Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
            {openAccordion === 'location' && (
              <p className="pb-3 text-[#a0a6ba] text-[15px] leading-[24px]">
                100 King Street West, Suite 5600, Toronto, ON M5X 1C9, Canada
              </p>
            )}
          </div>

          {/* Office hours */}
          <div className="py-2">
            <button
              onClick={() => toggleAccordion('hours')}
              className="w-full flex justify-between items-center text-left py-3 text-[var(--brand-soft)] font-semibold text-[16px]"
            >
              <span>Our office hours (GMT)</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform duration-200 ${
                  openAccordion === 'hours' ? 'rotate-180' : ''
                }`}
              >
                <path
                  d="M16.9395 7.93896L12.0005 12.879L7.06145 7.93896L4.93945 10.061L12.0005 17.121L19.0615 10.061L16.9395 7.93896Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
            {openAccordion === 'hours' && (
              <ul className="pb-3 space-y-1.5 text-[#a0a6ba] text-[15px] select-none">
                {officeHours.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Social */}
          <div className="py-2">
            <button
              onClick={() => toggleAccordion('social')}
              className="w-full flex justify-between items-center text-left py-3 text-[var(--brand-soft)] font-semibold text-[16px]"
            >
              <span>Social</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform duration-200 ${
                  openAccordion === 'social' ? 'rotate-180' : ''
                }`}
              >
                <path
                  d="M16.9395 7.93896L12.0005 12.879L7.06145 7.93896L4.93945 10.061L12.0005 17.121L19.0615 10.061L16.9395 7.93896Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
            {openAccordion === 'social' && (
              <ul className="pb-3 space-y-2 text-[15px]">
                {socials.map((s, idx) => (
                  <li key={idx}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#a0a6ba] hover:text-[var(--brand-soft)] transition-colors block py-0.5"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Desktop 4-Column x 2-Row CSS Grid (>= 1208px) */}
        <div className="hidden xl:grid grid-cols-4 grid-rows-[auto_auto] gap-x-10 gap-y-10 pt-14 pb-10">
          {/* Post 1: Sitelinks (grid-column: 1 / 2; grid-row: 1 / 3) */}
          <div className="col-start-1 col-end-2 row-start-1 row-end-3 text-[#a0a6ba]">
            <h4 className="text-[18px] font-semibold text-[var(--brand-soft)] mb-4">
              Sitelinks
            </h4>
            <ul className="flex flex-col">
              {sitelinks.map((link, idx) => (
                <li key={idx} className="pt-2 first:pt-0">
                  <Link
                    href={link.href}
                    className="text-[#a0a6ba] hover:text-[var(--brand-soft)] text-[16px] transition-colors block py-0.5"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Post 2: Contact us (grid-column: 2 / 3; grid-row: 1 / 3) */}
          <div className="col-start-2 col-end-3 row-start-1 row-end-3 text-[#a0a6ba]">
            <h4 className="text-[18px] font-semibold text-[var(--brand-soft)] mb-4">
              Contact us
            </h4>
            <ul>
              {/* WhatsApp Button Link */}
              <li className="mb-3">
                <a
                  href="https://wa.me/+972539538554?text=Good day."
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 pb-3 border-b border-[#a0a6ba] text-[#a0a6ba] hover:text-[var(--brand-soft)] transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0034 4.80957C22.18 4.80957 27.1867 9.81731 27.1867 15.995C27.1867 22.1728 22.18 27.1805 16.0034 27.1805C14.1 27.1832 12.2276 26.698 10.565 25.7712L10.2239 25.5721L6.83308 26.5698C6.64855 26.6242 6.4532 26.6305 6.26554 26.5882C6.07788 26.5459 5.90412 26.4564 5.76075 26.3281C5.61737 26.1999 5.50913 26.0371 5.44628 25.8552C5.38343 25.6734 5.36805 25.4785 5.40161 25.2891L5.43069 25.1671L6.42824 21.7757C5.37371 20.0322 4.81748 18.0328 4.82008 15.995C4.82008 9.81731 9.82685 4.80957 16.0034 4.80957ZM16.0034 7.04667C14.4015 7.04638 12.829 7.47625 11.4499 8.2914C10.0709 9.10655 8.93594 10.2771 8.16363 11.6807C7.39131 13.0844 7.00996 14.6697 7.05938 16.2711C7.1088 17.8726 7.58719 19.4313 8.44459 20.7847C8.66602 21.1337 8.76108 21.5632 8.68615 21.9893L8.64254 22.1717L8.14936 23.8506L9.82797 23.3573C10.3122 23.2142 10.8155 23.3014 11.2147 23.5553C12.3871 24.2978 13.7161 24.7573 15.0966 24.8976C16.4771 25.0379 17.8714 24.855 19.1691 24.3636C20.4668 23.8721 21.6324 23.0854 22.5738 22.0657C23.5152 21.0461 24.2065 19.8213 24.5932 18.4884C24.9798 17.1555 25.0512 15.7508 24.8016 14.3856C24.552 13.0203 23.9883 11.7318 23.1551 10.622C22.3219 9.51211 21.242 8.61133 20.0008 7.99081C18.7596 7.3703 17.391 7.04706 16.0034 7.04667Z"
                      fill="#A0A6BA"
                      className="group-hover:fill-[var(--brand-soft)] transition-colors"
                    />
                  </svg>
                  <span>+972-539-538-554</span>
                </a>
              </li>

              {/* Phone Numbers */}
              {phones.map((p, idx) => (
                <li key={idx} className="pb-2 last:pb-0">
                  <a
                    href={`tel:${p.tel}`}
                    className="text-[#a0a6ba] hover:text-[var(--brand-soft)] text-[16px] transition-colors block"
                  >
                    {p.country}{' '}
                    <span style={{ paddingRight: `${p.space}px` }} />{' '}
                    {p.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Post 3: Location (grid-column: 3 / 4; grid-row: 1 / 2) */}
          <div className="col-start-3 col-end-4 row-start-1 row-end-2 text-[#a0a6ba]">
            <h4 className="text-[18px] font-semibold text-[var(--brand-soft)] mb-4">
              Location
            </h4>
            <p className="text-[#a0a6ba] text-[16px] leading-[24px]">
              100 King Street West, Suite 5600, Toronto, ON M5X 1C9, Canada
            </p>
          </div>

          {/* Post 4: Office hours (grid-column: 3 / 4; grid-row: 2 / 2) */}
          <div className="col-start-3 col-end-4 row-start-2 row-end-3 text-[#a0a6ba]">
            <h4 className="text-[18px] font-semibold text-[var(--brand-soft)] mb-4">
              Our office hours (GMT)
            </h4>
            <ul className="select-none">
              {officeHours.map((h, idx) => (
                <li key={idx} className="pb-2 last:pb-0 text-[16px] text-[#a0a6ba]">
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Post 5: Social (grid-column: 4 / 4; grid-row: 1 / 2) */}
          <div className="col-start-4 col-end-5 row-start-1 row-end-2 text-[#a0a6ba]">
            <h4 className="text-[18px] font-semibold text-[var(--brand-soft)] mb-4">
              Social
            </h4>
            <ul>
              {socials.map((s, idx) => (
                <li key={idx} className="pb-2 last:pb-0">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#a0a6ba] hover:text-[var(--brand-soft)] text-[16px] transition-colors block"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator before Footer Bottom */}
        <hr className="w-full border-t border-[#a0a6ba]/30 m-0" />

        {/* Footer Bottom Row */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px]">
          {/* Legal Links */}
          <ul className="flex items-center gap-8 md:gap-10">
            <li>
              <Link
                href="/tnc/"
                className="text-[#a0a6ba] hover:text-[var(--brand-soft)] transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy/"
                className="text-[#a0a6ba] hover:text-[var(--brand-soft)] transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/legal/"
                className="text-[#a0a6ba] hover:text-[var(--brand-soft)] transition-colors"
              >
                Legal
              </Link>
            </li>
          </ul>

          {/* Copyright & DMCA Protected */}
          <div className="flex items-center gap-4 text-[#a0a6ba]">
            <p>© Online Reclaims</p>
            <div className="relative w-[144px] h-[24px]">
              <picture>
                <source type="image/webp" srcSet="/images/dmca.webp" />
                <img
                  src="/images/dmca.png"
                  width={144}
                  height={24}
                  alt="Dmca Protected"
                  className="w-full h-full object-contain align-middle"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
