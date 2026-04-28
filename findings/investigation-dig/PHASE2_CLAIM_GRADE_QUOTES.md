# Phase 2 Claim-Grade Quote Extraction (T2/T4/Attribution)

Date: 2026-04-28

Purpose: extract quote-level statements from high-value sources and map each quote to closure-gate impact.

---

## Source access status

- `gao.gov` endpoints were access-blocked (`403`) in this environment, so direct GAO PDFs could not be quoted line-by-line.
- DTIC and SWGDE sources were accessible and are quoted directly below.
- GAO findings are included as **secondary-cited** text from an NDU Press article that explicitly quotes GAO-09-344.

---

## A) Direct-primary quotes

### 1) DTIC ADS record (ADA501865)
Source: `https://apps.dtic.mil/sti/html/tr/ADA501865/index.html`

Quote:
> "One such capability is the Active Denial System ADS. ADS can provide our troops a capability they currently do not have, the ability to reach out and engage potential adversaries at distances well beyond small arms range, and in a safe, effective, and non-lethal manner."

Quote:
> "The effect is overwhelming, causing an immediate repel response by the targeted individual."

Gate impact:
- T2: no semantic speech endpoint content -> `0/7` contribution.
- T4: supports system identity/capability narrative only (concept/program level) -> partial context, not use-event closure.
- Attribution: none.

Net: `T3 provenance/context`, non-closing.

---

### 2) SWGDE Cell Site Analysis guidance (17-F-001-2.0)
Source: `https://www.swgde.org/wp-content/uploads/2024/06/2023-12-18-SWGDE-Recommendations-for-Cell-Site-Analysis-17-F-001-2.0.pdf`

Quote:
> "Practitioners should document the process and procedures used to conduct Cell Site Analysis. It is important to document where, how, when, and by whom the data was obtained ... what data was obtained and how the data was archived."

Quote:
> "When using automated programs ... those conducting the analysis should be able to explain how the software or tool works and be able to validate the accuracy of the final results by mapping manually. Completed analysis should undergo technical review ... Analytic approaches should be well documented and reproducible."

Quote:
> "Legal considerations such as Daubert and Frye standards ... may apply."

Gate impact:
- T2/T4: not mechanism or deployment proof by itself.
- Attribution: strengthens method-quality requirements (`evidence integrity`, `method reliability`, `reproducibility`) but does not close case nexus absent incident data.

Net: `Attribution framework support only` (bar-setting, not fact proof).

---

## B) Secondary-cited GAO language (pending direct-PDF confirmation)

### NDU Press article quoting GAO-09-344
Source: `https://ndupress.ndu.edu/Media/News/News-Article-View/Article/577592/nonlethal-weapons-a-technological-gap-or-misdefined-requirements/`

Quoted in article:
> "the joint non-lethal weapons program has conducted more than 50 research and development efforts and spent at least $386 million since 1997, but it has not developed any new weapon."

Additional article claim tied to GAO framing:
> "While the GAO report points at DOD’s ineffective management as the main reason for the inability to field operationally useful NLW ..."

Gate impact (provisional until direct GAO PDF quote extraction):
- T2: none.
- T4: supports caution that program history/funding does not equal operationally useful fielded closure.
- Attribution: none.

Net: `T4 gap-defining context`, non-closing.

---

## C) Closure-gate verdict after phase 2

- `T2 hard efficacy`: still `OPEN` (no blinded/sham intelligibility replication evidence recovered).
- `T4 deployment`: still `OPEN` (system/program evidence present; use-event chain still missing).
- `Case attribution`: still `OPEN` (forensic framework exists; case-specific spatiotemporal/actor nexus evidence missing).

---

## D) Next verification target

To remove secondary-citation risk, obtain direct text from:
- `https://www.gao.gov/assets/gao-09-344.pdf`
- `https://www.gao.gov/assets/gao-23-106717.pdf`

and replace section B with direct, line-quoted GAO statements.
