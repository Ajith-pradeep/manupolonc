import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "bg-bg pt-28 md:pt-32 pb-12 md:pb-16 border-b border-white/10",
        className,
      )}
    >
      <div className="container-editorial max-w-3xl">
        <Reveal y={18}>
          <p className="text-sm font-medium text-gold mb-3">{eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-balance text-cream">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-lg text-stone leading-relaxed">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
