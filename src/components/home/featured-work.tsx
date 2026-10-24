import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";
import type { Project } from "@/types/project";

function ProjectCard({ project }: { project: Project }) {
  const image = project.images[0];
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block focus-visible:outline-none"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ivory-deep">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : null}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-bronze mb-2">
            {project.category.replace("-", " ")}
            {project.isPlaceholder ? " · Placeholder" : ""}
          </p>
          <h3 className="font-serif text-2xl text-charcoal group-hover:text-bronze transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-stone leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>
        <ArrowUpRight
          className="shrink-0 text-stone group-hover:text-bronze transition-colors mt-1"
          size={20}
        />
      </div>
    </Link>
  );
}

export function FeaturedWork() {
  const projects = getFeaturedProjects(3);

  return (
    <section className="bg-paper py-24 md:py-32 border-y border-charcoal/8">
      <div className="container-editorial">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <SectionHeading
              eyebrow="Portfolio"
              title="Featured work & ventures"
              description="Data-driven entries you can extend without changing layout code. Placeholder items are clearly marked until verified."
            />
            <Button href="/portfolio" variant="outline" className="shrink-0 self-start md:self-auto">
              View Portfolio
            </Button>
          </div>
        </Reveal>

        {projects.length === 0 ? (
          <p className="text-stone">No verified projects published yet.</p>
        ) : (
          <Stagger className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}
