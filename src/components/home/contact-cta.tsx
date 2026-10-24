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
import { TextReveal } from "@/components/animations/reveal";
import { siteConfig } from "@/lib/site-config";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactCta() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-5%", "5%"],
  );

  return (
    <section ref={ref} className="panel-bleed bg-black">
      <div className="media-clip">
        <motion.div style={{ y: imageY }} className="absolute inset-[-3%]">
          <Image
            src="/images/manuel-contact-meeting.jpg"
            alt="Manuel Zau Polo in a meeting"
            fill
            quality={95}
            sizes="100vw"
            className="object-cover object-[center_35%] opacity-45"
          />
        </motion.div>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[40%]"
          style={{
            background:
              "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.8) 35%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[48%]"
          style={{
            background:
              "linear-gradient(to top, #000 0%, rgba(0,0,0,0.85) 40%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/35" />
      </div>

      <div className="container-editorial relative z-10 w-full pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="max-w-2xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.5, ease }}
            className="eyebrow mb-5"
          >
            Contact
          </motion.p>

          <TextReveal
            text={"Let's talk"}
            as="h2"
            className="text-4xl font-medium uppercase tracking-[-0.03em] text-white md:text-6xl lg:text-7xl"
          />

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mt-6 max-w-md text-base text-white/55 md:text-lg"
          >
            Partnerships, technology, real estate, or media.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.28, ease }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button href="/contact" size="lg">
              {siteConfig.cta.contact.label}
            </Button>
            <Button href="/real-estate" variant="outline" size="lg">
              Explore
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
