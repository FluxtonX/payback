import React from 'react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: 'Review your case',
      desc: 'Based on our experience, we are performing preliminary checks to assess whether your case can result in a substantial retrieval of losses.',
      icon: '/icons/file-find.svg',
      withBorder: false,
    },
    {
      title: 'Gather the evidence',
      desc: 'We then gather every piece of evidence you have from your contact with the scammers along the way.',
      icon: '/icons/file.svg',
      withBorder: false,
    },
    {
      title: 'Investigation Report',
      desc: 'We investigate your case and the people who scammed you to provide a detailed Investigation Report.',
      icon: '/icons/report.svg',
      withBorder: true,
    },
    {
      title: 'Action Plan',
      desc: "With our investigation Report, you'll receive a step-by-step action plan explaining how we believe you can retrieve your losses.",
      icon: '/icons/plan.svg',
      withBorder: true,
    },
    {
      title: 'Expert Assistance',
      desc: 'Our team of experts can guide you in the execution of the recommended action plan.',
      icon: '/icons/expert-assistance.svg',
      withBorder: false,
    },
    {
      title: 'Get your money back',
      desc: 'Once you successfully execute the suggested action plan, you could retrieve a substantial part, if not all, of your money.',
      icon: '/icons/money-back.svg',
      withBorder: false,
    },
  ];

  return (
    <section className="overflow-x-hidden pb-8 mb-16 sm:mb-[72px] md:mb-20 lg:mb-24 xl:mb-32 font-sans">
      <div className="container max-w-[1208px] mx-auto px-4">
        <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[var(--brand-deep)] text-center">
          How it works
        </h2>

        <ul className="mt-10 md:mt-14 flex flex-col gap-6 md:grid md:grid-cols-2 md:w-[720px] md:gap-8 xl:w-[1000px] xl:gap-x-10 xl:gap-y-8 mx-auto list-none p-0">
          {steps.map((step, idx) => (
            <li
              key={idx}
              className={`relative p-4 sm:py-6 sm:px-6 xl:p-8 flex flex-col bg-white shadow-[8px_16px_32px_rgba(3,14,49,0.08)] ${
                step.withBorder ? 'border border-[var(--brand-primary)]' : ''
              }`}
            >
              <div className="relative mb-2 flex items-center pl-10 min-h-[32px]">
                <span
                  className="absolute left-0 top-0 w-8 h-8 bg-no-repeat bg-center bg-cover"
                  style={{ backgroundImage: `url(${step.icon})` }}
                  aria-hidden="true"
                />
                <h4 className="text-[18px] sm:text-[20px] font-bold text-[var(--brand-deep)]">
                  {step.title}
                </h4>
              </div>
              <p className="text-[14px] sm:text-[15px] xl:text-[16px] text-[#616267] leading-[24px]">
                {step.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowItWorksSection;
