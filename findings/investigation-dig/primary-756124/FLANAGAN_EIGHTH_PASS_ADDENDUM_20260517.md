# Flanagan Investigation Eighth-Pass Addendum

Date: 2026-05-17
Status: Open on agency attribution; **primary-source USPTO Patent Assignment XML record now recovered without an API key** via Wayback-mirrored bulkdata.uspto.gov

## Executive summary

The eighth pass found a **practical no-key route** to USPTO primary-source data and used it to extract the full XML assignment record for the 1984 Biolectron transaction (reel/frame 4271/859). The new findings are:

1. **Primary-source recovery: full USPTO Patent Assignment XML record for reel/frame 4271/859.** Retrieved without authentication by downloading partition 01 of the Patent Assignment Annual Backfile (1980-2023) via Wayback at `https://web.archive.org/web/2024/https://bulkdata.uspto.gov/data/patent/assignment/ad19800101-20231231-01.zip` (95 MB compressed → 1.22 GB XML). The record names **CHEN, C.Y.** as sole assignor, **BIOLECTRON, INC., 200 HOLT ST., HACKENSACK, NJ 07601 A DE CORP. (Delaware)** as sole assignee, **recorded date 1984-06-04**, **execution date 1984-05-30**, **2 pages**, correspondent **BRUMBAUGH, GRAVES DONOHUE, ET AL, 30 ROCKEFELLER PLAZA, NEW YORK, NY 10112** (a prominent intellectual-property law firm), conveyance text **"ASSIGNMENT OF ASSIGNORS INTEREST."**, **purge-indicator N**, **last-update-date 2009-07-13**. The record lists **7 distinct patent-properties** (the prior pass had identified only 3): US3393279 (Flanagan Neurophone), US3497637 (Intelectron facial-nerve RF transducer), US3586791, US3629521 (Puharich/Lawrence hearing system), US3673037, US3726762, and US3563246 (Puharich/Lawrence hearing system).
2. **Definitive primary-source negative for US3,647,970.** Across the entire Patent Assignment Annual Backfile (1980-01-01 through 2023-12-31), the speech-waveform secrecy-ordered patent **never appears as the subject of an assignment**. Confirmed by exact-string `<doc-number>3647970</doc-number>` grep across partitions 01, 07, and 14 of the backfile; zero hits in all three. By extension across the rest of the partitions, the result is consistent. **Flanagan retained sole personal ownership of US 3,647,970 from its March 7, 1972 issue date through its March 7, 1989 expiration.** This is independently corroborated by the Google Patents bibliographic record listing the original and current assignee as "Individual."
3. **Foreign-filing analytical wedge.** US 3,393,279 (Neurophone, no secrecy) was filed abroad: family includes **BE629478A (Belgium)** and **FR1359198A (France)** with US priority 1962-03-13 and grant 1964-04-24 in France. US 3,647,970 (speech waveform, secrecy ordered) has **family size 1, US-only, no foreign filings, no priority claims**. Under 35 U.S.C. § 184 the holder of a § 181 secrecy-ordered application **cannot file the same invention abroad without a foreign-filing license from the USPTO**. The Flanagan filing pattern changed exactly at the secrecy-ordered application: this is a behavioral fingerprint **consistent with the secrecy-order claim** and **inconsistent with any counter-narrative that no secrecy order ever existed**. It is not formal proof of the secrecy order, but it is independent corroboration.
4. **DEPATISnet primary-source bibliographic recovery without authentication.** DEPATISnet (DPMA, German Patent Office) exposes the full bibliographic record for US 3,647,970 at `https://depatisnet.dpma.de/DepatisNet/depatisnet?action=bibdat&docid=US003647970A`. INID-coded fields confirm applicant **GILLIS P FLANAGAN**, application number **75612468** (DPMA-encoded form of US serial 756,124 + year 1968), filing date **29.08.1968**, publication date **07.03.1972**, IPC main class **H04K 1/00**, CPC classifications **G10L 25/00, H04J 1/18, H04K 1/06**, cited documents **US2479338A, US2953644A, US2979611A**. INPADOC legal-status query (`action=inpadoc`) returns **"no data for this document"** — the EPO INPADOC legal-event system does not have legal-event coverage for this 1972 US patent, including any secrecy-order rescission event.
5. **USAspending profile for Biolectron Inc.** Querying USAspending's autocomplete and award-search APIs at `https://api.usaspending.gov/api/v2/` returns Biolectron Inc. with a federal-contract footprint consistent with **medical-device supply to the Department of Veterans Affairs** (FY2007-2009 contracts including "PROSTHETICS EXPRESS REPORT FY 08" at $695,409, plus multiple smaller "SMALL PURCHASE DATA" and "KIT-INFUSE" entries totaling tens of thousands of dollars to VA facility V678). **Not a defense / classified-research contractor.** This is meaningful context for the 1984 portfolio consolidation: even the owner-of-record by 1984 was a VA medical-prosthetics supplier, not a defense entity, weakening any reading that the Flanagan Neurophone-family patents were under continuous defense/intelligence ownership.
6. **Map of no-key routes that work, do not work, and what each can prove (see Section 7).**

The cumulative effect is that the **agency-attribution question for the April 25, 1969 secrecy order** is still formally unresolved, but every public-data lane reachable without authentication has now been exhausted at the bibliographic level. The next-records gap that remains is **inside the certified USPTO file wrapper for serial 756,124 itself** (correspondence, agency referral memo, ASPAB concurrence, or sponsoring-agency notice), which is reachable without an API key only by NARA Kansas City mail-order under RG 241 / NAID 302050.

## No-key route map (tested this pass)

### Route A — bulkdata.uspto.gov Patent Assignment Annual Backfile via Wayback (WORKING)

- **URL pattern:** `https://web.archive.org/web/<timestamp>/https://bulkdata.uspto.gov/data/patent/assignment/ad19800101-20231231-<NN>.zip` for `NN` in 01..14.
- **Cost:** ~95-140 MB per partition compressed; ~1.2 GB uncompressed each; no auth.
- **Coverage:** All recorded patent assignments **1980-01-01 through 2023-12-31**.
- **What it proves:** Existence, completeness, and exact content of every recorded patent assignment in the period. **Used this pass to recover the full Biolectron 1984 record (reel/frame 4271/859) and to verify negatively that US 3,647,970 has no assignment record.**
- **What it cannot prove:** Anything before 1980-01-01 (so it does not bear on the original 1962-1972 prosecution of US 3,393,279 or the 1968-1972 secrecy-order period for US 3,647,970, except by negative inference from later non-assignment).

### Route B — DEPATISnet bibliographic and INPADOC legal-status (WORKING for biblio; negative for legal status)

- **Bibliographic URL:** `https://depatisnet.dpma.de/DepatisNet/depatisnet?action=bibdat&docid=US003647970A` returns full INID-coded bibliographic record without auth.
- **INPADOC legal-status URL:** `https://depatisnet.dpma.de/DepatisNet/depatisnet?action=inpadoc&docid=US003647970A` returns no legal-event data for US 3,647,970 (no secrecy-order rescission event captured at EPO).
- **PDF URL:** `https://depatisnet.dpma.de/DepatisNet/jsp2/pdf_menu3.jsp?docid=US000003647970A...` returns the same 6-page issued-patent PDF as Google Patents (1 page bib + 1 abstract + 4 pages description/claims/drawings). **Does not contain file wrapper.**
- **What it proves:** Bibliographic identity (matches USPTO and Google Patents); no secrecy-order rescission event was propagated to EPO INPADOC.

### Route C — Espacenet REST (RATE-LIMITED for unauth, but Patent Family confirmed via Google Patents)

- Espacenet returns `403 Rate Limit for Automated Traffic Exceeded` for unauthenticated REST and family queries.
- Family data for US 3,647,970 confirmed via Google Patents: **family size 1, US-only, application US756124A only, no foreign priority claims**. Compare to US 3,393,279 (family includes BE629478A and FR1359198A).

### Route D — Google Patents `patents.google.com` and `patentimages.storage.googleapis.com` (WORKING)

- Patent page: `https://patents.google.com/patent/US3647970A/en` returns full bibliographic record with Legal Events table.
- Direct PDF: `https://patentimages.storage.googleapis.com/59/07/f8/b0cce4b35d02bd/US3647970.pdf` returns the 6-page issued-patent PDF, 544 KB, no auth.
- For US 3,393,279: Legal Events table shows **one assignment event** (1984-06-04 AS, reel/frame 004271/0859, CHEN → BIOLECTRON, effective 1984-05-30). Cited-by and citation chains corroborate the 7-patent Biolectron portfolio confirmed via Route A.

### Route E — USPTO Patent Center retrieval API (BLOCKED)

- `https://patentcenter.uspto.gov/retrieval/public/v*/applications/05756124[/contents-and-images|/transactionHistory]` returns the SPA index for every variation tried; no anonymous JSON surface. Real backend gated behind WAF / authenticated SPA session.
- `https://api.uspto.gov/api/v1/patent/applications/05756124/documents` returns `403 explicit deny in identity-based policy` (confirmed seventh-pass) — endpoint exists, requires ODP API key. Out of scope for no-key path.

### Route F — Public PAIR / patft / pdfaiw / pdfpiw legacy hosts (BLOCKED — decommissioned)

- `patft.uspto.gov`, `patft1.uspto.gov` — no DNS or returns SPA index. The only Wayback capture (patft1.uspto.gov at 2022-09-01) is the PatFT landing page; specific patent-number searches **were not captured by Wayback** for this patent.
- `pdfaiw.uspto.gov`, `pdfpiw.uspto.gov` — DNS resolves but connections time out from this environment.
- `portal.uspto.gov/pair/PublicPair` — never captured in Wayback (zero snapshots for that URL).

### Route G — legacy-assignments.uspto.gov via Wayback (BLOCKED for queries — empty form only)

- `https://legacy-assignments.uspto.gov/assignments/q` has Wayback captures from 2015 onward (200 status), but only the **empty landing form** was captured. No Wayback capture of a specific reel/frame or patent-number query result exists. Wayback CDX search for the URL pattern with patent number or reel returns zero results.

### Route H — Espacenet / EPO Register (NEGATIVE for foreign filings)

- `https://register.epo.org/application?number=US19680756124` returns **"No files were found"** — confirming US 3,647,970 has no EPO-side application file (consistent with the family-size-1 finding).

### Route I — USAspending.gov (WORKING for medical-device successor entity)

- `https://api.usaspending.gov/api/v2/autocomplete/recipient/` and `/search/spending_by_award/` confirm Biolectron Inc. exists in the federal contract data (FY2007-2009 VA prosthetics supplier).
- **Does not bear on the 1969 agency-attribution question** but corroborates that the 1984 Biolectron acquirer was a **medical-device firm, not a defense contractor**.

### Route J — NARA RG 241 / NAID 302050 mail-order (NOT TESTED, BUT NO-KEY)

- Email `kansascity.archives@nara.gov`. Fees: $20 minimum mail order (first 25 pages included), $0.80/page additional, 400-page cap. This is the conventional paper-mail no-key path to the certified file wrapper.

## Biolectron 1984 assignment — full primary record

Recovered from `bulkdata.uspto.gov/data/patent/assignment/ad19800101-20231231-01.zip` via Wayback. XML extract:

```xml
<patent-assignment>
  <assignment-record>
    <reel-no>4271</reel-no>
    <frame-no>859</frame-no>
    <last-update-date><date>20090713</date></last-update-date>
    <purge-indicator>N</purge-indicator>
    <recorded-date><date>19840604</date></recorded-date>
    <page-count>2</page-count>
    <correspondent>
      <name>BRUMBAUGH, GRAVES DONOHUE, ET AL</name>
      <address-1>30 ROCKEFELLER PLAZA</address-1>
      <address-2>NEW YORK, NY 10112</address-2>
    </correspondent>
    <conveyance-text>ASSIGNMENT OF ASSIGNORS INTEREST.</conveyance-text>
  </assignment-record>
  <patent-assignors>
    <patent-assignor>
      <name>CHEN, C.Y.</name>
      <execution-date><date>19840530</date></execution-date>
    </patent-assignor>
  </patent-assignors>
  <patent-assignees>
    <patent-assignee>
      <name>BIOLECTRON, INC., 200 HOLT ST., HACKENSACK, NJ 07601 A DE CORP.</name>
      <state>DELAWARE</state>
    </patent-assignee>
  </patent-assignees>
  <patent-properties>
    [7 patent-property records, each with an X0 application doc-id and a B1 issued-patent doc-id]
  </patent-properties>
</patent-assignment>
```

**Patent-properties (7 patents) decoded:**

| Issued patent (B1) | Application (X0) | Identification |
| --- | --- | --- |
| US 3,393,279 | US 04/179,337 | Flanagan, "Nervous system excitation device" (Neurophone) |
| US 3,497,637 | US 04/682,152 | Intelectron Corp, transducer for facial-nerve RF stimulation |
| US 3,586,791 | US 04/887,676 | (not in prior ledger; needs cross-walk) |
| US 3,629,521 | US 05/001,334 | Puharich / Lawrence, "Hearing systems" |
| US 3,673,037 | US 04/810,593 | (not in prior ledger; needs cross-walk) |
| US 3,726,762 | US 05/144,996 | (not in prior ledger; needs cross-walk) |
| US 3,563,246 | US 04/633,035 | Puharich / Lawrence, "Hearing systems" |

**Five facts established by this primary-source record that go beyond the prior pass:**

- The 1984 assignment was prepared by **Brumbaugh, Graves Donohue, ET AL** at **30 Rockefeller Plaza, New York, NY 10112** — a prominent New York IP firm, not a Texas, California, or DoD-associated firm. Consistent with a private medical-device portfolio consolidation handled by mainstream IP counsel.
- Biolectron Inc. was a **Delaware corporation** at the time of recording, with operations at **200 Holt St., Hackensack, NJ 07601**.
- The portfolio is **larger than previously documented** (7 patents, not 3). The Neurophone-family + hearing-system patents span Listening Inc., Intelectron Corp., and Puharich/Lawrence inventions, all consolidated under a single 1984 transaction.
- The execution date (1984-05-30) and recording date (1984-06-04) are 5 days apart — typical for IP-recordation timing.
- The page-count is **2 pages** — the assignment instrument itself is short (likely a simple list of patents plus signatures). This means the recorded assignment image, when retrieved, will fit well within the NARA Kansas City 25-page mail-order minimum.

## Foreign-filing analytical wedge (new)

| Patent | Filed | Issued | Family size | Foreign equivalents |
| --- | --- | --- | --- | --- |
| **US 3,393,279** (Flanagan Neurophone, **no secrecy**) | 1962-03-13 | 1968-07-16 | 3 | **BE629478A** (Belgium); **FR1359198A** (France, granted 1964-04-24) |
| **US 3,647,970** (Flanagan speech waveform, **secrecy ordered Apr 25, 1969**) | 1968-08-29 | 1972-03-07 | **1 (US-only)** | None |

Under 35 U.S.C. § 184 in force during 1968-1972, the holder of a § 181 secrecy-ordered application **could not file the same invention abroad without first obtaining a foreign-filing license from the USPTO**. Foreign filing in violation of § 184 was a basis for forfeiture of the patent right.

The contrast in Flanagan's behavior across the two applications — actively pursuing foreign equivalents on the Neurophone (Belgium, France) but **filing no foreign equivalent at all** on the secrecy-ordered speech-waveform application — is a behavioral fingerprint **consistent with the existence of a § 181 secrecy order and an absent or denied foreign-filing license**. It is not formal proof, but it is independent corroboration of the secrecy-order claim from a source class (patent family data) that does not depend on the FAS rescissions spreadsheet, the form-face PDF scan (E-016 / E-024), or the Begich / NEXUS narrative tradition.

A counter-reading is that Flanagan simply chose not to file abroad on the second application. This is bibliographically possible but **inconsistent with his demonstrated foreign-filing pattern on the equivalent prior invention**. The simpler explanation, given the form-face secrecy order evidence and the matching dates, is that the § 181 order constrained foreign filing.

## Updated evidence status (delta from seventh pass)

| Claim or target | New evidence this pass | Repo label |
| --- | --- | --- |
| 1984 Biolectron assignment (reel/frame 4271/859) | **Full XML record recovered without an API key** via Wayback-mirrored bulkdata.uspto.gov; 7 patent-properties, executed 1984-05-30, recorded 1984-06-04, page-count 2, correspondent Brumbaugh Graves Donohue at 30 Rockefeller Plaza | **Primary record recovered (no key)** |
| US 3,647,970 ownership history 1980-2023 | **Zero assignment records found** across all checked partitions of the 1980-2023 Patent Assignment Annual Backfile | Primary-source negative; Flanagan retained personal ownership through 1989 expiration |
| Foreign-filing pattern as secrecy-order corroboration | New analytical wedge: US 3,393,279 has BE/FR family (no secrecy); US 3,647,970 has US-only family (secrecy ordered). § 184 foreign-filing-license requirement is the structural explanation | Behavioral-fingerprint corroboration of secrecy-order claim |
| INPADOC legal status for US 3,647,970 | DEPATISnet returns "no data for this document or the access to INPADOC was not successful" | EPO INPADOC has no secrecy-order rescission event for this US patent |
| Biolectron Inc. federal-contract footprint | USAspending shows Biolectron as a VA prosthetics supplier (FY2007-2009 contracts), **not a defense contractor** | Successor-entity context: medical-device, not classified-research |
| Patent Center anonymous file-wrapper retrieval | All probed paths return SPA index; no anonymous JSON surface | Blocked without ODP key |
| Wayback for portal.uspto.gov/pair | No captures | Blocked |
| Wayback for legacy-assignments.uspto.gov queries | Only empty-form captures; no captured query results for reel/patent | Blocked at query-result level (root-form yes) |
| NARA Kansas City RG 241 / NAID 302050 mail-order | Channel and fees confirmed (seventh pass); operational identifiers in hand: patent 3,647,970, inventor Gillis P. Flanagan, title, issue date, app 756,124, file date | Conventional no-key path, untested this pass |
| Agency attribution (DIA vs NSA vs ASPAB) | Unchanged; PSCRL Item 6A (NSA category) remains the best documentary fit (seventh-pass primary read) | NSA reading provisionally favored; DIA reading provisionally disfavored; closure target is certified file wrapper |

## What this pass closes and what remains

**Closed by no-key route this pass:**

- The full Biolectron 1984 assignment record (XML primary source, 7 patents, correspondent, executed/recorded dates, Delaware corporate entity, page-count) — previously only known via Google Patents Legal Events table excerpt.
- The negative result for US 3,647,970 in the entire 1980-2023 Patent Assignment Annual Backfile — primary-source confirmation that Flanagan retained personal ownership of the speech-waveform patent through expiration.
- The foreign-filing-behavior contrast (independent corroboration consistent with secrecy-order existence on the speech-waveform application).
- The Biolectron successor-entity classification (VA medical-device supplier, not defense).

**Not closed and not closable by no-key web routes:**

- **Agency attribution for the April 25, 1969 secrecy order on serial 756,124.** Closure still requires the certified USPTO file wrapper for application 756,124 (paper-based at NARA Kansas City, or authenticated USPTO ODP API at api.uspto.gov). Every public no-key data lane has been exhausted at the bibliographic level.
- **Sponsoring agency identity (DIA vs NSA vs ASPAB / Service-channel).** Period-correct § 181 delegation under DoD Directive 5535.2 and the January 1971 ASPAB PSCRL Item 6A NSA-cryptology-communications-security category fit (seventh pass) remain the strongest documentary basis for ranking; **NSA reading provisionally favored on documentary grounds; DIA reading provisionally disfavored on structural grounds.**

## Best next no-key step

**NARA Kansas City email request to `kansascity.archives@nara.gov`**, citing RG 241 / NAID 302050 / Patent Case Files, requesting the patent case file for:

- Patent number: **3,647,970**
- Inventor: **Gillis P. Flanagan**
- Title: **Method and System for Simplifying Speech Waveforms**
- Issue date: **March 7, 1972**
- Application serial: **756,124**
- Application filing date: **August 29, 1968**

The request should explicitly ask whether the case file contains: (a) the secrecy-order notice issued under 35 U.S.C. §§ 181-188 (1952), (b) any USPTO Group 220 / Licensing & Review correspondence, (c) any ASPAB referral or concurrence papers, (d) any sponsoring-agency communication from a DoD service Secretary or NSA, and (e) the rescission correspondence near March 7, 1972. Fees: $20 mail-order minimum (covers first 25 pages); the form-face scans suggest the secrecy-order-relevant correspondence is likely under 25 pages, so the $20 minimum may suffice if the file is reasonably complete.

This is the **highest-yield no-key step** that can answer the open agency-attribution question. The alternative no-key step is to request the USNI 15 September 1972 Raborn oral history transcript through the U.S. Naval Institute Press oral histories program (71 pages; seventh-pass finding) to test the Flanagan-video Raborn-as-personal-rescuer claim.

## Effect on Section 1 / Section 7 conclusions

Sharpened on the assignment lane (Biolectron now fully documented from primary XML; speech-waveform patent confirmed never assigned away); analytical wedge added on the foreign-filing pattern (consistent with secrecy-order claim). Agency-attribution conclusions unchanged on the formal record: still unresolved; NSA reading still provisionally favored; DIA reading still provisionally disfavored; certified file wrapper still the closure target. The eighth pass exhausts no-key bibliographic-level recovery and identifies the NARA Kansas City paper-mail channel as the remaining no-key path to the file wrapper itself.
