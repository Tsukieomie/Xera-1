# Layer-5b: Workarounds for the three Layer-5 access blocks

Date: 2026-05-02
Owner: Investigation workflow
Scope: Layer-5 (`NARA_CATALOG_PROBE_LAYER5.md`) recorded three blocks against keyless / programmatic access:

1. **NARA Catalog API v2** requires an `x-api-key` issued by `Catalog_API@nara.gov`; keyless calls return only the SPA shell.
2. **USPTO Patent Center detail page** for application 05/756,124 is route-recognized but renders an empty bibliographic / Documents & Transactions panel under the SPA shell, consistent with paper-only / pre-IFW applications filed in 1968.
3. **No file-unit-level finding aid** for the band `#3,647,069 - 3,651,016` is exposed on the Catalog detail page for NAID 302050; file-unit confirmation specifically for serial 756,124 / `US 3,647,970` was deferred to either (a) a Catalog API search inside the series (API key required) or (b) a direct Kansas City inquiry.

Layer-5b runs three independent workaround probes against those blocks. The principal result is that **block (3) collapses entirely** thanks to the NARA AWS Open Data bulk export, and **block (1) collapses for descriptive metadata** thanks to the same bulk export. Block (2) does not collapse: USPTO's modern keyless HTTP surface for the IFW of a 1968-filed application is closed in every channel tested, and the certified-copy paper channel remains the only path.

This file does not change the section 1 / section 7 attribution conclusions of `AGENCY_ATTRIBUTION_MATRIX.md`. It opens one new high-value Layer-6 target (NAID 159071266 — "Index to Patent Assignments by Government Licensees") and converts target (c) from "deferred to email inquiry" to "deferred to email inquiry plus zero file-unit-level catalog coverage."

---

## 1) Workaround #1 — NARA Catalog API key requirement

### 1.1 What was tried

Five keyless HTTP probes:

- `https://catalog.archives.gov/api/v2/records/302050` — HTTP 200, content-type `text/html`, 5,454 bytes — returned the SPA shell (Angular bootstrap), no JSON payload.
- `https://catalog.archives.gov/api/v2/records/parentNaId/302050?limit=5` — same SPA shell.
- `https://catalog.archives.gov/api/v2/search?q=3647970&parentNaId=302050` — same SPA shell.
- The same three calls with `x-api-key: DEMO_KEY` — same SPA shell. The `DEMO_KEY` value is rejected silently; the SPA shell is the public default response.
- Three legacy OPA endpoints (`/OpaAPI/iapi/v1/id/302050`, `/OpaAPI/iapi/v1/id/302050.json`, `/OpaAPI/iapi/v1/search?...`) — same SPA shell.

The 2016 NARAtions blog claim that "no API key or account at all is required to do basic searching" remains obsolete; the v2 API genuinely requires a key issued via `Catalog_API@nara.gov`.

### 1.2 Workaround that succeeded

The **AWS Registry of Open Data** entry for the National Archives Catalog (`https://raw.githubusercontent.com/awslabs/open-data-registry/main/datasets/nara-national-archives-catalog.yaml`) exposes a **public, unauthenticated, no-sign-request S3 bucket** in `us-east-2`:

> ARN: `arn:aws:s3:::nara-national-archives-catalog`
> Region: `us-east-2`
> UpdateFrequency: Biannual (most recent export 2026-03-12)
> Size: ~261 GB
> ManagedBy: National Archives and Records Administration (NARA)
> License: US Government work

Documented at `https://www.archives.gov/developer/national-archives-catalog-dataset`. The bucket is structured as:

```
descriptions/                       <-- archival descriptions (record-group sharded)
  record-groups/
    rg_241/                         <-- RG 241 = Patent and Trademark Office
      rg_241-1.jsonl  ...  rg_241-N.jsonl   (400 shards, ~3.8 GB total)
  collections/
authority-records/                  <-- authority records (organizations, people, etc.)
  organizations/
  people/
  topical-subjects/
  geographic-references/
  specific-records-types/
zip/                                <-- full-export zip files (most recent: 2026-03-12)
  nac_export_authorities_2026-03-12.zip       (46 MB)
  nac_export_descriptions_2026-03-12.zip      (175 GB)
backups/
```

Verified-working keyless access (HTTP 200, `application/xml` `ListBucketResult`):

```
GET https://nara-national-archives-catalog.s3.us-east-2.amazonaws.com/?list-type=2&prefix=descriptions/record-groups/rg_241/&max-keys=1000
```

Or, with AWS CLI:

```
aws s3 ls s3://nara-national-archives-catalog/descriptions/record-groups/rg_241/ --no-sign-request
aws s3 sync s3://nara-national-archives-catalog/descriptions/record-groups/rg_241/ . --no-sign-request
```

This is the workaround. It exposes the **full archival-description payload** — every NAID 302050 file unit, every series under RG 241, every authority record — without an API key.

### 1.3 Limits

- The bulk export does not contain digital objects (the actual scanned PDF/JPEG content) — only the descriptions and the URLs to the digital objects. The 148 million digital-object URLs themselves are documented inside the description records.
- Update frequency is biannual (latest 2026-03-12). For real-time read-write workflow (e.g. submitting tags/transcriptions, or seeing today's catalog state), the v2 API key channel is still required.
- The Catalog API key requirement remains the controlling channel for **interactive search** that is more recent than the last biannual snapshot. For the 1969 secrecy-order investigation this is not a binding constraint.

### 1.4 Net effect

The Catalog API-key block collapses for the descriptive-metadata use case that drove Layer-5. Section 12.7 of `AGENCY_ATTRIBUTION_MATRIX.md` records the API-key access posture (E-A23); Layer-5b adds E-A25 / E-A26 for the bulk-export workaround and the verified findings derived from it.

---

## 2) Workaround #3 — File-unit confirmation for `US 3,647,970` inside NAID 302050

### 2.1 What was done

The bulk export under workaround #1 was used to fetch every RG 241 description shard (400 files, 3.8 GB) and stream-grep for the Flanagan identifiers and the band markers. Two extractions:

- All file units inside NAID 302050 were enumerated by ancestor-NAID match. **708 file units returned** (matching the catalog detail page's stated count of "708 File Units"). Plus 19 items.
- All file units inside NAID 159071266 ("Index to Patent Assignments by Government Licensees") were enumerated. **174 file units returned.**

Saved to:

- `layer5b-data/NAID_302050_items.json` — the 19 NAID 302050 items.
- `layer5b-data/NAID_159071266_assignment_index_file_units.json` — the 174 file units in the assignment index, full structured payload.
- `layer5b-data/NAID_159071266_assignment_index_file_units.csv` — same data in CSV for quick browsing.

### 2.2 Result for the Flanagan band

**Zero NAID 302050 file units cover serial 756,124 / patent 3,647,970.** None of the 708 file unit titles inside NAID 302050 reference the band `#3,647,069 - 3,651,016` or any patent number in that band. The 19 items inside NAID 302050 are all famous historical patent drawings — Zamboni Ice Rink Resurfacing Machine (NAID 117724382, patent 2,642,679); Strowger Automatic Telephone-Exchange (NAID 70664341, patent 447,918); Selden Road Engine (NAID 16518874); etc. None touch the Flanagan band.

This is a definitive **finding-aid coverage finding**: the Catalog has no file-unit-level description for the granted patent case file `US 3,647,970`, even though the holding-level entry (UD13W 12) is real and the band-level custodial-list entry verifies it. Workaround #3 therefore does **not** confirm that the file unit is intact; it confirms that **the catalog has no public file-unit-level description for it**, and that the only catalog-level evidence remains the series-level + custodial-list-level evidence already recorded as E-A21 / E-A22.

### 2.3 What this means for the closure-target queue

Closure target (c) in `ARCHIVAL_TARGETS_756124.md` § 1 cannot be discharged via the catalog. The Kansas City email inquiry (target (c) operational form recorded in Layer-5 § 7 item 4) remains the only catalog-side path that can resolve file-unit presence. Layer-5b refines target (c) by establishing that no public catalog record at file-unit level pre-exists, so the inquiry must request the actual paper holding under the entry-level identifier (ENTRY UD13W 12 / band `#3,647,069 - 3,651,016` / NAID 302050 / N1-241-10-1, Item 2).

### 2.4 Unexpected by-product — major new lead in `RG 241`

While stream-grepping the RG 241 shards, the 174-file-unit alphabetical roster for **NAID 159071266 — "Index to Patent Assignments by Government Licensees"** was surfaced. This series was not in the earlier targeting set. Series-level scope text (verbatim from the catalog payload):

> "This series consists of an index which documents the issuance of patent assignments to government licensees."

The roster is alphabetical by licensee-name letter range (`A → Z`), with separate alphabetic ranges for **Abandoned Applications** (3 file units) and **Abandoned, Decated [sic], Plant, Etc.** (3 file units). Top-of-letter-F file unit is:

- **NAID 256511711 — "Fiala, John P. and Barditch, Irving F. THRU Fletcher, James C., Admin of NASA"**

This is the alphabetical bracket that would index Flanagan if any government licensee took an assignment of `US 3,647,970` during the secrecy-order period or after. The roster also explicitly indexes the major DoD-adjacent licensees relevant to the matrix's sponsorship hypotheses:

- Bendix Aviation Corporation (NAID 256488780, 256489581)
- The Boeing Company (NAID 256491183, 256492006)
- General Electric Company (4 file units)
- General Motors Corporation (NAID 256518094, 256518876, 256519658)
- Hughes Aircraft Company (NAID 256530112, 256530928)
- IBM (NAID 256531745, 256532404)
- North American Aviation, Inc. (NAID 256554919, 256555635)
- Northern Ordnance, Incorporated (NAID 256555635, 256556351)
- Polaroid Corporation (NAID 256561216)
- Radio Corporation of America / RCA (NAID 256563189, 256563876, 256564564, 256565252)
- Raytheon Manufacturing Company (3 file units)
- Sperry Rand Corporation (NAID 256578368)
- AT&T / Western Electric / Bell Labs (NAID 256483949, 256593742, 256594364, 256594986)
- Westinghouse Electric Corporation (4 file units)
- NASA Administrators — Webb (NAID 256592206, 256592974), Fletcher (NAID 256511711, 256512622)

The full structured roster is committed to `layer5b-data/NAID_159071266_assignment_index_file_units.csv` (174 rows).

This is a previously-unprobed records class that **directly answers the question posed in `AGENCY_ATTRIBUTION_MATRIX.md` § 6** ("which agency took rights"). It belongs in the Layer-6 target queue as a top-rank operational target alongside the D-1 / NC1-241-76-01 series. Operational form: a Kansas City email inquiry referencing NAID 256511711 (the F file unit in the licensee index) and NAID 256603800 / 256604405 / 256603196 (the abandoned-applications file units), asking whether any entry exists for Flanagan, Gillis P. / serial 756,124 / patent 3,647,970.

---

## 3) Workaround #2 — USPTO Patent Center empty IFW

### 3.1 What was tried

Six keyless / public probes:

- **PEDS (Patent Examination Data System)** — `https://ped.uspto.gov/api/queries` — DNS resolution failure. PEDS was sunsetted in 2024 and migrated to the Open Data Portal.
- **USPTO Open Data Portal v1** — `https://api.uspto.gov/api/v1/datasets`, `/api/v1/patent/applications/05756124`, `/api/v1/patent/applications?applicationNumber=05756124`, `/api-data/swagger/v3/api-docs` — all returned HTTP 403 `{"message":"Missing Authentication Token"}` (or similar `Forbidden`). The ODP endpoints are auth-gated.
- **USPTO PAIR/PUSH legacy** — `https://developer.uspto.gov/ds-api/oa-actions/v1/oa-actions/05756124` — HTTP 404 `Not Found`.
- **USPTO Patent Public Search (PPubs) JSON** — `https://ppubs.uspto.gov/dirsearch-public/searches/searchWithBeFamily` (legacy XHR endpoint) — HTTP 404 `Fixed response content`. The endpoint requires a session cookie; the public HTML shell at `https://ppubs.uspto.gov/pubwebapp/external.html?q=3647970.pn.` returns a 1.2 KB JS-bootstrap page, not server-side rendered.
- **USPTO Bulk Data** — `https://bulkdata.uspto.gov/` — DNS resolution failure inside the sandbox network.
- **Wayback Machine** for legacy USPTO surfaces (`portal.uspto.gov/pair/PublicPair`, `portal.uspto.gov/external/portal/pair`, `patents.reedtech.com`, `globaldossier.uspto.gov`) — all returned `archived_snapshots: {}`. No Wayback coverage of the legacy PAIR routes for serial 756,124.

### 3.2 What did succeed (substitution, not replacement)

- **Google Patents CSV download** — `https://patents.google.com/xhr/query?url=q%3DUS3647970A&download=true` — HTTP 200, returned the bibliographic CSV (verbatim):

  > `US-3647970-A,Method and system for simplifying speech waveforms ,Gillis P Flanagan,Gillis P Flanagan,1968-08-29,1968-08-29,1972-03-07,1972-03-07,https://patents.google.com/patent/US3647970A/en,https://patentimages.storage.googleapis.com/53/1e/e8/7996ab176b00f1/US3647970-drawings-page-2.png`

- **Google-mirrored issued-patent PDF** — `https://patentimages.storage.googleapis.com/pdfs/US3647970.pdf` — HTTP 200, 542,129 bytes, 6 pages. Downloaded and text-extracted.

  Text-extraction confirms the issued-patent face: title METHOD AND SYSTEM FOR SIMPLIFYING SPEECH WAVEFORMS; inventor Gillis P. Flanagan, 5207 Mimosa, Bellaire, Tex. 77401; filed Aug. 29, 1968; appl. no. 756,124; issued Mar. 7, 1972; primary examiner Rodney D. Bennett, Jr.; assistant examiner H. A. Binnie; attorney Richards, Harris & Hubbard. The face cites references 2,479,338 (Gabrilovitch, 8/1949), 2,953,644 (Miller, 9/1960), 2,979,611 (Halina, 4/1961). Abstract: "A speech waveform is converted to a constant amplitude square wave in which the transitions between the amplitude extremes are spaced so as to carry the speech information. The system includes a pair of tuned amplifier circuits which act as high-pass filters having a 6 decibel per octave slope from 0 to 15,000 cycles followed by two stages, each comprised of an amplifier and clipper circuit, for converting the filtered waveform to a square wave. **A radio transmitter and receiver having a plurality of separate channels within a conventional single side band transmitter bandwidth and a system for transmitting secure speech information are also disclosed.**"

  Grep against the full PDF text for `secrecy|181|182|188|government interest|license rights|defense|rescind` returned **zero hits** beyond the technical "speech information" abstract phrase. The issued-patent face has no government-interest clause, no secrecy-order rescission notice, no licensee statement, no defense-agency assignee. This re-confirms the bibliographic finding from Layer-5 § 4.2 with the actual primary PDF rather than the Google-Patents HTML mirror.

### 3.3 Net effect

**No keyless workaround exists for the prosecution-history file wrapper of serial 756,124.** All four documented USPTO public-data channels (Patent Center, PEDS, ODP, PPubs) are closed for this filing date, either by sunset (PEDS), authentication gate (ODP), JS-only render (Patent Center, PPubs), or DNS unreachability (bulkdata). Wayback has no coverage of legacy PAIR routes that would have once exposed the wrapper.

The certified-copy paper channel via the **USPTO Certified Copy Center** (`https://www.uspto.gov/learning-and-resources/frequently-asked-questions-about-certified-copy-center`) remains the operative request channel for the prosecution file wrapper (target (a) in `ARCHIVAL_TARGETS_756124.md` § 1). The Patent Center route recognition recorded as E-A24 in Layer-5 stands.

The Google-Patents PDF mirror is **not** a workaround for the file wrapper — it only reproduces the issued-patent face — but it does close the question of whether any government-interest / licensee text is on the face of the patent (it is not). E-A27 is added below to record the primary-PDF text-extraction read.

---

## 4) Cross-file effect on the matrix and target queue

- **`AGENCY_ATTRIBUTION_MATRIX.md` section 1 / section 7 conclusions: unchanged.** Layer-5b is a workaround / access read, not an attribution read.
- **Section 6 (records-schedule risk landscape): refined.** A new records class is added for tracking — **NAID 159071266, "Index to Patent Assignments by Government Licensees"**. This is the records class that would document any government licensee taking an assignment of `US 3,647,970` during or after the Apr 25 1969 secrecy-order period. Operational form: Kansas City email inquiry against NAID 256511711 (the F file unit), NAID 256603800 / 256604405 / 256603196 (abandoned-applications file units), and NAID 256492829 (Bowersett-Brixner file unit, alphabetically adjacent to "Brixner" / "Brushenko" — checked because of the Brixner / Klein / Winkler entries, all of whom were Sandia / Los Alamos researchers in adjacent secrecy-order space).
- **Section 12 (third-layer addendum): extended.** A new section 12.8 is added to the matrix recording Layer-5b's catalog-bulk-export workaround, the file-unit-coverage finding, and the new records class.
- **`ARCHIVAL_TARGETS_756124.md` § 1: refined.**
  - Target (c) is refined: file-unit-level catalog coverage for the Flanagan band is **zero**, so the Kansas City inquiry must request the file under the entry-level identifier (UD13W 12), not under any NAID.
  - **New target (i):** Email inquiry to `kansascity.archives@nara.gov` against NAID 159071266 — specifically the F file unit (NAID 256511711) and the three Abandoned-Applications file units — asking whether any entry exists for Flanagan, Gillis P. / serial 756,124 / patent 3,647,970 / any government licensee that took rights in the speech-waveform invention. Series-level disposition: same custodial location (NARA Kansas City), same Access: Unrestricted, Use: Unrestricted posture as NAID 302050.
  - Target (a) (certified USPTO file wrapper via the Certified Copy Center) is unchanged in priority and channel; the Layer-5b probes prove no keyless workaround exists for this filing date.
- **Layer-6 follow-up queue: extended.**
  - `kansascity.archives@nara.gov` inquiry can now bundle three asks: (i) UD13W 12 file unit for `US 3,647,970`; (ii) NAID 159071266 F file unit for any Flanagan entry; (iii) D-1 / NC1-241-76-01 series presence and any catalog-side accession.
  - Catalog API key request to `Catalog_API@nara.gov` is **deprioritized** — the bulk-export workaround covers the Layer-6 catalog-search use case for free.
  - USPTO Certified Copy Center request for the prosecution file wrapper can now be filed with full bibliographic confirmation (filed 1968-08-29, issued 1972-03-07, app. 756,124, patent 3,647,970, examiner R. D. Bennett Jr., attorney Richards Harris & Hubbard) lifted from the Google-mirrored primary PDF.

---

## 5) Evidence-table additions (E-A25 through E-A27)

| Artifact ID | Date added | Artifact | Source class | Authenticity confidence | Claim impact | Scope | Notes |
|---|---|---|---|---|---|---|---|
| E-A25 | 2026-05-02 | NARA AWS Open Data Registry mirror of the National Archives Catalog: `arn:aws:s3:::nara-national-archives-catalog` (region `us-east-2`); registry entry at `https://raw.githubusercontent.com/awslabs/open-data-registry/main/datasets/nara-national-archives-catalog.yaml`; documentation at `https://www.archives.gov/developer/national-archives-catalog-dataset` | Primary (NARA-managed AWS Open Data dataset, last export 2026-03-12) | High | Refute — the assertion in Layer-5 / E-A23 that the NARA Catalog requires an `x-api-key` for any programmatic descriptive-metadata access is too strong. The AWS Open Data bulk export provides the same descriptive metadata keylessly via S3 (`--no-sign-request`). The API-key requirement is binding only for real-time interactive search and read-write workflow, not for descriptive-metadata bulk read. | access-method workaround for the Catalog API-key block | The bucket is structured as `descriptions/record-groups/rg_<NN>/`, `authority-records/<type>/`, `zip/nac_export_*_2026-03-12.zip`, with biannual updates. Verified-working keyless access HTTP 200 against `https://nara-national-archives-catalog.s3.us-east-2.amazonaws.com/?list-type=2&...` and `aws s3 ls s3://nara-national-archives-catalog/ --no-sign-request`. Total payload ~261 GB; RG 241 alone is 3.8 GB across 400 JSONL shards. |
| E-A26 | 2026-05-02 | NARA AWS bulk-export read of all 708 file units inside NAID 302050 and all 174 file units inside NAID 159071266; saved as `layer5b-data/NAID_302050_items.json`, `layer5b-data/NAID_159071266_assignment_index_file_units.json`, and `layer5b-data/NAID_159071266_assignment_index_file_units.csv` | Primary (descriptive metadata extracted from the AWS bulk export) | High | (a) Confirm — NAID 302050 file-unit count matches the Catalog detail page's stated 708; the 19 items match. (b) Refute — file-unit-level finding-aid coverage for the band `#3,647,069 - 3,651,016` is zero; no file unit in NAID 302050 references serial 756,124 or patent 3,647,970. (c) New lead — NAID 159071266 ("Index to Patent Assignments by Government Licensees") is a previously-unprobed records class with a 174-unit alphabetical roster of government-licensee assignments, including the F file unit (NAID 256511711) and three Abandoned-Applications file units. | file-unit-coverage finding + new records-class lead | Layer-5b finding (2.2) and (2.4). The roster explicitly indexes Bendix Aviation, Boeing, General Electric, GM, Hughes Aircraft, IBM, North American Aviation, Northern Ordnance, RCA, Raytheon, Sperry Rand, AT&T/Western Electric, Westinghouse, NASA Administrators (Webb, Fletcher), and the abandoned-applications brackets. This is the records class that would document any government licensee that took an assignment of `US 3,647,970` during or after the Apr 25 1969 secrecy-order period. |
| E-A27 | 2026-05-02 | Google-mirrored primary PDF for `US 3,647,970`, `https://patentimages.storage.googleapis.com/pdfs/US3647970.pdf` (542,129 bytes, 6 pages); pdftotext extraction | Primary (NARA-USPTO co-published patent grant; Google mirror of USPTO image) | High for printed patent face; same bibliographic content as Google Patents and Patent Center bibliographic block | Confirm — the issued-patent face contains no secrecy-order rescission notice, no government-interest clause, no licensee statement, no defense-agency assignee. The only "secure speech information" reference is in the abstract describing the technology, not government rights. Bibliographic block (filed 1968-08-29; issued 1972-03-07; appl. 756,124; primary examiner R. D. Bennett Jr.; assistant examiner H. A. Binnie; attorney Richards, Harris & Hubbard; cited references 2,479,338 / 2,953,644 / 2,979,611) is verbatim. | issued-patent face confirmation; no government-interest clause | Closes the question of whether the issued patent itself records sponsorship: it does not. Sponsorship evidence, if it survives, would be inside the prosecution file wrapper (target (a)) or in the assignment index (target (i), new). Adds a Patent Center workaround for the bibliographic block: when Patent Center renders empty, this Google-mirror primary PDF is the substitute, but it is not a substitute for the file wrapper. |

---

## 6) Layer-6 follow-up queue (revised after Layer-5b)

(Replaces Layer-5 § 7 in `NARA_CATALOG_PROBE_LAYER5.md`; adds new operational target.)

1. **Bundled email inquiry to `kansascity.archives@nara.gov`** — three asks combined:
   1. UD13W 12 file unit for `US 3,647,970` / serial 756,124 / band `#3,647,069 - 3,651,016` / NAID 302050 / N1-241-10-1, Item 2.
   2. **NAID 159071266 F file unit (NAID 256511711, "Fiala, John P. and Barditch, Irving F. THRU Fletcher, James C., Admin of NASA")** — any entry for Flanagan / serial 756,124 / patent 3,647,970 / any government licensee that took rights in the speech-waveform invention. Plus the three Abandoned-Applications file units (NAID 256603800, NAID 256604405, NAID 256603196) for any abandoned-licensee crosswalk.
   3. D-1 / NC1-241-76-01 series presence and any catalog-side accession that survives.
2. **USPTO Certified Copy Center request** for the prosecution file wrapper of application serial 756,124 — including any 35 U.S.C. § 181 acknowledgments of receipt and disposition by defense agencies retained inside the wrapper. Bibliographic block pre-confirmed (filed 1968-08-29; issued 1972-03-07; patent 3,647,970; examiner R. D. Bennett Jr.; attorney Richards, Harris & Hubbard).
3. **AC-AK reviewer/agency-recommendation folder series under N1-241-96-003** — bulk-export catalog probe (no API key needed). Pulls from the same `nara-national-archives-catalog` S3 bucket via the descriptions tree.
4. **ASPAB FN 406-02 / Army OJAG-IP / Air Force Table 51-2 Item 4** — bulk-export catalog probe across RG 319 (Army Staff), RG 330 (Office of the Secretary of Defense), RG 341 (Air Force Headquarters), RG 38 (Chief of Naval Operations).
5. **NARA Catalog API key request to `Catalog_API@nara.gov`** — **deprioritized** by Layer-5b because the AWS bulk export provides keyless equivalent coverage for the descriptive-metadata use case driving Layer-6.

---

## 7) What Layer-5b does NOT do

- It does **not** confirm that the file unit for `US 3,647,970` is physically present and intact inside ENTRY UD13W 12. The catalog has no public file-unit-level description for it, so the Kansas City inquiry remains the only catalog-side path.
- It does **not** identify the recommending or sponsoring agency for serial 756,124. NAID 159071266 is structurally the right records class to surface that, but the F file unit (NAID 256511711) has no exposed item-level descriptions in the bulk export, so an in-person / email retrieval at NARA Kansas City is required.
- It does **not** open a programmatic path to the USPTO IFW for a 1968-filed application. The certified-copy paper channel remains the only path for the prosecution file wrapper.
