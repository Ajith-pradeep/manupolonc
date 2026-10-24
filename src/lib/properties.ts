import { demoProperties } from "@/data/properties";
import type { Property, PropertyFilters } from "@/types/property";
import type { PropertySearchParams } from "@/lib/validations";

/**
 * Data-access layer for properties.
 * Swap `getAllProperties` to call a CMS, database, or API without changing UI.
 */
export function getAllProperties(): Property[] {
  return demoProperties;
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return getAllProperties().find((p) => p.slug === slug);
}

export function getFeaturedProperties(limit = 3): Property[] {
  return getAllProperties()
    .filter((p) => p.featured)
    .slice(0, limit);
}

export function getRecentProperties(limit = 6): Property[] {
  return [...getAllProperties()]
    .sort(
      (a, b) =>
        new Date(b.listedAt).getTime() - new Date(a.listedAt).getTime(),
    )
    .slice(0, limit);
}

export function getRelatedProperties(
  property: Property,
  limit = 3,
): Property[] {
  return getAllProperties()
    .filter(
      (p) =>
        p.id !== property.id &&
        (p.category === property.category ||
          p.location.city === property.location.city),
    )
    .slice(0, limit);
}

export function filtersFromSearchParams(
  params: PropertySearchParams,
): PropertyFilters {
  return {
    query: params.q,
    location: params.location,
    category: params.category,
    transactionType: params.type,
    status: params.status,
    minPrice: params.minPrice,
    maxPrice: params.maxPrice,
    bedrooms: params.bedrooms,
  };
}

export function filterProperties(
  properties: Property[],
  filters: PropertyFilters,
): Property[] {
  const query = filters.query?.trim().toLowerCase();
  const location = filters.location?.trim().toLowerCase();

  return properties.filter((property) => {
    if (query) {
      const haystack = [
        property.title,
        property.description,
        property.location.city,
        property.location.region ?? "",
        property.location.country,
        property.category,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(query)) return false;
    }

    if (location) {
      const loc = [
        property.location.city,
        property.location.region ?? "",
        property.location.country,
        property.location.address ?? "",
      ]
        .join(" ")
        .toLowerCase();
      if (!loc.includes(location)) return false;
    }

    if (
      filters.category &&
      filters.category !== "all" &&
      property.category !== filters.category
    ) {
      return false;
    }

    if (
      filters.transactionType &&
      filters.transactionType !== "all" &&
      property.transactionType !== filters.transactionType
    ) {
      return false;
    }

    if (
      filters.status &&
      filters.status !== "all" &&
      property.status !== filters.status
    ) {
      return false;
    }

    if (
      filters.minPrice !== undefined &&
      property.price < filters.minPrice
    ) {
      return false;
    }

    if (
      filters.maxPrice !== undefined &&
      property.price > filters.maxPrice
    ) {
      return false;
    }

    if (
      filters.bedrooms !== undefined &&
      (property.specs.bedrooms ?? 0) < filters.bedrooms
    ) {
      return false;
    }

    return true;
  });
}

export function searchProperties(params: PropertySearchParams): Property[] {
  return filterProperties(getAllProperties(), filtersFromSearchParams(params));
}

export function getUniqueLocations(): string[] {
  const cities = new Set(
    getAllProperties().map((p) => p.location.city).filter(Boolean),
  );
  return Array.from(cities).sort();
}
