import React from 'react';

export const WhatSetsApartSection: React.FC = () => {
  const items = [
    {
      title: 'Client-centric approach',
      desc: 'At Online Reclaims, our clients are at the heart of everything we do. We are dedicated to providing compassionate support, personalized guidance, and the tools and resources they need throughout the journey.',
      icon: '/icons/client-centric.svg',
    },
    {
      title: 'Experience',
      desc: 'After navigating the waters of scams for nearly a decade and helping thousands of clients, our experience is unmatched worldwide.',
      icon: '/icons/experience.svg',
    },
    {
      title: 'Ethical Standards',
      desc: 'We believe in a straightforward approach to evaluating whether action is warranted and outlining the most appropriate steps. Our commitment to honesty ensures that our clients make informed decisions.',
      icon: '/icons/ethical.svg',
    },
    {
      title: 'Expertise and innovation',
      desc: 'Online Reclaims combines a diverse team of specialists with extensive backgrounds in cybersecurity, digital forensics, and legal matters. By harnessing our collective knowledge alongside cutting-edge technology, we strive that our services consistently meet the highest standards.',
      icon: '/icons/expertise-and-innovation.svg',
    },
    {
      title: 'Extensive Database',
      desc: 'We have meticulously gathered and maintained a comprehensive database of scams and associated wallets over the past decade. This valuable resource enhances our ability to identify patterns, track fraudulent activities, and provide informed strategies. Therefore, we are better equipped to help our clients navigate their challenges.',
      icon: '/icons/database.svg',
    },
    {
      title: 'Global reach and impact',
      desc: 'We are an international force in the field, helping scam victims worldwide. Our vast experiences and resources allow us to better navigate the complexities of cross-border investigations.',
      icon: '/icons/global.svg',
    },
    {
      title: 'Data security and privacy',
      desc: 'We employ robust data protection measures and adhere to strict confidentiality protocols to handle sensitive data carefully. Our clients can trust that we do everything we can to protect their information.',
      icon: '/icons/shield-approved.svg',
    },
    {
      title: 'Continuous improvement',
      desc: 'We at Online Reclaims are dedicated to constant improvement and learning. We actively research emerging scam trends, invest in the latest technologies, and adapt our strategies to provide the most effective support possible.',
      icon: '/icons/improvement.svg',
    },
  ];

  return (
    <section className="overflow-x-hidden pb-8 mb-16 sm:mb-[72px] md:mb-20 lg:mb-24 xl:mb-32 font-sans mt-8 sm:mt-12 xl:mt-16">
      <div className="container max-w-[1208px] mx-auto px-4">
        <h2 className="text-[28px] sm:text-[34px] xl:text-[40px] font-bold text-[var(--brand-deep)] text-center mb-10 xl:mb-14">
          What Sets Online Reclaims Apart
        </h2>

        <ul className="flex flex-col gap-6 md:grid md:grid-cols-2 md:w-[720px] md:gap-8 xl:w-[1000px] xl:gap-x-10 xl:gap-y-8 mx-auto list-none p-0">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="relative p-4 sm:py-6 sm:px-6 xl:p-8 flex flex-col bg-white shadow-[8px_16px_32px_rgba(3,14,49,0.08)]"
            >
              <div className="relative mb-2 flex items-center pl-10 sm:pl-12 min-h-[32px]">
                <span
                  className="absolute left-0 top-0 w-8 h-8 bg-no-repeat bg-center bg-cover"
                  style={{ backgroundImage: `url(${item.icon})` }}
                  aria-hidden="true"
                />
                <h4 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  {item.title}
                </h4>
              </div>
              <p className="text-[14px] sm:text-[15px] xl:text-[16px] text-[#616267] leading-[24px]">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatSetsApartSection;
