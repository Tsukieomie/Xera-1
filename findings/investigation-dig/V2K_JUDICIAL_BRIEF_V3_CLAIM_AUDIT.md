# V2K Judicial Brief v3 Claim Audit

Purpose: map the PDF `V2K_Technology_Judicial_Brief_v3.pdf` scorecard claims to this repo's tier discipline (`T1`-`T5`) and provide editorial action guidance.

Baseline used for verdicts:
- `investigation-dig/v2k-evidence-matrix.md`
- `investigation-dig/V2K_REPO_POSSIBILITY_REVIEW.md`
- `investigation-dig/V2K_DEEP_LAYER.md`

Legend:
- `Keep` = claim can stand with minor wording discipline.
- `Rewrite` = partially supported, but over-asserted in current PDF wording.
- `Drop` = insufficient evidence for the stated confidence level.

## Audit Table (PDF Section XII: 22-Claim Scorecard)

| # | PDF claim (abridged) | PDF grade | Repo verdict | Tier mapping | Action |
|---|---|---|---|---|---|
| 1 | Pulsed RF -> thermoelastic pressure wave | CONFIRMED | Supported | T1 | Keep |
| 2 | Wave reaches cochlea via bone conduction | CONFIRMED | Supported | T1 | Keep |
| 3 | Hair-cell activation as hearing pathway | CONFIRMED | Supported (mechanism class) | T1 | Keep |
| 4 | RF can convey intelligible speech | CONFIRMED | Not established as protocol-grade replication | T2 | Rewrite |
| 5 | PIEZO2 in cochlear transduction complex | CONFIRMED | Supported biologically, indirect for MAE speech claims | T1-supporting | Rewrite |
| 6 | PIEZO2 role in high-frequency cochlear transduction | CONFIRMED | Supported | T1-supporting | Keep |
| 7 | Acoustic pressure -> PIEZO2 -> AP chain | CONFIRMED | Supported as mechanism biology; not operational V2K proof | T1-supporting | Rewrite |
| 8 | Spike timing auditory coding (HH lineage) | CONFIRMED | Supported general neuroscience | Background | Keep |
| 9 | Flanagan patents confirm nerve-deaf transduction/speech intelligibility | CONFIRMED | Patent claims only; not peer efficacy closure | T3 | Rewrite |
| 10 | DoD secrecy order on foundational V2K patent | CONFIRMED | Secrecy-order event plausible/partly audited, interpretation over-strong | T3 | Rewrite |
| 11 | Malech bidirectional remote monitoring/alteration | CONFIRMED | Patent claim, no open replication | T3 -> T2/T4 gap | Rewrite |
| 12 | Army officially defined V2K as weapons category | CONFIRMED | Terminology signal, not proof of deployed capability | T3/T5-context | Rewrite |
| 13 | Navy contracted V2K-based weapon (MEDUSA) | CONFIRMED | Contract-level provenance improved, but efficacy/deployment unknown | T3 | Rewrite |
| 14 | CIA authorized remote electronic behavior activation research | CONFIRMED | Program-document context only; not direct V2K efficacy proof | T3/T5-context | Rewrite |
| 15 | Moscow Signal caused documented neuro symptoms | CONFIRMED | Historical exposure evidence mixed; causality remains contested | T5-context | Rewrite |
| 16 | NAS 2020 "most plausible mechanism" pulsed RF for AHI | CONFIRMED | Correctly context-bound if quoted narrowly | T1/T5-context | Keep |
| 17 | FDA acoustic devices prove deep noninvasive targeting | CONFIRMED | True for FUS domain, but non-transferable to RF covert channel by default | Adjacent tech context | Rewrite |
| 18 | 2024 portable microwave device acquired by U.S. govt | CONFIRMED | Open reporting claim; not independently primary-verified in repo | T5-context | Rewrite |
| 19 | Pentagon testing confirmed AHI-consistent injuries | CONFIRMED | Media-reported; not primary lab record in corpus | T5-context | Rewrite |
| 20 | HAVANA Act legislatively recognized directed pulsed RF injuries | CONFIRMED | Act exists; legal interpretation in PDF overstates mechanism adjudication | Legal context | Rewrite |
| 21 | RF directly modulates neural firing through skull | INFERENTIAL | Reasonable inferential framing if not over-extended | Inferential bridge | Keep |
| 22 | Malech-type passive remote RF brain reading at operational range | UNCONFIRMED | Matches repo stance | Unconfirmed | Keep |

## Findings-Level Audit (PDF Section XIII)

| PDF finding | Repo verdict | Action |
|---|---|---|
| Finding 1 ("technology is real" incl. intelligible speech closure) | Mechanism real; speech closure over-asserted | Rewrite |
| Finding 2 (molecular mechanism "fully confirmed") | Mechanism support improved; does not close covert speech channel | Rewrite |
| Finding 3 (government programs confirm technology) | Program history supports interest, not operational proof | Rewrite |
| Finding 4 (acoustic precision clinically proven -> distance RF impossibility rebutted) | Cross-domain leap (FUS -> RF covert speech) is over-strong | Rewrite |
| Finding 5 (targeting architecture exists) | Surveillance/geolocation evidence exists; delivery-chain proof incomplete | Rewrite |
| Finding 6 (portable device acquired/confirmed) | Reporting exists; primary adjudicated evidence absent in corpus | Rewrite |
| Finding 7 (legal framework supports recognition) | Mixed; some legal support, but not scientific closure | Rewrite |
| Finding 8 (Akwei dismissal reflects gatekeeping not merits) | Procedural concerns valid; motive/conclusion should be cautious | Rewrite |
| Overall conclusion ("technology is science, operational confirmed") | Overstates T2/T4 | Rewrite |

## Suggested Replacement Language (drop-in)

- Replace: "V2K intelligible speech is confirmed."  
  With: "Microwave auditory mechanism is strongly supported; reliable covert semantic speech delivery remains unresolved in open peer protocol."

- Replace: "Patents and secrecy orders confirm operational capability."  
  With: "Patents and secrecy-order events indicate engineering/program interest and sensitivity, but do not substitute for replicated efficacy studies."

- Replace: "MEDUSA confirms fielded capability."  
  With: "MEDUSA archival contract provenance supports program intent/prototyping history; public record does not yet establish validated operational performance."

- Replace: "AHI/HAVANA evidence proves V2K deployment."  
  With: "AHI literature and policy actions provide contextual relevance; they do not by themselves adjudicate Akwei-specific attribution."

## Net Assessment

The PDF is strongest as an advocacy synthesis for:
- mechanism plausibility (`T1`) and
- government/patent/program-interest continuity (`T3`).

It is weakest where it upgrades:
- semantic speech efficacy (`T2`) and
- actor/case attribution (`T4`)
to "confirmed."

Recommended use in this repo: retain as an external advocacy artifact, but normalize claims to `T1 strong / T2 open / T3 moderate / T4 not established / T5 context`.
