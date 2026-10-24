"use server";

import { deliverContactMessage } from "@/lib/contact";
import {
  contactFormSchema,
  propertyInquirySchema,
} from "@/lib/validations";

export type ActionState = {
  status: "idle" | "success" | "error";
  message?: string;
  delivered?: boolean;
  fieldErrors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
    category: String(formData.get("category") ?? "general"),
    propertyId: String(formData.get("propertyId") ?? "") || undefined,
    website: String(formData.get("website") ?? ""),
  };

  // Honeypot triggered
  if (raw.website) {
    return {
      status: "success",
      delivered: false,
      message: "Thank you.",
    };
  }

  const parsed = contactFormSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const result = await deliverContactMessage({
    name: parsed.data.name,
    email: parsed.data.email,
    subject: parsed.data.subject,
    message: parsed.data.message,
    category: parsed.data.category,
    propertyId: parsed.data.propertyId,
    source: "contact",
  });

  if (!result.ok) {
    return { status: "error", message: result.message };
  }

  return {
    status: "success",
    delivered: result.delivered,
    message: result.message,
  };
}

export async function submitPropertyInquiry(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? "") || undefined,
    message: String(formData.get("message") ?? ""),
    inquiryType: String(formData.get("inquiryType") ?? "general"),
    propertyId: String(formData.get("propertyId") ?? "") || undefined,
    propertySlug: String(formData.get("propertySlug") ?? "") || undefined,
    website: String(formData.get("website") ?? ""),
  };

  if (raw.website) {
    return { status: "success", delivered: false, message: "Thank you." };
  }

  const parsed = propertyInquirySchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const result = await deliverContactMessage({
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    message: parsed.data.message,
    inquiryType: parsed.data.inquiryType,
    propertyId: parsed.data.propertyId,
    propertySlug: parsed.data.propertySlug,
    subject: `Property inquiry${
      parsed.data.propertySlug ? `: ${parsed.data.propertySlug}` : ""
    }`,
    source: "property-inquiry",
  });

  if (!result.ok) {
    return { status: "error", message: result.message };
  }

  return {
    status: "success",
    delivered: result.delivered,
    message: result.message,
  };
}
