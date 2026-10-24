"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem, TextReveal } from "@/components/animations/reveal";
import { profileHighlight } from "@/data/content";
import { aboutStats, homePortrait } from "@/data/home-story";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutDeep() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-3%", "3%"],
  );

  return (
    <section ref={ref} className="panel-bleed bg-black">
      <div className="media-clip">
        <motion.div style={{ y: imageY }} className="absolute inset-[-3%]">
          <Image
            src={homePortrait.mission}
            alt={homePortrait.alt}
            fill
            quality={98}
            sizes="100vw"
            className="object-cover object-[78%_center] opacity-20"
          />
        </motion.div>
        {/* Top + bottom fades only — keep mid-frame clear */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-black to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[68%] md:w-[58%]"
          style={{
            background:
              "linear-gradient(to right, #000 0%, rgba(0,0,0,0.88) 24%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.12) 80%, transparent 100%)",
          }}
        />
      </div>

      <div className="container-editorial relative z-10 w-full pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="max-w-2xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.55, ease }}
            className="eyebrow mb-5"
          >
            Mission
          </motion.p>

          <TextReveal
            text="From Angola to Dubai"
            as="h2"
            className="text-4xl font-medium uppercase tracking-[-0.03em] text-white md:text-5xl lg:text-6xl"
            delay={0.05}
          />

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg"
          >
            {profileHighlight.summary}
          </motion.p>

          <Stagger className="mt-10 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
            {aboutStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/40">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm font-medium text-white">{stat.value}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.35, ease }}
            className="mt-10"
          >
            <Button href="/about" size="lg" variant="outline">
              Learn more
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
