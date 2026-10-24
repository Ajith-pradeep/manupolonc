"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { carouselSlides, homePortrait } from "@/data/home-story";

const ease = [0.22, 1, 0.36, 1] as const;

export function ScrollPortraits() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const total = carouselSlides.length;
  const slide = carouselSlides[active];
  const contentRight = slide.contentAlign === "right";

  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => (i + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => go(1), 7000);
    return () => window.clearInterval(id);
  }, [go, reduceMotion, active]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -48) go(1);
    else if (info.offset.x > 48) go(-1);
  };

  return (
    <section className="section-stack relative min-h-[56svh] md:min-h-[60svh] bg-black">
      <div className="media-clip">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.55, ease }}
            className="absolute inset-y-0 right-0 w-full md:w-[70%] lg:w-[68%]"
          >
            <Image
              src={slide.image}
              alt={`${slide.label} — ${homePortrait.alt}`}
              fill
              quality={95}
              sizes="(max-width: 768px) 100vw, 68vw"
              className="object-cover"
              style={{ objectPosition: slide.imagePosition }}
              priority={active === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Solid black column + soft bleed into the photo (matches reference) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[38%] bg-black max-md:w-[28%]" />
        <div
          className="pointer-events-none absolute inset-y-0 left-[28%] z-[1] w-[55%] max-md:left-[18%] md:left-[34%] md:w-[42%]"
          style={{
            background:
              "linear-gradient(to right, #000 0%, rgba(0,0,0,0.88) 18%, rgba(0,0,0,0.45) 48%, rgba(0,0,0,0.12) 75%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[30%]"
          style={{
            background:
              "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.55) 45%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[36%]"
          style={{
            background:
              "linear-gradient(to top, #000 0%, rgba(0,0,0,0.65) 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="container-editorial relative z-10 flex min-h-[56svh] flex-col justify-between py-12 md:min-h-[60svh] md:py-14">
        <LayoutGroup>
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-white/10 pb-6">
            {carouselSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className="relative pb-2"
              >
                <span
                  className={`text-xs uppercase tracking-[0.2em] transition-colors ${
                    i === active
                      ? "text-white"
                      : "text-white/35 hover:text-white/70"
                  }`}
                >
                  {s.label}
                </span>
                {i === active ? (
                  <motion.span
                    layoutId={reduceMotion ? undefined : "chapter-line"}
                    className="absolute inset-x-0 bottom-0 h-px bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                ) : null}
              </button>
            ))}
          </div>
        </LayoutGroup>

        <motion.div
          className={`max-w-xl cursor-grab active:cursor-grabbing ${
            contentRight ? "md:ml-auto md:text-right" : ""
          }`}
          drag={reduceMotion ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={onDragEnd}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease }}
            >
              <p className="mb-4 text-xs tabular-nums tracking-[0.2em] text-white/40">
                {slide.index} / {String(total).padStart(2, "0")}
              </p>
              <h2 className="text-5xl font-medium uppercase tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
                {slide.title}
              </h2>
              <p
                className={`mt-6 max-w-md text-base leading-relaxed text-white/60 md:text-lg ${
                  contentRight ? "md:ml-auto" : ""
                }`}
              >
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div
          className={`flex items-center gap-4 ${
            contentRight ? "md:justify-end" : ""
          }`}
        >
          <motion.button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            whileHover={reduceMotion ? undefined : { scale: 1.06 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            className="flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-black"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M15 18 9 12l6-6" />
            </svg>
          </motion.button>
          <motion.button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            whileHover={reduceMotion ? undefined : { scale: 1.06 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            className="flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-black"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="m9 18 6-6-6-6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
