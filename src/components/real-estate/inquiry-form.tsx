"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  submitPropertyInquiry,
  type ActionState,
} from "@/app/actions/contact";
import { Button } from "@/components/ui/button";

const initial: ActionState = { status: "idle" };

const fieldClass =
  "w-full border border-white/15 bg-surface-2 px-3 py-2.5 text-sm text-cream rounded-sm";

export function PropertyInquiryForm({
  propertyId,
  propertySlug,
  propertyTitle,
}: {
  propertyId?: string;
  propertySlug?: string;
  propertyTitle?: string;
}) {
  const [state, formAction, pending] = useActionState(
    submitPropertyInquiry,
    initial,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success" && state.delivered) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4" noValidate>
      <div className="absolute -left-[9999px] opacity-0" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {propertyId ? (
        <input type="hidden" name="propertyId" value={propertyId} />
      ) : null}
      {propertySlug ? (
        <input type="hidden" name="propertySlug" value={propertySlug} />
      ) : null}

      {propertyTitle ? (
        <p className="text-sm text-stone">
          Inquiring about:{" "}
          <span className="text-charcoal font-medium">{propertyTitle}</span>
        </p>
      ) : null}

      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone mb-2 block">
          I am a
        </span>
        <select name="inquiryType" defaultValue="buyer" className={fieldClass}>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
          <option value="investor">Investor</option>
          <option value="tenant">Tenant</option>
          <option value="general">General inquiry</option>
        </select>
      </label>

      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone mb-2 block">
          Name
        </span>
        <input name="name" required className={fieldClass} />
        {state.fieldErrors?.name?.[0] ? (
          <span className="mt-1 text-sm text-red-700">
            {state.fieldErrors.name[0]}
          </span>
        ) : null}
      </label>

      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone mb-2 block">
          Email
        </span>
        <input name="email" type="email" required className={fieldClass} />
        {state.fieldErrors?.email?.[0] ? (
          <span className="mt-1 text-sm text-red-700">
            {state.fieldErrors.email[0]}
          </span>
        ) : null}
      </label>

      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone mb-2 block">
          Phone (optional)
        </span>
        <input name="phone" type="tel" className={fieldClass} />
      </label>

      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone mb-2 block">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          defaultValue={
            propertyTitle
              ? `I am interested in ${propertyTitle}. Please share more details.`
              : undefined
          }
          className={`${fieldClass} resize-y`}
        />
        {state.fieldErrors?.message?.[0] ? (
          <span className="mt-1 text-sm text-red-700">
            {state.fieldErrors.message[0]}
          </span>
        ) : null}
      </label>

      {state.message ? (
        <p
          role="status"
          className={
            state.status === "error"
              ? "text-sm text-red-800 border border-red-800/20 bg-red-50 px-4 py-3"
              : state.delivered
                ? "text-sm text-charcoal border border-gold/30 bg-gold/10 px-4 py-3"
                : "text-sm text-charcoal border border-charcoal/15 bg-surface px-4 py-3"
          }
        >
          {state.message}
        </p>
      ) : null}

      <Button type="submit" variant="secondary" disabled={pending} className="w-full">
        {pending ? "Sending…" : "Submit Inquiry"}
      </Button>
    </form>
  );
}
