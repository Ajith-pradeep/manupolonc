"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  submitContactForm,
  type ActionState,
} from "@/app/actions/contact";
import { Button } from "@/components/ui/button";

const initial: ActionState = { status: "idle" };

const fieldClass =
  "w-full border border-white/15 bg-surface-2 px-3 py-2.5 text-sm text-cream rounded-sm";

export function ContactForm({
  defaultCategory = "general",
  defaultPropertyId,
}: {
  defaultCategory?: string;
  defaultPropertyId?: string;
}) {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initial,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success" && state.delivered) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-5" noValidate>
      <div className="absolute -left-[9999px] opacity-0" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          required
          error={state.fieldErrors?.name?.[0]}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          error={state.fieldErrors?.email?.[0]}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Subject"
          name="subject"
          required
          error={state.fieldErrors?.subject?.[0]}
        />
        <label className="block">
          <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone mb-2 block">
            Category
          </span>
          <select
            name="category"
            defaultValue={defaultCategory}
            className={fieldClass}
          >
            <option value="general">General</option>
            <option value="real-estate">No Competition Infinity Real Estate</option>
            <option value="partnership">Partnership</option>
            <option value="media">Media</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>

      {defaultCategory === "real-estate" || defaultPropertyId ? (
        <Field
          label="Property / Listing ID (optional)"
          name="propertyId"
          defaultValue={defaultPropertyId}
          error={state.fieldErrors?.propertyId?.[0]}
        />
      ) : (
        <input type="hidden" name="propertyId" value="" />
      )}

      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone mb-2 block">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className={`${fieldClass} resize-y min-h-[140px]`}
        />
        {state.fieldErrors?.message?.[0] ? (
          <span className="mt-1.5 block text-sm text-red-700">
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

      <Button type="submit" variant="primary" disabled={pending}>
        {pending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-[0.65rem] uppercase tracking-[0.18em] text-stone mb-2 block">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className={fieldClass}
      />
      {error ? (
        <span className="mt-1.5 block text-sm text-red-700">{error}</span>
      ) : null}
    </label>
  );
}
