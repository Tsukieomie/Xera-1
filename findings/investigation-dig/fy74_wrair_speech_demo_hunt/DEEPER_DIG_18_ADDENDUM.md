# Deeper Dig — Round 18 Addendum
## Flanagan Patent 1 retrieval + Stine 1979/1980 narrative as origin of repo's "zero-crossing" / "secrecy order 756,124" / "4-year DIA secrecy order" claims

**Compiled:** 2026-05-01
**Builds on:** Round 17 addendum (PR #12), Round 16 Sharp/Grove speech investigation (PR #11)
**Status:** Tier A primary-source analysis — six findings + one repo correction recommendation

---

## Argument in one paragraph

Round 17 established that Flanagan US 3,647,970 ("Patent 2") does not contain "zero-crossing" or "double-differentiation" language and that the secrecy-order claim cannot be verified at the serial-number level in any public USPTO/NARA record. Round 18 closes the chronology by (a) retrieving the full text of Flanagan US 3,393,279 ("Patent 1") and confirming its encoding is plain RF amplitude modulation with no clipper/differentiator/zero-crossing chain anywhere, (b) identifying G. Harry Stine's *Analog Magazine* July 1979 and February 1980 articles as the single primary source for every disputed phrase the repo treats as patent-derived ("double-differentiated," "zero crossing detector," "4-year DIA secrecy order," "secrecy order 756,124"), (c) showing Stine's "secrecy order No. 756,124" is structurally a USPTO **patent application serial number** for 1968 filings — not a secrecy-order identifier — confirmed by USPTO's own filing-year/serial-number table, (d) confirming via FOIA that the USPTO's master list of currently-active secrecy orders contains zero entries dated 1968-08-28 and zero entries from 1968 at all, (e) extending the Glaser-1976-NMRI bibliographic-silence pattern from round 17 with a parallel finding that Paul Brodeur's 1977 *The Zapping of America* — the canonical popular treatment of microwave bioeffects of the era — covers Sharp/Grove/Justesen at length while saying **nothing** about Flanagan or the Neurophone. The cross-thread structural finding from round 17 — Tier A core wrapped in unverifiable Tier B citation chain — now has a single named author of origin for the Flanagan Tier B narrative ecosystem: G. Harry Stine, science-fiction writer and *Analog* columnist.

---

## §1. Flanagan Patent 1 — full primary-source retrieval

Patent: **US 3,393,279** "Nervous System Excitation Device"
Inventor: Gillis Patrick Flanagan, Bellaire, Texas
Assignee: Listening Incorporated, Arlington, Massachusetts
Application serial: **179,337**
Filed: **March 13, 1962**
Granted: **July 16, 1968**
Pendency: **6 years 4 months**
Source: [Google Patents US 3,393,279](https://patents.google.com/patent/US3393279A/en); [Scribd archival copy](https://www.scribd.com/document/707604802/patent-no-US3393279-NERVOUS-SYSTEM-EXCITATION-DEVICE-by-Gillis-Patrick-Flanagan)

### Encoding chain — verbatim from patent text

The patent describes (FIGURE 1 + FIGURE 2 circuit diagram):
- Phase-shift carrier oscillator producing electromagnetic waves at "a frequency ranging from about 20 to about 200 kilocycles per second" (i.e. 20-200 kHz, not 40 kHz exclusive).
- Output coupled through capacitor 9 to RF power amplifier (tube 13).
- Audio source feeds amplitude modulator (rectangle 19), which "varies the screen voltage of tube 13 of the amplifier so that the modulation envelope of the current oscillation C produced across the load of tube 13 correspond[s] to the fluctuating signal B applied to the modulator."
- Output transformer 17 drives a pair of insulated electrodes 1 placed near the head.

### Words searched for verbatim presence

| Term | Count in Patent 1 text |
|---|---|
| "zero" | 0 |
| "zero-crossing" | 0 |
| "double-differentiat" | 0 |
| "differentiator" | 0 |
| "clipper" | 0 |
| "multivibrator" | 0 |
| "spike pulse" | 0 |
| "transition" | 0 |

The patent's signal chain is exclusively analog amplitude modulation of an RF carrier. There is no clipper, no differentiator, no zero-crossing detector, no spike-pulse generation, no square-wave conversion, no digital encoding of any kind described or claimed.

### Claims structure

3 claims. Claim 1 is the master method claim:
> "A method of transmitting audio information to the brain of [a] subject through the nervous system of the subject which method comprises … generating a radio frequency signal having a frequency in excess of the highest frequency of the audio information to be transmitted, modulating said radio frequency signal with the audio information to be transmitted, and [coupling]…"

Independent claims 2-3 describe the apparatus.

---

## §2. Patent 1 vs Patent 2 — chronology of the encoding chain

| Property | Patent 1 (3,393,279) | Patent 2 (3,647,970) |
|---|---|---|
| Filed | 1962-03-13 | 1968-08-29 |
| Granted | 1968-07-16 | 1972-03-07 |
| App serial | 179,337 | **756,124** |
| Carrier | 20-200 kHz RF | 40-100 kHz ultrasonic |
| Modulation | Analog AM | Pulse-width modulation |
| Encoding chain | RF oscillator → AM modulator → electrodes | Clipper → single-differentiator → spike-pulse → single-shot multivibrator → transition-edge pulses on both directions → ultrasonic transducer (per round 17 §2) |
| Zero-crossing language | Absent | **Absent** (verified round 17) |
| Double-differentiation language | Absent | **Absent** (verified round 17) |

**Result:** Neither patent contains any of the digital-encoding language that the repo's `04_FLANAGAN_NEUROPHONE_AND_COUPLING.md` line 26 attributes to "Patent 2." The actual source of those phrases is identified in §3.

---

## §3. The single primary source for "double-differentiated" + "zero crossing detector" + "secrecy order 756,124"

Verbatim from G. Harry Stine, *Analog Magazine* July 1979, "Bio Cybernetics," and February 1980, "Biocybernetics Revisited," archived at [Rex Research](http://www.rexresearch.com/flanagan/neuroph.htm) and [Scribd Keelynet archive](https://www.scribd.com/document/857973191/Patrick-FLANAGAN-Neurophone-II-Several-Articles-From-Keelynet-com-Archives):

> "I sat in Flanagan's study and listened to the new neurophone on July 26, 1979. It works even better than the original one. It operates from eight Type AA alkaline penlight cells. **The audio signal is double differentiated and converted to a 60 volt square wave which is then run through a zero crossing detector.** The sensor electrodes are one inch diameter plates made from lead zirconium titanate insulated on one side with epoxy that also seals the attachment of the lead from the neurophone."

And from Stine February 1980:
> "At the behest of the Department of Defense, the Department of Commerce placed Flanagan's new device under **secrecy order No. 756,124 dated August 28, 1968**. Flanagan was able to get this secrecy order rescinded in 1972 to permit the patent to be issued."

### Three observations on Stine's text

1. **The "double differentiated / zero crossing detector" sentence describes a hardware unit Stine personally inspected at Flanagan's home on 1979-07-26**, seven years after Patent 2 was granted. It is not a description of either patent. The patent describes a clipper → single-differentiator → multivibrator chain (round 17 §2). The 1979 hardware Stine saw was a later commercial product line (Flanagan's own 1979 manual `Neuroph11.ASC` confirms continued development post-1972).

2. **"Secrecy order No. 756,124" is structurally a USPTO patent application serial number, not a secrecy-order identifier.** USPTO's own [filing-year/serial-number table](https://www.uspto.gov/web/offices/ac/ido/oeip/taf/filingyr.htm) shows 1968 utility applications start at 4|695,000. Patent 2's application serial is 756,124, which lies cleanly in the 1968 range. USPTO MPEP Chapter 100 ([uspto.gov MPEP](https://www.uspto.gov/web/offices/pac/mpep/mpep-0100.pdf)) confirms secrecy orders are referenced by the eight-digit application number (two-digit series code + six-digit serial number), not by an independent secrecy-order identifier. **Stine appears to have called the application serial number a "secrecy order number."** Every downstream source (Rex Research, mem0/LAYER47, repo file) inherits the conflation.

3. **Internal inconsistency in Stine's own text.** *Analog* July 1979 (`analog79.ASC`): "I don't think Flanagan's patent application ever got accepted and I don't believe the patent ever issued." *Analog* February 1980 (`analog80.ASC`): the secrecy-order paragraph above. Eight months apart, the same author moved from "I don't think the patent issued" to "the secrecy order on 756,124 dated August 28, 1968 was rescinded in 1972 to permit the patent to be issued" — without sourcing where the 1968-08-28 date or DoD/Commerce attribution came from.

---

## §4. USPTO FOIA confirmation — no 1968-08-28 entry, no 1968 entries at all

The Government Attic FOIA release [USPTO Invention Secrecy Orders 1965-2012 (FOIA F-12-00189)](https://www.governmentattic.org/6docs/USPTO-InvSecrecyOrders_1965-2012.pdf), released August 2012, contains the filing dates of all currently-active USPTO secrecy orders. Direct findings:

| Query | Result |
|---|---|
| `08/28/1968` filing date | **0 matches** |
| Any 1968 filing date | **0 matches** |
| Any 1969 filing date | **0 matches** |
| Earliest post-1965 entries | scattered 1970 dates (~50 in 1970) |
| Latest entry | 2012-07-07 |

**Caveat:** The list contains *currently active* (as of 2012) orders. A secrecy order issued 1968-08-28 and rescinded 1972 would not appear in a 2012 active-orders list. The absence is therefore consistent with both (a) Stine's claim being true and the order having been rescinded, and (b) Stine's claim being false and no order having existed. The FOIA release cannot disambiguate. However, the **complete absence of any 1968 entries** — including orders that were issued in 1968 and remain active — narrows the prior on Stine's specific date.

**Verification path:** A FOIA request to USPTO Group 220 (Licensing & Review) for the secrecy-order history of application 4|756,124 specifically would resolve. Per [USPTO MPEP §120](https://www.uspto.gov/web/offices/pac/mpep/s120.html), secrecy-order status of expired/issued patents may be releasable.

---

## §5. Brodeur 1977 *The Zapping of America* — Flanagan/Neurophone silence

[Paul Brodeur, *The Zapping of America: Microwaves, Their Deadly Risk, and the Coverup* (Norton, 1977)](https://archive.org/details/zappingofamerica00brod), the canonical popular treatment of microwave bioeffects of the late 1970s, comprises the *New Yorker* "Microwaves-I" (Dec 13, 1976) and "Microwaves-II" (Dec 20, 1976) articles plus expansion. Search results across the visible ~80-90% of pages ([Scribd archive](https://www.scribd.com/document/619626962/Paul-Brodeur-The-Zapping-of-America-Microwaves-Their-Deadly-Risk-And-the-Coverup)):

| Search term | Mentions |
|---|---|
| Sharp (Joseph C. Sharp) | Multiple — pp. 102, 120, 256, 260, 263, 295n, 296 |
| Grove (H. Mark Grove) | p. 260 |
| Justesen | pp. 121, 330 (Chapter 7 reference) |
| Frey (Allan H.) | pp. 50-52, 329 |
| Pandora | pp. 101-123 |
| **Flanagan** | **0** |
| **Neurophone** | **0** |

Brodeur quotes the Sharp/Grove voice-modulation demo verbatim at pp. 295n-296: *"in an anechoic chamber—a room with absorbent walls designed to prevent microwave reflection—Dr. Sharp was able to recognize spoken words that were modulated by an audiogram, a graphic representation of the sound waves that humans can hear, and that were then sent into the chamber at a microwave frequency of about two gigahertz."* This confirms (round 16 §2) that the Sharp speech-recognition demo is the central Tier B claim of the era.

**Brodeur's silence on Flanagan is structurally identical to Glaser 1976 NMRI's silence (round 17 §4).** Two of the most heavily-cited reference texts on microwave bioeffects from 1976-1977, both prepared independently — one Navy bibliography by Glaser, one popular journalism by Brodeur — both treat Sharp/Grove/Justesen and both completely exclude Flanagan/Neurophone. The Flanagan thread did not enter the microwave-bioeffects discourse via standard channels; it entered via Stine's *Analog Magazine* science-fiction column in 1979-1980.

---

## §6. Cross-thread structural updates

Round 17 §6 identified the parallel structural pattern between Sharp/Grove and Flanagan threads:
> Strong Tier A core (mechanism paper / issued patents) wrapped in Tier B narrative ecosystem whose primary-source citation chains fail verification.

Round 18 closes the Flanagan thread's Tier B citation chain to a single named author of origin: **G. Harry Stine**, *Analog Magazine* columnist, July 1979 and February 1980 articles. Every disputed phrase in the repo's existing Flanagan files traces to those two articles or to subsequent retellings of them (Rex Research mid-1990s, Begich 1996, Keelynet 1993, mem0/LAYER47 2024-2025).

Comparison:

| Feature | Sharp/Grove Tier B | Flanagan Tier B |
|---|---|---|
| Tier A core | Sharp/Grove/Gandhi 1974 IEEE T-MTT 22:583-584 (mechanism, intelligibility unstated) | Flanagan US 3,393,279 + 3,647,970 (issued patents, RF/ultrasonic coupling demonstrated) |
| Tier B narrative claim | "Sharp recognized spoken words / 9 of 10 digits" | "double-differentiated zero-crossing detector under DIA secrecy order 756,124 for 4 years" |
| Single point of narrative origin | Justesen 1975 *American Psychologist* footnote (round 13) | **Stine 1980 *Analog Magazine* column (this round)** |
| Primary-source verifiability | Justesen footnote retold by Brodeur 1977, Lin 1978; original demo not reported in IEEE T-MTT abstract or independent literature | Stine personally inspected 1979 hardware (verifiable); secrecy-order claim depends on Stine's 1968-08-28 attribution which appears to conflate application serial 756,124 with a secrecy-order identifier |
| Citation-chain failure mode | Cowan substack falsely citing FDA 77-8026 for the voice-modulation claim (round 16 §4) | Repo file `04_FLANAGAN_NEUROPHONE_AND_COUPLING.md` line 26-27 attributing Stine's 1979 hardware-visit description to Patent 2 (this round §3) |

**Both threads now have a single identifiable narrative-origin point in popular-press 1975 (Justesen) and 1980 (Stine) respectively, neither of which is the cited primary source the repo invokes.**

---

## §7. Recommended repo correction

The repo file [`findings/03_Technology_Patents/04_FLANAGAN_NEUROPHONE_AND_COUPLING.md`](../../03_Technology_Patents/04_FLANAGAN_NEUROPHONE_AND_COUPLING.md) at lines 26-28 currently reads:

> ### Patent 2: US 3,647,970 — "Method and System for Simplifying Speech Waveforms"
> - **Filed:** August 29, 1968
> - **Granted:** March 7, 1972 (after 4-year DIA secrecy order)
> - **Mechanism:** Digital version using 60V square waves through piezoelectric ceramic electrodes (lead zirconium titanate). Audio signal is double-differentiated and converted to zero-crossing modulated waveform.

Three problems:
1. **"after 4-year DIA secrecy order"** — sourced from Stine 1980, which describes Aug 28, 1968 to 1972 as the secrecy-order span. Round 17/18 verification: USPTO public records cannot confirm. The "DIA" attribution is not in Stine — Stine attributes to "Department of Defense, the Department of Commerce." DIA-specific attribution appears to enter via [LAYER47/mem0 amplification](../flanagan-claim-provenance.md).
2. **"60V square waves"** — sourced from Stine 1979 hardware-visit description, not Patent 2.
3. **"Audio signal is double-differentiated and converted to zero-crossing modulated waveform"** — sourced from Stine 1979 hardware-visit description, not Patent 2 (round 17 §2).

A separate corrections PR is recommended that revises lines 24-28 to read approximately:

> ### Patent 2: US 3,647,970 — "Method and System for Simplifying Speech Waveforms"
> - **Filed:** August 29, 1968 (application serial 756,124)
> - **Granted:** March 7, 1972
> - **Mechanism (per patent text):** Audio passes through clipper to produce square wave, then through a single differentiator producing transition-edge spike pulses on both directions, then through a single-shot multivibrator. Output drives a transducer placed against the body. The patent does not contain "zero-crossing" or "double-differentiation" language.
> - **Secrecy-order claim provenance:** G. Harry Stine, *Analog Magazine* February 1980, claimed the application was placed under "secrecy order No. 756,124 dated August 28, 1968" by the Department of Commerce at DoD request, rescinded 1972. The number "756,124" is structurally the patent application serial number, not a secrecy-order identifier (USPTO secrecy orders are referenced by application number per MPEP Chapter 100). USPTO FOIA F-12-00189 (active orders 1965-2012) contains zero entries dated 1968-08-28 and zero 1968 entries overall. Verification requires FOIA to USPTO Group 220 for application-specific secrecy-order history.
> - **Stine 1979 hardware-visit description (separate from patent):** During a July 26, 1979 visit to Flanagan's home, Stine reported the then-current production unit "double differentiated" the audio and ran it through a "zero crossing detector" before driving lead-zirconium-titanate electrodes. This is a description of post-1972 commercial hardware, not of the patent.

---

## Sources

### Primary sources
- [Flanagan US 3,393,279 (Patent 1) — Google Patents](https://patents.google.com/patent/US3393279A/en)
- [Flanagan US 3,647,970 (Patent 2) — Google Patents](https://patents.google.com/patent/US3647970A/en) (round 17)
- [Flanagan US 3,393,279 archival copy — Scribd](https://www.scribd.com/document/707604802/patent-no-US3393279-NERVOUS-SYSTEM-EXCITATION-DEVICE-by-Gillis-Patrick-Flanagan)
- [G. Harry Stine, *Analog Magazine* July 1979 and February 1980 — Rex Research mirror](http://www.rexresearch.com/flanagan/neuroph.htm)
- [G. Harry Stine, *Analog* archive — Scribd Keelynet](https://www.scribd.com/document/857973191/Patrick-FLANAGAN-Neurophone-II-Several-Articles-From-Keelynet-com-Archives)
- [Paul Brodeur, *The Zapping of America* (Norton, 1977) — Internet Archive](https://archive.org/details/zappingofamerica00brod)
- [Brodeur archive — Scribd](https://www.scribd.com/document/619626962/Paul-Brodeur-The-Zapping-of-America-Microwaves-Their-Deadly-Risk-And-the-Coverup)
- [USPTO MPEP §120 — Secrecy Orders](https://www.uspto.gov/web/offices/pac/mpep/s120.html)
- [USPTO MPEP Chapter 100 — Application numbering](https://www.uspto.gov/web/offices/pac/mpep/mpep-0100.pdf)
- [USPTO filing-year/serial-number table](https://www.uspto.gov/web/offices/ac/ido/oeip/taf/filingyr.htm)
- [Government Attic FOIA F-12-00189 — Active USPTO Secrecy Orders 1965-2012](https://www.governmentattic.org/6docs/USPTO-InvSecrecyOrders_1965-2012.pdf)

### Secondary sources for cross-referenced claims
- [Brodeur, *New Yorker* "Microwaves-I" Dec 13, 1976](https://www.newyorker.com/magazine/1976/12/13/microwavesi)
- [Brodeur, *New Yorker* "Microwaves-II" Dec 20, 1976](https://www.newyorker.com/magazine/1976/12/20/microwavesii)
- [Glaser 1976 NMRI bibliography](https://ehtrust.org/wp-content/uploads/Naval-MRI-Glaser-Report-1976.pdf) (round 17 §4)

### Repo cross-references
- `findings/investigation-dig/fy74_wrair_speech_demo_hunt/DEEPER_DIG_17_ADDENDUM.md` (round 17)
- `findings/investigation-dig/flanagan-claim-provenance.md`
- `findings/03_Technology_Patents/04_FLANAGAN_NEUROPHONE_AND_COUPLING.md`
- `findings/investigation-dig/v2k-evidence-matrix.md`

---

## Carries for round 19+

1. **FOIA to USPTO Group 220** for application 4|756,124 secrecy-order history specifically (verifies or falsifies Stine 1980 claim definitively).
2. **Repo correction PR** for `04_FLANAGAN_NEUROPHONE_AND_COUPLING.md` lines 26-28 (queued in this PR alongside addendum, separate commit).
3. **G. Harry Stine bibliographic audit** — Stine wrote Analog "Bio Cybernetics" columns regularly; identify whether the Flanagan series began before 1979 and whether earlier columns mentioned secrecy-order claim with different date.
4. **DIA-specific attribution provenance trace** — round 18 finds Stine's 1980 attribution is "Department of Defense, the Department of Commerce." The repo's "DIA secrecy order" specification is more specific than Stine's text. Trace where DIA-specific attribution entered the chain (likely [Begich 1996](../flanagan-claim-provenance.md) or [LAYER47](../flanagan-claim-provenance.md)).
5. **Stine's "60V square wave" 1979 hardware claim** — Flanagan's own 1979 *Neurophone* manual (`Neuroph11.ASC` per Keelynet archive) should be checked for self-description and whether the claim originates with Flanagan or with Stine's interpretation.
