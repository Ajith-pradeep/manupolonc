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
import { siteConfig } from "@/lib/site-config";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.35 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduceMotion ? "0%" : "6%"],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduceMotion ? 1 : 1.08],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduceMotion ? "0%" : "16%"],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.65],
    [1, reduceMotion ? 1 : 0.12],
  );
  const veilOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, reduceMotion ? 1 : 0.7],
  );

  return (
    <section
      ref={ref}
      className="section-stack relative h-[100svh] min-h-[640px] bg-black"
    >
      <div className="media-clip">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-y-0 right-0 w-full origin-center md:w-[88%] lg:w-[80%]"
          initial={
            reduceMotion ? false : { opacity: 0, scale: 1.12, x: 40 }
          }
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.45, ease }}
        >
          <Image
            src="/images/manuel-hero-cybertruck.jpg"
            alt="Manuel Zau Polo"
            fill
            priority
            quality={98}
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover object-[58%_22%]"
          />
        </motion.div>

        <motion.div
          style={{ opacity: veilOpacity }}
          className="pointer-events-none absolute inset-0 z-[1]"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
        >
          <div
            className="absolute inset-x-0 top-0 h-[45%]"
            style={{
              background:
                "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.85) 28%, rgba(0,0,0,0.35) 62%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[52%]"
            style={{
              background:
                "linear-gradient(to top, #000 0%, rgba(0,0,0,0.9) 32%, rgba(0,0,0,0.4) 68%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-y-0 left-0 w-[68%] md:w-[58%]"
            style={{
              background:
                "linear-gradient(to right, #000 0%, rgba(0,0,0,0.9) 24%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 80%, transparent 100%)",
            }}
          />
        </motion.div>
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-editorial relative z-10 flex h-full flex-col justify-end pb-16 md:pb-20 lg:pb-24"
        variants={reduceMotion ? undefined : container}
        initial={reduceMotion ? false : "hidden"}
        animate="show"
      >
        <motion.div variants={reduceMotion ? undefined : item}>
          <motion.p
            className="mb-5 text-xs uppercase tracking-[0.28em] text-white/55"
            initial={reduceMotion ? false : { opacity: 0, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, letterSpacing: "0.28em" }}
            transition={{ duration: 1, delay: 0.2, ease }}
          >
            {siteConfig.hero.eyebrow}
          </motion.p>
          <motion.span
            className="mb-6 block h-px origin-left bg-white/35"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            style={{ width: "4.5rem" }}
          />
        </motion.div>

        <h1 className="max-w-4xl text-[2.75rem] font-medium uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
          {reduceMotion ? (
            "Manuel Zau Polo"
          ) : (
            <>
              {["Manuel", "Zau", "Polo"].map((word, i) => (
                <motion.span
                  key={word}
                  className="mr-[0.28em] inline-block last:mr-0"
                  initial={{ opacity: 0, y: 48, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.48 + i * 0.18,
                    ease,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </>
          )}
        </h1>

        <motion.p
          variants={reduceMotion ? undefined : item}
          className="mt-6 max-w-md text-base text-white/65 md:text-lg"
        >
          {siteConfig.hero.headline}
        </motion.p>

        <motion.div
          variants={reduceMotion ? undefined : item}
          className="mt-10 flex flex-wrap gap-3"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 1.05, ease }}
          >
            <Button href={siteConfig.hero.primaryCta.href} size="lg">
              Learn more
            </Button>
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 1.18, ease }}
          >
            <Button
              href={siteConfig.hero.secondaryCta.href}
              variant="outline"
              size="lg"
            >
              Explore
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
