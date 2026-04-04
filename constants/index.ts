import Moneyprotection from "@/sections/moneyprotection";
import MoneySection from "@/sections/moneysection";


export const HeroLogos: { imgPath: string }[] = [
    {
        imgPath: "/assets/images/hero/section-invest-hero-amazon.png"
    },
    {
        imgPath: "/assets/images/hero/section-invest-hero-apple.png"
    },
    {
        imgPath: "/assets/images/hero/section-invest-hero-google (1).png"
    },
    {
        imgPath: "/assets/images/hero/section-invest-hero-mcdonalds.png"
    },
    {
        imgPath: "/assets/images/hero/section-invest-hero-meta.png"
    },
    {
        imgPath: "/assets/images/hero/section-invest-hero-microsoft.png"
    },
    {
        imgPath: "/assets/images/hero/section-invest-hero-netflix (2).png"
    },
    {
        imgPath: "/assets/images/hero/section-invest-hero-snapchat.png"
    },
    {
        imgPath: "/assets/images/hero/section-invest-hero-tesla.png"
    },
    {
        imgPath: "/assets/images/hero/section-invest-hero-vanguard.png"
    }
];

interface trustSectionProps {
    name: string;
    imagePath: string;
    content: string;
}

export const trustSection: trustSectionProps[] = [
    {
        name: "Cysec",
        imagePath: "/assets/images/trust-section/CySEC.svg",
        content: "Cyprus Securities and Exchange Commission ",
    },
    {
        name: "EFSA",
        imagePath: "/assets/images/trust-section/EFSA.svg",
        content: "Estonian Financial Supervision Authority",
    },
    {
        name: "CFTC",
        imagePath: "/assets/images/trust-section/CFTC.svg",
        content: "Commodity Futures Trading Commission",
    },
    {
        name: "ASIC",
        imagePath: "/assets/images/trust-section/ASIC.svg",
        content: "Australian Securuties and Investment Commission",
    },
    {
        name: "FMA",
        imagePath: "/assets/images/trust-section/FMA.svg",
        content: "Financial Markets Authority ",
    },
    {
        name: "FSCA",
        imagePath: "/assets/images/trust-section/FSCA.svg",
        content: "Financial Sector Conduct Authority ",
    },
    {
        name: "SCA",
        imagePath: "/assets/images/trust-section/SCA.svg",
        content: "Securities and Commodities Authority",
    },
    {
        name: "DFSA",
        imagePath: "/assets/images/trust-section/SCA.svg",
        content: "Dubai Financial Services Authority",
    },
    {
        name: "DFSA",
        imagePath: "/assets/images/trust-section/DFSA.svg",
        content: "Dubai Financial Services Authority",
    },
    {
        name: "JFSA",
        imagePath: "/assets/images/trust-section/DFSA.svg",
        content: "Japan Financial Services Agency",
    },
    {
        name: "JFSA",
        imagePath: "/assets/images/trust-section/JFSA.svg",
        content: "Japan Financial Services Agency",
    },
    {
        name: "MAS",
        imagePath: "/assets/images/trust-section/MAS.svg",
        content: "Monetary Authority of Singapore ",
    },
    {
        name: "FSA",
        imagePath: "/assets/images/trust-section/FSA.svg",
        content: "Seychelles Financial Services Authority",
    },

    {
        name: "SCB",
        imagePath: "/assets/images/trust-section/SCB.svg",
        content: "Securities Commission of the Bahamas",
    },
    {
        name: "Bappebti",
        imagePath: "/assets/images/trust-section/SCB.svg",
        content: "Commodity Futures Trading Regulatory Agency",
    },

    {
        name: "CIRO",
        imagePath: "/assets/images/trust-section/BAPPEBTI.svg",
        content: "Canadian Investment Regulatory Organization",
    },

];

interface industryAwardProps {
    name: string;
    year: number,
    title: string;
};

export const topIndustryAwards: industryAwardProps[] = [
    {
        name: "FXEmpire",
        year: 2025,
        title: "Best Mobile Trading App",
    },
    {
        name: "ForexBrokers",
        year: 2025,
        title: "Best in Class Trust Score",
    },
    {
        name: "SingSaver",
        year: 2025,
        title: "Best CFD Provider in Singapore",
    },
    {
        name: "ForexBrokers",
        year: 2025,
        title: "Best in Class Ease of Use",
    },
    {
        name: "ForexBrokers",
        year: 2024,
        title: "Best in Class Trust Score",
    },
    {
        name: "ADVFN",
        year: 2023,
        title: "Best Provider Global Trading",
    },

];

interface TestimonialsProps {
    title: string;
    content: string;
    author: string;
    date: string;
}
export const testimonials: TestimonialsProps[] = [
    {
        title: "This is the best Platform I have worked with",
        content: "This is the Best platform I have worked on",
        author: "Al Yakhtan Maki",
        date: "an hour ago"
    },
    {
        title: "Easy trading and fast transfers",
        content: "Easing trading and fast transfer and very reliable and accurate AI market predictions",
        author: "Emran Hamid",
        date: "an hour ago"
    },
    {
        title: "I like the way it works",
        content: "The auto trade platform with bridgeAI makes it so efficient and trustworthy, I didn't believe until I joined the platform",
        author: "Emran Hamid",
        date: "two hours ago"
    },
    {
        title: "Simple to use",
        content: "One of the easier platforms to use, user friendly. Will recommend to friends and family for quality and accurate trading with credibility",
        author: "Larisa Zagrebina",
        date: "yesterday"
    },
    {
        title: "Nice Platform",
        content: "I have got richer with using NorthBridge Auto Trade Investment capitals. My deposit keeps growing and withdrawal is fast and easy, I recommend for family and friends",
        author: "Earl B.",
        date: "yesterday"
    },
    {
        title: "Nice Platform",
        content: "I have got richer with using NorthBridge Auto Trade Investment capitals. My deposit keeps growing and withdrawal is fast and easy, I recommend for family and friends",
        author: "Abhi D.",
        date: "2 days ago"
    },
    {
        title: "Great Proper Trading",
        content: "With NorthBridge capitals, you don't have to be a trade expert. All you need to do is switch to auto trade mode, deposit funds and see the magic—stack your wealth",
        author: "Rajesh C.",
        date: "2 days ago"
    },
    {
        title: "Reliable and safe",
        content: "The platform is very reliable, withdrawals are fast, and the AI trading predictions are surprisingly accurate.",
        author: "Sonia Patel",
        date: "3 days ago"
    },
    {
        title: "User friendly interface",
        content: "I love how simple and intuitive the dashboard is. Trading feels effortless and clear for a beginner like me.",
        author: "Mark Johnson",
        date: "4 days ago"
    },
    {
        title: "Consistent profits",
        content: "NorthBridge Auto Trade consistently delivers profits. I am very happy with my investment growth so far.",
        author: "Ayesha Khan",
        date: "4 days ago"
    },
    {
        title: "Highly recommended",
        content: "This platform changed the way I trade. It's trustworthy, accurate, and easy to use for both beginners and pros.",
        author: "Liam O'Connor",
        date: "4 days ago"
    }
];

export const testimonials2: TestimonialsProps[] = [
    {
        title: "Seamless trading experience",
        content: "I was amazed at how smooth the platform is. Everything from deposits to auto-trading works flawlessly.",
        author: "Daniel Kim",
        date: "1 hour ago"
    },
    {
        title: "Fast withdrawals",
        content: "Withdrawals happen almost instantly. I never had to wait long, which gives me peace of mind.",
        author: "Maria Lopez",
        date: "2 hours ago"
    },
    {
        title: "AI predictions are accurate",
        content: "The AI trading predictions are surprisingly accurate. My portfolio has grown steadily over weeks.",
        author: "Omar Rahman",
        date: "3 hours ago"
    },
    {
        title: "Beginner friendly",
        content: "Even as a complete beginner, I was able to set up and start auto trading without confusion.",
        author: "Sofia Nguyen",
        date: "4 hours ago"
    },
    {
        title: "Reliable platform",
        content: "I trust this platform with my investments. No downtime and very consistent performance.",
        author: "John Carter",
        date: "Yesterday"
    },
    {
        title: "Great customer support",
        content: "Whenever I had a question, support responded quickly and solved my issues professionally.",
        author: "Leila Hassan",
        date: "Yesterday"
    },
    {
        title: "Smart auto trading",
        content: "The auto trading feature is amazing. I just set my strategy and let the AI handle the rest.",
        author: "Ethan Brown",
        date: "2 days ago"
    },
    {
        title: "Growing my savings",
        content: "I’ve seen my savings grow steadily. Very happy with the platform’s reliability and AI strategies.",
        author: "Priya Sharma",
        date: "2 days ago"
    },
    {
        title: "Simple and efficient",
        content: "No complicated dashboards or settings. Everything is intuitive and easy to use.",
        author: "Alexei Ivanov",
        date: "3 days ago"
    },
    {
        title: "Consistent profits",
        content: "The auto trading consistently earns profits. I can monitor progress without stress.",
        author: "Fatou Bamba",
        date: "3 days ago"
    },
    {
        title: "Highly recommended",
        content: "I recommend this platform to all my friends. Reliable, accurate, and beginner-friendly.",
        author: "Hiro Tanaka",
        date: "4 days ago"
    }
];

interface MoneySectionProps {
    imgPath: string;
    title: string;
    content?: string[]
}

export const MoneySectionPropery: MoneySectionProps[] = [
    {
        imgPath: "/assets/images/money-section/icon-money-currencies.svg",
        title: "Straightforward and competitive charges",
        content: [
            "0% opening / closing trades fees",
            "0% deposit and withdrawal fees",
        ]

    },
    {
        imgPath: "/assets/images/money-section/icon-money-time.svg",
        title: "Fast withdrawals processing",

    },
    {
        imgPath: "/assets/images/money-section/icon-money-cards.svg",
        title: "Multiple global payment methods",

    }

];

export const paymentMethods: string[] = [
    "/assets/images/visa.svg",
    "/assets/images/mastercard.svg",
    "/assets/images/wire.svg"
]

interface traderstepsProp {
    imgPath: string;
    title: string;
    content: string;
};

export const beginnerTraderSteps: traderstepsProp[] = [
    {
        imgPath: "/assets/images/Trading/icon-registration.svg",
        title: "Get started in 3 steps",
        content: "Register your details, verify, and fund your account."
    },
    {
        imgPath: "/assets/images/Trading/icon-demo-trading.svg",
        title: "Risk-free demo trading",
        content: "Practise with unlimited virtual funds and live market data"
    },
    {
        imgPath: "/assets/images/Trading/icon-trading-academy.svg",
        title: "Trading Academy",
        content: "Learn the basics of trading or deepen your knowledge with NorthBridge Investment capitals"
    },

];

export const experiencedTraderSteps: traderstepsProp[] = [
    {
        imgPath: "/assets/images/Trading/icon-alerts.svg",
        title: "Indicators & Alerts",
        content: "With over 100 technical indicators and flexible alerts you’ll never miss a market opportunity."
    },
    {
        imgPath: "/assets/images/Trading/icon-premium-service.svg",
        title: "Premium Service",
        content: "Enjoy exclusive services like periodic technical analysis, a dedicated Client Manager, Premium Customer Support, and more."
    },
    {
        imgPath: "/assets/images/Trading/icon-demo.svg",
        title: "Accuracy Trading with BridgeAI",
        content: "Develop your trading skills and test new strategies with free live qoutes and adjustable balance."
    }
];

export const FlagPath: string[] = [
    "/assets/images/flags/flag-gb.png",
    "/assets/images/flags/flag-es.png",
    "/assets/images/flags/flag-de.png",
    "/assets/images/flags/flag-it.png",
];

interface moneyProtectionProps {
    imgPath: string;
    title: string;
    content: string;
}
export const moneyProtectionRules: moneyProtectionProps[] = [
    {
        imgPath: "/assets/images/money-section/section-security.png",
        title: "FSCS government protection up to £120,000",
        content: "Your funds are safekept in a segregated account and are protected by the Financial Services Compensation Scheme up to £120,000. Personal circumstances and type of service, may change the way the FSCS protection applies."
    },
    {
        imgPath: "/assets/images/money-section/section-security-safeguard.30053c08.png",
        title: "Your cash is safeguarded and belongs only to you",
        content: "Your cash is held at some of the world’s largest banks. It is ring-fenced and there are legally binding agreements that your cash belongs only to you. Even if we go bankrupt, your cash is safe, and can’t be used by us or anyone else. Learn more about the many things we do to safekeep your cash"
    },
    {
        imgPath: "/assets/images/money-section/section-security-investments.e91f9a2a.png",
        title: "Your investments are safeguarded and belong only to you",
        content: "Your shares are held at Interactive Brokers, one of the largest brokers in the world. Your shares are ring-fenced and completely segregated from our own assets. Even if we go bankrupt, your investments are safe, and can’t be used by us or anyone else. Learn more about the many things we do to safekeep your cash"
    },
];

interface stockMarketProps {
    imgPath: string;
    name: string;

}
export const stocksMarket: stockMarketProps[] = [
    {
        imgPath: "/assets/images/flags/section-exchanges-uk.svg",
        name: "London Stock Exchange"
    },
    {
        imgPath: "/assets/images/flags/section-exchanges-at.svg",
        name: "Wiener Börse",
    },
    {
        imgPath: "/assets/images/flags/section-exchanges-de.svg",
        name: "Xetra Gettex",
    },
    {
        imgPath: "/assets/images/flags/section-exchanges-es.svg",
        name: "Bolsa de Madrid",
    },
    {
        imgPath: "/assets/images/flags/section-exchanges-nl.svg",
        name: "Euronext Amsterdam",
    },
    {
        imgPath: "/assets/images/flags/section-exchanges-pt.svg",
        name: "Euronext Lisbon",
    },
    {
        imgPath: "/assets/images/flags/section-exchanges-us.svg",
        name: "NYSE & NASDAQ",
    },
    {
        imgPath: "/assets/images/flags/section-exchanges-fr.svg",
        name: "Euronext Paris",
    }
];

export const SocialMediaIcons: { imgPath: string; href: string }[] = [
    {
        imgPath: "/assets/images/Social Network/social-network-facebook-icon.svg",
        href: "https://www.facebook.com/NorthBridgeCapitalInvestment",
    },
    {
        imgPath: "/assets/images/Social Network/social-network-instagram-icon.svg",
        href: "https://www.instagram.com/northbridgecapitalinvestment/",
    },
    {
        imgPath: "/assets/images/Social Network/social-network-linkedin-icon.svg",
        href: "https://www.linkedin.com/company/northbridge-capital-investment/",
    },
    {
        imgPath: "/assets/images/Social Network/social-network-telegram-icon.svg",
        href: "https://t.me/NorthBridgeCapitalInvestment",
    },
    {
        imgPath: "/assets/images/Social Network/social-network-twitter-icon.svg",
        href: "https://twitter.com/NorthBridgeCap",
    },
    {
        imgPath: "/assets/images/Social Network/social-network-youtube-icon.svg",
        href: "https://www.youtube.com/@NorthBridgeCapitalInvestment",
    }
];

export const paymentMethodsIcons: string[] = [
    "/assets/images/payment Network/crypto_Badge-3.svg",
    "/assets/images/payment Network/googlepay.avif",
    "/assets/images/payment Network/mastercard.avif",
    "/assets/images/payment Network/visa card.avif",
    "/assets/images/payment Network/applecard.avif",

];

export const footerLinks: { name: string; href: string }[] = [
    {
        name: "Legal documents",
        href: "/documents/legal-documents"
    },
    {
        name: "Best Execution",
        href: "/documents/legal-documents"
    },
    {
        name: "Cookies",
        href: "/documents/cookies-policy"
    },
    {
        name: "Client Vulnerability",
        href: "/documents/vulnerability-policy"
    },
    {
        name: "Fraud Prevention",
        href: "/documents/fraud-prevention"
    },


];

// payment Transaction proofs 
interface paymentTransactionProps {
    clientNamewithFlag: string;
    amount: string;
    certificatePath: string;

};

export const paymentTestimonials: paymentTransactionProps[] = [
    //first line data to move 

    {
        clientNamewithFlag: "Finn Troja 🇩🇪",
        amount: "Just got paid $7,531.42",
        certificatePath: "/assets/images/client Certificate/6911f7be9b75abfccb722e1a_Finn Troja-p-500.jpg"
    },
    {
        clientNamewithFlag: "Mehedi Rahman 🇧🇩",
        amount: "Just got paid $13,720.20",
        certificatePath: "/assets/images/client Certificate/6911f7bdb8e6dde12ab81931_Mehedi-p-500.jpg"
    },
    {
        clientNamewithFlag: "Dev Patel 🇮🇳",
        amount: "Just got paid $3,819.60",
        certificatePath: "/assets/images/client Certificate/6911f7bd8bc697eab363ef4c_Dev-p-500.jpg"
    },
    {
        clientNamewithFlag: "Ling Stanic J 🇸🇬",
        amount: "Just got paid $8,953.59",
        certificatePath: "/assets/images/client Certificate/6911f7bd221d529c586b902a_Ling Stanic J-p-500.jpg"
    },
    {
        clientNamewithFlag: "Lukas Staab 🇩🇪",
        amount: "Just got paid $1,653.80",
        certificatePath: "/assets/images/client Certificate/6911f7bebbff55bab608f44b_Lukas Staab-p-500.jpg"
    },

    // data on the second line to move

    {
        clientNamewithFlag: "Amelia Novak 🇨🇿",
        amount: "Just got paid $6,482.77",
        certificatePath: "/assets/images/client Certificate/6911f7bd7640d61e8b7fc63b_Amelia Novak-p-500.jpg"
    },
    {
        clientNamewithFlag: "Jason Holloway 🇺🇸",
        amount: "Just got paid $9,104.33",
        certificatePath: "/assets/images/client Certificate/6911f7bd6ffab34a222bf919_Jason-p-500.jpg"
    },
    {
        clientNamewithFlag: "Sienna Duarte 🇵🇹",
        amount: "Just got paid $2,746.15",
        certificatePath: "/assets/images/client Certificate/6911f7bd6ffab34a222bf919_Jason-p-500.jpg"
    },
    {
        clientNamewithFlag: "Arjun Malhotra 🇮🇳",
        amount: "Just got paid $5,328.66",
        certificatePath: "/assets/images/client Certificate/6911f7bd13201d1c5cab8748_Arjun-p-500 (1).jpg"
    },
    {
        clientNamewithFlag: "Kai Fernandez 🇪🇸",
        amount: "Just got paid $39,264",
        certificatePath: "/assets/images/client Certificate/6911f7be078a164b007dcefb_Kai-p-500.jpg"
    },

]




