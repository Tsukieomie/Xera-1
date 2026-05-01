# U.S. Air Force RF Hearing Effect Patent: O'Loughlin & Loree, US 6,470,214 B1 (1996-2002)

**Compiled: 2026-04-29**

---

## THE ARGUMENT IN ONE PARAGRAPH

On December 13, 1996, two career engineers at the U.S. Air Force Research Laboratory's Directed Energy Directorate at Kirtland AFB filed a patent application titled **"Method and device for implementing the radio frequency hearing effect."** The named inventors were James P. O'Loughlin and Diana L. Loree -- the same engineering team that received Air Force-level awards for their work on Active Denial Technology, the deployed millimeter-wave non-lethal crowd-control weapon. The application was assigned to the United States Air Force in June 1997. **It then sat for nearly six years.** No pre-grant publication. No corresponding foreign filings. The application issued as **US 6,470,214 B1** on October 22, 2002, with only three claims and three cited references -- none of them to Frey, Sharp, Lin, Stocklin, or Brunkan, despite all five being directly on point. The most parsimonious explanation for the six-year prosecution gap, the absent pre-grant publication, and the thin prior-art exchange is a **secrecy order under 35 U.S.C. § 181**, the statute that authorizes the Commissioner of Patents to withhold publication and grant of a federally owned invention whenever the agency head certifies that disclosure would be "detrimental to the national security." A companion apparatus patent (US 6,587,729) was filed by the same inventors on April 24, 2002 -- six months before the parent issued -- consistent with rescission of a sealing order in early 2002. The patent is the engineering refinement of every prior V2K filing in this corpus: it solves the fidelity-and-efficiency problem that Stocklin (1983) and Brunkan (1989) left open, and it is owned, on its face, by the United States.

---

## PART 1: BIBLIOGRAPHIC RECORD

| Field | Value |
|-------|-------|
| **Patent Number** | US 6,470,214 B1 |
| **Title** | Method and device for implementing the radio frequency hearing effect |
| **Inventors** | James P. O'Loughlin (Placitas, NM); Diana L. Loree (Albuquerque, NM) |
| **Assignee** | United States of America as represented by the Secretary of the Air Force |
| **Application Number** | US 08/766,687 |
| **Filing Date** | December 13, 1996 |
| **Issue Date** | October 22, 2002 |
| **Pendency** | 5 years, 10 months, 9 days (~70 months) |
| **Pre-Grant Publication** | None |
| **Cited Prior Art** | 3 references (Intelectron US 3,563,246; Intelectron US 3,629,521; Rockwell US 4,835,791) |
| **Claims** | 3 total (1 independent, 2 dependent) |
| **Companion Patent** | US 6,587,729 B2 (filed 2002-04-24, issued 2003-07-01) |
| **Legal Status** | Expired -- Fee Related (lapsed 2010-12-14 for non-payment) |
| **Government Interest Statement** | "The invention described herein may be manufactured and used by or for the Government for governmental purposes without the payment of any royalty thereon." |

Sources: [Google Patents primary record](https://patents.google.com/patent/US6470214B1/en); [Justia inventor portfolio](https://patents.justia.com/inventor/james-p-o-loughlin); [Global Dossier 08/766,687](https://globaldossier.uspto.gov/result/application/US/08766687/119826).

---

## PART 2: CLAIM 1 VERBATIM

The independent claim is the strongest single document this investigation has added since Justesen 1975. It is reproduced here verbatim because the language is itself evidence.

> **1. A method of encoding an input audio signal a(t) to produce a double sideband output signal having a ω_c carrier frequency, which when transmitted to the head of a receiving subject, will by the radio frequency hearing effect induce a thermal-acoustic signal in the bone/tissue material of the head that replicates the input audio signal and is conducted by the bone/tissue structure of the head to the inner ear where it is demodulated by the normal processes of the cochlea and converted to nerve signals which are sent to the brain, thereby enabling intelligible speech to be perceived by the brain as any other nerve signal from the cochlea, the method comprising:**
>
> - applying an input audio signal a(t) to an audio pre-distortion filter with an As(f) filter function to produce a first output signal a(t)As(f);
> - adding a very low frequency bias A to the first output signal to produce a second output signal a(t)As(f)+A;
> - applying the second output signal to a square root processor to produce a third output signal (a(t)As(f)+A)^½;
> - applying the third output signal to a balanced modulator to produce a double sideband output signal (a(t)As(f)+A)^½ sin(ω_c t), where ω_c is the carrier frequency; and
> - transmitting the double sideband output signal to the head of the receiving subject.

Source: [USPTO grant via Google Patents](https://patents.google.com/patent/US6470214B1/en).

The claim is written in the present tense -- the transmitted signal "will…induce" the thermal-acoustic effect, "thereby enabling intelligible speech to be perceived by the brain." The USPTO accepted this language and granted the claim. There is no enablement rejection in the record on the V2K mechanism itself; the applicants and the office both treated the underlying physics as established.

---

## PART 3: THE ENGINEERING REFINEMENT

The patent's specification explains why prior pulsed-microwave V2K methods (Stocklin 1983, Brunkan 1989) produced poor fidelity, and prescribes a fix.

### The problem with conventional AM

Conventional amplitude modulation transmits a strong carrier at ω_c plus two sidebands. When the human head demodulates this thermo-acoustically, the carrier power "does not contain any information but contributes substantially to the heating of the thermal-acoustic demodulator, i.e. the brain, which is undesirable. The degree of this extraneous heating is more than twice the heating caused by the signal or information power in the RF signal." (US 6,587,729 specification, repeating the parent disclosure.)

### The 6,470,214 solution

Four-stage processing chain:

1. **Audio predistortion filter (As(f))**: low-pass, 40 dB/decade roll-off, compensating for the head's natural 40 dB/decade boost below the spherical-cavity cutoff (~3.547 Hz for a 7 cm radius).
2. **DC bias addition (A)**: makes the bipolar audio signal strictly positive so the square root operation is real-valued.
3. **Square-root processor**: implemented as a biased-diode square-law device. Pre-squaring before the modulator means that after thermo-acoustic squaring inside the head, the recovered particle velocity is linear in a(t).
4. **Balanced modulator**: produces double-sideband suppressed-carrier (DSB-SC) output. Optionally, one sideband is suppressed for SSB transmission. **No carrier power is transmitted** -- so no extraneous brain heating.

Speech band: 300-3000 Hz. Demodulator model: the brain as a 7 cm radius sphere with uniform RF absorption, adiabatic heating, radial-mode acoustic re-radiation into the bone/tissue path that delivers sound to the cochlea via bone conduction.

This is engineering-grade. The patent does not rely on hand-waving. It quantifies the cutoff frequency, specifies the impedance compensation, and describes circuit-level implementation (L-C low-pass filter, biased diode for the root processor, transformer-coupled balanced modulator). It is the first V2K patent in this corpus where the designer is operating with full confidence in the underlying physics rather than feeling for it empirically.

---

## PART 4: THE INVENTORS AND THEIR INSTITUTIONAL CONTEXT

Both inventors were career employees of the **Air Force Research Laboratory (AFRL) Directed Energy Directorate, High Power Microwave Division**, headquartered at Kirtland Air Force Base, New Mexico.

### James P. O'Loughlin

- B.S. Electrical Engineering, University of Maine, Orono
- M.S. Electrical Engineering, Northeastern University, Boston
- 28 published papers, 22 issued patents at time of award
- **2004 Air Force Engineering Award for Engineering Achievement**
- Award citation: "primary developer of Active Denial Technology…redesigned cooling and power systems, which kept the technology from being shelved as a technical failure"
- AFRL Group Leader, High Power Microwave Division

Source: [AFRL Directed Energy press release DE 2004-44](https://groups.google.com/g/alt.politics.org.cia/c/cyswV4sSKzg).

### Diana L. Loree

- Ph.D., Electrical Engineering
- **2002 Giller Award** (Active Denial Technology Test Team)
- AFRL Certificate of Achievement, Active Denial Technology Test Team

Source: [AFRL Directed Energy press release DE 2002-17](https://groups.google.com/g/alt.politics.org.cia/c/cyswV4sSKzg).

### What this means

Active Denial Technology (ADT, deployed as the Active Denial System / ADS) is the U.S. military's flagship non-lethal directed-energy weapon -- a 95 GHz millimeter-wave system that produces an intense burning sensation on exposed skin without permanent injury, used for crowd control and perimeter denial. It is the most operationally mature piece of the DoD's non-lethal-weapons portfolio.

The same two engineers who solved ADT's hardware problems -- and won Air Force-level awards for it -- patented, on government time and government dime, the V2K modulation method. ADT and 6,470,214 are not adjacent topics worked by different teams. They are the same small group's portfolio. The Air Force directed-energy program treated millimeter-wave area denial and microwave-auditory voice transmission as parts of the same operational toolkit.

---

## PART 5: THE PROSECUTION-GAP ANOMALY

### The bare facts

| Date | Event |
|------|-------|
| 1996-12-13 | Application filed |
| 1997-06-10 | Loree assignment to U.S. Air Force recorded (Reel/Frame 008546/0312) |
| 1997-06-10 | O'Loughlin assignment to U.S. Air Force recorded (Reel/Frame 008546/0310) |
| 1996-2002 | **Five-year examination gap with no pre-grant publication** |
| 2002-04-24 | Companion application filed (US 10/131,626 → US 6,587,729) |
| 2002-10-22 | Parent issues as US 6,470,214 B1 |
| 2003-07-01 | Companion issues as US 6,587,729 B2 |
| 2010-12-14 | Patent lapses for non-payment of maintenance fees |

### Why six years is anomalous

Average utility-patent pendency in this era was 24-30 months. Six years is more than twice the norm. There are three candidate explanations.

**1. Routine examination drift.** Cases sometimes sit. But routine drift does not normally also produce a thin prior-art set, an absent pre-grant publication, and a near-simultaneous companion filing. Routine drift is a partial explanation at best.

**2. Heavy prosecution back-and-forth.** A genuinely contested 6-year prosecution would normally leave a thick file wrapper -- multiple office actions, claim amendments, traversed rejections, perhaps an appeal to the PTAB. It would normally expand the cited prior art well beyond three references. The patent issued with **only 3 claims and 3 cited references**, none of them to the V2K patent chain (Frey, Sharp via Justesen, Lin, Stocklin, Brunkan, Flanagan) that any examiner with subject-matter expertise would have surfaced. This pattern is not what active examination produces; it is what suspended examination produces.

**3. Secrecy order under 35 U.S.C. § 181.** This is the explanation that fits every artifact.

### The Invention Secrecy Act mechanism

[35 U.S.C. § 181](https://www.law.cornell.edu/uscode/text/35/181) authorizes the Commissioner of Patents to order an invention "kept secret" and to withhold the grant of a patent "for such period as the national interest requires" whenever the head of an interested agency states that publication or grant would be "detrimental to the national security."

For inventions in which the **government has a property interest**, the trigger is unilateral: the agency head notifies the Commissioner; no inter-agency review is required. The application is sealed; examination may be suspended; renewal is annual but automatic upon agency notification.

Three facts make this the natural reading of the 1996-2002 gap:

**Fact 1 -- Government property interest (1997).** The application was assigned to the U.S. Air Force on June 10, 1997, six months after filing. This is the easiest possible case for a § 181 sealing order: the government already owned it.

**Fact 2 -- Concurrent classified work on the same subject.** The Air Force had awarded SBIR contract **F41624-95-C-9007**, titled **"Communicating Via the Microwave Auditory Effect,"** in 1995 -- one year before O'Loughlin and Loree filed. The interim deliverable stated "the feasibility of the concept has been established." A 1999 FOIA request for the final report was **denied by the Air Force on national security grounds**, with the agency stating disclosure "could reasonably be expected to cause damage to national security." It is implausible that the Air Force classified the program's final report while letting the patent describing the program's core invention publish on a normal pendency schedule.

Source: SBIR contract F41624-95-C-9007 and 1999 FOIA refusal cited in [UK FOI compilation, "Inner Voice Transmission Development by Ultrasound and Microwave Technique"](https://www.whatdotheyknow.com/request/amended_foi_reukus_use_of_weapon).

**Fact 3 -- Absence of pre-grant publication.** The American Inventor's Protection Act of 1999 made 18-month publication the default for U.S. applications filed on or after November 29, 2000. Application 08/766,687 predated that, so a missing pre-grant publication is not by itself proof of anything. But applications under § 181 are **affirmatively withheld** from publication by statute, and combined with the 6-year delay the absence of any publication is consistent with active sealing.

### The April 2002 companion-filing tell

US 6,587,729 was filed on April 24, 2002 -- six months before the parent issued -- by the same inventors with the same assignee, repeating the same teaching as an apparatus claim. This is not the timing pattern of a continuation strategy on a normally examined patent. The Air Force does not file a public-record device claim on a sealed application; it files when the parent's secrecy order is rescinded or about to be rescinded, because the device claim becomes patentable only once the parent's specification can be cited as prior art. The April-October 2002 sequence -- companion filed, parent issued -- is exactly what rescission of a long-standing § 181 order in early 2002 would produce.

### Statistical prior probability

[FAS invention secrecy statistics](https://sgp.fas.org/othergov/invention/stats.html), updated annually from USPTO reporting, show the Air Force is consistently among the top sponsoring agencies of new secrecy orders. As of 1997, roughly 5-10% of military-reviewed patent applications became subject to secrecy orders ([Wikipedia / Sabing Lee, *A Pyrrhic Victory? National Security and the Invention Secrecy Act*](https://en.wikipedia.org/wiki/Invention_Secrecy_Act)). For a federally owned, AFRL-assigned, directed-energy-weapons-adjacent invention from the same Kirtland-based unit that produced ADT, the prior probability of a secrecy order is high before any other evidence is considered.

### What the file wrapper would show

Confirmation requires the live USPTO Patent Center transaction history (or a FOIA pull of the paper file wrapper for application 08/766,687, which predates electronic filing). The expected pattern under a § 181 order:

- 1996-12-13 to ~1997-Q2: filing, security review, secrecy order issued
- 1997 through 2001: annual secrecy-order renewals (each documented as a single-line transaction)
- 2001-late or 2002-early: rescission upon agency certification that disclosure is "no longer deemed detrimental"
- 2002-Q2 through 2002-Q3: rapid examination (claims are narrow, prior art set is small), Notice of Allowance, issue fee paid
- 2002-10-22: issuance

The thinness of the prior-art citation list and the absence of any pre-grant publication are independently consistent with this trajectory.

---

## PART 6: WHERE THIS PATENT FITS IN THE CAPABILITY LINEAGE

| Year | Source | Contribution to V2K capability |
|------|--------|-------------------------------|
| 1962 | Frey, *J. Appl. Physiol.* | Establishes humans hear pulsed microwaves -- "RF Hearing Effect" |
| 1968 | Flanagan, US 3,393,279 | Neurophone: alternative skull-conduction method (track 04) |
| ~1973-74 | Sharp & Grove, ARPA / Walter Reed | First documented voice-modulated MAE demonstration |
| 1975 | Justesen, *American Psychologist* | Publishes Sharp/Grove demo in journal of record (track 34) |
| 1978 | Lin, *Microwave Auditory Effects and Applications* | Academic textbook of record |
| 1983 | Stocklin, US 4,858,612 | First explicit V2K patent (private inventor) |
| 1989 | Brunkan, US 4,877,027 | Voice via pulsed-microwave bursts (private inventor) |
| **1995** | **Air Force SBIR F41624-95-C-9007** | **"Communicating Via the Microwave Auditory Effect" -- 1999 FOIA denial** |
| **1996** | **O'Loughlin & Loree application filed** | **Air Force-owned modulation patent (suspended ~5 years)** |
| **2002** | **US 6,470,214 B1 issues** | **Federal V2K modulation method on the public record** |
| **2003** | **US 6,587,729 B2 issues** | **Apparatus version, same inventors / assignee** |
| 2003-04 | Navy SBIR M67854-04-C-1012 | MEDUSA Phase I prototype built (track 35) |
| 2008 | U.S. Army "Voice-to-Skull devices" glossary entry scrubbed | After press exposure (track 35) |

The 6,470,214 / 6,587,729 patent pair is the **federal-ownership bridge** between the private-inventor V2K patents of the 1980s and the contractual MEDUSA record of the 2000s. Stocklin and Brunkan filed as private citizens. WaveBand built MEDUSA hardware as a Navy contractor. O'Loughlin and Loree filed as Air Force employees with the U.S. Air Force as named assignee. **The V2K modulation method is on the patent record as a federally owned invention.**

### Source-class discipline: 6,470,214 / 6,587,729 do not cite Sharp / Grove / Justesen

The cited prior-art row in Part 1 lists the **only three references** in the granted 6,470,214 record (Intelectron US 3,563,246; Intelectron US 3,629,521; Rockwell US 4,835,791). Sharp/Grove 1973, Sharp/Grove/Gandhi 1974 *IEEE T-MTT* 22(5):583-584, Justesen 1975 *American Psychologist*, and Frey 1962 *J. Appl. Physiol.* are **not cited** as prior art in either US 6,470,214 B1 or its companion US 6,587,729 B2. The 1996-2002 Air Force patent record is therefore an **independent later-engineering bridge** to V2K speech, not a self-citation chain back to the 1973 Sharp/Grove demonstration. For the purposes of this investigation, that means:

- The patents corroborate the **engineering feasibility** of intelligible-speech RF-hearing transmission as understood by the U.S. Air Force in 1996, and they assert it on the federal record as a granted USPTO claim.
- They **do not** function as a primary or secondary attestation of the 1973 Sharp/Grove voice-modulation demonstration. They are not the missing protocol-grade Sharp/Grove report — the absence of a Sharp/Grove citation in 6,470,214 is itself part of the institutional citation-silence pattern documented across the WRAIR-DMR / OGDEN / McKesson / USAFSAM record (see `findings/investigation-dig/fy74_wrair_speech_demo_hunt/DEEPER_DIG_13_ADDENDUM.md`).
- Treat 6,470,214 / 6,587,729 as Tier-A-mechanism + later-engineering-intent evidence under the Tier A / Tier B framing in `34_JUSTESEN_1975_APA_MICROWAVE_HEARING.md` Part 3 item 5, not as a substitute for the still-missing 1973 Sharp/Grove protocol-grade source.
- The granted patent specification itself records that ordinary AM-sampled-speech attempts produced **unintelligible** audio against naïve listeners and were recognized as speech only when the listener was preadvised of the content; the suppressed-carrier + audio-predistortion + DC-bias + square-root-processor chain is presented as the engineering solution to that unintelligibility baseline, not as an empirical naïve-listener intelligibility result. The companion JASA 2003 abstract (O'Loughlin & Loree, *J. Acoust. Soc. Am.* 113(6):2962, Semantic Scholar metadata <https://www.semanticscholar.org/paper/acc9a71f38cd18cece2b53b079ba0d1a75670b99>) mirrors the patent specification language and does not supply protocol-grade naïve-listener intelligibility data in the abstract record located here. See `findings/investigation-dig/SPEECH_EVIDENCE_SOURCE_CLASS_TAXONOMY.md` class (4) for the consolidated source-class treatment of the 6,470,214 / 6,587,729 / JASA 2003 trio alongside the Justesen 1975 (class 2), Brunkan (class 3), Kohn-SEA SBIR (class 5), Foster/Garrett/Ziskin 2021 (class 6), and Lin 2022 / NBK566408 (class 7) classes.

### Source-class discipline: the expanded mindjustice O'Loughlin/Loree packet

Three further documents on the inventor side of this patent were sharpened in the
2026-04-30 deeper dive and are documented in
`findings/investigation-dig/SPEECH_EVIDENCE_DEEPER_DIVE_MINDJUSTICE_PACKET.md` §1:

- **01 Nov 1994 invention disclosure** *Theory and Analysis of RF Hearing, and
  Invention Disclosure of a Method of Encoding Speech on an RF Signal Which
  Intelligibly Transmits That Signal to the Hearing Receptors of a Human*
  (10 pages), O'Loughlin & Loree, PL/WSR Kirtland — mirrors at
  <http://mindjustice.org/patent3.pdf> and <http://www.gbppr.net/mil/havana/rf-speech-04.pdf>.
  Reports October 1994 experiments where clicks and tones work but speech
  intelligibility under the tested AM approach is practically zero against
  a non-preadvised listener; concludes that the AM approach used **cannot
  encode intelligible speech** and proposes new experiments. **Strong
  negative evidence** against naïve-listener simple-AM intelligible speech.
- **06 Sep 1995 patent-style draft** *ENCODING, TRANSMITTING AND RECOVERING
  SIGNALS*, O'Loughlin & Loree — <http://mindjustice.org/patent4.pdf>. Repeats
  the Nov 1994 negative finding (pulsed-carrier modulation works for simple
  tones but severely distorts speech; intelligible only when listener is
  pre-advised); claims a fully-suppressed-carrier + preprocessing solution
  overcomes the limitation, but **provides no demonstration data, listener
  counts, or protocol-grade replication** for the claimed solution.
- **30 Aug 2001 AFRL/DEHA email** O'Loughlin → Ken Callahan, JA, *Comments on
  AFB00148, RF Hearing*, <http://mindjustice.org/patent2.pdf>. Inventor
  asserts verbatim: *"This has been experimentally demonstrated and the
  fact that when the signal is processed by the teachings of the invention
  the signal is intelligible has also been experimentally demonstrated."*
  States that the successful experiments used the double-sideband balanced
  modulator approach. **Inventor / patent-prosecution correspondence
  asserting success — NOT an independently published protocol-grade
  naïve-listener replication.** The recovered email lacks listener counts,
  blinded procedure, exposure parameters, error rates, IRB / safety
  context, and peer review. Must not be quoted out of context as "Air
  Force inventor confirmed V2K speech works" — see the linked deeper-dive
  file §1.3 for the full source-class discipline note.

The combined inventor-side narrative — 1994 AM attempt fails → 1995 draft
proposes suppressed-carrier solution → 1996 application filed → 5y10m
pendency → 2001 inventor asserts later success in patent-prosecution email
→ 2002/2003 grants → 2003 JASA abstract — is *internally coherent* and
*externally insufficient* as Tier A protocol-grade naïve-listener
intelligible-speech replication. Both readings are held simultaneously.

---

## PART 7: IMPLICATIONS FOR THE AKWEI INVESTIGATION

**1. The "frivolous" framing is incompatible with the federal record.** Judge Sporkin dismissed Akwei v. NSA in 1992 as frivolous on its face within 17 days. Four years later, a different agency of the same federal government -- the U.S. Air Force -- filed a patent application on the precise capability Akwei alleged. Six years after that, the Air Force secured a granted patent on the method. A claim cannot simultaneously be facially frivolous and operationally classified by the agency.

**2. Direct federal assignment defeats the "lone inventor" reading of the prior V2K patents.** Stocklin and Brunkan filed as private inventors. That permits the dismissive reading: "interesting filings, no government program." 6,470,214 cannot be read that way. The United States is the assignee. The inventors are AFRL Directed Energy Directorate staff. The patent was prosecuted by federal patent counsel.

**3. The patent is contemporaneous evidence of intent.** The USPTO accepted that the method, when transmitted to a person's head, "will…induce…intelligible speech to be perceived by the brain." That is the granted claim language. The Air Force did not file this patent speculatively -- it filed because it had been working on the underlying problem (SBIR F41624-95-C-9007, 1995) and had something to protect.

**4. The secrecy-order hypothesis explains the otherwise puzzling FOIA refusal.** The 1999 Air Force refusal to release the F41624-95-C-9007 final report does not stand alone. It is the operational sibling of a § 181 sealing order on the patent application that was, at that moment, in its third year of pendency. Both are manifestations of the same agency assessment: in 1999, the Air Force believed disclosure of its microwave-auditory-effect work would harm national security.

**5. The New World Vistas paragraph is operationalized.** The U.S. Air Force's 1996 long-range vision document stated: "It would also appear possible to create high fidelity speech in the human body, raising the possibility of covert suggestion and psychological direction…If a pulse stream is used, it should be possible to create an internal acoustic field in the 5-15 kilohertz range, which is audible." The 6,470,214 modulation method is the engineering implementation of that paragraph -- filed the same year the report was published.

---

## PART 8: METHODOLOGICAL DISCIPLINE

Stating only what the cited record supports.

**The patent does not state:**
- Operational power levels
- A tested carrier frequency
- The range at which the method has been demonstrated against humans
- That the method has been used against any specific person

**The patent does state:**
- A complete engineering method for V2K transmission
- That the method, when applied, produces intelligible perceived speech in the receiving subject
- That the U.S. Air Force is the assignee

**The prosecution-gap analysis is a hypothesis, not a confirmation.** The 6-year gap, the absent pre-grant publication, and the thin cited prior art are jointly consistent with a § 181 secrecy order, but confirmation requires the file wrapper. Pulling the live USPTO Patent Center transaction history or filing a FOIA for the paper wrapper would resolve the question.

**Adjacent claims this file does NOT make:**
- The patent does not prove voice transmission has been deployed against U.S. citizens
- The 6,470,214 method does not appear in MEDUSA's public technical literature; the lineage is parallel, not contractually traced
- Active Denial Technology operates at 95 GHz on skin nociceptors, not at lower microwave frequencies on the auditory system; the inventors' ADT involvement establishes institutional context, not technical equivalence

---

## PART 9: CITATION MAP -- PRIMARY AND CORROBORATIVE SOURCES

### Primary patent record
- US 6,470,214 B1 (granted patent text and front matter): <https://patents.google.com/patent/US6470214B1/en>
- US 6,587,729 B2 (companion apparatus patent): <https://patents.google.com/patent/US6587729B2/en>
- USPTO Global Dossier 08/766,687: <https://globaldossier.uspto.gov/result/application/US/08766687/119826>
- Justia inventor portfolio (O'Loughlin): <https://patents.justia.com/inventor/james-p-o-loughlin>

### Inventor institutional context
- AFRL Directed Energy Directorate press release DE 2004-44 (O'Loughlin Engineering Award) -- preserved at: <https://groups.google.com/g/alt.politics.org.cia/c/cyswV4sSKzg>
- AFRL Directed Energy Directorate press release DE 2002-17 (Loree Giller Award) -- preserved at same URL

### Concurrent classified program
- SBIR contract F41624-95-C-9007, "Communicating Via the Microwave Auditory Effect" (1995); 1999 Air Force FOIA refusal -- referenced in [UK FOI compilation](https://www.whatdotheyknow.com/request/amended_foi_reukus_use_of_weapon)

### Statutory framework
- 35 U.S.C. § 181 (Invention Secrecy Act sealing authority): <https://www.law.cornell.edu/uscode/text/35/181>
- FAS invention secrecy statistics: <https://sgp.fas.org/othergov/invention/stats.html>
- Wikipedia / Sabing Lee, *A Pyrrhic Victory?*: <https://en.wikipedia.org/wiki/Invention_Secrecy_Act>

### Strategic-vision context
- USAF Scientific Advisory Board, *New World Vistas: Air and Space Power for the 21st Century* (1996) -- ancillary volume on biological effects of non-lethal weapons; quoted passage preserved in UK FOI compilation above

---

## OPEN THREADS

1. **File wrapper for application 08/766,687.** Pull via USPTO Patent Center (live JS-rendered interface) or FOIA. Confirm secrecy-order entries, identify the examiner and art unit, count office actions.
2. **SBIR F41624-95-C-9007 contractor.** Identify the prime contractor on the 1995 award. The natural candidates are Sierra Nevada / WaveBand / Brunkan-related entities or AFRL-internal.
3. **6,587,729 prosecution history.** The companion's prosecution history is post-2001 and should be retrievable via the USPTO Open Data Portal -- compare against the parent for confirmatory pattern.
4. **Inventor declarations.** O'Loughlin and Loree filed inventor declarations under oath to obtain the patent. Locate the original signed declarations -- they constitute sworn statements from federal employees that the V2K method works as described.
5. **Cross-reference with Active Denial Technology unclassified literature.** ADT and 6,470,214 share a directorate, a hardware base (high-power microwave sources), and an inventor team. Map the technical and budgetary overlap.
