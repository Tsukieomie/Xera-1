# MEDUSA Deep Audit (WaveBand MAE Program)

Scope: isolate the specific **Mob Excess Deterrent Using Silent Audio** lineage from unrelated "MEDUSA" programs and classify evidence strength against repo tiers.

## 1) Identity disambiguation (critical)

"MEDUSA" is a high-collision label across defense and civilian records. At least three unrelated clusters appear:

1. **WaveBand crowd-control MAE concept** (target of this audit)
2. **Undersea sensor-array MEDUSA** topics/awards (different acronym/program family)
3. **Later AI/COP or logistics projects named MEDUSA** (unrelated to MAE/V2K)

Conclusion: source filtering is mandatory before any inference.

## 2) Primary provenance chain (WaveBand MEDUSA)

### A. Archived Navy SBIR summary (primary anchor in corpus)

`medusa-navysbir-wayback.html` captures a Wayback snapshot of the old Navy SBIR search record with:
- Contract: `M67854-04-C-1012`
- Topic: `N03-163`
- Phase: `I`
- Title: `Remote Personnel Incapacitation System`
- Firm: `WaveBand Corporation`
- Program language naming MEDUSA and describing MAE-based discomfort/incapacitation concept
- Reported result language: operating frequency selected, hardware designed/built, pulse parameters confirmed, "experimental evidence of MAE observed."

This is the strongest in-repo artifact for program existence and declared Phase I outcomes.

### B. Corporate continuity / ownership chain

`medusa-sncorp-wayback.html` preserves a historical SNC press-page capture used in this repo to support that WaveBand was acquired by Sierra Nevada Corporation.

Interpretation: this supports organizational continuity/provenance of the contractor lineage; it does not establish operational fielding.

### C. Public reporting echoes (secondary)

Media coverage (e.g., Wired/New Scientist references in repository search captures) reiterates the same broad narrative, but these are downstream from primary contract/snapshot evidence and should remain secondary corroboration only.

## 3) What the evidence does and does not prove

## Supported

- A Navy-linked Phase I SBIR effort existed under the identified contract/topic with WaveBand.
- The project framing explicitly invokes MAE and non-lethal crowd-control intent.
- Prototype-level hardware activity and MAE observation are described in the archived summary text.

## Not supported (from current open corpus)

- No primary evidence in-corpus of completed Phase II/III transition for this exact MAE crowd-control line.
- No validated public test report establishing reliable deployed crowd-control efficacy at operational scales.
- No primary record proving sustained program-of-record adoption or broad operational fielding.

## 4) Tier placement (repo model)

- **T1 (mechanism):** MAE references in the summary are consistent with known mechanism literature context.
- **T3 (patent/program intent):** Strong for contract/prototype intent and engineering narrative.
- **T2 (semantic speech closure):** Not established by MEDUSA artifacts.
- **T4 (operational attribution/deployment):** Not established by currently recovered primary records.
- **T5 (policy/media context):** Media reports are context only.

## 5) Confidence grading for MEDUSA sub-claims

- "WaveBand had a Navy-funded MEDUSA Phase I effort" -> **High confidence**
- "MEDUSA demonstrated MAE in prototype context" -> **Moderate confidence** (self-reported in archived summary)
- "MEDUSA was operationally fielded at scale" -> **Low confidence / not established**
- "MEDUSA proves covert semantic V2K speech capability" -> **Not established**

## 6) Noise-control rules for future MEDUSA searches

When searching MEDUSA, require at least one of:
- `WaveBand`
- `M67854-04-C-1012`
- `N03-163`
- `Remote Personnel Incapacitation System`
- `Mob Excess Deterrent Using Silent Audio`

Exclude or separately bucket:
- Undersea sensor-array MEDUSA pages
- Recent AI/COP software MEDUSA pages
- Non-defense "Medusa" company/entity results

## 7) Net judgment

The MEDUSA record materially strengthens **T3 provenance** (real contract + explicit concept framing + prototype-stage claims) but does **not** close T2 or T4. In this repository, MEDUSA should remain a **program-intent/prototype anchor**, not a proof-of-deployment anchor.

## 8) Lineage question — ADS / LRAD vs MEDUSA (short answer)

A common follow-up question is whether the Active Denial System (ADS) or the LRAD / acoustic-hailing-device (AHD) family are evolutions or variations of WaveBand MEDUSA. **Short answer: no.** ADS is a JNLWP / JNLWD 95 GHz millimeter-wave skin-heating / repel system; LRAD / AHD is a fielded audible acoustic-hailing / voice-and-tone projection family; WaveBand MEDUSA was a Navy SBIR Phase I microwave-auditory-effect breadboard prototype. The three paths share the broad non-lethal / counter-personnel problem space, but the public evidence trail does not support a lineage claim from MEDUSA to ADS or to LRAD — different funding paths, different mechanisms, and disjoint evidence trails. "Adjacent / same broad NLW ecosystem" is fair; "evolution / variant / successor / transition path" is not. See `MEDUSA_VS_ADS_LRAD_LINEAGE_QUESTION.md` for the full one-stop write-up and `ADS_JNLWP_DEEP_DIVE_CONTRAST_NOTE_SUPPLEMENT.md` for the 2007-2015 contrast trail.

## 9) Cross-repo McLean-Books bound (Havana / Hodgkin-Huxley vs MEDUSA)

A second recurring follow-up is whether Clint McLean's Havana / Hodgkin-Huxley monographs (`Tsukieomie/McLean-Books`: *Solving Havana Syndrome…* 2022, ISBN 978-0-6397-2006-7; *Methods for Detecting Biology Affecting Electromagnetic Frequency Ranges Causing Havana Syndrome*, ~2024) close the WaveBand MEDUSA evidence question. They do not. The cross-repo audit found **zero** mentions of `MEDUSA`, `WaveBand`, `Sadovnik`, `Navy SBIR`, or `MAE` in either book; the only `MEDUSA` strings in the McLean-Books repository are two unsourced maintainer annotation lines in `EEG_RF_CONNECTION_AND_PATENT_EVOLUTION.md` with no citation, no frequency, and no waveform. McLean's mechanism work — sub-thermal pulsed RF → Hodgkin-Huxley equilibria → layered amplification, anchored around ~400–700 MHz head resonance citing ARRL, generally valid ≥10 MHz, with ADS 95 GHz used only as a generic existence proof — supports a **broad contextual hypothesis** that pulsed-RF / thermoelastic / neural-modulation systems belong in the Havana problem space. That is consistent with MEDUSA-class discussion at the category level, but it is **not** evidence of MEDUSA parameters, deployment, lineage, or Havana causation. McLean's books are self-published and non-peer-reviewed; for primary medical / IC anchors, route directly to Frey 1962, Lin 2002 / 2017, Golomb 2018, NAS 2020, and the ODNI 2022 expert panel rather than via McLean. See `MCLEAN_BOOKS_HAVANA_MEDUSA_WAVE_NOTE.md` for the full bound.

## 10) Contemporaneity context: Army CALL "voice to skull devices" thesaurus entry

The Army Center for Army Lessons Learned (CALL) Thesaurus "voice to skull devices" entry — preserved by FAS at <https://sgp.fas.org/othergov/dod/vts.html>, original CALL URL `http://call.army.mil/products/thesaur_e/00016275.htm`, broader term "nonlethal weapons" — carries a last-reviewed date of **25 March 2004**, which falls inside the MEDUSA Phase I performance period **19 November 2003 — 19 May 2004**. This is contemporaneous **terminology + prototype-development** overlap inside the early-2000s DoD non-lethal-weapons ecosystem. It strengthens T3 provenance only; it does not upgrade T2 (semantic speech) or T4 (deployment/attribution). The 2008 Phys.org / Wired / New Scientist coverage cluster is a public-visibility resurfacing event, not documented program discontinuation. See `CALL_THESAURUS_MEDUSA_CONTEMPORANEITY_NOTE.md` and `v2k-evidence-matrix.md` Version 38.