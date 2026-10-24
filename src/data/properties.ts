import type { Property } from "@/types/property";

/**
 * Showcase property imagery for the real estate platform.
 * Marked isDemo: true — presentation inventory, not claimed as live verified stock.
 */
export const demoProperties: Property[] = [
  {
    id: "show-001",
    slug: "skyline-residence-dubai",
    title: "Skyline Residence",
    description:
      "A contemporary high-rise residence with expansive city views and refined interiors. Showcase listing for platform presentation.",
    price: 2800000,
    currency: "USD",
    category: "residential",
    transactionType: "sale",
    status: "for-sale",
    location: { city: "Dubai", country: "United Arab Emirates" },
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      floorAreaSqm: 210,
      parkingSpaces: 2,
    },
    amenities: ["City views", "Concierge", "Pool"],
    features: ["Open living", "Smart home ready"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
        alt: "Modern luxury residence exterior at dusk",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        alt: "Bright contemporary living room",
      },
    ],
    featured: true,
    isDemo: true,
    listedAt: "2026-09-01",
  },
  {
    id: "show-002",
    slug: "marina-loft",
    title: "Marina Loft",
    description:
      "Waterfront loft living with open volumes and marina outlook. Showcase listing.",
    price: 4500,
    currency: "USD",
    category: "rental",
    transactionType: "rent",
    status: "for-rent",
    location: { city: "Dubai", country: "United Arab Emirates" },
    specs: { bedrooms: 2, bathrooms: 2, floorAreaSqm: 125 },
    amenities: ["Marina view", "Furnished"],
    features: ["Floor-to-ceiling glass"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
        alt: "Modern loft apartment interior",
      },
      {
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
        alt: "Apartment living space with natural light",
      },
    ],
    featured: true,
    isDemo: true,
    listedAt: "2026-09-15",
  },
  {
    id: "show-003",
    slug: "atlantic-villa",
    title: "Atlantic Villa",
    description:
      "Coastal villa with private garden and generous entertaining spaces. Showcase listing.",
    price: 1650000,
    currency: "USD",
    category: "residential",
    transactionType: "sale",
    status: "for-sale",
    location: { city: "Luanda", country: "Angola" },
    specs: {
      bedrooms: 5,
      bathrooms: 4,
      floorAreaSqm: 420,
      plotAreaSqm: 900,
    },
    amenities: ["Garden", "Pool", "Security"],
    features: ["Family wing", "Guest suite"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
        alt: "Modern villa with pool",
      },
      {
        src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
        alt: "Villa terrace and pool area",
      },
    ],
    featured: true,
    isDemo: true,
    listedAt: "2026-08-20",
  },
  {
    id: "show-004",
    slug: "commercial-hub",
    title: "Commercial Hub Suite",
    description:
      "Flexible commercial floorspace suited to professional services. Showcase listing.",
    price: 920000,
    currency: "USD",
    category: "commercial",
    transactionType: "sale",
    status: "for-sale",
    location: { city: "Lisbon", country: "Portugal" },
    specs: { floorAreaSqm: 380, parkingSpaces: 6 },
    amenities: ["Street frontage", "HVAC"],
    features: ["Partition-ready"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
        alt: "Modern commercial tower exterior",
      },
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
        alt: "Open office interior",
      },
    ],
    featured: false,
    isDemo: true,
    listedAt: "2026-07-12",
  },
  {
    id: "show-005",
    slug: "garden-court-home",
    title: "Garden Court Home",
    description:
      "Family home wrapped by landscaped courts and quiet living spaces. Showcase listing.",
    price: 1100000,
    currency: "USD",
    category: "residential",
    transactionType: "sale",
    status: "for-sale",
    location: { city: "Luanda", country: "Angola" },
    specs: { bedrooms: 4, bathrooms: 3, floorAreaSqm: 300, plotAreaSqm: 650 },
    amenities: ["Courtyard", "Parking"],
    features: ["Study", "Staff quarters"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        alt: "Contemporary home exterior",
      },
    ],
    featured: false,
    isDemo: true,
    listedAt: "2026-10-01",
  },
  {
    id: "show-006",
    slug: "ridge-land-parcel",
    title: "Ridge Land Parcel",
    description:
      "Elevated land parcel suited to a bespoke residence. Showcase listing.",
    price: 340000,
    currency: "USD",
    category: "land",
    transactionType: "sale",
    status: "for-sale",
    location: { city: "Cape Town", country: "South Africa" },
    specs: { plotAreaSqm: 2400 },
    amenities: ["Road access"],
    features: ["Elevated aspect"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
        alt: "Mountain ridge landscape",
      },
    ],
    featured: false,
    isDemo: true,
    listedAt: "2026-06-18",
  },
];
