import { describe, expect, it } from "vitest";
import { filterProperties, searchProperties } from "@/lib/properties";
import { parsePropertySearchParams } from "@/lib/validations";
import type { Property } from "@/types/property";

const fixtures: Property[] = [
  {
    id: "t1",
    slug: "atlantic-view-residence",
    title: "Atlantic View Residence",
    description: "Coastal residence for filter tests",
    price: 1250000,
    currency: "USD",
    category: "residential",
    transactionType: "sale",
    status: "for-sale",
    location: { city: "Luanda", country: "Angola" },
    specs: { bedrooms: 4, bathrooms: 3, floorAreaSqm: 320 },
    amenities: [],
    features: [],
    images: [{ src: "/test.jpg", alt: "test" }],
    isDemo: true,
    listedAt: "2026-09-12",
  },
  {
    id: "t2",
    slug: "city-core-loft",
    title: "City Core Loft",
    description: "Urban loft rental",
    price: 2800,
    currency: "USD",
    category: "rental",
    transactionType: "rent",
    status: "for-rent",
    location: { city: "Lisbon", country: "Portugal" },
    specs: { bedrooms: 2, bathrooms: 2 },
    amenities: [],
    features: [],
    images: [{ src: "/test.jpg", alt: "test" }],
    isDemo: true,
    listedAt: "2026-10-01",
  },
  {
    id: "t3",
    slug: "horizon-commercial",
    title: "Horizon Commercial Suite",
    description: "Commercial floorspace",
    price: 420000,
    currency: "USD",
    category: "commercial",
    transactionType: "sale",
    status: "for-sale",
    location: { city: "Cape Town", country: "South Africa" },
    specs: { floorAreaSqm: 480 },
    amenities: [],
    features: [],
    images: [{ src: "/test.jpg", alt: "test" }],
    isDemo: true,
    listedAt: "2026-08-20",
  },
];

describe("filterProperties", () => {
  it("filters by category", () => {
    const results = filterProperties(fixtures, { category: "residential" });
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((p) => p.category === "residential")).toBe(true);
  });

  it("filters by transaction type rent", () => {
    const results = filterProperties(fixtures, { transactionType: "rent" });
    expect(results.every((p) => p.transactionType === "rent")).toBe(true);
  });

  it("filters by location substring", () => {
    const results = filterProperties(fixtures, { location: "lisbon" });
    expect(results.length).toBeGreaterThan(0);
    expect(
      results.every((p) => p.location.city.toLowerCase().includes("lisbon")),
    ).toBe(true);
  });

  it("filters by price range", () => {
    const results = filterProperties(fixtures, {
      minPrice: 200000,
      maxPrice: 500000,
    });
    expect(
      results.every((p) => p.price >= 200000 && p.price <= 500000),
    ).toBe(true);
  });

  it("filters by bedrooms minimum", () => {
    const results = filterProperties(fixtures, { bedrooms: 4 });
    expect(results.every((p) => (p.specs.bedrooms ?? 0) >= 4)).toBe(true);
  });

  it("supports text query across title and description", () => {
    const results = filterProperties(fixtures, { query: "atlantic" });
    expect(results.some((p) => p.slug === "atlantic-view-residence")).toBe(
      true,
    );
  });
});

describe("parsePropertySearchParams", () => {
  it("returns defaults for empty input", () => {
    const parsed = parsePropertySearchParams({});
    expect(parsed.category).toBe("all");
    expect(parsed.type).toBe("all");
    expect(parsed.status).toBe("all");
  });

  it("swaps inverted min/max price", () => {
    const parsed = parsePropertySearchParams({
      minPrice: "900000",
      maxPrice: "100000",
    });
    expect(parsed.minPrice).toBe(100000);
    expect(parsed.maxPrice).toBe(900000);
  });

  it("ignores invalid category values safely", () => {
    const parsed = parsePropertySearchParams({ category: "spaceship" });
    expect(parsed.category).toBe("all");
  });
});

describe("searchProperties", () => {
  it("returns matching inventory from the data layer", () => {
    const results = searchProperties({
      category: "commercial",
      type: "sale",
      status: "all",
    });
    expect(results.every((p) => p.category === "commercial")).toBe(true);
  });
});
