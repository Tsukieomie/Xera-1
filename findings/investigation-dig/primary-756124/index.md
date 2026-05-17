# Primary Evidence Ledger: Secrecy Order `756,124` / `US756124A`

Date opened: 2026-04-27
Status: Active
Owner: Investigation workflow

Purpose: maintain a chain-of-custody ledger for every artifact relevant to the Flanagan secrecy-order claim so each new document can be scored immediately as confirm/refute/neutral.

---

## Decision Rule

- Only documents from primary custodians (USPTO, NARA, agency FOIA release, or court-certified records) can close the claim.
- Narrative or tertiary compilations stay in lead status even if repeated.

---

## Scoring Rubric

| Field | Allowed values |
|---|---|
| Source class | Primary / Secondary / Tertiary |
| Authenticity confidence | High / Medium / Low |
| Claim impact | Confirm / Refute / Neutral |
| Scope | `756,124` order / rescission / assignment-transfer / timeline-only |

---

## Evidence Table (Live)

| Artifact ID | Date added | Artifact | Source class | Authenticity confidence | Claim impact | Scope | Notes |
|---|---|---|---|---|---|---|---|
| E-001 | 2026-04-27 | `US3393279` patent metadata | Secondary (official patent metadata) | Medium-High | Neutral | timeline-only | Verifies patent chronology and existence, not secrecy-order issuance text |
| E-002 | 2026-04-27 | `US3647970` patent metadata | Secondary (official patent metadata) | Medium-High | Neutral | timeline-only | Verifies issuance chronology, not order/rescission text |
| E-003 | 2026-04-27 | `LAYER47_CONFIRMED_PIPELINE.md` | Tertiary | Low-Medium | Neutral | `756,124` order + rescission narrative | Upstream source for local narrative chain; cites Rex/Scribd without primary attachment |
| E-004 | 2026-04-27 | RexResearch compilation (`agent-tools/217fe14c-2368-4bbf-9c0a-a3e90ff8da82.txt`) | Tertiary | Low-Medium | Neutral | `756,124` order + rescission narrative | Contains explicit wording but no attached primary government document |
| E-005 | 2026-04-27 | NARA USPTO patent records page (`archives.gov/research/patents`) | Secondary (custodian directory) | High | Neutral | archival routing | Confirms `RG 241`, `NAID 302050`, and Kansas City contact for patent case-file retrieval |
| E-006 | 2026-04-27 | RG241 transfer list extract (`agent-tools/4e47a445-8f7c-4440-b3d8-aa0ae39aa12f.txt`) | Secondary (NARA inventory listing) | Medium-High | Neutral | archival routing | Identifies entry band containing `US3647970`: `#3,647,069-3,651,016` (`ENTRY UD13W 12`, `NAID 302050`) |
| E-007 | 2026-04-27 | USPTO records schedule extract (`agent-tools/7cb1af8b-5465-4d37-82b5-40857dc86264.txt`) | Secondary (records schedule text) | Medium | Neutral | secrecy-order file architecture | Describes `D-1 Files` including defense requests, secrecy-order issuance, and related material for patent applications |
| E-008 | 2026-04-27 | Google Patents record for `US3647970A` (`agent-tools/af672c9a-ef53-4000-bb49-4a09a035bdce.txt`) | Secondary (aggregated patent metadata) | Medium | Neutral | timeline-only | Confirms publication/application linkage (`US756124A`) and filing date context; does not itself prove secrecy-order action |
| E-009 | 2026-04-27 | Google Patents legal-events extract for `US3393279A` (`agent-tools/dadda9be-6d64-484d-92ae-ddc8bda018af.txt`) | Secondary (aggregated legal events) | Medium | Neutral | assignment-transfer | Shows later assignment event (`REEL/FRAME 004271/0859`, effective `19840530`), supporting ownership-transfer pathways as an alternative to "confiscation" narratives |
| E-010 | 2026-04-27 | FAS secrecy-order program reference (`agent-tools/df5042e0-783a-4e1b-8cc6-360da8df6289.txt`) | Secondary (policy/program synthesis) | Medium | Neutral | procedural validation | Confirms procedural path for rescission petitions (`37 CFR 5.4/5.8`) and reinforces that secrecy orders are defense-agency referred and Commissioner-issued |
| E-011 | 2026-04-27 | GovernmentAttic USPTO FOIA release stats (`https://www.governmentattic.org/61docs/USPTOStatsPatentSecrecyOrders2024.pdf`) | Secondary (FOIA release metadata + stats) | Medium-High | Neutral | FOIA routing | Confirms current USPTO FOIA request channel and demonstrates releases include secrecy-order activity summaries, but not individual order texts in this artifact |
| E-012 | 2026-04-27 | NARA NextGen API docs discovery (`/api/v2/api-docs/`, `/api/v2/swagger.json`) | Secondary (technical access path) | High | Neutral | retrieval-method status | Confirms machine API documentation endpoints exist; record-search endpoint access from this environment currently returns static HTML, so direct data pull remains pending alternate access/auth path |

---

## Priority Retrieval Queue

1. USPTO records naming secrecy order number and application linkage for `US756124A`.
2. USPTO or agency release rescinding order `756,124` (if issued).
3. NARA holdings referencing the same order number and filing serial.
4. FOIA responses from DoD/NSA/Commerce with order-control metadata.

---

## Immediate Intake Checklist

- Save artifact in `investigation-dig/primary-756124/raw/` with immutable filename.
- Record SHA256 hash.
- Add one row to table with preliminary score.
- Add a short note: what this changes and what it still does not prove.

---

## Addendum 2026-05-01: Begich + NEXUS/Flanagan DIA-attribution verification

New verification pass driven by user-supplied screenshots (`IMG_5336.jpeg`, `IMG_5337.jpeg`, local prompting evidence only — not embedded in repo) cross-checked against publicly accessible transcriptions of the same source texts:

1. **NEXUS-derived "Three papers on Flanagan's Neurophone" — page 5** explicitly contains the phrase that the **"Defense Intelligence Agency slapped it under a secrecy order"** describing the action against the second Neurophone patent application.
   - Public-source transcription verified at: <https://www.scribd.com/doc/106800112/Patrick-Flanagan-s-Neurophone>

2. **Nick Begich, *Towards a New Alchemy* — section 3.5 / page 17** states:
   - Official word of the secrecy action was **sent April 25, 1969**.
   - Order number cited as **756,124**.
   - Identifies the **Defense Intelligence Agency** as the agency that "seized the patent information."
   - Secrecy lasted **until March 7, 1972**, when **US 3,647,970** issued.
   - Public-source transcription verified at: <https://www.jedisimon.com/articles/Deaf%20can%20hear.htm>

### Effect on the ledger

- The DIA attribution is now **confirmed as present in the Begich/Flanagan source tradition** (two independent secondary/tertiary nodes carrying matching language and date specificity), upgrading from "single-node Rex/Scribd echo" to "multi-node tertiary corroboration."
- Source class remains **Tertiary / narrative** until a primary USPTO/NARA/FOIA secrecy-order document is retrieved. **No primary government order text has been recovered.** Claim impact stays Neutral pending primary retrieval.
- Date precision improves: the **filing date** of the application is **August 29, 1968** (USPTO-confirmed), but the **secrecy-order notice/order date per Begich is April 25, 1969**. Earlier internal phrasing of "1968 DIA secrecy order" should be read as referring to the filing year, not the order date — see correction note below.
- The **DIA vs NSA conflict is preserved**: some passages in Flanagan's own first-person narrative (recoverable from the RexResearch compilation, see E-004) attribute the action to the **NSA** with the same order number `#756,124`, while Begich and the NEXUS-derived "Three papers" page 5 attribute it to the **DIA**. Both attributions remain in the corpus until primary records resolve which agency referred the secrecy action to the Commissioner of Patents.

### Evidence Table additions

| Artifact ID | Date added | Artifact | Source class | Authenticity confidence | Claim impact | Scope | Notes |
|---|---|---|---|---|---|---|---|
| E-013 | 2026-05-01 | NEXUS-derived "Three papers on Flanagan's Neurophone," page 5 (public transcription: <https://www.scribd.com/doc/106800112/Patrick-Flanagan-s-Neurophone>) | Tertiary (compiled narrative, transcribed) | Medium | Neutral | `756,124` order attribution | Contains the explicit phrase "Defense Intelligence Agency slapped it under a secrecy order"; corroborates DIA attribution but is not a primary government order document |
| E-014 | 2026-05-01 | Begich, *Towards a New Alchemy*, section 3.5 / page 17 (public transcription: <https://www.jedisimon.com/articles/Deaf%20can%20hear.htm>) | Tertiary (book chapter, transcribed) | Medium | Neutral | `756,124` order + date + rescission date | Provides notice date Apr 25 1969, order #756,124, DIA attribution, secrecy duration through Mar 7 1972 (matches `US 3,647,970` issue date) |
| E-015 | 2026-05-01 | User-supplied screenshots `IMG_5336.jpeg`, `IMG_5337.jpeg` of the above two passages | Local prompting evidence | N/A | Neutral | provenance trigger | Not embedded in repo; recorded here only as the prompt that triggered the public-source re-verification above |
| E-016 | 2026-05-01 | Public PDF "Patrick Flanagan High Security Speech Scramble" containing apparent photocopies/scans of U.S. Patent Office secrecy-order form and Notice of Allowability for application 756,124 (<https://img1.wsimg.com/blobby/go/a56ed7e4-a072-4dc8-b939-26ab140309de/downloads/Patrick%20Flanagan%20High%20Security%20Speech%20Scramble.pdf?ver=1685486536436>) | Apparent primary form scans, public copy (not USPTO/NARA-certified) | Medium-High for form content; Low for chain-of-custody | Confirms order existence/serial/title/statute and Apr 25 1969 order date; Neutral on agency attribution | `756,124` order + Notice of Allowability + issued patent `US 3,647,970` | Page 2 scan: U.S. Department of Commerce Patent Office, Washington DC 20231; Serial No. 756,124; Filed Aug. 29, 1968; Applicant Gillis P. Flanagan; Title METHOD AND SYSTEM FOR SIMPLIFYING SPEECH WAVEFORMS; SECRECY ORDER under Title 35 U.S.C. (1952) §§181-188; signed/stamped EDWIN L. REYNOLDS, First Assistant Commissioner; form POL-96 (7-66), USCOMM-DC 56772-P68. Page 3 scan: Notice of Allowability (Form D-10), Paper No. 8, mailed Jan. 11, 1971; cites secrecy order issued April 25, 1969 under 35 U.S.C. (1952) §181; allowable claims 1-19; stamp "THIS CORRESPONDENCE IS UNCLASSIFIED THE APPLICATION CLASSIFICATION REMAINS UNCHANGED"; examiner names J. G. Baxter and Rodney D. Bennett Jr. visible. Page 4 scan: issued US Patent 3,647,970, filed Aug. 29 1968, Appl. No. 756,124, issued Mar. 7 1972; abstract includes "a system for transmitting secure speech information." Forms are official Patent Office instruments; they do **not** name DIA or NSA. PDF linked only — not embedded/committed. |

### Effect of E-016 on the ledger

- **Source-tier upgrade for form facts:** secrecy-order existence, serial `756,124`, filing date Aug 29 1968, statute (35 U.S.C. (1952) §§181-188), order date Apr 25 1969, signing official (Edwin L. Reynolds, First Assistant Commissioner), and the Jan 11 1971 Notice of Allowability with examiners Baxter and Bennett move from tertiary narrative (Begich/NEXUS) to **apparent primary Patent Office form text** — but via a public PDF copy, not a USPTO/NARA-certified file wrapper. Authenticity confidence is therefore Medium-High for the form content and Low for chain-of-custody until certified records are obtained.
- **Agency attribution remains unresolved.** The official forms in E-016 do **not** name a recommending or sponsoring agency; they bear only Patent Office signatures. The DIA-vs-NSA conflict between Begich/NEXUS (DIA) and Flanagan first-person narrative (NSA) is **not** resolved by E-016. Closure still requires the certified file wrapper plus any sponsoring-agency referral memo.
- **Closure target refined:** the remaining gap is no longer "does an order exist" — E-016 strongly suggests it does — but rather "which agency referred it." See `ARCHIVAL_TARGETS_756124.md` for the refined FOIA / NARA targeting language.

### Correction note (terminology cleanup)

Any earlier repo phrasing of "1968 DIA secrecy order" or similar that conflates the filing year with the order year should be read in light of the now-explicit Begich timeline:

- **Application filed:** August 29, 1968 (USPTO confirmed)
- **Secrecy-order notice per Begich:** April 25, 1969
- **Rescission / patent issue:** March 7, 1972 (`US 3,647,970`)

A short pointer to this addendum has been added to `findings/investigation-dig/flanagan-claim-provenance.md` and to `findings/03_Technology_Patents/04_FLANAGAN_NEUROPHONE_AND_COUPLING.md`.

---

## Addendum 2026-05-01 (procedural framework): ASPAB / PSCRL / archival custody

Companion file: `PROCEDURAL_FRAMEWORK_ASPAB_PSCRL.md` (this directory).

The procedural file explains — conservatively — the statutory and procedural machinery (35 U.S.C. §§ 181-188, MPEP § 120 / 37 CFR 5.2, ASPAB as sole DoD authority for secrecy-order recommendations, PSCRL Group IX / 6A as the NSA-cryptology / communications-security review category, and the NARA RG 241 / RG 457 custody chains) that surrounds the Apr 25 1969 secrecy order on application 756,124.

Key conservatism boundaries restated here:

- The Patent Office form scans (E-016) support order existence, serial, statute, title, applicant, order date, and the Notice of Allowability. They do **not** name an agency.
- DIA attribution remains a **Begich/NEXUS-tradition narrative claim**, not official proof.
- PSCRL Group IX / 6A (voice privacy / digitized voice / pseudo-random digit generation / spread-spectrum) explains why the application's "secure speech" subject matter would have been routed for cryptology / communications-security review, but does **not** prove NSA sponsored the order.
- Closure of the agency-attribution question requires the **certified file wrapper** plus any surviving **D-1 / Group 220 / Licensing & Review or ASPAB referral / concurrence papers**.

### Evidence Table additions

| Artifact ID | Date added | Artifact | Source class | Authenticity confidence | Claim impact | Scope | Notes |
|---|---|---|---|---|---|---|---|
| E-017 | 2026-05-01 | FAS, "Invention Secrecy Order Program" (<https://sgp.fas.org/othergov/invention/program.html>) | Secondary (policy synthesis) | Medium-High | Neutral | procedural framework | Confirms that PTO makes private (non-government-owned) applications available to defense agencies for review under § 181, that DoD referrals are coordinated through ASPAB, and that ASPAB is the sole DoD authority for making secrecy-order recommendations |
| E-018 | 2026-05-01 | FAS, "Administration of the Invention Secrecy Act" (<https://sgp.fas.org/othergov/invention/admin.html>) | Secondary (policy synthesis) | Medium-High | Neutral | procedural framework | Describes the operational referral path: PTO Group 220 / Licensing & Review physically holds the file at PTO and forwards microfiche review copies to defense agencies; defense-agency concurrences return to ASPAB; ASPAB issues unified DoD recommendation to the Commissioner |
| E-019 | 2026-05-01 | MPEP § 120, "Secrecy Orders" (<https://www.uspto.gov/web/offices/pac/mpep/s120.html>) | Secondary (USPTO operating manual) | High for USPTO procedure | Neutral | procedural framework | The Commissioner issues a secrecy order after notice from the chief officer of a designated defense agency; petitions for modification or rescission are coordinated with the sponsoring agency, which can be contacted in connection with the petition |
| E-020 | 2026-05-01 | 35 U.S.C. § 181 (current codification: <https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title35-section181&num=0&edition=prelim>) | Primary (statute) | High for statute text | Neutral | procedural framework / statutory basis | Statutorily, private applications are made available to AEC / Secretary of Defense / designated defense agencies; acknowledgments of receipt and disposition are entered in the application file; secrecy order in effect for one year, renewable; the form on E-016 page 2 cites the 1952 codification of the same chapter (§§ 181-188) |
| E-021 | 2026-05-01 | DTSA, "Patent Security Reviews" (<https://www.dtsa.mil/SitePages/assessing-and-managing-risk/patent-security-reviews.aspx>) | Secondary (modern DoD-side analog) | High for current DTSA function; not 1969 | Neutral | modern analog only | Used **only** as a modern, public-facing analog of the DoD-side patent security review function. ASPAB — not DTSA — handled the 1969-1972 process for application 756,124 |
| E-022 | 2026-05-01 | PSCRL (Jan 1971), via FAS (<https://sgp.fas.org/othergov/invention/pscrl.pdf>) | Secondary (declassified DoD review-screening list) | Medium-High | Neutral | screening-category fit | Group IX / 6A covers NSA-cryptology / communications-security subject matter, including voice privacy / speech secrecy (analog and digitized), pseudo-random digit / sequence generation for digital messages and digitized voice, and low-detectability / spread-spectrum communications. Application 756,124's "simplifying speech waveforms" / "secure speech information" subject matter sits inside this category. **Explains screening routing; does not prove sponsoring agency.** |
| E-023 | 2026-05-01 | Google Patents record for `US3647970A` (<https://patents.google.com/patent/US3647970A/en>) | Secondary (aggregated patent metadata) | Medium-High | Neutral | timeline / classification fit | Confirms title "Method and system for simplifying speech waveforms," filed 1968-08-29, issued 1972-03-07, abstract "a system for transmitting secure speech information," CPC includes H04K "Secret communication" classifications |
| E-024 | 2026-05-01 | Public PDF "Patrick Flanagan High Security Speech Scramble" (<https://img1.wsimg.com/blobby/go/a56ed7e4-a072-4dc8-b939-26ab140309de/downloads/Patrick%20Flanagan%20High%20Security%20Speech%20Scramble.pdf?ver=1685486536436>) | Apparent primary form scans, public copy (not USPTO/NARA-certified) | Medium-High for form content; Low for chain-of-custody | Confirms order existence/serial/title/statute and Apr 25 1969 order date; Neutral on agency attribution | `756,124` order + Notice of Allowability + issued patent | Same artifact as E-016, listed here as the procedural-framework anchor for the form-supported facts (serial, title, statute, order date, signing official, Notice of Allowability examiners) used in the Part 4 timeline |
| E-025 | 2026-05-01 | RexResearch Flanagan compilation (<http://www.rexresearch.com/flanagan/neuroph.htm>) and Begich-derived transcription (<https://www.jedisimon.com/articles/Deaf%20can%20hear.htm>) | Tertiary (narrative compilations) | Medium for narrative; Low for agency attribution | Neutral | source-tradition agency attribution | Carries the source-tradition agency-attribution language (NSA in Flanagan first-person; DIA in Begich). Recorded here as the narrative endpoints of the two attribution traditions |
| E-026 | 2026-05-01 | NARA SF-115 NC1-241-76-01 (<https://www.archives.gov/files/records-mgmt/rcs/schedules/departments/department-of-commerce/rg-0241/nc1-241-76-01_sf115.pdf>) | Primary (NARA records schedule) | High for schedule text | Neutral | archival custody chain (D-1 files) | Describes USPTO national-security patent application files (D-1 file family). Such files **may include** the application, the **request from the defense agency** for secrecy treatment, the secrecy order itself, internal/inter-agency memoranda, concurrences, and rescission correspondence. Schedule contemplates possible destruction after fixed retention (commonly cited as 35 years), so survival of any specific 1969-era file must be confirmed by direct inquiry |
| E-027 | 2026-05-01 | NARA SF-115 N1-241-10-001 (<https://www.archives.gov/files/records-mgmt/rcs/schedules/departments/department-of-commerce/rg-0241/n1-241-10-001_sf115.pdf>) and NARA "Records of the Patent and Trademark Office" (<https://www.archives.gov/research/patents>) | Primary (NARA records schedule + custodian directory) | High | Neutral | archival custody chain (broader patent case files) | Covers the broader USPTO patent case-file series in RG 241. Operational target for the patent case file for `US 3,647,970` and the file wrapper for application 756,124, held at NARA Kansas City under the band already recorded as E-006 |
| E-028 | 2026-05-01 | USPTO file-wrapper / certified-copy paths (<https://www.uspto.gov/about-us/news-updates/update-paper-patent-file-wrapper-requests>; <https://www.uspto.gov/patents/apply/checking-application-status/order-certified-copies>; <https://www.uspto.gov/learning-and-resources/frequently-asked-questions-about-certified-copy-center>) | Secondary (USPTO operational guidance) | High for current USPTO process | Neutral | retrieval channel | Documents the USPTO certified-copy and paper file-wrapper request paths. A certified copy of the file wrapper for application serial 756,124, plus any Licensing & Review correspondence retained in the wrapper, is the highest-value document class for the closure question |
| E-029 | 2026-05-01 | NSA "Patent Office Secrecy Orders" (1948, declassified) (<https://www.nsa.gov/portals/75/documents/news-features/declassified-documents/friedman-documents/patent-equipment/folder_527/41771019081010.pdf>) and NARA SF-115 N1-457-07-001 (<https://www.archives.gov/files/records-mgmt/rcs/schedules/departments/department-of-defense/defense-agencies/rg-0457/n1-457-07-001_sf115.pdf>) | Primary (NSA-declassified historical document; NARA NSA records schedule) | High for the documents themselves; **conditional** for Flanagan applicability | Neutral | possible NSA-side custody chain (conditional) | The 1948 NSA-declassified document is recorded **only** as historical context illustrating that Patent-Office secrecy-order review by ANPAB / Signal Corps cryptology functions long predates 1969. It is **not** evidence about application 756,124. The RG 457 schedule is recorded as a **possible NSA-side custody chain**, queryable **only if** the certified file wrapper or ASPAB records identify NSA as a referring or concurring agency for serial 756,124 |

### Effect of E-017 through E-029 on the ledger

- The **procedural framework** (statute / MPEP / FAS / DTSA-as-modern-analog / PSCRL) is now explicit in the ledger. The PSCRL Group IX / 6A fit explains **why** the application would have been routed for cryptology / communications-security review, **without** asserting which agency sponsored the order.
- The **archival custody chain** is now explicit (D-1 files via NC1-241-76-01; broader patent case files via N1-241-10-001; USPTO certified-copy / file-wrapper channel; conditional NSA RG 457 channel via N1-457-07-001).
- **Agency attribution remains unresolved.** The DIA reading (Begich/NEXUS) and the NSA reading (Flanagan first-person narrative) are preserved as source-tradition readings; neither is upgraded by the procedural framework. Closure still requires the certified file wrapper plus surviving D-1 / Group 220 / Licensing & Review / ASPAB referral or concurrence papers.

---

## Addendum 2026-05-01 (agency attribution): DIA vs NSA vs DoD/ASPAB matrix

Companion file: `AGENCY_ATTRIBUTION_MATRIX.md` (this directory).

The attribution-matrix file weighs DIA vs NSA vs DoD/ASPAB vs Service-channel candidates against period-correct § 181 delegation authority (1964 / 1966 / 1972 Federal Register codifications of DoD Directive 5535.2), NSA's own cryptologic-patent review mechanism (NSA Regulation 80-2; "NSA Comes Out of the Closet"), the Phasorphone outward-Army / underlying-NSA analog (Reason 1981), the Army OJAG / IC-canvassing pattern (1984/1985 CIA secrecy-order packets), USPTO MPEP 120 / 37 CFR 5.2 contactability-of-sponsor language, and the DTSA modern-analog page. Adds rows **E-A1 through E-A13** (numbered separately to avoid renumbering E-001 through E-029).

Headline conclusions (conservative):

- DIA attribution remains a **Begich/NEXUS source-tradition narrative claim**, not official proof. Period-correct delegation under DoD Directive 5535.2 runs § 181 / 182 / 184 authority to the **Secretaries of the Army, Navy, and Air Force**, not to DIA. DIA's Top Secret classification authority listed in the 1972 FR Part 159 Appendix A is **classification authority, not patent-secrecy sponsorship**.
- NSA remains plausible as a technical reviewer / driver: PSCRL Group IX / 6A subject-matter fit; NSA Regulation 80-2 internal patent-review mechanism; the Phasorphone analog showing outward Army routing with underlying NSA responsibility.
- ASPAB / Army OJAG (executive-agent layer) is the most likely outward-paperwork channel for any DoD-caused order, even where the technical assessment came from NSA.
- The strongest smoking-gun record classes (USPTO Group 2200 AC-AK reviewer / agency / recommendation folders; FN 406-02 Patent Application Security Review Files; Air Force Table 51-2 Item 4 security records on patent applications; D-1 secrecy order files) were classified **temporary** under their governing schedules and may have been destroyed. The **certified USPTO/NARA file wrapper** for serial 756,124 remains the highest-probability surviving official evidence and the primary closure target.

---

## Addendum 2026-05-01 (third-layer findings): form-face omission, successor-retention, negative agency-side search, CIA process lead

Companion file: `AGENCY_ATTRIBUTION_MATRIX.md` (this directory), section 12 and rows **E-A14 through E-A17**. Companion file: `findings/investigation-dig/ARCHIVAL_TARGETS_756124.md`, target **(h)**.

Headline points (do not change earlier conclusions; refine wording and survival ranking):

1. **Form-face sponsor omission is normal form behavior.** Declassified comparison examples — NSA Friedman Collection 1941-1947 secrecy-order forms (E-A14) and a CIA-released 1956 Patent Office secrecy-order file (E-A15) — show that the generic Patent Office / Department of Commerce secrecy-order form does not name the sponsoring or recommending agency on the order face. The absence of NSA / DIA / DoD / ASPAB on the Flanagan order face (E-016) is therefore **normal form behavior**, not evidence against an agency sponsor. Sponsor identity is more likely in **D-1**, **AC-AK**, **Group 2200**, **ASPAB**, **agency concurrence**, or **file-wrapper correspondence** records — not on the order face.

2. **Group 2200 selected-application successor retention upgrades survival odds (closure-interval value uncertain).** NARA SF-115 **N1-241-96-003** item 37 covers Group 2200 applications selected for security review by defense agencies and DOE, including secrecy orders issued on those applications. NARA SF-115 **N1-241-10-001** crosswalks item 37 a/b into a **permanent transfer-to-NARA** bucket after closure of the application. Local OCR / extraction disagree on the exact closure interval (one read 18 years; another read 40 years), so cite the underlying PDF and phrase as "permanent transfer after closure" without committing to the interval value. This improves survival odds for a Group 2200 selected-application record on serial 756,124, but **D-1**, **AC-AK**, **certified-copy logs**, and **ASPAB** files still had short destruction schedules under their governing instruments unless copied into the file wrapper or retained elsewhere. (E-A16 in the attribution matrix; target (h) in `ARCHIVAL_TARGETS_756124.md`.)

3. **Negative agency-side search result.** Exact-string searches across NSA, CIA, DIA, Defense (DTIC / DoD), NARA, GovInfo, FAS, and Archive.org for variants including "Gillis Flanagan," "Patrick Flanagan," "756,124," "756124," "US756124A," "US3647970A," "3,647,970," and the patent title did **not** locate a public agency-side record tying NSA / DIA / CIA / Army / ASPAB / DoD to this specific application. Recorded as a **negative finding**, not as proof of absence (see `AGENCY_ATTRIBUTION_MATRIX.md` section 12.3 for the four-line explanation: temporary-schedule destruction; surviving paper inside the file wrapper or N1-241-10-001 successor; conditional NSA RG 457 not yet declassified for this window; finding-aid coverage limits). (E-A17.)

4. **CIA RDP93B01194 — process / cross-check lead only.** The CIA-released file titled "Review of Patent Applications Under Secrecy Order" (CIA Reading Room series RDP93B01194) is useful for **process / cross-check** context: the extracted snippets indicate CIA reviewed secrecy-order applications and could sponsor renewal requests for some applications routed through the IC canvassing layer. The extraction did **not** show "Flanagan," "756,124," "US3647970," or any NSA/DIA-Flanagan tie. Treat as **process lead**; do not cite as Flanagan-specific evidence. Existing rows **E-A6** and **E-A8** already capture adjacent documents in the same CIA series for the IC-canvassing pattern.

---

## Addendum 2026-05-01 (fourth-layer findings): primary-source read of NARA SF-115 N1-241-96-003 and N1-241-10-001

Companion file: `SF115_PRIMARY_READ_LAYER4.md` (this directory). Adds rows **E-A18 through E-A20**.

Direct read of the two SF-115 PDFs corrects two narrower sub-claims in the third-layer findings without changing the section 1 / section 7 attribution conclusions:

1. **The "18 vs 40 years" OCR ambiguity was not in N1-241-96-003 item 37.** Item 37's disposition is event-driven (trigger = rescission) and routes to USPTO-internal central files / PTO repository, not to NARA. The original entry contains no closure-interval value at all. The "18 years" reading should be retired as an OCR artifact; the "40 years" reading applies to the **N1-241-10-001 item 2 successor bucket** (Patent Case Files, Granted), with the printed-form digit on the Group 2200 crosswalk row partially obscured by handwritten reviewer markings and reported by analogy with sibling patent-case-file entries on the same page.

2. **The successor disposition is split, not unified.** N1-241-10-001 item 2 (Patent Case Files, Granted) is **PERMANENT, transfer to NARA after closure**; N1-241-10-001 item 4.1 (Evidentiary Patent Applications) is **TEMPORARY, destroy or delete after 50 years after receipt or when no longer needed, whichever is sooner**. For serial 756,124 — which issued as US 3,647,970 on Mar 7 1972 — the controlling successor bucket is item 2 (permanent). Item 4.1 would only control if the application had been abandoned. The survival-odds upgrade for the Flanagan record under the N1-241-10-001 successor schedule therefore stands on item 2 alone.

3. **Form-face omission finding (E-A14 / E-A15) is unchanged.** Sponsor identity remains in correspondence around the order, not on the order face.

4. **Section 1 / section 7 conclusions unchanged.** DIA attribution unproven; NSA / ASPAB / Service-channel attribution better supported than DIA-as-formal-sponsor on the present record.

---

## Addendum 2026-05-17 (fourth-pass archival addendum)

Companion file: [`FLANAGAN_FOURTH_PASS_ARCHIVAL_ADDENDUM_20260517.md`](FLANAGAN_FOURTH_PASS_ARCHIVAL_ADDENDUM_20260517.md) (this directory).

Fourth-pass research note updating three evidence lanes — Biolectron patent-assignment cluster, US3647970A secrecy-order provenance, and clinical hearing-therapy literature — plus a status update on the LIFE "Whiz Kid" article provenance. Headline points (conservative):

1. **Biolectron assignment cluster.** Google Patents legal-events pages mirror the same reel/frame **004271/0859**, recorded **1984-06-04**, "ASSIGNMENT OF ASSIGNORS INTEREST" from **C.Y. Chen** to **Biolectron, Inc.** (200 Holt St., Hackensack, NJ), effective **1984-05-30**, across Flanagan's **US3393279A** and Puharich/Lawrence's **US3563246A** and **US3629521A**. Supports a 1984 portfolio-consolidation pathway linking Listening / Intelectron / Flanagan assets under Biolectron; does **not** prove original-1960s ownership. The USPTO Assignment Search page did not load during this pass — assignment instrument image remains a next-records target.

2. **US3647970A secrecy-order provenance.** The hosted "Patrick Flanagan High Security Speech Scrambler" PDF (same artifact previously logged as E-016 / E-024) reproduces a Patent Office secrecy-order text block for **Serial No. 756,124**, filed **Aug. 29, 1968**, applicant **Gillis P. Flanagan**, title **Method and System for Simplifying Speech Waveforms** — matching the official **US3647970A** metadata (Application US756124A, filed Aug. 29, 1968). Confidence label: **credible secondary document image aligned to official patent metadata; primary record not yet recovered.** The FAS 1982-1988 rescinded-orders spreadsheet does not include this application — unsurprising given the claimed ~1972 rescission falls outside that spreadsheet's coverage window; not disproof.

3. **Clinical hearing-therapy literature is mixed.** PubMed confirms Puharich/Lawrence 1969, *Acta Otolaryngologica* 67(1):69-83, PMID **4906301**, DOI **10.3109/00016486909124370**, but provides no abstract. The 1974 JAMA *Transdermal Electrostimulation in Sensory Hearing Loss* reported 16-25% W-22 improvements for 35-40% of subjects' better ears under placebo control; a same-issue Glattke/Simmons JAMA double-blind study reported **no discernible treatment effects** and no significant control-vs-treated differences. A 1975 Brooks/Harrison clinical trial (PMID **1092039**, *Trans Sect Otolaryngol Am Acad Ophthalmol Otolaryngol* 80(1):79-84) exists bibliographically but PubMed offers no abstract. Best characterization: real clinical literature with controlled trials existed; publicly accessible abstracts show inconsistent outcomes and do **not** establish durable hearing restoration.

4. **LIFE "Whiz Kid, Hands Down" (Sep 14 1962, William Moeser) status unchanged.** Mirror/transcript page (PhiSciences) preserves title, date, author, and text; a stable Google Books page-image citation for the spread was not recovered. Pass status: **likely but still needs primary page-image capture.**

Next records targets recorded in the addendum file: USPTO assignment image for reel/frame 004271/0859; NARA/USPTO secrecy-order correspondence for application 756,124; full text of *Acta Otolaryngologica* 1969 67(1):69-83; full text of Brooks/Harrison 1975 80(1):79-84; primary LIFE page image. None of this addendum revises Section 1 / Section 7 attribution conclusions; agency attribution for the 756,124 order remains unresolved on the present record.

---

## Addendum 2026-05-17 (fifth-pass LIFE and USPTO addendum)

Companion file: [`FLANAGAN_FIFTH_PASS_ADDENDUM_20260517.md`](FLANAGAN_FIFTH_PASS_ADDENDUM_20260517.md) (this directory). Local page-image captures: [`LIFE_Sep14_1962_p69_WhizKid_Flanagan.jpg`](LIFE_Sep14_1962_p69_WhizKid_Flanagan.jpg), [`LIFE_Sep14_1962_p69_full_WhizKid.jpg`](LIFE_Sep14_1962_p69_full_WhizKid.jpg).

Fifth-pass research note updating two evidence lanes — LIFE Magazine "Whiz Kid, Hands Down" provenance and the USPTO assignment image path for reel/frame 004271/0859 — plus a status check on the Puharich/Lawrence 1969 full-text retrieval. Headline points (conservative):

1. **LIFE "Whiz Kid, Hands Down" upgraded to page-resolved near-primary scan.** Google Books exposes the LIFE September 14, 1962 issue at page **69**, where the article title "Whiz Kid, Hands Down" is visible and the opening text names **Pat Flanagan** as a 17-year-old inventor from Bellaire, Texas (`https://books.google.com/books?id=z00EAAAAMBAJ&pg=PA69`). Page **72** is the article continuation (`https://books.google.com/books?id=z00EAAAAMBAJ&pg=PA72`), giving a stable two-page citation path. Two screenshots are now committed in this directory: `LIFE_Sep14_1962_p69_WhizKid_Flanagan.jpg` (page/snippet view confirming page-resolved Google Books access) and `LIFE_Sep14_1962_p69_full_WhizKid.jpg` (full page 69 view with photo, title, page selector, issue sidebar, and opening text). The **William Moeser** byline is still best supported by the PhiSciences transcript/mirror unless a sharper page-image crop captures the byline directly.

2. **USPTO assignment lane: procedural support gained, image still unrecovered.** Data.gov's catalog record for the **Patent Assignment Search API Version 1.4** identifies the API as public, names the documentation endpoint `https://assignment-api.uspto.gov/documentation-patent/`, and gives temporal coverage **1980-08-01 to 2025-12-31** (which covers the 1984 Biolectron assignment) (`https://catalog.data.gov/dataset/patent-assignment-search-api-version-1-4`). The USPTO AOTW help page documents correct reel/frame search behavior (`https://www.uspto.gov/patents/laws/power-attorney-and-assignment/assignments-web-aotw`). However, both `assignment.uspto.gov` and `assignment-api.uspto.gov` failed DNS resolution from the current environment, so the assignment image for reel/frame **004271/0859** remains an open primary-record target.

3. **Clinical full-text lane unchanged.** Puharich/Lawrence 1969 DOI resolver confirms title "Hearing Rehabilitation By Means Of Transdermal Electrotherapy In Human Hearing Loss Of Sensorineural Origin: Preliminary Report" (`https://doi.org/10.3109/00016486909124370`), matching PubMed (PMID 4906301). Full text not retrieved during this pass; best next steps are library/database/interlibrary-loan rather than further open-web search.

None of this addendum revises Section 1 / Section 7 attribution conclusions; agency attribution for the 756,124 order remains unresolved on the present record. The LIFE upgrade is bibliographic provenance for Flanagan's 1962 press profile and does not bear on the 1969-1972 secrecy-order claim.

---

## Addendum 2026-05-17 (sixth-pass Raborn-archive negative result and LIFE Internet Archive citation)

Companion file: [`FLANAGAN_SIXTH_PASS_ADDENDUM_20260517.md`](FLANAGAN_SIXTH_PASS_ADDENDUM_20260517.md) (this directory).

Sixth-pass research note testing the Flanagan Rense-video claim (`FLANAGAN_RENSE_VIDEO_CLUE_REVIEW_20260516.md`) that Adm. William F. "Red" Raborn Jr. personally intervened to lift the 756,124 secrecy order. Headline points (conservative):

1. **Raborn-archive negative result with testability gap mapped.** Two public Raborn finding aids were read end-to-end: Syracuse University's William F. Raborn Papers (collection 1916-1963; correspondence 1945-1963) and U.S. Naval Academy Nimitz Library MS 490 (1932-1964). Neither contains any reference to Patrick / G. Patrick / Gillis Flanagan, Neurophone, speech waveform, "speech scrambler," secrecy order, application 756,124, or patents 3,393,279 / 3,647,970. Both finding aids **end before the April 25, 1969 order and the March 7, 1972 rescission**, so they cannot corroborate or refute Flanagan's personal-intervention narrative from their own contents. The pass did not locate any public finding aid for Aerojet-era Raborn (1968-1972) personal or business correspondence. The video claim remains **untested by primary archival evidence**, with the testability gap now explicitly mapped.

2. **LIFE September 14, 1962 Internet Archive item confirmed.** Internet Archive identifier `sim_life_1962-09-14_53_11` exists with metadata matching the issue (Vol 53 Iss 11, 143 pages, digitized from microfilm IA1642314-03), but is marked `Access-restricted-item: true` with bookreader-only access from the IA page. Adds a supplementary bibliographic citation alongside the fifth-pass Google Books page-resolved scan; does not yet recover an openly downloadable page image of page 69 / page 72.

3. **Academy of Achievement honoree-list re-check.** Patrick / G. Patrick / Gillis Flanagan still does not appear; Raborn and Gell-Mann are present as 1962 honorees. PhiSciences-tradition claim of a December 29, 1962 Golden Plate Award to Flanagan remains uncorroborated by the official Academy list.

4. **USPTO assignment image (004271/0859) and Acta Otolaryngologica 1969 (PMID 4906301) full text — unchanged.** Both remain open primary-record targets per the fourth/fifth-pass notes.

Next records targets refreshed in the addendum file include Aerojet-era Raborn correspondence (Hagley / Gencorp / LBJ Library / private papers), the USPTO certified file wrapper for application 756,124 as the primary closure target for the agency-attribution question, USPTO Assignment Services manual request for reel/frame 004271/0859, and Houston Chronicle / Houston Post 1961-1962 newspaper archives for the science-fair / atomic-bomb-detector narrative. None of this addendum revises Section 1 / Section 7 attribution conclusions; agency attribution for the 756,124 order remains unresolved on the present record.

---

## Addendum 2026-05-17 (seventh-pass ODP-API surface, FBI-file negative, USNI 1972 oral history, PSCRL primary read)

Companion file: [`FLANAGAN_SEVENTH_PASS_ADDENDUM_20260517.md`](FLANAGAN_SEVENTH_PASS_ADDENDUM_20260517.md) (this directory).

Seventh-pass research note advancing four lanes — USPTO Open Data Portal API mapping, NARA RG 241 / NAID 302050 contact/fee confirmation, FBI Raborn-file OCR read, U.S. Naval Institute Raborn oral history discovery, ASPAB PSCRL January 1971 primary-source read, and FAS rescind.xls primary read. Headline points (conservative):

1. **USPTO ODP API surface for application 756,124 mapped without authentication.** Direct probing of `https://api.uspto.gov/api/v1/patent/applications/05756124/documents` (and adjacent endpoints) returned `403 Forbidden` with `"User is not authorized to access this resource with an explicit deny in an identity-based policy"`, confirming the documents / assignment / meta-data resources **exist** for this application path. Retrieval requires a USPTO ODP API key from `account.uspto.gov/profile/api-manager`. This converts file-wrapper retrieval from a paper-only mail-order task to an immediate machine-readable API call once authenticated. Legacy `assignment.uspto.gov` and `assignment-api.uspto.gov` continue to fail DNS resolution from this environment.

2. **NARA Kansas City RG 241 / NAID 302050 contact and fee structure confirmed.** Email `kansascity.archives@nara.gov`; $20 minimum mail-order including first 25 pages; $0.80/page additional digital or paper; $0.25/page on-site self-service; 400-page reproduction cap. The NARA patents-records page **does not** explicitly mention secrecy-order or D-1 files; whether such records are retained inside the case file for US 3,647,970 must be confirmed by direct inquiry.

3. **FBI file on Raborn (FOI/PA #1327987-0) — double-anchored negative coverage.** Six release OCR text files retrieved from Internet Archive item `FBIFileWilliamRaborn` (Release 1, Release 2-Consult, Releases 3-Consult_1, _2, _3, _7). **Zero hits** for Flanagan, Neurophone, Gillis, Listening Inc, Intelectron, Biolectron, Puharich, Bellaire, 756,124, 3,647,970, or 3,393,279 across all six files. 90+ Aerojet-General mentions placing Raborn as VP / Senior VP Sales at Aerojet-General Corporation, Azusa, CA. **Latest year reference is 1966** across all releases; 210 withheld pages (208 Referral/Consult, 2 Referral/Direct) exist but were not retrieved. Combined with the sixth-pass Syracuse Raborn Papers (ends 1963) and USNA MS 490 (ends 1964), this gives double-anchored negative coverage of the 1968-1972 secrecy-order window.

4. **U.S. Naval Institute Raborn oral history discovered: 15 September 1972, 71 pages, interviewed at his home in Arlington, VA, by John T. Mason Jr.** This is the **only known primary-source Raborn record located in the entire investigation that post-dates the March 7, 1972 rescission**. Highest-value next records target for testing the Flanagan-video Raborn-as-personal-rescuer claim.

5. **Primary-source read of ASPAB Patent Security Category Review List, January 1971 (PSCRL-1).** Title-page participating-agency list quoted exactly: Army (AMC, CE), Navy, Air Force, AEC, NASA, NSA. **DIA not listed.** Item 6A is the NSA-cryptology-communications-security category, covering "Voice, both privacy and secrecy, analog or digitalized." Flanagan's "Method and System for Simplifying Speech Waveforms" with abstract "secure speech transmission system" and CPC classifications H04K1/00, H04K1/06, G10L25/00, H04J1/18 is a **textbook subject-matter fit for Item 6A**. Effect: DIA reading further weakened on structural grounds; NSA reading strengthened on subject-matter and category-list grounds; ASPAB / service-channel outward-paperwork routing remains the most likely cover channel even for an NSA-driven referral.

6. **FAS rescind.xls coverage window mapped by primary read.** 625 rows, patent issue dates 1982-08-31 to 1988-12-27. Earliest 1968 file-date entry is serial 4,740,843 (filed 1968-06-26). No row begins with serial 756xxx. The Flanagan application falls in the dataset's pre-coverage window; absence is recorded as a clean negative, not a refutation.

Effect on Section 1 / Section 7: **sharpened, not closed.** NSA reading provisionally favored on documentary grounds. DIA reading provisionally disfavored on structural grounds. Agency attribution remains formally unresolved on the present public record. The certified USPTO file wrapper (via ODP API or NARA Kansas City) remains the closure target.

