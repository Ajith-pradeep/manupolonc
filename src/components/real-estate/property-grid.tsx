"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import { PropertyCard } from "@/components/real-estate/property-card";
import type { Property } from "@/types/property";

export function FeaturedPropertyGrid({ properties }: { properties: Property[] }) {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {properties.map((p, i) => (
        <Reveal key={p.id} delay={i * 0.05}>
          <PropertyCard property={p} priority={i === 0} />
        </Reveal>
      ))}
    </div>
  );
}

export function PropertyGrid({ properties }: { properties: Property[] }) {
  return (
    <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <StaggerItem key={property.id}>
          <PropertyCard property={property} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
