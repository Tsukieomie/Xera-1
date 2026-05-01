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

## Addendum 2026-05-01 (later same day): Public PDF of apparent Patent Office forms (E-016)

A publicly hosted PDF titled "Patrick Flanagan High Security Speech Scramble" contains apparent photocopies/scans of U.S. Patent Office instruments tied to application 756,124. PDF linked only, not embedded:

- <https://img1.wsimg.com/blobby/go/a56ed7e4-a072-4dc8-b939-26ab140309de/downloads/Patrick%20Flanagan%20High%20Security%20Speech%20Scramble.pdf?ver=1685486536436>

Visible content (recorded conservatively as **public copy of apparent forms**, not USPTO/NARA-certified):

- **Page 2 — Secrecy Order form.** U.S. Department of Commerce Patent Office, Washington DC 20231; Serial No. **756,124**; Filed **Aug. 29, 1968**; Applicant **Gillis P. Flanagan**; Title **METHOD AND SYSTEM FOR SIMPLIFYING SPEECH WAVEFORMS**; **SECRECY ORDER** invoked under **Title 35, United States Code (1952), §§181-188**; prohibits publication/disclosure because unauthorized disclosure might be detrimental to national security except by written consent of the Commissioner of Patents; signed/stamped **EDWIN L. REYNOLDS, First Assistant Commissioner**; form **POL-96 (7-66)**, **USCOMM-DC 56772-P68**.
- **Page 3 — Notice of Allowability (Form D-10), Paper No. 8.** Mailed **Jan. 11, 1971**; states the application is in condition for allowance; "in view of the secrecy order issued **April 25, 1969**, under 35 U.S.C. (1952) §181, this application will be withheld from issue during such period as the national interest requires"; allowable claims 1-19; stamp **"THIS CORRESPONDENCE IS UNCLASSIFIED THE APPLICATION CLASSIFICATION REMAINS UNCHANGED"**; examiners visible as **J. G. Baxter** and **Rodney D. Bennett Jr.**
- **Page 4 — Issued patent.** US Patent **3,647,970**, filed Aug. 29 1968, Appl. No. 756,124, issued **Mar. 7 1972**; abstract includes **"a system for transmitting secure speech information."**

### Source-tier upgrade (form facts only)

The following facts move from **tertiary narrative (Begich / NEXUS)** to **apparent primary Patent Office form text via a public copy** (still pending USPTO/NARA-certified retrieval):

- Order serial: **756,124**
- Filing date: **Aug. 29, 1968**
- Title: **METHOD AND SYSTEM FOR SIMPLIFYING SPEECH WAVEFORMS**
- Statute: **35 U.S.C. (1952) §§181-188** (specifically §181 cited on the Jan 11 1971 Notice)
- Order date: **April 25, 1969**
- Patent Office signatory on the secrecy-order form: **Edwin L. Reynolds, First Assistant Commissioner**
- Notice of Allowability mailing date: **Jan. 11, 1971**
- Issuance: US 3,647,970, **Mar. 7, 1972**

Authenticity confidence is Medium-High for form content and Low for chain-of-custody (it is a public PDF copy, not certified). The forms are official Patent Office instruments and bear no agency attribution beyond the Patent Office.

### What this does **not** resolve (separation of facts vs. agency-attribution claims)

E-016 does not name DIA, NSA, or any defense agency. The official forms identify only the Patent Office. Therefore:

- The **existence of the order**, its **serial**, **statute**, **title**, **order date**, and the **Notice of Allowability** are now supported by apparent primary Patent Office form text.
- The **identity of the recommending / sponsoring agency** (DIA vs NSA vs other defense entity) remains **unresolved**. Begich/NEXUS attribute the action to the **DIA**; Flanagan first-person narrative recoverable from the RexResearch compilation attributes it to the **NSA**. Both readings are kept as **source-tradition claims only** until a certified USPTO/NARA file wrapper plus sponsoring-agency referral memo is obtained.

Full ledger entry: **E-016** in `investigation-dig/primary-756124/index.md`. Refined archival closure target and FOIA language for the referring-agency question: `investigation-dig/ARCHIVAL_TARGETS_756124.md`.

---

## Addendum 2026-05-01 (procedural framework): ASPAB / PSCRL / archival custody

A companion procedural file has been added at:

- `findings/investigation-dig/primary-756124/PROCEDURAL_FRAMEWORK_ASPAB_PSCRL.md`

That file explains — conservatively — the statutory and procedural machinery that surrounds the Apr 25 1969 secrecy order on application 756,124: **35 U.S.C. §§ 181-188**, **MPEP § 120 / 37 CFR 5.2**, the **FAS-described DoD coordination via ASPAB** (Armed Services Patent Advisory Board, sole DoD authority for secrecy-order recommendations), the **PSCRL (Jan 1971) Group IX / 6A** screening category for NSA-cryptology / communications-security subject matter (voice privacy / digitized voice / pseudo-random digit generation / spread-spectrum), and the **NARA RG 241 / RG 457** archival custody chains.

Key conservatism boundaries restated for this provenance file:

- The Patent Office form scans (E-016) support order existence, serial, statute, title, applicant, order date, and the Notice of Allowability. They do **not** name an agency.
- DIA attribution remains a **Begich/NEXUS-tradition narrative claim**, not official proof.
- PSCRL Group IX / 6A explains why the application's "secure speech" subject matter would have been routed for cryptology / communications-security review, but does **not** prove NSA sponsored the order.
- Closure of the agency-attribution question requires the **certified file wrapper** plus any surviving **D-1 / Group 220 / Licensing & Review or ASPAB referral / concurrence papers**.

Ledger entries supporting this addendum: **E-017 through E-029** in `investigation-dig/primary-756124/index.md`. Refined retrieval targets and FOIA language: `investigation-dig/ARCHIVAL_TARGETS_756124.md`.

---

## Name disambiguation (SEC LR-21612 -- dismissed)

A web search collision exists between **Patrick Flanagan (Neurophone inventor)** and **Patrick T. Flanagan** listed in **[SEC Litigation Release LR-21612](https://www.sec.gov/enforcement-litigation/litigation-releases/lr-21612)** alongside **Thomas P. Flanagan** (Deloitte insider-trading/settlement narrative, Northern District of Illinois, 2010).

**Repository rule:** that SEC case does **not** merge with our patent inventor line without independent identity linkage. Detailed scope note and what remains in active inquiry: **`investigation-dig/flanagan-sec-lr21612-dismissed-scope.md`**.

