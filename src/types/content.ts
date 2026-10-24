/**
 * Content attribution helpers.
 * Prefer independently reported facts; label company- and self-reported claims clearly.
 */
export type VerificationLevel =
  | "independently-reported"
  | "company-reported"
  | "self-reported"
  | "awaiting-verification";

export interface SourcedClaim {
  id: string;
  text: string;
  verification: VerificationLevel;
  sourceLabel: string;
  sourceUrl?: string;
  note?: string;
}

export interface Venture {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  sectors: string[];
  role?: string;
  verification: VerificationLevel;
  sourceLabel: string;
  sourceUrl?: string;
  note?: string;
  href?: string;
}

export interface MediaItem {
  id: string;
  slug: string;
  title: string;
  outlet: string;
  date?: string;
  summary: string;
  url: string;
  verification: VerificationLevel;
}

export interface ImpactInitiative {
  id: string;
  title: string;
  description: string;
  verification: VerificationLevel;
  sourceLabel: string;
  note?: string;
}
