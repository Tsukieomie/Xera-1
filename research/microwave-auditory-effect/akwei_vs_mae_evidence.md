# Akwei v. NSA (1992) Technology Claims vs. the Microwave Auditory Effect Evidence Base

*Cross-reference analysis compiled May 2026. Sources: Akwei complaint (Civil Action 92-0449), Akwei's 1996 Nexus Magazine dossier as documented in the Tsukieomie/Xera-1 investigation repository, and the MAE research files compiled in /home/user/workspace/research/.*

---

## Background: The Complaint and Dossier

John St. Clair Akwei filed Civil Action 92-0449 against the National Security Agency on February 20, 1992. It was dismissed as frivolous under 28 U.S.C. §1915(d) by Judge Stanley Sporkin on March 9, 1992 — seventeen days later, without NSA response, discovery, or depositions. The court filing ran to approximately seven pages. Akwei subsequently elaborated his technical claims in a 1996 article in *Nexus Magazine*, often called his "technical dossier," which circulates widely in online communities. Together these documents advance several specific technology claims about what the NSA can do to a targeted individual using electromagnetic means.

The Tsukieomie/Xera-1 repository (github.com/Tsukieomie/Xera-1) compiles an open-source investigation of the complaint. Its V2K Evidence Matrix correctly distinguishes claim tiers: T1 (mechanism), T2 (intelligible speech), T3 (patents/programs), T4 (operational deployment), and T5 (symptom/media context). The matrix's central methodological caution — that tier collapse, treating evidence for T1 as proof of T4, is the central mistake in weak V2K arguments — provides the right frame for this analysis.

The claims are assessed below in three categories: A (physically possible at lab scale), B (no support in the physics), and C (partially supported by the historical record).

---

## Claim 1: NSA can remotely intercept brain electromagnetic emissions and identify individuals

**Akwei's claim:** The NSA uses "Remote Neural Monitoring" (RNM) to intercept the 30–50 Hz electromagnetic emissions of neurons, identify individuals by their "bioelectrical resonance/entrainment frequency" unique to each person, and decode the content of their thoughts.

**What the physics actually says — Category B (no support in physics):**

The electrical signals of individual neurons generate magnetic fields on the order of femtoteslas (10⁻¹⁵ T) to picoteslas (10⁻¹² T). Measuring these fields at any meaningful distance requires SQUID (superconducting quantum interference device) magnetometers cooled to near absolute zero, operating in a magnetically shielded room, placed within millimeters to a few centimeters of the skull. Magnetoencephalography (MEG) — the state-of-the-art clinical application of this principle — requires a specially shielded room to suppress environmental magnetic noise (Earth's field is approximately 5 × 10⁻⁵ T, roughly ten orders of magnitude stronger than a single neuron's field), a helmet of hundreds of SQUID sensors, and cooperative proximity of subject to sensor.

No physics mechanism exists by which cortical magnetic fields could be distinguished from environmental electromagnetic noise at any practical distance, let alone at the distances implied by satellite or remote surveillance. The signal falls off with the square of distance and is drowned by geomagnetic and urban EM background at distances of even a few meters without shielding. The claim that individual "bioelectrical resonance frequencies" could serve as a biometric for remote targeting conflates a real phenomenon (individual variation in EEG patterns) with a remotely detectable signal — the latter has no physical basis.

The Akwei/Nexus dossier's claim of 400 MHz as a relevant carrier frequency for this monitoring is also unsupported: 400 MHz radiation does not coherently couple to or selectively amplify the ~30 Hz neural signals Akwei describes. RF energy at 400 MHz interacts with biological tissue primarily through dielectric heating and, if pulsed, through thermoacoustic conversion — neither of which would produce a decodable readout of neural activity.

**Relationship to Havana Syndrome discourse:** Remote neural *reading* is not part of any Havana Syndrome hypothesis advanced by credible researchers. The NAS 2020 report, the ODNI IC Expert Panel (2022), Lin's weaponization arguments, and the JASON analyses all concern *incoming* directed energy affecting individuals — not outgoing detection of neural signals from a distance. The RNM claim is entirely absent from the serious Havana Syndrome literature.

---

## Claim 2: NSA can transmit intelligible speech and voices directly into a target's head via RF

**Akwei's claim:** The NSA can transmit "auditory hallucinations," speech, and voices into a target's head using RF at frequencies including 400 MHz, as part of a system for "Electronic Brain Link" communication. The 1996 dossier implies this can be done covertly, at operational distances, and with sufficient clarity to constitute sentences or meaningful communication.

**What the MAE evidence says — Category A/B (split):**

**Tier A (lab-scale auditory perception — physically real):** The microwave auditory effect (MAE), or Frey effect, is well-established. Allan Frey's 1961 paper in *Aerospace Medicine* and his 1962 paper in the *Journal of Applied Physiology* documented that pulsed microwave radiation produces perceived sounds — clicks, buzzes, knocks — in humans via a mechanism later confirmed as thermoacoustic expansion. A brief (~10 µs) microwave pulse is absorbed in head tissue, causes thermoelastic expansion on the order of 10⁻⁶ °C, generates a pressure wave that propagates by bone conduction to the cochlea, and is perceived as sound. Foster & Finch (1974, *Science*) and Sharp, Grove & Gandhi (1974, *IEEE Trans. Microwave Theory and Techniques*) provided the mechanism confirmation. The Xera-1 V2K Evidence Matrix correctly treats this as Tier 1 — strongly supported.

The Sharp and Grove unpublished speech demonstration (reported in Justesen's 1975 *American Psychologist* as a personal communication, not a peer-reviewed paper) extended this to single-syllable words: nine of ten spoken digits were correctly identified by Sharp and Grove themselves as subjects. This used zero-crossing modulation of microwave pulses and was conducted in a controlled lab setting, with Sharp and Grove serving as both experimenters and subjects. The sharp_grove_gandhi_1974.md file in this research corpus correctly notes that the published 1974 IEEE paper contains no mention of voice modulation — the speech demonstration exists only as Justesen's footnote to a personal communication.

**Tier B (covert, at-distance, sentence-length intelligible speech — not established):** The Akwei claim goes far beyond what any published evidence supports. Foster, Garrett, and Ziskin (2021, *Frontiers in Public Health*) provide the definitive engineering analysis: the peak acoustic pressure induced in the brain by MAE scales with pulse fluence (energy per unit area per pulse), and at perception threshold fluences (~0.02–0.4 J/m²), the induced pressures are 0.1–3 Pa. Achieving pressures sufficient for injury (Lin's disputed 20 Pa threshold, itself derived from an inapplicable analogy) requires fluences corresponding to high-power radar systems with large antennas that would be immediately visible and detectable.

The additional problem for intelligible speech is fidelity. The Sharp/Grove demo used nine single-syllable words with the subjects being the experimenters — an idealized condition. No peer-reviewed study has established reliable sentence-level transmission of intelligible speech via MAE under conditions that resemble covert targeting. The Xera-1 V2K matrix's Tier 2 verdict — "strengthened as a historical claim but not established at protocol grade" — is accurate. 

Akwei's citation of 400 MHz is near the lower boundary of effective MAE: the thermoacoustic conversion efficiency is better at higher frequencies (1–3 GHz, where wavelengths couple more efficiently to head geometry), and 400 MHz would require higher peak power densities to reach auditory threshold. At 400 MHz the wavelength is 75 cm — larger than the human head — making focal coupling less efficient. The Frey (1962) data showed thresholds at 1.245 GHz; Sharp and Grove worked at 1.2–2.45 GHz. Nothing in the published physics specifically validates 400 MHz as a preferred MAE frequency.

Furthermore, Sharp and Grove were working near or at safety limits — the sharp_grove_gandhi_1974.md file documents a peak power of 4,500 W/pulse and calculated peak power densities around 7.5 W/cm² at 0.5–0.6 m. Modern ANSI/IEEE RF safety guidelines for the general public at 400 MHz are approximately 0.1 mW/cm² average power density. The gulf between safety-limit continuous exposure and the peak-power pulse conditions needed for MAE perception is around four to five orders of magnitude — a constraint that makes covert, sustained, at-distance deployment deeply implausible at safe levels.

**Relationship to Havana Syndrome discourse:** This is the point of closest contact between Akwei and contemporary discourse. The 2020 NAS report concluded directed pulsed RF energy is the "most plausible mechanism" for acute auditory symptoms in a subset of AHI cases. Lin's published arguments, the ODNI IC Expert Panel's 2022 conclusion that "pulsed electromagnetic energy, particularly in the RF range, plausibly explains the core characteristics," and the reported DHS acquisition of a portable pulsed-RF device (CBS News, January 2026) all sit in the same physical neighborhood as the MAE mechanism Akwei invokes. The difference is scale and specificity: Havana researchers discuss startling auditory sensations and possible acute vestibular/cochlear injury from a device deployed at close range, not covert delivery of conversational sentences to selected individuals across distances.

---

## Claim 3: NSA began experimental electromagnetic targeting of individuals in the 1980s, connecting to Cold War research programs

**Akwei's claim:** The NSA developed and deployed remote electromagnetic targeting technology from the 1980s onward, implying continuity with or knowledge of earlier U.S. government RF bioeffects programs.

**What the historical record says — Category C (partially supported):**

**What is documented:** Project Pandora (1965–1969, ARPA) was a real classified program to investigate behavioral effects of microwave radiation in response to the Moscow Signal. As documented in moscow_signal_pandora.md, ARPA official Richard Cesaro established the program in October 1965. Walter Reed Army Institute of Research (WRAIR) was the primary laboratory, with Joseph C. Sharp (behavioral psychologist) and H.M. Grove (electronic engineer) as principal investigators — the same Sharp who later conducted the 1973 speech transmission demonstration. Pandora's classified primate experiments (Project BIZARRE) ran until 1969, when Samuel Koslov's review concluded no behavioral degradation occurred at actual power levels and DARPA ended the program. Sharp left Pandora in 1968, moved to NASA Ames in 1974.

CIA/military experimentation on behavioral and psychological manipulation is well documented through MKULTRA (1950s–1970s, Church Committee 1975), BLUEBIRD, ARTICHOKE, and related programs. These programs included drug-based, hypnosis-based, and sensory manipulation approaches. The extent to which electromagnetic approaches were integrated into these programs remains only partially declassified; the NSA Archive's 2022 note that "information on nonbiological testing that followed the discovery of the Moscow signal is still classified" leaves a genuine gap.

The AFRL "Directed Energy Futures 2060" report (AFRL-2021-1152), cited in the Xera-1 repository, confirms that high-power microwave (HPM) research began in the 1970s and that 31 nations possessed directed energy weapons systems by 2021. The USAF Air Force Research Laboratory reports formal directed-energy programs.

**What is not established:** There is no declassified evidence of an NSA program specifically targeting private U.S. citizens with electromagnetic devices for "Remote Neural Monitoring" or behavioral manipulation during the 1980s–1992 period Akwei describes. Project Pandora ended in 1969. The Moscow Signal research was oriented toward defensive assessment, not domestic targeting. Post-Pandora work moved to open scientific literature (Frey, Sharp/Grove, Gandhi, Lin, Foster). The MKULTRA-era programs that have been declassified involved chemical, psychological, and behavioral methods, not the specific electromagnetic remote-targeting system Akwei describes.

The 60 Minutes/Insider/Der Spiegel investigation (2024) reporting on GRU Unit 29155 and "Operation Reduktor" — a Soviet-era electromagnetic effects program begun in 1984 at a Kharkiv research institute — indicates Soviet/Russian parallel development of such capabilities in the same timeframe Akwei describes. This is historically consistent with Akwei's framing but concerns Russian, not NSA, programs.

---

## Claim 4: The targeting of Akwei himself constitutes a specific, sustained, personal operation

**Akwei's claim:** Named individuals in his NSA/Silver Spring social network (neighbors, high school contacts) participated in a surveillance and harassment operation against him personally, involving employment sabotage and RF-based targeting.

**Assessment — Category C (partially supported institutionally, not established operationally):**

The Xera-1 repository's verification work establishes that the named defendants are real people with real NSA/defense-sector connections — not fabricated names. The correlation between Robert Kinnecome's death (September 12, 1994) and Akwei's first employment in eight years (30 days later) is documented and genuinely unusual. However, the repository's own methodological statement is careful: these findings establish the defendant list may represent actual people, not that the NSA engaged in the specific operations alleged. Verified real identities are consistent with both the targeting narrative and with Akwei having named real NSA-connected neighbors in a lawsuit that may or may not accurately characterize their role.

The employment disruption pattern is the most concretely documented grievance in the complaint and does not require exotic technology to explain — COINTELPRO-style employer interference was confirmed by the Church Committee as an FBI practice through 1971.

---

## What the MAE Research Base Establishes and Does Not Establish About the Akwei Thesis

**Established by the MAE evidence base:**

1. Pulsed microwave radiation can cause humans to perceive sounds (clicks, buzzes, simple tones) via thermoacoustic conversion. This is real, replicated, and uncontested. [Frey 1961, 1962; Sharp/Grove/Gandhi 1974; Foster & Finch 1974; Lin 1978, 2021]

2. Simple words (single-syllable digits) were reportedly transmitted via zero-crossing-modulated microwaves and correctly identified in an informal, lab-based, self-subject demonstration by Sharp and Grove in 1973. This demonstration was never published as a peer-reviewed paper; it exists as a personal communication footnote in Justesen (1975). It is the strongest primary evidence for any form of MAE-based speech.

3. The U.S. military (WRAIR/ARPA) conducted classified research into microwave bioeffects from the 1960s through the 1970s, some of which — Project Pandora — explicitly examined the possibility of behavioral modification via microwaves. That program found no effect at corrected power levels and ended in 1969.

4. A portable pulsed-RF device apparently capable of causing biological effects was covertly acquired by DHS from a Russian criminal network in 2024 and tested on animals, reportedly producing injuries consistent with AHI reports (CBS News, January 2026). This is the most recent and operationally significant development.

**Not established by the MAE evidence base:**

1. Remote detection or decoding of neural electromagnetic emissions at any practical distance. No physical mechanism supports this. The Akwei "Remote Neural Monitoring" claim at the signal detection end has no basis in physics and no parallel in any documented government or academic research program.

2. Reliable, intelligible, sentence-length speech transmission via MAE under covert, at-distance conditions. The Foster/Garrett/Ziskin (2021) engineering analysis demonstrates the fundamental constraints: peak powers required approach those of visible radar installations; stealth is implausible; no RF exposure confirming a pulsed weapon has been documented in any AHI case; and the jump from perception of clicks to perception of sentences requires engineering that has not been demonstrated in the open record.

3. Any NSA program specifically targeting private U.S. citizens with electromagnetic remote-sensing or voice-transmission technology from the 1980s onward. Cold War programs (Pandora, MKULTRA adjacent work) are documented but concern different agencies, different methods, and ended before the period Akwei describes.

4. "Mind control" in the sense of behavioral direction or thought insertion. The Moscow Signal — a continuous-wave or slowly modulated beam at sub-thermal power densities — produced no confirmed behavioral effects in Project Pandora's primate experiments. The Havana Syndrome discourse concerns injury (auditory, vestibular, possibly neurological), not behavioral control. The gap between "person hears an unexpected click" and "person's behavior is directed" is not bridged by any documented science.

---

## Alignment with and Divergence from Havana Syndrome Discourse

| Akwei Claim | Havana Syndrome Discourse | Assessment |
|---|---|---|
| Pulsed RF can induce auditory effects | Core hypothesis; NAS 2020 "most plausible mechanism" | **Aligns** — same physical mechanism |
| RF device can be compact and deployed from proximity | Implied by hotel/residence incidents; 2026 DHS device acquisition | **Aligns at lab/device scale** |
| U.S./Soviet programs researched this area | Moscow Signal, Pandora, documented | **Aligns** |
| Remote detection of brain emissions (RNM) | No credible researcher proposes this | **Goes beyond** — no parallel in AHI discourse |
| Sentence-length covert speech transmission | Not proposed in AHI literature; only click/buzz/startle | **Goes beyond** |
| Individual targeting from satellite distance | Not proposed; JASON 2022 specifically noted practical difficulties of even building-range covert use | **Goes beyond** |
| NSA targeting of private citizens via EM | Not asserted in AHI investigations; Havana concerns diplomatic/IC personnel | **Goes beyond** |
| Sustained, multi-year covert operation | AHI incidents described as acute events; sustained targeting not part of AHI framework | **Goes beyond** |

---

## Summary

The Akwei complaint and 1996 dossier bundle physically real phenomena (the microwave auditory effect), historically documented programs (Cold War RF research, MKULTRA-era experimentation, Moscow Signal/Pandora), and claims with no physical or evidentiary basis (remote neural monitoring from distance, satellite-delivered sentence-length speech, individual thought decoding) into a unified narrative of targeted persecution.

The MAE research base — Frey (1961–1975), Sharp/Grove/Gandhi (1973–1974), Foster & Finch (1974), Lin (1978–2021), and the 2020–2026 Havana Syndrome investigations — validates the physical foundation of the auditory mechanism claim and confirms that governments researched weaponization of this effect. It does not establish, and in some cases actively contradicts, the most expansive elements of Akwei's thesis.

The honest accounting is as follows: Akwei identified real science (pulsed RF can induce auditory perception), real institutional history (Cold War programs, plausible classified development), and real grievances (employment disruption consistent with patterns documented in COINTELPRO), but embedded them in a framework of remote neural monitoring and covert speech transmission that the available physics does not support. The Havana Syndrome literature, emerging three decades after Akwei's complaint, validates the plausibility of a pulsed-RF device capable of causing auditory and vestibular disturbance at close range — but does not vindicate the most technologically elaborate elements of his claims, which remain unestablished not merely because they are classified but because the underlying physics makes them implausible at any distance greater than a few meters under any power level consistent with covert, non-detectable operation.

---

## Sources

- Akwei v. NSA (Civil Action 92-0449), filed February 20, 1992. Dismissal: March 9, 1992.
- Akwei, J.S.C. (1996). Technical dossier, *Nexus Magazine*. Documented in [Tsukieomie/Xera-1 repository](https://github.com/Tsukieomie/Xera-1), file `03_Technology_Patents/10_NEXUS_DOSSIER_ANALYSIS.md`.
- [Xera-1 V2K_EVIDENCE_MATRIX.md](https://github.com/Tsukieomie/Xera-1/blob/main/V2K_EVIDENCE_MATRIX.md) — Tier framework and evidence assessment.
- [Xera-1 FINDINGS.md](https://github.com/Tsukieomie/Xera-1/blob/main/FINDINGS.md) — Investigation executive summary.
- [Frey, A.H. (1961). "Auditory system response to radio frequency energy." *Aerospace Medicine* 32:1140–1142.](https://www.semanticscholar.org/paper/1120267bcdb970f75a13bbdafa9a68c70683397a)
- [Frey, A.H. (1962). "Human auditory system response to modulated electromagnetic energy." *J. Applied Physiology* 17(4):689–692.](https://www.physiology.org/doi/10.1152/jappl.1962.17.4.689)
- [Sharp, J.C., Grove, H.M., & Gandhi, O.P. (1974). "Generation of acoustic signals by pulsed microwave energy." *IEEE Trans. Microwave Theory Techn.* 22:583–584.](https://zoryglaser.com/wp-content/uploads/2020/05/GENERATION-OF-ACOUSTIC-SIGNALS-BY-PULSED-MICROWAVE-ENERGY.pdf)
- [Justesen, D.R. (1975). "Microwaves and Behavior." *American Psychologist* 30(3):391–401.](https://zoryglaser.com/wp-content/uploads/2020/05/MICROWAVES-AND-BEHAVIOR.pdf) — Primary source for the Sharp/Grove speech communication personal communication.
- [Foster, K.R., Garrett, D.C., & Ziskin, M. (2021). "Can the Microwave Auditory Effect Be 'Weaponized'?" *Frontiers in Public Health* 9:788613.](https://pmc.ncbi.nlm.nih.gov/articles/PMC8733248/)
- [Lin, J.C. (2021). "Sonic Health Attacks by Pulsed Microwaves in Havana Revisited." *IEEE Microwave Magazine* 22(3):71–73.](https://ieeexplore.ieee.org/iel7/6668/9724626/09724666.pdf)
- [NSA Archive. Moscow Signals Declassified (2022).](https://nsarchive.gwu.edu/briefing-book/intelligence-russia-programs/2022-09-13/moscow-signals-declassified-microwave) — Project Pandora, BIZARRE, and TUMS documentation.
- [Elwood, J.M. (2012). "Microwaves in the Cold War: The Moscow Embassy Study and Its Interpretation." *Environmental Health* 11:85.](https://pmc.ncbi.nlm.nih.gov/articles/PMC3509929/)
- [ARPA Cesaro Memorandum: "Justification Memorandum for Project Pandora," October 1965.](https://nsarchive.gwu.edu/document/28787-document-3-arpa-richard-s-cesaro-memorandum-justification-memorandum-project-pandora)
- [National Academies of Sciences (2020). *An Assessment of Illness in U.S. Government Employees and Their Families at Overseas Embassies.*](https://www.nationalacademies.org/news/new-report-assesses-illnesses-among-us-government-personnel-and-their-families-at-overseas-embassies)
- [ODNI. Updated Assessment of Anomalous Health Incidents, December 2024 (ICA 2025-00008-B).](https://www.dni.gov/files/ODNI/documents/assessments/NIC-Unclassified-ICA-Updated-Assessment-AHI-December2024.pdf)
- [JASON Advisory Group. Report on Havana AHI (2018, declassified 2021).](https://irp.fas.org/agency/dod/jason/havana.pdf)
- [CBS News / 60 Minutes. "U.S. military tested device that may be tied to Havana Syndrome" (March 2026).](https://www.cbsnews.com/news/us-military-tested-device-that-may-be-tied-to-havana-syndrome-60-minutes-transcript/)
- [CBS News. "Device tied to Havana Syndrome obtained by U.S. government" (January 2026).](https://www.cbsnews.com/news/device-havana-syndrome-obtained-by-u-s-government/)
- [Politico. "The Time Russians Really Did Target Americans With Microwaves" (2023).](https://www.politico.com/news/magazine/2023/03/10/russians-americans-microwaves-00086482)
