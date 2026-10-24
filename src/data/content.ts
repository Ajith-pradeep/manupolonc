import type {
  ImpactInitiative,
  MediaItem,
  SourcedClaim,
  Venture,
} from "@/types/content";

/**
 * Editorial content for Manuel Zau Polo.
 * Independently reported claims are separated from profile-provided / company-reported items.
 */

export const profileHighlight = {
  born: "1994",
  origin: "Angola",
  basedIn: "Dubai, United Arab Emirates",
  summary:
    "Angolan entrepreneur and business executive based in Dubai, active in artificial intelligence, technology infrastructure, gaming, robotics, and real estate across Africa, the Middle East, and Asia.",
};

export const educationTimeline: SourcedClaim[] = [
  {
    id: "born-angola-1994",
    text: "Born in Angola in 1994.",
    verification: "self-reported",
    sourceLabel: "Profile materials provided for this site",
  },
  {
    id: "bachelors-petroleum",
    text: "Bachelor's degree in Petroleum Engineering from Universidade Jean Piaget de Cabo Verde.",
    verification: "self-reported",
    sourceLabel: "Profile materials; consistent with LinkedIn education listing",
    note: "Degree field and institution as stated in profile materials.",
  },
  {
    id: "masters-tokyo",
    text: "Advanced studies toward a Master's in Chemical/Engineering fields at the Tokyo Institute of Technology (2022–2025).",
    verification: "self-reported",
    sourceLabel: "Profile materials provided for this site",
    note: "Not independently confirmed in the press sources cited elsewhere on this site.",
  },
];

export const biographyClaims: SourcedClaim[] = [
  {
    id: "angolan-entrepreneur-dubai",
    text: "Manuel Zau Polo is an Angolan entrepreneur and business executive based in Dubai, recognized for work spanning artificial intelligence, technology infrastructure, gaming, and robotics.",
    verification: "independently-reported",
    sourceLabel: "Gulf News; Fast Company Middle East; 360 Angola",
    sourceUrl:
      "https://gulfnews.com/business/corporate-news/no-competition-infinity-gaming-signs-five-year-china-agreement-1.500660684",
  },
  {
    id: "president-founder-ncig",
    text: "He is Founder and President of Dubai-based No Competition Infinity Gaming, as described in company materials and press coverage of the 2026 China partnership.",
    verification: "independently-reported",
    sourceLabel: "Gulf News; company press materials via Zawya",
    sourceUrl:
      "https://gulfnews.com/business/corporate-news/no-competition-infinity-gaming-signs-five-year-china-agreement-1.500660684",
  },
  {
    id: "ncire-real-estate",
    text: "He leads No Competition Infinity Real Estate, the property platform associated with his brand alongside No Competition Infinity Gaming.",
    verification: "self-reported",
    sourceLabel: "Brand / profile materials provided for this site",
  },
  {
    id: "born-1994",
    text: "Profile materials state that he was born in 1994 in Angola.",
    verification: "self-reported",
    sourceLabel: "Profile materials / personal brand",
  },
  {
    id: "education-summary",
    text: "Education background includes Petroleum Engineering studies at Universidade Jean Piaget de Cabo Verde and advanced Chemical/Engineering studies associated with Tokyo Institute of Technology (2022–2025), as stated in profile materials.",
    verification: "self-reported",
    sourceLabel: "Profile materials provided for this site",
    note: "Tokyo Institute of Technology attendance is profile-provided and not independently verified here.",
  },
];

export const ventures: Venture[] = [
  {
    id: "ncig",
    slug: "no-competition-infinity-gaming",
    name: "No Competition Infinity Gaming",
    role: "Founder & President",
    summary:
      "Dubai-based enterprise at the intersection of gaming, virtual environments, AI, digital twins, and humanoid robotics.",
    description:
      "In September 2026, No Competition Infinity Gaming signed a five-year strategic technology partnership with China’s Jiangsu Yunmu Intelligent Manufacturing Technology Co. Press coverage describes contractual capacity to supply up to 10,000 humanoid robots per year over the term — subject to adjustment based on project progress, technical validation, and commercial expansion — with applications under study in real estate, construction, gaming, hospitality, education, and related sectors, integrating advanced AI and digital twins.",
    sectors: ["AI", "Robotics", "Gaming", "Simulation"],
    verification: "independently-reported",
    sourceLabel: "Gulf News; Fast Company Middle East; 360 Angola",
    sourceUrl:
      "https://gulfnews.com/business/corporate-news/no-competition-infinity-gaming-signs-five-year-china-agreement-1.500660684",
  },
  {
    id: "meta-shield",
    slug: "meta-shield",
    name: "Meta Shield Information Technology",
    role: "Founder",
    summary:
      "Cybersecurity and IT infrastructure company founded in 2022, according to profile and secondary press accounts.",
    description:
      "Profile materials and secondary business press describe a 2026 transaction in which 50% of Meta Shield was sold to a British investor for US$500 million. That valuation and deal structure are presented here as reported claims — not as independently audited confirmation on this site.",
    sectors: ["Cybersecurity", "IT Infrastructure"],
    verification: "company-reported",
    sourceLabel: "Profile materials; secondary business press",
    note: "Financial figures and buyer identity remain company-/press-reported pending primary documentation.",
  },
  {
    id: "universe-vision",
    slug: "universe-vision-marketing",
    name: "Universe Vision Marketing Management L.L.C",
    role: "Founder",
    summary:
      "Marketing management enterprise associated with Manuel Zau Polo’s broader portfolio.",
    description:
      "Listed among enterprises founded by Manuel Zau Polo in profile materials provided for this website.",
    sectors: ["Marketing", "Business Services"],
    verification: "self-reported",
    sourceLabel: "Profile materials provided for this site",
  },
  {
    id: "a4-pizza",
    slug: "a4-pizza-bar-cabinda",
    name: "A4 Pizza Bar (Cabinda)",
    role: "Early venture operator",
    summary:
      "Early entrepreneurial venture in Cabinda, Angola — part of the path before international technology and real estate platforms.",
    description:
      "Profile materials note prior operation of the A4 Pizza Bar in Cabinda early in his entrepreneurial career.",
    sectors: ["Hospitality", "Entrepreneurship"],
    verification: "self-reported",
    sourceLabel: "Profile materials provided for this site",
  },
  {
    id: "ncire",
    slug: "no-competition-infinity-real-estate",
    name: "No Competition Infinity Real Estate",
    role: "Founder / Principal",
    summary:
      "Property and real estate platform under the No Competition Infinity brand — residential, commercial, and investment presentation.",
    description:
      "No Competition Infinity Real Estate is Manuel Zau Polo’s dedicated real estate brand, complementary to No Competition Infinity Gaming. The /real-estate section of this website presents the property showcase and inquiry experience.",
    sectors: ["Real Estate", "Property"],
    verification: "self-reported",
    sourceLabel: "Brand / profile materials provided for this site",
    href: "/real-estate",
  },
];

export const technologyFocus: SourcedClaim[] = [
  {
    id: "ai-digital-twins",
    text: "Strategy centers on turning simulation, artificial intelligence, and digital twins into operational capability in the physical world.",
    verification: "independently-reported",
    sourceLabel: "Quoted via Gulf News",
    sourceUrl:
      "https://gulfnews.com/business/corporate-news/no-competition-infinity-gaming-signs-five-year-china-agreement-1.500660684",
  },
  {
    id: "yunmu-partnership",
    text: "Five-year agreement with Jiangsu Yunmu Intelligent Manufacturing Technology Co. (signed in Taicang, China, September 2026) combines robotics manufacturing with No Competition’s simulation and digital expertise.",
    verification: "independently-reported",
    sourceLabel: "Gulf News; Fast Company Middle East",
  },
  {
    id: "robot-capacity",
    text: "Reported contractual capacity of up to 10,000 humanoid robots annually over five years — subject to adjustment; not a confirmed deployment volume.",
    verification: "company-reported",
    sourceLabel: "Agreement terms as reported by Gulf News / Fast Company ME",
    note: "Fast Company Middle East notes the figure is not a confirmed order volume.",
  },
  {
    id: "regional-ambition",
    text: "Activity and partnerships are framed across Africa, the Middle East, and Asia, including knowledge-transfer ambitions cited in regional coverage.",
    verification: "company-reported",
    sourceLabel: "360 Angola; company statements",
  },
];

/** Technology page — image-led pillars and narrative blocks */
export const technologyPage = {
  hero: {
    eyebrow: "Technology & innovation",
    title: "From simulation to real-world capability",
    lead:
      "Through No Competition Infinity Gaming, Manuel Zau Polo’s work sits at the intersection of artificial intelligence, digital twins, advanced simulation, and humanoid robotics — connecting virtual systems to physical industry.",
    image: "/images/manuel-technology-gaming.jpg",
    imageAlt:
      "Manuel Zau Polo in a gaming studio — No Competition Infinity Gaming",
  },
  intro: {
    title: "Platforms that bridge digital and physical",
    body: [
      "Published coverage describes a strategy centered on turning simulation, artificial intelligence, and digital twins into operational capability — not demos alone, but systems intended for real environments.",
      "No Competition Infinity Gaming is positioned as the vehicle for that ambition: gaming and virtual environments paired with robotics manufacturing partnerships and knowledge transfer across Africa, the Middle East, and Asia.",
    ],
  },
  pillars: [
    {
      id: "artificial-intelligence",
      title: "Artificial intelligence",
      summary:
        "AI as the decision layer that connects models, simulation outputs, and real-world operations.",
      body: "Press coverage of No Competition Infinity Gaming frames artificial intelligence as core to how digital systems inform physical deployment — from planning environments to robotics workflows.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Abstract visualization representing artificial intelligence",
      verification: "independently-reported" as const,
      sourceLabel: "Gulf News; Fast Company Middle East",
      sourceUrl:
        "https://gulfnews.com/business/corporate-news/no-competition-infinity-gaming-signs-five-year-china-agreement-1.500660684",
    },
    {
      id: "digital-twins",
      title: "Digital twins",
      summary:
        "Living digital counterparts of physical assets, spaces, and processes.",
      body: "Digital twins are cited as a bridge between virtual environments and operational capability — enabling testing, planning, and coordination before and alongside real-world activity.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Data center and digital infrastructure",
      verification: "independently-reported" as const,
      sourceLabel: "Quoted via Gulf News",
      sourceUrl:
        "https://gulfnews.com/business/corporate-news/no-competition-infinity-gaming-signs-five-year-china-agreement-1.500660684",
    },
    {
      id: "simulation",
      title: "Advanced simulation",
      summary:
        "High-fidelity environments for training, rehearsal, and system validation.",
      body: "Simulation underpins the gaming and virtual-environment stack — a foundation for rehearsing complex scenarios before they reach people, sites, or machines.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Circuit board technology close-up",
      verification: "independently-reported" as const,
      sourceLabel: "Gulf News coverage of No Competition Infinity Gaming",
    },
    {
      id: "humanoid-robotics",
      title: "Humanoid robotics",
      summary:
        "Manufacturing partnership aimed at scalable robotics capacity.",
      body: "The September 2026 agreement with Jiangsu Yunmu Intelligent Manufacturing Technology Co. combines robotics manufacturing with No Competition’s simulation and digital expertise — with reported contractual capacity of up to 10,000 humanoid robots annually over five years, subject to adjustment.",
      image:
        "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Humanoid robot figure",
      verification: "company-reported" as const,
      sourceLabel: "Gulf News; Fast Company Middle East",
      note: "Capacity figures reflect reported contractual terms — not audited deployment outcomes.",
    },
  ],
  partnership: {
    eyebrow: "Strategic partnership",
    title: "Jiangsu Yunmu · five-year agreement",
    body: "In September 2026, No Competition Infinity Gaming signed a five-year strategic technology partnership in Taicang, China. Coverage describes applications under study across real estate, construction, gaming, hospitality, education, and related sectors — integrating advanced AI and digital twins with robotics manufacturing.",
    highlights: [
      { label: "Term", value: "5 years" },
      { label: "Reported capacity", value: "Up to 10,000 / year" },
      { label: "Signed", value: "Sep 2026 · Taicang" },
      { label: "Regions", value: "Africa · MENA · Asia" },
    ],
    image: "/images/manuel-studio-seated.jpg",
    imageAlt:
      "Manuel Zau Polo at the No Competition Infinity Gaming partnership signing",
    wideImage: "/images/manuel-signing-wide.jpg",
    verification: "independently-reported" as const,
    sourceLabel: "Gulf News; Fast Company Middle East; 360 Angola",
    sourceUrl:
      "https://gulfnews.com/business/corporate-news/no-competition-infinity-gaming-signs-five-year-china-agreement-1.500660684",
    note: "Fast Company Middle East notes the 10,000-robot figure is contractual capacity subject to adjustment, not a confirmed order volume.",
  },
  applications: [
    {
      title: "Real estate & construction",
      description:
        "Digital planning and robotics applications under study for built environments and site workflows.",
      image: "/images/manuel-residence-bike.jpg",
    },
    {
      title: "Gaming & virtual worlds",
      description:
        "Simulation and virtual environments as the creative and technical core of the platform.",
      image: "/images/manuel-desk-focus.jpg",
    },
    {
      title: "Hospitality & education",
      description:
        "Sectors cited in coverage for potential robotics and simulation-assisted experiences.",
      image: "/images/manuel-breakfast.jpg",
    },
    {
      title: "Knowledge transfer",
      description:
        "Regional framing emphasizes partnerships and capability building across Africa and beyond.",
      image: "/images/manuel-office-phone.jpg",
    },
  ],
};

export const impactInitiatives: ImpactInitiative[] = [
  {
    id: "jobs-safety-education",
    title: "Safety, education, and employment",
    description:
      "In published remarks, Manuel Zau Polo has linked robotics and simulation work to reducing human risk, supporting education, and expanding employment opportunities.",
    verification: "independently-reported",
    sourceLabel: "Quoted in Gulf News",
  },
  {
    id: "early-entrepreneurship",
    title: "From Cabinda to Dubai",
    description:
      "Early hospitality entrepreneurship in Cabinda (A4 Pizza Bar) is cited in profile materials as part of a longer journey into international technology and real estate platforms.",
    verification: "self-reported",
    sourceLabel: "Profile materials provided for this site",
  },
];

export const mediaItems: MediaItem[] = [
  {
    id: "gulf-news-yunmu",
    slug: "gulf-news-five-year-china-agreement",
    title: "No Competition Infinity Gaming signs five-year China agreement",
    outlet: "Gulf News",
    date: "2026-09-02",
    summary:
      "Report on the strategic agreement with Jiangsu Yunmu Intelligent Manufacturing Technology Co., covering AI, digital twins, simulation, and humanoid robotics.",
    url: "https://gulfnews.com/business/corporate-news/no-competition-infinity-gaming-signs-five-year-china-agreement-1.500660684",
    verification: "independently-reported",
  },
  {
    id: "fast-company-me",
    slug: "fast-company-me-robot-deal",
    title:
      "Dubai-based No Competition signs five-year deal for up to 10,000 humanoid robots annually",
    outlet: "Fast Company Middle East",
    date: "2026-09-03",
    summary:
      "Coverage clarifying partnership scope and noting that the 10,000-robot figure is contractual capacity subject to adjustment, not a confirmed order volume.",
    url: "https://fastcompanyme.com/news/dubai-based-no-competition-signs-five-year-deal-for-up-to-10000-humanoid-robots-annually/",
    verification: "independently-reported",
  },
  {
    id: "360-angola-robots",
    slug: "360-angola-robotics-partnership",
    title:
      "Angolan firm signs five-year deal with Chinese partner on robotics and AI",
    outlet: "360 Angola",
    date: "2026-09-16",
    summary:
      "Regional framing of the partnership, including reported emphasis on knowledge transfer across Africa.",
    url: "https://360angola.com/innovation/tech/angolan-firm-signs-five-year-deal-with-chinese-partner-to-deploy-up-to-10000-robots-across-africa/",
    verification: "independently-reported",
  },
];

export function getVentureBySlug(slug: string) {
  return ventures.find((v) => v.slug === slug);
}

export function getMediaBySlug(slug: string) {
  return mediaItems.find((m) => m.slug === slug);
}

export const verificationLabels: Record<
  import("@/types/content").VerificationLevel,
  string
> = {
  "independently-reported": "Independently reported",
  "company-reported": "Company-reported",
  "self-reported": "Profile-provided",
  "awaiting-verification": "Awaiting verification",
};
