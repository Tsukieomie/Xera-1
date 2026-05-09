export type EpistemicTier = "fact" | "claim" | "assumption" | "unknown";
export type EvidenceType = "document" | "image" | "testimony" | "physical" | "digital" | "osint" | "record";

export const EVIDENCE_TYPES: { value: EvidenceType; label: string }[] = [
  { value: "document", label: "Document" },
  { value: "image", label: "Image" },
  { value: "testimony", label: "Testimony" },
  { value: "physical", label: "Physical" },
  { value: "digital", label: "Digital trace" },
  { value: "osint", label: "OSINT" },
  { value: "record", label: "Public record" },
];

export const EPISTEMIC_TIERS: { value: EpistemicTier; label: string; help: string }[] = [
  { value: "fact", label: "Fact", help: "Verified by primary source or direct observation." },
  { value: "claim", label: "Claim", help: "Asserted by a source, not yet independently corroborated." },
  { value: "assumption", label: "Assumption", help: "Working premise; treat as provisional." },
  { value: "unknown", label: "Unknown", help: "Open question; explicitly tracked as missing." },
];

export const RELIABILITY_LABELS = ["", "E — unreliable", "D — doubtful", "C — fair", "B — usually reliable", "A — reliable"];
export const RELEVANCE_LABELS = ["", "Low", "Below avg", "Moderate", "High", "Critical"];

export function safeParseTags(raw: string | null | undefined): string[] {
  try {
    const parsed = JSON.parse(raw || "[]");
    return Array.isArray(parsed) ? parsed.filter(Boolean).map(String) : [];
  } catch {
    return [];
  }
}
export function safeParseIds(raw: string | null | undefined): string[] {
  try {
    const parsed = JSON.parse(raw || "[]");
    return Array.isArray(parsed) ? parsed.filter(Boolean).map(String) : [];
  } catch {
    return [];
  }
}

export function epistemicColor(tier: string): string {
  switch (tier) {
    case "fact": return "bg-[hsl(var(--teal-soft))] text-[hsl(var(--teal))] border-[hsl(var(--teal)/0.4)]";
    case "claim": return "bg-[hsl(var(--amber-soft))] text-[hsl(var(--primary))] border-[hsl(var(--primary)/0.4)]";
    case "assumption": return "bg-muted text-muted-foreground border-border";
    case "unknown": return "bg-destructive/10 text-destructive border-destructive/40";
    default: return "bg-muted";
  }
}
