export interface B2BCard {
  title: string;
  desc: string;
}

export interface B2BCardSection {
  sectionTitle: string;
  cards: B2BCard[];
}

export interface B2BServiceData {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  cardSections: B2BCardSection[];
}

export const servicesBatch84Data: Record<string, B2BServiceData> = {
  "blue-team": {
    "title": "Blue Team - Payback",
    "description": "Stop Threats Before They Impact Your Business With Proactive Defense and Rapid Response",
    "heroTitle": "Blue Team",
    "heroSubtitle": "Stop Threats Before They Impact Your Business With Proactive Defense and Rapid Response",
    "overviewTitle": "Service overview",
    "overviewParagraphs": [
        "Service overviewAdvanced Persistent Threats (APTs) pose a serious risk to businesses, and most organizations aren't equipped to handle them alone. Our Blue Team is your dedicated defense, providing expert assessment, preparation, and response to protect your critical assets."
    ],
    "cardSections": [
        {
            "sectionTitle": "Why a Blue Team is Essential",
            "cards": [
                {
                    "title": "Save time and money",
                    "desc": "A skilled Blue Team focuses on the most relevant threats, streamlining your response and minimizing downtime"
                },
                {
                    "title": "Proactive prevention",
                    "desc": "We go beyond simply closing breaches\u2014we work to prevent future attacks, ensuring your business stays secure"
                },
                {
                    "title": "Comprehensive expertise",
                    "desc": "Our team combines incident response, malware analysis, and SOC analysis for a multi-layered approach to security"
                }
            ]
        },
        {
            "sectionTitle": "Our Blue Team Services",
            "cards": [
                {
                    "title": "Preparation & evaluation",
                    "desc": "We'll help you understand your threat landscape, identify vulnerabilities, and assess potential risks"
                },
                {
                    "title": "Containment",
                    "desc": "If a breach occurs, we'll quickly contain the threat, limiting its impact and preventing further damage"
                },
                {
                    "title": "Eradication & recovery",
                    "desc": "We'll eliminate the threat from your systems, restore normal operations, and implement measures to prevent similar attacks in the future"
                }
            ]
        }
    ]
},
  "red-team": {
    "title": "Red Team - Payback",
    "description": "Expose Vulnerabilities and Strengthen Defenses by Seeing Your Business From The Eyes of Attackers",
    "heroTitle": "Red Team",
    "heroSubtitle": "Expose Vulnerabilities and Strengthen Defenses by Seeing Your Business From The Eyes of Attackers",
    "overviewTitle": "Service overview",
    "overviewParagraphs": [
        "Service overviewGain a true understanding of your security posture by seeing your business through the eyes of an attacker. Our Red Team simulates real-world attacks, identifying weaknesses in your products, network, and employees that traditional penetration tests may missose vulnerabilities in your organization's defenses."
    ],
    "cardSections": [
        {
            "sectionTitle": "Why Choose Our Red Team Services",
            "cards": [
                {
                    "title": "Experience Matters",
                    "desc": "Our team has extensive experience dealing with sophisticated, real-world breach attempts"
                },
                {
                    "title": "Comprehensive Assessment",
                    "desc": "We test your defenses against a full Advanced Persistent Threat (APT)"
                },
                {
                    "title": "Actionable Insights",
                    "desc": ""
                },
                {
                    "title": "Skill Enhancement",
                    "desc": "Your security team will gain valuable practical experience, improving their ability to detect and respond to threats"
                },
                {
                    "title": "Proactive Defense",
                    "desc": ""
                }
            ]
        }
    ]
},
  "security-consulting": {
    "title": "Security Consulting - Payback",
    "description": "Get Expert Guidance and Proactive Protection From Experienced Professionals",
    "heroTitle": "Security Consulting",
    "heroSubtitle": "Get Expert Guidance and Proactive Protection From Experienced Professionals",
    "overviewTitle": "Service overview",
    "overviewParagraphs": [
        "Service overviewOur team of industry-leading consultants brings decades of hands-on experience to safeguard your business against evolving threats. We provide tailored solutions that address your specific needs and challenges, ensuring you achieve the highest level of security without unnecessary complexity or cost."
    ],
    "cardSections": [
        {
            "sectionTitle": "Why Choose Our Security Consulting Services",
            "cards": [
                {
                    "title": "Deep expertise",
                    "desc": "Our consultants are leaders in their fields, offering a broad perspective and in-depth knowledge of cybersecurity best practices"
                },
                {
                    "title": "Customized solutions",
                    "desc": "We go beyond generic advice, tailoring our recommendations to your unique environment and objectives"
                },
                {
                    "title": "Proactive approach",
                    "desc": "We identify and address potential risks before they become breaches, ensuring your business remains secure"
                },
                {
                    "title": "Comprehensive services",
                    "desc": "From compliance assistance to code review, secure design, and business continuity planning, we offer a full range of security consulting services"
                },
                {
                    "title": "Beyond consulting",
                    "desc": "We complement our consulting expertise with a suite of cyber-related services, including social engineering assessments, R&D, and more"
                }
            ]
        }
    ]
},
  "soc-consulting": {
    "title": "SOC Consulting - Payback",
    "description": "Let Us Help You Build and Optimize Your Security Operations Center",
    "heroTitle": "SOC Consulting",
    "heroSubtitle": "Let Us Help You Build and Optimize Your Security Operations Center",
    "overviewTitle": "Service overview",
    "overviewParagraphs": [
        "Service overviewEstablishing and maintaining an effective Security Operations Center (SOC) requires expertise and meticulous planning. Our team of SOC consultants brings years of hands-on experience to help you build, optimize, and enhance your SOC capabilities"
    ],
    "cardSections": [
        {
            "sectionTitle": "Why Choose Our SOC Consulting Services",
            "cards": [
                {
                    "title": "Expert guidance",
                    "desc": "We'll guide you through every step of the SOC process, from initial design and implementation to ongoing management and improvement"
                },
                {
                    "title": "Customized solutions",
                    "desc": "We tailor our recommendations to your unique business needs, ensuring your SOC aligns with your specific goals and risk profile"
                },
                {
                    "title": "Skill enhancement",
                    "desc": "We'll empower your team with the knowledge and skills necessary to operate a highly effective SOC"
                },
                {
                    "title": "Proactive defense",
                    "desc": "We'll help you establish a proactive security posture, enabling rapid detection and response to threats"
                },
                {
                    "title": "Compliance expertise",
                    "desc": "We have extensive experience helping businesses meet regulatory requirements, including SOC2, ISO, GDPR, HIPAA, PCI, and more"
                }
            ]
        }
    ]
},
  "cyber-intelligence": {
    "title": "Cyber Intelligence - Payback",
    "description": "Empower Your Security Team and Stay Ahead of Threats",
    "heroTitle": "Cyber Intelligence",
    "heroSubtitle": "Empower Your Security Team and Stay Ahead of Threats",
    "overviewTitle": "Service overview",
    "overviewParagraphs": [
        "Service overviewAs Abraham Lincoln wisely said, \"Give me six hours to chop down a tree and I will spend the first four sharpening the axe.\" In the realm of cybersecurity, that axe is cyber intelligence - the proactive process of identifying, analyzing, and responding to digital threats",
        "Our cyber intelligence professionals equip your team with the knowledge, tools, and capabilities to stay one step ahead of attackers. By proactively identifying and mitigating risks, we help you avoid real-world threats and protect your most valuable assets"
    ],
    "cardSections": [
        {
            "sectionTitle": "Why Cyber Intelligence Matters",
            "cards": [
                {
                    "title": "The rise of cyber threats",
                    "desc": "With cyberattacks growing in sophistication and frequency, threat intelligence has become essential for businesses of all sizes"
                },
                {
                    "title": "Actionable insights",
                    "desc": "Our team actively monitors the dark web, hacker forums, and other sources to provide you with timely, relevant information about emerging threats, leaked data, and attack trends"
                },
                {
                    "title": "Proactive prevention",
                    "desc": "Armed with this intelligence, you can take proactive measures to prevent attacks, mitigate damage, and safeguard your organization"
                }
            ]
        },
        {
            "sectionTitle": "Our Cyber Intelligence Services",
            "cards": [
                {
                    "title": "Early threat notification",
                    "desc": "We provide alerts about leaked credentials, targeted attacks, and other critical threats, enabling you to respond quickly and effectively"
                },
                {
                    "title": "Enhanced security posture",
                    "desc": "Our threat intelligence empowers your team to make informed decisions, strengthen defenses, and improve incident response capabilities"
                }
            ]
        }
    ]
},
  "social-engineering": {
    "title": "Social Engineering - Payback",
    "description": "Test Your Defenses Against Social Engineering and Expose Vulnerabilities",
    "heroTitle": "Social Engineering",
    "heroSubtitle": "Test Your Defenses Against Social Engineering and Expose Vulnerabilities",
    "overviewTitle": "Service overview",
    "overviewParagraphs": [
        "Service overviewSocial engineering remains one of the most effective tactics in a cybercriminal's arsenal, accounting for over 75% of successful attacks. These attacks exploit human trust, often masquerading as legitimate entities to extract sensitive information or manipulate employees into compromising actions.",
        "Our team of experienced ethical hackers will conduct a multi-layered social engineering campaign to expose vulnerabilities in your organization's defenses."
    ],
    "cardSections": [
        {
            "sectionTitle": "Why Choose Our Social Engineering Services:",
            "cards": [
                {
                    "title": "Real-world simulations",
                    "desc": "We'll test your employees' responses to realistic social engineering scenarios across various platforms, including email, phone, SMS, and social media"
                },
                {
                    "title": "Hands-on learning",
                    "desc": "Your team will gain valuable experience identifying and responding to social engineering tactics"
                },
                {
                    "title": "Improved cybersecurity awareness",
                    "desc": "We'll help you develop and implement policies and procedures to enhance your organization's resilience against social engineering attacks"
                },
                {
                    "title": "Proactive risk mitigation",
                    "desc": "By identifying and addressing weaknesses, you'll reduce the likelihood of falling victim to these attacks"
                }
            ]
        }
    ]
},
};
