"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/animations/reveal";
import { getFeaturedProperties } from "@/lib/properties";
import { formatCurrency } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function RealEstateFeature() {
  const reduceMotion = useReducedMotion();
  const properties = getFeaturedProperties(3);

  return (
    <section className="section-stack bg-black py-20 md:py-28">
      <div className="container-editorial">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-4"
            >
              Real Estate
            </motion.p>
            <TextReveal
              text="Property"
              as="h2"
              className="text-4xl font-medium uppercase tracking-[-0.03em] text-white md:text-5xl"
            />
          </div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <Button href="/real-estate" variant="outline" size="lg">
              View all
            </Button>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {properties.map((property, i) => {
            const image = property.images[0];
            const price =
              property.transactionType === "rent"
                ? `${formatCurrency(property.price, property.currency)} / mo`
                : formatCurrency(property.price, property.currency);

            return (
              <motion.div
                key={property.id}
                initial={reduceMotion ? false : { opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6%" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease }}
                whileHover={reduceMotion ? undefined : { y: -8 }}
              >
                <Link
                  href={`/real-estate/${property.slug}`}
                  className="group block"
                >
                  <div className="relative isolate aspect-[4/5] overflow-hidden bg-surface-2">
                    {image ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : null}
                    <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 z-[2] p-5 md:p-6">
                      <p className="text-[0.65rem] uppercase tracking-[0.16em] text-white/50">
                        {property.location.city}
                      </p>
                      <h3 className="mt-2 text-lg font-medium uppercase tracking-[-0.02em] text-white">
                        {property.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/70">{price}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
