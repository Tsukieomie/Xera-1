# Archival Retrieval Plan: Application 756,124 (`US756124A` / `US3647970`)

Purpose: obtain primary documentary evidence for three unresolved claims in the Flanagan branch:

1. Secrecy order on application `756,124`.
2. Later rescission/removal of that order.
3. Any documented government seizure/confiscation action versus private ownership transfer.

---

## 1) Priority Order (Operational)

1. USPTO file-level records for `US756124A` (highest value, most direct).
2. NARA holdings for historical secrecy-order case files and agency correspondence.
3. Agency FOIA (DoD/NSA/Commerce) for order recommendation and rescission trail.
4. Periodical archive verification for timeline claims (LIFE, Washington Post, Anchorage Press).

Stop condition: first primary document with explicit `756,124` + secrecy-order action + rescission/removal status.

### 2026-05-01 update — refined closure target

A publicly hosted PDF (E-016 in `investigation-dig/primary-756124/index.md`) contains apparent photocopies/scans of the Patent Office secrecy-order form and the Jan 11 1971 Notice of Allowability for application 756,124. Treated conservatively as a **public copy of apparent Patent Office forms (not USPTO/NARA-certified)**, it tentatively confirms order existence, serial 756,124, title, the 35 U.S.C. (1952) §§181-188 statutory basis, and the Apr 25 1969 order date — but it bears only Patent Office signatures and **does not name a recommending or sponsoring agency**.

The remaining closure target is therefore narrower and more specific:

1. **Certified USPTO/NARA file wrapper** for application serial 756,124 (the official prosecution and security-review record).
2. **Sponsoring-agency referral memo** (or equivalent inter-agency correspondence) identifying which defense entity referred the secrecy action to the Commissioner of Patents — the only document class that can resolve the DIA-vs-NSA attribution conflict.

Until both are obtained, agency attribution remains source-tradition only (Begich/NEXUS = DIA; Flanagan first-person narrative = NSA).

---

## 2) Primary Questions to Resolve

1. Did an official secrecy order exist for application `756,124`?
2. If yes, what was the order type/date and recommending agency?
3. Was it rescinded, modified, or expired? On what date and by whom?
4. Is there documentary evidence of government confiscation/seizure of a device or just suppression/restriction and/or private assignment events?

---

## 3) USPTO Retrieval Targets

## 3.1 Direct identifiers

- Application: `US756124A`
- Issued patent: `US3647970`
- Related variant string seen in metadata: `US3647970D`

## 3.2 Records to request

- Petition history under secrecy-order procedures (including rescission/removal petitions).
- Licensing and Review correspondence for national security marking/actions.
- Any order/rescinding-order copy tied to application serial `756,124`.
- Complete prosecution timeline metadata with event codes and dates.

## 3.3 FOIA request template (USPTO)

Subject: FOIA Request - Secrecy-order and petition records for Application No. 756,124 (`US756124A`)

Body:

"Pursuant to FOIA, I request all available records for U.S. patent application serial number 756,124 (`US756124A`), including:

1) secrecy-order imposition records;
2) continuations/renewals/modifications;
3) petitions for rescission/removal and decisions;
4) rescinding-order documents (if any);
5) correspondence with recommending agencies;
6) event code logs and prosecution timeline entries related to secrecy handling.

Please provide records in electronic format where possible. If portions are withheld, please provide all segregable material and an exemption index."

FOIA channel details (confirmed in recent USPTO FOIA release metadata):

- USPTO FOIA Officer
- Email: `FOIARequests@uspto.gov`
- Mailing: USPTO, P.O. Box 1450, Alexandria, VA 22313-1450

---

## 4) NARA / Agency Targets

## 4.1 NARA

Request accession guidance for:

- Commerce/USPTO records involving invention secrecy administration for late 1960s-early 1970s.
- Defense referral channels for secrecy-order recommendations.

Concrete locator anchors recovered:

- NARA patent landing page confirms USPTO records are in `Record Group 241` and points to `Patent Case Files (NAID 302050)`.
- RG241 transfer list includes an entry band that contains `US3647970`:
  - `Patent Case Files (#3,647,069 - 3,651,016); ENTRY UD13W 12 (NAID 302050)`

Operational note:

- Ask NARA Kansas City to pull both:
  1) the full patent case file for `US3647970`;
  2) any related security-review/secrecy-order cross-reference material tied to application serial `756,124`.

## 4.2 DoD / NSA / Commerce FOIA

Request references containing:

- "756,124"
- "US3647970"
- "Gillis Patrick Flanagan"
- "secrecy order"
- "rescind" / "rescission" / "remove"

FOIA template:

"Please search records for references to patent application serial number 756,124 (`US756124A`) and/or patent `US3647970`, including secrecy-order recommendations, review memoranda, rescission/removal actions, and related correspondence.

In particular, please provide any **referring-agency correspondence** between your agency and the U.S. Patent Office / Commissioner of Patents concerning application serial 756,124, the secrecy order issued **April 25, 1969** under 35 U.S.C. (1952) §§181-188, and its eventual removal prior to issuance of `US 3,647,970` on March 7, 1972. This includes referral memoranda, security-review recommendations, renewal/rescission correspondence, and any inter-agency cross-references involving the **Defense Intelligence Agency (DIA)**, **National Security Agency (NSA)**, **Office of the Secretary of Defense (OSD)**, or other defense components, where applicable to your agency's recordkeeping responsibilities."

NARA contact endpoint (confirmed):

- Email: `kansascity.archives@nara.gov`
- Record family: `RG 241` -> `NAID 302050`

---

## 5) Assignment vs Confiscation Differential Test

Goal: distinguish narrative "confiscation" from documentary ownership transfer.

Evidence classes:

- Class A (strong): seizure order, impound log, court order, agency property record.
- Class B (moderate): secrecy order restricting disclosure/prosecution without seizure language.
- Class C (weak): tertiary narrative claims without primary attachments.
- Class D (alternative explanation): assignment/legal transfer records indicating private ownership movement.

Current known signal:

- `US3393279` has a later assignment event in legal events metadata (ownership-chain movement).
- No recovered Class A evidence in current corpus.

---

## 6) Periodical Verification Pack (Timeline only)

These do not prove secrecy-order mechanics but can validate narrative chronology:

- LIFE (Sep 14, 1962): "Whiz Kid, Hands Down"
- Washington Post (Nov 30, 1977): "You Can Read This Article"
- Anchorage Press (Sep 1996): "The Amazing Neurophone"

Action: retrieve full archival text/images from periodical databases and store as immutable artifacts under `investigation-dig/periodical-evidence/`.

---

## 7) Storage Convention for New Artifacts

Store all primary retrieval artifacts here:

- `investigation-dig/primary-756124/`

Use names:

- `YYYYMMDD-uspto-foia-response-*.pdf`
- `YYYYMMDD-order-*.pdf`
- `YYYYMMDD-rescinding-order-*.pdf`
- `YYYYMMDD-agency-correspondence-*.pdf`

Create `index.md` in that folder with:

- document title
- source agency
- date
- hash/checksum
- one-line evidentiary relevance

---

## 8) Decision Rules for Matrix Update

Upgrade secrecy-order claim confidence only if:

1. Document contains `756,124` or unambiguous cross-reference to `US756124A`; and
2. Document explicitly states order action (impose/renew/rescind/remove); and
3. Source is agency/archival primary record.

Do not upgrade based on repeated tertiary retellings.

### Sub-rule for agency attribution (DIA vs NSA)

The Patent Office secrecy-order form alone (even when certified) is not sufficient to attribute the order to a specific defense agency, because the form bears only Patent Office signatures. Upgrade the **agency-attribution** sub-claim only on:

1. A sponsoring-agency referral memo or inter-agency correspondence that explicitly names the referring agency for serial 756,124; or
2. A FOIA release in which the responsive agency itself acknowledges referring or recommending the secrecy action on application 756,124.

Public PDF copies of Patent Office forms (such as E-016) can support order existence, serial, statute, and dates, but cannot resolve agency attribution.

---

## 9) Immediate Next Actions Checklist

- [ ] Submit USPTO FOIA for `US756124A` secrecy/petition file.
- [ ] Submit NARA inquiry for relevant accession series.
- [ ] Submit DoD/NSA/Commerce FOIA with `756,124` + `US3647970` keywords.
- [ ] Acquire periodical primary scans for LIFE/WaPo/Anchorage citations.
- [ ] Populate `investigation-dig/primary-756124/index.md` as records arrive.
- [ ] If using NARA API, resolve access/auth path for `/api/v2/records/search` (docs reachable; record payload retrieval not yet functional in this environment).

