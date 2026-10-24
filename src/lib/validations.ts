import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Please enter a subject."),
  message: z
    .string()
    .trim()
    .min(10, "Please share a bit more detail (at least 10 characters).")
    .max(5000, "Message is too long."),
  category: z
    .enum(["general", "real-estate", "partnership", "media", "other"])
    .default("general"),
  propertyId: z.string().trim().optional(),
  /** Honeypot — must remain empty. */
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const propertyInquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(40).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please share a bit more detail (at least 10 characters).")
    .max(5000),
  inquiryType: z.enum(["buyer", "seller", "investor", "tenant", "general"]),
  propertyId: z.string().trim().optional(),
  propertySlug: z.string().trim().optional(),
  website: z.string().max(0).optional(),
});

export type PropertyInquiryValues = z.infer<typeof propertyInquirySchema>;

const categoryEnum = z.enum([
  "all",
  "residential",
  "commercial",
  "land",
  "rental",
]);
const transactionEnum = z.enum(["all", "sale", "rent"]);
const statusEnum = z.enum(["all", "for-sale", "for-rent", "sold", "pending"]);

export const propertySearchParamsSchema = z.object({
  q: z.string().trim().max(120).optional(),
  location: z.string().trim().max(120).optional(),
  category: categoryEnum.optional().default("all"),
  type: transactionEnum.optional().default("all"),
  status: statusEnum.optional().default("all"),
  minPrice: z.coerce.number().nonnegative().optional(),
  maxPrice: z.coerce.number().nonnegative().optional(),
  bedrooms: z.coerce.number().int().min(0).max(20).optional(),
});

export type PropertySearchParams = z.infer<typeof propertySearchParamsSchema>;

export function parsePropertySearchParams(
  input: Record<string, string | string[] | undefined>,
): PropertySearchParams {
  const normalize = (value: string | string[] | undefined) =>
    Array.isArray(value) ? value[0] : value;

  const result = propertySearchParamsSchema.safeParse({
    q: normalize(input.q),
    location: normalize(input.location),
    category: normalize(input.category) || "all",
    type: normalize(input.type) || "all",
    status: normalize(input.status) || "all",
    minPrice: normalize(input.minPrice),
    maxPrice: normalize(input.maxPrice),
    bedrooms: normalize(input.bedrooms),
  });

  if (!result.success) {
    return {
      category: "all",
      type: "all",
      status: "all",
    };
  }

  const data = result.data;
  if (
    data.minPrice !== undefined &&
    data.maxPrice !== undefined &&
    data.minPrice > data.maxPrice
  ) {
    return { ...data, minPrice: data.maxPrice, maxPrice: data.minPrice };
  }

  return data;
}
