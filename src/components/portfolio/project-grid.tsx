"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import type { Project, ProjectCategory } from "@/types/project";
import { cn } from "@/lib/utils";

const labels: Record<ProjectCategory | "all", string> = {
  all: "All",
  venture: "Ventures",
  "real-estate": "Real Estate",
  business: "Business",
  community: "Community",
  other: "Other",
};

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ["all" as const, ...Array.from(set)];
  }, [projects]);

  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  if (projects.length === 0) {
    return (
      <div className="border border-dashed border-charcoal/20 bg-paper px-8 py-20 text-center">
        <h2 className="font-serif text-3xl mb-3">No projects published yet</h2>
        <p className="text-stone max-w-md mx-auto">
          Verified ventures and portfolio entries will appear here. Add items in{" "}
          <code className="text-sm">src/data/projects.ts</code>.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 mb-12"
        role="group"
        aria-label="Filter projects"
      >
        {categories.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={active}
              className={cn(
                "px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] border transition-colors",
                active
                  ? "border-bronze bg-bronze text-ivory"
                  : "border-charcoal/15 text-stone hover:border-bronze hover:text-bronze",
              )}
            >
              {labels[cat]}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-stone py-12">No projects in this category.</p>
      ) : (
        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => {
            const image = project.images[0];
            return (
              <StaggerItem key={project.id}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-ivory-deep">
                    {image ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    ) : null}
                  </div>
                  <div className="mt-5 flex justify-between gap-3">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-bronze mb-2">
                        {labels[project.category]}
                        {project.isPlaceholder ? " · Placeholder" : ""}
                      </p>
                      <h2 className="font-serif text-2xl group-hover:text-bronze transition-colors">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-sm text-stone line-clamp-2">
                        {project.summary}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-stone group-hover:text-bronze shrink-0 mt-1"
                    />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      )}
    </div>
  );
}
