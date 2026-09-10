import React from 'react';

export const TonyRobbinsQuote: React.FC = () => {
  return (
    <div className="my-8 sm:my-12 xl:my-16 font-sans">
      <div className="container max-w-[1208px] mx-auto px-4">
        <div className="bg-white shadow-[8px_16px_32px_0_rgba(3,14,49,0.08)] py-6 px-4 sm:py-12 sm:px-16 xl:py-14 xl:px-0 max-w-[470px] sm:max-w-[642px] xl:max-w-[1000px] mx-auto flex flex-col justify-center items-center text-center">
          <h3 className="text-[20px] sm:text-[24px] xl:text-[28px] leading-[32px] font-bold text-[#112152] max-w-[584px] mx-auto m-0">
            “The path to success is to take massive, determined action.”
          </h3>
          <p className="mt-2 text-[16px] text-[#112152] font-normal">
            -Tony Robbins-
          </p>
        </div>
      </div>
    </div>
  );
};

export default TonyRobbinsQuote;
