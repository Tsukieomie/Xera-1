# Archival Retrieval Matrix — Tenth Pass

Companion file to: [`FLANAGAN_TENTH_PASS_ADDENDUM_20260518.md`](FLANAGAN_TENTH_PASS_ADDENDUM_20260518.md)

Date opened: 2026-05-18
Status: Active operational queue for the next records actions. Supersedes the equivalent queue sections of the sixth, seventh, eighth, and ninth passes for the lanes named here; the ninth-pass NARA Kansas City request package is incorporated by reference rather than rewritten.

## Purpose

Provide a single per-lane matrix of next records actions for the open investigation threads, with custodian, identifier, request channel, expected document class, evidentiary value, and a no-key vs. key-required column. Designed to be operated end-to-end without further triage.

## Legend

- **No-key.** Lane can be exercised with public-web or paper-mail tooling only; no API key, no agency credentials, no in-person visit required.
- **Key-required.** Lane requires a credential (ODP API key, repository registration, in-person on-site visit, paid subscription, or court order) before it can be exercised.
- **Paper-mail no-key.** Lane requires postal mail and fee payment but no agency credential.

## Lane: 756,124 / US 3,647,970 file wrapper

| Row | Custodian | Identifier | Request channel | Expected document class | Evidentiary value | Key status |
|---|---|---|---|---|---|---|
| FW-1 | NARA Kansas City | RG 241 / NAID 302050; band `#3,647,069 – 3,651,016`; entry UD13W 12 | `kansascity.archives@nara.gov` (ninth-pass package: [`FLANAGAN_NINTH_PASS_ADDENDUM_20260517.md`](FLANAGAN_NINTH_PASS_ADDENDUM_20260517.md)) | Patent case file (file wrapper, secrecy-order notice, Group 220 / Licensing & Review correspondence, ASPAB referral / concurrence, sponsor-agency communication, Notice of Allowability, classified enclosure indicators) | Closure of DIA-vs-NSA-vs-ASPAB / Service-channel attribution; primary certification of secrecy-order existence and rescission | Paper-mail no-key |
| FW-2 | USPTO Open Data Portal | application 05756124 | `https://api.uspto.gov/api/v1/patent/applications/05756124/documents` (ODP API key from `account.uspto.gov/profile/api-manager`) | Same file-wrapper documents as FW-1, in API-readable form | Same evidentiary value as FW-1, plus faster turnaround once key is provisioned | Key-required |
| FW-3 | USPTO Certified Copy Center | application 05756124 | `https://www.uspto.gov/learning-and-resources/frequently-asked-questions-about-certified-copy-center` | Certified copy of paper file wrapper | Same evidentiary value as FW-1, with USPTO certification rather than NARA custody | Paper-mail no-key (fee) |

## Lane: USPTO Licensing & Review / Group 220 sponsor correspondence

| Row | Custodian | Identifier | Request channel | Expected document class | Evidentiary value | Key status |
|---|---|---|---|---|---|---|
| LR-1 | USPTO Office of Patent Legal Administration / Licensing & Review | application 05756124 | USPTO FOIA channel; verify current branch designation under modern OPLA structure | Licensing & Review correspondence retained with the application or in successor offices | Names sponsoring agency for the secrecy order if retained in correspondence; otherwise a clean negative under FOIA exemptions | Paper-mail no-key (FOIA) |
| LR-2 | NARA (federal records center holdings) | RG 241 sub-series for Licensing & Review predecessor offices | NARA reference inquiry citing predecessor office name and date range | Group 220 predecessor correspondence series, if surviving under N1-241-10-001 successor or earlier disposition authority | Sponsor-agency identification or documented destruction under named schedule | Paper-mail no-key |

## Lane: Raborn / USNI Polaris oral history (narrowed)

| Row | Custodian | Identifier | Request channel | Expected document class | Evidentiary value | Key status |
|---|---|---|---|---|---|---|
| R-7 | U.S. Naval Institute Oral History Program | Raborn interview, 15 Sep 1972, Arlington VA, John T. Mason Jr., ~71 pages | **USNI cumulative subject index** (free finding aid) is the recommended first step before purchasing transcript pages; transcript-page orders via the USNI Oral History Program | Index entries for Flanagan / Neurophone / 756,124 / 3,647,970 / "speech scrambler" / secrecy order, if present | If index returns any of the named entries, test the Flanagan-as-personally-rescued-by-Raborn claim with direct transcript pages; if not, recorded as a narrowed negative without a transcript-page purchase | No-key for index; paper-mail no-key (fee) for transcript pages |
| R-8 | Hagley Museum and Library / Gencorp / Aerojet Rocketdyne | Aerojet-General executive correspondence 1968-1972 | Reference inquiry to Hagley; corporate-records succession inquiry to Aerojet Rocketdyne | Raborn-era executive correspondence, if surviving | Tests whether any 1968-1972 Raborn correspondence on Flanagan / Neurophone / 756,124 was retained in private corporate archive | No-key |
| R-9 | LBJ Presidential Library | Raborn DCI-era papers (1965-1966 only) | LBJ Library reference inquiry | DCI-era Raborn correspondence; predates 1969 order | Bibliographic only; not evidentiary for 1968-1972 window | No-key |

## Lane: Sharp / Grove voice-modulated microwave (still secondhand)

| Row | Custodian | Identifier | Request channel | Expected document class | Evidentiary value | Key status |
|---|---|---|---|---|---|---|
| WG-1 | University of Michigan, Bentley Historical Library | **Nicholas H. Steneck Collection** (papers, microwave-bioeffects research files, draft and notes for *The Microwave Debate*, 1984, MIT Press) | Bentley reference inquiry; on-site or off-site copy request | Working-files copy or reference to primary Sharp / Grove WRAIR report; period inter-agency correspondence on the WRAIR microwave-bioeffects program | First-mover document recovery for voice-modulation claim; most plausible academic location for surviving Steneck research files | No-key (reference); on-site or paper-mail copy (fee) |
| WG-2 | WRAIR / Gorgas Army Medical Library predecessor; DTIC | FY74-FY76 WRAIR microwave-bioeffects technical reports; Sharp / Grove report identifier (unknown — recovery target) | DTIC search by WRAIR project codes, performing investigator names, report-number range; Army medical-library reference inquiry | Primary WRAIR technical report on voice-modulated microwave demonstration, if it exists in the surviving record | Converts the Sharp / Grove claim from Justesen-1975-secondhand to primary; or documents that no such report survives | No-key for DTIC; paper-mail no-key for Army medical reference |
| WG-3 | Department of the Army FOIA Office | FY74-FY76 WRAIR microwave-bioeffects program; named investigators Sharp, Grove, Gandhi; voice-modulation demonstration | Army FOIA with refined request language tied to the FY74-FY76 program, performing investigators, and DA Form / accession-number ranges where known | Surviving program correspondence; cross-reference to retired records; possible release of the underlying report | Same as WG-2 with FOIA-channel routing; expected to be slow but cumulative | Paper-mail no-key (FOIA) |

## Lane: Period Neurophone framing (Analog July 1967 / Listening Inc.)

| Row | Custodian | Identifier | Request channel | Expected document class | Evidentiary value | Key status |
|---|---|---|---|---|---|---|
| AN-1 | Internet Archive | `sim_analog-science-fiction-and-fact_1967-07_79_5` (URL needs verification) | IA item-page fetch; capture cover, contents, Listening Inc. Annual Report insert | Page-image excerpts of the Annual Report insert | Anchors E-B1 in [`BATTEAU_LISTENING_PROVENANCE_LEDGER.md`](BATTEAU_LISTENING_PROVENANCE_LEDGER.md) as fully primary-anchored | No-key |
| AN-2 | Massachusetts Secretary of the Commonwealth | Listening Incorporated, Arlington, MA | Corporations Division online search; certified-copy request | Formation, officer, dissolution records | Corroborates Annual Report's officer designations and bounds corporate lifespan independently of Flanagan / Batteau personal narratives | No-key |
| AN-3 | Tufts University Archives | Batteau papers / dolphin-acoustics work product 1966 NONR 494(00) | Tufts Archives reference inquiry | Batteau-side correspondence | Tests for any Listening Inc. / Navy / China Lake correspondence at the Batteau archival end | No-key |

## Lane: Standoff dielectric bridge (open-literature stress test)

| Row | Custodian | Identifier | Request channel | Expected document class | Evidentiary value | Key status |
|---|---|---|---|---|---|---|
| SD-1 | DTIC | 30-50 kHz body-coupling / Neurophone-class technical reports, 1960s-1980s | DTIC technical-report search by frequency band and keywords | Period technical reports on ULF / VLF body-coupling, if any | Tests whether any classified-era program leaked into the DTIC release stream that would support a standoff coupling path | No-key |
| SD-2 | Internet Archive / NTIS | Frey / Foster / Lin / Sharp / Grove / Gandhi / Justesen primary papers (already partially recovered) | IA item-level access; NTIS catalog | Original primary papers | Re-anchors the [`STANDOFF_DIELECTRIC_BRIDGE_MATRIX.md`](STANDOFF_DIELECTRIC_BRIDGE_MATRIX.md) row entries to inline citations | No-key |

## Operational priority order (tenth pass)

1. **FW-1 (ninth-pass NARA Kansas City package)** — already operational; await response.
2. **WG-1 (Steneck Collection, Bentley)** — highest-yield new lane for the Sharp / Grove primary report.
3. **R-7 (USNI cumulative subject index)** — free, fast, narrows lane R-7 paid-transcript decision.
4. **AN-1 (Analog July 1967 PDF re-fetch and anchor)** — converts E-B1 from "URL pending" to primary-anchored.
5. **FW-2 (USPTO ODP API key)** — provision the key to unblock machine-readable file-wrapper retrieval.
6. **WG-2 / WG-3 (DTIC / Army FOIA)** — slow but cumulative; run in parallel.
7. **AN-2 / AN-3 (Massachusetts SOC and Tufts Archives)** — corroboration targets, lower urgency.
8. **R-8 / R-9 (Hagley / LBJ)** — secondary Raborn lanes after R-7 is resolved.
9. **SD-1 / SD-2** — open-literature anchoring; lower urgency than the active record-recovery lanes.

This matrix does not revise Section 1 / Section 7 attribution conclusions; agency attribution for the 756,124 order remains unresolved on the present public record.
