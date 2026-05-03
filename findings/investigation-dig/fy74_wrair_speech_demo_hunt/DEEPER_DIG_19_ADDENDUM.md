# Deeper Dig — Round 19 Addendum
## Sharp/Grove vs Flanagan — do they share the same technology and mechanism?

**Compiled:** 2026-05-01
**Builds on:** Round 17 (PR #12), Round 18 (PR #13)
**Status:** Tier A primary-source side-by-side comparison + three-way secrecy-order attribution conflict + Flanagan 1979 manual self-description

---

## Argument in one paragraph

The Sharp/Grove (1973) and Flanagan (Patent 1: 1962-1968; Patent 2: 1968-1972; Mk XI: 1979) threads share **a topological similarity but not a shared technology**. Both ultimately encode audio onto a pulse-train using a zero-crossing-derived trigger, but they differ on every other axis: carrier medium (microwave 2-3 GHz vs RF 20-200 kHz vs audio-band square wave with no carrier), coupling pathway (free-space irradiation of cochlea vs near-field capacitive coupling through skin vs direct ceramic-electrode skin contact), claimed receptor (cochlea via thermoacoustic expansion vs skin/nervous-system "direct linkage" vs piezoelectric skin transduction), and mechanism class (Frey effect / microwave auditory phenomenon vs electrophonic / direct neural excitation). The convergence on zero-crossing-derived pulse encoding is real and worth noting — but it is a convergence **at the encoding-primitive level**, not a shared technology stack. Crucially, round 19 also surfaces a **three-way attribution conflict** for the alleged 1968 secrecy order on Patent 2: Flanagan himself (1979 Mk XI Manual) attributes it to the **National Security Agency**, Stine (1980 *Analog*) attributes it to **Department of Defense / Department of Commerce**, and the repo / LAYER47 / mem0 chain attributes it to the **Defense Intelligence Agency**. Three primary sources, three different agencies, one alleged secrecy order — strongly suggesting the agency-specific claims are unreliable narrative artifacts rather than archive-grounded fact.

---

## §1. The user's question — exact framing

"Do they share the same technology, mechanism?"

Short answer: **No, but they converge at one specific encoding primitive (zero-crossing-derived pulse triggering on the audio signal).** Everything else differs.

Long answer: Section 2 builds the side-by-side comparison from primary-source text. Section 3 isolates the convergence point. Section 4 flags the three-way agency attribution conflict.

---

## §2. Side-by-side comparison from primary-source text

| Axis | Sharp/Grove (Walter Reed, 1973-1974) | Flanagan Patent 1 (1962-1968) | Flanagan Patent 2 (1968-1972) | Flanagan Mk XI (1979) |
|---|---|---|---|---|
| **Carrier medium** | Pulsed microwave RF, ~2 GHz (Brodeur 1977 p. 295n-296: *"a microwave frequency of about two gigahertz"*) | RF 20-200 kHz (patent text §FIG 2: *"a frequency ranging from about 20 to about 200 kilocycles per second"*); ~50 kHz typical (Flanagan 1979 manual: *"the carrier frequency was in the vicinity of 50 Khz"*) | Ultrasonic carrier 40-100 kHz (round 17 §2; Flanagan 1979 retrospective on Patent 2 application context) | **No carrier** (Flanagan 1979 manual: *"a 20 Volt RMS signal does not require a radio carrier to work"*) |
| **Coupling pathway** | Free-space far-field irradiation in anechoic chamber; subject's head is the receiver (Brodeur p. 295n) | Near-field capacitive via insulated electrodes on head/skin (patent §FIG 1) | Capacitive via piezoelectric ceramic electrodes on skin | Direct contact via lead-zirconium-titanate ceramic electrodes on forehead (Stine 1980 + Flanagan 1979 manual) |
| **Modulation/encoding chain on audio** | *"each time a sine wave crossed zero reference in the negative direction, a brief pulse of microwave energy was triggered"* (Justesen 1975, *American Psychologist* p. 396, sourced from Sharp & Grove personal communication 1973-09-28) | Plain analog AM of 20-200 kHz RF carrier — clipper/differentiator chain absent (round 18 §1 verified) | Patent text: clipper → single differentiator → spike pulse on every transition → single-shot multivibrator (round 17 §2) | Per Flanagan 1979 manual: *"hard clipped or run through a zero crossing detector"*; per Stine 1980: clipper → differentiator → second differentiator → 60V square wave → zero-crossing detector |
| **Power level** | Within 10 mW/cm² safety limit at the chamber (Justesen p. 396: *"would approach the current 10 mW/cm² limit of safe exposure"*) | 1 watt at electrodes (Patent 1 text: *"at least about 1 watt"*); ~3000V peak (Flanagan 1979 manual) | Comparable to Patent 1 in patent text | 20V RMS, eight Type-AA cell battery operation (Stine 1980 + Flanagan 1979) |
| **Claimed receptor** | Cochlea via thermoacoustic expansion (Frey effect / microwave auditory phenomenon — confirmed by Foster & Finch 1974 *Science*, Lin 1978 textbook, Frey & Coren 1979 *Science* holographic study) | Nervous system via direct EM coupling — Flanagan claims mechanism is *not* bone conduction or eighth cranial nerve (Stine 1979) | Same as Patent 1 in patent text | Skin as piezoelectric/optoelectric organ — Flanagan 1979: *"the skin became the diaphragm of a biological electrostatic vibrator. The skin is piezo electric and optoelectric"* |
| **Mechanism class** | Frey effect / thermoacoustic auditory transduction (well-replicated, in mainstream peer-reviewed literature) | Electrophonic hearing (known since Volta 1800; mainstream scientific status disputed in the 1960s) | Same as Patent 1 plus speech-waveform simplification | Skin transduction via piezoelectric resonance — Flanagan novel claim |
| **Demo intelligibility (claimed)** | "Single-syllable words for digits between 1 and 10 … readily able to hear, identify, and distinguish among the 9 words" (Justesen 1975 p. 396) | Demo to deaf USPTO examiner; Houston Post deaf granddaughter; Tufts experiments by Batteau (round 18) | Not specifically demonstrated in patent | Stine 1980 personal listening: *"It works even better than the original one"* |
| **Independent peer-reviewed replication** | Frey effect mechanism extensively replicated (Foster & Finch 1974, Guy/Chou/Lin/Christensen 1975, Lebovitz/Seaman, Tyazhelov et al., Frey/Coren 1979) — but the **Sharp/Grove voice-modulation demo specifically has never been published or independently replicated** (rounds 11-15) | DIY replications by Hackaday/Make Magazine 2012 with TL494 PWM controller; original Patent 1 mechanism reproducible | Mk XI is a commercial product line; commercial sales but no peer-reviewed replication | Same as Patent 2 |
| **Filing/publication chronology** | Sharp/Grove/Gandhi 1974 IEEE T-MTT 22:583-584 (mechanism only, intelligibility not stated); Justesen 1975 first publication of voice-modulation claim | Filed 1962-03-13, granted 1968-07-16 | Filed 1968-08-29, granted 1972-03-07 | Production unit operating 1979-07-26 per Stine personal visit |

Sources: [Justesen 1975 *American Psychologist* "Microwaves and Behavior"](https://zoryglaser.com/wp-content/uploads/2020/05/MICROWAVES-AND-BEHAVIOR.pdf); [Brodeur 1977 *The Zapping of America*](https://archive.org/details/zappingofamerica00brod) p. 295n-296; [Flanagan 1979 *Neurophone Mk XI Manual*](http://rexresearch.com/flanagan/flanagan2.html) (Neuroph11.ASC); [Stine 1980 *Analog Magazine* "Biocybernetics Revisited"](http://rexresearch.com/flanagan/flanagan2.html) (analog80.ASC); [Flanagan US 3,393,279](https://patents.google.com/patent/US3393279A/en); [Flanagan US 3,647,970](https://patents.google.com/patent/US3647970A/en).

---

## §3. The convergence point — zero-crossing-derived pulse triggering

The **only axis on which Sharp/Grove and Flanagan converge** is the encoding primitive: a zero-crossing-detection event on the audio waveform triggers a pulse on the carrier (Sharp/Grove) or on the output (Flanagan Mk XI / Stine 1979 description). Specifically:

**Sharp/Grove 1973 (per Justesen 1975):**
> "The electrical sine-wave analogs of each word were then processed so that each time a sine wave crossed zero reference in the negative direction, a brief pulse of microwave energy was triggered."

**Flanagan Mk XI 1979 (per Flanagan's own 1979 manual):**
> "This signal is so time dominant, that it can be hard clipped or run through a zero crossing detector without losing any intelligibility."

**Flanagan Mk XI 1979 (per Stine personal-visit description):**
> "The audio signal is double differentiated and converted to a 60 volt square wave which is then run through a zero crossing detector."

**Three different sources, all describing zero-crossing-derived pulse triggering on the audio.** This is a real similarity. Three reasons it does **not** demonstrate a shared technology:

1. **It is an encoding primitive, not a system architecture.** Zero-crossing detection is a basic signal-processing operation widely used in telephony pulse-code modulation, FM detection, FSK demodulation, and frequency counters since at least the 1940s. Its appearance in two different bioengineering threads in the 1970s is consistent with **independent rediscovery from a common engineering toolbox**, not with shared technology transfer.

2. **What is triggered differs.** Sharp/Grove triggers pulses of **2 GHz microwave energy** on each negative-going zero crossing — the carrier is fundamentally electromagnetic. Flanagan Mk XI triggers **direct 20V RMS voltage pulses** on a ceramic electrode pressed against skin — there is no electromagnetic carrier. These are not the same physical signal.

3. **Chronology runs the wrong direction for technology transfer.** Patent 2's underlying speech-processor concept dates to 1968-08-29 (filing). Sharp/Grove's demo dates to ~1973. If anything, Sharp/Grove came **after** Flanagan's filing — though Patent 2 does not contain the zero-crossing language, so the chronology is inconclusive on whether Sharp/Grove could have been informed by Flanagan's work. Critically, [Brodeur 1977 *Zapping of America*](https://archive.org/details/zappingofamerica00brod) and [Glaser 1976 NMRI bibliography](https://ehtrust.org/wp-content/uploads/Naval-MRI-Glaser-Report-1976.pdf) — the two canonical secondary sources of the era — contain **zero mentions of Flanagan or Neurophone** (round 17 §4, round 18 §5). Sharp and Grove very likely never saw Flanagan's work, and vice versa.

**Conclusion:** Same encoding primitive, different signals, different receptors, different mechanisms, no documented technology transfer in either direction. The convergence is engineering-toolbox parallelism, not a shared technology.

---

## §4. New round-19 finding: three-way agency attribution conflict for "secrecy order 756,124"

While reading the primary-source text of Flanagan's 1979 *Neurophone Mk XI Manual* (Neuroph11.ASC), a third primary-source attribution surfaced for the alleged 1968 secrecy order on Patent 2. The agency Flanagan himself names is **different from both Stine 1980 and the downstream repo claim**:

### The three primary sources

**Source 1 — Flanagan, *Neurophone Mk XI Manual*, 1979 (Neuroph11.ASC):**
> "Six months after the patent was applied for, **the National Security Agency** placed the patent application under a top secrecy order #756,124. The order said that my invention was being suppressed in the interest of National Security. It further stated that I could be tried for treason and shot by firing squad if I revealed its working nature to anyone other than an authorized government representative."

**Source 2 — G. Harry Stine, *Analog Magazine* February 1980 (analog80.ASC):**
> "At the behest of **the Department of Defense, the Department of Commerce** placed Flanagan's new device under secrecy order No. 756,124 dated August 28, 1968."

**Source 3 — Repo `04_FLANAGAN_NEUROPHONE_AND_COUPLING.md` and provenance chain (mem0 → LAYER47 → Rex/Scribd amplifications, 2024-2026):**
> "DIA recognized the military implications in 1968 when they seized his second patent under national security authority… Defense Intelligence Agency identified as the seizing agency"

### Comparison

| Source | Year | Attributed agency |
|---|---|---|
| Flanagan self-account | 1979 | **National Security Agency (NSA)** |
| Stine *Analog* | 1980 | **Department of Defense + Department of Commerce** |
| Downstream repo / mem0 / LAYER47 | 2024-2026 | **Defense Intelligence Agency (DIA)** |

### Why this matters

1. **Each agency is structurally implausible for a different reason.** NSA is the signals-intelligence agency and does not initiate USPTO secrecy orders under 35 USC 181 — that authority lies with DoD and DoE per [USPTO MPEP §120](https://www.uspto.gov/web/offices/pac/mpep/s120.html). DIA is military intelligence and likewise does not initiate secrecy orders directly. The Stine attribution (DoD via Department of Commerce) is the most procedurally plausible — though Department of Commerce is the parent department of USPTO, so Stine's framing ("DoD directs Commerce to place the order") is consistent with the USPTO MPEP procedure.

2. **The agency is not stable across primary sources.** Three primary sources, three agencies. This is the strongest evidence yet that the agency-specific attribution is downstream narrative drift rather than archive-grounded fact.

3. **Even Flanagan's own 1979 self-account differs from his later promotional materials.** The 1979 manual says "NSA". By the 1990s Keelynet archives and 2010s online Flanagan biographies, the attribution had drifted toward "DoD" and ultimately "DIA". Flanagan's own version is not stable.

4. **The "firing squad / treason" quote is from Flanagan's own 1979 manual.** It is not a contemporaneous 1968 document. It is Flanagan's recollection ~11 years after the event, in promotional material for a commercial product line.

### What this does to round 17 §5

Round 17 §5 stated that the secrecy-order claim was unverifiable at the serial-number level due to USPTO/NARA records constraints. Round 19 strengthens this: not only is the claim unverifiable in archives, **it is internally inconsistent across its three primary sources**. The DIA attribution specifically appears nowhere in the 1979-1980 primary sources and is a downstream amplification.

---

## §5. Updates to the Flanagan-thread provenance ledger

Building on round 18 §3:

| Phrase in repo | Earliest primary source | Notes |
|---|---|---|
| "double differentiated" | **Flanagan 1979 Mk XI Manual** (Neuroph11.ASC) AND Stine 1980 (analog80.ASC) | Both sources independently. Flanagan's own term, ratified by Stine. |
| "zero crossing detector" | **Flanagan 1979 Mk XI Manual**: *"hard clipped or run through a zero crossing detector"* | Originates with Flanagan himself in 1979. Stine adopts the term. |
| "60 volt square wave" | Stine 1980 only | Flanagan 1979 says 20V RMS. The 60V figure is Stine's. |
| "lead zirconium titanate electrodes" | **Both** Flanagan 1979 and Stine 1980 | Consistent. |
| "secrecy order No. 756,124" | **Flanagan 1979 Mk XI Manual** (calls it "top secrecy order #756,124"); reused by Stine 1980 | Originates with Flanagan. The number is structurally his application serial number (round 18 §3-4). |
| "August 28, 1968" date | Stine 1980 only | Flanagan 1979 says "Six months after the patent was applied for" (i.e. ~Feb 1969, not Aug 1968). **The two primary sources disagree by ~6 months.** |
| "National Security Agency" attribution | **Flanagan 1979 Mk XI Manual only** | Round 19 finding. Procedurally implausible per USPTO MPEP. |
| "Department of Defense / Department of Commerce" attribution | Stine 1980 only | Procedurally plausible per USPTO MPEP. |
| "Defense Intelligence Agency" attribution | **No primary source.** Earliest located: 1990s Keelynet/Rex Research summaries; amplified by Begich 1996, LAYER47, mem0 2024-2026 | Round 19 finding. **DIA attribution does not appear in either of the two primary sources.** |
| "fight through three law firms" | Flanagan 1979 manual: *"It took four year, and three law firms to sue for release of my invention"* | Originates with Flanagan. |
| "firing squad / treason" quote | Flanagan 1979 manual | Originates with Flanagan. Not a contemporaneous 1968 document. |

---

## §6. Cross-thread structural finding — final form

Across rounds 16-19:

**Sharp/Grove thread:**
- Tier A core: Sharp/Grove/Gandhi 1974 IEEE T-MTT 22:583-584 (mechanism only, no voice claim in abstract). [Round 13 finding.]
- Tier B narrative origin: Justesen 1975 *American Psychologist* footnote, sourced via personal communication from Sharp & Grove dated 1973-09-28. [Round 13 finding.]
- Citation chain failure: Cowan substack falsely citing FDA 77-8026 for the voice-modulation claim. [Round 16 §4.]
- Bibliographic silence: Glaser 1976 NMRI bibliography indexes neither the IEEE T-MTT paper nor the voice-modulation claim despite three Gandhi-solo entries from same period. [Round 17 §4.]
- Brodeur 1977 *Zapping of America* covers the demo at length (pp. 295n-296) but only via Justesen's retelling.

**Flanagan thread:**
- Tier A core: Flanagan US 3,393,279 + 3,647,970 (issued patents, demonstrable RF/electrode coupling). [Rounds 17-19.]
- Tier B narrative origin: G. Harry Stine *Analog Magazine* July 1979 + February 1980 columns (origin of "double-differentiated zero-crossing detector under DoD/Commerce secrecy order 756,124 for 4 years" language). [Round 18 §3.]
- Tier B sub-origin (Flanagan self): Flanagan 1979 *Neurophone Mk XI Manual* (origin of "NSA secrecy order", "firing squad/treason" quote, three-law-firm narrative). [Round 19 §4.]
- Citation chain failures: (a) repo file `04_FLANAGAN_NEUROPHONE_AND_COUPLING.md` lines 22-28 attributing Stine 1979 hardware-visit description to Patent 2 (round 18 §3, corrected this PR series); (b) downstream "DIA" attribution appearing in no primary source (round 19 §4).
- Bibliographic silence: Glaser 1976 NMRI bibliography (round 17 §4) AND Brodeur 1977 *Zapping of America* (round 18 §5) both index zero Flanagan/Neurophone entries. The Flanagan thread did not enter mainstream microwave-bioeffects discourse via standard channels.
- Three-way agency attribution conflict (round 19 §4): NSA (Flanagan 1979) vs DoD/Commerce (Stine 1980) vs DIA (downstream 1990s+).

**Both threads now exhibit the same structural pattern:** Tier A primary source verifiable but narrow; Tier B narrative framework that grew via popular-press retelling, with citation-chain integrity failures at multiple downstream points. Round 19 closes the analytical loop by demonstrating that the **agency-specific attribution** in the Flanagan Tier B narrative is internally inconsistent across its primary sources — strengthening the round-17/18 conclusion that the secrecy-order claim cannot bear the weight the repo's framing places on it.

---

## Sources

### Primary sources retrieved this round
- [Justesen 1975 *American Psychologist* "Microwaves and Behavior" — full text via Glaser archive](https://zoryglaser.com/wp-content/uploads/2020/05/MICROWAVES-AND-BEHAVIOR.pdf) — Sharp/Grove voice-modulation paragraph at p. 396
- [Flanagan 1979 *Neurophone Mk XI Manual* (Neuroph11.ASC) — Rex Research mirror](http://rexresearch.com/flanagan/flanagan2.html) — NSA attribution; firing-squad quote; zero-crossing-detector self-description
- [Stine 1980 *Analog Magazine* "Biocybernetics Revisited" (analog80.ASC) — same Rex Research mirror](http://rexresearch.com/flanagan/flanagan2.html) — DoD/Commerce attribution; double-differentiation hardware description
- [James Davis Nicoll, *Analog* July 1979 review](https://jamesdavisnicoll.com/review/analog-july-1979) — independent confirmation of Stine's "Biocybernetics II" column existence
- [Brodeur 1977 *The Zapping of America* — Internet Archive](https://archive.org/details/zappingofamerica00brod) — Sharp/Grove demo at p. 295n-296

### Existing primary sources cross-referenced
- [Flanagan US 3,393,279 — Google Patents](https://patents.google.com/patent/US3393279A/en) (round 18)
- [Flanagan US 3,647,970 — Google Patents](https://patents.google.com/patent/US3647970A/en) (round 17)
- [Glaser 1976 NMRI bibliography — EHTrust](https://ehtrust.org/wp-content/uploads/Naval-MRI-Glaser-Report-1976.pdf) (round 17)
- [Lin 1978 *Microwave Auditory Effects And Applications* — samim.io PDF](https://samim.io/dl/Microwave_Auditory_Effects_And_Applications-Book_by_James_C_Lin_Phd_1978.pdf) (round 17)
- [USPTO MPEP §120 — Secrecy Orders](https://www.uspto.gov/web/offices/pac/mpep/s120.html)

### Repo cross-references
- `findings/investigation-dig/fy74_wrair_speech_demo_hunt/DEEPER_DIG_17_ADDENDUM.md` (round 17)
- `findings/investigation-dig/fy74_wrair_speech_demo_hunt/DEEPER_DIG_18_ADDENDUM.md` (round 18)
- `findings/investigation-dig/flanagan-claim-provenance.md`
- `findings/03_Technology_Patents/04_FLANAGAN_NEUROPHONE_AND_COUPLING.md`

---

## Carries for round 20+

1. **FOIA to USPTO Group 220** (Licensing & Review) for application 4|756,124 secrecy-order history specifically — only path to definitively resolve the three-way agency attribution conflict.
2. **Archive search for the Stine *Analog* May 1979 column** ("Biocybernetics" original installment, mentioned in Stine's own retrospective). May contain earlier secrecy-order claim with different framing.
3. **Begich 1996 *Towards a New Alchemy* page-by-page audit** for the agency attribution. The German-language [DE patent DE202004003762U1](https://patents.google.com/patent/DE202004003762U1/en) cites Begich 1996 for Flanagan secrecy claims; Begich is likely where the DIA-specific attribution first entered public discourse.
4. **Begich's source for Begich** — Begich 1996 was published in Anchorage by Earthpulse Press, Begich's own imprint. Sourcing chain in Begich 1996 needs verification.
5. **Larger-scope correction PR** for `04_FLANAGAN_NEUROPHONE_AND_COUPLING.md` PART 4 (already flagged in round 18 carries).
6. **Sharp/Grove "9 of 10 digits" provenance** — round 17 found this figure absent from Lin 1978 and present only in Justesen 1975 footnote. Confirmed by [Wikipedia microwave auditory effect article](https://en.wikipedia.org/wiki/Microwave_auditory_effect) which sources the digit count to "1975, an article by neuropsychologist Don Justesen". The figure has a single point of origin and that origin is a personal-communication footnote.
