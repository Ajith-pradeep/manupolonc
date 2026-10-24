import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  amount: number,
  currency = "USD",
  locale = "en-US",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(value: number, locale = "en-US"): string {
  return new Intl.NumberFormat(locale).format(value);
}

export function absoluteUrl(path = "/") {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return new URL(path, base).toString();
}

export function listingStatusLabel(
  status: "for-sale" | "for-rent" | "sold" | "pending",
): string {
  switch (status) {
    case "for-sale":
      return "For Sale";
    case "for-rent":
      return "For Rent";
    case "sold":
      return "Sold";
    case "pending":
      return "Pending";
  }
}

export function categoryLabel(
  category: "residential" | "commercial" | "land" | "rental",
): string {
  switch (category) {
    case "residential":
      return "Residential";
    case "commercial":
      return "Commercial";
    case "land":
      return "Land";
    case "rental":
      return "Rental";
  }
}
