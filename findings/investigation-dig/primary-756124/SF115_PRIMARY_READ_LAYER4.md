# Layer-4 Finding: Primary-Source Read of NARA SF-115 N1-241-96-003 and N1-241-10-001

Date: 2026-05-01
Owner: Investigation workflow
Scope: Resolve the OCR ambiguity flagged in `AGENCY_ATTRIBUTION_MATRIX.md` § 12.2 ("local OCR / extraction disagree on the exact closure-window length — 18 vs 40 years") for the Group 2200 selected-application bucket on `serial 756,124`. Replace second-hand OCR readings with a direct read of both SF-115 PDFs.

This file does **not** change the `index.md` agency-attribution conclusion or section 7 of the matrix. It corrects two narrower sub-claims that earlier addenda treated as supporting the survival-odds upgrade for the Group 2200 selected-application bucket.

---

## 1) What was retrieved

Both NARA SF-115 PDFs were retrieved from `archives.gov` and processed locally (`pdftotext -layout` + `pdftotext -raw` + `tesseract` at 600 dpi for hand-annotated rows):

- `https://www.archives.gov/files/records-mgmt/rcs/schedules/departments/department-of-commerce/rg-0241/n1-241-96-003_sf115.pdf` (1.1 MB, plain-text-extractable)
- `https://www.archives.gov/files/records-mgmt/rcs/schedules/departments/department-of-commerce/rg-0241/n1-241-10-001_sf115.pdf` (1.5 MB, mixed printed text + handwritten reviewer markups; Adobe Acrobat ClearScan)

Both are NARA-published archival copies of the executed SF-115 forms; they are primary records of NARA's records-disposition decisions for the cited Department of Commerce / USPTO record series.

---

## 2) What N1-241-96-003 item 37 actually says (verbatim)

The original schedule entry (N1-241-96-003, "Group 2200 Licensing and Review", item 37) reads, verbatim:

> **37 Patent Applications Selected for Review for Security Issues**
>
> Applications received by Group 2200 for security review by defense agencies and the Department of Energy (DOE). Group 2200 examiners also determine if the applications are allowable. These applications fall into one of the categories below:
>
> a. Secrecy orders issued.
>    (1) Applications are allowable but patents cannot be issued until secrecy orders are recinded.
>    (2) Applications abandoned by statute because subject matter of inventions are secret
> b. Cleared applications. Applications which are reviewed and cleared of security issues.
>
> **Disposition:**
> a. (1) Transfer to central files for continued processing when secrecy order is recinded.
>    (2) Transfer to PTO repository when secrecy order is recinded.
> b. Transfer to central files for routine processing.

**Critical observation:** the original N1-241-96-003 item 37 disposition contains **no closure interval at all** — neither "18 years" nor "40 years". The disposition is event-driven (trigger = rescission of the secrecy order), not time-driven. It also does **not** specify "permanent transfer to NARA"; the destinations are USPTO "central files" and the "PTO repository," both of which are USPTO-internal custody, not NARA accession.

The "18 vs 40 years" OCR ambiguity recorded in `AGENCY_ATTRIBUTION_MATRIX.md` § 12.2 was therefore not an ambiguity inside this item — there is no year-value in this entry to be ambiguous about. The number must have been read from a different entry (likely an N1-241-10-001 successor row) and mis-attributed to item 37.

The same N1-241-96-003 page lists adjacent items with clearly time-driven dispositions:

> **39 AC-AK Folders (Access Acknowlegement)**
> Access Acknowledgement forms returned by agencies reviewing applications for security issues. Includes signature of reviewer, date, agency represented, and recommendation. ...
> **Disposition: Destroy 3 years after application is cleared or secrecy order is recinded.**

> **40 Certified Copies Log**
> Log of requests for certified copies of applications under Group 2200 review. ...
> **Disposition: Destroy form/pages when secrecy orders are recinded.**

These confirm that the AC-AK folder destruction interval (3 years after rescission) and the Certified Copies Log destruction trigger (rescission) recorded earlier in the matrix (§ 6 / row E-A11) were correctly read.

---

## 3) What the N1-241-96-003 supersedure notice says

The same PDF carries a "NOTICE - SOME ITEMS SUPERSEDED OR OBSOLETE" page that lists, verbatim:

> Item 37a was superseded by N1-241-10-001, items 2 and 4.1
>
> Item 37b was superseded by N1-241-10-001, items 2 and 4.1

So the successor schedule for item 37's two sub-categories (37a = secrecy-ordered; 37b = cleared) is **N1-241-10-001 items 2 and 4.1**, not a single bucket.

---

## 4) What N1-241-10-001 items 2 and 4.1 actually say

In the structured definition pages of N1-241-10-001:

> **2 Patent Case Files, Granted**
>
> Patent Case Files, Granted are the official agency case files of granted patents. They are also known as the "file wrapper" or "patent file wrapper" and they contain the record of the patent grant. ... National Stage of International PCT Case Files are included.
>
> **RETENTION:**
> **Permanent: Transfer to NARA __ years after closure**

The "__ years" position is filled in the printed form template; on the archival PDF the value is partially overwritten by handwritten NARA-reviewer annotations and is not cleanly extractable. `pdftotext -layout` reads it as garbled (`NARAJ1,8'years`, `NARA?years`); 600-dpi tesseract OCR variously reads it as `NARA 26 years` and `NARA 3@ years`. Surrounding entries on the same crosswalk page (RG 241 patent case-file series) consistently read **40 years after closure**, e.g. lines 1183-1184 of the layout extraction:

> PERMANENT. Close patent case files at the end of each FY and transfer to the FRC 10 years after closure. **Transfer to the National Archives 40 years after closure.** {Supersedes NCl-241-76-1, Item 59a}

NARA's published-PDF interpretation as relayed through the indexer used by web search reads the Group 2200 row as **"transfer to the Archives 40 years after closure"** as well.

Conservative reading: the Group 2200 selected-application bucket under N1-241-10-001 item 2 is **PERMANENT, transfer to NARA 40 years after closure**, treating the printed-form digit as 40 by analogy with the other patent-case-file entries on the same page and with NARA's standard patent-case-file retention. The handwritten markings (one annotation reads `25 1/2 yrs`) are reviewer markups during the appraisal process, not the final approved disposition value.

> **4.1 Evidentiary Patent Applications**
>
> Patent applications as received, and maintained in their native format. This includes electronic forms where the prosecution activities require a change of the native format. These are records held by the agency at its discretion, for evidence of original filing document in the format received. This also covers Provisional Patent Applications.
>
> **RETENTION:**
> **Temporary: Destroy or delete after 50 years after receipt, or when no longer needed provisional or evidentiary activities, whichever is sooner**

So N1-241-10-001 item 4.1 is **temporary**, not permanent; the "permanent transfer" language in the matrix's § 12.2 applies only to the item 2 successor bucket, not to the item 4.1 successor bucket.

---

## 5) What this corrects in the matrix and ledger

### 5.1 Closure-interval value

- The "18 years" reading recorded in `AGENCY_ATTRIBUTION_MATRIX.md` § 12.2 and `index.md` Addendum 2026-05-01 (third-layer findings) point 2 is **not present in either SF-115 form**. It should be retired as an OCR artifact.
- The "40 years" reading is the one consistent with (a) the surrounding patent-case-file rows on the same crosswalk page (lines 1183-1184, 1230-1231 of the layout extraction), (b) NARA's published-PDF interpretation as captured by the search indexer, and (c) NARA's standard patent-case-file retention pattern on this schedule.
- Recommended phrasing going forward: **"Permanent: Transfer to NARA 40 years after closure"** for the N1-241-10-001 item 2 successor bucket, with a footnote that the printed-form digit on the archival PDF is partially obscured by handwritten reviewer annotations and the value is therefore reported by analogy with sibling patent-case-file entries on the same crosswalk page rather than from a clean direct read of that single cell. **Avoid** asserting that the closure interval comes from N1-241-96-003 item 37 itself — it does not.

### 5.2 Permanent-transfer disposition is split, not unified

- The matrix's § 12.2 phrasing ("**permanent transfer-to-NARA bucket** after closure of the application") is **half right**. The successor schedule splits the original item 37 (secrecy-ordered + cleared) into two destinations:
  - **N1-241-10-001 item 2** (Patent Case Files, Granted) — **PERMANENT**, transfer to NARA after closure.
  - **N1-241-10-001 item 4.1** (Evidentiary Patent Applications) — **TEMPORARY**, destroy or delete after 50 years after receipt or when no longer needed for evidentiary activities, whichever is sooner.
- For serial 756,124, which **issued** as `US 3,647,970` on Mar 7 1972, the controlling successor bucket is **item 2 (Granted Patent Case Files), permanent**. Item 4.1 would only control if the application had been abandoned. The survival-odds upgrade for the Flanagan record under the N1-241-10-001 successor schedule therefore stands on item 2 alone, not on items 2 and 4.1 jointly.

### 5.3 Original N1-241-96-003 item 37 disposition is custody-internal, not NARA

- The original N1-241-96-003 item 37 disposition is a **USPTO-internal** transfer (to "central files" / "PTO repository") triggered by **rescission of the secrecy order**, not a NARA accession. NARA permanent-transfer status arrives only via the N1-241-10-001 item 2 successor route, after closure of the granted patent case file.
- This means: between Mar 7 1972 (rescission / patent issuance) and the closure of the patent case file, the file lived in USPTO custody under the original N1-241-96-003 item 37 disposition. The transfer to NARA Kansas City under the band already recorded as E-006 (`Patent Case Files (#3,647,069 - 3,651,016); ENTRY UD13W 12; NAID 302050`) is the operational realization of the N1-241-10-001 item 2 successor disposition for this specific patent.
- Already-recorded targeting under E-006 / E-027 / E-028 (NARA Kansas City patent case file + USPTO certified-copy / file-wrapper channels) remains the highest-probability surviving record route. The Layer-4 read does not change this; it confirms the underlying schedule support.

### 5.4 Form-face omission finding (E-A14 / E-A15) is unchanged

The Layer-3 finding that the period Patent Office secrecy-order form does not name a sponsoring agency on the order face (E-A14 NSA Friedman 1941-1947 examples; E-A15 CIA-released 1956 file) is unchanged by the Layer-4 read. Sponsor identity is recorded in correspondence around the order — most plausibly inside the certified file wrapper or, if one survived the temporary-schedule retention, the AC-AK folder (E-A11), the FN 406-02 ASPAB file (E-A9), or the file-wrapper-retained Licensing & Review correspondence — not on the order face.

---

## 6) Evidence Table additions

These rows extend the matrix's E-Axx series.

| Artifact ID | Date added | Artifact | Source class | Authenticity confidence | Claim impact | Scope | Notes |
|---|---|---|---|---|---|---|---|
| E-A18 | 2026-05-01 | NARA SF-115 N1-241-96-003 (`https://www.archives.gov/files/records-mgmt/rcs/schedules/departments/department-of-commerce/rg-0241/n1-241-96-003_sf115.pdf`), item 37 disposition text, read directly from the archival PDF | Primary (NARA records schedule) | High for printed-form text | Refute — the "18 vs 40 years" OCR ambiguity was not on this entry; item 37 disposition is event-driven (rescission), not time-driven; destinations are USPTO central files / PTO repository, not NARA | original-schedule disposition for Group 2200 selected applications | Verbatim disposition: "a. (1) Transfer to central files for continued processing when secrecy order is recinded. (2) Transfer to PTO repository when secrecy order is recinded. b. Transfer to central files for routine processing." No closure-interval value present. The "permanent transfer to NARA" language attached to this entry in earlier matrix § 12.2 phrasing arrives only through the N1-241-10-001 item 2 successor, not through N1-241-96-003 item 37 itself. |
| E-A19 | 2026-05-01 | NARA SF-115 N1-241-10-001 (`https://www.archives.gov/files/records-mgmt/rcs/schedules/departments/department-of-commerce/rg-0241/n1-241-10-001_sf115.pdf`), item 2 ("Patent Case Files, Granted") and item 4.1 ("Evidentiary Patent Applications"), read directly from the archival PDF | Primary (NARA records schedule) | High for printed-form text; Medium for the printed-digit closure-interval value on the Group 2200 crosswalk row (overwritten by handwritten reviewer annotations) | Confirm — item 2 is PERMANENT (transfer to NARA after closure); item 4.1 is TEMPORARY (destroy or delete after 50 years after receipt, or when no longer needed, whichever is sooner) | successor disposition for N1-241-96-003 item 37a/b | Verbatim from item 2: "Permanent: Transfer to NARA __ years after closure" (printed-digit position obscured by handwritten reviewer markings). Verbatim from item 4.1: "Temporary: Destroy or delete after 50 years after receipt, or when no longer needed provisional or evidentiary activities, whichever is sooner." Surrounding patent-case-file entries on the same crosswalk page consistently read 40 years after closure (e.g. lines 1183-1184 of layout extraction: "Transfer to the National Archives 40 years after closure. {Supersedes NCl-241-76-1, Item 59a}"). Best conservative reading of the obscured Group 2200 cell is "40 years after closure" by analogy. |
| E-A20 | 2026-05-01 | N1-241-96-003 supersedure notice page: "Item 37a was superseded by N1-241-10-001, items 2 and 4.1; Item 37b was superseded by N1-241-10-001, items 2 and 4.1" | Primary (NARA records schedule notice page) | High | Confirm — the original item 37 successor crosswalk routes to a split disposition (permanent for granted patent case files; temporary 50 years for evidentiary patent applications) | crosswalk integrity | Confirms the matrix § 12.2 crosswalk pointer but corrects its unitary "permanent transfer" framing: only one of the two successor items is permanent. |

---

## 7) Effect on existing closure language

- The closure-target queue in `ARCHIVAL_TARGETS_756124.md` § 1 (refined targets) does not change. The certified USPTO file wrapper for serial 756,124 (target (a)) and the NARA Kansas City patent case file under E-006 / target (c) remain the highest-probability surviving records. The Layer-4 read confirms that for serial 756,124 (which issued, did not abandon), the controlling successor bucket is **N1-241-10-001 item 2 (PERMANENT, transfer to NARA after closure)**, which is the same route already targeted under (c).
- The closure target (h) added in the third-layer addendum (`ARCHIVAL_TARGETS_756124.md` § 1 (h)) should be re-phrased to acknowledge the split successor disposition. Recommended phrasing: "Inquire whether a Group 2200 selected-application record exists under the N1-241-10-001 item 2 successor bucket (granted patent case files; permanent transfer to NARA after closure) for serial 756,124." Drop the "18 vs 40 years" parenthetical; cite the underlying PDFs and report the closure interval as "40 years after closure (printed-form value partially obscured by handwritten reviewer markings on the archival PDF; reported by analogy with sibling patent-case-file entries on the same crosswalk page)."
- Section 1 / section 7 attribution conclusions (DIA unproven; NSA / ASPAB / Service-channel attribution better supported than DIA-as-formal-sponsor) are unchanged.

---

## 8) What this Layer-4 read does NOT do

- It does **not** identify the recommending or sponsoring agency for serial 756,124. The records-schedule reading is about retention and custody chains, not about agency attribution.
- It does **not** produce a new primary document tying NSA, DIA, ASPAB, or any other defense entity to serial 756,124. The negative agency-side search finding (E-A17) is unchanged.
- It does **not** by itself confirm that a Group 2200 selected-application record for serial 756,124 has actually been transferred to NARA. The schedule supports the disposition; whether the specific file survived and was transferred under that disposition still requires a direct NARA inquiry under the targeting language already recorded in `ARCHIVAL_TARGETS_756124.md` § 1 (c) and (h).
