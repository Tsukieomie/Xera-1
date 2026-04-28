# MEDUSA Transition-Gap Analysis (Deeper Pass)

Goal: determine whether the WaveBand MEDUSA line (`M67854-04-C-1012`) appears to have transitioned to later-stage contracts in publicly indexed SBIR records.

Primary data used in this pass:
- `medusa-navysbir-wayback.html`
- `medusa-contract-cluster-from-sbir-bulk.json`
- `medusa-sbir-topic-n03-163-from-bulk.json`
- `search-medusa-n03-163-family.json`

## 1) New finding: MEDUSA sits in a sibling cluster, but continuation appears to favor EPIC

From `medusa-contract-cluster-from-sbir-bulk.json`:

- `M67854-04-C-1012`  
  - Company: WaveBand Corporation  
  - Title: Remote Personnel Incapacitation System  
  - Agency tracking: `N032-0412`  
  - Phase: I  
  - Topic code: blank in SBIR bulk row

- `M67854-04-C-1013`  
  - Company: INVOCON, INC.  
  - Title: EPIC (Electromagnetic Personnel Interdiction Control)  
  - Agency tracking: `N032-0874`  
  - Phase: I  
  - Topic code: blank in SBIR bulk row

- `M67854-05-C-6509`  
  - Company: INVOCON, INC.  
  - Title: EPIC (Electromagnetic Personnel Interdiction Control)  
  - Agency tracking: `N032-0874`  
  - Phase: II  
  - Topic code: `N03-163`

Interpretation:
- The EPIC line shows clear Phase I -> Phase II continuity.
- The WaveBand MEDUSA line is visible at Phase I, but no matching Phase II continuation was recovered in this open index pass.

## 2) Why this matters for claim discipline

This resolves a common ambiguity:
- "N03-163 had Phase II follow-on" is true in bulk data.
- But attribution of that follow-on to WaveBand MEDUSA is not supported by this pass; the visible follow-on is EPIC/Invocon.

So the evidence supports:
- MEDUSA as a real Phase I prototype program narrative (`T3`)
- EPIC as the clearer publicly indexed transition path under `N03-163`
- No current open-record basis to claim MEDUSA itself was the transitioning/fielded line

## 3) Tier impact update

- `T3` (program intent/provenance): strengthened with better structure (MEDUSA Phase I + sibling/continuation map)
- `T2` (semantic speech efficacy): unchanged, not established
- `T4` (operational deployment): unchanged, not established

## 4) Evidence hygiene notes

- The SBIR bulk dataset headers use title-case keys (e.g., `Topic Code`, `Agency Tracking Number`), and many older rows have missing topic fields; this explains why strict topic-code-only filtering can miss relevant records.
- API endpoint attempts were rate-limited (HTTP 429), so this pass relied on bulk CSV extraction for reproducibility.

## 5) Practical repo language update

Safe phrasing:
"Open records show a WaveBand MEDUSA Phase I effort and a separate EPIC line with documented Phase II continuation under `N03-163`; open evidence in this corpus does not establish MEDUSA itself as the transitioned operational program."

## 6) Exact-contract follow-up (additional deep pass)

Follow-up exact-keyword probing (`M67854-04-C-1012`, `N032-0412`, title phrase, WaveBand) in primary procurement domains did not surface a clean direct modern-index record for the MEDUSA contract itself in this pass.

Notable nuance:
- A USAspending hit for **Waveband Communications, Inc.** appears in later years and is likely a separate contractor/entity lineage from the MEDUSA-era WaveBand context; treat as non-equivalent unless independently linked.

Interpretation:
- This reinforces the archive-first stance for MEDUSA provenance (`medusa-navysbir-wayback.html`) and the caution against assuming modern procurement index discoverability equals complete historical coverage.
