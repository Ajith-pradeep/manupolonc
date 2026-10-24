import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import {
  getConfiguredSocialLinks,
  hasContactEmail,
  siteConfig,
} from "@/lib/site-config";
import { isContactProviderConfigured } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Manuel Zau Polo for professional inquiries, partnerships, or real estate consultations.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const social = getConfiguredSocialLinks();
  const providerReady = isContactProviderConfigured();

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Share your inquiry clearly. Forms are validated server-side and only marked delivered when a contact provider is configured."
      />

      <section className="section-pad bg-surface">
        <div className="container-editorial grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h2 className="font-serif text-2xl mb-4 text-charcoal">Details</h2>
              <ul className="space-y-4 text-sm text-stone">
                {hasContactEmail() ? (
                  <li>
                    <span className="block text-charcoal font-medium mb-1">
                      Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="hover:text-charcoal transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </li>
                ) : (
                  <li>
                    Email not published yet. Configure contact details in site
                    settings when verified.
                  </li>
                )}
                {siteConfig.contact.address ? (
                  <li>
                    <span className="block text-charcoal font-medium mb-1">
                      Location
                    </span>
                    {siteConfig.contact.address}
                  </li>
                ) : null}
              </ul>
            </div>

            {social.length > 0 ? (
              <ul className="flex flex-wrap gap-4 text-sm">
                {social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal hover:text-bronze transition-colors"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="border border-charcoal/10 bg-surface-2 p-4 text-sm text-stone leading-relaxed">
              <p className="text-charcoal font-medium mb-1">Delivery status</p>
              {providerReady
                ? "A contact provider is configured."
                : "No contact provider configured yet. Submissions are validated but not emailed until CONTACT_PROVIDER is set."}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-charcoal/10 bg-surface-2 p-6 md:p-8">
              <h2 className="font-serif text-2xl mb-6 text-charcoal">
                Send a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
