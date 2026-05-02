# Grove vs Groves — name discipline (Sharp / WRAIR thread)

**Date:** 2026-05-02  
**Scope:** Prevent conflation of **H. Mark Grove** (WRAIR microwave bioeffects associate to Joseph C. Sharp) with unrelated **Groves** strings that appear in OCR, annual-report tables, or web search noise.

---

## 1) Canonical identification (FY74 WRAIR)

Work Unit 057 in AD-A009338 (FY74 Vol 2) lists the associate investigator as:

**`Associate: H. Mark Grove, M.Sc.;`** — same work unit as the “Modulated microwave signals” / “hearing effect” / “auditory study” paragraph.

Plain-text extract: `ADA009338_WRAIR_FY74_Vol2_djvu.txt` in this directory (roster block near the WU 057 narrative).

---

## 2) OCR false split: `Mt. Grove, H.M.`

The same FY74 Vol 2 OCR file contains a standalone line:

**`Mt. Grove, H.M.`**

immediately above the formal WU 057 roster. Context and the correct **`H. Mark Grove, M.Sc.`** roster line imply this is a **scanner/OCR misread** of “H. Mark” (dropped or mis-parsed initial **H**, **Mark** read as **Mt.**), not a second person named “Mount Grove” or a different surname.

**Handling rule:** When quoting FY74 narrative, prefer the **Associate:** roster line; treat **`Mt. Grove`** as OCR garbage unless a facsimile page proves otherwise.

---

## 3) Unrelated `Groves` hits in the same volume

A grep of `ADA009338_WRAIR_FY74_Vol2_djvu.txt` also finds:

- **`Groves, VC`** — military table-style listing (Veterinary Corps), unrelated to microwave WU 057.
- **`Groves, P.G.`** — author initial in a different citation (`Strauss ... Groves, P.G., ...`), unrelated to H. Mark Grove.

**Handling rule:** Do not merge these lines into the Sharp/Grove speech-demo lineage.

---

## 4) Web / tool noise: “Mark Groves,” Andrew S. Grove, etc.

Parallel search JSON artifacts in `findings/investigation-dig/` (e.g. LinkedIn directory pages for “Mark **Groves**,” IEEE pages mentioning **Andrew S. Grove** awards) are **not** evidence about WRAIR’s **H. Mark Grove**.

**Handling rule:** For the 1973–1974 WRAIR microwave thread, require **Grove** (no terminal **s**) plus **Sharp** and/or **WRAIR** / **Walter Reed** context before treating a hit as on-topic.

---

## 5) Repo pointers

| Topic | File |
|--------|------|
| FY74 WU 057 text vs Justesen “speech” escalation | `FY74_SPEECH_DEMO_HUNT.md` |
| No standalone Sharp/Grove speech TR in open indexes | `../SHARP_GROVE_PRIMARY_REPORT_HUNT.md` |
| Institutional “off-program event” reading | `../SHARP_GROVE_OFF_PROGRAM_ANALYSIS.md` |
| Tier A vs Tier B (mechanism vs semantic speech) | `../../../V2K_EVIDENCE_MATRIX.md` |

---

## 6) One-line summary for briefs

**H. Mark Grove** (WRAIR) is the engineer on the Sharp/Grove microwave-hearing line; **Groves** hits in OCR or search are usually **different people** or **OCR artifacts** and must be filtered, not cited as the same individual.
