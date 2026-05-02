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

## Addendum (2026-05-02): Layer-5 catalog-side anchor for NAID 302050 + USPTO Patent Center probe

Companion file: `NARA_CATALOG_PROBE_LAYER5.md` (this directory). Adds rows E-A21 through E-A24 in `AGENCY_ATTRIBUTION_MATRIX.md` § 12.7. Section 1 / section 7 conclusions unchanged.

Headline reads:

1. **Catalog confirmation of the disposition authority.** The NARA Online Catalog detail page for NAID 302050 ("Utility Patent Case Files, January 1, 1836 - December 31, 1998") cites N1-241-10-1, Item 2 and N1-241-96-3, Item 4a as the governing Disposition Authority Numbers, independently confirming the SF-115 successor-schedule read in Layer-4.
2. **Band-membership confirmation for `US 3,647,970`.** The May 2018 RG 241 custodial-list entry "Patent Case Files (#3,647,069 - 3,651,016); ENTRY UD13W 12 (NAID 302050)" places the granted patent case file at NARA Kansas City under series NAID 302050. The catalog-stated arrangement range ("Patent files numbered 1 - 4,143,353 are arranged numerically by patent number") covers patent number 3,647,970. The existing `E-006` band assignment is upgraded from schedule analogy to catalog-side confirmation.
3. **USPTO Patent Center IFW is empty for this filing date.** The detail page at `https://patentcenter.uspto.gov/applications/05756124` is route-recognized but returns an empty bibliographic / Documents & Transactions panel, consistent with paper-only / pre-IFW applications filed in 1968. Google Patents cross-confirms the bibliographic block (no assignee, no government-interest clause, no government-rights statement, no license-rights notice on the face of the issued patent). The certified-copy ordering channel (closure target (a)) remains the operative request channel.
4. **Catalog API access posture.** The 2016 NARAtions claim that "no API key or account at all is required to do basic searching" is obsolete per the 2025 documentation; the v2 API requires an `x-api-key` issued by `Catalog_API@nara.gov`. Public web-UI search remains keyless. Records themselves remain Access: Unrestricted, Use: Unrestricted; the API-key requirement is an access-method constraint, not an access-rights constraint.

Targets (c) and (h) in `ARCHIVAL_TARGETS_756124.md` § 1 are operationally the same target for serial 756,124 specifically and should be merged in the next-pass refinement; both crosswalk to the same series under N1-241-10-1, Item 2. Target (b) (D-1 / NC1-241-76-01) is queued as Layer-6.

---

## Addendum (2026-05-02): Layer-5b workarounds for the three Layer-5 access blocks

Companion file: `WORKAROUNDS_LAYER5B.md` (this directory). Adds rows E-A25 through E-A27 in `AGENCY_ATTRIBUTION_MATRIX.md` § 12.8. Section 1 / section 7 conclusions unchanged. Companion data: `layer5b-data/NAID_302050_items.json`, `layer5b-data/NAID_159071266_assignment_index_file_units.json`, `layer5b-data/NAID_159071266_assignment_index_file_units.csv`.

Three findings:

1. **NARA Catalog API-key block is collapsed for the descriptive-metadata use case.** The NARA AWS Open Data mirror (`arn:aws:s3:::nara-national-archives-catalog`, region `us-east-2`, ~261 GB) provides keyless `--no-sign-request` access to all archival descriptions and authority records, biannually updated (latest export 2026-03-12).
2. **File-unit-level catalog coverage for the Flanagan band is zero.** Bulk-export read of all 708 file units inside NAID 302050 (matching the catalog detail page's stated 708) and all 19 items confirms no description for serial 756,124 / patent 3,647,970 / band `#3,647,069 - 3,651,016` exists at the file-unit or item level. The Kansas City email inquiry remains the only catalog-side path that can resolve file-unit presence.
3. **No keyless workaround exists for the USPTO file wrapper for this filing date.** PEDS sunsetted, ODP returns 403, PPubs JSON returns 404, Wayback has no coverage of legacy PAIR. The certified-copy paper channel via the USPTO Certified Copy Center remains the operative request channel. The Google-mirrored primary PDF for `US 3,647,970` (542 KB, 6 pages) closes the issued-patent-face question: no government-interest clause, no secrecy-rescission notice, no licensee statement, no defense-agency assignee on the face.

**New records class — NAID 159071266 "Index to Patent Assignments by Government Licensees".** A previously-unprobed records class surfaced as a by-product of the bulk-export read. 174 file units alphabetical by licensee-name letter range; the F file unit (NAID 256511711, "Fiala, John P. and Barditch, Irving F. THRU Fletcher, James C., Admin of NASA") is the bracket that would index Flanagan if any government licensee took an assignment of `US 3,647,970`. Plus three Abandoned-Applications file units (NAID 256603800, 256604405, 256603196). Series-level scope (verbatim): "This series consists of an index which documents the issuance of patent assignments to government licensees." Major DoD-adjacent licensees explicitly indexed include Bendix Aviation, Boeing, GE, GM, Hughes Aircraft, IBM, North American Aviation, Northern Ordnance, RCA, Raytheon, Sperry Rand, AT&T / Western Electric, Westinghouse, NASA Administrators (Webb, Fletcher).

This becomes new target (i) in `ARCHIVAL_TARGETS_756124.md` § 1: a bundled Kansas City email inquiry covering UD13W 12 (target c), NAID 159071266 F file unit + 3 Abandoned-Applications units (target i), and the D-1 / NC1-241-76-01 series catalog-side accession status.
