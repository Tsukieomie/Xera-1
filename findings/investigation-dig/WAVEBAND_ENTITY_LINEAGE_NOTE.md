# WaveBand Entity Lineage Note

Date: April 2026

Scope: consolidate the hard-identifier and lineage signals recovered for **WaveBand Corporation** (the MEDUSA-era SBIR contractor) across California Secretary of State BizFile, SBIR.gov, GovConInABox / USAspending, and the USAspending recipient autocomplete endpoint. This note is a corroborating overlay to `WAVEBAND_ENTITY_RESOLUTION.md` and `WAVEBAND_IDENTIFIER_HUNT_RESULTS.md`.

## 1) California Secretary of State (BizFile)

Exact-name search for "WaveBand Corporation" returned a single matching entity:

- **Name:** `WAVEBAND CORPORATION`
- **Entity number:** `1775878` / `C1775878`
- **Initial filing date:** `01/05/1996`
- **Status:** `Merged Out`
- **Inactive date:** `07/02/2008`
- **Jurisdiction:** California
- **Type:** Stock Corporation - CA - General
- **Agent for service of process:** Josh Hayes, `17152 Armstrong Ave, Irvine, CA 92614`
- **Principal / mailing address:** `444 Salomon Circle, Sparks, NV 89434`

Source (interactive portal; entity detail panel opened inline against entity `C1775878`):
- https://bizfileonline.sos.ca.gov/search/business

Interpretation:
- The "Merged Out" status with inactive date 07/02/2008 is consistent with the historical WaveBand Corporation legal entity being absorbed into a successor (consistent with the SNC acquisition narrative dated May 2005 from `medusa-sncorp-wayback.html`, with the formal CA-side merger reflected in 2008).
- The principal/mailing address in Sparks, NV is geographically consistent with the SNC headquarters orbit; the agent address in Irvine is consistent with the operational MEDUSA-era site.

## 2) SBIR.gov portfolio anchor

The SBIR.gov firm portfolio for WaveBand Corporation reports:

- **Address:** `17152 Armstrong Ave, Irvine, CA 92614-0571`
- **UEI:** N/A (not present in the SBIR.gov view)
- **Employees:** 23
- **First award:** 1996
- **Phase I awards:** 58
- **Phase II awards:** 22
- **Total awarded:** $20,202,241

Source:
- https://www.sbir.gov/portfolio/349386

Interpretation:
- The Irvine Armstrong Avenue address matches the BizFile agent address and the MEDUSA-era SBIR record contact line for Lev Sadovnik.
- The 1996 first-award year is consistent with the BizFile initial filing date (01/05/1996).
- This portfolio is the cleanest single-page summary of WaveBand Corporation's federal R&D footprint.

## 3) GovConInABox / USAspending-derived profile

A GovConInABox profile for WaveBand Corporation (data source stated as USAspending.gov) reports:

- **UEI:** `WCCXCS4P9XX8`
- **CAGE:** `055X8`
- **Address:** `17152 ARMSTRONG AVE, IRVINE, CA 92614`
- **Parent:** `SIERRA NEVADA COMPANY LLC`
- **Business size:** small

Source:
- https://www.govconinabox.com/explore/contractors/profile/waveband-corporation-wccxcs

Interpretation:
- This corroborates the UEI (`WCCXCS4P9XX8`) and Sierra Nevada parent linkage already documented in `WAVEBAND_IDENTIFIER_HUNT_RESULTS.md`.
- The CAGE `055X8` provides an additional hard identifier for the MEDUSA-era WaveBand line that should be carried forward in any future SAM / FPDS / USAspending crosswalk work.

## 4) USAspending recipient autocomplete confirmation

A query against the USAspending recipient autocomplete endpoint using the UEI string `WCCXCS4P9XX8` returned a result mapping to `WAVEBAND CORPORATION`. The autocomplete response did **not** expose a DUNS value.

Source endpoint:
- https://api.usaspending.gov/api/v2/autocomplete/recipient/

Interpretation:
- This confirms `WCCXCS4P9XX8` as a live USAspending-side handle for WAVEBAND CORPORATION.
- It does not by itself establish a DUNS-of-record from this endpoint.

## 5) DUNS caution

`DUNS 830537317` has surfaced in at least one external context (an HQMC FOIA search snippet) in association with a WaveBand-shaped query. This DUNS should **not** be treated as authoritative WaveBand proof in this corpus without further record context. The hard DUNS value previously logged in `WAVEBAND_IDENTIFIER_HUNT_RESULTS.md` for the MEDUSA-era WAVEBAND CORPORATION line is `839439684` (from a direct USAspending recipient record). The two values are not interchangeable, and the FOIA-snippet number lacks the structured record context to be load-bearing here.

Working rule: DUNS for the MEDUSA-era WaveBand line stays at `839439684` from the direct USAspending recipient record; `830537317` is logged only as an unresolved external hit pending corroboration.

## 6) Combined identity table (MEDUSA-era WaveBand Corporation)

| Field | Value | Source |
| --- | --- | --- |
| Legal name | WAVEBAND CORPORATION | CA SoS BizFile / USAspending |
| CA entity number | 1775878 / C1775878 | CA SoS BizFile |
| Initial filing | 1996-01-05 | CA SoS BizFile |
| Status | Merged Out | CA SoS BizFile |
| Inactive date | 2008-07-02 | CA SoS BizFile |
| UEI | WCCXCS4P9XX8 | USAspending recipient + GovConInABox |
| CAGE | 055X8 | GovConInABox (USAspending-derived) |
| DUNS | 839439684 | USAspending recipient record (per `WAVEBAND_IDENTIFIER_HUNT_RESULTS.md`) |
| Operational address | 17152 Armstrong Ave, Irvine, CA 92614 | SBIR.gov, GovConInABox, BizFile agent |
| Mailing / principal | 444 Salomon Circle, Sparks, NV 89434 | CA SoS BizFile |
| Parent | Sierra Nevada Company, LLC | GovConInABox + USAspending recipient record |
| First SBIR award | 1996 | SBIR.gov portfolio |
| Phase I / II / total | 58 / 22 / $20,202,241 | SBIR.gov portfolio |

## 7) Tier impact

- **T3 (program intent / provenance):** strengthened — multi-source corroboration of MEDUSA-era WaveBand identity, hard identifiers, and corporate lifecycle (1996 birth, 2008 merge-out).
- **T4 (operational deployment):** unchanged — still not established.
- Two-entity model (`WaveBand Corporation` ≠ `Waveband Communications`) **maintained**.

## 8) Open TODOs

- Pull the California merger / conversion filing image from BizFile for entity `C1775878` if downloadable, to surface the named successor entity explicitly.
- Pull an official SAM extract (current or historical) for `UEI WCCXCS4P9XX8` if any clean export is available.
- Resolve the `830537317` DUNS hit from the HQMC FOIA snippet — either corroborate or formally dismiss with record context.
- DTIC / MCSC FOIA remains the top primary route for any MEDUSA final report.
