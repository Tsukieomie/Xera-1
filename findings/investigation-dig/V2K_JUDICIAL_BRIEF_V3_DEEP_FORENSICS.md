# V2K Judicial Brief v3 - Deep Forensics Pass

Target: `V2K_Technology_Judicial_Brief_v3.pdf` (25 pages)

Companion artifacts produced in this pass:
- `investigation-dig/V2K_Technology_Judicial_Brief_v3.extracted.txt`
- `investigation-dig/V2K_Technology_Judicial_Brief_v3.sources_audit.json`

## 1) Source-stack composition (quantified)

From the 38-item source list:
- **High-quality primary/government/journal anchors:** 19
- **Medium (journalism, advocacy, legal mirrors, corporate PR):** 16
- **Mixed (resolver/hostname parsing edge cases):** 3

Interpretation:
- The brief has a solid scientific/legal/government backbone for mechanism and policy context.
- It is overconfident where conclusions depend on medium-tier sources for operational claims.

## 2) Strongest evidentiary zones (defensible)

- Frey/thermoelastic baseline chain (Frey, Lin/Wang, Dagro, NASEM)
- Core biology references (Nature/PNAS/PMC links)
- Statutory and government-document anchors (HAVANA Act, CIA reading room docs, NIJ/OJP, FDA PMA)
- Patent provenance as *claim/intention* evidence (Brunkan/Malech/Flanagan)

These support:
- `T1` mechanism plausibility strongly
- `T3` program/patent/procurement intent moderately

## 3) Weak or inflation-prone zones (where the PDF overreaches)

### A. T2 closure inflation

PDF scorecard marks RF intelligible speech as **CONFIRMED** using:
- Justesen retelling link hosted on a noncanonical mirror (`zoryglaser.com`)
- Brunkan patent text

Why weak:
- Justesen source is not linked via APA canonical access in the source list.
- Patent assertions are not peer-replicated efficacy by themselves.

Result: should remain `T2 not established` in this repo unless protocol-grade primary records are recovered.

### B. MEDUSA operational inflation

PDF source list cites MEDUSA via Wikipedia.
This pass confirms better archival provenance exists in-repo:
- `medusa-navysbir-wayback.html` with contract/topic/phase metadata.

Why weak in PDF:
- It uses tertiary citation where an archival primary proxy is available.
- MEDUSA contract provenance supports T3 existence, not fielded efficacy.

### C. AHI hardware confirmation inflation

Claims 18/19 rely on media reporting (CBS/CNN) and are scored **CONFIRMED**.

Why weak:
- No primary technical test report is linked in source list.
- News reporting can support "reported allegations", not lab-confirmed dispositive proof.

Result: downgrade language to contextual evidence unless primary Pentagon lab documentation is obtained.

### D. Legal-to-technical bridge inflation

HAVANA Act + case survivals are used as if they establish technical causation.

Why weak:
- Statute/policy recognizes injuries/benefits frameworks, not adjudicated mechanism closure.
- Court-survival of pleadings != scientific proof.

## 4) Link hygiene and citation integrity issues

- Multiple long URLs are truncated/wrapped in extraction (WaPo, Examiner, Steptoe), increasing citation fragility.
- Several legal sources rely on Justia mirrors rather than court-native dockets/opinions.
- Justesen citation uses a noncanonical mirror rather than APA/PsycNet primary route.
- MEDUSA source uses wiki despite archived Navy summary now available.

## 5) Claim-to-tier recode (deep pass summary)

- Keep as strong:
  - Mechanism physics/biophysics sections (`T1`)
  - Program-history context if explicitly labeled as context (`T3/T5`)
- Rewrite:
  - Speech efficacy certainty language (`T2`)
  - AHI portable-device claims as "reported" not "confirmed"
  - Legal arguments to avoid implying scientific closure
- Replace source links:
  - MEDUSA wiki -> archived Navy summary + archived SNC acquisition page
  - Justesen mirror -> APA/PsycNet canonical reference path (or clearly marked mirror fallback)

## 6) Recommended hardening edits before legal use

1. Re-label scorecard grades for claims 4, 9-11, 13, 18-20 from `CONFIRMED` to `INFERENTIAL/CONTEXT` unless primary corroborants are added.
2. Insert explicit tier tags in each major section:
   - `[T1 mechanism]`, `[T3 program intent]`, `[T5 legal/policy context]`.
3. Add "Evidence limits" box after each finding.
4. Replace tertiary links with primary or archived-primary where available.
5. Keep Akwei attribution statements at `not established` unless adversarial technical evidence appears.

## 7) Net judgment

This PDF is strongest as an advocacy synthesis for mechanism + program-history continuity.
It is weakest where it asserts operational and semantic-speech closure.

Best use in this repo: retain as a high-coverage external brief, but normalize to:
`T1 strong / T2 unresolved / T3 moderate / T4 not established / T5 context`.
