import React from 'react';

export const CeoStatement: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 xl:py-16 font-sans">
      <div className="container max-w-[1000px] mx-auto px-4">
        <div className="bg-white shadow-[8px_16px_32px_0_rgba(3,14,49,0.08)] py-8 px-6 sm:py-12 sm:px-16 xl:py-12 xl:px-24 flex flex-col items-center text-center">
          <h2 className="text-[28px] sm:text-[32px] xl:text-[40px] font-bold text-[var(--brand-deep)] mb-6 xl:mb-8 leading-tight">
            Our CEO
          </h2>
          <div className="text-[15px] sm:text-[16px] text-[#616267] leading-[24px] max-w-[584px] mx-auto">
            Amir Geva co-founded Payback in 2017, bringing over a decade of expertise in the field to the forefront of our mission. As a dynamic leader, he spearheads our dedicated team in the global battle against fraud and scams, driving innovation and implementing effective strategies to protect individuals from financial harm.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoStatement;
