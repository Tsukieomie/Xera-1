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

## 11) Primary-page deep read — `medusa-navysbir-wayback.html` (Wayback 2008-04-09)

This section is a **line-by-line discipline pass** on the archived Navy SBIR **Phase I Summary Report** page mirrored in-repo. It does not add new URLs; it constrains how far primary language can be pushed.

### 11.1 Frozen bibliographic header (award block)

From the HTML award table (verbatim strings, punctuation as captured):

| Field | Value in mirror |
| --- | --- |
| Page title | `Phase I Summary Report` |
| Government contact | Mr. George Gibbs (`george.gibbs@usmc.mil`) |
| Contractor POC | Dr. Lev Sadovnik (`lsadovnik@waveband.com`) |
| Firm | WaveBand Corporation, 17152 Armstrong Avenue, Irvine, CA 92614-5718 |
| Contract # | `M67854-04-C-1012` |
| Topic | `N03-163` |
| Solicitation | `03.2` |
| SYSCOM | `MARCOR` |
| Award amount | `99965.00` |
| Phase | `I` |
| Program | `Navy SBIR` |
| Start / End Date | `11/19/2003 - 05/19/2004` |
| FY Reported | `2004` |
| Title | `Remote Personnel Incapacitation System` |

**Interpretation:** six-month Phase I, **USMC SYSCOM** channel, **under $100k** — consistent with breadboard risk reduction, not a program-of-record procurement.

### 11.2 Objective paragraph — acronym, mechanism, phenomenology (not speech)

The objective `<span>` text (Wayback capture) defines MEDUSA and ties it to MAE. Notable details:

- **Acronym is explicit:** *"MEDUSA (Mob Excess Deterrent Using Silent Audio)"* — the word **"silent"** here is **MAE / internal-sensation framing**, not a claim that the device is silent to bystanders in all modes; the same paragraph still describes **microwave irradiation** and **auditory sensation**.
- **Mechanism claim:** *"well established microwave auditory effect (MAE)"* and *"strong sound sensation in the human head"* under *"specifically selected microwave pulses of low energy"*.
- **Operational verbs:** *"discomfort"*, *"deterring personnel"*, *"temporarily incapacitating particular individuals"* — **aversive / incapacitation** intent, not **semantic communication** intent.

**OCR/typography in government HTML:** the mirror reads *"The main goal of the Phase I project **wad** to design…"* — almost certainly **"was"**; do not treat the typo as substantive.

### 11.3 Results paragraph — five self-reported bullets (prototype, not field)

The Phase I results list is only:

1. An operating frequency was chosen  
2. Hardware requirements were established (commercial magnetron, high-voltage pulse former)  
3. Hardware was designed and built  
4. Power measurements; pulse parameters confirmed  
5. **Experimental evidence of MAE was observed**

**Load-bearing negative:** there is **no** separate bullet for human-subject testing at range, crowd trials, **intelligibility metrics**, **word error rate**, **deployment**, or **transition to Phase II**. Evidence grade stays **contractor Phase I self-report** (Moderate confidence for "something was built and MAE was seen in the lab sense of the summary," per §5).

### 11.4 "Potential Applications and Benefits" — **requirements language**, not demonstrated capability

The benefits paragraph mixes **stated use cases** (perimeter protection, hearing-impaired assistive communication, law enforcement / military crowd control) with a **future-tense specification block:** *"The system **will**: be portable, require low power, … be able to **switch from crowd to individual coverage**, …"*.

**Discipline point:** in acquisition grammar, this reads like **desired system attributes** copied from a solicitation or internal concept brief — **not** outcomes demonstrated inside the six-month Phase I window. Treating that sentence as proof of built hardware capability would be **tier collapse** (requirements text → T4). It remains **T3 / intent** unless a separate test report is produced.

### 11.5 Tier-B lexical scan on the primary page body

A case-insensitive search of `medusa-navysbir-wayback.html` for: `speech`, `intelligib`, `word`, `voice`, `semantic`, `conversation` → **no matches** in the objective/results/benefits spans.

**Conclusion:** the **archived Navy SBIR summary page itself** does **not** assert Tier-B **conversational microwave speech**; press and secondary narratives are where that escalation usually enters. Repo advocacy file `findings/03_Technology_Patents/35_MEDUSA_DUAL_USE_AND_NAVY_SBIR.md` may **infer** operational bridges; this audit file stays bound to **what the primary mirror text says**.

### 11.6 Tight coupling back to EPIC / `N03-163` (continuation hygiene)

Combine §11 with `MEDUSA_TRANSITION_GAP_ANALYSIS.md`:

- **EPIC (Invocon)** shows **Phase I → Phase II** under bulk-row topic code **`N03-163`** (`M67854-05-C-6509`).
- **MEDUSA (WaveBand)** shows **Phase I only** at `M67854-04-C-1012` with topic **`N03-163`** on the summary page but **topic code blank** in the SBIR bulk row used in the gap analysis.

So: **shared topic code on paper does not equal same engineering line.** Safe sentence: *Open SBIR bulk + archived summary support a WaveBand MEDUSA Phase I MAE prototype and a separate Invocon EPIC line with visible Phase II; they do not, in this corpus, merge into one transitioned MEDUSA product record.*