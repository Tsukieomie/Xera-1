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

