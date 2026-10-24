import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/animations/reveal";
import { PropertyGallery } from "@/components/real-estate/property-gallery";
import { PropertyInquiryForm } from "@/components/real-estate/inquiry-form";
import { PropertyGrid } from "@/components/real-estate/property-grid";
import {
  getAllProperties,
  getPropertyBySlug,
  getRelatedProperties,
} from "@/lib/properties";
import {
  absoluteUrl,
  categoryLabel,
  formatCurrency,
  formatNumber,
  listingStatusLabel,
} from "@/lib/utils";

export async function generateStaticParams() {
  const all = getAllProperties();
  if (all.length === 0) {
    return [{ slug: "_pending" }];
  }
  return all.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/real-estate/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Property not found" };

  const title = `${property.title}${property.isDemo ? " (Demo)" : ""}`;
  return {
    title,
    description: property.description.slice(0, 160),
    alternates: { canonical: `/real-estate/${property.slug}` },
    openGraph: {
      title,
      description: property.description.slice(0, 160),
      url: absoluteUrl(`/real-estate/${property.slug}`),
      images: property.images[0]
        ? [{ url: property.images[0].src, alt: property.images[0].alt }]
        : undefined,
    },
  };
}

export default async function PropertyDetailPage(
  props: PageProps<"/real-estate/[slug]">,
) {
  const { slug } = await props.params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const related = getRelatedProperties(property, 3);
  const priceLabel =
    property.transactionType === "rent"
      ? `${formatCurrency(property.price, property.currency)} / month`
      : formatCurrency(property.price, property.currency);

  const hasCoords =
    property.location.latitude !== undefined &&
    property.location.longitude !== undefined;

  const listingJsonLd = property.isDemo
    ? null
    : {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        name: property.title,
        description: property.description,
        url: absoluteUrl(`/real-estate/${property.slug}`),
        datePosted: property.listedAt,
      };

  return (
    <article>
      {listingJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }}
        />
      ) : null}

      <section className="pt-28 md:pt-32 bg-bg">
        <div className="container-editorial pb-8">
          <Link
            href="/real-estate"
            className="inline-flex items-center gap-2 text-sm text-stone hover:text-charcoal mb-8 transition-colors"
          >
            ← All properties
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-surface-2 text-charcoal text-xs px-2.5 py-1 border border-charcoal/10">
              {listingStatusLabel(property.status)}
            </span>
            <span className="text-xs text-bronze">
              {categoryLabel(property.category)}
            </span>
            {property.isDemo ? (
              <span className="bg-bronze text-ink text-xs px-2.5 py-1">
                Showcase
              </span>
            ) : null}
          </div>

          <Reveal>
            <h1 className="font-serif text-4xl md:text-5xl max-w-3xl text-balance text-charcoal">
              {property.title}
            </h1>
            <p className="mt-4 text-stone">
              {[
                property.location.address,
                property.location.city,
                property.location.region,
                property.location.country,
              ]
                .filter(Boolean)
                .join(", ")}
            </p>
            <p className="mt-4 text-2xl md:text-3xl font-medium text-charcoal">
              {priceLabel}
            </p>
          </Reveal>
        </div>

        <div className="container-editorial pb-12">
          <PropertyGallery images={property.images} />
        </div>
      </section>

      <section className="pb-20 bg-bg">
        <div className="container-editorial grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 xl:col-span-8 space-y-12">
            <Reveal>
              <h2 className="font-serif text-3xl mb-4 text-charcoal">
                About this property
              </h2>
              <p className="text-lg text-stone leading-relaxed">
                {property.description}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-3xl mb-6 text-charcoal">
                Specifications
              </h2>
              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {property.specs.bedrooms !== undefined ? (
                  <Spec
                    label="Bedrooms"
                    value={String(property.specs.bedrooms)}
                  />
                ) : null}
                {property.specs.bathrooms !== undefined ? (
                  <Spec
                    label="Bathrooms"
                    value={String(property.specs.bathrooms)}
                  />
                ) : null}
                {property.specs.floorAreaSqm !== undefined ? (
                  <Spec
                    label="Floor area"
                    value={`${formatNumber(property.specs.floorAreaSqm)} m²`}
                  />
                ) : null}
                {property.specs.plotAreaSqm !== undefined ? (
                  <Spec
                    label="Plot area"
                    value={`${formatNumber(property.specs.plotAreaSqm)} m²`}
                  />
                ) : null}
                {property.specs.yearBuilt !== undefined ? (
                  <Spec
                    label="Year built"
                    value={String(property.specs.yearBuilt)}
                  />
                ) : null}
                {property.specs.parkingSpaces !== undefined ? (
                  <Spec
                    label="Parking"
                    value={String(property.specs.parkingSpaces)}
                  />
                ) : null}
                <Spec label="Type" value={categoryLabel(property.category)} />
              </dl>
            </Reveal>

            {property.amenities.length > 0 ? (
              <Reveal>
                <h2 className="font-serif text-3xl mb-4 text-charcoal">Amenities</h2>
                <ul className="flex flex-wrap gap-2">
                  {property.amenities.map((a) => (
                    <li
                      key={a}
                      className="border border-charcoal/15 px-3 py-1.5 text-sm text-stone"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            {property.features.length > 0 ? (
              <Reveal>
                <h2 className="font-serif text-3xl mb-4 text-charcoal">Features</h2>
                <ul className="grid sm:grid-cols-2 gap-2 text-stone">
                  {property.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-bronze" aria-hidden>
                        —
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            <Reveal>
              <h2 className="font-serif text-3xl mb-4 text-charcoal">Location</h2>
              {hasCoords ? (
                <div className="aspect-[16/9] border border-charcoal/10 bg-surface flex items-center justify-center text-stone text-sm">
                  Map available at {property.location.latitude},{" "}
                  {property.location.longitude}
                </div>
              ) : (
                <div className="border border-dashed border-charcoal/20 bg-surface p-8 text-stone text-sm leading-relaxed">
                  A map will appear when a verified address or coordinates are
                  provided for this listing.
                  <p className="mt-2 text-charcoal">
                    {[property.location.city, property.location.country]
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                </div>
              )}
            </Reveal>
          </div>

          <aside className="lg:col-span-5 xl:col-span-4">
            <div className="border border-charcoal/10 bg-surface p-6 md:p-8 sticky top-28">
              <h2 className="font-serif text-2xl mb-2 text-charcoal">
                Inquire about this property
              </h2>
              <p className="text-sm text-stone mb-6">
                This form references the selected listing automatically.
              </p>
              <PropertyInquiryForm
                propertyId={property.id}
                propertySlug={property.slug}
                propertyTitle={property.title}
              />
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="py-16 md:py-24 bg-surface border-t border-charcoal/10">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl mb-10 text-charcoal">
              Related properties
            </h2>
            <PropertyGrid properties={related} />
          </div>
        </section>
      ) : null}
    </article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-charcoal/10 pt-4">
      <dt className="text-xs text-stone">{label}</dt>
      <dd className="mt-2 text-lg text-charcoal">{value}</dd>
    </div>
  );
}
