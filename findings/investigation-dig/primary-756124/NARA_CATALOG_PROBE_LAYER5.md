# Layer-5 Finding: NARA Online-Catalog Probe of NAID 302050 + USPTO Patent-Center Probe for Serial 756,124

Date: 2026-05-02
Owner: Investigation workflow
Scope: Layer-4 (`SF115_PRIMARY_READ_LAYER4.md`) established that the controlling successor disposition for serial 756,124 / `US 3,647,970` is **NARA SF-115 N1-241-10-001 item 2** ("Patent Case Files, Granted; Permanent: Transfer to NARA after closure"), and that the operational realization of that disposition is the band already recorded as `E-006`: `Patent Case Files (#3,647,069 - 3,651,016); ENTRY UD13W 12; NAID 302050`. Layer-5 converts the schedule-level finding into a survival-test on the actual NARA online catalog and the USPTO Patent Center, and answers two narrower questions:

1. Does NARA Catalog NAID 302050 actually contain a holding that covers patent number 3,647,970 (the band 3,647,069 - 3,651,016 of granted utility patent case files)?
2. Is the file wrapper for serial 756,124 / `US 3,647,970` accessible electronically through the USPTO Patent Center / IFW (Image File Wrapper), or is it paper-only and on-site at NARA Kansas City?

This file does **not** change the section 1 / section 7 attribution conclusions of `AGENCY_ATTRIBUTION_MATRIX.md` (DIA unproven; NSA / ASPAB / Service-channel attribution better supported than DIA-as-formal-sponsor). It refines the **closure-target queue** in `ARCHIVAL_TARGETS_756124.md` § 1 (c) and (h) by replacing schedule-level inferences with direct catalog-level confirmations or non-confirmations.

---

## 1) What was retrieved

Three independent surfaces:

- **NARA Online Catalog detail page** for NAID 302050 (the granted-utility-patent-case-files series) — `https://catalog.archives.gov/id/302050`. Public detail page captured 2026-05-02.
- **NARA RG 241 custodial-list page** (May 2018 transfer of patent records from NARA College Park to NARA Kansas City) — `https://www.archives.gov/research/news/rg-241-change-custodial-unit-2018-march-list`. Verbatim line for ENTRY UD13W 12 captured 2026-05-02.
- **NARA RG 241 series-title list at NARA Kansas City** — `https://www.archives.gov/kansas-city/finding-aids/html/rg241-series-title-list`. Verbatim series enumeration captured 2026-05-02.
- **NARA Catalog API documentation** — `https://www.archives.gov/research/catalog/help/api`, `https://www.archives.gov/research/catalog/help/api-getting-started`, and the GitHub-hosted "Using the National Archives Catalog API" reference (`http://usnationalarchives.github.io/Catalog-API/`). Captured 2026-05-02.
- **USPTO Patent Center** for application serial 756,124 / patent `US 3,647,970` — see § 4 below.

Independent of these three surfaces, a broad NARA Catalog search for `"application serial" "756,124" OR "US 3,647,970"` was run and recorded.

---

## 2) What NAID 302050 actually is (verbatim, primary)

From the NARA Online Catalog detail page (`https://catalog.archives.gov/id/302050`), captured 2026-05-02:

- **Title (canonical):** Utility Patent Case Files, January 1, 1836 – December 31, 1998
- **Other title:** Patented Case Files
- **Level:** Series
- **NAID:** 302050
- **Creator:** Department of Commerce. Patent and Trademark Office. (1975 - ) (Most Recent)
- **Type:** Textual Records
- **Collected / Covers:** January 1, 1836 – December 31, 1998
- **Part of Record Group:** 241 — Records of the Patent and Trademark Office (1836 - 1978)
- **File Units:** 708 File Units
- **Items:** 15 Items
- **Extent (Copy 1, Reference / Reproduction / Preservation):** Paper; **167,642 linear feet, 6 linear inches**; National Archives at Kansas City, Kansas City, MO 64108
- **Extent (Copy 2, Preservation):** Paper; 4 linear feet, 5 linear inches; National Archives at Kansas City
- **Repository contact:** National Archives at Kansas City, Kansas City, MO 64108; phone (816) 268-8000 / (816) 268-8038; email `kansascity.archives@nara.gov`
- **Disposition Authority Numbers (verbatim, displayed on the public detail page):** **N1-241-10-1, Item 2**; **N1-241-96-3, Item 4a**
- **Access:** Unrestricted
- **Use:** Unrestricted
- **Online availability:** "PARTIALLY AVAILABLE ONLINE" — "704 File Units and 19 Items (with a total of 29,434 digital objects) from this Series are currently online and ready to view."

**Description (verbatim, under the "Description" heading):**

> "This series consists of utility patent case files. Each patent case file may include the patent file wrapper, issued patent specification and drawings, petition for a patent, applicant's initial specification, draft drawings and oath of invention. The examination portion of the file contains correspondence between the patent examiner and the applicant or the applicant's attorney, amendments to the original specification and drawing. The letters patent were given to the applicant at the time of issue."

**Function (verbatim):**

> "These records were created to serve as the Patent Office's main series for the petitioning, amendment, examination, and issuance of letters patent for inventions."

**Arrangement (verbatim):**

> "Arranged numerically by patent number, with gaps; and unarranged.
>
> Patent files numbered 1 - 4,143,353 are arranged numerically by patent number.
>
> Patent files numbered approximately 4,685,368 - 5,854,041 are unarranged."

---

## 3) What this confirms and does not confirm

### 3.1 Three confirmations

1. **The disposition-authority crosswalk recorded in Layer-4 is correct.** The NARA Online Catalog detail page for NAID 302050 explicitly cites **N1-241-10-1, Item 2** (the SF-115 successor schedule directly read in `SF115_PRIMARY_READ_LAYER4.md`) as one of the two governing disposition authorities for the series. This is independent confirmation, on the catalog side, of the schedule-side finding in Layer-4. The second cited authority **N1-241-96-3, Item 4a** is a related cleared-applications disposition under the predecessor Group 2200 schedule and is consistent with the supersedure notice on the N1-241-96-003 PDF.

2. **The series covers the band that contains patent 3,647,970.** The catalog page states verbatim: "Patent files numbered 1 - 4,143,353 are arranged numerically by patent number." Patent number `3,647,970` falls inside this range. The independent RG 241 May 2018 custodial-list page (`https://www.archives.gov/research/news/rg-241-change-custodial-unit-2018-march-list`) lists verbatim:

   > "Patent Case Files (#3,647,069 - 3,651,016); ENTRY UD13W 12 (NAID 302050)"

   Patent `3,647,970` is inside the band `#3,647,069 - 3,651,016`, so the granted patent case file for `US 3,647,970` is custody-located at **NARA Kansas City, ENTRY UD13W 12, under series NAID 302050**. The previously recorded `E-006` band assignment is correct.

3. **Access to the holding is unrestricted.** Both Access and Use are flagged "Unrestricted" on the catalog page. The series is partially digitized (704 of 708 file units described as "online" with ~29,434 digital objects), but the physical originals are paper at NARA Kansas City. Reproductions can be ordered for a fee, or the records can be viewed by appointment in person under the procedure on the NARA patents page (`https://www.archives.gov/research/patents`).

### 3.2 Three non-confirmations / gaps

1. **No file-unit-level finding aid for the band 3,647,069 - 3,651,016 is exposed on the public detail page.** The catalog page reports 708 File Units across 73 paginated pages, but the publicly displayed sample is individual drawings/items, not numbered patent-range file units. The page does **not** display a container list, box-level folder list, or "Includes" range that lets a remote researcher confirm that a file unit specifically titled or labeled for serial 756,124 / `US 3,647,970` is present in NAID 302050 without making a direct Kansas City inquiry. This is a finding-aid-coverage gap on the catalog side, not a survival gap on the records side.

2. **The Layer-5 catalog-search hit-rate for the specific identifiers is zero.** A NARA Catalog search for `"application serial" "756,124" OR "US 3,647,970"` returned 1,862 raw hits, but **none of the top 20 results** named application serial 756,124 or patent `US 3,647,970` by serial / patent number. The top hits are unrelated false positives from the broad OR query (Fairbanks Land Office patent case files; DOJ record slips; BIA reindeer correspondence; Federal Register vol. 76 no. 207). There is no public Catalog-side hit on the Flanagan identifiers as text, which is consistent with the earlier `E-A17` negative-search finding.

3. **The NARA Catalog API v2 requires an API key.** The current `https://www.archives.gov/research/catalog/help/api-getting-started` documentation states that the API key must be requested from `Catalog_API@nara.gov` and that "an assigned API key must be incorporated into each API request" via the `x-api-key` HTTP header. This contradicts the 2016 NARAtions blog announcement (`https://narations.blogs.archives.gov/2016/04/25/the-new-read-write-api-for-our-catalog/`) which stated "No API key or account at all is required to do basic searching." The 2025 documentation supersedes the 2016 announcement; the 2016 statement should be treated as obsolete. Programmatic catalog searches without a key now consistently return only the SPA shell, regardless of `Accept` header. This is an access-method finding, not an access-rights finding (the records themselves remain Access: Unrestricted, Use: Unrestricted).

### 3.3 Net effect on the closure-target queue

- Closure target (c) in `ARCHIVAL_TARGETS_756124.md` § 1 ("NARA Kansas City — patent case file for `US 3,647,970`") is **catalog-confirmed** at the series and band level. The next operational step is an email inquiry to `kansascity.archives@nara.gov` requesting the file unit for `US 3,647,970` (application serial 756,124) within ENTRY UD13W 12 / band `#3,647,069 - 3,651,016` / NAID 302050, citing N1-241-10-1, Item 2 as the governing disposition authority. The band-membership argument no longer rests on schedule analogy alone; it rests on the catalog-page extent + the May 2018 custodial-list entry.

- Closure target (h) in `ARCHIVAL_TARGETS_756124.md` § 1 ("Group 2200 selected-application record under the N1-241-96-003 item 37 / N1-241-10-001 crosswalk") is **operationally the same target as (c)** for serial 756,124 specifically, because the NARA detail page for NAID 302050 cites both N1-241-10-1, Item 2 and N1-241-96-3, Item 4a as governing disposition authorities for the same series. Targets (c) and (h) should be merged in the next-pass refinement; they are the same physical record class under two crosswalked disposition authorities.

- Closure target (b) in `ARCHIVAL_TARGETS_756124.md` § 1 ("NARA — D-1 / national-security patent application file") is **not yet catalog-confirmed**. NAID 302050 is the granted utility patent case file series; it is not the D-1 / national-security patent application file series. A separate catalog probe of the D-1 series under NC1-241-76-01 is required for target (b), and is recorded as Layer-6 follow-up in section 7 below.

---

## 4) USPTO Patent Center probe for serial 756,124

### 4.1 Patent Center route recognition

Direct navigation to `https://patentcenter.uspto.gov/applications/05756124` is **route-recognized** by Patent Center: the SPA framework loads the URL, sets the browser-tab title to "Bibliographic Data - Application - Patent Center - USPTO," and does not return any "no records found" / "application not found" error. The content area, however, renders blank under standard page-text extraction (no application-data block, no "Documents & Transactions" / "Continuity" / "Foreign Priority" tab content extractable). No verbatim error message is displayed; the page is simply empty under the SPA shell.

This is the documented Patent Center behavior for paper-only / pre-IFW applications: the application number is recognized, but the bibliographic and document panels are empty because the IFW does not contain a digital prosecution history. USPTO IFW coverage is generally limited to applications filed from the mid-1990s onward; the August 29, 1968 filing date for serial 756,124 is well outside that window. The empty Patent Center detail page is therefore a **non-confirmation under the same access channel**, not a confirmation that the wrapper does not exist; the wrapper is paper-only and lives in the certified-copy / NARA-Kansas-City channels.

### 4.2 Bibliographic data (cross-confirmation via Google Patents)

Google Patents (`https://patents.google.com/patent/US3647970A/en`) reproduces the bibliographic block for `US 3,647,970` with the following verbatim values (read 2026-05-02):

- Publication number: `US3647970A`
- Country: United States
- Inventor: Gillis P Flanagan
- Application number: `US756124A`
- Filed: 1968-08-29
- Application granted: 1972-03-07
- Publication of US3647970A: 1972-03-07
- Anticipated expiration: 1989-03-07
- Status: Expired - Lifetime
- Current Assignee: Individual (assignee field absent on the face of the patent)
- Worldwide applications: only 1968 · US (no foreign priority)
- CPC classification (verbatim): `H04K1/06` — "Secret communication by transmitting the information or elements thereof at unnatural speeds or in jumbled order or backwards"

The issued-patent face header reads, verbatim:

> "United States Patent [151 3,647,970 / Flanagan Mar. 7, 1972 / [54] METHOD AND SYSTEM FOR SIMPLIFYING SPEECH WAVEFORMS / [72] Inventor: Gillis P. Flanagan, 5207 Mimosa, BeIIaire, 77401 / [22] Filed: Aug. 29, 1968 / [21] Appl. No.: 756,124"

With Attorney of Record: Richards, Harris & Hubbard; Primary Examiner: Rodney D. Bennett, Jr.; Assistant Examiner: H Binnie. There is **no government-interest clause, no government-rights statement, no assignee, and no license-rights notice on the face of the patent.** The only national-security artifact tied to this application that appears in any USPTO surface is the secrecy-order instrument captured separately as E-016 (PDF scan of the Patent Office secrecy-order form for serial 756,124, statutory basis 35 U.S.C. (1952) §§ 181-188).

### 4.3 PatFT (legacy full-text)

The legacy PatFT host (`patft.uspto.gov`) returned `ERR_CONNECTION_TIMED_OUT` under standard retrieval as of 2026-05-02. PatFT has been progressively retired in favor of Patent Public Search (`ppubs.uspto.gov`); for cross-checking, Patent Public Search and Google Patents are the operative full-text surfaces for `US 3,647,970`. The PatFT timeout is a routing finding, not a record finding; it does not affect the NARA-side conclusions.

### 4.4 Net effect on closure target (a)

Closure target (a) in `ARCHIVAL_TARGETS_756124.md` § 1 ("Certified USPTO/NARA file wrapper for application serial 756,124") remains the operative request channel because the Patent Center IFW path is empty for this filing date. The USPTO Certified Copy Center (`https://www.uspto.gov/learning-and-resources/frequently-asked-questions-about-certified-copy-center`) is the channel that returns the paper prosecution file wrapper, including any 35 U.S.C. § 181 acknowledgments of receipt and disposition by defense agencies. The recommending / sponsoring agency for the Apr 25 1969 secrecy order would be identified in those acknowledgments if they survive in the wrapper. Patent Center is not the channel for a 1968-filed application of this kind.

---

## 5) Effect on the Agency Attribution Matrix

This Layer-5 read does **not** identify a recommending or sponsoring agency for the Apr 25 1969 secrecy order on serial 756,124. NAID 302050 is a custody-and-survival confirmation of the granted patent case file; it is not a sponsorship record.

Net effect:

- **Section 1 (best concise reading): unchanged.** DIA-as-formal-sponsor remains unproven; NSA / ASPAB / Service-channel attribution remains better supported.
- **Section 6 (records-schedule risk landscape): refined.** The "Group 2200 selected-application bucket" row now has a direct catalog-side anchor (NAID 302050 detail page citing N1-241-10-1, Item 2 and N1-241-96-3, Item 4a as disposition authorities), and the "highest-probability surviving record class" — the certified USPTO/NARA file wrapper — remains unchanged in ranking but now has a confirmed custody location for the granted-patent-case-file portion (NARA Kansas City, ENTRY UD13W 12, NAID 302050).
- **Section 7 (best concise reading): unchanged.** The Layer-5 read is a survival / access read, not an attribution read.
- **Section 12 (third-layer addendum): extended.** A new section 12.7 (added in this PR) records the catalog-side confirmation of disposition authorities and the Catalog-API-key access posture, plus the catalog-side absence of a public hit on the Flanagan identifiers. Rows E-A21 through E-A23 are added to the evidence table.

---

## 6) Evidence Table additions (E-A21 through E-A23)

| Artifact ID | Date added | Artifact | Source class | Authenticity confidence | Claim impact | Scope | Notes |
|---|---|---|---|---|---|---|---|
| E-A21 | 2026-05-02 | NARA Online Catalog detail page for NAID 302050 ("Utility Patent Case Files, January 1, 1836 - December 31, 1998"), `https://catalog.archives.gov/id/302050` | Primary (NARA online catalog descriptive metadata) | High for printed catalog text | Confirm — series exists, covers patent number 1 - 4,143,353 arranged numerically; Disposition Authority Numbers cited as N1-241-10-1, Item 2 and N1-241-96-3, Item 4a; Access: Unrestricted; Use: Unrestricted; physical custody at NARA Kansas City; partially digitized | catalog-side confirmation of the schedule-level Layer-4 read | Direct catalog citation of N1-241-10-1, Item 2 confirms that the SF-115 successor schedule read in Layer-4 is the controlling disposition authority for the series that contains the granted patent case file for `US 3,647,970`. Patent number 3,647,970 falls inside the catalog-stated arrangement range (1 - 4,143,353). The detail page does not expose a file-unit-level finding aid for the band `#3,647,069 - 3,651,016`; that file-unit confirmation comes from E-006 / E-A22, not from this page. |
| E-A22 | 2026-05-02 | NARA RG 241 May 2018 custodial-list page, `https://www.archives.gov/research/news/rg-241-change-custodial-unit-2018-march-list`, line: "Patent Case Files (#3,647,069 - 3,651,016); ENTRY UD13W 12 (NAID 302050)" | Primary (NARA accession/custody list) | High | Confirm — the band that contains patent 3,647,970 is a real, named, accessioned entry (UD13W 12) within series NAID 302050, transferred to NARA Kansas City | band-membership confirmation for the granted patent case file | Direct band-membership confirmation. Patent 3,647,970 sits inside `#3,647,069 - 3,651,016`. Together with E-A21, this lifts the existing E-006 band assignment from "schedule analogy + custodial-list inference" to "catalog-side series confirmation + custodial-list named-band entry." Operational request channel: `kansascity.archives@nara.gov`. |
| E-A23 | 2026-05-02 | NARA Catalog API v2 access posture: `https://www.archives.gov/research/catalog/help/api`, `https://www.archives.gov/research/catalog/help/api-getting-started`, `http://usnationalarchives.github.io/Catalog-API/` | Primary (NARA developer documentation) | High | Refute — the 2016 NARAtions claim that "no API key or account at all is required to do basic searching" is obsolete; the 2025 documentation requires an API key issued by `Catalog_API@nara.gov` for any v2 API call (`x-api-key` header) | access-method posture for programmatic Catalog probes | Catalog API v2 returns the SPA shell for keyless GETs to `/api/v2/records/{naid}`, `/api/v2/records/parentNaId/{naid}`, and `/api/v2/records/search` regardless of `Accept` header. Programmatic Catalog probes for follow-up Layer-6 (D-1 / NC1-241-76-01 series; AC-AK reviewer/agency folders; ASPAB FN 406-02 routing) require a Catalog API key. Public web-UI search remains keyless and is the fallback for one-off lookups. The records themselves remain Access: Unrestricted, Use: Unrestricted; the API-key requirement is purely an access-method constraint, not an access-rights constraint. |
| E-A24 | 2026-05-02 | USPTO Patent Center detail page for application serial 756,124, `https://patentcenter.uspto.gov/applications/05756124`; cross-confirmed bibliographic data via Google Patents, `https://patents.google.com/patent/US3647970A/en` | Primary (USPTO Patent Center route recognition) + Secondary (Google Patents bibliographic mirror) | High for route recognition; High for Google Patents bibliographic block | Confirm — application is route-recognized in Patent Center but the bibliographic / Documents & Transactions panels are empty under the SPA shell, consistent with paper-only / pre-IFW applications filed in 1968; no government-interest clause, no government-rights statement, no assignee, and no license-rights notice on the face of the issued patent (Google Patents reproduction). The certified-copy ordering channel (target (a)) remains the operative request channel for the prosecution file wrapper; the Patent Center IFW path is not. | electronic-access posture for the Flanagan file wrapper | The empty Patent Center detail page is a non-confirmation under the same access channel, not evidence the wrapper does not exist. CPC classification on `US 3,647,970` is `H04K1/06` ("Secret communication by transmitting the information or elements thereof at unnatural speeds or in jumbled order or backwards"), consistent with PSCRL Group IX / 6A subject-matter routing already recorded in `PROCEDURAL_FRAMEWORK_ASPAB_PSCRL.md`. The legacy PatFT host (`patft.uspto.gov`) returned `ERR_CONNECTION_TIMED_OUT` and is being retired in favor of Patent Public Search (`ppubs.uspto.gov`); not a record finding. |

---

## 7) Layer-6 follow-up targets (queued)

1. **Catalog probe of the D-1 / national-security patent application file series under NC1-241-76-01.** Target (b) in `ARCHIVAL_TARGETS_756124.md` § 1. Required to determine whether a separate D-1 series accession exists for serial 756,124, distinct from the granted-utility-patent-case-file series at NAID 302050.
2. **Catalog probe of the AC-AK reviewer/agency-recommendation folder series under N1-241-96-003.** Required to determine whether a D-1-adjacent reviewer-recommendation record class survives at the catalog level (independent of the temporary 3-year destruction schedule recorded in `AGENCY_ATTRIBUTION_MATRIX.md` § 6).
3. **Catalog probe of the ASPAB FN 406-02 / Army OJAG-IP / Air Force Table 51-2 Item 4 series.** Required to determine whether any DoD-side review-channel record class for the Apr 25 1969 secrecy-order period survives in NARA accession.
4. **Email inquiry to `kansascity.archives@nara.gov`** requesting the file unit for `US 3,647,970` / application serial 756,124 within ENTRY UD13W 12 / band `#3,647,069 - 3,651,016` / NAID 302050, citing N1-241-10-1, Item 2 as the governing disposition authority and asking specifically (i) whether the file unit is present in the holding, (ii) whether digitized images are available online, and (iii) whether any 35 U.S.C. § 181 acknowledgment of receipt and disposition by defense agencies is retained inside the wrapper. This is the operational realization of `ARCHIVAL_TARGETS_756124.md` § 4.2 / target (c) / target (h) for the Flanagan record specifically.
5. **NARA Catalog API key request to `Catalog_API@nara.gov`** to enable programmatic probes of the D-1, AC-AK, and ASPAB-routed series. Defaults to a read-only key under the documented procedure.

---

## 8) What this Layer-5 read does NOT do

- It does **not** confirm that the file unit for `US 3,647,970` / serial 756,124 is physically present and intact inside ENTRY UD13W 12 at NARA Kansas City. The catalog detail page confirms series-level holding and the custodial-list entry confirms band-level assignment, but a file-unit-level confirmation requires either (a) a Catalog API search inside the series for the patent number, which requires a Catalog API key, or (b) a direct Kansas City inquiry under the procedure on `https://www.archives.gov/research/patents`. Layer-5 queues that inquiry but does not execute it.
- It does **not** identify the recommending or sponsoring agency for serial 756,124. NAID 302050 is a granted-utility-patent-case-file series; § 181 acknowledgments retained inside an individual file wrapper would be the within-record evidence, not the catalog-page metadata.
- It does **not** by itself locate any record class describing the secrecy-order routing (D-1, AC-AK, ASPAB FN 406-02). Those record classes are the Layer-6 targets listed in § 7.

---

## 9) Cross-file edits that this PR makes

- This file: new at `findings/investigation-dig/primary-756124/NARA_CATALOG_PROBE_LAYER5.md`.
- `findings/investigation-dig/primary-756124/AGENCY_ATTRIBUTION_MATRIX.md`: add § 12.7 (Layer-5 catalog-side anchor) and rows E-A21 through E-A23 to the evidence table; cross-reference this file from § 12.2 and § 6.
- `findings/investigation-dig/primary-756124/index.md`: add Layer-5 addendum entry pointing to this file.
- `findings/investigation-dig/ARCHIVAL_TARGETS_756124.md`: refine targets (c) and (h) per § 3.3 above (merge into one operational request); refine target (b) per § 7 item 1 (queue D-1 catalog probe as Layer-6).
