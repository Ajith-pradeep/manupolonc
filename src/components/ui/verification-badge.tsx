import type { VerificationLevel } from "@/types/content";
import { verificationLabels } from "@/data/content";
import { cn } from "@/lib/utils";

const styles: Record<VerificationLevel, string> = {
  "independently-reported": "bg-gold text-on-light",
  "company-reported": "bg-surface-2 text-cream-muted border border-white/15",
  "self-reported": "bg-surface-2 text-cream-muted border border-white/15",
  "awaiting-verification":
    "bg-transparent text-stone border border-dashed border-white/20",
};

export function VerificationBadge({
  level,
  className,
}: {
  level: VerificationLevel;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-medium",
        styles[level],
        className,
      )}
    >
      {verificationLabels[level]}
    </span>
  );
}

export function SourceNote({
  sourceLabel,
  sourceUrl,
  note,
}: {
  sourceLabel: string;
  sourceUrl?: string;
  note?: string;
}) {
  return (
    <p className="text-xs text-stone leading-relaxed">
      Source:{" "}
      {sourceUrl ? (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-charcoal underline-offset-2 hover:underline hover:text-accent"
        >
          {sourceLabel}
        </a>
      ) : (
        <span className="text-charcoal">{sourceLabel}</span>
      )}
      {note ? <span className="block mt-1">{note}</span> : null}
    </p>
  );
}
