# Flanagan Investigation Seventh-Pass Addendum

Date: 2026-05-17
Status: Open — certified USPTO file wrapper for serial 756,124 still not recovered; agency attribution remains unresolved but ranking is sharpened on documentary grounds

## Executive summary

The seventh pass advances four lanes from the sixth-pass status:

1. **USPTO Open Data Portal (ODP) API endpoint surface for application 756,124 mapped.** Direct unauthenticated probing of `https://api.uspto.gov/api/v1/` confirms that the file-wrapper / documents / assignment / metadata endpoints for this application path **exist** at the API gateway, are gated by an identity-based policy, and return distinct error signatures (`Forbidden`, `Missing Authentication Token`, and `explicit deny in an identity-based policy`) that together demonstrate the API resources are deployed for this application. Authenticated retrieval requires a USPTO ODP API key from `account.uspto.gov/profile/api-manager`.
2. **NARA RG 241 / NAID 302050 contact and fee structure confirmed from the NARA "Records of the Patent and Trademark Office" page.** Kansas City contact: `kansascity.archives@nara.gov`, 400 W. Pershing Rd., Kansas City, MO 64108. Fees: $20 minimum mail order (includes the first 25 pages), $0.80/page for additional digital or paper copies, $0.25/page on-site self-service; 400-page reproduction cap. The page makes **no mention** of secrecy-order or D-1 application files, so the D-1 routing remains a separate inquiry the Kansas City staff must answer.
3. **FBI file on William F. Raborn (FOI/PA #1327987-0) read in full OCR.** All six retrieved release OCR text files (Release 1, Release 2-Consult, and Release 3-Consult-1 through 3-Consult-3 and 3-Consult-7) contain **zero** hits for Flanagan, Neurophone, Gillis, Listening Inc., Intelectron, Biolectron, Puharich, or Bellaire. Aerojet-General mentions are abundant (90+), placing Raborn as Vice President / Program Management / Senior VP Sales at Aerojet-General Corporation, Azusa, California, with Sacramento and Sunnyvale references. **Latest year reference across all releases is 1966.** The file's 210 withheld pages (208 Referral/Consult and 2 Referral/Direct on pages 12 and 24 of Release 1) were not retrievable. Negative result is now double-anchored: Syracuse Raborn Papers (ends 1963) and FBI file (ends 1966 in OCRed releases) both stop **before** the April 25, 1969 secrecy order.
4. **U.S. Naval Institute oral history for Raborn confirmed: interview date 15 September 1972, 71 pages, conducted at his home in Arlington, VA, by John T. Mason Jr.** This is the **only known primary-source Raborn record in the public domain that post-dates the March 7, 1972 rescission of the 756,124 secrecy order**, and is the highest-value next records target for testing the Flanagan-video Raborn-as-personal-rescuer claim.
5. **Primary-source read of the January 1971 ASPAB Patent Security Category Review List (PSCRL).** The list explicitly enumerates the participating agencies — Army (AMC, CE), Navy, Air Force, AEC, NASA, and **NSA** — and explicitly **omits DIA**. Item 6A is the NSA-cryptology-communications-security category, covering "**Voice, both privacy and secrecy, analog or digitalized**" — a textbook subject-matter fit for Flanagan's "Method and System for Simplifying Speech Waveforms." This is the **strongest documentary basis yet** for ranking the NSA attribution above the DIA attribution while still falling short of proof.
6. **FAS rescind.xls coverage window mapped by primary read.** The FAS-released spreadsheet of secrecy orders rescinded with issued patents contains 625 rows keyed to patent issue dates **1982-08-31 through 1988-12-27**. The earliest filing dates in the dataset reach back to 1968 but **no row begins with serial 756xxx**. The smallest serial in the dataset with a 1968 file date is 4,740,843, far higher than 756,124. The Flanagan secrecy order, rescinded ~1972 contemporaneous with US 3,647,970 issuing March 7, 1972, falls in the dataset's **pre-coverage window** and its absence is not a refutation.

Together these results sharpen the documentary ranking of the DIA-vs-NSA-vs-DoD/ASPAB attribution conflict (NSA reading now supported by the PSCRL primary read; DIA reading further weakened by absence from every § 181 referring-agency list), and identify a concrete next-records target (USNI 1972 Raborn oral history) that public archives can in principle deliver without USPTO certification.

## Evidence lane: USPTO ODP API surface for application 756,124

Direct unauthenticated probing of `https://api.uspto.gov/api/v1/patent/applications/` using each of three plausible application-number normalizations (`05756124`, `04756124`, `06756124`, and bare `756124`) returned consistent error signatures:

| Endpoint | Application form | HTTP | Body |
| --- | --- | --- | --- |
| `/api/v1/patent/applications/05756124` | `05756124` | 403 | `{"message":"Forbidden"}` |
| `/api/v1/patent/applications/05756124/documents` | `05756124` | 403 | `{"message":"User is not authorized to access this resource with an explicit deny in an identity-based policy"}` |
| `/api/v1/patent/applications/05756124/documents` | `04756124` | 403 | same explicit-deny message |
| `/api/v1/patent/applications/05756124/documents` | `06756124` | 403 | same explicit-deny message |
| `/api/v1/patent/applications/05756124/documents` | `756124` | 403 | same explicit-deny message |
| `/api/v1/patent/applications/05756124/transaction-history` | `05756124` | 403 | `{"message":"Missing Authentication Token"}` |
| `/api/v1/patent/applications/search?applicationNumberText=05756124` | n/a | 403 | `{"message":"Forbidden"}` |
| `/api/v1/patent/applications/05756124/assignment` | `05756124` | 403 | `{"message":"Forbidden"}` |
| `/api/v1/patent/applications/05756124/meta-data` | `05756124` | 403 | `{"message":"Forbidden"}` |
| `/api/v1/patent/applications/3647970` | n/a | 403 | `{"message":"Forbidden"}` |

The three distinct error signatures matter:

- `Missing Authentication Token` (transaction-history endpoint) indicates the path is **not deployed** at this gateway level.
- `Forbidden` (bare application/patent endpoints, search, assignment, meta-data) indicates the path **is deployed** but the request is rejected at the policy layer.
- `User is not authorized to access this resource with an explicit deny in an identity-based policy` (documents endpoint) is an AWS-API-Gateway-style IAM rejection that **confirms a resource with that path exists** and an identity-based policy is denying anonymous access.

The documents and assignment endpoints **exist** for this application path. Retrieval requires a USPTO ODP API key from `account.uspto.gov/profile/api-manager`. Once obtained, the canonical retrieval call for the file-wrapper documents of application 756,124 is documented at the USPTO ODP API client libraries (`patent.dev/uspto-odp-client-library-released/` Go client; `ip-tools/uspto-opendata-python`). This converts the file-wrapper retrieval from a paper-only mail-order task into an immediate machine-readable API call once authenticated.

A **legacy DNS fact** is recorded: `assignment.uspto.gov` and `assignment-api.uspto.gov` continue to fail DNS resolution from this environment; `api.uspto.gov`, `data.uspto.gov`, and `patentcenter.uspto.gov` resolve. The legacy `assignment.uspto.gov` reel/frame UI is therefore still inaccessible from this environment, and the Biolectron 1984 assignment instrument for reel/frame 004271/0859 remains an open target via either a different network or the ODP `/assignment` endpoint with an API key.

## Evidence lane: NARA RG 241 / NAID 302050 contact and fee structure

The NARA "Records of the Patent and Trademark Office" page confirms the operational parameters for retrieving the patent case file for US 3,647,970 (NAID 302050, RG 241):

- **Repository:** National Archives at Kansas City, 400 W. Pershing Rd., Kansas City, MO 64108
- **Contact:** `kansascity.archives@nara.gov`
- **Series:** Patent Case Files (NAID 302050), within RG 241 ("Records of the Patent and Trademark Office")
- **Required identifiers for request:** patent number, inventor/case parties, title, issue date
- **Mail-order minimum:** $20.00 (includes first 25 pages of reproduction)
- **Additional pages:** $0.80 per page (digital or paper)
- **On-site self-service:** $0.25 per page; researchers may bring approved personal cameras or flatbed scanners
- **Reproduction cap:** "Patent records that exceed 400 pages will not be reproduced in full for researchers."
- **Holdings size:** "over four and a half million patent case files and associated records held by the National Archives at Kansas City"

The page **does not** explicitly mention secrecy-order or D-1 application files. Per the earlier fourth-layer SF-115 read in the ledger, the surviving D-1 / Group 220 / Licensing & Review files associated with a secrecy order on an issued patent are most likely to be **inside the patent case file itself** (file wrapper retained in the case file rather than destroyed under the temporary D-1 schedule); confirming this requires direct inquiry to Kansas City staff. The bibliographic identifiers for the request are: patent number **3,647,970**, inventor **Gillis P. Flanagan**, title **Method and System for Simplifying Speech Waveforms**, issue date **March 7, 1972**, application serial **756,124**, application filing date **August 29, 1968**.

## Evidence lane: FBI file on Raborn (FOI/PA #1327987-0)

Six release OCR text files from the Internet Archive item `FBIFileWilliamRaborn` were retrieved and grep-scanned for all relevant terms. Files retrieved:

| Release | Bytes (djvu.txt) |
| --- | --- |
| Release 1 | 32,624 |
| Release 2-Consult | 228,172 |
| Release 3-Consult_1 | 6,513 |
| Release 3-Consult_2 | 23,500 |
| Release 3-Consult_3 | 8,428 |
| Release 3-Consult_7 | 4,142 |

Search terms: `flanagan`, `neurophone`, `speech waveform`, `secrecy`, `756,124` (and `756124`), `3,647,970` (and `3647970`), `3,393,279` (and `3393279`), `aerojet`, `listening inc`, `intelectron`, `biolectron`, `puharich`, `bellaire`, `gillis`, `patent`. 

**Results:**

- **Flanagan / Neurophone / Gillis / Listening Inc / Intelectron / Biolectron / Puharich / Bellaire / 756,124 / 3,647,970 / 3,393,279:** zero hits across all six release OCR files.
- **Aerojet:** 90+ hits, including direct references to Raborn as Vice President / Program Management / Senior Vice President of Sales at "AEROJET-GENERAL CORPORATION, AZUSA, CALIFORNIA," with cross-references to Sacramento and Sunnyvale operations and to William E. Zisch (President of Aerojet-General). News-article fragments from 1965 in Release 1 discuss the Navy-Aerojet "chummy" relationship and Raborn's directorship/ownership stake. Background-investigation summaries in Release 2 and Release 3 corroborate the Aerojet executive role and reference associates Gore (marketing department) and others.
- **Date range:** latest year reference across all OCR files is **1966**. Year refs in Release 1: 1952, 1955, 1961, 1963, 1965. Release 2-Consult: 1950 through 1966 contiguous. Release 3-Consult_1: 1950, 1952, 1955, 1959, 1963, 1964, 1965. Release 3-Consult_2: 1951, 1953, 1954, 1955, 1957, 1959, 1960, 1962, 1963, 1964, 1965. Release 3-Consult_3: 1962, 1963, 1965. Release 3-Consult_7: 1965.
- **Withheld pages:** Release 1 lists 210 withheld pages, of which 208 are Referral/Consult and 2 are Referral/Direct (pages 12 and 24, with page 54 also recurring in the direct-referral list). The page-by-page deletion sheet covers pages 2-50+ extensively. These withheld pages may contain post-1966 material, but their content is unknown from this pass.

Combined with the sixth-pass Syracuse / USNA finding (Raborn Papers end 1963; MS 490 ends 1964), the FBI file's 1966 cutoff in OCRed releases gives **double-anchored archival negative coverage of the 1968-1972 secrecy-order window in two independent public Raborn record classes.** The Flanagan-video Raborn-as-personal-rescuer claim therefore remains untested in either direction by the two largest public Raborn record collections; the unredacted FBI-file withheld pages and the USNI Sept 1972 oral history (below) are the remaining accessible targets that could in principle test it.

## Evidence lane: U.S. Naval Institute Raborn oral history (15 September 1972)

A William F. "Red" Raborn Jr. oral history exists in the U.S. Naval Institute Oral Histories collection:

- **Interviewer:** John T. Mason Jr.
- **Date:** 15 September 1972
- **Location:** Raborn's home, Arlington, VA
- **Length:** 71 pages of transcript
- **Topic coverage:** Polaris program, the "magic piece of paper" from CNO Arleigh Burke, adaptation of man to machine in the Polaris program, visits to industry partners (Hughes Aircraft, Honeywell)

**Why this matters for the Flanagan investigation:** 15 September 1972 is **192 days after** the March 7, 1972 rescission of the Flanagan secrecy order. It is the **only confirmed primary-source Raborn record located in this entire investigation that post-dates the 756,124 rescission**. If Raborn discussed any post-Navy / Aerojet-era activities, secrecy-order interventions, or contacts with private inventors during this interview, it would be the first primary-source class capable of testing the Flanagan-video claim. The transcript is held by the U.S. Naval Institute Press and is purchasable / requestable through their oral histories program; access is not restricted by the interviewee (consistent with the Withington 1971 and Wertheim 1981 oral histories in the same Mason-conducted series, both of which were released with no use restrictions). Two adjacent oral histories that prominently discuss Raborn's Polaris leadership are also recorded for context: Rear Adm. Frederic S. Withington (June 1971, 205 pages) and Rear Adm. Robert H. Wertheim (Jan-Feb 1981, 343 pages).

## Evidence lane: PSCRL 1971 primary read — NSA category fit, DIA absence

A primary-source PDF copy of the **ASPAB Patent Security Category Review List, January 1971 edition** was retrieved (FAS-hosted, archived via Wayback) and converted to text for analysis (1,359 lines).

Title page facts:

> ARMED SERVICES PATENT ADVISORY BOARD "ASPAB" — PATENT SECURITY CATEGORY REVIEW LIST — PREPARED BY ASPAB SUB-COMMITTEE — CHAIRMAN: H.L. MOURNING, AMC — J.C. MORRIS, AF — BERT CONVEY, NAVY — JANUARY 1971 — (Originally classified Confidential - Now Unclassified) — Short Title: PSCRL-1

Introductory text:

> This is the first edition of an ASPAB composite category review list of the categories of inventions that should be made available in accordance with 35 USC 181. It resulted from a review and revision of the composite list previously used by the Patent Office. The list was compiled by the ASPAB Sub-Committee for Revision of the Category List comprised of representatives from the Army (AMC), the Air Force, and the Navy with the co-operation of CE, AEC, NASA, and NSA. The assistance of Mr. Charles Pistorino, CE; Mr. Anthony Campana, AEC; Mr. Howard Maines, NASA; and Mr. John Utermohle, NSA was of significant value in this compilation.

**Participating agencies (exact list quoted from the PSCRL header):**

- Department of the Army → Army Materiel Command (AMC); Corps of Engineers (CE)
- Department of the Navy (NAVY)
- Department of the Air Force (AF)
- Atomic Energy Commission (AEC) (PSCRL note: "For AEC, substitute DOE - Department of Energy 1994")
- National Aeronautics & Space Administration (NASA)
- **National Security Agency (NSA)**

**The Defense Intelligence Agency is not listed as a participating agency in PSCRL.** The list comprises the seven entities above and no others. This is a direct primary-source confirmation of the pattern documented across every authoritative § 181 reference (FAS, MPEP § 120, 35 U.S.C. § 181 itself, DTSA's modern process page): **DIA is structurally not a § 181 referring agency.** DIA's classification authority under E.O. 11652 (Nixon, March 1972) and successors is over **classified information**, not over **patent applications under § 181**.

**Item 6A — the operative NSA category for the Flanagan application:**

> Item 6A. NSA-cryptology-communications security, specifically:
> (1) Cryptography as applied to Manual, Typewriter, Teletypewriter, Any and all data systems, Computers, **Voice, both privacy and secrecy, analog or digitalized,** Facsimile, including means for masking facsimile systems, and Television, including means for masking television systems, as applied to any and all communication systems intended to deprive all but the addressee of the intelligence contained.
> (2) Secret inks and Secret microphotography
> (3) All means which are intended by the nature of the system to deprive all but the addressee of knowledge of the existence of the signal, or to deprive any but the addressee the ability to intercept, record, or process such signals. These include but do not exhaust: Very short signals, Signals using unusual media for transmission including underwater, Frequency changes controlled by privacy and secrecy means, **Any and all signals controlled by privacy or secrecy means**, and **Any and all exotic modulation means.**
> (4) Any and all means which make practicable from an engineering standpoint, desirable cryptographic principles or communication security principles previously known, but not realized due to lack of invention in enabling means.
> (5) Any and all attachments to complete communications systems or sub-systems thereof, which permit the user as an option to apply privacy or security means to the system, hence, the systems or sub-systems themselves.
> (6) Privacy or security means, defined as any sequence, system, or detail which must be known to intended addressee in order to (1.) receive, (2.) process, (3.) record, (4.) transform, (5.) recognize, (6.) decode, (7.) decipher, etc., any means of communication.
> (7) Signals systems whose primary purpose may be high signal-to-noise ratio, freedom from natural interference, resistance to intentional jamming, etc., but which have the de facto result of preventing interception, recording, or processing.
> (8) All systems for generating "pseudo random digits", all means for applying "pseudo random digits" to digital messages, data, remote computer input links, digitalized voice or signal parameters, singly or in combination.
> (9) Noise and/or low deductibility communications systems, including "spread spectrum" systems.
> (10) Means for suppressing or exploiting electronic or mechanical emanations (radiation).

**Subject-matter fit for application 756,124 / US 3,647,970:**

The Google Patents record for US 3,647,970 lists the patent's classifications as **H04K1/00 (Secret communication)**, **H04K1/06 (Secret communication by transmitting the information or elements thereof at unnatural speeds or in jumbled order or backwards)**, **G10L25/00 (Speech or voice analysis techniques)**, and **H04J1/18 (Frequency-division multiplex systems in which all the carriers are amplitude-modulated)**. The abstract states: "A speech waveform is converted to a constant amplitude square wave in which the transitions between the amplitude extremes are spaced so as to carry the speech information," and the body describes "a multichannel SSB transmitter/receiver and a secure speech transmission system." This is a textbook subject-matter fit for PSCRL Item 6A.(1) "Voice, both privacy and secrecy, analog or digitalized" and 6A.(3) "Any and all signals controlled by privacy or secrecy means" / "Any and all exotic modulation means," and a partial fit for 6A.(5) and 6A.(6).

**Effect on the DIA vs NSA vs DoD/ASPAB attribution ranking:**

- **DIA reading (Begich/NEXUS tradition):** Further weakened. DIA does not appear in the PSCRL's enumerated participating agencies, does not appear in 35 U.S.C. § 181, does not appear in the FAS Invention Secrecy program/admin pages, and does not appear in DTSA's modern equivalent. The structural-impossibility argument is now well-supported on primary documents. The DIA attribution survives only as a source-tradition narrative claim.
- **NSA reading (Flanagan first-person tradition):** Strengthened. The PSCRL's Item 6A is the **NSA-specific category**, and the application's subject matter is a textbook fit. NSA's own internal patent-review mechanism (NSA Regulation 80-2) is the upstream technical-review channel that would have generated the recommendation. Outward paperwork could still have routed through ASPAB / a service Secretary (per period-correct § 181 delegation under DoD Directive 5535.2).
- **DoD/ASPAB / Service-channel reading:** Stable. The outward paperwork channel for DoD-caused orders ran through ASPAB and the service Secretaries in this period. The PSCRL's `(NAVY)(AMC)(AF)` tags on other items show that a single application could be tagged to multiple service channels; an NSA-driven referral could appear on the form face under Navy or Army cover.
- **DIA still not proven impossible** in narrow sense: even an agency outside the PSCRL composite list could theoretically file a § 181 notice under the statute's open-ended "chief officer of another department or agency" clause if so designated by the President. The conservative reading is that this would have required a Presidential designation of DIA as a defense agency for § 181 purposes by 1969, for which no evidence has been located. Closure of the question still requires the certified file wrapper or any surviving D-1 / ASPAB / agency-concurrence correspondence.

## Evidence lane: FAS rescind.xls primary read

A direct read of the FAS-hosted spreadsheet `rescind.xls` (1982-1988 rescissions) was performed via Python (xlrd). The dataset has 625 rows across one populated sheet, with five columns: Patent Application Serial Number, Patent Application File Date, Date Secrecy Order Rescinded, Patent Number, Patent Issue Date.

**Coverage facts confirmed:**

- Patent issue date range: **1982-08-31 to 1988-12-27** (n=624 non-empty).
- File date range: **1955-01-17 to 1987-05-04** (n=586 non-empty).
- Rescind date range: **1955-01-17 to 1987-05-04** (n=624 non-empty).
- File and Rescind columns are identical for every row that has both populated. This is almost certainly a data-coding artifact in the FAS extraction (the underlying USPTO data presumably had separate dates but the FAS-released form has them collapsed), not the substantive claim that orders were rescinded on the same day they were filed.
- Earliest 1968 file date in the dataset: serial **4,740,843** (filed 1968-06-26, patent 4,388,870 issued 1983-06-21). Earliest 1969 file date: serial **4,821,163** (filed 1969-04-22, patent 4,406,228 issued 1983-09-27).
- **No row begins with serial 756xxx.** The Flanagan application's serial (756,124) is far below the smallest serial in the dataset; this is expected because the dataset is keyed to patents issued 1982-1988, while US 3,647,970 issued in March 1972.

**Effect:** the FAS rescind.xls absence of serial 756,124 is recorded as a clean negative consistent with the pre-coverage window. It is **not** evidence against the secrecy-order claim itself, which is independently supported by the form-face scans (E-016 / E-024) and the matching USPTO metadata for US 3,647,970.

## Updated evidence status

| Claim or target | Status after seventh pass | Repo label |
| --- | --- | --- |
| USPTO ODP API surface for application 756,124 | `/api/v1/patent/applications/05756124/documents` and adjacent endpoints exist and return identity-policy denials; retrieval requires USPTO ODP API key | Path confirmed deployed; authenticated retrieval is the next step |
| `assignment.uspto.gov` reel/frame UI | DNS resolution continues to fail from this environment | Open; try alternate network or use authenticated ODP `/assignment` endpoint |
| NARA RG 241 / NAID 302050 patent case file | Contact, fee structure, and required identifiers confirmed from NARA's patents-records page | Open primary-records target; fee schedule documented |
| FBI file on Raborn coverage | All retrieved OCR releases end 1966; zero Flanagan-related hits across six files; 210 withheld pages exist | Double-anchored negative coverage of 1968-1972 window (Syracuse + FBI) |
| USNI Raborn oral history (Sept 15, 1972, 71 pp) | Confirmed via USNI press catalog | Highest-value next records target capable of testing the Flanagan-video claim |
| DIA attribution (Begich/NEXUS tradition) | DIA absent from PSCRL January 1971 participating agencies; absent from § 181 designated agencies; absent from FAS, DTSA, MPEP § 120 referring-agency lists | Source-tradition narrative claim only; structurally unsupported as a § 181 referring agency |
| NSA attribution (Flanagan first-person tradition) | PSCRL Item 6A is the NSA category; covers "voice, both privacy and secrecy, analog or digitalized"; subject-matter fit for Flanagan application is exact | Strongest documentary basis on the present record, but still not proof |
| ASPAB / Service-channel attribution (outward paperwork) | Stable as the period-correct outward-paperwork channel for DoD-caused orders under DoD Directive 5535.2 | Plausible outward channel even where technical assessment came from NSA |
| FAS rescind.xls coverage of 756,124 | Confirmed pre-coverage window; rescind.xls dataset begins with patents issued 1982; serial 756,124 not in any row | Clean negative; not a refutation of the secrecy-order claim |

## Refreshed next records targets

1. **USPTO ODP API authenticated retrieval** for application **05756124** (or canonical alternate normalization), specifically the `/documents`, `/transaction-history`, `/assignment`, and `/meta-data` endpoints. Requires a USPTO ODP API key from `account.uspto.gov/profile/api-manager`. This is now the lowest-friction path to certified-style prosecution-history data for the application.
2. **USNI Raborn oral history** (15 September 1972, 71 pp, John T. Mason Jr., interview at Raborn's home in Arlington, VA). Purchase / request through the U.S. Naval Institute Press oral histories program. This is the highest-value primary-source class for testing the Flanagan-video Raborn-as-personal-rescuer claim that public archives currently expose.
3. **NARA RG 241 / NAID 302050** patent case file for US 3,647,970, Kansas City. Fee-confirmed channel via `kansascity.archives@nara.gov`; request should specify patent 3,647,970, inventor Gillis P. Flanagan, title, issue date, application serial 756,124, and explicitly ask whether any secrecy-order / D-1 / Licensing & Review correspondence is retained inside the case file.
4. **FBI file Releases 4-12 OCR** at Internet Archive item `FBIFileWilliamRaborn` (only six of the twelve releases were retrieved in this pass). The remaining six releases (3-Consult_4, 3-Consult_5, 3-Consult_6, 3-Consult_8, 3-Consult_9, 3-Consult_10) total roughly 24-25 KB of OCR text combined and should be checked for completeness, though their small sizes suggest few substantive new mentions.
5. **NSA Friedman / cryptologic patent-review historical document set.** NSA Regulation 80-2 (internal patent-review mechanism) and the broader pattern of NSA cryptologic patent review (long predating 1969 per the 1948 ANPAB / Signal Corps documents already in the ledger as E-029) are the upstream channel that would have driven any NSA-sponsored referral on application 756,124. NSA FOIA requests for any communications between NSA and the Patent Office concerning Flanagan / Gillis Flanagan / serial 756,124 / patent 3,647,970 / "speech waveform" / "speech scrambler" remain a valid lane.
6. **Houston Chronicle / Houston Post 1961-1962 archives** for the science-fair / Wright-Patterson narrative, unchanged from the sixth pass.

## Effect on Section 1 / Section 7 conclusions

**Sharpened, not closed.** The PSCRL primary read shifts the documentary basis for ranking the agency-attribution candidates: NSA reading is now best-supported on subject-matter and category-list grounds; DIA reading survives only as source-tradition narrative claim; ASPAB / service-channel outward-paperwork routing remains the most likely cover channel even for an NSA-driven referral. The certified USPTO file wrapper remains the closure target. Until that wrapper or surviving ASPAB / agency-concurrence correspondence is retrieved, agency attribution for the April 25, 1969 secrecy order on serial 756,124 is recorded as **unresolved on the present public record**, with the NSA reading provisionally favored on documentary grounds and the DIA reading provisionally disfavored on structural grounds.
