import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useActiveCase, useEvidence, useHypotheses } from "@/lib/caseHooks";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, ScrollText, Check, X } from "lucide-react";
import { safeParseIds } from "@/lib/types";
import type { Hypothesis, Evidence } from "@shared/schema";

export default function Hypotheses() {
  const { data: cases = [] } = useActiveCase();
  const c = cases[0];
  const { data: hypotheses = [] } = useHypotheses(c?.id);
  const { data: evidence = [] } = useEvidence(c?.id);

  const sorted = [...hypotheses].sort((a, b) => b.confidence - a.confidence);

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="space-y-2">
          <div className="stamp ink-faint">Competing theories</div>
          <h1 className="font-serif text-3xl leading-tight">Hypotheses</h1>
          <p className="ink-muted max-w-xl text-sm leading-relaxed">
            Track multiple explanations side by side. Each carries its own supporting and contradicting evidence
            and a list of next tests that could move confidence.
          </p>
        </div>
        <NewHypothesisDialog caseId={c?.id} evidence={evidence} />
      </header>

      <div className="grid md:grid-cols-2 gap-4" data-testid="list-hypotheses">
        {sorted.map(h => <HypothesisCard key={h.id} h={h} evidence={evidence} />)}
        {sorted.length === 0 && (
          <Card className="p-6 ink-muted text-sm md:col-span-2">No hypotheses yet.</Card>
        )}
      </div>
    </div>
  );
}

function HypothesisCard({ h, evidence }: { h: Hypothesis; evidence: Evidence[] }) {
  const evMap = new Map(evidence.map(e => [e.id, e]));
  const support = safeParseIds(h.supportIds).map(id => evMap.get(id)).filter(Boolean) as Evidence[];
  const contradict = safeParseIds(h.contradictIds).map(id => evMap.get(id)).filter(Boolean) as Evidence[];
  const tests = safeParseIds(h.nextTests);
  const { toast } = useToast();

  const del = useMutation({
    mutationFn: () => apiRequest("DELETE", `/api/hypotheses/${h.id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cases"] });
      toast({ title: "Removed", description: h.title });
    },
  });

  return (
    <Card className="paper p-5" data-testid={`card-hypothesis-${h.id}`}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="min-w-0">
          <div className="stamp ink-faint mb-1">{h.status}</div>
          <h3 className="font-serif text-lg leading-snug" data-testid={`text-hypothesis-title-${h.id}`}>{h.title}</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={() => del.mutate()}
                className="text-muted-foreground hover:text-destructive shrink-0"
                data-testid={`button-delete-hypothesis-${h.id}`}
                aria-label="Delete hypothesis">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      {h.statement && <p className="text-sm ink-muted leading-relaxed mb-4">{h.statement}</p>}

      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="stamp ink-faint">Confidence</span>
          <span className="font-serif tabular text-base" data-testid={`text-confidence-${h.id}`}>{h.confidence}%</span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary" style={{ width: `${h.confidence}%` }} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-4">
        <div>
          <div className="stamp text-[hsl(var(--teal))] mb-1.5 flex items-center gap-1.5">
            <Check className="h-3 w-3" /> Supports ({support.length})
          </div>
          {support.length === 0
            ? <div className="ink-faint text-xs">None.</div>
            : <ul className="text-xs space-y-1" data-testid={`list-support-${h.id}`}>
                {support.map(e => <li key={e.id} className="ink-muted truncate">· {e.title}</li>)}
              </ul>
          }
        </div>
        <div>
          <div className="stamp text-destructive mb-1.5 flex items-center gap-1.5">
            <X className="h-3 w-3" /> Contradicts ({contradict.length})
          </div>
          {contradict.length === 0
            ? <div className="ink-faint text-xs">None recorded.</div>
            : <ul className="text-xs space-y-1" data-testid={`list-contradict-${h.id}`}>
                {contradict.map(e => <li key={e.id} className="ink-muted truncate">· {e.title}</li>)}
              </ul>
          }
        </div>
      </div>

      {tests.length > 0 && (
        <div>
          <div className="stamp ink-faint mb-1.5 flex items-center gap-1.5">
            <ScrollText className="h-3 w-3" /> Next tests
          </div>
          <ul className="text-xs space-y-1" data-testid={`list-tests-${h.id}`}>
            {tests.map((t, i) => <li key={i} className="ink-muted">→ {t}</li>)}
          </ul>
        </div>
      )}
    </Card>
  );
}

function NewHypothesisDialog({ caseId, evidence }: { caseId: string | undefined; evidence: Evidence[] }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [statement, setStatement] = useState("");
  const [confidence, setConfidence] = useState(40);
  const [support, setSupport] = useState<string[]>([]);
  const [contradict, setContradict] = useState<string[]>([]);
  const [tests, setTests] = useState("");
  const { toast } = useToast();

  const create = useMutation({
    mutationFn: async () => {
      const testArr = tests.split("\n").map(t => t.trim()).filter(Boolean);
      const res = await apiRequest("POST", `/api/cases/${caseId}/hypotheses`, {
        title, statement, confidence,
        supportIds: JSON.stringify(support),
        contradictIds: JSON.stringify(contradict),
        nextTests: JSON.stringify(testArr),
        status: "open",
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cases"] });
      toast({ title: "Saved", description: title });
      setOpen(false);
      setTitle(""); setStatement(""); setConfidence(40); setSupport([]); setContradict([]); setTests("");
    },
  });

  const toggle = (set: (v: string[]) => void, list: string[], id: string) => {
    set(list.includes(id) ? list.filter(x => x !== id) : [...list, id]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button data-testid="button-add-hypothesis" disabled={!caseId}>
          <Plus className="h-4 w-4 mr-1.5" /> Add hypothesis
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader><DialogTitle className="font-serif">New hypothesis</DialogTitle></DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="h-title">Title</Label>
            <Input id="h-title" value={title} onChange={e => setTitle(e.target.value)}
                   placeholder="One sentence label" data-testid="input-hypothesis-title" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="h-statement">Statement</Label>
            <Textarea id="h-statement" value={statement} onChange={e => setStatement(e.target.value)}
                      placeholder="What this hypothesis claims, in plain language."
                      rows={3} data-testid="input-hypothesis-statement" />
          </div>
          <div>
            <Label className="flex justify-between mb-1.5">
              <span>Confidence</span>
              <span className="stamp ink-faint tabular">{confidence}%</span>
            </Label>
            <Slider min={0} max={100} step={5} value={[confidence]}
                    onValueChange={(v) => setConfidence(v[0])}
                    data-testid="slider-hypothesis-confidence" />
          </div>
          {evidence.length > 0 && (
            <>
              <div>
                <Label className="text-[hsl(var(--teal))]">Supporting evidence</Label>
                <div className="mt-1.5 max-h-40 overflow-y-auto space-y-1 border rounded-md p-2 bg-card">
                  {evidence.map(e => (
                    <label key={e.id} className="flex items-center gap-2 text-sm">
                      <Checkbox checked={support.includes(e.id)}
                                onCheckedChange={() => toggle(setSupport, support, e.id)}
                                data-testid={`check-support-${e.id}`} />
                      <span className="truncate">{e.title}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <Label className="text-destructive">Contradicting evidence</Label>
                <div className="mt-1.5 max-h-40 overflow-y-auto space-y-1 border rounded-md p-2 bg-card">
                  {evidence.map(e => (
                    <label key={e.id} className="flex items-center gap-2 text-sm">
                      <Checkbox checked={contradict.includes(e.id)}
                                onCheckedChange={() => toggle(setContradict, contradict, e.id)}
                                data-testid={`check-contradict-${e.id}`} />
                      <span className="truncate">{e.title}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}
          <div className="grid gap-1.5">
            <Label htmlFor="h-tests">Next tests (one per line)</Label>
            <Textarea id="h-tests" value={tests} onChange={e => setTests(e.target.value)}
                      placeholder={"Verify CCTV timestamps with port records.\nFOIA Greenline manifest."}
                      rows={3} data-testid="input-hypothesis-tests" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)} data-testid="button-cancel-hypothesis">Cancel</Button>
          <Button onClick={() => create.mutate()} disabled={!title || create.isPending}
                  data-testid="button-save-hypothesis">
            {create.isPending ? "Saving…" : "Save hypothesis"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
