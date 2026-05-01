# Round 21 — Deeper Dig: DARPA/LLNL Citation-Lineage Audit and Begich 1996 Provenance

**Round:** 21
**Date:** May 1, 2026
**Status:** Two decisive findings; one open carry resolved, one new carry opened
**Prior rounds:** [Round 19 (Sharp/Grove vs Flanagan)](DEEPER_DIG_19_ADDENDUM.md), [Round 20 (DARPA silent speech)](DEEPER_DIG_20_ADDENDUM.md)

---

## Why this round

Round 20 catalogued three DARPA silent-speech programs (ASE, Silent Talk + UC Irvine MURI, N3) and concluded direction-of-flow and modality were inconsistent with a Sharp/Grove or Flanagan ancestry — but did not foreclose the possibility of buried citation lineage in foundational LLNL/GEMS patents, nor did it audit Begich 1996, the most likely carrier for the repo's DIA attribution to Flanagan's 1968 secrecy order.

This round runs both audits.

---

## Finding 1 — Patent citation lineage: zero (DECISIVE)

The three foundational LLNL/GEMS silent-speech sensor patents were audited on Google Patents for any citation to either Flanagan Neurophone patent (US 3,393,279 issued 1968-07-16; US 3,647,970 issued 1972-03-07).

| Patent | Inventor(s) | Filed / Issued | Cites US 3,393,279? | Cites US 3,647,970? |
|---|---|---|---|---|
| [US 5,573,012](https://patents.google.com/patent/US5573012A/en) (body sensor MIR) | T. McEwan (LLNL) | 1994 / 1996 | No | No |
| [US 6,006,175](https://patents.google.com/patent/US6006175A/en) (methods/apparatus speech-related EM measurements) | J. Holzrichter (LLNL) | 1996 / 1999 | No | No |
| [US 6,999,924](https://patents.google.com/patent/US6999924B2/en) (audio signals from non-acoustic + acoustic + vibration) | G. Burnett, J. Holzrichter, L. Ng (LLNL) | 2002 / 2006 | No | No |

McEwan's parent micro-impulse radar patents (US 5,345,471; US 5,361,070) were also checked: no Flanagan citations.

**Conclusion:** there is no patent-citation lineage from the DARPA/LLNL silent-speech sensor body of work to the Flanagan Neurophone patents. The most decisive lineage hypothesis from Round 20 is closed in the negative.

This does not exhaust all possible lineage paths (informal knowledge transfer, classified reports, personnel overlap), but it does close the most auditable one.

---

## Finding 2 — Begich 1996 IS the DIA-attribution origin (provenance ledger correction)

Round 19 hypothesized that Begich's 1996 *Towards a New Alchemy: The Millennium Science* (Earthpulse Press) might be the carrier for the repo's "DIA-imposed secrecy order" attribution to Flanagan's 1968 patent. Round 21 obtained the PDF ([rebprotocol.net mirror](https://www.rebprotocol.net/flanagansneurophone.pdf), 36 pages, 268 KB) and audited it directly.

The document contains **two distinct agency attributions** by two different speakers:

### Attribution A — Begich, page 1 (book preface / overview): NSA

> "When he attempted to patent the device, the government demanded that he prove it worked. When he did, the **NSA (National Security Agency) confiscated** the Neurophone."
> — Begich 1996, page 1

### Attribution B — Flanagan quoted by Begich, page 5 (Chapter 1, *The Neurophone*): DIA

> "When our digital Neurophone patent application was sent to the patent office, the **Defense Intelligence Agency slapped it under a secrecy order**. I was unable to work on the device or talk about it to anyone for another five years."
> — Patrick Flanagan, quoted in Begich 1996, page 5

This is the same Begich 1996 source carrying both attributions on different pages — Begich's own narrative voice says NSA, but Flanagan's first-person account quoted within the same book says DIA.

**The repo's DIA attribution origin therefore IS Begich 1996** (specifically, the Flanagan-quoted passage on page 5), confirming the Round 19 carry hypothesis. Carry resolved.

### Important provenance subtlety

The two attributions point to **different secrecy orders**:

- Begich's NSA attribution refers to the **first** Neurophone patent (US 3,393,279, filed 1958, issued 1968) — the 12-year prosecution.
- Flanagan's DIA attribution explicitly refers to the **second / digital** Neurophone (the Mark XI line, patent US 3,647,970 issued 1972, or a later digital variant) — Flanagan says "another five years" after the first 12-year struggle.

This means **the repo's claim that DIA imposed the 1968 secrecy order is internally inconsistent with Begich 1996 itself** — Begich attributes the *first* (1968) order to NSA, and Flanagan attributes a *later* order on a *different* application to DIA. The repo's wording conflates the two.

---

## Updated three-way agency attribution table

| Source | First Neurophone (US 3,393,279, 1958-1968) | Second/digital Neurophone (US 3,647,970 / digital variant) |
|---|---|---|
| Flanagan Mk XI manual (1979) | NSA confiscated | (not specified) |
| Stine, *Analog* May 1979 | DoD/Commerce withheld | (not specified) |
| Begich 1996, narrator (p. 1) | **NSA confiscated** | (not specified) |
| Flanagan quoted by Begich 1996 (p. 5) | (12-year prosecution, no agency named) | **DIA secrecy order** |
| Repo (pre-Round 21) | DIA imposed 1968 secrecy order | (conflated) |

Per **USPTO MPEP §120**, only DoD has statutory authority to issue secrecy orders under 35 U.S.C. §181; NSA and DIA are intelligence components within DoD that may *recommend* but not *issue* secrecy orders. So all four narrator attributions are colloquially loose — the issuing authority of record is the Commissioner of Patents acting on a defense agency recommendation. Stine 1980's "DoD/Commerce" framing is the only one that maps cleanly to the statutory mechanism.

---

## Other detail captured from Begich 1996 audit

- Page 5 confirms Flanagan's claim that the first patent took **12 years** to issue (1958 filing → 1968 grant) and the second was held under secrecy for **5 years**.
- Page 9 corroborates the device parameters from Round 19: US 3,393,279 used a **30–50 kHz amplitude-modulated ultrasonic oscillator** generating **~3,000 V peak-to-peak** across mylar plastic-insulated electrodes on the skin. The 1974 piezoelectric ceramic vibrator update operates at **40 kHz carrier**.
- Page 9 also explicitly cites Lenhardt et al., "Human Ultrasonic Speech Perception," *Science*, July 5, 1991 — Flanagan/Begich claim this as an independent confirmation of the saccule-as-second-hearing-channel mechanism. (Verifying the *Science* paper independently is a Round 22+ carry.)
- Page 10 introduces Begich's first-person account of meeting Flanagan in Sedona, Arizona, ~1995 — establishing that Begich's chapter is built on direct Flanagan interviews, not secondary literature. This means the DIA attribution traces directly to Flanagan's own oral account, not to documentary record.
- No mention of "treason," "firing squad," or any execution-threat language anywhere in the document. No mention of 60V or 20V operating voltages. The ASE program, Silent Talk, N3, Sharp/Grove, WRAIR, and DARPA are not mentioned at all.

---

## Updated provenance ledger

| Repo claim | Status before Round 21 | Status after Round 21 |
|---|---|---|
| 1968 secrecy order on US 3,393,279 imposed by DIA | Origin unknown; three-way conflict (NSA / DoD / DIA) | **Origin found: Begich 1996 p. 5, Flanagan-quoted; but Begich misapplies it — Flanagan's DIA quote refers to the *second*/digital application, not the 1968 order. Repo conflates two distinct secrecy episodes.** |
| LLNL/GEMS silent-speech work descends from Flanagan | Possible via informal channels | **No patent-citation lineage exists. Hypothesis closed in the negative.** |
| Sharp/Grove WRAIR demo descends from Flanagan | Closed in Round 19 (zero-crossing primitive only; different carriers, receptors, mechanisms) | Unchanged |

---

## Open carries after Round 21

1. **FOIA to USPTO Group 220** for application 4|756,124 (or whichever digital Neurophone application Flanagan refers to on Begich p. 5) — only path to determine which agency actually recommended which secrecy order. Still the highest-priority carry.
2. **Lenhardt et al., *Science*, July 5, 1991** — verify the saccule second-hearing-channel paper independently of Flanagan/Begich's framing.
3. **Stine *Analog* May 1979 column** — primary source for the DoD/Commerce attribution; archive search still pending.
4. **Repo language correction** — the current repo text attributes the 1968 order to DIA; Round 21 evidence shows this is a Begich-mediated conflation. Repo should be updated to either (a) cite Begich p. 5 explicitly and clarify the DIA quote refers to the digital/second application, or (b) drop the DIA attribution for the 1968 order and use Begich p. 1 (NSA) for the first order and Begich p. 5 (DIA) for the second.
5. **ASE Phase I full awardees list** — DARPA FY2002 contracts PDF on [Zenodo](https://zenodo.org/records/1215563); not yet read.
6. **Sharp/Grove WRAIR project number in DTIC** — unresolved.
7. **DARPA Silent Talk closeout / final report** — FOIA pending.
8. **N3 BAA HR001118S0029 modality scope** — explicit microwave-auditory exclusion language not yet located.

---

## Sources audited this round

- [Flanagan US 3,393,279](https://patents.google.com/patent/US3393279A/en)
- [Flanagan US 3,647,970](https://patents.google.com/patent/US3647970A/en)
- [McEwan US 5,573,012](https://patents.google.com/patent/US5573012A/en)
- [Holzrichter US 6,006,175](https://patents.google.com/patent/US6006175A/en)
- [Burnett/Holzrichter/Ng US 6,999,924](https://patents.google.com/patent/US6999924B2/en)
- [Begich 1996, *Towards a New Alchemy* (rebprotocol.net mirror)](https://www.rebprotocol.net/flanagansneurophone.pdf), 36 pp., audited pp. 1–12 in detail
- [Flanagan Mk XI Manual (rexresearch mirror)](http://rexresearch.com/flanagan/flanagan2.html)
- USPTO MPEP §120 (statutory framework for secrecy orders, 35 U.S.C. §181)
