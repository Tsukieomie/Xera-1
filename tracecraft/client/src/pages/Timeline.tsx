import { useMemo } from "react";
import { useActiveCase, useEvents, useEvidence } from "@/lib/caseHooks";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { safeParseIds } from "@/lib/types";

interface TimelineRow {
  id: string;
  date: string;
  title: string;
  description: string;
  certainty: string;
  source: "event" | "evidence";
  evidenceTitles?: string[];
}

export default function Timeline() {
  const { data: cases = [] } = useActiveCase();
  const c = cases[0];
  const { data: events = [] } = useEvents(c?.id);
  const { data: evidence = [] } = useEvidence(c?.id);

  const rows: TimelineRow[] = useMemo(() => {
    const evMap = new Map(evidence.map(e => [e.id, e]));
    const fromEvents: TimelineRow[] = events
      .filter(e => e.occurredAt)
      .map(e => ({
        id: `ev-${e.id}`,
        date: e.occurredAt,
        title: e.title,
        description: e.description || "",
        certainty: e.certainty,
        source: "event" as const,
        evidenceTitles: safeParseIds(e.evidenceIds).map(id => evMap.get(id)?.title || id),
      }));
    const fromEvidence: TimelineRow[] = evidence
      .filter(e => e.occurredAt && !events.some(ev => safeParseIds(ev.evidenceIds).includes(e.id)))
      .map(e => ({
        id: `evd-${e.id}`,
        date: e.occurredAt!,
        title: e.title,
        description: e.notes || "",
        certainty: e.epistemic === "fact" ? "confirmed" : e.epistemic === "claim" ? "reported" : "inferred",
        source: "evidence" as const,
      }));
    return [...fromEvents, ...fromEvidence].sort((a, b) => a.date.localeCompare(b.date));
  }, [events, evidence]);

  const groups = useMemo(() => {
    const map = new Map<string, TimelineRow[]>();
    rows.forEach(r => {
      const day = r.date.slice(0, 10);
      if (!map.has(day)) map.set(day, []);
      map.get(day)!.push(r);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [rows]);

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <div className="stamp ink-faint">Timeline</div>
        <h1 className="font-serif text-3xl leading-tight">Sequenced events and traces</h1>
        <p className="ink-muted max-w-xl text-sm leading-relaxed">
          Dated events and dated evidence appear here in order. Inferred and reported entries are marked
          distinctly from confirmed ones — sequence does not equal causation.
        </p>
      </header>

      {groups.length === 0 ? (
        <Card className="p-6 ink-muted text-sm">No dated entries yet.</Card>
      ) : (
        <ol className="relative" data-testid="list-timeline">
          {/* spine */}
          <span className="absolute left-[7.5rem] top-2 bottom-2 w-px bg-border md:block hidden" aria-hidden="true" />
          {groups.map(([day, items]) => (
            <li key={day} className="relative pb-8" data-testid={`timeline-day-${day}`}>
              <div className="md:grid md:grid-cols-[7.5rem_1fr] md:gap-6">
                <div className="stamp ink-faint pt-1">{day}</div>
                <div className="space-y-3 md:pl-6 relative">
                  {/* dot */}
                  <span className="hidden md:block absolute -left-[27px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" aria-hidden="true" />
                  {items.map(r => (
                    <Card key={r.id} className="paper p-4" data-testid={`timeline-row-${r.id}`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="stamp ink-faint tabular">{r.date.slice(11) || "—"}</span>
                            <Badge variant="outline" className={`stamp border ${
                              r.certainty === "confirmed" ? "border-[hsl(var(--teal)/0.5)] text-[hsl(var(--teal))]" :
                              r.certainty === "reported" ? "border-primary/40 text-primary" :
                              "border-border"
                            }`}>
                              {r.certainty}
                            </Badge>
                          </div>
                          <h3 className="font-serif text-base leading-snug">{r.title}</h3>
                          {r.description && <p className="text-sm ink-muted mt-1.5 leading-relaxed">{r.description}</p>}
                          {r.evidenceTitles && r.evidenceTitles.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1">
                              {r.evidenceTitles.map(t => (
                                <span key={t} className="stamp ink-faint">+ {t}</span>
                              ))}
                            </div>
                          )}
                        </div>
                        <span className="stamp ink-faint shrink-0">{r.source === "event" ? "event" : "evidence"}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
