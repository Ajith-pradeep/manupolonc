"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { mediaGalleryItems, homePortrait } from "@/data/home-story";

type GalleryItem = (typeof mediaGalleryItems)[number];

function GalleryCard({ item, priority = false }: { item: GalleryItem; priority?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="relative isolate h-[260px] w-[200px] shrink-0 overflow-hidden bg-surface-2 sm:h-[300px] sm:w-[230px] md:h-[340px] md:w-[260px]"
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.02 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={item.image}
        alt={`${item.label} — ${homePortrait.alt}`}
        fill
        sizes="260px"
        priority={priority}
        className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
        style={{ objectPosition: item.imagePosition }}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <p className="absolute inset-x-0 bottom-0 z-[2] p-5 text-xs uppercase tracking-[0.16em] text-white">
        {item.label}
      </p>
    </motion.article>
  );
}

function MarqueeRow({
  items,
  direction,
  speed = 32,
}: {
  items: GalleryItem[];
  direction: "left" | "right";
  speed?: number;
}) {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const segmentWidth = useRef(0);
  const [ready, setReady] = useState(false);
  const loop = useMemo(() => [...items, ...items, ...items], [items]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => {
      segmentWidth.current = el.scrollWidth / 3;
      x.set(direction === "right" ? -segmentWidth.current : 0);
      setReady(true);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [direction, items, x]);

  useAnimationFrame((_, delta) => {
    if (reduceMotion || !ready) return;
    const width = segmentWidth.current;
    if (!width) return;
    const deltaPx = (speed * delta) / 1000;
    let next = x.get() + (direction === "left" ? -deltaPx : deltaPx);
    if (direction === "left" && next <= -width) next += width;
    if (direction === "right" && next >= 0) next -= width;
    x.set(next);
  });

  if (reduceMotion) {
    return (
      <div className="flex gap-3 overflow-x-auto">
        {items.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <motion.div ref={trackRef} className="flex w-max gap-3" style={{ x }}>
        {loop.map((item, i) => (
          <GalleryCard key={`${item.id}-${i}`} item={item} priority={i < 2} />
        ))}
      </motion.div>
    </div>
  );
}

export function MediaGallery() {
  const mid = Math.ceil(mediaGalleryItems.length / 2);
  const topRow = mediaGalleryItems.slice(0, mid);
  const bottomRow = [...mediaGalleryItems.slice(mid)].reverse();
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-stack bg-black py-20 md:py-28">
      <div className="container-editorial relative z-10 mb-12 md:mb-16">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-4"
        >
          Gallery
        </motion.p>
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-medium uppercase tracking-[-0.03em] text-white md:text-5xl"
        >
          Presence
        </motion.h2>
      </div>

      <motion.div
        className="relative z-0 overflow-hidden"
        initial={reduceMotion ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="media-marquee-fade space-y-3">
          <MarqueeRow items={topRow} direction="left" speed={36} />
          <MarqueeRow items={bottomRow} direction="right" speed={30} />
        </div>
        <div className="media-marquee-edge media-marquee-edge--left" aria-hidden />
        <div className="media-marquee-edge media-marquee-edge--right" aria-hidden />
      </motion.div>
    </section>
  );
}
