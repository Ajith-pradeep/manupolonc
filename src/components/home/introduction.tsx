"use client";

import Image from "next/image";
import {
  Reveal,
  ImageReveal,
  Stagger,
  StaggerItem,
} from "@/components/animations/reveal";
import { educationTimeline, profileHighlight } from "@/data/content";
import { homePortrait } from "@/data/home-story";

export function HomeIntroduction() {
  return (
    <section className="bg-ivory section-pad border-y border-charcoal/8">
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 mb-14">
          <Reveal className="lg:col-span-5">
            <p className="text-sm font-medium text-bronze mb-3">Origins</p>
            <h2 className="font-serif text-3xl md:text-4xl text-balance">
              From Angola to Dubai
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.08}>
            <p className="text-lg text-stone leading-relaxed">
              {profileHighlight.summary} Founder of{" "}
              <span className="text-charcoal font-medium">
                No Competition Infinity Gaming
              </span>{" "}
              and{" "}
              <span className="text-charcoal font-medium">
                No Competition Infinity Real Estate
              </span>
              .
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          <ImageReveal className="lg:col-span-4 relative min-h-[280px] overflow-hidden bg-paper">
            <Image
              src={homePortrait.wide}
              alt={homePortrait.alt}
              fill
              sizes="33vw"
              className="object-cover object-[60%_center]"
            />
          </ImageReveal>

          <Stagger className="lg:col-span-8 grid sm:grid-cols-3 gap-0 border border-charcoal/10 bg-paper">
            {educationTimeline.map((item, i) => (
              <StaggerItem key={item.id}>
                <div
                  className={`h-full p-6 md:p-7 ${
                    i > 0 ? "sm:border-l border-charcoal/10" : ""
                  } border-t sm:border-t-0 border-charcoal/10 first:border-t-0`}
                >
                  <p className="text-xs text-bronze mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-sm text-charcoal leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
