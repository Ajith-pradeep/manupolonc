import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  FeaturedPropertyGrid,
  PropertyGrid,
} from "@/components/real-estate/property-grid";
import { PropertyInquiryForm } from "@/components/real-estate/inquiry-form";
import { siteConfig } from "@/lib/site-config";
import {
  getAllProperties,
  getFeaturedProperties,
} from "@/lib/properties";

export const metadata: Metadata = {
  title: "No Competition Infinity Real Estate",
  description: siteConfig.realEstate.heroIntro,
  alternates: { canonical: "/real-estate" },
};

const HERO = "/images/manuel-painterly-blazer.jpg";

export default function RealEstatePage() {
  const properties = getAllProperties();
  const featured = getFeaturedProperties(3);
  const { realEstate } = siteConfig;

  return (
    <>
      <section className="section-stack relative flex min-h-[52svh] items-end bg-black md:min-h-[58svh]">
        <div className="media-clip">
          <Image
            src={HERO}
            alt="Architectural residence — real estate showcase"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/25" />
        </div>
        <div className="container-editorial relative z-10 pb-12 pt-32 md:pb-16">
          <Reveal>
            <p className="text-sm font-medium text-gold-light mb-3">
              {realEstate.brandName}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-white max-w-2xl text-balance">
              {realEstate.heroHeadline}
            </h1>
            <p className="mt-4 max-w-xl text-white/75 leading-relaxed">
              {realEstate.heroIntro}
            </p>
          </Reveal>
        </div>
      </section>

      {featured.length > 0 ? (
        <section className="bg-surface section-pad border-b border-charcoal/10">
          <div className="container-editorial">
            <Reveal>
              <SectionHeading
                eyebrow="Featured"
                title="Highlighted properties"
                description="Image-led showcase selections for the platform experience."
                className="mb-10"
              />
            </Reveal>
            <FeaturedPropertyGrid properties={featured} />
          </div>
        </section>
      ) : null}

      <section id="listings" className="bg-bg section-pad">
        <div className="container-editorial">
          <Reveal>
            <div className="mb-10">
              <h2 className="font-serif text-3xl text-charcoal">All properties</h2>
              <p className="mt-2 text-sm text-stone">
                {properties.length} listings
              </p>
            </div>
          </Reveal>
          <PropertyGrid properties={properties} />
        </div>
      </section>

      {realEstate.featuredLocations.length > 0 ? (
        <section className="bg-surface section-pad border-y border-charcoal/10">
          <div className="container-editorial">
            <Reveal>
              <SectionHeading
                eyebrow="Markets"
                title="Featured locations"
                className="mb-10"
              />
            </Reveal>
            <div className="grid gap-8 md:grid-cols-3">
              {realEstate.featuredLocations.map((loc, i) => (
                <Reveal key={loc.name} delay={i * 0.04}>
                  <div className="border-t border-charcoal/15 pt-5">
                    <h3 className="font-serif text-xl text-charcoal">{loc.name}</h3>
                    <p className="mt-2 text-sm text-stone leading-relaxed">
                      {loc.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-surface-2 section-pad">
        <div className="container-editorial grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Services"
                title="Property consultation"
                className="mb-8"
              />
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {realEstate.services.map((service) => (
                <div
                  key={service.title}
                  className="border-t border-charcoal/10 pt-4"
                >
                  <h3 className="font-medium text-charcoal mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-stone leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-charcoal/10 bg-surface p-6 md:p-8 h-fit">
            <h2 className="font-serif text-2xl mb-2 text-charcoal">Inquire</h2>
            <p className="text-stone text-sm mb-6 leading-relaxed">
              Buyers, sellers, investors, and tenants — share your goals.
            </p>
            <PropertyInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
