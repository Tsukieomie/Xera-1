# V2K Judicial Brief — Review and Revision Workspace

This directory holds the working artifacts for moving the brief
"Voice-to-Skull Technology: A Judicial Brief on the Science" from
**v4** to **v5**, applying the deep claim-by-claim audit performed
on 2026-05-05.

## Layout

```
docs/judicial-brief/
├── README.md                                  ← this file
├── source/
│   ├── V2K_Technology_Judicial_Brief_v4.pdf            (original v4 PDF)
│   └── V2K_Technology_Judicial_Brief_v4.extracted.txt  (plain-text extract)
├── audit/
│   ├── v4_deep_claim_audit.md                          (Perplexity / deep audit)
│   └── V2K_Technology_Judicial_Brief_v4_reviewed.pdf   (annotated reviewed PDF)
└── v5/
    ├── V5_REVISION_PLAN.md                             (master plan, priorities, status)
    ├── V5_REDLINE_PATCHLIST.md                         (drop-in replacement clauses)
    └── V5_EXHIBIT_LIST.md                              (exhibits to assemble before filing)
```

## Why no editable v5 source yet

No DOCX / Markdown / LaTeX source for v4 was located either in the
shared workspace or in this repository. Only the PDF and a plain-text
extract are available. The v5 workspace therefore consists of:

1. A **revision plan** prioritizing fixes by litigation-risk band
   (critical / high / medium).
2. A **redline patchlist** giving the exact strings to replace and the
   neutral, expert-declaration-tone replacement language.
3. An **exhibit list** of supporting documents that should accompany
   v5 if it is filed as an expert declaration.

When the v4 editable source is recovered (or v5 is composed fresh), the
patchlist and plan are designed to be applied directly without further
interpretation.

## Companion repo material

This effort builds on prior in-repo audit work for v3:

- `findings/investigation-dig/V2K_JUDICIAL_BRIEF_V3_CLAIM_AUDIT.md`
- `findings/investigation-dig/V2K_JUDICIAL_BRIEF_V3_DEEP_FORENSICS.md`
- `findings/investigation-dig/V2K_JUDICIAL_BRIEF_V3_REDLINE_PATCHLIST.md`
- `findings/investigation-dig/US3647970A_SECRECY_ORDER_INVESTIGATION.md`
- `FINDINGS.md`, `SOURCES.md`, `V2K_EVIDENCE_MATRIX.md`

The v5 plan references and is consistent with these — particularly the
v3 "T1 strong / T2 unresolved / T3 moderate / T4 not established / T5
context" tier discipline, which the v5 redline retains.
