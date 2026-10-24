import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { ContactCta } from "@/components/home/contact-cta";
import { Button } from "@/components/ui/button";
import {
  SourceNote,
  VerificationBadge,
} from "@/components/ui/verification-badge";
import { mediaItems, technologyPage } from "@/data/content";

export const metadata: Metadata = {
  title: "Technology & Innovation",
  description:
    "AI, digital twins, simulation, and robotics — technology focus areas associated with Manuel Zau Polo and No Competition Infinity Gaming.",
  alternates: { canonical: "/technology" },
};

const { hero, intro, pillars, partnership, applications } = technologyPage;

export default function TechnologyPage() {
  return (
    <>
      {/* Visual hero */}
      <section className="section-stack relative flex min-h-[58svh] items-end bg-black md:min-h-[68svh]">
        <div className="media-clip">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[65%_center] opacity-55"
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[35%]"
            style={{
              background:
                "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.7) 45%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[45%]"
            style={{
              background:
                "linear-gradient(to top, #000 0%, rgba(0,0,0,0.8) 40%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[45%]"
            style={{
              background:
                "linear-gradient(to right, #000 0%, rgba(0,0,0,0.55) 50%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[22%]"
            style={{
              background:
                "linear-gradient(to left, #000 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
            }}
          />
        </div>
        <div className="container-editorial relative z-10 pb-14 pt-32 md:pb-20 md:pt-40">
          <Reveal>
            <p className="mb-3 text-sm font-medium text-gold">{hero.eyebrow}</p>
            <h1 className="max-w-3xl text-balance font-serif text-4xl text-charcoal md:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-muted">
              {hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#pillars" size="lg">
                Explore focus areas
              </Button>
              <Button href="#partnership" variant="outline" size="lg">
                View partnership
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro narrative */}
      <section className="section-pad bg-bg border-b border-white/10">
        <div className="container-editorial grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="text-sm font-medium text-gold mb-3">Approach</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream text-balance">
              {intro.title}
            </h2>
          </Reveal>
          <div className="lg:col-span-7 space-y-5">
            {intro.body.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 28)}>
                <p className="text-cream-muted text-base md:text-lg leading-relaxed">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image-led pillars */}
      <section id="pillars" className="section-pad bg-surface scroll-mt-24">
        <div className="container-editorial">
          <Reveal>
            <p className="text-sm font-medium text-gold mb-3">Focus areas</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream max-w-2xl mb-12 md:mb-14">
              Four pillars of the technology agenda.
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.id} delay={i * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden border border-white/10 bg-surface-2">
                  <div className="relative isolate aspect-[16/10] overflow-hidden bg-surface-3">
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-surface-2 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="mb-3">
                      <VerificationBadge level={pillar.verification} />
                    </div>
                    <h3 className="font-serif text-2xl text-cream mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gold mb-3">{pillar.summary}</p>
                    <p className="text-cream-muted text-sm md:text-base leading-relaxed flex-1">
                      {pillar.body}
                    </p>
                    <div className="mt-5 pt-4 border-t border-white/10">
                      <SourceNote
                        sourceLabel={pillar.sourceLabel}
                        sourceUrl={
                          "sourceUrl" in pillar ? pillar.sourceUrl : undefined
                        }
                        note={"note" in pillar ? pillar.note : undefined}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership feature */}
      <section
        id="partnership"
        className="section-pad bg-bg border-y border-white/10 scroll-mt-24"
      >
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative isolate aspect-[4/5] overflow-hidden bg-surface-2 sm:aspect-[5/6]">
              <Image
                src={partnership.image}
                alt={partnership.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_20%]"
              />
            </div>
            <div className="relative isolate mt-3 aspect-[21/9] overflow-hidden bg-surface-2">
              <Image
                src={partnership.wideImage}
                alt={partnership.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[55%_center]"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-sm font-medium text-gold mb-3">
                {partnership.eyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-cream text-balance mb-5">
                {partnership.title}
              </h2>
              <div className="mb-4">
                <VerificationBadge level={partnership.verification} />
              </div>
              <p className="text-cream-muted text-base md:text-lg leading-relaxed">
                {partnership.body}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-white/10 py-8">
                {partnership.highlights.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs text-stone mb-1.5">{item.label}</dt>
                    <dd className="text-cream font-medium text-sm md:text-base">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-6">
                <SourceNote
                  sourceLabel={partnership.sourceLabel}
                  sourceUrl={partnership.sourceUrl}
                  note={partnership.note}
                />
              </div>
              <div className="mt-8">
                <Button
                  href={partnership.sourceUrl}
                  external
                  variant="outline"
                >
                  Read Gulf News coverage
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-pad bg-surface">
        <div className="container-editorial">
          <Reveal>
            <p className="text-sm font-medium text-gold mb-3">Applications</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream max-w-2xl mb-4">
              Where the platform is aimed.
            </h2>
            <p className="text-cream-muted max-w-xl mb-12 leading-relaxed">
              Sectors cited in press coverage as areas under study — presented
              as reported ambitions, not live deployment claims.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((app, i) => (
              <Reveal key={app.title} delay={i * 0.04}>
                <article className="group h-full">
                  <div className="relative isolate mb-4 aspect-[4/5] overflow-hidden bg-surface-2">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <h3 className="font-serif text-xl text-cream mb-2">
                    {app.title}
                  </h3>
                  <p className="text-sm text-cream-muted leading-relaxed">
                    {app.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="section-pad bg-bg border-t border-white/10">
        <div className="container-editorial">
          <Reveal>
            <p className="text-sm font-medium text-gold mb-3">Coverage</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream max-w-2xl mb-12">
              Selected reporting.
            </h2>
          </Reveal>

          <div className="space-y-0 border-t border-white/10">
            {mediaItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.04}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 border-b border-white/10 py-6 hover:bg-white/[0.02] transition-colors -mx-2 px-2"
                >
                  <span className="text-xs text-stone shrink-0 sm:w-40">
                    {item.outlet}
                    {item.date ? (
                      <span className="block mt-1 text-stone/70">
                        {item.date}
                      </span>
                    ) : null}
                  </span>
                  <span className="flex-1">
                    <span className="font-medium text-cream group-hover:text-gold transition-colors">
                      {item.title}
                    </span>
                    <span className="block mt-2 text-sm text-cream-muted leading-relaxed max-w-2xl">
                      {item.summary}
                    </span>
                  </span>
                  <span className="text-gold text-sm shrink-0 hidden sm:inline">
                    →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <p className="text-sm text-stone max-w-xl leading-relaxed">
              Capacity figures and commercial terms in press reflect reported
              contractual language — not independently audited deployment
              outcomes on this site.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
