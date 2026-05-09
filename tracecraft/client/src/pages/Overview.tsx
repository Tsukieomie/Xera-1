import { useActiveCase, useEvidence, useEvents, useHypotheses } from "@/lib/caseHooks";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Copy, FileDown, ShieldCheck, AlertTriangle, HelpCircle, BookOpen, FileText } from "lucide-react";
import { safeParseTags } from "@/lib/types";

export default function Overview() {
  const { data: cases = [], isLoading } = useActiveCase();
  const c = cases[0];
  const { data: evidence = [] } = useEvidence(c?.id);
  const { data: events = [] } = useEvents(c?.id);
  const { data: hypotheses = [] } = useHypotheses(c?.id);
  const { toast } = useToast();

  if (isLoading) return <div className="ink-muted">Loading case…</div>;
  if (!c) return <div className="ink-muted">No case found.</div>;

  const facts = evidence.filter(e => e.epistemic === "fact").length;
  const claims = evidence.filter(e => e.epistemic === "claim").length;
  const assumptions = evidence.filter(e => e.epistemic === "assumption").length;
  const unknowns = evidence.filter(e => e.epistemic === "unknown").length;

  const dated = evidence.filter(e => e.occurredAt).length;
  const cited = evidence.filter(e => (e.sourceUrl || "").trim().length > 0).length;
  const corroboration = evidence.length === 0 ? 0 :
    Math.round(100 * Math.min(1, cited / Math.max(1, claims + facts)));

  const topHyp = [...hypotheses].sort((a, b) => b.confidence - a.confidence)[0];

  const buildBrief = () => {
    const lines = [
      `# Case brief — ${c.title}`,
      ``,
      `Status: ${c.status}`,
      ``,
      `## Summary`,
      c.summary,
      ``,
      `## Source posture`,
      `- Facts: ${facts}`,
      `- Claims: ${claims}`,
      `- Assumptions: ${assumptions}`,
      `- Unknowns: ${unknowns}`,
      `- Cited (URL): ${cited} / ${evidence.length}`,
      ``,
      `## Top hypothesis`,
      topHyp ? `${topHyp.title} — confidence ${topHyp.confidence}%` : "(none yet)",
      topHyp?.statement || "",
      ``,
      `## Evidence (count: ${evidence.length})`,
      ...evidence.map(e => `- [${e.epistemic.toUpperCase()}] ${e.title} (rel ${e.reliability}, relv ${e.relevance})${e.sourceUrl ? ` — ${e.sourceUrl}` : ""}`),
      ``,
      `## Timeline`,
      ...events
        .slice()
        .sort((a, b) => a.occurredAt.localeCompare(b.occurredAt))
        .map(ev => `- ${ev.occurredAt} — ${ev.title} (${ev.certainty})`),
    ];
    return lines.join("\n");
  };

  const copyBrief = async () => {
    await navigator.clipboard.writeText(buildBrief());
    toast({ title: "Brief copied", description: "Case brief copied to clipboard." });
  };

  const downloadBrief = () => {
    const blob = new Blob([buildBrief()], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${c.title.replace(/\s+/g, "-").toLowerCase()}-brief.md`;
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: "Exported", description: "Case brief downloaded as Markdown." });
  };

  const tagSet = new Set<string>();
  evidence.forEach(e => safeParseTags(e.tags).forEach(t => tagSet.add(t)));

  // Primary-source documents loaded into the app (PDF or other in-repo assets under /documents/).
  const primaryDocs = evidence.filter(e => (e.sourceUrl || "").startsWith("/documents/"));

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="space-y-2">
          <div className="stamp ink-faint">Case file · {c.id.slice(0, 6)}</div>
          <h1 className="font-serif text-3xl md:text-[2.4rem] leading-tight" data-testid="text-case-title">{c.title}</h1>
          <p className="ink-muted max-w-2xl leading-relaxed" data-testid="text-case-summary">{c.summary}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={copyBrief} data-testid="button-copy-brief">
            <Copy className="h-4 w-4 mr-1.5" /> Copy brief
          </Button>
          <Button size="sm" onClick={downloadBrief} data-testid="button-export-brief">
            <FileDown className="h-4 w-4 mr-1.5" /> Export
          </Button>
        </div>
      </header>

      {/* posture grid */}
      <section>
        <h2 className="stamp ink-faint mb-3">Source posture</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <PostureCell label="Facts" value={facts} icon={ShieldCheck} accent="teal" testid="stat-facts" hint="Verified by primary source." />
          <PostureCell label="Claims" value={claims} icon={BookOpen} accent="amber" testid="stat-claims" hint="Asserted, not yet corroborated." />
          <PostureCell label="Assumptions" value={assumptions} icon={AlertTriangle} accent="muted" testid="stat-assumptions" hint="Working premises, provisional." />
          <PostureCell label="Unknowns" value={unknowns} icon={HelpCircle} accent="destructive" testid="stat-unknowns" hint="Open questions, tracked." />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <Card className="p-5">
          <div className="stamp ink-faint mb-2">Corroboration</div>
          <div className="font-serif text-3xl tabular" data-testid="stat-corroboration">{corroboration}%</div>
          <div className="ink-muted text-sm mt-1">{cited} of {evidence.length} items cite a source URL.</div>
          <div className="h-1.5 bg-muted rounded-full mt-4 overflow-hidden">
            <div className="h-full bg-primary" style={{ width: `${corroboration}%` }} />
          </div>
        </Card>
        <Card className="p-5">
          <div className="stamp ink-faint mb-2">Dated evidence</div>
          <div className="font-serif text-3xl tabular" data-testid="stat-dated">{dated}/{evidence.length}</div>
          <div className="ink-muted text-sm mt-1">Items with dates feed the timeline directly.</div>
        </Card>
        <Card className="p-5">
          <div className="stamp ink-faint mb-2">Top hypothesis</div>
          {topHyp ? (
            <>
              <div className="font-serif text-base leading-snug" data-testid="text-top-hypothesis">{topHyp.title}</div>
              <div className="ink-muted text-sm mt-1">Confidence {topHyp.confidence}%</div>
              <div className="h-1.5 bg-muted rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${topHyp.confidence}%` }} />
              </div>
            </>
          ) : <div className="ink-muted text-sm">None yet.</div>}
        </Card>
      </section>

      {primaryDocs.length > 0 && (
        <section>
          <h2 className="stamp ink-faint mb-3">Primary source documents</h2>
          <div className="grid md:grid-cols-2 gap-3" data-testid="list-primary-docs">
            {primaryDocs.map(d => (
              <Card key={d.id} className="p-4 flex items-start gap-3" data-testid={`primary-doc-${d.id}`}>
                <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-base leading-snug">{d.title}</div>
                  <div className="ink-muted text-xs font-mono mt-0.5 truncate">{d.sourceUrl}</div>
                  {d.notes && <div className="ink-muted text-sm mt-1.5 leading-snug">{d.notes}</div>}
                </div>
                <div className="flex flex-col gap-1.5 shrink-0">
                  <a href={d.sourceUrl ?? "#"} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" data-testid={`button-open-doc-${d.id}`}>Open</Button>
                  </a>
                  <a href={d.sourceUrl ?? "#"} download>
                    <Button variant="outline" size="sm" data-testid={`button-download-doc-${d.id}`}>
                      <FileDown className="h-3.5 w-3.5 mr-1" /> Download
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="stamp ink-faint mb-3">Working tags</h2>
        <div className="flex flex-wrap gap-1.5" data-testid="list-tags">
          {Array.from(tagSet).length === 0 && <span className="ink-muted text-sm">No tags yet.</span>}
          {Array.from(tagSet).sort().map(t => (
            <Badge key={t} variant="outline" className="font-mono text-[11px] tracking-wide" data-testid={`tag-${t}`}>
              #{t}
            </Badge>
          ))}
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="stamp ink-faint mb-3">Source discipline</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm leading-relaxed">
          <Card className="p-5">
            <h3 className="font-serif text-base mb-2">Distinguish four registers</h3>
            <ul className="space-y-1.5 ink-muted">
              <li><b className="ink">Fact</b> — primary source, direct observation.</li>
              <li><b className="ink">Claim</b> — asserted by a source, not corroborated.</li>
              <li><b className="ink">Assumption</b> — provisional working premise.</li>
              <li><b className="ink">Unknown</b> — open question, explicitly tracked.</li>
            </ul>
          </Card>
          <Card className="p-5">
            <h3 className="font-serif text-base mb-2">Practice</h3>
            <ul className="space-y-1.5 ink-muted">
              <li>Cite source URLs whenever possible.</li>
              <li>Corroborate single-source claims before relying on them.</li>
              <li>Flag contradictions; do not silently discard.</li>
              <li>Time-stamp everything that has a date.</li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}

function PostureCell({
  label, value, icon: Icon, accent, testid, hint,
}: {
  label: string; value: number;
  icon: React.ComponentType<{ className?: string }>;
  accent: "teal" | "amber" | "muted" | "destructive"; testid: string; hint: string;
}) {
  const accentClass =
    accent === "teal" ? "text-[hsl(var(--teal))]" :
    accent === "amber" ? "text-primary" :
    accent === "destructive" ? "text-destructive" : "ink-muted";
  return (
    <div className="border border-card-border rounded-md bg-card p-4 hover-elevate" data-testid={testid}>
      <div className="flex items-center gap-2 stamp ink-faint">
        <Icon className={`h-3.5 w-3.5 ${accentClass}`} /> {label}
      </div>
      <div className="font-serif text-3xl tabular mt-2">{value}</div>
      <div className="ink-muted text-xs mt-1 leading-snug">{hint}</div>
    </div>
  );
}
