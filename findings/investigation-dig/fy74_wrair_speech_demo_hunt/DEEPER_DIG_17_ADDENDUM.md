# Deeper-dive 17 — Flanagan / Sharp-Grove cross-thread investigation: **USPTO Application 756,124 = US 3,647,970 verified directly** from the [Google Patents bibliographic record](https://patents.google.com/patent/US3647970A/en) (Filed Aug 29, 1968; Granted Mar 7, 1972; Inventor Gillis P. Flanagan; Application/Serial No. **756,124**) — the application-number→patent-number linkage that rounds 1-15 had carried as tertiary-source-only is now primary-source-attested via USPTO bibliographic data. **Critical correction:** the repo's existing description of Flanagan Patent 2 as using "double-differentiated zero-crossing modulated waveform" (file `04_FLANAGAN_NEUROPHONE_AND_COUPLING.md` lines 26-27) is **not patent-attested**: the 1972 patent text contains zero occurrences of "zero," "zero-crossing," or "double-differentiation"; the actual encoding is **clipper→single-differentiator→spike-pulse→single-shot multivibrator** producing transition-spaced uniform pulses (verbatim *"The square wave is then passed through a differentiator 102 which produces a sharp spike pulse in time correspondence to each transition of the square wave"*; *"the spike pulses are then used to trigger a single shot multivibrator 106"*); the "zero-crossing" framing was a Justesen-1975-style paraphrase imposed retroactively. **Lin 1978 textbook** (*Microwave Auditory Effects and Applications*, Charles C Thomas Publisher) propagates the Tier B Sharp/Grove voice-modulation claim into engineering canon — verbatim p. 176 *"Direct communication of speech via appropriate modulation of microwave energy has been demonstrated by Sharp and Grove (see Justesen, 1975)... each time an analog speech wave crossed the zero reference in the negative direction, a short pulse of microwave energy was emitted from the transmitter... they were able to hear, identify, and distinguish the words tested. Communication of more complex words and sentences was not attempted because the average power density required to transmit these messages would exceed the current 10 mW/cm² guide for safe exposure"* — **but cites ONLY Justesen 1975 as source**, not a Sharp/Grove primary publication, while treating the **Tier A** mechanism (Sharp/Grove/Gandhi 1974 IEEE T-MTT 22:583-584) in entirely separate chapters (pp. 103, 106, 133); Lin's textbook itself enacts the Tier A / Tier B distinction this investigation has imposed externally. **Glaser 1976 NMRI bibliography** (*Bibliography of Reported Biological Phenomena ('Effects') and Clinical Manifestations Attributed to Microwave and Radio-Frequency Radiation*, Compilation and Integration of Report and Seven Supplements, Naval Medical Research Institute) — the canonical 1976 government bibliography of microwave bioeffects — contains **zero entries for Sharp, zero for Justesen 1975, zero for Flanagan / Neurophone, zero for voice/speech/intelligible**, and the Sharp/Grove/Gandhi 1974 IEEE T-MTT 22:583-584 paper itself is **not indexed** despite three Gandhi-solo polarization/frequency entries from the same period; the citation-silence pattern that rounds 11-15 documented across the 1981-2004 institutional record is now extended back to **1976** and onto the **Navy side** of the program-line in addition to the Army WRAIR/USAFSAM side.

This addendum extends round 16's `DEEPER_DIG_16_ADDENDUM.md` (Sharp/Grove speech investigation) by following the user's *dig deeper* directive into the Flanagan branch — specifically, the technical parallel between Justesen's 1975 retelling of the Sharp/Grove zero-crossing pulse-trigger scheme and Flanagan Patent 2's spike-pulse-from-transition encoding, the parallel citation-failure patterns across the Tier B narrative ecosystems of both threads, and the documentary status of the canonical 1968-1976 cross-thread sources.

---

## 1. USPTO Application 756,124 → US 3,647,970 — direct primary-source verification

The repo had carried the application-number ↔ patent-number linkage as tertiary-source-derivative since at least round 8 (`flanagan-claim-provenance.md` line 11: *"the strongest repeated 756,124 claim text appears in mem0 exports as an ingested memory, not as a recovered primary government document"*). Round 17 closes this carry **at the bibliographic-metadata level** (not at the secrecy-order level — see §4 below).

The [Google Patents bibliographic record for US 3,647,970](https://patents.google.com/patent/US3647970A/en) lists:

| Field | Verbatim value (USPTO bibliographic data) |
|---|---|
| Patent Number | US 3,647,970 |
| Title | *Method and System for Simplifying Speech Waveforms* |
| Inventor | Gillis P. Flanagan (5207 Mimosa, Bellaire, Texas 77401) |
| Application/Serial Number | **756,124** (US756124A) |
| Filing date | August 29, 1968 |
| Grant date | March 7, 1972 |
| Pendency | ~3 years 6 months (substantially longer than typical 1968-era pendency of ~2 years) |
| Assignee | None stated |

The 756,124 application number is therefore **bibliographically verified** as Flanagan Patent 2. The pendency of ~3.5 years is consistent with — but does not by itself prove — the existence of an extended secrecy-order delay. Typical 1968-era utility-patent pendency for the same examining group ranged from roughly 18 months to 3 years; a 3.5-year pendency is at the long end of that range but not anomalous on its face.

This bibliographic verification means: when downstream sources (Rex Research compilation, LAYER47 narrative chain in `Tsukieomie/akwei-nsa-case-files`, the Cowan-substack-equivalent V2K narrative ecosystem) reference *"USPTO Application 756,124"* for the secrecy-order claim, the application number is real. **What remains unverified is the claim that this application was placed under a 35 USC 181 secrecy order between approximately February 1969 and March 1972.** That claim depends on records that are not publicly accessible at the serial-number level for the 1968-1972 period (see §4).

## 2. Critical correction — Flanagan Patent 2 does NOT use "zero-crossing modulated waveform"

The repo's existing Flanagan synthesis at `findings/03_Technology_Patents/04_FLANAGAN_NEUROPHONE_AND_COUPLING.md` lines 26-27 describes Patent 2's mechanism as:

> *"Digital version using 60V square waves through piezoelectric ceramic electrodes (lead zirconium titanate). Audio signal is double-differentiated and converted to zero-crossing modulated waveform."*

Round 17 verifies this against the actual patent text and finds the description is **paraphrase imposed retroactively, not patent-attested language**.

Direct examination of the [US 3,647,970 patent text](https://patents.google.com/patent/US3647970A/en) shows:

- **"zero" appears 0 times** in the claims and detailed description.
- **"zero-crossing" / "zero crossing" appears 0 times.**
- **"double-differentiation" / "double differentiated" appears 0 times.**

The actual encoding scheme verbatim from the patent:

> *"The square wave is then passed through a differentiator 102 which produces a sharp spike pulse in time correspondence to each transition of the square wave."* [single differentiator, not double]

> *"the spike pulses are then used to trigger a single shot multivibrator 106 which produces a pulse of predetermined amplitude and time width."*

> *"each transition of the square wave is converted to a pulse of predetermined amplitude and width."*

> *"means for converting the square wave to a series of pulses occurring in a predetermined time relationship... means for producing a first set of pulses of predetermined amplitude and time duration, each pulse corresponding in time to a transition of the square wave."*

The Patent 2 encoding pipeline is therefore:

1. Audio + 50 kHz masking signal → high-pass filter (12 dB/octave 0-15 kHz)
2. Two stages of amplifier + clipper → constant-amplitude **square wave** with transitions spaced according to audio information
3. Differentiator → spike pulses at each square-wave transition
4. Single-shot multivibrator → uniform-width pulses triggered by spike pulses
5. (Optional secure mode) Encoder with parallel delay lines d1/d2/d3 → pulse-bursts; decoder + threshold detector + flip-flop on receive side

This is **transition-edge pulse-position modulation**, not "zero-crossing modulation." The conceptual confusion is understandable — when an audio sine wave is hard-clipped to a square wave, the square-wave transitions occur at the points where the original sine wave **crossed zero** (because the clipper is a zero-threshold comparator). So "transition" and "zero-crossing of original audio" are operationally near-equivalent in this specific topology. But the patent itself describes the operation as transition-edge pulse generation, not zero-crossing detection, and the "double-differentiation" claim has no patent text to support it.

**Why this matters for the cross-thread investigation:** the repo's existing `04_FLANAGAN_NEUROPHONE_AND_COUPLING.md` framing implies that Flanagan Patent 2 (filed Aug 29, 1968) and the Sharp/Grove 1973 voice-modulation demonstration share a specific technical encoding scheme — "zero-crossing modulated waveform" / "negative-zero-crossing pulse trigger." The actual textual evidence is:

- **Justesen 1975 verbatim** (round 16 §3): *"each time a sine wave crossed zero reference in the negative direction, a brief pulse of microwave energy was triggered"* — explicit zero-crossing language, **negative-direction-only** trigger.
- **Lin 1978 verbatim p. 176** (round 17 §3 below): *"each time an analog speech wave crossed the zero reference in the negative direction, a short pulse of microwave energy was emitted from the transmitter"* — Lin's retelling preserves Justesen's negative-zero-crossing language verbatim.
- **Flanagan Patent 2 text**: contains no zero-crossing language; describes transition-edge pulse generation triggered on **both** transitions (positive-going and negative-going), not negative-only. The patent's secure-mode pipeline produces **a pulse at every transition of the square wave**, which means it triggers on both rising and falling edges — operationally **double the pulse rate** of the Justesen-described Sharp/Grove scheme.

The **encoding schemes are similar but not identical**: Flanagan-1968 produces a pulse on every audio zero-crossing (both directions) via differentiator + single-shot; Sharp/Grove-as-described-by-Justesen-1975 produces a pulse only on negative-going zero-crossings. The differentiator-and-single-shot topology is standard 1960s analog-audio-encoding circuitry that any electronics engineer of the period would have been familiar with. The presence of similar encoding schemes in two defense-research-adjacent labs five years apart is consistent with **independent application of standard early-PCM-era audio encoding methods** to two different transduction problems (Flanagan's piezoelectric-skin-coupling vs Sharp/Grove's pulsed-microwave-head-radiation). It does not require — and is not evidence of — a hidden technology-transfer link between the two labs.

The cross-thread comparison is therefore: similar engineering (within standard 1960s analog-audio-encoding repertoire), in defense-research-adjacent contexts, applied to different transduction problems, with the Sharp/Grove application generating more elaborate downstream Tier B narrative claims than the Flanagan application.

## 3. Lin 1978 textbook — Tier A / Tier B textually separated within engineering canon

The [Lin 1978 *Microwave Auditory Effects and Applications* textbook](https://samim.io/dl/Microwave_Auditory_Effects_And_Applications-Book_by_James_C_Lin_Phd_1978.pdf) is the canonical engineering monograph on the microwave auditory effect (Charles C Thomas Publisher, ISBN 0-398-03704-3, Library of Congress 77-21499). Round 17 closes the round 16 §6 carry by direct grep of the textbook contents.

**Tier A treatment (mechanism chapters):**

- **Page 103** verbatim: *"Sharp et al. (1974) found that carbon-impregnated polyurethane microwave absorber (Eccosorb WG4, Emerson and Cuming) acted as a transducer from microwave energy to acoustic energy."* This is in Chapter 5 (*The Interactive Mechanism*), context of physical-properties-of-biological-materials and quantitative-comparison sections.
- **Page 106** verbatim: *"Sharp et al. (1974) suggested that it is conceivable that more than one mechanism may be operating when humans and animals hear microwave pulses."*
- **Page 133 (References)** verbatim: *"Sharp, J. C., Grove, H. M., and Gandhi, O. P.: Generation of acoustic signals by pulsed microwave energy. IEEE Trans Microwave Theory Tech, 22:583-584, 1974."*

The Sharp/Grove/Gandhi 1974 IEEE T-MTT primary paper is therefore directly cited in Lin 1978's references, and discussed in Lin's mechanism chapter under its actual peer-reviewed-publication content (carbon-impregnated polyurethane absorber as microwave-to-acoustic transducer). This is **Tier A treatment** — the published Sharp/Grove primary-research record cited for what it actually contains.

**Tier B treatment (applications chapter):**

- **Page 51** verbatim: *"In addition to the above reports, there have been qualitative accounts of auditory sensation generated in pulse-modulated microwave fields (see, for example, Meahl, 1961; Ingalls, 1967; and Justesen, 1975)."*
- **Page 174** verbatim: *"A third medical application, which is too new for full evaluation, is the potential use of pulse-modulated microwaves for speech communication."*
- **Page 176** verbatim, the full Tier B retelling:

> *"Direct communication of speech via appropriate modulation of microwave energy has been demonstrated by Sharp and Grove (see Justesen, 1975). They tape recorded each of the single-syllable words for digits between one and ten. The speech waveforms of each word were then converted to digital signals in such a fashion that each time an analog speech wave crossed the zero reference in the negative direction, a short pulse of microwave energy was emitted from the transmitter. By radiating themselves with the 'speech modulated' microwave energy, Sharp and Grove reported they were able to hear, identify, and distinguish the words tested. Communication of more complex words and sentences was not attempted because the average power density required to transmit these messages would exceed the current 10 mW/cm² guide for safe exposure."*

This passage is in Chapter 7 (*Applied Aspects*) under *Potential Applications* (p. 173 onward), framed as *"too new for full evaluation"* (p. 174). **Lin's only cited source is Justesen 1975** — not a Sharp/Grove primary publication. The retelling is structurally identical to Justesen 1975 p. 396 (round 16 §3) with three textual differences: Lin says "speech wave" (Justesen says "sine wave"); Lin says "from the transmitter" (Justesen says "was triggered"); Lin adds a power-density-limitation closing sentence not present in Justesen ("Communication of more complex words and sentences was not attempted because the average power density required to transmit these messages would exceed the current 10 mW/cm² guide for safe exposure" — this is **Lin's editorial gloss**, not Sharp/Grove's primary statement).

The structural finding: Lin 1978's textbook itself **enacts the Tier A / Tier B distinction**. The mechanism chapters cite Sharp/Grove/Gandhi 1974 IEEE T-MTT directly for clicks-via-Eccosorb. The applications chapter retells Justesen's voice-modulation narrative as "potential" / "too new for full evaluation" / qualified-by-power-density-safety-limits, with **only Justesen 1975 as source**. Lin treats these as separate evidence classes — exactly the discipline this investigation has imposed externally.

The "average power density required to transmit these messages would exceed the current 10 mW/cm² guide" closing sentence is itself structurally consequential. It implies: even taking the Sharp/Grove voice-modulation demonstration at face value, the engineering would not scale to "more complex words and sentences" within applicable safety guidelines. The Tier B claim, even as Lin retells it, is **bounded by power-density safety constraints** — not by mechanism failure but by safe-radiation limits. This is consistent with Frey/Messenger/Eichert 1972 NTIS AD-747684 verbatim *"It was found that aspects of vocoder technology could not be used to generate speech"* (round 9 §2 carry) within the same WRAIR Project 1J662712AJ21: the Tier B speech-induction problem is **not solved** in a power-density-bounded engineering sense; the Sharp/Grove demonstration is described as a feasibility-edge result for digit identification, not a working speech channel.

The "9 of 10 digits" figure that appears in Justesen 1975 p. 396 (*"the 9 words"*) is **absent from Lin 1978's retelling** — Lin says only "they were able to hear, identify, and distinguish the words tested," with no count. This is the second documented Lin/Justesen textual divergence (the first being "speech wave" vs "sine wave"). The "9 of 10" figure that propagates downstream into the Tier B narrative ecosystem (round 16 §3 forensic anatomy table) is therefore **a Justesen-narrative artifact**, not a Lin-1978-canonized claim.

## 4. Glaser 1976 NMRI bibliography — silent on Sharp/Grove AND Flanagan, even at the IEEE T-MTT level

The [Glaser 1976 NMRI bibliography (EHTrust archive PDF)](https://ehtrust.org/wp-content/uploads/Naval-MRI-Glaser-Report-1976.pdf) — full title *Bibliography of Reported Biological Phenomena ('Effects') and Clinical Manifestations Attributed to Microwave and Radio-Frequency Radiation, Compilation and Integration of Report and Seven Supplements*, compiled by Z. R. Glaser at the Naval Medical Research Institute Bethesda Maryland — is the canonical 1976 government bibliography of microwave bioeffects literature. It was the standard reference for the field through the late 1970s and is the precursor of the Heynick 1987 USAFSAM-TR-87-3 *Critique of the Literature on Bioeffects of Radiofrequency Radiation* canonical Air Force review (round 13 carry, round 14 closure).

Round 17 closes the round 16 §6 first carry by direct grep on Glaser 1976 for the cross-thread author and concept terms. Findings:

| Search term | Result in Glaser 1976 NMRI bibliography |
|---|---|
| **Sharp, J.C.** (any entry) | **0** entries |
| **Grove, H.M.** / **M.H. Grove** / **Groves** | **0** entries |
| **Justesen 1975** *Am Psychol* | **0** entries |
| **Flanagan** / **Patrick Flanagan** | **0** entries |
| **"Neurophone"** | **0** entries |
| **"voice modulation"** | **0** entries |
| **"speech"** | **0** entries |
| **Sharp/Grove/Gandhi 1974 IEEE T-MTT 22:583-584** | **0** entries — paper not indexed |
| **Gandhi, O.P.** (solo) | 3 entries (1973-1974 polarization/frequency-absorption work) |

The Sharp/Grove/Gandhi 1974 IEEE T-MTT primary mechanism paper **is not indexed in the Glaser 1976 NMRI bibliography** despite being directly relevant to microwave bioeffects, despite three Gandhi-solo entries from the same 1973-1974 period being indexed, and despite IEEE T-MTT being a journal whose other 1974 articles **are** indexed in Glaser 1976. This is structurally noteworthy: Glaser indexed Gandhi's solo work at the Proc. IEEE 62(8):1171-1175 polarization paper but did not index Gandhi's co-authored Sharp/Grove/Gandhi 1974 IEEE T-MTT 22(5):583-584 paper.

Justesen 1975 *Am Psychol* — the sole primary-narrative-source for the Tier B Sharp/Grove voice-modulation claim — **is also not indexed in Glaser 1976**, despite being a 1975 publication directly relevant to microwave bioeffects in a major psychology journal. Glaser 1976 was a comprehensive bibliography prepared for NMRI; Justesen's omission cannot be attributed to obscurity (the paper was widely cited by 1976 — it appears, for example, in Lin 1978 textbook references just two years later).

Flanagan / Neurophone — the 1968-1972 patent-suppression-and-rescission narrative — **is also not indexed in Glaser 1976**. This is consistent with Flanagan Patent 2 having only been granted in March 1972 (4 years before Glaser 1976) and not having generated a peer-reviewed-bioeffects-literature publication trail (the Flanagan corpus is patent-and-popular-press, not peer-reviewed-bioeffects-research). It is **not** evidence of suppression — but it does mean the canonical 1976 NMRI bibliography of microwave-and-RF bioeffects literature provides **zero secondary support** for the Flanagan thread.

The Glaser 1976 finding extends the citation-silence pattern that rounds 11-15 documented across the 1981-2004 institutional record (Raslear 1993 WRAIR-DMR Tech Rep 001-92 + OGDEN 1994 + McKesson 1997/1999/2001/2004 + Cordts 1988 USAFSAM-TR-87-30 + Klauenberg 1988 USAFSAM-TR-87-35 + Heynick 1987 USAFSAM-TR-87-3) **back to 1976** and **across the inter-service boundary** from Army WRAIR/USAFSAM onto the Navy NMRI side. The pattern that round 16 framed as *"the most-suppressed event via 9-document institutional citation-and-vocabulary silence"* now spans:

- **1976**: Glaser NMRI bibliography (Navy) — Sharp/Grove/Gandhi 1974 IEEE T-MTT not indexed; Justesen 1975 not indexed; Flanagan not indexed; voice/speech terms not indexed.
- **1981-1987**: SRI-USAFSAM 7-document set (Air Force) — Sharp/Grove/Gandhi 1974 IEEE T-MTT cited for mechanism only; Justesen 1975 not cited; voice/speech vocabulary silent across ~85k OCR lines (round 15 §1).
- **1988**: USAFSAM-TR-87-30 (AD-A192199) and USAFSAM-TR-87-35 (AD-A193305) (Air Force) — Sharp/Grove zero, Justesen 1975 zero (round 12, round 13).
- **1993**: WRAIR-DMR Tech Rep 001-92 (Raslear) (Army) — Sharp zero, Grove zero, Justesen 1975 zero (round 11).
- **1994-2004**: OGDEN BioServices DAMD17-89-C-9021 + McKesson BioServices DAMD17-94-C-4069 (Army-then-Air-Force-Brooks-AFB) — Sharp/Grove zero across all four McKesson reports (~110,000 OCR lines, round 12).

Across **28 years (1976-2004)** of cumulative open-literature microwave-bioeffects bibliography from the Army/Navy/Air Force institutional record, the Sharp/Grove voice-modulation event has **zero citations**, and the Sharp/Grove/Gandhi 1974 IEEE T-MTT mechanism paper itself is unindexed in the canonical 1976 starting-point bibliography.

## 5. Secrecy-order public-records gap — application 756,124 unverifiable at serial-number level (1968-1972)

Round 17 §1 closed the application-number-↔-patent-number linkage at the bibliographic-metadata level. The remaining unverified element of the Flanagan secrecy-order narrative is the **secrecy order itself** — whether application 756,124 was placed under 35 USC 181 secrecy and rescinded between approximately February 1969 and March 1972.

Public-records survey:

- The [FAS Project on Government Secrecy *Invention Secrecy Activity* statistics page](https://sgp.fas.org/othergov/invention/stats.html) maintained by Steven Aftergood from 1991-2021 reports aggregate counts of secrecy orders in effect by fiscal year. **The FAS data does not provide serial-number-level resolution.** The current page covers FY21-FY25; archived versions ([Wayback Machine 2010](https://web.archive.org/web/2010/https://sgp.fas.org/othergov/invention/stats.html)) cover earlier years to FY16. **No FAS-tracked record covers 1968-1972 at any resolution.**
- The [NBER working paper *Consequences of Invention Secrecy: Evidence from the USPTO Patent Secrecy Program in World War II* (Daniel P. Gross 2019, NBER WP 25545)](https://www.nber.org/system/files/working_papers/w25545/revisions/w25545.rev0.pdf) reconstructs serial-numbers of WWII-era secrecy orders from archival records of government agencies that reviewed patent applications and advised the USPTO on secrecy issuance. **NBER coverage is WWII-only** (1940-1945); does not extend to 1968-1972.
- The [USPTO MPEP §120 *Secrecy Orders*](https://www.uspto.gov/web/offices/pac/mpep/s120.html) describes the secrecy-order regime under 37 CFR 5.1-5.8 but does not publish serial-number lists.
- The [National Archives CUI Registry *Secrecy Orders*](https://www.archives.gov/cui/registry/category-detail/secrecy-orders) categorizes secrecy orders as Controlled Unclassified Information (CUI banner marking PSEC) — meaning secrecy-order records themselves are CUI-protected against routine public disclosure.
- The [Wikipedia *Invention Secrecy Act* article](https://en.wikipedia.org/wiki/Invention_Secrecy_Act) (citing FAS) reports that by 1951 the secrecy-order backlog had grown to ~2,400 active orders; *"Approximately twelve inventions by private, non-government-affiliated inventors per year are historically classified."*

The Flanagan claim — that application 756,124 was under secrecy order from approximately February 1969 to March 1972, sponsored by DIA — is **statistically plausible** within the historical envelope (private-inventor secrecy orders averaging ~12/year, with thousands active during the Cold War period). The claim is **not verifiable at the serial-number level via any public archive currently accessible**, because:

1. FAS coverage starts post-1991 and is aggregate-only.
2. NBER serial-number reconstruction is WWII-only.
3. NARA classifies secrecy-order records as CUI/PSEC.
4. USPTO does not publish secrecy-order serial-number lists.

The repo's existing claim-provenance discipline (`flanagan-claim-provenance.md`) categorizes the secrecy-order claim as *"unverified pending USPTO/NARA/FOIA primary records"* — and round 17 confirms this categorization is correct **and that the verification path requires either**:

- A USPTO Group 220 Licensing & Review FOIA request specifically for application 756,124's prosecution history including any 35 USC 181 actions; or
- A NARA archival request targeting Department of Commerce / Department of Defense / DIA records of 35 USC 181 secrecy-order issuances and rescissions for the period February 1969 – March 1972 with serial-number-level filtering; or
- A JFOIAU/Defense Office of Prepublication and Security Review query specifically targeting DIA's 1968-1972 patent-secrecy advisory record.

None of these paths can be exercised without a sustained FOIA program; round 17 is the right place to formally acknowledge the limitation and route the carry to round 18+.

## 6. Cross-thread structural finding — Tier B narrative ecosystems share a citation-failure pattern

Combining round 16 §4 (Cowan substack false-citation finding for Sharp/Grove) with round 17 §§1-5 yields a structural cross-thread observation:

| Property | Sharp/Grove voice-modulation thread | Flanagan Neurophone-secrecy thread |
|---|---|---|
| Primary peer-reviewed paper | Sharp/Grove/Gandhi 1974 IEEE T-MTT 22:583-584 (Tier A only) | Flanagan US 3,393,279 + US 3,647,970 (issued patents, technical disclosure complete) |
| Primary-source for Tier B claim | Justesen 1975 *Am Psychol* 30(3):396 Note 2 — single paragraph | Tertiary chain: Rex Research compilation + Scribd/Keelynet archive + LAYER47 narrative ingest |
| Specific technical scheme | Justesen-narrative-only: negative-zero-crossing pulse trigger, "9 of 10 digits" | Patent text supports transition-edge pulse generation; "double-differentiated zero-crossing" framing imposed retroactively in tertiary sources (round 17 §2) |
| Government-suppression claim | None — silence as evidence | Secrecy Order #756,124 + DIA + treason/firing-squad warning |
| Government-suppression evidence | N/A | Application number bibliographically verified (round 17 §1); secrecy-order itself unverified at serial-number level (round 17 §5) |
| Canonical bibliography presence (Glaser 1976) | Sharp/Grove/Gandhi 1974 not indexed; Justesen 1975 not indexed; voice/speech terms 0 | Flanagan/Neurophone not indexed; same 0 |
| Canonical engineering-textbook presence (Lin 1978) | Tier A cited (mechanism chapters, IEEE T-MTT 1974); Tier B retold via Justesen 1975 only (applications chapter) | Not present (out of scope for Lin's microwave-auditory-effect monograph) |
| Documented citation-chain falsification | Yes — Cowan substack reference #9 to non-existent FDA 77-8026 paper (round 16 §4) | Not yet — but tertiary-only provenance with no primary archival recovery (round 17 §5) |
| Reproducibility | Never reproduced (53 years) | Hackaday/Make Magazine DIY builds 2012; commodity reproducibility |
| Mechanism status | Tier A clicks via thermoacoustic (well-established); Tier B voice channel not established | Audio coupling demonstrated; Piezo1 mechanism (Patapoutian 2021 Nobel) provides modern molecular mechanism |

Two structural observations cut across both threads:

**Observation 1** — *the strong evidence is in opposite directions in the two threads*. Sharp/Grove's strong evidence is the **mechanism** (clicks via Eccosorb absorber, 1974 peer-reviewed); the weak evidence is the **suppression-and-Tier-B-claim** (citation-silent, narrative-source-only). Flanagan's strong evidence is the **patents themselves** (issued, technical-disclosure-complete, reproducible); the weak evidence is the **suppression-claim narrative** (tertiary-source-only, no primary archival recovery). Both threads have a real Tier-A core wrapped in a much-larger Tier-B narrative ecosystem whose primary-source citations dissolve under verification.

**Observation 2** — *both Tier B narrative ecosystems share a specific failure mode: tertiary sources cite primary documents that do not exist or cannot be verified at the serial-number level*. Round 16 §4 documented one instance (Cowan substack reference #9 to FDA 77-8026, paper-doesn't-exist). Round 17 §5 documents the parallel structural pattern in the Flanagan thread (the Rex/Scribd/LAYER47 chain references USPTO Application 756,124 secrecy order — application number verified, secrecy order unverifiable in public records). The two failure modes are different (false-paper-citation vs unverifiable-government-action-claim) but they share the property that **the Tier B narrative ecosystem operates on the assumption that primary sources exist, while making it operationally impossible to check that assumption**.

This is the cross-thread structural finding the user's *dig deeper* directive surfaces: **the Tier A / Tier B framework discipline is not just an analytic discipline imposed on this investigation's source record. It is an empirical pattern that recurs across multiple independent narrative ecosystems within the V2K / microwave-bioeffects information space.** When read with sufficient citation discipline, the Sharp/Grove voice-modulation thread and the Flanagan secrecy-order thread exhibit the **same structural failure** — strong Tier A core, large Tier B narrative ecosystem with primary-source-citation chains that don't survive verification.

## 7. Round 17 outstanding carries

1. **USPTO/NARA FOIA program for application 756,124** (round 17 §5): three-path verification of whether 35 USC 181 secrecy order existed. Carry to round 18+ as a formal FOIA-required-evidence track.
2. **Sharp/Grove/Gandhi 1974 IEEE T-MTT mechanism-paper indexing audit** in 1976-1980 microwave-bioeffects bibliographies beyond Glaser 1976: open question whether the paper was indexed in any other contemporaneous government bibliography (USAMERDC, DOD/NIH, EPA-OSW pre-Elder/Cahill 1984), or whether the indexing absence in Glaser 1976 reflects a broader pattern.
3. **Repo correction for `04_FLANAGAN_NEUROPHONE_AND_COUPLING.md` lines 26-27** (round 17 §2): the "double-differentiated zero-crossing modulated waveform" description should be replaced with the actual patent-text encoding pipeline (clipper → single-differentiator → spike-pulse → single-shot multivibrator → transition-edge pulses). Carry to round 18+ as a structural-correction PR alongside the round-17 addendum.
4. **Brodeur 1976 *New Yorker* "Microwaves I" (Dec 13, 1976) full text alternative retrieval** (carry from round 8 IA HTTP 401, restated in round 16 §6): NYPL microform / JSTOR / ProQuest historical periodicals. Pending.
5. **Systematic Tier B citation-chain verification across the full V2K narrative ecosystem** (round 16 §6): given the round 16 §4 + round 17 §5 cross-thread pattern, the verification is now a structural priority rather than an isolated case-by-case check.

## 8. Round 17 summary

The user's *dig deeper* directive on "the Groves and speech" — followed into the Flanagan branch via the "how does this tie to Patrick Flanagan and his patents" question — yields **five primary-source findings**:

1. **USPTO Application 756,124 is bibliographically verified as Flanagan US 3,647,970** (filed Aug 29, 1968; granted Mar 7, 1972; inventor Gillis P. Flanagan; pendency ~3.5 years). The application-number-↔-patent-number linkage that rounds 1-15 carried as tertiary-source-derivative is now USPTO-bibliographic-data-attested.
2. **Flanagan Patent 2 does NOT use "zero-crossing modulated waveform" language** — the actual patent text describes transition-edge pulse generation via clipper + single-differentiator + single-shot multivibrator, with "zero," "zero-crossing," and "double-differentiation" appearing zero times. The repo's existing Flanagan synthesis at `04_FLANAGAN_NEUROPHONE_AND_COUPLING.md` lines 26-27 imposes Justesen-1975-style paraphrase retroactively onto the patent. **Repo correction carry.**
3. **Lin 1978 textbook propagates the Tier B Sharp/Grove voice-modulation claim into engineering canon — but textually separates Tier A and Tier B**, citing Sharp/Grove/Gandhi 1974 IEEE T-MTT directly in mechanism chapters (pp. 103, 106, 133) while citing only Justesen 1975 in the applications chapter (pp. 174-176). Lin's textbook itself enacts the Tier A / Tier B distinction this investigation has imposed externally. The "9 of 10 digits" figure is a Justesen-narrative artifact absent from Lin's retelling.
4. **Glaser 1976 NMRI bibliography is silent on both Sharp/Grove and Flanagan threads** — zero entries for Sharp, Justesen 1975, Flanagan, Neurophone, voice/speech terms; the Sharp/Grove/Gandhi 1974 IEEE T-MTT 22:583-584 mechanism paper itself is unindexed despite three Gandhi-solo entries from the same 1973-1974 period. **The citation-silence pattern that rounds 11-15 documented across the 1981-2004 institutional record now extends back to 1976 and across the inter-service boundary onto the Navy NMRI side.**
5. **Application 756,124 secrecy-order claim is unverifiable at serial-number level via any public archive currently accessible** (FAS coverage post-1991 aggregate-only; NBER serial-number reconstruction WWII-only; NARA classifies secrecy-order records as CUI/PSEC; USPTO does not publish lists). The verification path requires sustained FOIA targeting USPTO Group 220, NARA, or DIA. The claim remains in the *"unverified pending archival records"* class established in `flanagan-claim-provenance.md`.

The cross-thread structural finding: **the Tier A / Tier B framework is an empirical pattern, not just an analytic discipline.** Both the Sharp/Grove voice-modulation thread and the Flanagan secrecy-order thread exhibit a strong Tier A core (mechanism paper / issued patents) wrapped in a Tier B narrative ecosystem whose primary-source citation chains do not survive verification — Cowan substack reference #9 to a non-existent FDA 77-8026 paper (round 16 §4) and the Rex/Scribd/LAYER47 chain to an unverifiable secrecy-order action (round 17 §5) are the same structural failure mode in different surface manifestations.

Round 1-16 sustained carries unchanged. Round 17 carries forward §7 outstanding paths (USPTO FOIA program, repo correction PR, broader 1976-1980 bibliographic indexing audit, Brodeur 1976 alternative retrieval, systematic Tier B citation-chain verification) into round 18+.
