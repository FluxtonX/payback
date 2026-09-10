import React from 'react';

export const AboutTeamSection: React.FC = () => {
  const departments = [
    {
      title: 'Marketing team',
      desc: 'Committed to raising awareness about scams by providing the public with educational materials on staying safe online and ensuring that those needing our assistance can easily find us.',
    },
    {
      title: 'Case Assessment Managers',
      desc: 'Your guides in understanding your options and choosing the services best fit your unique situation.',
    },
    {
      title: 'Service team',
      desc: "Your first line of support, offering a friendly ear and expert guidance every step of the way. They'll ensure you feel heard, understood, and equipped with the necessary tools to take action.",
    },
    {
      title: 'Investigation team',
      desc: 'Investigating scammers and frauds and navigating the complexities of each case. Comprising licensed fraud examiners, digital forensics experts, and legal specialists, they provide invaluable support, information, and expertise to help you achieve the best possible outcome.',
    },
    {
      title: 'Cyber team',
      desc: 'Collaborating with the investigation team and providing cutting-edge technology in our investigative processes. Monitors emerging threats and trends, allowing us to stay ahead of cybercriminals and ensuring that our operations are equipped with the best tools.',
    },
  ];

  return (
    <section className="py-8 sm:py-12 xl:py-16 font-sans">
      <div className="container max-w-[1208px] mx-auto px-4">
        <div className="max-w-[594px] mx-auto">
          <h2 className="text-[28px] sm:text-[34px] xl:text-[40px] font-bold text-[#030e31] text-center mb-4 leading-tight">
            About Our Team
          </h2>

          <p className="text-[15px] sm:text-[16px] leading-[24px] text-[#616267] text-center mb-8">
            At Payback, we recognize that navigating the complexities of assisting scam victims requires a dedicated team of experts who work seamlessly together. Although we cannot disclose the identity of team members for security reasons, we can tell you about the goals of each department:
          </p>

          <div className="mt-8 space-y-6">
            {departments.map((dept, idx) => (
              <div key={idx}>
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#030e31] mb-2">
                  {dept.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[24px] text-[#616267]">
                  {dept.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
