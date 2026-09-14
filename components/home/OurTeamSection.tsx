'use client';

import React from 'react';
import Image from 'next/image';
import { teamMembers } from '@/data/team';

export const OurTeamSection: React.FC = () => {
  return (
    <section id="our-team" className="py-12 lg:py-20 bg-[#fafafa] font-sans scroll-mt-24">
      <div className="container max-w-[1208px] mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-[28px] sm:text-[34px] xl:text-[40px] font-bold text-[var(--brand-deep)] mb-3 leading-tight">
            Our Team
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-[24px] text-[#616267] max-w-[680px] mx-auto">
            Meet the experienced investigators, certified fraud examiners, cyber forensics analysts, and case managers dedicated to recovering your assets.
          </p>
        </div>

        {/* 6-Card Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-[#a0a6ba]/30 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Photo or Initials Avatar Placeholder */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden mb-5 border-2 border-[var(--brand-primary)]/20 shadow-inner flex items-center justify-center bg-gradient-to-br from-[#1b3d2f] to-[#0f241c] text-white">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold tracking-wider">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                )}
              </div>

              {/* Name & Role */}
              <h3 className="text-[20px] font-bold text-[var(--brand-deep)] mb-1">
                {member.name}
              </h3>
              <p className="text-[15px] font-semibold text-[var(--brand-primary)] mb-2">
                {member.role}
              </p>

              {/* Department Badge */}
              <span className="inline-block px-3 py-1 rounded-full text-[12px] font-medium bg-[#eef7ee] text-[#1b3d2f] mb-3">
                {member.department}
              </span>

              {/* Bio */}
              <p className="text-[14px] leading-[22px] text-[#616267] mt-auto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
