'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  variant?: 'dark' | 'transparent' | 'white';
}

export const Navbar: React.FC<NavbarProps> = ({ variant = 'dark' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeServiceCategory, setActiveServiceCategory] = useState<number>(0);

  // Mobile submenu accordion toggles
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileOnlineSafetyOpen, setMobileOnlineSafetyOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const [mobilePaybackOpen, setMobilePaybackOpen] = useState(false);

  // Close menus on resize to desktop (>= 1366px matching live site)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1366) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const blogPreviewArticles = [
    {
      title: 'The 2026 Online Scam Threat Landscape: How to Get Your Money Back From a Scam',
      date: 'January 13, 26',
      href: '/blogs/the-2026-online-scam-threat-landscape-how-to-get-your-money-back-from-a-scam/',
      thumbnail: '/articlesImages/the-2026-online-scam-threat-landscape-how-to-get-your-money-back-from-a-scam/thumbnail.png',
    },
    {
      title: 'The Role of Regulation in Forex Trading: What to Look For',
      date: 'February 5, 2025',
      href: '/blogs/the-role-of-regulation-in-forex-trading-what-to-look-for/',
      thumbnail: '/articlesImages/the-role-of-regulation-in-forex-trading-what-to-look-for/thumbnail.png',
    },
    {
      title: 'The Truth Behind Guaranteed Returns in Forex Trading',
      date: 'January 27, 2025',
      href: '/blogs/the-truth-behind-guaranteed-returns-in-forex-trading/',
      thumbnail: '/articlesImages/the-truth-behind-guaranteed-returns-in-forex-trading/thumbnail.png',
    },
  ];

  const serviceCategories = [
    {
      id: 0,
      title: 'Investigation',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9994 1.4375V6.2375C11.9994 7.82808 13.2887 9.1175 14.8794 9.1175H20.6394V19.6775C20.6394 21.2681 19.35 22.5575 17.7594 22.5575H6.23937C4.6488 22.5575 3.35938 21.2681 3.35938 19.6775V4.3175C3.35938 2.72692 4.6488 1.4375 6.23937 1.4375H11.9994ZM13.9194 1.9713V6.2375C13.9194 6.76769 14.3492 7.1975 14.8794 7.1975H19.9725C19.87 7.0746 19.7569 6.95956 19.6337 6.85392L14.1234 2.13084C14.0576 2.07442 13.9895 2.02122 13.9194 1.9713ZM10.7994 11.5175C9.2088 11.5175 7.91937 12.8069 7.91937 14.3975C7.91937 15.9881 9.2088 17.2775 10.7994 17.2775C12.39 17.2775 13.6794 15.9881 13.6794 14.3975C13.6794 12.8069 12.39 11.5175 10.7994 11.5175ZM5.99937 14.3975C5.99937 11.7466 8.14841 9.5975 10.7994 9.5975C13.4503 9.5975 15.5994 11.7466 15.5994 14.3975C15.5994 15.3758 15.3067 16.2858 14.8041 17.0446L17.7182 19.9587L16.3606 21.3163L13.4465 18.4022C12.6877 18.9048 11.7777 19.1975 10.7994 19.1975C8.14841 19.1975 5.99937 17.0484 5.99937 14.3975Z"
            fill="currentColor"
          />
        </svg>
      ),
      columns: [
        [
          { label: 'Cyber investigation / (Fraud investigations)', href: '/cyber-investigations/' },
          { label: 'Crypto asset tracing', href: '/crypto-asset-tracing/' },
          { label: 'KYC services', href: '/kyc-services/' },
          { label: 'Binary Options Scams', href: '/binary-options-scams/' },
          { label: 'Digital Currency Scam', href: '/digital-currency-scams/' },
          { label: 'Forex Scam', href: '/forex-scams/' },
        ],
        [
          { label: 'Stock Trading Scams', href: '/stock-trading-scams/' },
          { label: 'Credit Card Phishing Scams', href: '/credit-card-phishing/' },
          { label: 'Property Scams', href: '/property-scams/' },
          { label: 'Romance Scams', href: '/romance-scams/' },
          { label: 'Other Scams...', href: '/financial-scams/' },
        ],
      ],
    },
    {
      id: 1,
      title: 'Education',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.5 13.75V17.0125C19.5 18.1975 18.8025 19.255 17.7225 19.75C16.41 20.35 14.4225 21.0025 12 21.0025C9.5775 21.0025 7.59 20.35 6.27 19.75C5.1975 19.255 4.5 18.1975 4.5 17.0125V13.75L9.8325 16.1875C10.515 16.5025 11.25 16.66 12 16.66C12.75 16.66 13.485 16.5025 14.1675 16.1875L19.5 13.75Z"
            fill="currentColor"
          />
          <path
            d="M22.5 12.375V17.25C22.5 17.6625 22.1625 18 21.75 18C21.3375 18 21 17.6625 21 17.25V13.065L22.5 12.375Z"
            fill="currentColor"
          />
          <path
            d="M10.4535 14.8224C10.9447 15.0467 11.472 15.1592 12 15.1592C12.528 15.1592 13.0545 15.0474 13.5465 14.8224L23.1248 10.4439C23.6648 10.1972 24 9.67444 24 9.07969C24 8.48494 23.6648 7.96144 23.1248 7.71469L13.5465 3.33694C12.5633 2.88769 11.4375 2.88769 10.4543 3.33694L0.87525 7.71394C0.33525 7.96144 0 8.48419 0 9.07894C0 9.67369 0.33525 10.1964 0.87525 10.4439L10.4535 14.8224Z"
            fill="currentColor"
          />
        </svg>
      ),
      columns: [
        [
          { label: 'ADR course', href: '/adr-course/' },
          { label: 'ADR advanced course', href: '/adr-advanced-course/' },
        ],
      ],
    },
    {
      id: 2,
      title: 'Professional Consulting',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.69705 1.99951H20.3031C21.2403 1.99951 22.0001 2.72711 22.0001 3.62451V11.3433C22.0001 12.2407 21.2403 12.9683 20.3031 12.9683H17.1213L14.1037 14.8947C13.9967 14.9629 13.8707 14.9995 13.7422 14.9995C13.3829 14.9995 13.091 14.7204 13.091 14.3759V12.9683H11.7078C13.096 11.9699 14.0001 10.3405 14.0001 8.5C14.0001 5.46243 11.5376 3 8.50008 3C8.37385 3 8.24862 3.00425 8.12451 3.01262C8.37692 2.41845 8.98593 1.99951 9.69705 1.99951Z"
            fill="currentColor"
          />
          <path
            d="M8.5 12.3509C10.5514 12.3509 12.2143 10.7052 12.2143 8.67519C12.2143 6.64516 10.5514 4.99951 8.5 4.99951C6.44865 4.99951 4.78571 6.64516 4.78571 8.67519C4.78571 10.7052 6.44865 12.3509 8.5 12.3509Z"
            fill="currentColor"
          />
          <path
            d="M15 21.9995V19.7022C15 16.0265 11.3205 13.7292 8.5 13.7292C5.67946 13.7292 2 16.0265 2 19.7022V21.9995H15Z"
            fill="currentColor"
          />
        </svg>
      ),
      columns: [
        [
          { label: 'Scam Restitution Consulting', href: '/scam-restitution-consulting/' },
          { label: 'ADR guidance', href: '/adr-guidance/' },
          { label: 'Claims & Disputes', href: '/claims-and-disputes/' },
          { label: 'Forced account liquidations', href: '/forced-account-liquidations/' },
          { label: 'Regulatory compliance & other services', href: '/regulatory-compliance-and-other-services/' },
          { label: 'Aml compliance', href: '/aml-compliance/' },
        ],
      ],
    },
    {
      id: 3,
      title: 'B2B Cyber Security',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 7.81199C11.0248 7.81199 10.2318 8.56328 10.2318 9.48718V10.7436H13.7682V9.48718C13.7682 8.56328 12.9752 7.81199 12 7.81199Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0002 0C12.0002 0 14.9979 3.66112 22 4.47402V12.7124C22 16.8829 20.0631 19.6272 11.9998 24C3.93651 19.6261 2 16.8801 2 12.711V4.47265C9.00247 3.66112 12.0002 0 12.0002 0ZM14.6523 10.7436H14.9839C15.532 10.7436 15.9785 11.1661 15.9785 11.6859V16.0833C15.9785 16.6031 15.532 17.0256 14.9839 17.0256H9.01613C8.46799 17.0256 8.02151 16.6031 8.02151 16.0833V11.6859C8.02151 11.1661 8.46799 10.7436 9.01613 10.7436H9.34767V9.48718C9.34767 8.10133 10.5372 6.97436 12 6.97436C13.4628 6.97436 14.6523 8.10133 14.6523 9.48718V10.7436Z"
            fill="currentColor"
          />
        </svg>
      ),
      columns: [
        [
          { label: 'Blue Team', href: '/blue-team/' },
          { label: 'Red Team', href: '/red-team/' },
          { label: 'Security Consulting', href: '/security-consulting/' },
          { label: 'SOC Consulting', href: '/soc-consulting/' },
          { label: 'Cyber Intelligence', href: '/cyber-intelligence/' },
          { label: 'Social Engineering', href: '/social-engineering/' },
        ],
      ],
    },
  ];

  return (
    <>
      <header className="sticky top-0 left-0 w-full bg-[var(--brand-primary)] text-[#f4f4f4] z-50 py-5 min-[1366px]:py-6 min-[1366px]:min-h-[88px] px-4 md:px-6 min-[1366px]:px-20 transition-colors">
        <div className="max-w-[1208px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="block flex-shrink-0">
            <div className="relative w-[121px] h-[32px] min-[414px]:w-[151px] min-[414px]:h-[40px]">
              <Image
                src="/elements/logo.svg"
                alt="Payback Logotype"
                width={151}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation (>= 1366px) */}
          <nav className="hidden min-[1366px]:flex items-center">
            <ul className="flex items-center gap-5 font-sans text-[16px] text-[#a0a6ba]">
              {/* Testimonials */}
              <li>
                <Link
                  href="/testimonials/"
                  className="block py-[13px] hover:text-[#f4f4f4] transition-colors whitespace-nowrap"
                >
                  Testimonials
                </Link>
              </li>

              {/* Services Mega Dropdown */}
              <li
                className="relative py-[13px] pr-7 cursor-pointer whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center hover:text-[#f4f4f4] transition-colors">
                  <span>Services</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute right-0 top-[13px] transition-transform duration-200 ${
                      activeDropdown === 'services' ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      d="M16.939 7L12 11.94L7.06096 7L4.93896 9.122L12 16.182L19.061 9.122L16.939 7Z"
                      fill={activeDropdown === 'services' ? '#f4f4f4' : 'var(--brand-periwinkle)'}
                    />
                  </svg>
                </div>

                {/* Services Flyout Container */}
                {activeDropdown === 'services' && (
                  <div className="absolute top-[54px] -left-[130px] w-[410px] bg-white text-[var(--brand-primary)] shadow-[8px_16px_32px_0_rgba(3,14,49,0.08)] z-60">
                    <div className="p-4 flex flex-col gap-1 relative">
                      {serviceCategories.map((cat, idx) => (
                        <div
                          key={cat.id}
                          onMouseEnter={() => setActiveServiceCategory(idx)}
                          className={`p-3 flex items-center justify-between cursor-pointer transition-colors relative ${
                            activeServiceCategory === idx
                              ? 'bg-[var(--brand-primary)] text-[#f4f4f4]'
                              : 'text-[var(--brand-primary)] hover:bg-[var(--brand-soft)]/50'
                          }`}
                        >
                          <div className="flex items-center gap-3 font-medium text-[16px]">
                            <span className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                              {cat.icon}
                            </span>
                            <span>{cat.title}</span>
                          </div>
                          <span className="w-6 h-6 flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M7.47021 7L12.4102 11.939L7.47021 16.878L9.59221 19L16.6522 11.939L9.59221 4.878L7.47021 7Z"
                                fill={activeServiceCategory === idx ? '#f4f4f4' : '#A0A6BA'}
                              />
                            </svg>
                          </span>
                        </div>
                      ))}

                      {/* Right Sub-Container Flyout */}
                      <div className="absolute left-[414px] top-0 min-h-full min-w-[500px] p-6 bg-white shadow-[8px_16px_32px_0_rgba(3,14,49,0.08)] flex gap-8 z-70">
                        {serviceCategories[activeServiceCategory].columns.map(
                          (col, colIdx) => (
                            <div key={colIdx} className="flex flex-col gap-4">
                              {col.map((linkItem, linkIdx) => (
                                <Link
                                  key={linkIdx}
                                  href={linkItem.href}
                                  className="group flex items-center gap-2.5 text-[16px] font-medium text-[#616267] hover:text-[var(--brand-primary)] transition-colors whitespace-nowrap"
                                >
                                  <span className="w-1 h-1 rounded-full bg-[#616267] group-hover:w-1.5 group-hover:h-1.5 group-hover:bg-[var(--brand-primary)] transition-all flex-shrink-0" />
                                  <span>{linkItem.label}</span>
                                </Link>
                              ))}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Bottom Disclaimer Note */}
                    <div className="p-3.5 px-7 bg-[#f6f6f6] text-[#616267] text-[14px] leading-[22px] border-t border-[var(--brand-soft)]">
                      <strong className="font-semibold text-[var(--brand-primary)]">Note:</strong> Due to local regulations, not all services are available in all countries. For more information, contact us.
                    </div>
                  </div>
                )}
              </li>

              {/* Online Safety Dropdown */}
              <li
                className="relative py-[13px] pr-7 cursor-pointer whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('online-safety')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center hover:text-[#f4f4f4] transition-colors">
                  <span>Online Safety</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute right-0 top-[13px] transition-transform duration-200 ${
                      activeDropdown === 'online-safety' ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      d="M16.939 7L12 11.94L7.06096 7L4.93896 9.122L12 16.182L19.061 9.122L16.939 7Z"
                      fill={activeDropdown === 'online-safety' ? '#f4f4f4' : 'var(--brand-periwinkle)'}
                    />
                  </svg>
                </div>
                {activeDropdown === 'online-safety' && (
                  <ul className="absolute top-[54px] -left-2 w-[240px] bg-white text-[#616267] py-4 px-6 shadow-[8px_16px_32px_0_rgba(3,14,49,0.08)] z-60 flex flex-col gap-3">
                    <li>
                      <Link
                        href="/whistleblowing/"
                        className="group flex items-center gap-2.5 text-[16px] font-medium text-[#616267] hover:text-[var(--brand-primary)] transition-colors whitespace-nowrap"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#616267] group-hover:w-1.5 group-hover:h-1.5 group-hover:bg-[var(--brand-primary)] transition-all flex-shrink-0" />
                        <span>Whistleblowing</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/fraud-prevention-tools/"
                        className="group flex items-center gap-2.5 text-[16px] font-medium text-[#616267] hover:text-[var(--brand-primary)] transition-colors whitespace-nowrap"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#616267] group-hover:w-1.5 group-hover:h-1.5 group-hover:bg-[var(--brand-primary)] transition-all flex-shrink-0" />
                        <span>Fraud Prevention Tools</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/payback-verifier/"
                        className="group flex items-center gap-2.5 text-[16px] font-medium text-[#616267] hover:text-[var(--brand-primary)] transition-colors whitespace-nowrap"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#616267] group-hover:w-1.5 group-hover:h-1.5 group-hover:bg-[var(--brand-primary)] transition-all flex-shrink-0" />
                        <span>Payback Verifier</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Blog Dropdown with Exact Article Thumbnails */}
              <li
                className="relative py-[13px] pr-7 cursor-pointer whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('blog')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center hover:text-[#f4f4f4] transition-colors">
                  <span>Blog</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute right-0 top-[13px] transition-transform duration-200 ${
                      activeDropdown === 'blog' ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      d="M16.939 7L12 11.94L7.06096 7L4.93896 9.122L12 16.182L19.061 9.122L16.939 7Z"
                      fill={activeDropdown === 'blog' ? '#f4f4f4' : 'var(--brand-periwinkle)'}
                    />
                  </svg>
                </div>
                {activeDropdown === 'blog' && (
                  <div className="absolute top-[54px] -left-[75px] w-[460px] bg-white text-[var(--brand-primary)] p-4 shadow-[8px_16px_32px_0_rgba(3,14,49,0.08)] z-60 flex flex-col gap-4">
                    <ul className="flex flex-col gap-4">
                      {blogPreviewArticles.map((article, idx) => (
                        <li key={idx} className="group/item">
                          <Link
                            href={article.href}
                            className="flex items-center gap-4 h-[72px]"
                          >
                            <div className="w-[112px] h-[72px] flex-shrink-0 overflow-hidden bg-[#f4f4f4]">
                              <img
                                src={article.thumbnail}
                                alt={article.title}
                                className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-300"
                              />
                            </div>
                            <div className="flex flex-col gap-1 min-w-[192px] max-w-[310px] flex-grow">
                              <span className="text-[#616267] font-light text-[14px] leading-[16px]">
                                {article.date}
                              </span>
                              <p className="text-[var(--brand-primary)] text-[16px] leading-[24px] font-normal line-clamp-2 max-h-[48px] overflow-hidden group-hover/item:text-[var(--brand-accent)] transition-colors whitespace-normal">
                                {article.title}
                              </p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/blog/"
                      className="inline-flex items-center justify-between text-[15px] font-semibold text-[var(--brand-primary)] hover:text-[var(--brand-accent)] transition-colors pt-2 border-t border-[var(--brand-soft)] whitespace-nowrap"
                    >
                      <span>View All Articles</span>
                      <Image
                        src="/elements/carousel-chevron-right.svg"
                        alt="Arrow"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                )}
              </li>

              {/* Payback Dropdown */}
              <li
                className="relative py-[13px] pr-7 cursor-pointer whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('payback')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center hover:text-[#f4f4f4] transition-colors">
                  <span>Payback</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute right-0 top-[13px] transition-transform duration-200 ${
                      activeDropdown === 'payback' ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      d="M16.939 7L12 11.94L7.06096 7L4.93896 9.122L12 16.182L19.061 9.122L16.939 7Z"
                      fill={activeDropdown === 'payback' ? '#f4f4f4' : 'var(--brand-periwinkle)'}
                    />
                  </svg>
                </div>
                {activeDropdown === 'payback' && (
                  <ul className="absolute top-[54px] -left-2 w-[200px] bg-white text-[#616267] py-4 px-6 shadow-[8px_16px_32px_0_rgba(3,14,49,0.08)] z-60 flex flex-col gap-3">
                    <li>
                      <Link
                        href="/contact-us/"
                        className="group flex items-center gap-2.5 text-[16px] font-medium text-[#616267] hover:text-[var(--brand-primary)] transition-colors whitespace-nowrap"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#616267] group-hover:w-1.5 group-hover:h-1.5 group-hover:bg-[var(--brand-primary)] transition-all flex-shrink-0" />
                        <span>Contact us</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us/"
                        className="group flex items-center gap-2.5 text-[16px] font-medium text-[#616267] hover:text-[var(--brand-primary)] transition-colors whitespace-nowrap"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#616267] group-hover:w-1.5 group-hover:h-1.5 group-hover:bg-[var(--brand-primary)] transition-all flex-shrink-0" />
                        <span>About Us</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* FAQ */}
              <li>
                <Link
                  href="/faq/"
                  className="block py-[13px] hover:text-[#f4f4f4] transition-colors whitespace-nowrap"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          {/* Action Buttons Right Part */}
          <div className="flex items-center">
            {/* WhatsApp Chat Link (mobile/tablet only, matching live .hide-xl) */}
            <a
              href="https://wa.me/+972539538554?text=Good day."
              target="_blank"
              rel="noreferrer"
              className="p-1 min-[1366px]:hidden hover:opacity-80 transition-opacity"
              title="Chat on WhatsApp"
            >
              <div className="relative w-[32px] h-[32px]">
                <Image
                  src="/elements/chatButton.svg"
                  alt="WhatsApp"
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>
            </a>

            {/* Desktop CTA Button: Get your money back */}
            <div className="hidden min-[1366px]:block">
              <Link
                href="/contact-us/"
                className="block text-center w-[228px] py-[12px] bg-[var(--brand-primary)] border border-[var(--brand-soft)] text-[var(--brand-soft)] font-medium text-[16px] hover:bg-[var(--brand-soft)] hover:text-[var(--brand-primary)] transition-colors whitespace-nowrap"
              >
                Get your money back
              </Link>
            </div>

            {/* Desktop Separator */}
            <div className="hidden min-[1366px]:block w-px h-[40px] ml-5 mr-3 bg-[#a0a6ba]" />

            {/* User Profile / Login Icon */}
            <Link
              href="/login/"
              className="hidden min-[1366px]:flex w-8 h-8 items-center justify-center text-[#a0a6ba] hover:text-white transition-colors"
              title="Client Login"
            >
              <div className="relative w-[24px] h-[24px]">
                <Image
                  src="/elements/loginGrey.svg"
                  alt="Login"
                  width={24}
                  height={24}
                />
              </div>
            </Link>

            {/* Mobile Burger Toggle Button (< 1366px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-[1366px]:hidden p-1 focus:outline-none ml-2"
              aria-label="Toggle Navigation"
            >
              <div className="relative w-[32px] h-[32px]">
                <Image
                  src={mobileMenuOpen ? '/elements/burger-close-white.svg' : '/elements/burger.svg'}
                  alt="Menu"
                  width={32}
                  height={32}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (< 1366px) */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[72px] md:top-[80px] bottom-0 bg-white z-40 overflow-y-auto px-6 py-6 text-[var(--brand-deep)] font-sans min-[1366px]:hidden">
          <ul className="space-y-4 text-[16px] font-medium divide-y divide-[#f4f4f4]">
            <li className="pt-2">
              <Link
                href="/testimonials/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[var(--brand-primary)]"
              >
                Testimonials
              </Link>
            </li>

            {/* Mobile Services Accordion */}
            <li className="pt-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex justify-between items-center py-2 text-[var(--brand-primary)]"
              >
                <span>Services</span>
                <span className="text-xl">{mobileServicesOpen ? '−' : '+'}</span>
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 pt-2 space-y-4 text-[15px] text-[#616267]">
                  <div>
                    <h5 className="font-semibold text-[var(--brand-primary)] mb-2">Investigation</h5>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/cyber-investigations/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Cyber investigation / (Fraud investigations)
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/crypto-asset-tracing/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Crypto asset tracing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/kyc-services/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          KYC services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/binary-options-scams/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Binary Options Scams
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/digital-currency-scams/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Digital Currency Scam
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/forex-scams/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Forex Scam
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/stock-trading-scams/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Stock Trading Scams
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/credit-card-phishing/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Credit Card Phishing Scams
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/property-scams/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Property Scams
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/romance-scams/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Romance Scams
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/financial-scams/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Other Scams...
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-[var(--brand-primary)] mb-2">Education</h5>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/adr-course/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          ADR course
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/adr-advanced-course/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          ADR advanced course
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-[var(--brand-primary)] mb-2">Professional Consulting</h5>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/scam-restitution-consulting/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Scam Restitution Consulting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/adr-guidance/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          ADR guidance
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/claims-and-disputes/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Claims &amp; Disputes
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/forced-account-liquidations/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Forced account liquidations
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/regulatory-compliance-and-other-services/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Regulatory compliance &amp; other services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/aml-compliance/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Aml compliance
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-[var(--brand-primary)] mb-2">B2B Cyber Security</h5>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/blue-team/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Blue Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/red-team/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Red Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/security-consulting/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Security Consulting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/soc-consulting/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          SOC Consulting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cyber-intelligence/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Cyber Intelligence
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/social-engineering/"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-[var(--brand-primary)]"
                        >
                          Social Engineering
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* Mobile Online Safety Accordion */}
            <li className="pt-2">
              <button
                onClick={() => setMobileOnlineSafetyOpen(!mobileOnlineSafetyOpen)}
                className="w-full flex justify-between items-center py-2 text-[var(--brand-primary)]"
              >
                <span>Online Safety</span>
                <span className="text-xl">{mobileOnlineSafetyOpen ? '−' : '+'}</span>
              </button>
              {mobileOnlineSafetyOpen && (
                <ul className="pl-4 pt-2 space-y-2 text-[15px] text-[#616267]">
                  <li>
                    <Link
                      href="/whistleblowing/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[var(--brand-primary)]"
                    >
                      Whistleblowing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/fraud-prevention-tools/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[var(--brand-primary)]"
                    >
                      Fraud Prevention Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/payback-verifier/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[var(--brand-primary)]"
                    >
                      Payback Verifier
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Mobile Blog Link */}
            <li className="pt-2">
              <Link
                href="/blog/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[var(--brand-primary)]"
              >
                Blog
              </Link>
            </li>

            {/* Mobile Payback Accordion */}
            <li className="pt-2">
              <button
                onClick={() => setMobilePaybackOpen(!mobilePaybackOpen)}
                className="w-full flex justify-between items-center py-2 text-[var(--brand-primary)]"
              >
                <span>Payback</span>
                <span className="text-xl">{mobilePaybackOpen ? '−' : '+'}</span>
              </button>
              {mobilePaybackOpen && (
                <ul className="pl-4 pt-2 space-y-2 text-[15px] text-[#616267]">
                  <li>
                    <Link
                      href="/contact-us/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[var(--brand-primary)]"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[var(--brand-primary)]"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="pt-2">
              <Link
                href="/faq/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[var(--brand-primary)]"
              >
                FAQ
              </Link>
            </li>
          </ul>

          <div className="mt-8 pt-4">
            <Link
              href="/contact-us/"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 bg-[var(--brand-primary)] border border-[var(--brand-primary)] text-[var(--brand-soft)] text-center font-medium"
            >
              Get your money back
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
