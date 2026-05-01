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

## Addendum 2026-05-01: Begich + NEXUS/Flanagan DIA-attribution corroboration

User-supplied screenshots (`IMG_5336.jpeg`, `IMG_5337.jpeg`, local prompting evidence only — not embedded) directed re-verification against publicly accessible transcriptions of the same passages:

- **NEXUS-derived "Three papers on Flanagan's Neurophone," page 5** contains the phrase **"Defense Intelligence Agency slapped it under a secrecy order"** in reference to the second Neurophone patent.
  Public-source transcription: <https://www.scribd.com/doc/106800112/Patrick-Flanagan-s-Neurophone>

- **Begich, *Towards a New Alchemy*, section 3.5 / page 17** states official word was sent **April 25, 1969**, secrecy order **#756,124**, the **Defense Intelligence Agency** seized the patent information, and the secrecy lasted until **March 7, 1972**, when **US 3,647,970** issued.
  Public-source transcription: <https://www.jedisimon.com/articles/Deaf%20can%20hear.htm>

### What this changes

- DIA attribution moves from single-node (Rex/Scribd echo through `LAYER47`) to **multi-node tertiary corroboration** (Begich + NEXUS-derived "Three papers"). Status remains **non-primary**: no USPTO/NARA/FOIA secrecy-order document has been retrieved.
- Date precision is now explicit:
  - Filing date `Aug 29, 1968` (USPTO-confirmed) ≠ order/notice date `Apr 25, 1969` (per Begich).
  - Earlier loose phrasing of "1968 DIA secrecy order" should be read as the filing year, not the order date.
- The **DIA vs NSA conflict is preserved.** Begich and NEXUS page 5 attribute the action to the **DIA**. Flanagan's first-person narrative recoverable from the RexResearch compilation attributes it to the **NSA** with the same order number `#756,124`. Both attributions remain in the corpus until primary records resolve which agency referred the secrecy action.

### Handling

- Continue to mark `756,124` secrecy-order claim as **unverified pending archival records**.
- Treat Begich + NEXUS page 5 as **stronger lead, still not proof.**
- Full ledger entry for these two artifacts: **E-013, E-014, E-015** in `investigation-dig/primary-756124/index.md`.

---

## Name disambiguation (SEC LR-21612 -- dismissed)

A web search collision exists between **Patrick Flanagan (Neurophone inventor)** and **Patrick T. Flanagan** listed in **[SEC Litigation Release LR-21612](https://www.sec.gov/enforcement-litigation/litigation-releases/lr-21612)** alongside **Thomas P. Flanagan** (Deloitte insider-trading/settlement narrative, Northern District of Illinois, 2010).

**Repository rule:** that SEC case does **not** merge with our patent inventor line without independent identity linkage. Detailed scope note and what remains in active inquiry: **`investigation-dig/flanagan-sec-lr21612-dismissed-scope.md`**.

