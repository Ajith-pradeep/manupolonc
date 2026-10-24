"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PropertyImage } from "@/types/property";
import { cn } from "@/lib/utils";

export function PropertyGallery({ images }: { images: PropertyImage[] }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = images[index] ?? images[0];

  if (!current) {
    return (
      <div className="aspect-[16/10] bg-surface-2 flex items-center justify-center text-stone">
        No images available
      </div>
    );
  }

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  return (
    <div>
      <div className="relative isolate aspect-[16/10] overflow-hidden bg-surface-2">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.src}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white text-black hover:bg-white/90"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white text-black hover:bg-white/90"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
            <p className="absolute bottom-3 right-3 z-10 bg-black/80 px-2.5 py-1 text-xs tracking-wide text-white">
              {index + 1} / {images.length}
            </p>
          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div
          className="mt-3 flex gap-2 overflow-x-auto pb-1"
          role="tablist"
          aria-label="Property image thumbnails"
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden border-2 transition-colors",
                i === index ? "border-bronze" : "border-transparent opacity-70 hover:opacity-100",
              )}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
