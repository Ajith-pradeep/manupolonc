/**
 * Central site configuration for MANUEL ZAU POLO.
 * Detailed claims live in `src/data/content.ts` with source attribution.
 */

export const siteConfig = {
  name: "Manuel Zau Polo",
  shortName: "MZP",
  tagline: "Vision. Entrepreneurship. Lasting Value.",
  description:
    "Manuel Zau Polo — Angolan entrepreneur based in Dubai. Technology, AI, robotics, gaming, and real estate across Africa, the Middle East, and Asia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en",

  hero: {
    eyebrow: "Entrepreneur · Dubai",
    headline: "Technology. Business. Lasting value.",
    intro:
      "Founder of No Competition Infinity Gaming and No Competition Infinity Real Estate.",
    primaryCta: { label: "Learn more", href: "/about" },
    secondaryCta: { label: "Explore", href: "/real-estate" },
  },

  about: {
    eyebrow: "About Manuel",
    headline: "Angolan entrepreneur. International executive.",
    lead:
      "Born in 1994 in Angola and based in Dubai, Manuel Zau Polo leads No Competition Infinity Gaming and No Competition Infinity Real Estate — spanning artificial intelligence, technology infrastructure, gaming, robotics, and property.",
    portrait: {
      src: "/images/manuel-about-cybertruck.jpg",
      alt: "Manuel Zau Polo in a Cybertruck",
    },
  },

  values: [
    {
      title: "Vision",
      description:
        "A long view on markets, technology, and platforms that compound value.",
    },
    {
      title: "Entrepreneurship",
      description:
        "From early ventures in Cabinda to international technology companies.",
    },
    {
      title: "Innovation",
      description:
        "AI, digital twins, simulation, and humanoid robotics applied to real industries.",
    },
    {
      title: "Global ambition",
      description:
        "Bridging Africa, the Middle East, and Asia through durable partnerships.",
    },
  ],

  realEstate: {
    brandName: "No Competition Infinity Real Estate",
    heroHeadline: "Spaces shaped by vision.",
    heroIntro:
      "No Competition Infinity Real Estate — a curated property showcase from Manuel Zau Polo. Explore highlighted residences and developments.",
    services: [
      {
        title: "Buyer guidance",
        description: "Structured search support for residential and investment goals.",
      },
      {
        title: "Seller positioning",
        description: "Presentation and market strategy for owners bringing assets to market.",
      },
      {
        title: "Investment screening",
        description: "Opportunity framing for investors evaluating portfolios.",
      },
      {
        title: "Rental matching",
        description: "Tenant and landlord support for active rental inventory.",
      },
    ],
    featuredLocations: [
      { name: "Dubai", description: "International hub for lifestyle and investment property." },
      { name: "Luanda", description: "Home-market presence and regional opportunity." },
      { name: "Lisbon", description: "European gateway listings in the showcase set." },
    ],
  },

  navigation: [
    { label: "About", href: "/about" },
    { label: "Technology", href: "/technology" },
    { label: "Real Estate", href: "/real-estate" },
    { label: "Contact", href: "/contact" },
  ] as const,

  cta: {
    exploreProperties: {
      label: "Explore Properties",
      href: "/real-estate",
    },
    contact: { label: "Get in Touch", href: "/contact" },
  },

  contact: {
    email: "",
    phone: "",
    address: "Dubai, United Arab Emirates",
    social: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/manuel-zau-polo-804410407",
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/manupolonc/",
      },
      { label: "X", url: "" },
    ] as { label: string; url: string }[],
  },

  seo: {
    titleTemplate: "%s · Manuel Zau Polo",
    defaultTitle: "Manuel Zau Polo — Vision, Technology & Global Ambition",
    defaultDescription:
      "Official site of Manuel Zau Polo — Founder of No Competition Infinity Gaming and No Competition Infinity Real Estate. AI, robotics, and property from Dubai.",
    twitterHandle: "",
  },
} as const;

export type NavItem = (typeof siteConfig.navigation)[number];

export function getConfiguredSocialLinks() {
  return siteConfig.contact.social.filter((s) => s.url.trim().length > 0);
}

export function hasContactEmail() {
  return siteConfig.contact.email.trim().length > 0;
}
