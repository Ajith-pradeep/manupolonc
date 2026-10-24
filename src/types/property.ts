export type PropertyCategory =
  | "residential"
  | "commercial"
  | "land"
  | "rental";

export type ListingStatus = "for-sale" | "for-rent" | "sold" | "pending";

export type TransactionType = "sale" | "rent";

export interface PropertyImage {
  src: string;
  alt: string;
}

export interface PropertyLocation {
  city: string;
  region?: string;
  country: string;
  address?: string;
  latitude?: number;
  longitude?: number;
}

export interface PropertySpecs {
  bedrooms?: number;
  bathrooms?: number;
  floorAreaSqm?: number;
  plotAreaSqm?: number;
  yearBuilt?: number;
  parkingSpaces?: number;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: PropertyCategory;
  transactionType: TransactionType;
  status: ListingStatus;
  location: PropertyLocation;
  specs: PropertySpecs;
  amenities: string[];
  features: string[];
  images: PropertyImage[];
  featured?: boolean;
  isDemo: boolean;
  listedAt: string;
}

export interface PropertyFilters {
  query?: string;
  location?: string;
  category?: PropertyCategory | "all";
  transactionType?: TransactionType | "all";
  status?: ListingStatus | "all";
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
}

export interface PropertyInquiry {
  name: string;
  email: string;
  phone?: string;
  message: string;
  propertyId?: string;
  propertySlug?: string;
  inquiryType: "buyer" | "seller" | "investor" | "tenant" | "general";
}
