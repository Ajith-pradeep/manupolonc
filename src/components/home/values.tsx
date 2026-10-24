"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TextReveal } from "@/components/animations/reveal";
import { siteConfig } from "@/lib/site-config";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeValues() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-stack bg-black py-20 md:py-28">
      <div className="container-editorial">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="eyebrow mb-4"
        >
          Principles
        </motion.p>
        <TextReveal
          text="What drives us"
          as="h2"
          className="mb-14 text-4xl font-medium uppercase tracking-[-0.03em] text-white md:mb-16 md:text-5xl"
        />

        <div className="divide-y divide-white/10 border-y border-white/10">
          {siteConfig.values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={reduceMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease }}
              whileHover={
                reduceMotion ? undefined : { x: 8, transition: { duration: 0.25 } }
              }
              className="grid cursor-default gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
            >
              <motion.p
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08 }}
                className="text-xs tabular-nums tracking-[0.16em] text-white/35 md:col-span-1"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.p>
              <h3 className="text-xl font-medium uppercase tracking-[-0.02em] text-white md:col-span-3 md:text-2xl">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55 md:col-span-8 md:max-w-xl md:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
