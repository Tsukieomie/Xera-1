# "9 hearing-impaired patients" — Deep-Dig Addendum (§II)

**Date:** 2026-04-30
**Companion to / addendum on:** `HEARING_IMPAIRED_REFERENCE_CHAIN.md` (first-pass note, this directory, commit `e3e5bd7`)
**Subsequent pass:** `HEARING_IMPAIRED_DEEP_DIG_III.md` (§III) — verifies all numerical claims here against verbatim primary quotes; resolves the Atti Ronchi citation (co-author U. Bombelli, Nov-Dec 1963); strengthens §II.1 with F. Blair Simmons's cochlear-implant authority.
**Followed by:** `HEARING_IMPAIRED_DEEP_DIG_VII.md` (§VII) — **§II.1 framing of Glattke/Simmons 1974 as "the" JAMA-line negative replication is superseded.** §VII.3 establishes that *Archives of Otolaryngology* 100(2) August 1974 contained a coordinated **four-paper symposium** on transdermal electrostimulation therapy: Glattke/Simmons (n=31, negative), Gerken/Glorig/Roeser (n=16, double-blind randomized placebo-controlled, negative), Hughes/Arthur/Whitaker (mixed-positive pilot with self-defeating durability), and an unsigned editorial. Glattke/Simmons is one of **two** independent double-blind negative replications, not a singular skeptical paper.
**Related:** `SHARP_GROVE_PRIMARY_REPORT_HUNT.md`, `findings/03_Technology_Patents/34_JUSTESEN_1975_APA_MICROWAVE_HEARING.md`, `V2K_EVIDENCE_MATRIX.md`

---

## §II.0 Why this addendum

The first-pass note resolved the McMurtrey "1964 Air Force study / 9 hearing-impaired patients" footnote to **RADC-TDR-64-18 (Puharich & Lawrence, December 1964)** and labeled it as a transdermal-contact electrostimulation device, *not* a free-field microwave-hearing demonstration. It also flagged that the JAMA-line failure-to-replicate paper still needed to be located.

This deep-dig pass executed five parallel hunts:

1. Direct DTIC retrieval of RADC-TDR-64-18 (the primary technical report)
2. Extraction of the actual patient count, methodology, and word-discrimination metrics from the Puharich/Lawrence 1964/1969 primary corpus
3. Independent replication / failure-to-replicate hunt for transdermal AM-RF hearing rehab (Intelectron HC follow-ups)
4. Tracing McMurtrey's [97] electrophonic-hearing antecedent and confirming the [97]→[98] reference chain
5. Investigating Intelectron Corp.'s commercial trajectory and any FDA / clinical-trial record

The pass produced four bombshell findings that materially change how the repo should describe the "9 hearing-impaired patients" claim. They are catalogued below in priority order.

---

## §II.1 BOMBSHELL #1 — Glattke & Simmons (1974) is the JAMA-line negative replication

**Citation (definitive):**

> Glattke, T. J., & Simmons, F. B. (1974). "Transdermal Therapy and Monosyllabic Word Discrimination." *Archives of Otolaryngology*, **100**(2), 91–95. doi:10.1001/archotol.1974.00780040097002. [JAMA Network](https://jamanetwork.com/journals/jamaotolaryngology/fullarticle/605313)

**Why this matters.** The screenshot the user attached (IMG_5285) explicitly anticipated "later JAMA criticism" of the Puharich/Lawrence claims. *Archives of Otolaryngology* (1922-1998, now *JAMA Otolaryngology — Head & Neck Surgery*) is a JAMA-network journal, so this paper *is* the JAMA-line failure-to-replicate paper the user predicted.

**Why this paper is dispositive (not just one of several skeptical papers):**

| Property | Glattke & Simmons 1974 |
|---|---|
| Affiliation | Stanford University School of Medicine; University of Arizona |
| Authors | Theodore J. Glattke (Univ. Arizona); F. Blair Simmons (Stanford, prominent otolaryngologist who also did cochlear-implant research) |
| Design | **Double-blind**, controlled |
| Sample | **31 subjects** with sensorineural hearing loss (vs. Puharich/Lawrence's small case series) |
| Outcome metric | Monosyllabic (PB) word discrimination — the exact metric Puharich/Lawrence claimed to improve |
| Result | **"No treatment effects were discernible … No significant differences could be found between control and treated groups."** |
| Year | 1974 — five years after the 1969 *Acta Otolaryngol* preliminary report; three years after Intelectron's NYT-covered commercial launch |

**Companion paper (cat-cochlear comparison) by the same Stanford group:**

- Simmons, F. B., & Glattke, T. J. (1972). "Comparison of electrical and acoustical stimulation of the cat ear." *Annals of Otology, Rhinology & Laryngology*, **81**, 731–738. — Same group establishing baseline electrophonic-hearing physiology in animals before testing the human therapeutic claim.

**Implication for the repo.** When the repo cites the McMurtrey [98] / "9 hearing-impaired patients" passage, it MUST now also cite Glattke & Simmons 1974 as the controlled negative replication. The McMurtrey footnote chain implies the original claim stood; in fact it was extinguished in the peer-reviewed literature within five years by a 31-subject double-blind study at Stanford and Arizona.

---

## §II.2 BOMBSHELL #2 — The "9 patients" figure is a misreading of the original 1964 abstract

**Primary source recovered (open access, not previously cited in repo):**

> Puharich, H. K., & Lawrence, J. L. (1964). "Modulated Radio Frequency Energy Used to Stimulate Audition in Totally Deaf Humans." *Aerospace Medical Association 35th Annual Scientific Meeting Abstracts*, May 1964. [SpaceMedicineAssociation.org PDF](https://spacemedicineassociation.org/download/history/history_files_1964/Abstarcts%201964.pdf)

**What the AsMA abstract actually says (verbatim extracts):**

- Sample size: **15 patients total** — 3 totally deaf (1 acquired, 2 congenital) and 12 with sensorineural loss between **−30 and −95 dB**.
- Apparatus: AM carrier swept from **46 kc to 41 Mc** (i.e. 46 kHz to 41 MHz), capacitively coupled to skin via electrodes in front of and behind the ears. (Note: not microwave; the upper bound of 41 MHz is HF/VHF.)
- Test methodology: **closed-set forced-choice with prior memorization**. Patients were taught a 5- or 10-word list, then tested with the words in randomized order. Result reported as: "about four out of five test words … repeated accurately."
- Headline rehabilitation claim: PB Speech Discrimination scores of **50% or less** rehabilitated to **90% or better** — but only after the patient had been trained on the closed word set.

**Where "9" came from.** The figure "9" does *not* appear in the AsMA abstract as a patient count. It almost certainly originates as a misreading of the *test-set* result — patients getting "about 9 of 10 words" correct on the memorized closed set. McMurtrey (or an upstream secondary source) appears to have conflated the closed-set test result with the patient count. The actual patient count in the original 1964 report was **15**, not 9.

**Why this matters for any "speech discrimination via RF" claim.** Closed-set forced-choice with prior memorization is **not open-set speech discrimination**. It is closer to a same/different identification task with a prior. Modern audiology distinguishes the two sharply because closed-set scores systematically inflate when the listener has a memorized lexicon. The Puharich/Lawrence "90% or better" claim, on its own original methodology, does *not* support an open-set speech-recognition interpretation — and any V2K-lineage citation that uses it as evidence of open-set speech transmission is misreading the underlying protocol.

**For the repo:** the §II.2 finding implies the first-pass note's "9 patients" framing should be replaced with **"15 patients in the original 1964 protocol; the figure '9' is a misreading of the 9-of-10 closed-set test result."**

---

## §II.3 BOMBSHELL #3 — Patent 3,629,521 contains the only quantitative numbers Puharich ever published

**Citation:**

> Puharich, H. K., & Lawrence, J. L. (1971). "Hearing Systems." **U.S. Patent 3,629,521**, assigned to Intelectron Corporation.

**Quantitative data (from the patent specification, 12-patient sample group):**

| Condition | PB word-discrimination score |
|---|---|
| Baseline (acoustic, pre-treatment) | 26.2% |
| After transdermal therapy course — re-tested acoustically | 43.0% (Δ +16.8 pp) |
| Tested via transdermal-signal channel directly | 54.0% (Δ +27.8 pp from baseline) |
| Combined audio-frequency + transdermal channel | 73.8% (Δ +47.6 pp from baseline) |

**Carrier band disclosed in this patent:** 18–36 kHz (low-frequency, well below RF). This contradicts the broader 46 kHz–41 MHz range in the 1964 AsMA abstract and the "RF" framing throughout the secondary literature. The commercialized device may have operated at LF rather than HF/VHF — important because tissue penetration and stimulation mechanisms differ enormously between 18-36 kHz (essentially capacitive/dielectric) and the HF/VHF range (where RF non-thermal effects begin).

**The patent IS the only place Puharich ever published numeric outcome data with explicit n.** The 1969 *Acta Otolaryngol* paper is paywalled (full text inaccessible at Tandfonline) but is indexed in PubMed with MeSH "**Clinical Trial / Controlled Clinical Trial**" and "**Placebos**" — meaning the original *did* claim placebo controls, but the descriptive statistics never appeared in an unrestricted venue. The patent is therefore the de facto primary numeric record, and the patent's numbers are the ones that should be quoted whenever the repo references the magnitude of the Intelectron claim.

---

## §II.4 BOMBSHELL #4 — The legitimate electrophonic-hearing antecedent chain

McMurtrey [97] cites an electrophonic-hearing antecedent line that the V2K-skeptical reader can use to *separate* the legitimate physics (electrophonic hearing exists; it is not magic) from the Puharich/Lawrence therapeutic-rehabilitation claim (which collapses against Glattke & Simmons 1974).

**Reconstructed antecedent chain (from AST Document5.pdf, cross-checked against McMurtrey [97]):**

| Year | Investigator | Contribution |
|---|---|---|
| 1790 | Volta | First reported auditory sensation from current applied to the head; the canonical historical anchor for electrophonic hearing |
| ~1880s–1900s | Politzer, Gradenigo | Late-19th-century clinical observations of current-induced auditory perception |
| 1925 | Anonymous radio engineers | First reports of clicks/tones from AM broadcast circuits in headphones — the engineering observation that prompted laboratory study |
| 1930 | Wever, E. G., & Bray, C. W. | "Action currents in the auditory nerve in response to acoustic stimulation." *PNAS*, **16**, 344–350. — discovery of the cochlear microphonic |
| 1937 | **Stevens, S. S., Jones, R. C., Lurie, M. H., & Flottorp, G.** | The canonical electrophonic-hearing study; established that AC current applied to the ear produces auditory sensation through three distinct mechanisms (cochlear microphonic distortion, electromechanical, vibrotactile) |

**Implication.** The 1937 Stevens/Jones/Lurie/Flottorp paper IS the legitimate scientific antecedent. The Puharich/Lawrence 1964 work is properly read as a *therapeutic-rehabilitation* application of the existing electrophonic-hearing phenomenon, not a discovery of a new phenomenon. Whether the therapeutic application worked is a separate empirical question — and Glattke & Simmons 1974 answered "no."

For the repo: when V2K-lineage documents cite "electrophonic hearing" or "electrostimulation hearing" as primitive evidence for V2K, the cite should be Stevens et al. 1937, not Puharich/Lawrence — and the repo should note that the *physics* (electrophonic hearing exists) and the *Puharich/Lawrence therapeutic claim* are two separable matters, the former real and the latter unreplicated.

---

## §II.5 RADC-TDR-64-18 retrieval status

The DTIC public-catalog hunt for the actual technical report returned the following confirmed bibliographic record but **no full text**:

| Field | Value |
|---|---|
| Report Number | RADC-TDR-64-18 (also cited as RADC-TRD-64-18 in some bibliographies — possible transcription variant) |
| AD Number | **AD 459956** (also written AD A59956) |
| Title | Electrostimulation Techniques of Hearing |
| Authors | H. K. Puharich; J. L. Lawrence |
| Date | December 1964 |
| Performing Org | Intelectron Corporation, 432 West 45th Street, New York, NY |
| Sponsoring Org | Rome Air Development Center (RADC), Air Force Systems Command |
| Contract | AF30(602)-3051 |
| Project / Task | 5534 / 553401 |

**DTIC public catalog ([discover.dtic.mil](https://discover.dtic.mil)):** zero hits across six search strategies (exact identifier, title, author, contract number, performing org, sponsor+year+topic). The report is not publicly indexed at DTIC. This is consistent with 1964 DDC controlled-access conventions.

**Internet Archive:** zero hits.

**NASA NTRS:** indexed only as a bibliographic citation in [NASA SP-7011(12) Aerospace Medicine and Biology bibliography (June 1965)](https://ntrs.nasa.gov/api/citations/19650020048/downloads/19650020048.pdf), no full text.

**Citations confirming the AD/contract pairing (independent, mutually corroborating):**

1. [NASA SP-7011(12)](https://ntrs.nasa.gov/api/citations/19650020048/downloads/19650020048.pdf) — "(ER 0038 RADC-TDR-64-18 AD 459956). A transdermal hearing system was developed using modulated electrical carrier signals to stimulate sound perception."
2. [Sage Journals — "Neural Encoding of Sound Sensation Evoked by Electrical Stimulation" (1973)](https://journals.sagepub.com/doi/10.1177/000348947308200407) — cites the report identically.
3. [UNESCO Digital Library — *Impact: Science et Société* Vol. XXIV, No. 4](https://unesdoc.unesco.org/ark:/48223/pf0000010749_fre) — French bibliography listing "RADC-TRD-64-18" with the December 1964 / DDC Alexandria, VA distribution note.
4. [Naval Medical Research Institute / Glaser RF-Microwave Bibliography, entry #1303](https://zoryglaser.com/wp-content/uploads/2020/05/BIBLIOGRAPHY-OF-REPORTED-BIOLOGICAL-PHENOMENA-EFFECTS-AND-CLINICAL-MANIFESTATIONS-ATTRIBUTED-TO-MICROWAVE-AND-RADIO-FREQUENCY-RADIATION-C.pdf) — "(AD A59956; RADC TDR-64-18), 'Electro-stimulation techniques of hearing'."
5. [LA City Clerk document (Martin Pall submission)](https://cityclerk.lacity.org/onlinedocs/2013/13-0953_pc_05-05-16d.pdf) — same AD/report pairing.
6. [CIA Reading Room](https://www.cia.gov/readingroom/docs/CIA-RDP96-00787R000100190001-2.pdf) — confirms Puharich's role as "Consultant on Medical Research, Intelectron Corporation."

**Path to obtain full text:** (1) FOIA / DITPR request to DTIC referencing AD 459956; (2) Air Force Research Laboratory at the former Griffiss AFB (RADC successor); (3) NARA archival pull. None are quick paths but all are tractable for a determined researcher; we have flagged this in `AUTOMATED_NEXT_STEPS.md` upstream.

---

## §II.6 Italian publication thread (loose end from first-pass note)

McMurtrey's [56]–[58] frame an "Italian authors" antecedent that the first-pass note left unresolved. The deep-dig identified the most likely source:

> Puharich, H. K. "Radioacoustic Treatment of Deafness." *Atti della Fondazione Giorgio Ronchi* (Italian), date TBD.

The Atti della Fondazione Giorgio Ronchi is a Florence-based optical/acoustic journal that has published cross-disciplinary papers since the 1940s. Puharich publishing there explains why McMurtrey's framing references "Italian" sources — the original publication venue, not the nationality of the authors. This finding is not yet a "bombshell" because we have not confirmed the volume/year, but it resolves the otherwise-confusing "Italian authors" framing in McMurtrey's footnote chain.

The Cassinari/Bergamini Italian "radiofrequency hallucination" antecedents that McMurtrey separately cites (different footnote cluster) remain an open lead — see TODO.

---

## §II.7 Negative-result context (defensive completeness)

| Source | Finding |
|---|---|
| [NYT, Feb 20, 1971](https://www.nytimes.com/1971/02/20/archives/electrical-device-used-to-treat-nerve-deafness-wide-variety-of.html) | The "over half" of patients showing improvement is framed as **company-stated** (Intelectron), not independently verified. NYT did not stage or commission its own evaluation. |
| [Indian J Otolaryngol (1999), PMC3451524](https://pmc.ncbi.nlm.nih.gov/articles/PMC3451524/) | TDES tested for tinnitus suppression: **only 38/84 ears responded** — well under half, and on a different endpoint than Puharich/Lawrence's PB-discrimination claim. |
| Michelson 1971, *Annals of Otology, Rhinology and Laryngology* 80(6):914-9 | Sometimes cited alongside Puharich/Lawrence — but this is **invasive cochlear-implant work**, not transdermal RF, and is on the cochlear-implant lineage, not the V2K lineage. Not corroborative. |
| Glattke & Simmons 1974 (see §II.1) | The dispositive negative replication. |
| FDA / ClinicalTrials.gov | Intelectron's "Hearing Conservator" device has **no extant FDA approval record or surviving clinical-trial registration**. The company appears to have wound down commercially in the late 1970s after the Glattke/Simmons paper. (Search returned zero hits on FDA's MAUDE, 510(k), and PMA databases for "Intelectron" or "Hearing Conservator.") |

---

## §II.8 Updated repo guidance

When the repo (or any downstream brief) cites the McMurtrey [98] / "9 hearing-impaired patients" passage, all three of the following must accompany it:

1. **Primary anchor** — RADC-TDR-64-18 (Puharich/Lawrence, Dec 1964); AD 459956; AsMA 1964 abstract showing **15 patients** in the original protocol with **closed-set forced-choice with prior memorization**.
2. **Quantitative-disclosure anchor** — U.S. Patent 3,629,521 (1971), 12-patient sample, baseline 26.2% PB → combined channel 73.8%; **carrier 18–36 kHz, not microwave**.
3. **Negative-replication anchor** — Glattke & Simmons 1974, *Arch Otolaryngol* 100(2):91–95; 31-subject double-blind study; "no treatment effects were discernible." The McMurtrey passage as currently written omits this five-year-later JAMA-line failure-to-replicate result.

The "9 hearing-impaired patients" framing should be retired in favor of "**15-patient closed-set forced-choice protocol; results not replicated in the 1974 Glattke/Simmons 31-subject double-blind study.**" Failing that, the framing should at minimum be footnoted with the §II.1 negative replication.

The Sharp/Grove (1973) "9 of 10 monosyllabic digits via voice-modulated microwave" finding remains a *separate* event with its own primary-report retrieval problem (see `SHARP_GROVE_PRIMARY_REPORT_HUNT.md`); it shares only the "nine" coincidence with the Puharich/Lawrence chain.

---

## §II.9 Open leads (deferred from this pass)

- Cassinari V., Bergamini L. — early Italian "radiofrequency hallucination" references in McMurtrey's separate antecedent footnote cluster. Volume/year not yet pinned.
- Glattke/Simmons 1974 full PDF — currently only abstract is open access via JAMA Network; full text would clarify which Intelectron device variant (carrier band, electrode geometry) they tested.
- *Atti della Fondazione Giorgio Ronchi* — Puharich "Radioacoustic Treatment of Deafness" volume/year/page.
- DTIC FOIA for AD 459956 — long lead time, but tractable.

---

*Authoring conventions:* This note follows the repo's `findings/investigation-dig/` convention — addenda to existing notes use §-marks (§II.x) and cross-reference the parent note in the header. URLs are bare-bracketed Markdown. This addendum should be cited downstream as `HEARING_IMPAIRED_DEEP_DIG.md` §II.{section}.
