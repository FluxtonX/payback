import React from 'react';
import Image from 'next/image';

export const AffiliateWhyWork: React.FC = () => {
  return (
    <section className="pb-0 font-sans">
      <div className="w-full max-w-[470px] md:max-w-[768px] min-[1366px]:max-w-[1000px] mx-auto px-4 md:px-6 flex flex-col min-[1366px]:flex-row min-[1366px]:items-center min-[1366px]:justify-end min-[1366px]:gap-[120px] xl:gap-[236px]">
        {/* Desktop Left Icon (hands) */}
        <div className="hidden min-[1366px]:flex items-center justify-center flex-shrink-0">
          <div className="w-[192px] h-[192px] relative">
            <Image
              src="/icons/desktop/hands.svg"
              alt="Partnership"
              width={192}
              height={192}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Text and Mobile Icon */}
        <div className="flex flex-col items-center min-[1366px]:items-start w-auto">
          {/* Mobile Icon */}
          <div className="min-[1366px]:hidden mb-6">
            <div className="w-[104px] h-[104px] min-[360px]:w-[112px] min-[360px]:h-[112px] md:w-[120px] md:h-[120px] relative mx-auto">
              <Image
                src="/icons/desktop/hands.svg"
                alt="Partnership"
                width={120}
                height={120}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <p className="max-w-[470px] min-[1366px]:max-w-[480px] min-[1366px]:w-[480px] text-[#616267] text-[16px] leading-[24px] text-center min-[1366px]:text-left m-0">
            Partner with Online Reclaims and help fight scammers. Through our affiliate program, you can help scam victims reclaim their losses while earning commissions for your referrals
          </p>
        </div>
      </div>
    </section>
  );
};

export default AffiliateWhyWork;
