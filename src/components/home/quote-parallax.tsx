"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "@/components/animations/reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function QuoteParallax() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [40, -40],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    reduceMotion ? [1, 1, 1, 1] : [0.85, 1, 1, 0.85],
  );

  return (
    <section
      ref={ref}
      className="section-stack border-y border-white/10 bg-black px-5 py-24 md:py-32"
    >
      <motion.div style={{ y, opacity }} className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mb-8 text-xs uppercase tracking-[0.28em] text-white/40"
        >
          Vision
        </motion.p>

        <TextReveal
          text="Simulation, AI, and digital twins — turned into operational capability in the physical world."
          as="h2"
          className="text-2xl font-medium uppercase leading-[1.2] tracking-[-0.02em] text-white md:text-4xl lg:text-5xl"
          delay={0.08}
        />

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-10 text-xs uppercase tracking-[0.2em] text-white/35"
        >
          Manuel Zau Polo · Gulf News 2026
        </motion.p>
      </motion.div>
    </section>
  );
}
