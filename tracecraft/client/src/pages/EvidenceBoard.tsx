import { useState, useMemo, Fragment } from "react";
import { useMutation } from "@tanstack/react-query";
import { useActiveCase, useEvidence } from "@/lib/caseHooks";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, ExternalLink, AlertTriangle } from "lucide-react";
import {
  EVIDENCE_TYPES, EPISTEMIC_TIERS, RELIABILITY_LABELS, RELEVANCE_LABELS,
  safeParseTags, epistemicColor, type EpistemicTier, type EvidenceType,
} from "@/lib/types";
import type { Evidence } from "@shared/schema";

export default function EvidenceBoard() {
  const { data: cases = [] } = useActiveCase();
  const c = cases[0];
  const { data: evidence = [], isLoading } = useEvidence(c?.id);
  const { toast } = useToast();
  const [filter, setFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return evidence;
    return evidence.filter(e => e.epistemic === filter);
  }, [evidence, filter]);

  const matrix = useMemo(() => {
    // 5x5 grid; reliability rows desc (5 top), relevance cols asc
    const grid: Evidence[][][] = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => []),
    );
    evidence.forEach(e => {
      const r = Math.max(1, Math.min(5, e.reliability));
      const v = Math.max(1, Math.min(5, e.relevance));
      grid[5 - r][v - 1].push(e);
    });
    return grid;
  }, [evidence]);

  const contradictionTags = useMemo(() => {
    // detect mentions of "contradict" in tags or notes, or duplicate dates with conflicting epistemic
    return evidence.filter(e => {
      const tags = safeParseTags(e.tags).join(",").toLowerCase();
      const note = (e.notes || "").toLowerCase();
      return tags.includes("contradiction") || note.includes("contradict") || note.includes("conflict");
    });
  }, [evidence]);

  const weakClaims = useMemo(
    () => evidence.filter(e => e.epistemic === "claim" && (e.reliability <= 2 || !(e.sourceUrl || "").trim())),
    [evidence],
  );

  if (isLoading) return <div className="ink-muted">Loading…</div>;

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="space-y-2">
          <div className="stamp ink-faint">Evidence board</div>
          <h1 className="font-serif text-3xl leading-tight">Items, sources, and signal</h1>
          <p className="ink-muted max-w-xl text-sm leading-relaxed">
            Each item carries a register, a source, a date, and two scores: how reliable the source is,
            and how relevant the item is to the case.
          </p>
        </div>
        <NewEvidenceDialog caseId={c?.id} />
      </header>

      {/* matrix */}
      <section>
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="stamp ink-faint">Reliability × relevance</h2>
          <span className="ink-faint text-xs">Rows: reliability (A→E) · Cols: relevance (low→high)</span>
        </div>
        <Card className="p-3 md:p-5 overflow-x-auto">
          <div className="grid grid-cols-[auto_repeat(5,minmax(0,1fr))] gap-1.5 min-w-[560px]">
            <div />
            {[1, 2, 3, 4, 5].map(v => (
              <div key={v} className="stamp ink-faint text-center pb-1">{RELEVANCE_LABELS[v]}</div>
            ))}
            {matrix.map((row, ri) => {
              const reliability = 5 - ri;
              return (
                <Fragment key={`row-${ri}`}>
                  <div className="stamp ink-faint pr-2 text-right self-center whitespace-nowrap">
                    {RELIABILITY_LABELS[reliability].split(" — ")[0]}
                  </div>
                  {row.map((items, ci) => {
                    const high = reliability >= 4 && ci + 1 >= 4;
                    const weak = reliability <= 2 && ci + 1 >= 4;
                    return (
                      <div
                        key={`${ri}-${ci}`}
                        className={`min-h-[64px] rounded-md border p-2 text-xs leading-snug
                          ${high ? "border-primary/40 bg-[hsl(var(--amber-soft))]/40" :
                            weak ? "border-destructive/30 bg-destructive/5" :
                            "border-card-border bg-card/60"}`}
                        data-testid={`matrix-cell-${reliability}-${ci + 1}`}
                      >
                        {items.length === 0 && <span className="ink-faint">·</span>}
                        <ul className="space-y-1">
                          {items.map(it => (
                            <li key={it.id} className="truncate" title={it.title}>
                              <span className="ink">{it.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </Fragment>
              );
            })}
          </div>
        </Card>
        {(weakClaims.length > 0 || contradictionTags.length > 0) && (
          <div className="grid md:grid-cols-2 gap-3 mt-3">
            {weakClaims.length > 0 && (
              <Card className="p-4 border-destructive/30">
                <div className="flex items-center gap-2 stamp text-destructive mb-1.5">
                  <AlertTriangle className="h-3.5 w-3.5" /> Weak claims
                </div>
                <ul className="text-sm space-y-1" data-testid="list-weak-claims">
                  {weakClaims.map(w => (
                    <li key={w.id} className="ink-muted">
                      <span className="ink">{w.title}</span> — {w.reliability <= 2 ? "low reliability" : ""}
                      {w.reliability <= 2 && !w.sourceUrl ? "; " : ""}
                      {!w.sourceUrl ? "no source URL" : ""}
                    </li>
                  ))}
                </ul>
              </Card>
            )}
            {contradictionTags.length > 0 && (
              <Card className="p-4 border-primary/30">
                <div className="flex items-center gap-2 stamp text-primary mb-1.5">
                  <AlertTriangle className="h-3.5 w-3.5" /> Possible contradictions
                </div>
                <ul className="text-sm space-y-1" data-testid="list-contradictions">
                  {contradictionTags.map(w => <li key={w.id} className="ink">{w.title}</li>)}
                </ul>
              </Card>
            )}
          </div>
        )}
      </section>

      {/* filters */}
      <section>
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span className="stamp ink-faint mr-2">Filter</span>
          {[
            { v: "all", label: "All" },
            { v: "fact", label: "Facts" },
            { v: "claim", label: "Claims" },
            { v: "assumption", label: "Assumptions" },
            { v: "unknown", label: "Unknowns" },
          ].map(f => (
            <Button
              key={f.v}
              size="sm"
              variant={filter === f.v ? "default" : "outline"}
              onClick={() => setFilter(f.v)}
              data-testid={`filter-${f.v}`}
            >{f.label}</Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {filtered.map(e => <EvidenceCard key={e.id} ev={e} />)}
          {filtered.length === 0 && (
            <Card className="p-6 ink-muted text-sm md:col-span-2">
              No evidence yet. Add the first item using the button above.
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}

function EvidenceCard({ ev }: { ev: Evidence }) {
  const tags = safeParseTags(ev.tags);
  const { toast } = useToast();
  const del = useMutation({
    mutationFn: () => apiRequest("DELETE", `/api/evidence/${ev.id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cases"] });
      toast({ title: "Removed", description: ev.title });
    },
  });

  return (
    <Card className="paper p-5 relative" data-testid={`card-evidence-${ev.id}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <Badge className={`border ${epistemicColor(ev.epistemic)} stamp`}>{ev.epistemic}</Badge>
            <span className="stamp ink-faint">{ev.type}</span>
          </div>
          <h3 className="font-serif text-lg leading-snug mb-1" data-testid={`text-evidence-title-${ev.id}`}>{ev.title}</h3>
          {ev.occurredAt && <div className="stamp ink-faint mb-2">{ev.occurredAt}</div>}
        </div>
        <Button
          variant="ghost" size="icon"
          onClick={() => del.mutate()}
          data-testid={`button-delete-evidence-${ev.id}`}
          aria-label="Delete evidence"
          className="shrink-0 text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      {ev.notes && <p className="text-sm ink-muted leading-relaxed mb-3">{ev.notes}</p>}
      <div className="flex items-center gap-3 text-xs ink-muted mb-2">
        <span className="tabular">Rel <b className="ink tabular">{ev.reliability}</b>/5</span>
        <span className="tabular">Relv <b className="ink tabular">{ev.relevance}</b>/5</span>
        {ev.sourceUrl && (
          <a href={ev.sourceUrl} target="_blank" rel="noreferrer"
             className="text-primary hover:underline inline-flex items-center gap-1 ml-auto truncate max-w-[200px]"
             data-testid={`link-source-${ev.id}`}>
            <ExternalLink className="h-3 w-3" /> source
          </a>
        )}
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map(t => (
            <span key={t} className="stamp ink-faint">#{t}</span>
          ))}
        </div>
      )}
    </Card>
  );
}

function NewEvidenceDialog({ caseId }: { caseId: string | undefined }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState<EvidenceType>("document");
  const [epistemic, setEpistemic] = useState<EpistemicTier>("claim");
  const [sourceUrl, setSourceUrl] = useState("");
  const [reliability, setReliability] = useState(3);
  const [relevance, setRelevance] = useState(3);
  const [occurredAt, setOccurredAt] = useState("");
  const [notes, setNotes] = useState("");
  const [tags, setTags] = useState("");
  const { toast } = useToast();

  const create = useMutation({
    mutationFn: async () => {
      const tagArr = tags.split(",").map(t => t.trim()).filter(Boolean);
      const res = await apiRequest("POST", `/api/cases/${caseId}/evidence`, {
        title, type, epistemic, sourceUrl,
        reliability, relevance, occurredAt, notes,
        tags: JSON.stringify(tagArr),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cases"] });
      toast({ title: "Added", description: title });
      setOpen(false);
      setTitle(""); setSourceUrl(""); setOccurredAt(""); setNotes(""); setTags("");
      setReliability(3); setRelevance(3); setEpistemic("claim"); setType("document");
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button data-testid="button-add-evidence" disabled={!caseId}>
          <Plus className="h-4 w-4 mr-1.5" /> Add evidence
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader><DialogTitle className="font-serif">New evidence item</DialogTitle></DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="ev-title">Title</Label>
            <Input id="ev-title" value={title} onChange={e => setTitle(e.target.value)}
                   placeholder="Short, descriptive label"
                   data-testid="input-evidence-title" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label>Type</Label>
              <Select value={type} onValueChange={v => setType(v as EvidenceType)}>
                <SelectTrigger data-testid="select-evidence-type"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {EVIDENCE_TYPES.map(t => <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1.5">
              <Label>Register</Label>
              <Select value={epistemic} onValueChange={v => setEpistemic(v as EpistemicTier)}>
                <SelectTrigger data-testid="select-evidence-epistemic"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {EPISTEMIC_TIERS.map(t => <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="ev-url">Source URL</Label>
            <Input id="ev-url" value={sourceUrl} onChange={e => setSourceUrl(e.target.value)}
                   placeholder="https://… (encouraged)"
                   data-testid="input-evidence-url" />
            <span className="ink-faint text-xs">Citing a source raises corroboration. Single-source claims should be flagged.</span>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="ev-date">Date / time (ISO)</Label>
            <Input id="ev-date" type="datetime-local" value={occurredAt}
                   onChange={e => setOccurredAt(e.target.value)}
                   data-testid="input-evidence-date" />
          </div>
          <div className="grid gap-3">
            <div>
              <Label className="flex justify-between">
                <span>Reliability</span>
                <span className="stamp ink-faint">{RELIABILITY_LABELS[reliability]}</span>
              </Label>
              <Slider min={1} max={5} step={1} value={[reliability]}
                      onValueChange={(v) => setReliability(v[0])}
                      data-testid="slider-evidence-reliability" />
            </div>
            <div>
              <Label className="flex justify-between">
                <span>Relevance</span>
                <span className="stamp ink-faint">{RELEVANCE_LABELS[relevance]}</span>
              </Label>
              <Slider min={1} max={5} step={1} value={[relevance]}
                      onValueChange={(v) => setRelevance(v[0])}
                      data-testid="slider-evidence-relevance" />
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="ev-notes">Notes</Label>
            <Textarea id="ev-notes" value={notes} onChange={e => setNotes(e.target.value)}
                      placeholder="Context, caveats, what would corroborate this."
                      rows={3}
                      data-testid="input-evidence-notes" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="ev-tags">Tags (comma-separated)</Label>
            <Input id="ev-tags" value={tags} onChange={e => setTags(e.target.value)}
                   placeholder="cctv, witness, contradiction"
                   data-testid="input-evidence-tags" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)} data-testid="button-cancel-evidence">Cancel</Button>
          <Button onClick={() => create.mutate()} disabled={!title || create.isPending} data-testid="button-save-evidence">
            {create.isPending ? "Saving…" : "Save evidence"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
