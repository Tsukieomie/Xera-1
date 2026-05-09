import { useMemo } from "react";
import { useActiveCase, useEvidence, useEvents, useHypotheses } from "@/lib/caseHooks";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Copy, FileDown, Sparkles } from "lucide-react";
import { safeParseIds } from "@/lib/types";
import type { Evidence, Hypothesis, Event } from "@shared/schema";

interface PlanItem {
  id: string;
  priority: "now" | "next" | "later";
  category: "corroborate" | "contradict" | "fill-gap" | "test-hypothesis" | "structure";
  title: string;
  rationale: string;
}

function buildPlan(evidence: Evidence[], hypotheses: Hypothesis[], events: Event[]): PlanItem[] {
  const items: PlanItem[] = [];
  const push = (i: PlanItem) => items.push(i);

  // 1. Source-discipline: claims with no URL or low reliability
  evidence
    .filter(e => e.epistemic === "claim" && (!(e.sourceUrl || "").trim() || e.reliability <= 2))
    .forEach(e => push({
      id: `corrob-${e.id}`,
      priority: "now",
      category: "corroborate",
      title: `Corroborate "${e.title}"`,
      rationale: !(e.sourceUrl || "").trim()
        ? "Single-source or uncited claim — find an independent source before relying on it."
        : "Source rated low reliability — seek a higher-confidence corroboration.",
    }));

  // 2. Unknowns flagged as evidence — drive them to fact or claim
  evidence.filter(e => e.epistemic === "unknown").forEach(e => push({
    id: `unknown-${e.id}`,
    priority: "now",
    category: "fill-gap",
    title: `Resolve unknown: ${e.title}`,
    rationale: "Item is currently registered as Unknown. Find a source that confirms or refutes it.",
  }));

  // 3. Hypothesis next-tests
  hypotheses.forEach(h => {
    safeParseIds(h.nextTests).forEach((t, i) => push({
      id: `htest-${h.id}-${i}`,
      priority: h.confidence >= 50 ? "now" : "next",
      category: "test-hypothesis",
      title: t,
      rationale: `Listed as a next test for hypothesis "${h.title}" (${h.confidence}% confidence).`,
    }));
  });

  // 4. Contradictions among hypotheses — items both supporting one and contradicting another
  const supportMap = new Map<string, string[]>(); // evidenceId -> hypothesis titles
  const contraMap = new Map<string, string[]>();
  hypotheses.forEach(h => {
    safeParseIds(h.supportIds).forEach(id => {
      if (!supportMap.has(id)) supportMap.set(id, []);
      supportMap.get(id)!.push(h.title);
    });
    safeParseIds(h.contradictIds).forEach(id => {
      if (!contraMap.has(id)) contraMap.set(id, []);
      contraMap.get(id)!.push(h.title);
    });
  });
  evidence.forEach(e => {
    const sup = supportMap.get(e.id) || [];
    const con = contraMap.get(e.id) || [];
    if (sup.length > 0 && con.length > 0) {
      push({
        id: `contra-${e.id}`,
        priority: "now",
        category: "contradict",
        title: `Re-examine "${e.title}" — cuts both ways`,
        rationale: `Listed as supporting (${sup.join(", ")}) AND contradicting (${con.join(", ")}). Resolve interpretation before relying on it.`,
      });
    }
  });

  // 5. Structural — undated evidence
  const undated = evidence.filter(e => !e.occurredAt && (e.type === "testimony" || e.type === "digital" || e.type === "document"));
  undated.forEach(e => push({
    id: `date-${e.id}`,
    priority: "later",
    category: "structure",
    title: `Date "${e.title}"`,
    rationale: "Item has no date and would otherwise belong on the timeline.",
  }));

  // 6. Hypothesis without contradiction recorded — seek disconfirming evidence
  hypotheses
    .filter(h => safeParseIds(h.contradictIds).length === 0 && h.confidence >= 30)
    .forEach(h => push({
      id: `disconfirm-${h.id}`,
      priority: "next",
      category: "test-hypothesis",
      title: `Seek disconfirming evidence for "${h.title}"`,
      rationale: "No contradicting evidence recorded. Active disconfirmation is required to avoid confirmation bias.",
    }));

  // 7. Timeline gap detection — long stretch between adjacent timeline events
  const dates = events
    .map(e => e.occurredAt)
    .concat(evidence.map(e => e.occurredAt || ""))
    .filter(Boolean)
    .sort();
  if (dates.length >= 2) {
    let largestGap = 0;
    let gapAt: string | null = null;
    for (let i = 1; i < dates.length; i++) {
      const t1 = Date.parse(dates[i - 1]);
      const t2 = Date.parse(dates[i]);
      if (Number.isFinite(t1) && Number.isFinite(t2)) {
        const gap = t2 - t1;
        if (gap > largestGap) {
          largestGap = gap;
          gapAt = `${dates[i - 1]} → ${dates[i]}`;
        }
      }
    }
    if (largestGap > 1000 * 60 * 30 && gapAt) {
      const minutes = Math.round(largestGap / 60000);
      push({
        id: `gap-${gapAt}`,
        priority: "next",
        category: "fill-gap",
        title: `Investigate timeline gap (${minutes >= 1440 ? Math.round(minutes / 1440) + " day(s)" : minutes + " min"})`,
        rationale: `Largest unexplained gap on the timeline: ${gapAt}.`,
      });
    }
  }

  // 8. If high-confidence hypothesis lacks high-reliability support — prompt
  hypotheses.filter(h => h.confidence >= 60).forEach(h => {
    const sups = safeParseIds(h.supportIds).map(id => evidence.find(e => e.id === id)).filter(Boolean) as Evidence[];
    const strong = sups.filter(e => e.reliability >= 4).length;
    if (strong < 2) {
      push({
        id: `strengthen-${h.id}`,
        priority: "now",
        category: "test-hypothesis",
        title: `Strengthen support for "${h.title}"`,
        rationale: `Confidence is high (${h.confidence}%) but only ${strong} high-reliability supporting item(s). Add corroborating sources.`,
      });
    }
  });

  // de-duplicate by title + sort by priority
  const order = { now: 0, next: 1, later: 2 } as const;
  const seen = new Set<string>();
  return items
    .filter(it => {
      const key = it.title.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => order[a.priority] - order[b.priority]);
}

export default function ResearchPlan() {
  const { data: cases = [] } = useActiveCase();
  const c = cases[0];
  const { data: evidence = [] } = useEvidence(c?.id);
  const { data: events = [] } = useEvents(c?.id);
  const { data: hypotheses = [] } = useHypotheses(c?.id);
  const { toast } = useToast();

  const plan = useMemo(() => buildPlan(evidence, hypotheses, events), [evidence, hypotheses, events]);

  const groups: Record<string, PlanItem[]> = { now: [], next: [], later: [] };
  plan.forEach(p => groups[p.priority].push(p));

  const buildText = () => {
    const lines = [
      `# Research plan — ${c?.title || ""}`,
      "",
      "Generated deterministically from current evidence and hypotheses.",
      "",
    ];
    (["now", "next", "later"] as const).forEach(prio => {
      lines.push(`## ${prio.toUpperCase()}`);
      if (groups[prio].length === 0) lines.push("(none)");
      groups[prio].forEach((p, i) => {
        lines.push(`${i + 1}. [${p.category}] ${p.title}`);
        lines.push(`   — ${p.rationale}`);
      });
      lines.push("");
    });
    return lines.join("\n");
  };

  const copyPlan = async () => {
    await navigator.clipboard.writeText(buildText());
    toast({ title: "Plan copied", description: "Research plan copied to clipboard." });
  };
  const downloadPlan = () => {
    const blob = new Blob([buildText()], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "research-plan.md"; a.click();
    URL.revokeObjectURL(url);
    toast({ title: "Exported", description: "Plan downloaded." });
  };

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="space-y-2">
          <div className="stamp ink-faint flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" /> Deterministic plan
          </div>
          <h1 className="font-serif text-3xl leading-tight">Research plan</h1>
          <p className="ink-muted max-w-xl text-sm leading-relaxed">
            Practical next steps generated from the current case state — corroborate weak claims,
            test hypotheses, fill timeline gaps. No AI, no external calls; rules only.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={copyPlan} data-testid="button-copy-plan">
            <Copy className="h-4 w-4 mr-1.5" /> Copy plan
          </Button>
          <Button size="sm" onClick={downloadPlan} data-testid="button-export-plan">
            <FileDown className="h-4 w-4 mr-1.5" /> Export
          </Button>
        </div>
      </header>

      {plan.length === 0 ? (
        <Card className="p-6 ink-muted text-sm">No actions suggested. Add evidence or hypotheses to populate the plan.</Card>
      ) : (
        <div className="space-y-8" data-testid="list-plan">
          {(["now", "next", "later"] as const).map(prio => groups[prio].length > 0 && (
            <section key={prio}>
              <div className="flex items-baseline gap-3 mb-3">
                <h2 className="stamp ink-faint">{prio === "now" ? "Do now" : prio === "next" ? "Do next" : "Later"}</h2>
                <span className="ink-faint text-xs">{groups[prio].length} item{groups[prio].length === 1 ? "" : "s"}</span>
              </div>
              <ul className="space-y-2">
                {groups[prio].map((p, i) => (
                  <li key={p.id}>
                    <Card className="p-4 flex gap-3 items-start hover-elevate" data-testid={`plan-item-${p.id}`}>
                      <span className="font-serif tabular text-base ink-faint w-6 shrink-0 pt-0.5">{i + 1}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <Badge variant="outline" className="stamp" data-testid={`badge-cat-${p.id}`}>{p.category}</Badge>
                        </div>
                        <div className="font-serif text-base leading-snug" data-testid={`text-plan-title-${p.id}`}>{p.title}</div>
                        <p className="text-sm ink-muted leading-relaxed mt-1">{p.rationale}</p>
                      </div>
                    </Card>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
