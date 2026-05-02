# Lin vs. Foster: The Microwave Auditory Effect and Havana Syndrome

*A comparative analysis of the published positions of James C. Lin and Kenneth R. Foster*

---

## 1. Professional Backgrounds

**James C. Lin** is Professor Emeritus of Electrical and Computer Engineering and Bioengineering at the University of Illinois at Chicago (UIC), and one of the world's foremost authorities on the microwave auditory effect (MAE). He helped develop the thermoelastic theory of MAE in the 1970s, publishing seminal experimental and dosimetric work alongside Arthur Guy and others at the University of Washington. His 1978 monograph *Microwave Auditory Effects and Applications* remains a foundational text, and his 2021 Springer textbook *Auditory Effects of Microwave Radiation* is the most comprehensive single-author treatment of the subject. He has served as Editor-in-Chief of *Bioelectromagnetics*, as a member of the International Commission on Nonionizing Radiation Protection (ICNIRP), and as Chair of NCRP's standing committee on RF biological effects. He has personally experienced the MAE firsthand in laboratory settings. He received the [2025 IEEE Microwave Career Award](https://ece.uic.edu/news-stories/james-lin-receives-career-award-from-ieee-microwave-theory-and-techniques-society/). His authority on MAE specifically is essentially uncontested.

**Kenneth R. Foster** is Professor of Bioengineering at the University of Pennsylvania, where he has worked since 1976 following doctoral work in physics (Indiana University, 1971) and biophysics research with the U.S. Navy. Crucially, he co-authored with Edward Finch the [landmark 1974 paper in *Science*](https://scholar.google.com/citations?user=yqJUeJQAAAAJ&hl=en) confirming that the MAE arises from thermoelastic expansion — the same mechanism Lin later characterized in detail. Foster is therefore not an outsider to MAE; he helped confirm its physical basis. His subsequent career has focused on RF bioeffects risk assessment, exposure standards (IEEE C95.1, ICNIRP), and the boundary between physics and public health claims. He has received industry funding for unrelated RF safety work, which critics have noted, but this does not undermine his thermoacoustic physics.

Both researchers thus share deep, first-hand knowledge of the MAE's mechanism. Their disagreement is not about whether the effect is real, but about what it can and cannot accomplish as a weapon.

---

## 2. Lin's Argument

Lin's public case appeared in the IEEE Microwave Magazine "Health Matters" column, specifically ["Sonic Health Attacks by Pulsed Microwaves in Havana Revisited"](https://ieeexplore.ieee.org/iel7/6668/9724626/09724666.pdf) (vol. 22, no. 3, 2021, pp. 71–73), supplemented by his 2021 Springer textbook and earlier IEEE columns beginning around 2018. He also gave evidence to the NAS committee.

Lin's argument has several components:

**Mechanism.** The MAE is well-established physics. Pulsed microwave radiation is absorbed in tissue, producing rapid thermoacoustic expansion — temperature rises as small as 10⁻⁶ °C can generate acoustic pressure waves. These propagate through the skull, couple to the cochlea via bone conduction, and are perceived as sound. At the right pulse repetition frequency (PRF), the skull resonance (~7–10 kHz for adults) can be excited. The phenomenon requires pulsed, not continuous-wave, radiation.

**Specific mechanism for Havana.** Lin argues that the Havana diplomats' reports — sudden directional sound, pressure in the head, pain, the sound disappearing when they moved — are signature features of MAE. Covering the ears made no difference, consistent with bone conduction. He proposed that pulsed microwaves in the 1–3 GHz range, delivered at appropriate pulse widths (1–100 µs), could produce these effects at the relevant power densities.

**Tissue injury threshold.** Lin proposed a "tissue-injuring level" of 20 Pa of intracranial pressure, derived from the conventionally accepted 120 dB re 20 µPa threshold for noise-induced hearing loss (hair cell damage in the cochlea). He argued that high-peak-power pulses could achieve pressures above this level, making injury — not just perception — plausible. As summarized by [Foster et al. (2021)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8733248/), Lin cited Dagro et al.'s simulation showing that a 5 µs pulse at 1 GHz with 10 MW/m² peak power density yields ~10 kPa acoustic pressure in the brain.

**Historical precedent.** Lin draws on the Moscow Signal — the Soviet microwave targeting of the U.S. Embassy from the 1950s to 1976 — as a precedent for adversarial RF exposure of diplomats, per [BBC reporting](https://www.bbc.com/news/world-58396698) of his views. He also notes that both the U.S. and Soviet Union conducted extensive classified research on weaponizing RF-induced auditory and neurological effects through the 1970s.

**Assumption.** Lin does not claim that a specific device has been identified. His argument is that MAE provides a physically plausible and historically grounded explanation for the acute auditory and vestibular phase of the illness, and that dismissing it requires explaining what else could produce such specific, directional, transient auditory effects.

---

## 3. Foster's Counter-Argument

Foster, Garrett, and Ziskin published ["Can the Microwave Auditory Effect Be 'Weaponized'?"](https://pmc.ncbi.nlm.nih.gov/articles/PMC8733248/) in *Frontiers in Public Health* in December 2021, with Foster following up with a [2023 commentary](https://pmc.ncbi.nlm.nih.gov/articles/PMC9869364/) extending the analysis to infrared lasers. Their argument is physics-first and engineering-realistic:

**Effect size is modest at any feasible fluence.** Using the thermoacoustic model (which they derive from first principles), Foster et al. calculate that the peak acoustic pressure induced in the brain is determined by pulse fluence (energy per unit area per pulse), not intensity alone. Their Table 1 shows that at 1–10 GHz, a fluence of 1 J/m² produces on the order of 5–250 Pa at the tissue surface — which sounds high but represents a brief, highly localized transient near the surface. Perceptual thresholds for the MAE correspond to fluences of ~0.02–0.4 J/m², producing acoustic pressures of only 0.1–3 Pa at low GHz frequencies.

**The 20 Pa injury threshold is miscalibrated.** Foster challenges Lin's proposed injury level directly. He notes that Lin derived the 20 Pa figure by analogy to noise-induced hearing loss, but that TA-induced pressure waves are generated *inside* tissues (not incident on the head from outside), making the comparison to conventional sound exposure hazard thresholds scientifically suspect. The thresholds for ultrasonic damage to brain tissue are far higher — clinically used neuromodulation ultrasound involves peak pressures above 100 kPa — more than three orders of magnitude above Lin's injury threshold.

**Equipment size and detectability.** The key engineering constraint Foster raises is stealth. He analyzes the AN/FPS-67B radar (1.3 GHz, 1.9 MW peak power, 37×15 m antenna), which produced "obvious and distracting" MAE at 45 m. The antenna would have been immediately obvious, and the electromagnetic interference would have disrupted nearby electronics. This is not a covert device. Millimeter-wave sources are potentially smaller, but their energy is absorbed very superficially (sub-mm penetration depth), strongly attenuated by the skull, making deep brain effects implausible. As Foster notes: "Whether mm-wave transmitters exist that are capable of producing the extreme pulses considered here is not publicly known."

**No detected exposure.** Foster notes at the outset of his paper that "the failure to detect microwave exposure to the affected individuals lends no support to this hypothesis." No RF measurements from Havana or any other AHI site have been made public that confirm a microwave source.

**There are easier ways.** Foster's concluding sentence is blunt: "There are easier ways to harass or harm an adversary and using directed energy weapons against people might be ill-advised for a variety of other reasons as well."

**JASON report alignment.** Foster's 2023 commentary cites the JASON expert panel (JSR-21-01, commissioned by the U.S. State Department), which examined data from the embassy incidents and "could find no evidence for the use of microwaves" — and noted that "practical difficulties of beaming high peak power microwaves at subjects in a 'stealthy' manner seem daunting in any event."

---

## 4. Where They Actually Agree

The agreement between Lin and Foster is substantial and often understated in media coverage. Both accept:

- The MAE/Frey effect is a real, well-established biophysical phenomenon arising from thermoacoustic conversion of pulsed RF energy.
- The effect requires pulsed radiation, not continuous-wave; the underlying thermoelastic mechanism is well-understood and quantifiable.
- Perception thresholds are low (~0.02–0.4 J/m² pulse fluence), meaning auditory sensations can be induced at power levels well below those that cause heating.
- Existing high-power microwave systems could, in principle, produce pulse fluences sufficient to induce auditory sensations — the effect is not impossible to achieve technically.
- The chronic neurological symptoms reported by AHI personnel (cognitive deficits, prolonged vestibular disruption, memory problems) are not straightforwardly explained by the MAE mechanism regardless of who is right about the acute phase.

This shared foundation matters: Foster is not arguing that the Havana personnel were not affected, or that pulsed microwaves cannot produce auditory sensations. The disagreement is entirely about whether a weaponized version could be deployed covertly at the parameters needed to cause the reported injuries.

---

## 5. Where They Sharply Diverge

The core quantitative dispute concerns whether MAE can be scaled from a laboratory curiosity to a covert weapon that produces not just perception but *injury* at operationally relevant distances and geometries. 

**On injury thresholds:** Lin's 20 Pa reference level is contested by Foster as drawn from an inapplicable analogy (air-conducted sound vs. intracranially generated pressure waves). Foster argues that adverse audiovestibular effects may occur at lower pressures than brain tissue injury, but that neither threshold is established empirically for TA-induced waves.

**On intelligibility:** Lin's 2021 textbook and earlier columns discuss experiments by Sharp and Grove (1974) in which simple words were transmitted via microwave-induced MAE. Foster does not contest the basic experimental finding but argues that using this to infer a precision weapon capable of causing specified neurological injuries requires multiple additional engineering steps, none of which have been demonstrated.

**On the stealth problem:** Lin points to classified high-power microwave research programs that might have produced compact sources. Foster acknowledges this is unknown but notes it is pure speculation and that no device was ever found. He argues the physics of beam propagation, atmospheric attenuation, and skull shielding make a compact, covert, building-penetrating pulsed microwave weapon implausible for causing the documented injury pattern.

**On the symptom match:** Lin argues the acute auditory/vestibular presentation is distinctive enough that MAE is the natural explanation. Foster does not offer a competing mechanism for the acute phase, but notes that the overall clinical picture (prolonged cognitive impairment, heterogeneous presentation across hundreds of global cases) does not fit any known physics of pulsed RF exposure.

---

## 6. The 2020 NAS Report: Cautious Lean Toward Lin

The [National Academies 2020 report](https://www.ncbi.nlm.nih.gov/books/NBK566408/) (released December 5, 2020, chaired by David Relman of Stanford) is the closest thing to an authoritative scientific verdict pre-dating the Lin-Foster exchange. Its findings were:

- Directed, pulsed RF energy is "the most plausible" mechanism for the acute symptoms reported by DOS personnel.
- Symptoms consistent with RF effects include: perceived clicking within the head with ears covered; pressure sensations with spatial directionality; hearing loss; tinnitus; impaired gait; and the absence of heating sensation or disruption of nearby electronics.
- The committee "could not assess" causes definitively and stated that "each possible cause remains speculative."
- James Lin gave evidence to the committee; the report's conclusions were broadly aligned with his position on the acute phase.

Crucially, the NAS committee did not address whether such a weapon could realistically exist — it assessed consistency of symptoms with known RF effects, not whether a weapon capable of producing those effects was operationally feasible. That is precisely the gap Foster's paper fills. The NAS report sides partly with Lin on symptom-mechanism consistency, but does not engage the engineering feasibility question that is central to Foster's critique.

A classified JASON panel report (2021, JSR-21-01) commissioned by the State Department — cited in Foster's 2023 commentary and referenced in [Wikipedia's Havana syndrome article](https://en.wikipedia.org/wiki/Havana_syndrome) — went further, finding that certain RF frequencies (below 500 MHz and above 30 GHz) could be ruled out, and that the remaining 500 MHz–30 GHz range was a "highly unlikely" cause, though it could not be conclusively excluded. The JASON panel found no evidence of microwave use in the specific incidents.

---

## 7. The 2023 IC Assessment: Narrowing but Not Closing

The [March 2023 ODNI assessment](https://www.hstoday.us/subject-matter-areas/intelligence/intelligence-community-agencies-find-it-unlikely-that-foreign-adversary-caused-havana-syndrome-cases/) is the most comprehensive official verdict. Its key findings:

- Five of seven IC agencies judged it "very unlikely" that a foreign adversary caused the AHIs, at moderate-to-high confidence.
- Two agencies judged it "unlikely" but at low confidence, specifically because they assessed RF energy as a plausible cause — in part based on the NAS findings and lab research.
- "No credible evidence that a foreign adversary has a weapon or collection device that is causing AHIs."
- Many AHI cases were attributed to "preexisting conditions, conventional illnesses, and environmental factors."
- Medical analysis had "evolved in ways that point away from adversary involvement"; an NIH longitudinal study did not find "a consistent set of physical injuries, including neurologic injuries such as TBI."

Significantly, a December 2024 [House Intelligence Committee report](https://www.cbsnews.com/news/havana-syndrome-intelligence-report-questioned-house-committee-60-minutes/) challenged the ODNI assessment's "analytic integrity," concluding that foreign adversary involvement appeared "increasingly likely" for a subset of cases — and a January 2025 [updated ODNI assessment](https://sashaingber.substack.com/p/a-war-of-words-between-the-intel) acknowledged that two agencies had shifted their judgments, with one assessing it "likely" that a foreign actor has an RF capability that can cause health effects.

The 2023 IC assessment does not close the case on the physics. It rules out foreign adversary responsibility at the operational level, but does not resolve whether the MAE mechanism could in principle produce the acute symptoms — which is the scientific question Lin and Foster are debating. The IC's conclusion that symptoms were probably due to preexisting conditions and environmental factors is a population-level epidemiological judgment, not a refutation of the thermoacoustic physics.

---

## 8. Assessment: Who Has the Stronger Case?

On the narrow question of whether pulsed microwaves *could* produce auditory sensations in the Havana diplomats, Lin has the stronger case — and Foster effectively concedes it. The thermoacoustic physics is uncontested, perception thresholds are achievable with known technology, and the symptom pattern in the acute phase is genuinely consistent with MAE. The NAS committee, which included engineers as well as clinicians, agreed.

On the broader question of whether MAE can explain a weaponized attack capable of causing the reported neurological injuries in a covert manner at operational distances, Foster has the stronger case. His specific objections — miscalibrated injury thresholds, implausible engineering for stealth operation, absence of any detected device or RF exposure, and the gap between a perceptual curiosity and a brain-injuring weapon — are grounded in established thermoacoustic physics and remain largely unanswered by Lin's published responses. Lin's injury threshold (20 Pa derived by analogy from conventional hearing damage) has not been validated for thermoacoustically generated intracranial pressure waves, and the gap between the 100 kPa pressures required for ultrasonic brain injury and Lin's proposed 20 Pa threshold spans three orders of magnitude — a range Foster demonstrates is not bridged by citing Dagro et al.'s simulations, which involved extreme (and non-covert) power densities.

The honest summary: the MAE is real and consistent with the *acute auditory* phase of the early Havana cases. The leap from "pulsed microwaves can make diplomats hear clicks" to "pulsed microwaves caused persistent traumatic brain-like injury covertly delivered from a hotel room" requires engineering assumptions that remain undocumented and physics arguments that remain unconvincing at the power levels and distances involved. Foster does not prove the weapon is impossible — classified capabilities are genuinely unknown — but he demonstrates that the publicly available physics does not support it.

Lin's position is scientifically respectable and historically grounded but requires filling several large empirical gaps (a covert device, demonstrated injury thresholds for TA-induced waves, a plausible delivery scenario) before it becomes more than a plausible hypothesis. Foster's skepticism does not explain the acute-phase symptoms either, but he is not obligated to — the burden of proof lies with the weapon hypothesis. As of the publicly available record, Foster's physics is more rigorous, his engineering constraints are more concrete, and his caution better reflects the available evidence.

---

## Sources

- Lin, J.C. "Sonic Health Attacks by Pulsed Microwaves in Havana Revisited." *IEEE Microwave Magazine* 22, no. 3 (2021): 71–73. https://ieeexplore.ieee.org/iel7/6668/9724626/09724666.pdf
- Lin, J.C. *Auditory Effects of Microwave Radiation*. Cham: Springer Nature Switzerland, 2021. https://www.emfsa.co.za/news/book-auditory-effects-of-microwave-radiation/
- Foster, K.R., D.C. Garrett, and M.C. Ziskin. "Can the Microwave Auditory Effect Be 'Weaponized'?" *Frontiers in Public Health* 9 (2021): 788613. https://pmc.ncbi.nlm.nih.gov/articles/PMC8733248/
- Foster, K.R. "Commentary: Can the Microwave Auditory Effect Be 'Weaponized'?" *Frontiers in Public Health* 10 (2023): 1118762. https://pmc.ncbi.nlm.nih.gov/articles/PMC9869364/
- National Academies of Sciences, Engineering, and Medicine. *An Assessment of Illness in U.S. Government Employees and Their Families at Overseas Embassies*. Washington, DC: National Academies Press, 2020. https://www.ncbi.nlm.nih.gov/books/NBK566408/
- Office of the Director of National Intelligence. Summary of IC Assessment of Anomalous Health Incidents (2023). https://www.hstoday.us/subject-matter-areas/intelligence/intelligence-community-agencies-find-it-unlikely-that-foreign-adversary-caused-havana-syndrome-cases/
- House Permanent Select Committee on Intelligence, Unclassified Report on AHI (December 2024). https://www.cbsnews.com/news/havana-syndrome-intelligence-report-questioned-house-committee-60-minutes/
- ODNI Updated Assessment (January 2025). https://sashaingber.substack.com/p/a-war-of-words-between-the-intel
- Dagro, A.M. et al. "Computational Modeling Investigation of Pulsed High Peak Power Microwaves and the Potential for Traumatic Brain Injury." *Science Advances* 7 (2021): eabd8405.
- BBC. "'Havana Syndrome' and the Mystery of the Microwaves" (September 2021). https://www.bbc.com/news/world-58396698
- Lin, J.C. Biography, University of Illinois at Chicago. https://ece.uic.edu/profiles/james-lin-phd/
- Foster, K.R. Biography. https://biomed.bas.bg/bioautomation/2010/vol_14.1/files/worldwidescientist_1.pdf
