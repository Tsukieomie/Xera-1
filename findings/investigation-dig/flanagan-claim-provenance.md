# Flanagan Claim Provenance (Current Corpus)

Date: 2026-04-27

Purpose: identify where the `756,124` secrecy-order/rescission claims entered the local investigation corpus.

---

## Key Observation

The strongest repeated `756,124` claim text appears in mem0 exports as an ingested memory, not as a recovered primary government document.

Representative record found in local mem0 export:

- Claim text includes: DIA placed second Neurophone under Secrecy Order 756,124, later rescinded in 1972.
- Metadata points to external repo/file path:
  - `repo: Tsukieomie/akwei-nsa-case-files`
  - `path: LAYER47_CONFIRMED_PIPELINE.md`
  - `ingest_run: akwei-nsa-case-files-2026-04-26`

This indicates the local statement is inherited from an upstream narrative layer via memory ingestion.

Additional upstream confirmation (retrieved):

- Upstream source file recovered:
  - `Tsukieomie/akwei-nsa-case-files` -> `LAYER47_CONFIRMED_PIPELINE.md`
- In that file, the secrecy-order statement cites:
  - `Rex Research` page as core support
  - `Scribd/Keelynet archive` as "DoD secrecy order source"

This establishes a clear citation chain:

`local analysis` -> `mem0 ingest` -> `LAYER47` -> `Rex/Scribd tertiary sources`

No primary USPTO/NARA order document is attached in the retrieved upstream layer.

New source-recovery detail (same day):

- The RexResearch compilation text (`agent-tools/217fe14c-2368-4bbf-9c0a-a3e90ff8da82.txt`) contains the secrecy-order wording in two forms:
  1. A third-party narrative sentence attributing placement to Commerce/DoD and rescission year.
  2. A first-person Flanagan narrative asserting NSA secrecy order `#756,124` and "treason/firing squad" warning language.
- This confirms the language is recoverable from tertiary compilations, but still does not supply a primary order document.

---

## What This Means

1. Repetition of the claim across local files is likely propagation from this upstream node.
2. Current corpus does not include direct primary order/rescission artifacts tied to `US756124A`.
3. Confidence should track source class:
   - Primary government/order document: high
   - Patent metadata (timeline only): medium-high
   - Ingested narrative from external markdown: low-medium

---

## Recommended Handling

1. Keep `756,124` secrecy claim marked as "unverified pending archival records."
2. Treat mem0-ingested narrative as a lead, not proof.
3. Only upgrade after obtaining one of:
   - USPTO secrecy-order/rescission document naming application `756,124`,
   - NARA archival document with matching serial/application reference,
   - agency FOIA release explicitly linking `US756124A` to order + rescission.

---

## Name disambiguation (SEC LR-21612 -- dismissed)

A web search collision exists between **Patrick Flanagan (Neurophone inventor)** and **Patrick T. Flanagan** listed in **[SEC Litigation Release LR-21612](https://www.sec.gov/enforcement-litigation/litigation-releases/lr-21612)** alongside **Thomas P. Flanagan** (Deloitte insider-trading/settlement narrative, Northern District of Illinois, 2010).

**Repository rule:** that SEC case does **not** merge with our patent inventor line without independent identity linkage. Detailed scope note and what remains in active inquiry: **`investigation-dig/flanagan-sec-lr21612-dismissed-scope.md`**.

