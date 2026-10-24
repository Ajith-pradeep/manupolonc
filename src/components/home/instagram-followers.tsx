"use client";

import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/animations/reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const PROFILE = {
  handle: "@manupolonc",
  url: "https://www.instagram.com/manupolonc/",
  followers: 955_000,
  brands: [
    { label: "NC Infinity Gaming", handle: "@ncinfinitygaming" },
    { label: "NC Infinity Real Estate", handle: "@ncinfinityrealestate" },
  ],
} as const;

const IG_FEED = [
  {
    src: "/images/ig-cybertruck-1.jpg",
    alt: "Manuel Zau Polo in a Cybertruck",
    span: "md:row-span-2",
  },
  {
    src: "/images/ig-lv-ship.jpg",
    alt: "Manuel Zau Polo at the Louis Vuitton ship installation",
    span: "",
  },
  {
    src: "/images/ig-golf-swing.jpg",
    alt: "Manuel Zau Polo practicing golf",
    span: "",
  },
  {
    src: "/images/ig-cybertruck-2.jpg",
    alt: "Manuel Zau Polo inside a Cybertruck",
    span: "",
  },
  {
    src: "/images/ig-range-rover.jpg",
    alt: "Manuel Zau Polo with a Range Rover",
    span: "md:row-span-2",
  },
  {
    src: "/images/ig-golf-academy.jpg",
    alt: "Manuel Zau Polo at Peter Cowen Academy Dubai",
    span: "",
  },
] as const;

function formatFollowers(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) {
    const k = n / 1_000;
    return Number.isInteger(k) ? `${k}K` : `${k.toFixed(0)}K`;
  }
  return String(n);
}

function AnimatedFollowers({ value }: { value: number }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 55,
    damping: 28,
    mass: 0.8,
  });
  const [label, setLabel] = useState(() =>
    reduceMotion ? formatFollowers(value) : "0",
  );

  useMotionValueEvent(spring, "change", (latest) => {
    setLabel(formatFollowers(Math.round(latest)));
  });

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      motionValue.set(value);
      setLabel(formatFollowers(value));
      return;
    }
    motionValue.set(0);
    const id = requestAnimationFrame(() => motionValue.set(value));
    return () => cancelAnimationFrame(id);
  }, [inView, motionValue, reduceMotion, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {label}
    </span>
  );
}

export function InstagramFollowers() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 30%, rgba(255,255,255,0.05), transparent 65%)",
        }}
      />

      <div className="container-editorial relative z-10 py-20 md:py-28">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.5, ease }}
              className="eyebrow mb-5"
            >
              Instagram · Gaming & lifestyle
            </motion.p>

            <TextReveal
              text="Nearly a million strong"
              as="h2"
              className="text-4xl font-medium uppercase tracking-[-0.03em] text-white md:text-5xl lg:text-6xl"
            />

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15, ease }}
              className="mt-5 max-w-md text-base text-white/55 md:text-lg"
            >
              {PROFILE.handle} — moments from gaming, golf, and life in Dubai.
            </motion.p>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
            className="flex flex-wrap items-end gap-8 md:gap-12"
          >
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                Followers
              </p>
              <p className="mt-1 text-4xl font-medium tracking-[-0.03em] text-white md:text-5xl">
                <AnimatedFollowers value={PROFILE.followers} />
              </p>
            </div>
            <Button href={PROFILE.url} external size="lg">
              Follow
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.07, delayChildren: 0.1 },
            },
          }}
          className="mt-14 grid grid-cols-2 gap-2 sm:gap-3 md:mt-16 md:grid-cols-3 md:grid-rows-2 md:gap-3 lg:h-[70vh] lg:max-h-[820px]"
        >
          {IG_FEED.map((item) => (
            <motion.a
              key={item.src}
              href={PROFILE.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease },
                },
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { scale: 1.015, transition: { duration: 0.35 } }
              }
              className={`group relative isolate block min-h-[220px] overflow-hidden bg-white/5 ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                quality={90}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
            </motion.a>
          ))}
        </motion.div>

        <motion.ul
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/40"
        >
          {PROFILE.brands.map((brand) => (
            <li key={brand.handle}>
              <span className="text-white/55">{brand.label}</span>
              <span className="mx-2 text-white/25">·</span>
              {brand.handle}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
