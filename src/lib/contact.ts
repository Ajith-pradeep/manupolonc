/**
 * Contact delivery boundary.
 * Configure CONTACT_PROVIDER and related secrets in environment variables.
 * Forms never claim successful delivery unless a provider is configured.
 */

export type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  category?: string;
  propertyId?: string;
  propertySlug?: string;
  inquiryType?: string;
  phone?: string;
  source: "contact" | "property-inquiry";
};

export type ContactResult =
  | { ok: true; delivered: true; message: string }
  | { ok: true; delivered: false; message: string }
  | { ok: false; message: string };

export function isContactProviderConfigured(): boolean {
  const provider = process.env.CONTACT_PROVIDER?.trim().toLowerCase();
  if (!provider || provider === "none") return false;

  if (provider === "resend") {
    return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
  }

  if (provider === "webhook") {
    return Boolean(process.env.CONTACT_WEBHOOK_URL);
  }

  return false;
}

export async function deliverContactMessage(
  payload: ContactPayload,
): Promise<ContactResult> {
  const provider = process.env.CONTACT_PROVIDER?.trim().toLowerCase();

  if (!provider || provider === "none" || !isContactProviderConfigured()) {
    if (process.env.NODE_ENV === "development") {
      console.info("[contact] Provider not configured. Payload:", {
        ...payload,
        message: `[${payload.message.length} chars]`,
      });
    }
    return {
      ok: true,
      delivered: false,
      message:
        "Your message was validated, but email delivery is not configured yet. Please set CONTACT_PROVIDER and related environment variables, or reach out via the contact details once published.",
    };
  }

  try {
    if (provider === "webhook") {
      const url = process.env.CONTACT_WEBHOOK_URL!;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          receivedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        return {
          ok: false,
          message:
            "We could not deliver your message right now. Please try again shortly.",
        };
      }
      return {
        ok: true,
        delivered: true,
        message: "Thank you. Your message has been sent successfully.",
      };
    }

    if (provider === "resend") {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from:
            process.env.CONTACT_FROM_EMAIL ??
            "Manuel Zau Polo <onboarding@resend.dev>",
          to: [process.env.CONTACT_TO_EMAIL],
          reply_to: payload.email,
          subject:
            payload.subject ??
            `Website inquiry from ${payload.name}${
              payload.propertySlug ? ` · ${payload.propertySlug}` : ""
            }`,
          text: [
            `Name: ${payload.name}`,
            `Email: ${payload.email}`,
            payload.phone ? `Phone: ${payload.phone}` : null,
            payload.category ? `Category: ${payload.category}` : null,
            payload.inquiryType ? `Inquiry type: ${payload.inquiryType}` : null,
            payload.propertyId ? `Property ID: ${payload.propertyId}` : null,
            payload.propertySlug ? `Property: ${payload.propertySlug}` : null,
            "",
            payload.message,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });

      if (!res.ok) {
        return {
          ok: false,
          message:
            "We could not deliver your message right now. Please try again shortly.",
        };
      }

      return {
        ok: true,
        delivered: true,
        message: "Thank you. Your message has been sent successfully.",
      };
    }

    return {
      ok: false,
      message: "Unknown contact provider configuration.",
    };
  } catch {
    return {
      ok: false,
      message:
        "Something went wrong while sending your message. Please try again.",
    };
  }
}
