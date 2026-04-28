# Automated Next Steps (V2K Closure Workflow)

Use this to rapidly add new artifacts with consistent gate scoring.

## 1) One-off artifact intake

Run:

`python3 scripts/v2k_closure_intake.py --title "<artifact>" --type "<type>" --tier-relevance "<tiers>" --t2 <0-7> --t4 <0-6> --attribution <0-7> --net-classification "<text>" --confidence <high|moderate|low> --notes "<short note>"`

Example:

`python3 scripts/v2k_closure_intake.py --title "ieee-6893912" --type "conference publication metadata shell" --tier-relevance "T3 context" --t2 0 --t4 0 --attribution 0 --net-classification "context-only" --confidence moderate --notes "Conceptual cybernetics framing; no efficacy/deployment/case nexus evidence."`

## 2) Batch intake (recommended)

Create JSON array:

```json
[
  {
    "title": "source-a",
    "type": "media article",
    "tier_relevance": "T5 context",
    "t2": 0,
    "t4": 0,
    "attribution": 0,
    "net_classification": "context-only",
    "confidence": "moderate",
    "notes": "No protocol-grade technical evidence."
  }
]
```

Run:

`python3 scripts/v2k_closure_intake.py --from-json investigation-dig/new-intake.json`

## 3) What is automated

- Adds new numbered rows before the closure status block in `investigation-dig/CLOSURE_SCOREBOARD_TOP_ARTIFACTS.md`.
- Preserves gate format (`T2 /7`, `T4 /6`, `Attribution /7`).
- Recomputes closure banner:
  - `T2` becomes `CLOSED` only if any row reaches `7/7`.
  - `T4` becomes `CLOSED` only if any row reaches `6/6`.
  - `Attribution` becomes `CLOSED` only if any row reaches `7/7`.

## 4) Operational discipline

- Keep wording constrained to checklist guardrails in `investigation-dig/CLOSURE_CHECKLIST_T2_T4_ATTRIBUTION.md`.
- Treat patents/media/commentary as context unless gates explicitly justify upgrades.
