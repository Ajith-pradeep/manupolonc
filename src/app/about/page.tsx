import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { ContactCta } from "@/components/home/contact-cta";
import { InstagramFollowers } from "@/components/home/instagram-followers";
import {
  SourceNote,
  VerificationBadge,
} from "@/components/ui/verification-badge";
import {
  biographyClaims,
  educationTimeline,
  profileHighlight,
} from "@/data/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Manuel",
  description:
    "Manuel Zau Polo — Angolan entrepreneur based in Dubai. Education, background, and sourced profile highlights.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="section-stack relative flex min-h-[72svh] items-end bg-black md:min-h-[85svh]">
        <div className="media-clip">
          <Image
            src={siteConfig.about.portrait.src}
            alt={siteConfig.about.portrait.alt}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[70%_center] opacity-55"
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[38%]"
            style={{
              background:
                "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.75) 40%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[48%]"
            style={{
              background:
                "linear-gradient(to top, #000 0%, rgba(0,0,0,0.85) 42%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[62%] md:w-[55%]"
            style={{
              background:
                "linear-gradient(to right, #000 0%, rgba(0,0,0,0.9) 28%, rgba(0,0,0,0.45) 62%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[22%]"
            style={{
              background:
                "linear-gradient(to left, #000 0%, rgba(0,0,0,0.45) 50%, transparent 100%)",
            }}
          />
        </div>

        <div className="container-editorial relative z-10 w-full pb-14 pt-32 md:pb-20 md:pt-40">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/50">
              About
            </p>
            <h1 className="max-w-2xl text-balance text-4xl font-medium uppercase tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
              {siteConfig.about.headline}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
              {siteConfig.about.lead}
            </p>
            <dl className="mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-white/15 pt-8 text-sm">
              <div>
                <dt className="mb-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/40">
                  Born
                </dt>
                <dd className="font-medium text-white">
                  {profileHighlight.born} · {profileHighlight.origin}
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/40">
                  Based
                </dt>
                <dd className="font-medium text-white">
                  {profileHighlight.basedIn}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-editorial max-w-3xl">
          <Reveal>
            <h2 className="font-serif text-3xl mb-8 text-charcoal">
              Education & background
            </h2>
          </Reveal>
          <ol className="space-y-8">
            {educationTimeline.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.04}>
                <li className="flex gap-5">
                  <span className="text-sm text-stone shrink-0 w-6 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="mb-2">
                      <VerificationBadge level={item.verification} />
                    </div>
                    <p className="text-charcoal leading-relaxed">{item.text}</p>
                    <div className="mt-3">
                      <SourceNote
                        sourceLabel={item.sourceLabel}
                        note={item.note}
                      />
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-surface-2 border-t border-charcoal/10">
        <div className="container-editorial max-w-3xl space-y-10">
          <Reveal>
            <h2 className="font-serif text-3xl mb-2 text-charcoal">
              Profile highlights
            </h2>
            <p className="text-stone leading-relaxed">
              Statements are tagged by source strength — independently reported
              press versus profile-provided details.
            </p>
          </Reveal>

          {biographyClaims.map((claim, i) => (
            <Reveal key={claim.id} delay={i * 0.03}>
              <article className="border-t border-charcoal/10 pt-8">
                <VerificationBadge level={claim.verification} />
                <p className="mt-3 text-lg text-charcoal leading-relaxed">
                  {claim.text}
                </p>
                <div className="mt-3">
                  <SourceNote
                    sourceLabel={claim.sourceLabel}
                    sourceUrl={claim.sourceUrl}
                    note={claim.note}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <InstagramFollowers />
      <ContactCta />
    </>
  );
}
