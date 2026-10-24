import { describe, expect, it } from "vitest";
import { contactFormSchema, propertyInquirySchema } from "@/lib/validations";

describe("contactFormSchema", () => {
  it("accepts a valid contact payload", () => {
    const result = contactFormSchema.safeParse({
      name: "Alex Example",
      email: "alex@example.com",
      subject: "Introduction",
      message: "I would like to learn more about your work.",
      category: "general",
      website: "",
    });
    expect(result.success).toBe(true);
  });

  it("rejects short messages and invalid email", () => {
    const result = contactFormSchema.safeParse({
      name: "A",
      email: "not-an-email",
      subject: "Hi",
      message: "Too short",
      category: "general",
    });
    expect(result.success).toBe(false);
  });

  it("rejects honeypot when filled", () => {
    const result = contactFormSchema.safeParse({
      name: "Alex Example",
      email: "alex@example.com",
      subject: "Introduction",
      message: "I would like to learn more about your work.",
      website: "http://spam.test",
    });
    expect(result.success).toBe(false);
  });
});

describe("propertyInquirySchema", () => {
  it("accepts a property inquiry with listing reference", () => {
    const result = propertyInquirySchema.safeParse({
      name: "Jordan Buyer",
      email: "jordan@example.com",
      message: "Please share viewing availability for this home.",
      inquiryType: "buyer",
      propertyId: "demo-001",
      propertySlug: "atlantic-view-residence",
    });
    expect(result.success).toBe(true);
  });
});
