# WaveBand USAspending Graph Proof (Deep Pass)

Date: April 2026

Objective: move from name matching to graph-structured recipient linkage using official USAspending API endpoints.

## 1) Direct recipient records (hard identifiers)

### A. MEDUSA-line contractor node
- Name: `WAVEBAND CORPORATION`
- Recipient ID: `1325084f-f575-8878-3137-4ae38728099f-C`
- DUNS: `839439684`
- UEI: `WCCXCS4P9XX8`
- Location: `15245 ALTON PKWY STE 100, IRVINE, CA`
- Parent: `SIERRA NEVADA COMPANY, LLC` (`094373495` / `DD2QET4D27T3`)

Source file: `usaspending-recipient-waveband_corp.json`

### B. Modern comms contractor node
- Name: `WAVEBAND COMMUNICATIONS, INC.`
- Recipient ID: `c0b1f200-2f30-9840-a06f-b04752d55da7-C`
- DUNS: `825066785`
- UEI: `MLVLHFM1P989`
- Location: `1912 LIBERTY RD, SYKESVILLE, MD`
- Parent: self (`WAVEBAND COMMUNICATIONS, INC.`)

Source file: `usaspending-recipient-waveband_comms.json`

## 2) Parent/child graph evidence

Using `/api/v2/recipient/children/{duns_or_uei}/`:

- SNC parent graph (`DD2QET4D27T3`) includes `WAVEBAND CORPORATION` as a child node.
- `WAVEBAND COMMUNICATIONS` graphs (`825066785` and `MLVLHFM1P989`) resolve only to the communications entity itself, not to the SNC-linked WaveBand node.

Source files:
- `usaspending-children-DD2QET4D27T3.json`
- `usaspending-children-825066785.json`
- `usaspending-children-MLVLHFM1P989.json`

## 3) Deep-pass implication

This is stronger than prior name-only caution:

- The MEDUSA-line WaveBand and modern Waveband Communications are **separate recipient identity graphs** in official spending data.
- MEDUSA-era attribution should remain tied to the SNC-linked `WAVEBAND CORPORATION` node, not auto-extended to the communications node.

## 4) Investigative effect on closure bars

- Helps prevent false-positive T4 attribution by entity conflation.
- Does not by itself close T2, T4, or actor-specific case attribution.
- Upgrades T3 provenance hygiene from "probable split" -> "API-structured split."
