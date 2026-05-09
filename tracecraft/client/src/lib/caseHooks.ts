import { useQuery } from "@tanstack/react-query";
import type { Case, Evidence, Event, Hypothesis } from "@shared/schema";

export function useActiveCase() {
  return useQuery<Case[]>({ queryKey: ["/api/cases"] });
}

export function useEvidence(caseId: string | undefined) {
  return useQuery<Evidence[]>({
    queryKey: ["/api/cases", caseId, "evidence"],
    enabled: !!caseId,
  });
}

export function useEvents(caseId: string | undefined) {
  return useQuery<Event[]>({
    queryKey: ["/api/cases", caseId, "events"],
    enabled: !!caseId,
  });
}

export function useHypotheses(caseId: string | undefined) {
  return useQuery<Hypothesis[]>({
    queryKey: ["/api/cases", caseId, "hypotheses"],
    enabled: !!caseId,
  });
}
