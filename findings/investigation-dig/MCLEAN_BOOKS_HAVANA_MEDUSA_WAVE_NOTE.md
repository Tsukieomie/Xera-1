# McLean Books (Havana / Hodgkin-Huxley) vs WaveBand MEDUSA — what they support and what they do not

Date: April 2026

Scope: this note records what the cross-repo audit of `Tsukieomie/McLean-Books`
(Clint McLean's Havana / RF-bioeffects / SDR-detection corpus) actually
contributes — and does **not** contribute — to the WaveBand MEDUSA evidence
question being tracked in this `investigation-dig/` folder. It is a companion
to `MEDUSA_DEEP_AUDIT.md`, `MEDUSA_VS_ADS_LRAD_LINEAGE_QUESTION.md`,
`WAVEBAND_ENTITY_LINEAGE_NOTE.md`, and the existing
`primary-mclean-book/BOOK_TEXT_INVENTORY.md` inventory. It introduces no new
primary MEDUSA evidence; it bounds what McLean's published work can be cited
for without overclaim.

The user clarification that prompted this note: McLean's mechanism work lives
in a separate GitHub repository (`Tsukieomie/McLean-Books`), and the parent
agent has now audited that repository directly. This note encodes what that
audit established, so future readers do not need to re-derive it.

---

## 1) The McLean-Books repository, as audited

Repository: `https://github.com/Tsukieomie/McLean-Books` — described as Clint
McLean's research on Havana Syndrome, RF biological effects, and SDR
detection methods.

The repository physically contains full-text Markdown plus PDF / EPUB / MOBI /
AZW3 / DOCX / HTML editions of two self-published monographs:

- `01-Solving-Havana-Syndrome/McLean_Solving_Havana_Syndrome.md` —
  *Solving Havana Syndrome and Biological Effects of RF Using the
  Hodgkin-Huxley Neuron Model*, Clint McLean, McLean Research Institute,
  2022, ISBN `978-0-6397-2006-7`, self-published.
- `02-Methods-for-Detecting/McLean_Methods_for_Detecting.md` —
  *Methods for Detecting Biology Affecting Electromagnetic Frequency Ranges
  Causing Havana Syndrome* (likely 2024).

The Markdown editions are the same OCR-derived files already inventoried at
`investigation-dig/primary-mclean-book/BOOK_TEXT_INVENTORY.md` (Kindle ASIN
`B0BCNG8H89`, OCR-extracted January 2026).

Companion simulation code: `https://github.com/ClintMclean74/Hodgkin-HuxleyCode`.

Public author page: `https://mcleanresearchinstitute.com/solving_havana_syndrome.htm`
(states that the work uses Hodgkin-Huxley and links to the simulation
repository; does not directly cite WaveBand, MEDUSA, or `M67854-04-C-1012`).

## 2) What the McLean books actually argue (mechanism, not lineage)

Per the cross-repo audit, McLean's argument across the two books is:

- Sub-thermal pulsed RF can drive small temperature excursions
  (the audit characterises the narrative magnitude as on the order of
  +0.0001 °C per layer-six amplification step — used as an illustrative
  simulation parameter, not as a measured clinical exposure).
- Those excursions shift Hodgkin-Huxley equilibria, perturbing membrane
  voltage and spike timing.
- Feedforward / layered neural-network amplification scales the
  per-neuron perturbation upwards in a way the author argues can plausibly
  produce Havana-Syndrome-like neurological symptoms.
- The relevant frequency band, in McLean's framing, is anchored around
  human-head resonance roughly 400–700 MHz, citing ARRL antenna /
  resonance tables; the broader argument is presented as valid for RF
  ≥10 MHz.
- The Active Denial System (ADS, 95 GHz) is referenced only as a
  generic existence proof that high-frequency directed RF energy systems
  exist — *not* as a MEDUSA lineage claim and *not* as an ADS-causes-Havana
  claim.

This is consistent with the prior `BOOK_TEXT_INVENTORY.md` summary; this
note adds the explicit 400–700 MHz / ≥10 MHz framing and the explicit ADS
disclaimer because those are the two points most often miscited in
secondary commentary.

## 3) What the McLean books contain regarding MEDUSA / WaveBand — the negative result

The cross-repo audit ran target-term scans across the McLean-Books corpus
for: `MEDUSA`, `WaveBand`, `Sadovnik`, `Navy SBIR`, and `MAE` (microwave
auditory effect).

Result, as audited:

- **Zero** mentions of `WaveBand`, `Sadovnik`, `Navy SBIR`, or `MAE`
  anywhere in either book.
- The only `MEDUSA` strings present in the McLean-Books repository are
  **two unsourced maintainer annotation lines** in
  `EEG_RF_CONNECTION_AND_PATENT_EVOLUTION.md`, mapping
  `US 7,740,596 → MEDUSA → "pulsed RF neural disruption"`.
  These two lines have **no citation, no frequency value, no waveform
  description, and no contracting / programmatic anchor**.

These maintainer annotations are **not** evidence of MEDUSA parameters,
deployment, lineage, or Havana causation. They should not be cited as such
in this corpus, and any downstream note that draws a "McLean confirms
MEDUSA" inference is unsupported by the actual book text.

## 4) Source-quality framing for the McLean books

The two McLean books are **self-published, non-peer-reviewed monographs**.
Their evidentiary value to this investigation is:

- A useful **synthesis** of pulsed-RF / thermoelastic / Hodgkin-Huxley
  argumentation aimed at the Havana Syndrome question.
- A reproducible **companion simulation repository**
  (`https://github.com/ClintMclean74/Hodgkin-HuxleyCode`) that can be
  inspected directly rather than taken on the author's word.

Where peer-reviewed or official sources are needed, the McLean books'
bibliography routes the reader to anchors that should be cited *directly*
in this corpus rather than via McLean:

- Frey 1962 (microwave hearing, original report).
- Lin 2002 / 2017 (microwave auditory effect; Havana-Syndrome plausibility
  analyses).
- Golomb 2018 (Havana Syndrome differential).
- NAS 2020 (National Academies report on Havana Syndrome).
- ODNI 2022 expert panel (Anomalous Health Incidents).

These are already, or should be, cited from their own primaries in
`SOURCES.md` and the relevant per-finding files; McLean is a synthesis
pointer to them, not their substitute.

## 5) What this means for the MEDUSA evidence question — the bound

The bound that this note encodes for the WaveBand MEDUSA thread:

- The McLean-Books corpus supports a **broad contextual hypothesis** that
  pulsed RF / microwave systems producing thermoelastic or neural-modulation
  effects are part of the relevant problem space for Havana Syndrome
  hypotheses. That is consistent with **MEDUSA-class discussion** at the
  category level.
- The McLean-Books corpus does **not** support:
  - any specific carrier frequency for WaveBand MEDUSA;
  - any specific PRF / waveform / pulse-energy parameter for MEDUSA;
  - any deployment, fielding, or programmatic-transition claim about
    MEDUSA;
  - any lineage claim from MEDUSA to ADS, LRAD, ADT, or any acoustic-
    hailing device family;
  - any causal claim that MEDUSA, or WaveBand more broadly, was the
    cause of Havana Syndrome cases.

In the language used elsewhere in this folder: McLean is a **contextual
hypothesis / modeling trail**, not **primary MEDUSA evidence**. He **does
not establish a frequency or PRF for MEDUSA**. He **does not establish
Havana causation**. The McLean books **do not mention MEDUSA or WaveBand**
in their text.

The public anchor that still controls the WaveBand MEDUSA description is
the archived Navy SBIR Phase I summary, which states that the MAE results
in a strong sound sensation in the human head when irradiated with
specifically selected low-energy microwave pulses, that an operating
frequency was chosen but not made public, and that the hardware envelope
includes a commercial magnetron and a high-voltage pulse former:

- `https://web.archive.org/web/20080409063721/http://www.navysbirprogram.com/NavySearch/Summary/summary.aspx?pk=F5B07D68-1B19-4235-B140-950CE2E19D08`
- Local mirror: `findings/investigation-dig/medusa-navysbir-wayback.html`.

## 6) Cross-repo audit landscape (where McLean / Havana / MEDUSA already live)

For readers tracing the same threads through the parent agent's other
audited repositories — these are reference pointers only; this corpus does
not import their text:

- `Tsukieomie/V2K-Microwave-Auditory-Research` — files such as
  `CLINT_MCLEAN_RESEARCH.md`, `CROSS_REFERENCE_MCLEAN_VIDEO.md`,
  `Q10_*`, and `MILITARY_APPLICATIONS.md` already organise the
  McLean / Frey / Havana / MEDUSA / LRAD threads. The McLean-Havana-HH
  spine is tightly cross-linked there; the McLean-MEDUSA bridge,
  consistent with the McLean-Books audit, is **not** directly bridged.
- `Tsukieomie/RF-Brain-Research` — heavy McLean / Havana / Hodgkin /
  Frey / frequency coverage; **zero** MEDUSA / WaveBand / ADS / LRAD
  hits in the audited surface.
- `Tsukieomie/RF-Bioeffects-Symptoms` — McLean references appear in
  `07_Detection/DETECTION_METHODS.md` and `06_Mechanisms/Q10_ION_CHANNEL_KINETICS.md`;
  MEDUSA / WaveBand strings appear only in
  `09_Cellular_Molecular/ACOUSTIC_PHONON_MECHANISM.md`; LRAD is absent.

The convergent picture across these repositories matches the per-book
audit summarised above: McLean's mechanism work is well-bridged to the
Havana / Hodgkin-Huxley question; it is **not** independently bridged to
the WaveBand MEDUSA programmatic record.

## 7) Drafting rules for any downstream note that touches this material

To prevent overclaim drift in future updates, downstream notes that cite
the McLean books in connection with WaveBand MEDUSA should hold to:

- Do not write that McLean "proves" MEDUSA caused Havana Syndrome.
- Do not write or imply a specific MEDUSA carrier frequency or PRF that
  is sourced to McLean. The MEDUSA frequency value is not public, per the
  Navy SBIR archive.
- Do not present the two `EEG_RF_CONNECTION_AND_PATENT_EVOLUTION.md`
  maintainer annotation lines as evidence of MEDUSA parameters or
  deployment.
- Do present McLean as: synthesis + Hodgkin-Huxley simulation companion,
  source-routed to peer-reviewed anchors (Frey 1962, Lin 2002 / 2017,
  Golomb 2018, NAS 2020, ODNI 2022), self-published, not peer-reviewed.

These rules are intentionally stricter than the general repository tone,
because the McLean / MEDUSA junction is the most overclaim-prone surface
in the corpus.
