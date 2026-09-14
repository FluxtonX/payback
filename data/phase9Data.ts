export interface FraudPreventionTool {
  title: string;
  description: string;
  logo: string;
  reviewLink?: string;
  productLink: string;
}

export interface PluginFeature {
  title: string;
  description: string;
  image: string;
  reversed: boolean;
}

export interface ScamDetectorData {
  title: string;
  description: string;
  installLink: string;
  features: PluginFeature[];
}

export const fraudPreventionToolsData: FraudPreventionTool[] = [
  {
    "title": "Payback Scam Detector",
    "description": "Avoid falling for an online scam as you browse with the Payback Scam detector. This free Chrome extension provides you with real-time protection as you browse.",
    "logo": "/fraudPreventionsImages/paybackScamDetector.png",
    "reviewLink": "/fraud-prevention-review/payback-scam-detector/",
    "productLink": "https://chromewebstore.google.com/detail/payback-scam-detector/bhjajhbkcghfgakmgjfhnbfjhjniddmo?pli=1/"
  },
  {
    "title": "True Caller",
    "description": "Avoid falling victim to phone scams with Truecaller. Identify spam calls, filter out unwanted messages, and search for suspicious numbers before you answer.",
    "logo": "/fraudPreventionsImages/true-caller.png",
    "reviewLink": "/fraud-prevention-review/true-caller/",
    "productLink": "https://www.truecaller.com/"
  },
  {
    "title": "Express VPN",
    "description": "Reduce your risk of online scams with ExpressVPN. Mask your IP address, avoid phishing attacks, and browse with confidence knowing your data is protected.",
    "logo": "/fraudPreventionsImages/expressvpn.png",
    "reviewLink": "/fraud-prevention-review/expressVPN/",
    "productLink": "https://www.expressvpn.com/offer/coupon?xvcid=RxzyUGTDcxyKUIh0tG0fhXFyUksxpRxpiwjXzw0&amp;shareid=&amp;irclickid=RxzyUGTDcxyKUIh0tG0fhXFyUksxpRxpiwjXzw0&amp;irgwc=1"
  },
  {
    "title": "SEON",
    "description": "Unmask fraudsters and protect your business with SEON. This powerful platform uses AI and advanced data analysis to identify and prevent online fraud before it happens.",
    "logo": "/fraudPreventionsImages/seon.png",
    "reviewLink": "/fraud-prevention-review/seon/",
    "productLink": "https://seon.io/"
  },
  {
    "title": "Kount",
    "description": "Safeguard your business with Kount's AI-powered fraud prevention. Analyze transactions, prevent chargebacks, and protect your revenue in real time.",
    "logo": "/fraudPreventionsImages/kount.png",
    "reviewLink": "/fraud-prevention-review/kount/",
    "productLink": "https://kount.com/"
  },
  {
    "title": "Sift",
    "description": "Stay ahead of fraudsters with Sift's intelligent fraud defense. This powerful platform uses machine learning to protect your business from account takeovers, payment fraud, and more.",
    "logo": "/fraudPreventionsImages/sift.png",
    "reviewLink": "/fraud-prevention-review/sift/",
    "productLink": "https://sift.com/"
  },
  {
    "title": "WHOIS",
    "description": "Investigate websites before you interact. WHOIS shows domain registration details, helping you uncover hidden red flags and avoid online scams.",
    "logo": "/fraudPreventionsImages/whois.png",
    "reviewLink": "/fraud-prevention-review/whois/",
    "productLink": "https://who.is/"
  },
  {
    "title": "Domaintools",
    "description": "Go beyond basic WHOIS lookups with DomainTools. Uncover hidden threats, investigate suspicious websites, and protect your business with advanced domain analysis.",
    "logo": "/fraudPreventionsImages/domaintools.png",
    "reviewLink": "/fraud-prevention-review/domaintools/",
    "productLink": "http://domaintools.com/"
  },
  {
    "title": "Google Authenticator",
    "description": "Add an extra layer of security to your online accounts with Google Authenticator. Generate 2-Step Verification codes and protect yourself from unauthorized access.",
    "logo": "/fraudPreventionsImages/google-authenticator.png",
    "reviewLink": "/fraud-prevention-review/google-authenticator/",
    "productLink": "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&amp;hl=en"
  },
  {
    "title": "Spam titan",
    "description": "Keep your inbox safe from phishing attacks and spam. Spam Titan filters out malicious emails before they reach you, keeping your information safe.",
    "logo": "/fraudPreventionsImages/spam-titan.png",
    "reviewLink": "/fraud-prevention-review/spam-titan/",
    "productLink": "https://www.spamtitan.com/"
  },
  {
    "title": "Trust pilot",
    "description": "Make informed decisions about online businesses with Trustpilot. Check reviews and ratings from real customers to make sure you\u2019re not dealing with scams.",
    "logo": "/fraudPreventionsImages/trust-pilot.png",
    "reviewLink": "/fraud-prevention-review/trust-pilot/",
    "productLink": "https://www.trustpilot.com/"
  },
  {
    "title": "MxToolbox",
    "description": "Find out who the true senders behind suspicious emails with MxToolbox. This tool can help you trace the origin of emails and identify potential phishing attempts.",
    "logo": "/fraudPreventionsImages/mx-toolbox.png",
    "reviewLink": "/fraud-prevention-review/mx-toolbox/",
    "productLink": "https://mxtoolbox.com/"
  },
  {
    "title": "Labnol",
    "description": "Verify profile pictures and avoid romance scams with Labnol. Their reverse image search helps you check if a photo is stolen from another profile or a stock image.",
    "logo": "/fraudPreventionsImages/labnol.png",
    "reviewLink": "/fraud-prevention-review/labnol/",
    "productLink": "https://www.labnol.org/reverse/"
  },
  {
    "title": "Phishtank",
    "description": "Don't fall for phishing scams with Phishtank. This tool verifies suspicious URLs and identifies websites that are designed to steal your personal information.",
    "logo": "/fraudPreventionsImages/phishtank.png",
    "reviewLink": "/fraud-prevention-review/phishtank/",
    "productLink": "http://phishtank.org/"
  },
  {
    "title": "Broker Check",
    "description": "Research brokers and investment advisors with BrokerCheck. Check background information, licenses, and any violations to help you make informed decisions.",
    "logo": "/fraudPreventionsImages/broker-check.png",
    "reviewLink": "/fraud-prevention-review/broker-check/",
    "productLink": "https://brokercheck.finra.org/"
  },
  {
    "title": "Etherscan",
    "description": "Verify blockchain transactions and protect yourself from cryptocurrency scams with Etherscan. Check the legitimacy of wallet addresses and track transaction details.",
    "logo": "/fraudPreventionsImages/etherscan.png",
    "reviewLink": "/fraud-prevention-review/etherscan/",
    "productLink": "https://etherscan.io/"
  }
];

export const scamDetectorData: ScamDetectorData = {
  "title": "Avoid online scams with the PayBack Scam Detector",
  "description": "This Scam Detector Chrome plugin warns you about scams as you browse. Developed by Payback, this extension uses the information from our database of over 20,000 known fraudulent companies. To learn more about us and our initiatives, visit our official website",
  "installLink": "https://chromewebstore.google.com/detail/payback-scam-detector/bhjajhbkcghfgakmgjfhnbfjhjniddmo",
  "features": [
    {
      "title": "Your trusted partner for safe browsing",
      "description": "The Payback Scam Detector checks websites in real-time and warns you about potential scams. It's easy to use and gives you immediate feedback. Browse the web with confidence knowing that Payback has your back",
      "image": "/plugin/pluginState1.png",
      "reversed": false
    },
    {
      "title": "How it works",
      "description": "The Payback Scam Detector constantly checks websites against a blacklist of over 20,000 known scams, giving you instant warnings if you land on a suspicious page. It's easy to use, and you can even report suspicious sites to help protect others. Plus, the extension doesn't collect cookies or any personal information",
      "image": "/plugin/pluginState2.png",
      "reversed": false
    },
    {
      "title": "Getting started",
      "description": "Add the Payback Scam Detector to your browser, and it automatically starts working in the background. You'll get instant warnings about suspicious websites, and you can even report new scams you encounter. As you do so, your privacy is protected because the extension doesn't collect your personal data",
      "image": "/plugin/pluginState3.png",
      "reversed": false
    }
  ]
};
