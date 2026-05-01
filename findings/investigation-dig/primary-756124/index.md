# Primary Evidence Ledger: Secrecy Order `756,124` / `US756124A`

Date opened: 2026-04-27
Status: Active
Owner: Investigation workflow

Purpose: maintain a chain-of-custody ledger for every artifact relevant to the Flanagan secrecy-order claim so each new document can be scored immediately as confirm/refute/neutral.

---

## Decision Rule

- Only documents from primary custodians (USPTO, NARA, agency FOIA release, or court-certified records) can close the claim.
- Narrative or tertiary compilations stay in lead status even if repeated.

---

## Scoring Rubric

| Field | Allowed values |
|---|---|
| Source class | Primary / Secondary / Tertiary |
| Authenticity confidence | High / Medium / Low |
| Claim impact | Confirm / Refute / Neutral |
| Scope | `756,124` order / rescission / assignment-transfer / timeline-only |

---

## Evidence Table (Live)

| Artifact ID | Date added | Artifact | Source class | Authenticity confidence | Claim impact | Scope | Notes |
|---|---|---|---|---|---|---|---|
| E-001 | 2026-04-27 | `US3393279` patent metadata | Secondary (official patent metadata) | Medium-High | Neutral | timeline-only | Verifies patent chronology and existence, not secrecy-order issuance text |
| E-002 | 2026-04-27 | `US3647970` patent metadata | Secondary (official patent metadata) | Medium-High | Neutral | timeline-only | Verifies issuance chronology, not order/rescission text |
| E-003 | 2026-04-27 | `LAYER47_CONFIRMED_PIPELINE.md` | Tertiary | Low-Medium | Neutral | `756,124` order + rescission narrative | Upstream source for local narrative chain; cites Rex/Scribd without primary attachment |
| E-004 | 2026-04-27 | RexResearch compilation (`agent-tools/217fe14c-2368-4bbf-9c0a-a3e90ff8da82.txt`) | Tertiary | Low-Medium | Neutral | `756,124` order + rescission narrative | Contains explicit wording but no attached primary government document |
| E-005 | 2026-04-27 | NARA USPTO patent records page (`archives.gov/research/patents`) | Secondary (custodian directory) | High | Neutral | archival routing | Confirms `RG 241`, `NAID 302050`, and Kansas City contact for patent case-file retrieval |
| E-006 | 2026-04-27 | RG241 transfer list extract (`agent-tools/4e47a445-8f7c-4440-b3d8-aa0ae39aa12f.txt`) | Secondary (NARA inventory listing) | Medium-High | Neutral | archival routing | Identifies entry band containing `US3647970`: `#3,647,069-3,651,016` (`ENTRY UD13W 12`, `NAID 302050`) |
| E-007 | 2026-04-27 | USPTO records schedule extract (`agent-tools/7cb1af8b-5465-4d37-82b5-40857dc86264.txt`) | Secondary (records schedule text) | Medium | Neutral | secrecy-order file architecture | Describes `D-1 Files` including defense requests, secrecy-order issuance, and related material for patent applications |
| E-008 | 2026-04-27 | Google Patents record for `US3647970A` (`agent-tools/af672c9a-ef53-4000-bb49-4a09a035bdce.txt`) | Secondary (aggregated patent metadata) | Medium | Neutral | timeline-only | Confirms publication/application linkage (`US756124A`) and filing date context; does not itself prove secrecy-order action |
| E-009 | 2026-04-27 | Google Patents legal-events extract for `US3393279A` (`agent-tools/dadda9be-6d64-484d-92ae-ddc8bda018af.txt`) | Secondary (aggregated legal events) | Medium | Neutral | assignment-transfer | Shows later assignment event (`REEL/FRAME 004271/0859`, effective `19840530`), supporting ownership-transfer pathways as an alternative to "confiscation" narratives |
| E-010 | 2026-04-27 | FAS secrecy-order program reference (`agent-tools/df5042e0-783a-4e1b-8cc6-360da8df6289.txt`) | Secondary (policy/program synthesis) | Medium | Neutral | procedural validation | Confirms procedural path for rescission petitions (`37 CFR 5.4/5.8`) and reinforces that secrecy orders are defense-agency referred and Commissioner-issued |
| E-011 | 2026-04-27 | GovernmentAttic USPTO FOIA release stats (`https://www.governmentattic.org/61docs/USPTOStatsPatentSecrecyOrders2024.pdf`) | Secondary (FOIA release metadata + stats) | Medium-High | Neutral | FOIA routing | Confirms current USPTO FOIA request channel and demonstrates releases include secrecy-order activity summaries, but not individual order texts in this artifact |
| E-012 | 2026-04-27 | NARA NextGen API docs discovery (`/api/v2/api-docs/`, `/api/v2/swagger.json`) | Secondary (technical access path) | High | Neutral | retrieval-method status | Confirms machine API documentation endpoints exist; record-search endpoint access from this environment currently returns static HTML, so direct data pull remains pending alternate access/auth path |

---

## Priority Retrieval Queue

1. USPTO records naming secrecy order number and application linkage for `US756124A`.
2. USPTO or agency release rescinding order `756,124` (if issued).
3. NARA holdings referencing the same order number and filing serial.
4. FOIA responses from DoD/NSA/Commerce with order-control metadata.

---

## Immediate Intake Checklist

- Save artifact in `investigation-dig/primary-756124/raw/` with immutable filename.
- Record SHA256 hash.
- Add one row to table with preliminary score.
- Add a short note: what this changes and what it still does not prove.

---

## Addendum 2026-05-01: Begich + NEXUS/Flanagan DIA-attribution verification

New verification pass driven by user-supplied screenshots (`IMG_5336.jpeg`, `IMG_5337.jpeg`, local prompting evidence only — not embedded in repo) cross-checked against publicly accessible transcriptions of the same source texts:

1. **NEXUS-derived "Three papers on Flanagan's Neurophone" — page 5** explicitly contains the phrase that the **"Defense Intelligence Agency slapped it under a secrecy order"** describing the action against the second Neurophone patent application.
   - Public-source transcription verified at: <https://www.scribd.com/doc/106800112/Patrick-Flanagan-s-Neurophone>

2. **Nick Begich, *Towards a New Alchemy* — section 3.5 / page 17** states:
   - Official word of the secrecy action was **sent April 25, 1969**.
   - Order number cited as **756,124**.
   - Identifies the **Defense Intelligence Agency** as the agency that "seized the patent information."
   - Secrecy lasted **until March 7, 1972**, when **US 3,647,970** issued.
   - Public-source transcription verified at: <https://www.jedisimon.com/articles/Deaf%20can%20hear.htm>

### Effect on the ledger

- The DIA attribution is now **confirmed as present in the Begich/Flanagan source tradition** (two independent secondary/tertiary nodes carrying matching language and date specificity), upgrading from "single-node Rex/Scribd echo" to "multi-node tertiary corroboration."
- Source class remains **Tertiary / narrative** until a primary USPTO/NARA/FOIA secrecy-order document is retrieved. **No primary government order text has been recovered.** Claim impact stays Neutral pending primary retrieval.
- Date precision improves: the **filing date** of the application is **August 29, 1968** (USPTO-confirmed), but the **secrecy-order notice/order date per Begich is April 25, 1969**. Earlier internal phrasing of "1968 DIA secrecy order" should be read as referring to the filing year, not the order date — see correction note below.
- The **DIA vs NSA conflict is preserved**: some passages in Flanagan's own first-person narrative (recoverable from the RexResearch compilation, see E-004) attribute the action to the **NSA** with the same order number `#756,124`, while Begich and the NEXUS-derived "Three papers" page 5 attribute it to the **DIA**. Both attributions remain in the corpus until primary records resolve which agency referred the secrecy action to the Commissioner of Patents.

### Evidence Table additions

| Artifact ID | Date added | Artifact | Source class | Authenticity confidence | Claim impact | Scope | Notes |
|---|---|---|---|---|---|---|---|
| E-013 | 2026-05-01 | NEXUS-derived "Three papers on Flanagan's Neurophone," page 5 (public transcription: <https://www.scribd.com/doc/106800112/Patrick-Flanagan-s-Neurophone>) | Tertiary (compiled narrative, transcribed) | Medium | Neutral | `756,124` order attribution | Contains the explicit phrase "Defense Intelligence Agency slapped it under a secrecy order"; corroborates DIA attribution but is not a primary government order document |
| E-014 | 2026-05-01 | Begich, *Towards a New Alchemy*, section 3.5 / page 17 (public transcription: <https://www.jedisimon.com/articles/Deaf%20can%20hear.htm>) | Tertiary (book chapter, transcribed) | Medium | Neutral | `756,124` order + date + rescission date | Provides notice date Apr 25 1969, order #756,124, DIA attribution, secrecy duration through Mar 7 1972 (matches `US 3,647,970` issue date) |
| E-015 | 2026-05-01 | User-supplied screenshots `IMG_5336.jpeg`, `IMG_5337.jpeg` of the above two passages | Local prompting evidence | N/A | Neutral | provenance trigger | Not embedded in repo; recorded here only as the prompt that triggered the public-source re-verification above |

### Correction note (terminology cleanup)

Any earlier repo phrasing of "1968 DIA secrecy order" or similar that conflates the filing year with the order year should be read in light of the now-explicit Begich timeline:

- **Application filed:** August 29, 1968 (USPTO confirmed)
- **Secrecy-order notice per Begich:** April 25, 1969
- **Rescission / patent issue:** March 7, 1972 (`US 3,647,970`)

A short pointer to this addendum has been added to `findings/investigation-dig/flanagan-claim-provenance.md` and to `findings/03_Technology_Patents/04_FLANAGAN_NEUROPHONE_AND_COUPLING.md`.

