import React from 'react';
import Image from 'next/image';

interface StepCard {
  step: string;
  title: string;
  icon: string;
  description: string;
}

const steps: StepCard[] = [
  {
    step: '1',
    title: '1. Contact us',
    icon: '/icons/contactUs.svg',
    description: 'Start by sending us an email to contact with our Affiliate Manager',
  },
  {
    step: '2',
    title: '2. Get Your Unique Link',
    icon: '/icons/uniqueLink.svg',
    description: 'Receive your personalized affiliate link to share with your audience',
  },
  {
    step: '3',
    title: '3. Refer Clients',
    icon: '/icons/redirectClients.svg',
    description: "Promote Online Reclaims's scam investigation services to your audience",
  },
  {
    step: '4',
    title: '4. Earn Commissions',
    icon: '/icons/earnCommissions.svg',
    description: 'You earn a commission when someone purchases our services through your link',
  },
];

export const AffiliateHowItWorks: React.FC = () => {
  return (
    <section className="overflow-x-hidden pb-8 mb-16 min-[360px]:mb-[72px] md:mb-20 min-[1366px]:mb-32 font-sans">
      <div className="w-full max-w-[470px] md:max-w-[768px] min-[1366px]:max-w-[1208px] mx-auto px-4 md:px-6">
        <h2 className="text-[32px] leading-[40px] md:text-[40px] md:leading-[48px] min-[1366px]:text-[48px] min-[1366px]:leading-[56px] font-semibold text-[var(--brand-deep)] text-center max-w-[720px] mx-auto tracking-[0.1px]">
          Become a Online Reclaims Affiliate
        </h2>
        <div className="mt-5 max-w-[640px] text-center mx-auto text-[#a0a6ba] text-[18px] leading-[28px]">
          <p>Partner with Us to Help Scam Victims Reclaim Their Losses</p>
        </div>

        <ul className="mt-10 md:mt-14 flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 min-[1366px]:gap-10 md:w-[720px] min-[1366px]:w-[1000px] mx-auto list-none p-0">
          {steps.map((item, idx) => (
            <li
              key={idx}
              className="relative p-4 md:p-6 min-[1366px]:p-8 flex flex-col bg-white shadow-[8px_16px_32px_rgba(3,14,49,0.08)]"
            >
              <div className="relative mb-2 flex items-center pl-10 md:pl-12 min-[1366px]:pl-10 min-h-[32px]">
                <span className="absolute left-0 top-0 w-8 h-8 block">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </span>
                <h4 className="text-[var(--brand-primary)] text-[20px] leading-[28px] font-semibold m-0">
                  {item.title}
                </h4>
              </div>
              <div className="text-[#616267] text-[16px] leading-[24px]">
                <p className="m-0">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AffiliateHowItWorks;
