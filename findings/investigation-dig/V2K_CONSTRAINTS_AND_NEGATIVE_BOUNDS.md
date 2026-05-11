# V2K Constraints and Negative Bounds — Physics, Channel, and Source-Class Limits

**Purpose:** Consolidate the *bounding* evidence on voice-to-skull (V2K) into one standalone note. Companion to `v2k-evidence-matrix.md` (T1–T5 working judgment) and `V2K_DEEP_LAYER.md` (Tier A vs Tier B framing). This file does **not** introduce new tier claims; it makes the existing T2/T4 non-establishment and T1 strength explicit by pinning the physical, psychoacoustic, and program-document constraints to identifiable sources.

**Scope:** Mechanism limits on intelligible RF-induced speech; status of the Sharp/Grove personal-communication record; declassified government-document caution language; alternative mechanisms (parametric array / LRAD) that should be considered before invoking MAE. No sensational language.

---

## 1. Evidence posture (unchanged tier mapping)

This note **does not modify** the working judgment in `v2k-evidence-matrix.md` §"Working judgment (T1–T5)". It reproduces it here for self-contained reading and pins each tier to its bounding constraint.

| Tier | Claim | Status | Bounding constraint |
|------|-------|--------|---------------------|
| **T1** — MAE / RF hearing | Pulsed RF can induce perceived sound | **Strongly supported** | Frey 1961/1962; Frey & Messenger 1973 rise-time; Foster & Finch 1974 thermoelastic; Guy/Chou/Lin/Christensen 1975 cochlear; Lin 1978; Lin & Wang 2007; Elder & Chou 2003 (in-repo PDF) |
| **T2** — Intelligible semantic speech | Reliable word/sentence MAE delivery | **Qualified historical claim, not protocol-grade** | Justesen 1975 reports Sharp/Grove personal communication; nine single-syllable digits; no sentences attempted near 10 mW/cm² limit; no independent open-literature replication |
| **T3** — Patents and programs | Claim-space and engineering intent | **Supported as claim-space only** | US4877027 Brunkan, US6587729 O'Loughlin/Loree, MEDUSA Phase I, CALL "voice to skull" thesaurus entry — none demonstrate working speech device |
| **T4** — Operational deployment | A fielded V2K system used against named targets | **Not established** | Foster/Garrett/Ziskin 2021 "appears unlikely"; JASON JSR-21-01 "could find no evidence"; equipment is "large and obvious"; PANDORA terminated 1970 without proof |
| **T5** — Symptoms / law / context | TI reporting, AHI symptoms, dismissals | **Context only** | NAS 2020 ≠ V2K speech; ODNI 2024 mostly disconfirming; AHI vestibular ≠ semantic speech channel |

**Operational rule:** Mechanism strength (T1) and patent/program intent (T3) do **not** transfer to intelligible semantic speech (T2) or deployment (T4). The Tier A / Tier B framing in `V2K_DEEP_LAYER.md` overlays T1/T2 the same way.

---

## 2. Constraint stack — physical bounds on intelligible MAE speech

Each row is a distinct physical or perceptual bottleneck. They compose: an MAE-based speech channel must satisfy **all** of them simultaneously. None of these are engineering hurdles that can be retired by cleverness; each is a consequence of the thermoelastic transduction physics, head geometry, or auditory-system psychophysics.

| # | Constraint | Quantitative anchor | Why it bounds T2 |
|---|------------|---------------------|------------------|
| C1 | **Rise-time requirement** | Square-wave pulse leading edge; slow rise = no perception | Frey & Messenger 1973; Guy et al. 1975. Continuous-wave or slowly modulated RF cannot encode arbitrary speech via this mechanism. |
| C2 | **Thermoelastic mechanism produces clicks** | Temperature rise per audible pulse ~10⁻⁶ °C; pressure transient ~0.1–3 Pa at threshold | Foster & Finch 1974 explicitly explains *"clicks"*, not voiced phonemes. The mechanism's native output is a broadband impulsive transient. |
| C3 | **Head-resonance lock-in** | Fundamental cranial acoustic resonance ~7–10 kHz in adult humans, independent of RF carrier frequency | Lin 1978; Lin & Wang 2007. The *perceived* spectral peak is governed by head geometry, not by the modulation envelope, so timbre cannot be freely shaped. |
| C4 | **Spectral channel count ≈ 1** | MAE delivers a single broadband channel via the head's geometric resonance | Mehta & Oxenham 2017 establish ≥4 channels for simple-sentence intelligibility, 8–20 for noise, ≥32 with steep filter slopes for complex pitch. MAE's single-channel output is below the floor even for cochlear-implant-grade intelligibility. (Listed here as a *psychoacoustic* bound on what any single-channel thermoelastic stimulus could deliver — see §5 for the caveat against citing this as RF or V2K evidence.) |
| C5 | **Peak power / thermal floor** | Peak power density for MAE perception ~500–5,000 mW/cm²; safe time-averaged limit historically ~10 mW/cm² | Lin & Wang 2007. Sharp/Grove nine-digit demonstration was reported (Justesen 1975; declassified Army NLW study) as approaching the 10 mW/cm² average-power limit; longer messages were *not attempted* because they would exceed it. Foster 2018 (Live Science): scaling MAE pressure to lethal would require 7–8 orders of magnitude more intensity ("the subject would just go up in smoke"). |
| C6 | **Quiet-environment masking** | MAE perception requires near-anechoic conditions; normal ambient noise masks it | Frey 1961, 1962; Lubner et al. 2020. Any real-world standoff scenario faces a basic SNR / masking barrier that the open literature does not solve. |
| C7 | **No external recordability** | MAE-generated sound exists only intracranially; no microphone or external instrument can detect it | Foster/Garrett/Ziskin 2021. This is a *signature* property of MAE that distinguishes it from parametric-array, LRAD, or conventional acoustic mechanisms — and is the simplest forensic discriminator. |
| C8 | **Phase-locking / TFS ceiling** | Auditory-nerve phase-locking falls off above 2–3 kHz, essentially absent above ~8 kHz; cochlear microphonic recorded at ~50 kHz in animal MAE work | Chou et al. 1975; multi-source 2017–2022 TFS reviews. A single MAE click carries onset timing but no fine spectral phase usable for phoneme encoding. |
| C9 | **Equipment footprint** | Pulsed-microwave systems with fluence sufficient for MAE are large and conspicuous | Foster/Garrett/Ziskin 2021: "the equipment is large and would be very obvious." Bounds operational covertness independently of any speech-channel limit. |

The Sharp/Grove 1973 demonstration, as reported through Justesen 1975, sits at the *limit* of C5 (near safe exposure for nine single-syllable words) and only weakly contends with C3/C4 (zero-crossing-triggered pulses produce a periodicity-pitch-like cue rather than a true spectral speech signal). Frey/Messenger/Eichert 1972 (AD747684, in repo) is a *negative methods result* for vocoder / periodicity-pitch speech generation — already cited in the matrix and reinforced here.

---

## 3. Source-class table (deep-dig sources, with classification)

This table classifies the deeper-dig source set by the same scheme used in `v2k-evidence-matrix.md` (T1–T5) and the report's evidentiary class. **Sources marked PRIMARY-MAE bear on T1 only.** PATENT-WEAK sources are claim-space evidence (T3), not capability evidence. DISCONFIRM rows constrain T2/T4.

| Source | Year | Class | Tier bearing | URL / DOI |
|--------|------|-------|--------------|-----------|
| Frey, *Aerospace Med* 32:1140 | 1961 | PRIMARY-MAE | T1+ | https://www.semanticscholar.org/paper/2c115e934cae40b5f6824ac83e7788ea1be5a320 |
| Frey, *J Appl Physiol* 17(4):689 | 1962 | PRIMARY-MAE | T1+ | https://journals.physiology.org/doi/10.1152/jappl.1962.17.4.689 |
| Frey & Messenger, *Science* 181:356 (rise-time) | 1973 | PRIMARY-MAE / DISCONFIRM (CW) | T1+; rules out CW V2K | DOI 10.1126/science.181.4097.356 |
| Frey/Messenger/Eichert, AD747684 (negative vocoder/periodicity speech result) | 1972 | PRIMARY-MAE / DISCONFIRM | T2- | https://ntrl.ntis.gov/NTRL/dashboard/searchResults/titleDetail/AD747684.xhtml |
| Foster & Finch, *Science* 185:256 (thermoelastic) | 1974 | PRIMARY-MAE | T1+ | DOI 10.1126/science.185.4147.256 |
| Sharp/Grove/Gandhi, *IEEE T-MTT* 22:583 | 1974 | PRIMARY-MAE (mechanism only) | T1+ | http://ieeexplore.ieee.org/document/1128293/ |
| Chou/Galambos/Guy/Lovely (cochlear microphonic ~50 kHz) | 1975 | PRIMARY-MAE | T1+ | http://www.gbppr.net/mil/havana/chung-kwang1975.pdf |
| Guy/Chou/Lin/Christensen, *Ann NY Acad Sci* 247:194 | 1975 | PRIMARY-MAE | T1+ | (NYAS 1975) |
| Justesen, *Am Psychologist* 30(3):391 — Sharp/Grove personal communication anchor | 1975 | SPECULATIVE / SECONDARY-ONLY | T2 qualified historical | DOI 10.1037/0003-066X.30.3.391 |
| Lin, *Microwave Auditory Effects and Applications* (book) | 1978 | SECONDARY-REVIEW | T1+ | https://samim.io/dl/Microwave_Auditory_Effects_And_Applications-Book_by_James_C_Lin_Phd_1978.pdf |
| Oscar, AD-A090426 (LCBF in rats; "intelligible speech *may be* created" in stated-intent paragraph) | 1980 | GOVT-DECLASSIFIED (T1 corroborated; T3 anchor) | T1+/T3; not T2 | https://apps.dtic.mil/sti/pdfs/ADA090426.pdf |
| Becker & Selden, *The Body Electric*, ch. 15 | 1985 | T5 anchor (mainstream popular text) | T5; not T2/T4 | (Morrow 1st ed.) |
| Brunkan, US 4,877,027 | 1989 | PATENT-WEAK | T3 claim-space | https://patents.google.com/patent/US4877027A |
| Stocklin, US 4,858,612 | 1989 | PATENT-WEAK / SPECULATIVE | T3 claim-space | https://patents.google.com/patent/US4858612A |
| Army "Bioeffects of Selected Non-Lethal Weapons" (declassified ~2006, ~1998 content) | ~1998 | GOVT-DECLASSIFIED | T3; bounded T2 ("sentences not attempted") | https://studylib.net/doc/25702827/12-13-06-bioeffects-of-selected-non-lethal-weapons |
| Elder & Chou, *Bioelectromagnetics* (review) — in-repo PDF | 2003 | SECONDARY-REVIEW | T1+ | `findings/investigation-dig/elder-chou-rf-hearing-review.pdf` |
| O'Loughlin & Loree, US 6,587,729 (USAF) | 2003 | PATENT-WEAK | T3 claim-space | https://patents.google.com/patent/US6587729B2 |
| Lin & Wang, *Health Physics* 92(6):621 | 2007 | SECONDARY-REVIEW | T1+; quantitative thresholds | DOI 10.1097/HP.0b013e31803070be |
| Mehta & Oxenham, *JARO* 18:789 (vocoder / channel-count limits) | 2017 | MECH-PSYCHOACOUSTIC | **Background only** — not RF or V2K evidence (see §5) | DOI 10.1007/s10162-017-0632-x |
| NAS, *Assessment of Illness in U.S. Government Employees* (Havana AHI) | 2020 | SECONDARY-REVIEW / GOVT-COMMISSIONED | T5 (AHI vestibular, not V2K speech) | https://nap.nationalacademies.org/read/25889 |
| Lubner et al., *Front Neurology* | 2020 | SECONDARY-REVIEW | T1; quiet-env constraint | https://pmc.ncbi.nlm.nih.gov/articles/PMC7199630/ |
| JASON JSR-21-01 (Embassy Incidents) | 2021 | GOVT-COMMISSIONED / DISCONFIRM | T4- (cited via Foster 2021/2023) | https://www.state.gov/wp-content/uploads/2022/02/JASON-Study-Revised_10-February-2022-Redacted_V1.1.pdf |
| Foster, Garrett & Ziskin, *Front Public Health* 9:788613 | 2021 | DISCONFIRM | T4-; "appears unlikely" | https://pmc.ncbi.nlm.nih.gov/articles/PMC8733248/ |
| Lin, IEEE J-ERM (review) | 2022 | SECONDARY-REVIEW | T1+ | https://ieeexplore.ieee.org/document/9366412/ |
| NSArchive, "Moscow Signals Declassified" (PANDORA / BIZARRE) | 2022 | GOVT-DECLASSIFIED | T4-; program terminated 1970 without proof | https://nsarchive.gwu.edu/briefing-book/intelligence-russia-programs/2022-09-13/moscow-signals-declassified-microwave |
| Foster (commentary), *Front Public Health* 10:1118762 | 2023 | DISCONFIRM (relative) | T4-; laser more feasible than RF (both "hypothetical") | https://pmc.ncbi.nlm.nih.gov/articles/PMC9869364/ |
| PMC "Havana Syndrome: A Post Mortem" (PMC10913303) | 2023 | SECONDARY-REVIEW / DISCONFIRM | T5; second classified report found microwave "highly unlikely" | https://pmc.ncbi.nlm.nih.gov/articles/PMC10913303/ |
| Parametric array / Audio Spotlight (Pompei MIT thesis; Holosonics history; Wikipedia) | n/a | ALTERNATIVE-MECHANISM | Not V2K; first-pass alternative | https://core.ac.uk/download/pdf/4393713.pdf · https://en.wikipedia.org/wiki/Sound_from_ultrasound |
| LRAD / AHD | n/a | ALTERNATIVE-MECHANISM | Not V2K; external directional sound | https://en.wikipedia.org/wiki/Long-range_acoustic_device |

---

## 4. Caution blocks (concise)

These distill the report's recommended caution language. Each block stands alone and can be lifted into other repo files as a single paragraph when the relevant source is cited.

**CAUTION-1 — Sharp/Grove (1973, via Justesen 1975).** Documented only as a personal communication (28 Sep 1973) reported second-hand in Justesen's 1975 *American Psychologist* article. No independent peer-reviewed Sharp/Grove speech-protocol paper has been located in DTIC, Lin 1978 bibliography, Foster/Garrett/Ziskin 2021, NMRI Glaser 1976 bibliography, or open-archive searches (see `SHARP_GROVE_PRIMARY_REPORT_HUNT.md`, `SHARP_GROVE_NEXT_PASS_SYNTHESIS.md`). Nine single-syllable digit words, two self-reporting subjects (the experimenters), near-safe-exposure power, no sentences attempted, no independent replication. Treat as **uncorroborated single-source historical claim**; do not extrapolate to sentence-level or standoff speech.

**CAUTION-2 — Patents are claim-space, not capability.** U.S. patent grant requires no experimental proof of function. Brunkan (US 4,877,027), Stocklin (US 4,858,612), and the USAF O'Loughlin/Loree (US 6,587,729) document claimed inventions inside the MAE physics envelope. None demonstrates intelligible speech, working device, or fielded use. Patents map to **T3 only**; they do not transfer to T2 or T4.

**CAUTION-3 — Declassified government documents are bounded, not endorsing.** The declassified Army "Bioeffects of Selected Non-Lethal Weapons" study explicitly admits (a) the only speech demonstration cited is Sharp/Grove's nine digits, (b) "sentences were not attempted" because of the 10 mW/cm² safety floor, and (c) further speech development is framed in conditional language ("it *seems possible*"), not as demonstrated capability. AD-A090426 (Oscar 1980) frames intelligible speech as a *stated-intent* program rationale, not an experimental result of that study (see `AD_A090426_OSCAR_1980_PRIMARY_REVIEW.md`). PANDORA/BIZARRE (NSArchive 2022) was terminated in 1970 without proving the hypothesis; RAND found the data "scientifically non-credible."

**CAUTION-4 — Single-channel thermoelastic stimulus is below the speech-intelligibility floor.** The thermoelastic mechanism produces one acoustic channel (a broadband impulsive transient peaked at the head's ~7–10 kHz resonance). Generic psychoacoustic literature on cochlear-implant simulations (e.g. Mehta & Oxenham 2017) establishes that ≥4 spectral channels are needed for simple-sentence intelligibility and ≥32 for complex pitch. **This is background psychoacoustic context, not RF or V2K evidence per se** (see §5).

**CAUTION-5 — Power / thermal floor is a physics constraint, not an engineering hurdle.** Peak power density for MAE perception is 500–5,000 mW/cm². The historical safety floor is ~10 mW/cm² time-averaged. The Sharp/Grove nine-digit demonstration reportedly approached this floor; any continuous- or sentence-length speech transmission via MAE drives average power toward tissue-heating damage thresholds *before* sufficient speech information is delivered. Independent statements by Foster and Guy: thermal harm precedes any meaningful acoustic-pressure harm via MAE.

**CAUTION-6 — Quiet-environment masking is unaddressed in the open literature.** Frey 1961/1962 and Lubner 2020 record that normal ambient noise masks MAE perception. No open-literature MAE study demonstrates word/sentence intelligibility under field-realistic ambient SNR.

**CAUTION-7 — Triage reports of "voices inside the head" against parametric array / LRAD first.** Audio Spotlight (Pompei / Holosonics) and LRAD deliver full-bandwidth speech in narrow directional beams. Both are commercial, both can produce the percept of an internal source (bone conduction), and both — unlike MAE — are recordable by external microphones. External recordability is the cleanest single forensic discriminator. Any V2K hypothesis should consider these alternatives before invoking MAE.

---

## 5. Note on Mehta & Oxenham 2017 (not RF, not V2K)

Mehta & Oxenham 2017 is a study of vocoder simulations and cochlear-implant pitch perception. It is **psychoacoustic background**, not RF evidence and not V2K evidence. It is cited above only to anchor the channel-count floor that any single-channel acoustic stimulus — *including* a thermoelastic MAE transient — would have to clear to support speech intelligibility. Do not cite it as evidence for or against MAE-specific speech delivery; cite it as evidence about the general spectral-channel requirements of intelligible speech.

---

## 6. Prioritized next hunts

These are ordered by *expected closure value per unit effort*. Items 1–4 would materially tighten T2/T4 if recovered; items 5–7 are bounded archival hunts likely to produce smaller increments.

1. **Sharp/Grove primary technical report (WRAIR or ARPA).** Status: not located across DTIC, Lin 1978 bibliography, Lin 2022, Foster/Garrett/Ziskin 2021, NMRI Glaser 1976. Targets: NTIS, USAMRDC/JPC archives, Bentley Historical Library (Steneck 1984 *Microwave Debate* accession 91-NLF-018), DTIC FOIA request for FY75 WRAIR Annual Progress Report (currently missing from archive.org). See `SHARP_GROVE_NEXT_PASS_THREAD_A_FY75_FY76.md`.
2. **Kohn / SEA SBIR deliverables (any Phase II microwave-auditory speech work).** Recover Phase I/II final reports to test whether any government-funded program ever delivered *protocol-grade* intelligibility data on MAE speech (vs concept work and applicator engineering).
3. **AFRL O'Loughlin / Loree blinded protocol.** US 6,587,729 names processing/modulation steps; recover any AFRL technical report, contractor deliverable, or peer-reviewed publication that tests the patent's claimed intelligibility under blinding.
4. **Modern peer-reviewed RF speech-delivery sweep / null-hypothesis study.** A modern (post-2010) blinded, ethics-approved word/sentence intelligibility study using MAE-class pulses would either close T2 or — if negative — provide the first modern published disconfirmation of intelligible MAE speech.
5. **Soviet / non-US replications.** PANDORA/BIZARRE NSArchive material references Soviet bioeffects literature (DIA DST-1810S-074-76 referenced in `SHARP_GROVE_DEEPER_DIG_PASS_2.md`). Recover the full DIA document and any peer-reviewed Soviet replications of speech-class MAE.
6. **JASON JSR-21-01 full primary.** Currently accessible only via redacted State Department release and via citations in Foster 2021/2023. Confirm the un-redacted "could find no evidence" language and any feasibility-section quantitative bounds.
7. **NARA patent wrappers (Brunkan, Stocklin, O'Loughlin/Loree).** File wrappers, examiner correspondence, and any cited art may reveal whether any prosecution evidence beyond the patent text exists.

---

## 7. What this note explicitly does *not* do

- It does not change the T1–T5 mapping in `v2k-evidence-matrix.md`.
- It does not assert that V2K is impossible in principle; it asserts that the open-literature, declassified-document, and patent record do not establish intelligible semantic speech (T2) or operational deployment (T4).
- It does not re-litigate the Sharp/Grove personal-communication trail beyond the existing matrix Versions 3, 6, 11, 15, 27 and the SHARP_GROVE deep-dig family.
- It does not treat Mehta & Oxenham 2017 as RF/V2K evidence; it is psychoacoustic background only.
- It does not collapse AHI vestibular evidence (NAS 2020, ODNI 2024) into V2K speech evidence; the two are distinct symptom and mechanism classes.

---

## 8. Cross-links

- `v2k-evidence-matrix.md` — full T1–T5 matrix; Sharp/Grove trail Versions 3, 6, 11, 15, 27; Frey/Messenger/Eichert AD747684 negative methods result row.
- `V2K_DEEP_LAYER.md` — Tier A / Tier B framing, communication-theory bottlenecks (information rate, encoding, SNR, blinded protocols).
- `SHARP_GROVE_PRIMARY_REPORT_HUNT.md`, `SHARP_GROVE_NEXT_PASS_SYNTHESIS.md`, `SHARP_GROVE_DEEPER_DIG_PASS_2.md` — primary-record closure status.
- `AD_A090426_OSCAR_1980_PRIMARY_REVIEW.md`, `AD_A090426_REFERENCE_CHAIN_EVIDENCE.md` — Oscar 1980 stated-intent paragraph in context; Frey/Messenger/Eichert 1972 negative-methods inline.
- `V2K_REPO_POSSIBILITY_REVIEW.md` — repository-wide possibility map and folder roles.
- Root `V2K_EVIDENCE_MATRIX.md` — second, more narrative matrix; this note's T1–T5 mapping is consistent with that file. (Note: the root file and the investigation-dig file are not identical in scope; this note avoids rewriting either and serves as a constraint overlay rather than a merge.)

---

*Compiled from the in-repo Sharp/Grove and AD-A090426 deep-dig series plus an external evidence-constraints sweep. All URL citations preserved from upstream sources; no URLs invented. The note's purpose is to make the T1–T5 mapping's bounding constraints explicit and citable in one place.*
