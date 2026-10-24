"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Property } from "@/types/property";
import {
  categoryLabel,
  cn,
  formatCurrency,
  formatNumber,
  listingStatusLabel,
} from "@/lib/utils";

function IconBed({ className }: { className?: string }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  );
}

function IconBath({ className }: { className?: string }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" />
      <line x1="17" x2="17" y1="19" y2="21" />
    </svg>
  );
}

function IconArea({ className }: { className?: string }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <path d="M21 3 14 10" />
      <path d="m3 21 7-7" />
    </svg>
  );
}

export function PropertyCard({
  property,
  priority = false,
}: {
  property: Property;
  priority?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const image = property.images[0];
  const priceLabel =
    property.transactionType === "rent"
      ? `${formatCurrency(property.price, property.currency)} / mo`
      : formatCurrency(property.price, property.currency);

  return (
    <motion.article
      className="group flex h-full flex-col"
      whileHover={reduceMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/real-estate/${property.slug}`}
        className="flex h-full flex-col focus-visible:outline-none"
      >
        <div className="relative isolate aspect-[4/3] overflow-hidden bg-surface-2">
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
          ) : null}
          <div className="absolute left-3 top-3 z-[2] flex flex-wrap gap-2">
            <span className="bg-black/80 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
              {listingStatusLabel(property.status)}
            </span>
            {property.isDemo ? (
              <span className="bg-white px-2.5 py-1 text-xs text-black">
                Showcase
              </span>
            ) : null}
          </div>
        </div>

        <div className="flex flex-1 flex-col pb-2 pt-4">
          <p className="mb-1 text-sm text-stone">
            {categoryLabel(property.category)} · {property.location.city}
          </p>
          <h3 className="font-serif text-xl text-charcoal transition-colors duration-300 group-hover:text-gold">
            {property.title}
          </h3>
          <p className="mt-1.5 text-base font-medium text-charcoal">
            {priceLabel}
          </p>

          <div className="mt-3 flex flex-wrap gap-4 text-sm text-stone">
            {property.specs.bedrooms !== undefined ? (
              <span className="inline-flex items-center gap-1.5">
                <IconBed />
                {property.specs.bedrooms}
              </span>
            ) : null}
            {property.specs.bathrooms !== undefined ? (
              <span className="inline-flex items-center gap-1.5">
                <IconBath />
                {property.specs.bathrooms}
              </span>
            ) : null}
            {property.specs.floorAreaSqm !== undefined ? (
              <span className="inline-flex items-center gap-1.5">
                <IconArea />
                {formatNumber(property.specs.floorAreaSqm)} m²
              </span>
            ) : property.specs.plotAreaSqm !== undefined ? (
              <span className="inline-flex items-center gap-1.5">
                <IconArea />
                {formatNumber(property.specs.plotAreaSqm)} m²
              </span>
            ) : null}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function PropertyCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse", className)}>
      <div className="aspect-[4/3] bg-surface-2" />
      <div className="pt-4 space-y-2">
        <div className="h-3 w-28 bg-surface-2" />
        <div className="h-6 w-3/4 bg-surface-2" />
        <div className="h-4 w-24 bg-surface-2" />
      </div>
    </div>
  );
}
