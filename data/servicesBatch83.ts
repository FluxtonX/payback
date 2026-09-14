export interface ServiceBatch83Data {
  title: string;
  description: string;
  heroScamType: string;
  steps: {
    number: string;
    title: string;
    desc: string;
  }[];
  topIntro?: string;
  tocItems: { id: string; label: string }[];
  articles: {
    id: string;
    title: string;
    paragraphs?: string[];
    steps?: { title: string; desc: string }[];
  }[];
  stickyTitle: string;
  stickyContent: string;
}

export const servicesBatch83Data: Record<string, ServiceBatch83Data> = {
  "adr-course": {
    "title": "ADR Training & Dispute Resolution Course | PayBack",
    "description": "Master alternative dispute resolution skills, dispute letter drafting, rebuttal formulation, and mediation tactics with our comprehensive ADR course.",
    "heroScamType": "ADR Training",
    "steps": [
        {
            "number": "01",
            "title": "Master the Dispute Letter",
            "desc": "Learn to craft compelling dispute letters that get results. Learn the art of structuring arguments, citing relevant laws, and demanding attention"
        },
        {
            "number": "02",
            "title": "Craft a Persuasive Rebuttal",
            "desc": "Develop effective rebuttal strategies to counter opposing arguments and strengthen your claim."
        },
        {
            "number": "03",
            "title": "Prepare for Mediation/Arbitration",
            "desc": "Gain the knowledge and confidence to present your case effectively in mediation or arbitration settings."
        },
        {
            "number": "04",
            "title": "Conquer Complex Disputes",
            "desc": "Apply your newfound ADR skills to real-world scenarios, from high-stakes business negotiations to intricate family mediations."
        }
    ],
    "topIntro": "",
    "tocItems": [
        {
            "id": "sec-overview",
            "label": "Overview"
        },
        {
            "id": "sec-why-choose-our-adr-course",
            "label": "Why Choose Our ADR Course?"
        },
        {
            "id": "sec-your-adr-journey",
            "label": "Your ADR Journey"
        }
    ],
    "articles": [
        {
            "id": "sec-overview",
            "title": "Overview",
            "paragraphs": [
                "Our ADR course is a comprehensive program that delves deep into the theory and practice of ADR, equipping you with the skills and knowledge to confidently handle disputes and achieve favorable outcomes.",
                "You'll learn how to draft compelling correspondence, navigate complex negotiations, and master the art of persuasive communication in a variety of settings."
            ],
            "steps": []
        },
        {
            "id": "sec-why-choose-our-adr-course",
            "title": "Why Choose Our ADR Course?",
            "paragraphs": [
                "Our ADR course empowers you to become a confident and effective advocate, equipped to navigate even the most complex disputes.",
                "Here's what you will gain if you choose our ADR course:"
            ],
            "steps": []
        },
        {
            "id": "sec-your-adr-journey",
            "title": "Your ADR Journey",
            "paragraphs": [],
            "steps": [
                {
                    "title": "Step 1: Elevate Your ADR Foundation",
                    "desc": "We'll start by equipping you with the essential knowledge and skills to confidently handle disputes and achieve favorable outcomes. You'll gain a deeper understanding of the legal framework, ethical considerations, and strategic decision-making involved in ADR processes."
                },
                {
                    "title": "Step 2: Refine Essential Skills",
                    "desc": "Hone your communication and analytical skills, mastering techniques for drafting compelling dispute letters and persuasive rebuttal letters. You'll learn how to present your case effectively, cite relevant laws, and counter-argue opposing arguments with evidence and reasoning."
                },
                {
                    "title": "Step 3: Apply Knowledge in Various Scenarios",
                    "desc": "Gain practical experience by applying your knowledge to real-world scenarios and case studies. You'll learn how to analyze complex situations, identify optimal strategies, and formulate persuasive arguments in diverse settings, including family law, workplace disputes, and commercial conflicts."
                },
                {
                    "title": "Step 4: Expand Your ADR Toolkit",
                    "desc": "Develop the expertise to confidently handle mediation and arbitration. You'll learn techniques for managing emotions, negotiating effectively, and presenting your case persuasively in these settings. We'll also explore innovative approaches to conflict resolution, including transformative mediation and collaborative law."
                }
            ]
        }
    ],
    "stickyTitle": "Start your ADR journey today",
    "stickyContent": "Don't just resolve disputes - master them. Enroll in our ADR course today and gain the skills and confidence to achieve favorable outcomes in any setting."
},
};
