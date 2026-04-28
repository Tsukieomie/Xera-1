# Closure Checklist: T2 / T4 / Case Attribution

Purpose: score every new artifact as either:
- `Closure-relevant` (moves a bar), or
- `Context-only` (informative but non-closing).

Use this checklist before updating any conclusion language.

## 1) T2 Hard Efficacy Closure Checklist

Target question: "Does evidence establish reliable intelligible semantic speech performance via claimed pathway?"

Required gates (all must be met for closure):

- [ ] **Primary source**: peer-reviewed full methods/results or official technical report (not media/patent-only).
- [ ] **Semantic endpoint**: intelligibility measured at word/sentence level (not clicks/buzz/perception only).
- [ ] **Protocol quality**: blinded/sham-controlled or equivalent bias controls.
- [ ] **Replicability**: independent replication (second lab/group or multi-site dataset).
- [ ] **Operational envelope**: reported dose/pulse/frequency/range constraints with reproducible performance.
- [ ] **Error profile**: false positive/false negative or confusion matrix-level performance reporting.
- [ ] **Safety/feasibility**: evidence that claimed performance does not depend on tissue-injury-level exposure for intended use.

Scoring rule:
- `T2 closed` only if **all gates pass**.
- If 1+ gates fail -> `T2 open`; label strongest status as:
  - `mechanism support only`, or
  - `prototype indication`, or
  - `single-study signal`.

## 2) T4 Deployment Closure Checklist

Target question: "Was the capability fielded and used as alleged?"

Required gates (all must be met for closure):

- [ ] **System identity**: specific system/article uniquely identified (name, program ID, serial/config lineage).
- [ ] **Program stage**: evidence beyond concept/prototype (fielded unit, doctrine, procurement, or validated deployment record).
- [ ] **Operational test evidence**: mission-representative test results tied to the identified system.
- [ ] **Use event record**: dated, attributable deployment/use documentation (not generic capability discussion).
- [ ] **Chain continuity**: clear chain from tested system -> deployed system -> alleged use scenario.
- [ ] **Independent corroboration**: at least one corroborating source independent of originating claimant.

Scoring rule:
- `T4 closed` only if **all gates pass**.
- If missing deployment-use records -> classify as `T3/T5 context`, not T4 closure.

## 3) Specific Actor -> Specific Person -> Specific Case Attribution Checklist

Target question: "Can a named actor be reliably linked to a specific incident against a specific person?"

Required gates (all must be met for closure):

- [ ] **General causation support**: admissible basis that mechanism can produce alleged injury/effect profile.
- [ ] **Specific causation support**: case-specific exposure/injury linkage with differential exclusion of alternatives.
- [ ] **Actor capability link**: evidence actor had access/control/opportunity over relevant system and timeframe.
- [ ] **Spatiotemporal nexus**: technical/time/location evidence ties event to actor and claimant.
- [ ] **Evidence integrity**: provenance, chain-of-custody, and authentication standards satisfied.
- [ ] **Method reliability**: expert methods likely admissible under Rule 702-type reliability standards.
- [ ] **Attribution robustness**: plausible alternative actors/mechanisms explicitly tested and not better supported.

Scoring rule:
- `Case attribution closed` only if **all gates pass**.
- Otherwise classify as:
  - `allegation`, `context`, or `partial causal signal` depending on fulfilled gates.

## 4) Artifact Intake Template (use per new source)

Copy block for each new artifact:

```md
### Artifact: <title or file>
- Type: <primary study / report / legal doc / media / patent / archive>
- Tier relevance: <T1/T2/T3/T4/T5>
- T2 gates passed: <n/7> (list failures)
- T4 gates passed: <n/6> (list failures)
- Attribution gates passed: <n/7> (list failures)
- Net classification: <closure-relevant | context-only>
- Confidence: <high | moderate | low>
- Notes: <1-3 lines>
```

## 5) Language Guardrails for Drafts

Use only if checklist thresholds are met:
- "confirmed", "established", "proven", "operationally verified".

Use when thresholds are not met:
- "suggests", "is consistent with", "supports mechanism context", "remains unconfirmed", "not established in open record".

## 6) Fast Decision Matrix

- Meets all T2 gates? -> Allow `T2 closure` language.
- Meets all T4 gates? -> Allow `deployment closure` language.
- Meets all attribution gates? -> Allow `actor/person/case closure` language.
- Any "No" -> keep closure language out; downgrade to contextual framing.
