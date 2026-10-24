import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-medium uppercase tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55">
          {description}
        </p>
      ) : null}
    </div>
  );
}
