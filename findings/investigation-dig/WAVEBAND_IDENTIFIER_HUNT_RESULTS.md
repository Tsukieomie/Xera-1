# WaveBand Identifier Hunt Results (Hard-Link Pass)

Date: April 2026

Scope: hard identifiers only (`CAGE`, `UEI`, legal-entity records, successor/merger traces).

## Findings

1. **Waveband Communications has a distinct federal-contractor identifier footprint** in open procurement/profile aggregations, including CAGE references tied to modern radio-accessories contracting activity.  
2. **A separate historical WaveBand Corporation footprint exists** in open company records (California entity listing with its own entity number and historical address trajectory).  
3. **Direct merge-proof artifact not recovered** in this pass: no definitive public record was found that explicitly maps MEDUSA-era WaveBand Corporation identifiers to modern Waveband Communications identifiers via a formal successor chain.  
4. **CA filing portals are accessible but require interactive lookup steps** for complete document retrieval; this pass did not recover a downloaded merger/conversion filing that conclusively bridges the two entities.

## Decisive API-level identity split (new)

Direct USAspending API recipient records provide a hard, side-by-side identifier split:

1) `WAVEBAND CORPORATION`  
- Recipient ID: `1325084f-f575-8878-3137-4ae38728099f-C`  
- UEI: `WCCXCS4P9XX8`  
- DUNS: `839439684`  
- Address: `15245 ALTON PKWY STE 100, IRVINE, CA 92618`  
- Parent: `SIERRA NEVADA COMPANY, LLC` (`DD2QET4D27T3`)

2) `WAVEBAND COMMUNICATIONS, INC.`  
- Recipient ID: `c0b1f200-2f30-9840-a06f-b04752d55da7-C`  
- UEI: `MLVLHFM1P989`  
- DUNS: `825066785`  
- Address: `1912 LIBERTY RD, SYKESVILLE, MD 21784`  
- Parent points to itself (`WAVEBAND COMMUNICATIONS, INC.`)

Implication:
- This is affirmative structured evidence of **distinct federal-recipient identities** in USAspending records.
- The MEDUSA-era WaveBand entity line (Irvine + SNC parent linkage) is not interchangeable with the modern Sykesville Waveband Communications line.

## Working decision

Maintain the two-entity model:
- `WaveBand Corporation` (MEDUSA-era)
- `Waveband Communications` (modern contracting recipient)

Do not merge identity lines in T4/attribution arguments until hard-link evidence is recovered.
