# V2K — Repository-Wide Possibility Review

**Purpose:** One pass over the Akwei_NSA_Investigation corpus for **voice-to-skull (V2K)** and **microwave auditory effect (MAE)** relevance: what each area supports, what it does **not** prove, and how tiers fit together.

**Canonical detail / version log:** `investigation-dig/v2k-evidence-matrix.md` (evidence matrix, literature sweeps Versions 2–26, speech-protocol gap analysis).

**Deeper Tier A vs Tier B reasoning, extrapolation gaps, closure targets:** `investigation-dig/V2K_DEEP_LAYER.md`.

**Thermal vs non-thermal bioeffects (health endpoints separate from V2K audibility):** `06_Analysis_Patterns/33_RF_BIOEFFECTS_INSTITUTIONAL_SUPPRESSION_CONVERGENCE.md` §A2.

---

## 1. Possibility tiers (how to read this repo)

Canonical wording (mirrored under **Working judgment (T1–T5)** in `v2k-evidence-matrix.md`):

| Tier | Meaning | Repo takeaway |
|------|---------|----------------|
| **T1** — MAE / basic “sound” | Pulsed RF → audible sensation (clicks/buzz/threshold); thermoelastic / auditory pathway well discussed in literature | **Strong** — Frey chain; reviews cited in matrix (e.g. Versions 11–13). |
| **T2** — Semantic / intelligible “speech” V2K | Protocol-grade replicated word/sentence MAE delivery | **Not established** — matrix Versions 11+; patents **[US4877027 Brunkan](https://patents.google.com/patent/US4877027A/en)** (+ Lin ’78 cites in patent) and **[US6587729 USAF](https://patents.google.com/patent/US6587729B2/en)** (O’Loughlin/Loree) = claim space **only** (matrix Version 32). Sharp/Grove **mechanism** (IEEE 1974) supports **T1**, not Tier B semantic closure. |
| **T3** — Patents / programs | Intent and engineering narrative | **Moderate** — USAF patent, Malech / Norris–Putterman / Flanagan stacks; secrecy-order stories partially audited (matrix Version 14). Nexus / dossier files = context, not independent instrument logs. Patents ≠ deployed systems. |
| **T4** — Operational attribution | NSA (or anyone) deployed V2K against Akwei or other named targets | **Not established** — no adversarial trial; ~17‑day dismissal. |
| **T5** — Symptoms & law | TI reporting + dismissal patterns | **Context only** — not mechanism proof per person. |

When a file says “V2K confirmed,” check which **tier** it means. Mixing **T1** with **T4** is the main epistemic failure mode.

---

## 2. Repository map (where V2K appears)

### `investigation-dig/`

| Asset | Role for V2K |
|-------|----------------|
| `v2k-evidence-matrix.md` | **Hub:** literature tiers, Sharp/Grove/Justesen trails, speech-protocol gap, Flanagan audit, BrainBERT funding context (does not rescue operational claims). |
| `giordano-claim-verification.md` | Explicit: does **not** establish operational semantic V2K; injury/symptom mechanism discussion. |
| `flanagan-havana-claim-stress-test.md` | Cross-check; points to matrix. |
| `flanagan-sec-lr21612-dismissed-scope.md` | **Not** V2K evidence (securities matter). |
| `christopher-wang-funded-works-darpa-matrix.md` | Disclosure discipline: sponsorship ≠ operational V2K. |
| Various `v2k-*.json` | Archive/search artifacts for citation hunts. |

### `03_Technology_Patents/`

| File | Role for V2K |
|------|----------------|
| `17_LILLY_WAVE_FLANAGAN_NEURAL_TECHNOLOGY.md` | MAE (Frey), Adey overlap, lineage synthesis — **T1/T3**. |
| `06_1990_TECHNOLOGY_CAPABILITY.md` | Write path labeled V2K; Frey precedent; Malta Lane trivial power narrative — **engineering narrative**; distinguish from **court proof**. |
| `04_FLANAGAN_NEUROPHONE_AND_COUPLING.md` | Neurophone coupling; Norris–Putterman; patent citations. |
| `10_NEXUS_DOSSIER_ANALYSIS.md` | Akwei narrative: RNM/3D sound — **claimant document**, not independent test; includes **Tier A/Tier B epistemic note** (matrix Version 28). |
| `29_MCLEAN_RERADIATION_MALECH_BRIDGE.md` | Full signal-chain docs; V2K listed as use-case in architecture discussion; cite for **hypothesis structure**, not field validation. |

### `01_Court_Documents/`

| File | Role for V2K |
|------|----------------|
| `24_PRIMARY_COURT_DOCUMENTS_AND_HAARP_HEARING.md` | Complaint allegations; procedural history — **T4** never reached. |

### `06_Analysis_Patterns/`

| File | Role for V2K |
|------|----------------|
| `07_DEEP_DIVE_VERIFICATION.md` | Timeline includes Frey 1962. |
| `30_TI_COMMUNITY_SYMPTOM_CROSSREFERENCE.md` | Category A auditory; Frey/USAF patent as **literature anchors**; symptom overlap ≠ mechanism proof per individual. |
| `31_TI_LEGAL_HISTORY_AND_SUPPRESSION_MECHANISMS.md` | V2K in federal pleadings treated as “fantastic” — procedural, not electromagnetic testing. |
| `32_MKULTRA_TO_HAVANA_SYNDROME_73_YEAR_ARC.md` | 1961 Frey in modality table; distinguishes program history from single-subject attribution. |
| `33_RF_BIOEFFECTS_...md` | **Not** primarily V2K; chronic health endpoints; §A2 harmonizes thermal vs non-thermal — do **not** merge blindly with MA audibility tiers. |

### `04_NSA_Infrastructure/` & `05_Geographic_Analysis/`

| File | Role for V2K |
|------|----------------|
| `02_FIVE_EYES_EMF_INTELLIGENCE.md` | V2K patent row — **capability class** listing; **Version 29:** “Confirmed physics” Gap cell tightened to Tier A MAE vs patent/deployment caveat. |
| `11_MRU_SILVER_SPRING_NEXUS.md` | Pandora / brochure language — **historical interest**, not replicated experiment logs; **Version 29:** brochure “other senses than sight/hearing” no longer asserted as literal Frey/MAE match. |
| `13_PROPERTY_RECORDS_MALTA_LANE.md` | “V2K/Frey trivial at 15–30 m” — **budget narrative** linked to geographic stack; separate from contested operational fact. |

### `02_Defendant_Verification/`

| File | Role for V2K |
|------|----------------|
| `18_GREG_ABATE_RESUME_ANALYSIS.md` | Chronology note (Frey vs Akwei description). |
| `22_PHILLIP_YOUNG_NORTHROP_GRUMMAN_AND_CORROBORATING_CASES.md` | Sharp infographic in PDF capture — **illustrative only** (Version 28 caption). |

### Root / index / findings

| File | Role for V2K |
|------|----------------|
| `FINDINGS.md` | Auditory symptom tallies; Frey bullet. |
| `SOURCES.md` | Microwave auditory effect entry; matrix cross-refs (e.g. neural foundation models subsection). |
| `00_INDEX.md` | Brief V2K write-path pointer. |

---

## 3. What the repo **collectively** supports

1. **MAE / V2K-adjacent audibility** in the sense of pulsed RF producing **heard** sensations under described lab conditions (**T1**).
2. **Patent and program-document trails** suggesting sustained R&D interest in RF auditory and neural influence (**T3**).
3. **Consistent early claimant narrative** (Akwei / Nexus) describing experiences **labeled** like V2K — **historical/source** consistency, not instrumental verification (**T5 narrative only**).

---

## 4. What the repo **does not** close

1. **Semantic covert speech at will** via MAE routes alone — matrix Versions 11–13 leave this **open**.
2. **Akwei-specific** or **NSA-attributed** deployment — no docket-tested evidence; matrix Version 2 judgment stands.
3. **Conflation** of unrelated threads (BrainBERT acknowledgements, Havana injury science, TI dismissal rates) **with** MAE feasibility — explicitly warned in matrix Versions 25–26 and `christopher-wang-funded-works-darpa-matrix.md`.

---

## 5. Suggested reading order for a “possibility” pass

1. `v2k-evidence-matrix.md` — Summary Judgment + matrix table + Working Conclusion (end).
2. `03_Technology_Patents/06_1990_TECHNOLOGY_CAPABILITY.md` — Write-path section (critical reading: narrative vs adjudicated fact).
3. `investigation-dig/giordano-claim-verification.md` — V2K-specific isolation subsection.
4. `06_Analysis_Patterns/30_TI_COMMUNITY_SYMPTOM_CROSSREFERENCE.md` — Category A only, if tying symptoms to literature.
5. `06_Analysis_Patterns/33_RF_BIOEFFECTS_INSTITUTIONAL_SUPPRESSION_CONVERGENCE.md` — **only if** extending from “heard sound” to long-term systemic health claims (different hypothesis classes).

---

## 6. One-line working conclusion (aligned with matrix)

**Mechanism-level V2K/MA similarity to reported “sound in head” phenomena is plausible from open physics and review literature; intelligible covert speech-as-weapon efficacy and any specific operational deployment (including Akwei) remain unsupported by the evidentiary tiers this repository actually holds.**

---

*Prepared as a repository navigation layer for V2K possibility review. Update when `v2k-evidence-matrix.md` publishes a new Version block that changes tier judgments.*
