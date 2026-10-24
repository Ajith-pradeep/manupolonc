/**
 * Homepage storytelling beats about Manuel Zau Polo.
 */

export const homePortrait = {
  primary: "/images/manuel-studio-blazer.png",
  wide: "/images/manuel-signing-wide.jpg",
  blazer: "/images/manuel-studio-blazer.png",
  blazerCutout: "/images/manuel-portrait-blazer-cutout.png",
  seated: "/images/manuel-studio-seated.jpg",
  mission: "/images/manuel-mission-realtor.jpg",
  seatedCutout: "/images/manuel-portrait-seated-cutout.png",
  desk: "/images/manuel-desk-focus.jpg",
  residence: "/images/manuel-residence-walk.jpg",
  bike: "/images/manuel-residence-bike.jpg",
  officePhone: "/images/manuel-office-phone.jpg",
  smile: "/images/manuel-portrait-smile.jpg",
  breakfast: "/images/manuel-breakfast.jpg",
  retail: "/images/manuel-retail-moment.jpg",
  terraceSide: "/images/manuel-terrace-side.jpg",
  painterly: "/images/manuel-painterly-blazer.jpg",
  alt: "Manuel Zau Polo",
};

export const carouselSlides = [
  {
    id: "vision",
    index: "01",
    label: "Vision",
    title: "Vision",
    description:
      "Angolan entrepreneur based in Dubai — building lasting platforms across technology, gaming, and real estate.",
    image: "/images/manuel-vision-cybertruck.jpg",
    imagePosition: "center 35%",
    /** Portrait sits on the right — copy stays left in open space */
    contentAlign: "left" as "left" | "right",
  },
  {
    id: "gaming",
    index: "02",
    label: "Gaming",
    title: "Gaming",
    description:
      "Founder & President of No Competition Infinity Gaming — AI, digital twins, simulation, and humanoid robotics.",
    image: "/images/ig-cybertruck-1.jpg",
    imagePosition: "center 18%",
    contentAlign: "left" as "left" | "right",
  },
  {
    id: "partnership",
    index: "03",
    label: "Partnership",
    title: "Partnership",
    description:
      "2026 five-year agreement with Jiangsu Yunmu — reported capacity of up to 10,000 humanoid robots annually, subject to validation.",
    image: "/images/manuel-signing-wide.jpg",
    imagePosition: "55% center",
    contentAlign: "left" as "left" | "right",
  },
  {
    id: "property",
    index: "04",
    label: "Property",
    title: "Property",
    description:
      "No Competition Infinity Real Estate — curated property presentation with international ambition.",
    image: "/images/manuel-property-range-rover.jpg",
    imagePosition: "center 40%",
    contentAlign: "left" as "left" | "right",
  },
] as const;

export const carouselStats = [
  { label: "Based in", value: "Dubai" },
  { label: "Born", value: "1994 · Angola" },
  { label: "Focus", value: "AI · Property" },
] as const;

export const storyBeats = [
  {
    id: "origins",
    year: "1994",
    title: "Angolan roots",
    body: "Born in Angola in 1994, Manuel Zau Polo’s path runs from early entrepreneurship in Cabinda to an international base in Dubai.",
    image: "/images/manuel-studio-seated.jpg",
    imagePosition: "center 20%",
  },
  {
    id: "formation",
    year: "Education",
    title: "Engineer by training",
    body: "Bachelor’s in Petroleum Engineering from Universidade Jean Piaget de Cabo Verde; advanced studies associated with Tokyo Institute of Technology (2022–2025), as stated in profile materials.",
    image: "/images/manuel-studio-blazer.png",
    imagePosition: "center top",
  },
  {
    id: "gaming",
    year: "Gaming",
    title: "No Competition Infinity Gaming",
    body: "Founder and President of No Competition Infinity Gaming — gaming, AI, digital twins, and robotics.",
    image: "/images/manuel-painterly-blazer.jpg",
    imagePosition: "center center",
  },
  {
    id: "real-estate",
    year: "Property",
    title: "No Competition Infinity Real Estate",
    body: "His dedicated real estate brand — presenting property with long-term, internationally minded care.",
    image: "/images/manuel-studio-blazer.png",
    imagePosition: "center top",
  },
] as const;

export const aboutStats = [
  { label: "Based in", value: "Dubai" },
  { label: "Born", value: "Angola, 1994" },
  { label: "Gaming", value: "NC Infinity Gaming" },
  { label: "Property", value: "NC Infinity Real Estate" },
] as const;

export const aboutExtended = [
  "Manuel Zau Polo is recognized for connecting digital systems — simulation, artificial intelligence, and digital twins — with real-world capability across Africa, the Middle East, and Asia.",
  "In September 2026, No Competition Infinity Gaming signed a five-year strategic agreement with Jiangsu Yunmu Intelligent Manufacturing Technology Co., with reported contractual capacity of up to 10,000 humanoid robots annually, subject to validation and commercial expansion.",
  "His public remarks link technology to reducing human risk, supporting education, and expanding employment — while early ventures such as A4 Pizza Bar in Cabinda mark the start of a longer entrepreneurial journey.",
] as const;

/** Homepage media grid — portrait moments with bottom labels */
export const mediaGalleryItems = [
  {
    id: "cover",
    label: "Cover",
    eyebrow: "Profile",
    title: "Manuel Zau Polo",
    image: "/images/manuel-studio-seated.jpg",
    imagePosition: "center 20%",
    featured: true,
  },
  {
    id: "dubai",
    label: "Dubai",
    image: "/images/manuel-dubai-office.jpg",
    imagePosition: "center center",
  },
  {
    id: "residence",
    label: "Residence",
    image: "/images/manuel-residence-walk.jpg",
    imagePosition: "center center",
  },
  {
    id: "focus",
    label: "Focus",
    image: "/images/manuel-desk-focus.jpg",
    imagePosition: "center top",
  },
  {
    id: "terrace",
    label: "Terrace",
    image: "/images/manuel-terrace-portrait.jpg",
    imagePosition: "center top",
  },
  {
    id: "office",
    label: "Office",
    image: "/images/manuel-office-phone.jpg",
    imagePosition: "center top",
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    image: "/images/manuel-residence-bike.jpg",
    imagePosition: "center center",
  },
  {
    id: "moment",
    label: "Moment",
    image: "/images/manuel-retail-moment.jpg",
    imagePosition: "center top",
  },
  {
    id: "morning",
    label: "Morning",
    image: "/images/manuel-breakfast.jpg",
    imagePosition: "center top",
  },
  {
    id: "signing",
    label: "Signing",
    image: "/images/manuel-signing-wide.jpg",
    imagePosition: "55% center",
  },
] as const;
