# AD-A090426 — Reference-Chain Evidence Trail

**Date:** 2026-04-29
**Purpose:** Document, at a per-reference level, what each cited antecedent of Oscar 1980 (AD-A090426) actually says according to its primary catalog/abstract record, and where it sits in the broader V2K evidence chain. This is a citation-hygiene companion note to:

- [`AD_A090426_OSCAR_1980_PRIMARY_REVIEW.md`](AD_A090426_OSCAR_1980_PRIMARY_REVIEW.md) — body-level review of AD-A090426 itself.
- [`BECKER_1985_AND_AD_A090426_DEEP_DIG.md`](BECKER_1985_AND_AD_A090426_DEEP_DIG.md) — page-pinning of Becker quotes and primary recovery of AD-A090426.
- `V2K_EVIDENCE_MATRIX.md` — top-level matrix.

The objective is to keep the language guarded: each cited antecedent is classified by what its own primary record establishes, *not* by what later secondary literature has read into it. Several entries here narrow rather than broaden the speech-protocol claim — that is intentional.

---

## 1 · Per-reference classifications (catalog-level)

Each row pins the antecedent to its authoritative live record (NTRL/PubMed/DOI), then states (a) what its own abstract/metadata establishes and (b) the role we attribute to it within the V2K chain. Classifications used:

- **Primary RF-sound predecessor** — phenomenology of the microwave auditory effect.
- **Speech-attempt, negative method result** — explicitly tried to use a method to generate speech and reported it did not work.
- **BBB / permeability lineage** — blood–brain-barrier permeability work, separate from speech.
- **Lethality / dosimetry background** — dose-response / mortality / thermal data, not speech or auditory.
- **Citation-hygiene issue** — reference-line ambiguity or likely OCR/normalization error.
- **Operational speech protocol** — would be a primary report containing power level, modulation, intelligibility scores, blinding, transcripts. **None of the antecedents reviewed here meet this bar.**

### 1.1 Ref 1 — Frey, Messenger, Eichert (1972), AD747684

- **Live record:** [NTRL titleDetail / AD747684](https://ntrl.ntis.gov/NTRL/dashboard/searchResults/titleDetail/AD747684.xhtml). Official DTIC citation page also accessible: [DTIC citations / AD0747684](https://apps.dtic.mil/sti/citations/AD0747684) (accession `AD0747684`, descriptive note "Final rept. Feb 1971-Apr 1972", report date 1972-06-01, media count 32.0, corporate author "RANDOMLINE INC HUNTINGDON VALLEY PA").
- **Title:** *A Psychophysical Study of the RF Sound Phenomenon.*
- **Authors:** Frey, A. H.; Messenger, R.; Eichert, E.
- **Year / pages / type:** 1972; 38 pages; Technical Report.
- **Corporate author:** Randomline Inc., Willow Grove, PA.
- **Contract:** DAAK02-71-C-0213.
- **Abstract (verbatim from NTRL record):** Objective to obtain additional data on the RF sound phenomenon; a portable RF sound demonstration unit was assembled and successfully used to demonstrate the phenomenon and its characteristics; RF parameters were determined; the possibility of inducing the perception of speech was explored; aspects of vocoder technology could not be used to generate speech; the perceived RF sound cannot be generated using the rules of the periodicity pitch phenomenon.
- **Keywords (verbatim):** Psychophysics; Sound; Auditory perception; Radiofrequency; Speech; Hearing; Sound pitch.
- **DTIC citation cross-check (2026-04-29 pass):** The DTIC official citation page reproduces the same negative speech-generation language as NTRL — the abstract text on `apps.dtic.mil/sti/citations/AD0747684` records that "aspects of vocoder technology could not be used to generate speech" and that "perceived RF sound cannot be generated using periodicity-pitch rules". This is an **official citation confirmation** of the negative method result — both authoritative US-government catalog mirrors agree on the speech-attempt language. Direct DTIC PDF paths (`https://apps.dtic.mil/sti/pdfs/AD0747684.pdf`, `https://apps.dtic.mil/sti/tr/pdf/AD0747684.pdf`) returned `bad_robots_code` on this fetch, so the full PDF was not obtained from DTIC in this pass; the citation-page abstract is the highest-grade record currently in hand.
- **Catalog variance (NTRL vs. DTIC), non-substantive:** NTRL records the accession as `AD747684`, the corporate author city as "Willow Grove PA", and 38 pages; the DTIC citation page records `AD0747684`, "Huntingdon Valley PA", and a media count of 32.0. Treat as **catalog variance** (accession-zero-padding and address/page-count cataloguing differences across DTIC and NTRL), not a substantive conflict — the title, authors, abstract, year, and contract are concordant across both records.
- **Classification used here:** **Primary RF-sound predecessor** *and* **speech-attempt, negative method result.** AD747684 is the most important antecedent of the speech-protocol question recovered in this pass: it is the paper that *explicitly explored the possibility of inducing perception of speech* and reported that the methods tried (vocoder-style, periodicity-pitch) did **not** generate speech. This is a load-bearing finding: the earliest primary in this lineage that targets the speech question reports a negative method result, not an operational speech protocol.
- **Net effect on T2:** Narrows rather than supports the protocol-grade speech claim. Future T2 closure must contend with the fact that the immediate-predecessor primary cited inline with Oscar's "intelligible speech may be created" sentence is, by its own abstract, a **failure to generate speech** by the methods Frey/Messenger/Eichert tried in 1972.

### 1.2 Ref 2 — Hawkins, Grove, Heiple, Schrot (1973), AD758136

- **Status from earlier closure pass:** No new primary found; DTIC public mirror returns 403 across all AD-number variants attempted; citation triangulated via Glaser 1976, AGU 1977, and Oscar 1980 Ref 2 (see [`ad758136_hunt/AD758136_HUNT_LOG.md`](ad758136_hunt/AD758136_HUNT_LOG.md) and prior commit `6ff68a7`).
- **Role within Oscar 1980:** Cited as a **frequency / polarisation / lethality / behavioural-decrement** background reference, not as a speech-protocol report (see [`AD_A090426_OSCAR_1980_PRIMARY_REVIEW.md`](AD_A090426_OSCAR_1980_PRIMARY_REVIEW.md) §4).
- **Classification used here:** Lethality / dosimetry / behavioural-decrement background. Open at primary grade pending DTIC access; not a speech-protocol candidate based on the role Oscar 1980 assigns to it.

### 1.3 Ref 3 — Polson, Jones, Karp, Krebs (1974), AD774823

- **Live record:** [NTRL titleDetail / AD774823](https://ntrl.ntis.gov/NTRL/dashboard/searchResults/titleDetail/AD774823.xhtml).
- **Title:** *Mortality in Rats Exposed to CW Microwave Radiation at 0.95, 2.45, 4.54, and 7.44 GHz.*
- **Authors:** Polson, P.; Jones, D. C. L.; Karp, A.; Krebs, J. S.
- **Year / pages / type:** 1974; 102 pages.
- **Corporate author:** Stanford Research Institute, Menlo Park, CA.
- **Contract:** DAAK02-73-C-0453.
- **Abstract (paraphrased from NTRL record):** Dose-response lethality data for approximately 1,400 male Sprague-Dawley rats exposed frontally to CW microwave radiation in the 0.9–8 GHz range, at frequencies 0.95 / 2.45 / 4.54 / 7.44 GHz; power densities 0.2–12 W/cm²; lethal exposure durations 10–300 s; cause of death attributed to nasal/lung congestion, hemorrhage, and edema; LD50 curves and a dose-response model are reported.
- **Keywords:** No metadata mention of speech, auditory perception, or behavior.
- **Classification used here:** **Lethality / dosimetry background.** This is the SRI co-program's mortality / dose-response study. It is part of the multi-institution program that Oscar 1980 references as a backdrop, but it does not bear on the speech-protocol question. Including it here is a guard against future drift in which "SRI co-program" might be misread as a speech-evidence anchor.

### 1.4 Ref 4 — Oscar, Hawkins (1977), Brain Research 126:281–293

- **Live record:** [PubMed PMID 861720](https://pubmed.ncbi.nlm.nih.gov/861720/). DOI [10.1016/0006-8993(77)90726-0](https://doi.org/10.1016/0006-8993(77)90726-0).
- **Title:** *Microwave alteration of the blood-brain barrier system of rats.*
- **Authors:** K. J. Oscar; T. D. Hawkins.
- **Venue / date:** Brain Research, 1977 May 6; 126(2):281–93.
- **Abstract (paraphrased from PubMed record):** Rats were exposed to 1.3 GHz microwave energy. A single 20-minute pulsed or CW exposure induced increased uptake of D-mannitol at average power densities below 3.0 mW/cm². The greatest BBB-permeability change was observed in medulla, then cerebellum and hypothalamus. The effect was seen for mannitol and inulin but not dextran. Effects were present immediately and at 4 h post-exposure but not at 24 h. Pulse characteristics affected uptake. The authors interpret the data as a temporary BBB permeability change for small saccharides.
- **Speech / auditory content:** None — no discussion of RF sound, speech, or auditory perception.
- **Classification used here:** **BBB / permeability lineage.** This is Oscar's own peer-reviewed antecedent to AD-A090426, three years upstream. It anchors the *physiological-effect* lineage in which AD-A090426 sits, but is irrelevant to the speech-protocol question.

### 1.5 Ref 5 — Justesen (1979), IEEE Spectrum 16:67–68 (likely citation-hygiene issue)

- **Status:** AD-A090426's reference list was previously transcribed as `Justesen, D.R., IEEE Spectrum 16, 67–68 (1979)`. Targeted searches and accessible records do not surface a Justesen *IEEE Spectrum* item at that locator, but they consistently surface a closely related item:
  - **Justesen, D. R. (1980).** *Microwave irradiation and the blood-brain barrier.* **Proceedings of the IEEE 68(1): 60–67.**
  - Citation evidence, multiple independent records: [ScienceOn / KISTI NART18400761](https://scienceon.kisti.re.kr/srch/selectPORSrchArticle.do?cn=NART18400761) (lists Proceedings of the IEEE v.68 no.1, 1980, pp.60–67); [National Academies / NCBI Bookshelf NBK208983](https://www.ncbi.nlm.nih.gov/books/NBK208983/) (references "Justesen, D. R. 1980. Microwave irradiation and the blood-brain barrier. Proc. IEEE 68:60-67."); JSTOR / search-engine snippets corroborate the same locator. We did not obtain the IEEE full text or DOI in this pass.
- **Classification used here:** **Citation-hygiene issue / likely OCR-or-reference-line ambiguity.** Treat the AD-A090426 reference line as ambiguous between *IEEE Spectrum* (16, 67–68) and *Proceedings of the IEEE* (68, 60–67). The Proc. IEEE 1980 BBB-review item fits the surrounding BBB-context of Oscar 1980 better than a 1979 *IEEE Spectrum* short item would. Do **not** claim the full Proc. IEEE 1980 paper has been reviewed in this repo — only the citation-record metadata. From the bibliographic context this is BBB-review material, not a primary speech protocol.

### 1.6 Ref 18 — Frey, Messenger (1973), Science 181:356–358

- **Live record:** DOI [10.1126/science.181.4097.356](https://doi.org/10.1126/science.181.4097.356).
- **Classification used here:** **Primary RF-sound predecessor.** Peer-reviewed human perception of pulsed UHF energy as sound. Already in our chain. Supports the RF auditory effect; does **not** report a speech protocol.

### 1.7 Ref 22 — Wilson et al. (1980), Brain Research

- **Live record:** [OUCI](https://ouci.dntb.gov.ua/en/works/4EbDwRBl/), DOI [10.1016/0006-8993(80)90204-8](https://doi.org/10.1016/0006-8993(80)90204-8).
- **Topic:** Rat auditory-nuclei glucose uptake after microwave radiation.
- **Classification used here:** **Independent auditory-structures connection** — not speech, but provides an independent in vivo metabolic signature for auditory-system involvement that complements Oscar 1980's LCBF inferior-colliculus-first finding.

### 1.8 Adjacent (not in Oscar's reference list, but in the broader chain)

- **Sharp, Grove, Gandhi (1974), IEEE TMTT 22:583–584.** DOI [10.1109/TMTT.1974.1128293](https://doi.org/10.1109/TMTT.1974.1128293). Title (verbatim from DOI metadata, 2026-04-29 re-check): *Generation of Acoustic Signals by Pulsed Microwave Energy (Letters)*; IEEE Transactions on Microwave Theory and Techniques, vol. 22, no. 5, pp. 583–584, May 1974. Visible DOI metadata describes "production of sound when short microwave pulses are directed at an absorber" and "possible mechanisms" that "may help understand microwave hearing"; no mention of speech or voice transmission appears in the visible DOI metadata. Mechanism / acoustic-signal generation by pulsed microwave energy in absorbers and aluminium-foil targets. **Mechanism paper, not speech protocol — no speech-protocol corroboration found in the DOI record.** Already in repo as `findings/investigation-dig/sharp-grove-gandhi-1974.pdf`.
- **Justesen (1975), American Psychologist 30: 391–401.** PubMed [PMID 1137231](https://pubmed.ncbi.nlm.nih.gov/1137231/) (no abstract available on PubMed); DOI [10.1037/0003-066X.30.3.391](https://doi.org/10.1037/0003-066X.30.3.391) (APA record confirms title "Microwaves and behavior," American Psychologist 30(3):391–401, 1975, with a topical abstract on RF / microwaves in psychology, Soviet involvement, wave theory, historical developments, and methodological / instrumentation issues). Source of the popularised "Sharp & Grove" pairing — the article line reads "Sharp and Grove (Note 2) found that appropriate modulation of microwave energy can result in direct 'wireless' and 'receiverless' communication of SPEECH," with Note 2 reading "Sharp, J. C., & Grove, M. Personal communication, Sept. 28, 1973." **Classification used here:** *primary unclassified published account/report of the Sharp/Grove speech claim* — Justesen 1975 is the contemporary published article that officially details the experiment in the open literature. The underlying experiment, however, is sourced by Justesen himself to a 28 Sep 1973 personal communication from Sharp and Grove, **not** to a separately-authored Sharp/Grove primary protocol paper or technical report. No standalone Sharp/Grove-authored speech-protocol report has been located in the open record (see [`SHARP_GROVE_PRIMARY_REPORT_HUNT.md`](SHARP_GROVE_PRIMARY_REPORT_HUNT.md) §2.3 for the consolidated classification). This continues to be the single most important citation-hygiene caveat across the V2K chain: Justesen 1975 is the primary published account, but the underlying experimental record above and beyond Justesen's report (subject count, blinding, sham controls, scoring method, error distribution, full RF parameters, replication) has not been independently located.
- **Lin (1978), *Microwave Auditory Effects and Applications*, Charles C. Thomas.** **Classification used here:** *authoritative later monograph / secondary technical synthesis.* Lin 1978 expands the technical description of the Sharp/Grove demonstration on p. 176 (zero-crossing-triggered pulse modulation, self-irradiation, ten single-syllable digits, 10 mW/cm² ceiling) but cites the demonstration itself back to Justesen 1975, not to a separately-authored Sharp/Grove primary. Lin 2022 IEEE J-ERM 6:16–28 is its modern-review counterpart; same citation pattern, no new primary surfaces.
- **Elder, Chou (2003), Bioelectromagnetics Suppl. 6: S162–S173.** PMID [14628312](https://pubmed.ncbi.nlm.nih.gov/14628312/); DOI [10.1002/bem.10163](https://onlinelibrary.wiley.com/doi/pdf/10.1002/bem.10163). Title: *Auditory response to pulsed radiofrequency energy.* Authors: J. A. Elder; C. K. Chou. Abstract (paraphrased from PubMed/Wiley): RF hearing is well-established; perceived sounds are low-intensity clicks/buzz/hiss/knock/chirp; effective frequencies span ~2.4–10000 MHz; the effect depends on high-frequency acoustic hearing above ~5 kHz; the conversion site is within or peripheral to the cochlea; the fundamental frequency of the perceived sound depends on head dimensions (not RF carrier frequency); response depends on energy in a single pulse, not average power density; the weight of evidence supports a thermoelastic-expansion mechanism; threshold temperature rise is on the order of 5×10⁻⁶ °C; RF-induced sounds at exposures many orders of magnitude above the hearing threshold are characterised as a biological effect without a health effect. Visible passages cited Foster/Finch 1974 pressure waves and Guy/Lin/Joines/Gandhi modelling; full-text extraction in this pass found **no Sharp/Grove mentions and no speech mentions** in the review. **Classification used here: downstream RF-hearing mechanism review.** Elder/Chou 2003 is a strong downstream secondary review supporting the reality of RF hearing as a low-intensity, cochlear/peripheral, thermoelastic phenomenon — it does **not** corroborate a speech-transmission protocol, and it does not surface a Sharp/Grove primary. PDF/text of this review is mirrored in repo as `findings/investigation-dig/elder-chou-rf-hearing-review.pdf` / `.txt`.

## 2 · Replication caveat: BBB lineage is not unanimous

The BBB / permeability lineage that AD-A090426 leans on (Ref 4, Oscar/Hawkins 1977; the Justesen 1980 Proc. IEEE BBB review captured under §1.5) is contested in the contemporaneous primary literature:

- **Merritt, Chamness, Allen (1978).** *Studies on blood-brain barrier permeability after microwave-radiation.* Radiat. Environ. Biophys. 1978 Dec 22; 15(4):367–377. DOI [10.1007/BF01323461](https://doi.org/10.1007/BF01323461). [PubMed PMID 756056](https://pubmed.ncbi.nlm.nih.gov/756056/).
- **Findings (paraphrased from PubMed record):** Replication attempts found no transfer of fluorescein after a 30-minute 1.2-GHz exposure at 2–75 mW/cm²; no increase of 14C-mannitol with pulsed 1.3-GHz up to 20 mW/cm² or CW 0.1–50 mW/cm²; a serotonin attempt was unsuccessful; changes appeared only in association with hyperthermia.

**Classification used here:** Immediate replication caveat for the BBB / permeability lineage. **Not** a refutation of Oscar 1980's *speech background paragraph* — the speech paragraph is upstream-of-Frey/Messenger phenomenology, not BBB permeability. The replication caveat is recorded so that any future T1/T2 argument that leans on BBB-permeability findings to corroborate the speech mechanism is forced to confront the Merritt 1978 negative result rather than ignore it.

## 3 · What this reference-chain pass narrows

Pulling each cited antecedent down to its own primary record (or, where unavailable, its authoritative catalog record) tightens the language we use about AD-A090426 in three ways:

1. **The closest-upstream speech-attempt primary reports a negative method result.** AD747684 (Frey/Messenger/Eichert 1972) — Oscar's Ref 1, cited inline with the auditory-perception sentence immediately preceding the "intelligible speech may be created" claim — explicitly explored the possibility of inducing speech and found that the vocoder-style and periodicity-pitch methods tried did not generate speech. This is consistent with Oscar's own modal verb "*may be created*" (conditional, not asserted-as-demonstrated), and consistent with the persistent inability to locate a primary protocol-grade Sharp/Grove report. It does **not** show that intelligible-speech generation is impossible — it shows that the methods tried in 1972 did not work.
2. **The SRI co-program reference is a lethality / dosimetry study, not a speech study.** AD774823 (Polson/Jones/Karp/Krebs 1974) is purely lethality / dose-response work. Reading the multi-institution Army × SRI × WRAIR × NMRI × NIH program as a speech-evidence cluster would over-read the record; SRI's documented contribution is mortality and thermal dosimetry.
3. **The Oscar/Hawkins 1977 antecedent is BBB-permeability, not speech.** AD-A090426's own peer-reviewed predecessor is BBB physiology. The speech sentence in AD-A090426 is therefore not a downstream restatement of a peer-reviewed Oscar speech result — it is a *programmatic background statement*, citing the broader RF-sound lineage, embedded in a paper whose own experimental contribution is rat LCBF.

### 3.1 · 2026-04-29 source-cross-check increment

A targeted source cross-check pass on three records (AD747684 DTIC official citation page; Elder & Chou 2003 PubMed/Wiley; Sharp/Grove/Gandhi 1974 DOI metadata) further hardens the existing classifications without changing the net conclusion:

- **AD747684 — official citation confirmation.** The DTIC citation page at `apps.dtic.mil/sti/citations/AD0747684` reproduces the same negative speech-generation language as NTRL. Two authoritative US-government catalog mirrors now independently record the speech-attempt-and-failure abstract. Catalog variance (AD747684 vs. AD0747684; Willow Grove PA vs. Huntingdon Valley PA; 38 pp. vs. 32.0 media count) is non-substantive — it is accession zero-padding and address/page-count cataloguing differences, not a content conflict.
- **Elder & Chou 2003 — downstream RF-hearing mechanism review, no speech-protocol corroboration.** A full-text extraction pass on the Bioelectromagnetics 2003 review found no Sharp/Grove mentions and no speech mentions. The review supports the reality of RF hearing as a low-intensity, cochlear/peripheral, thermoelastic biological effect; it does not corroborate a speech-transmission protocol.
- **Sharp/Grove/Gandhi 1974 IEEE TMTT — mechanism paper, no speech-protocol corroboration.** The visible DOI metadata for `10.1109/TMTT.1974.1128293` describes acoustic-signal generation in absorbers by pulsed microwave energy and possible mechanisms relevant to microwave hearing. Speech and voice transmission are not mentioned in the visible DOI record.

**Net effect on the chain:** The closest-upstream speech-attempt primary (AD747684) is now confirmed by both NTRL and DTIC official citation pages to report a negative method result; the strongest downstream mechanism review (Elder/Chou 2003) supports RF hearing as real but is silent on Sharp/Grove and on speech; the Sharp/Grove/Gandhi 1974 mechanism letter remains a mechanism paper. None of these cross-checks surfaces a primary protocol-grade speech report. The Sharp/Grove speech protocol therefore **remains not located in the open primary record.**

## 4 · What this reference-chain pass does NOT change

- **The verbatim status of the Oscar 1980 Background paragraph is unchanged.** The "intelligible speech may be created" sentence remains primary-grade verified at federal-command level (US Army MERADCOM, 1980, UNCLASSIFIED, DTIC-mirrored) — see [`AD_A090426_OSCAR_1980_PRIMARY_REVIEW.md`](AD_A090426_OSCAR_1980_PRIMARY_REVIEW.md) §2 and [`BECKER_1985_AND_AD_A090426_DEEP_DIG.md`](BECKER_1985_AND_AD_A090426_DEEP_DIG.md) §2.3.
- **The T3 anchor is unchanged.** Oscar 1980 remains a federal-command-level acknowledgment of a "decoy and deception concept presently being considered" that includes intelligible-speech generation. The DTIC primary subject descriptor `*DECEPTION` on the catalog record is independent corroboration of that framing.
- **Becker 1985 page pinning is unchanged.** *The Body Electric*, Ch. 15 "Maxwell's Silver Hammer", section "Invisible Warfare", pp. 319–321 — see [`BECKER_1985_AND_AD_A090426_DEEP_DIG.md`](BECKER_1985_AND_AD_A090426_DEEP_DIG.md) §1.2.
- **No separately-authored Sharp/Grove primary speech-protocol report has been located in this pass.** Justesen 1975 American Psychologist (PMID 1137231; DOI 10.1037/0003-066X.30.3.391) is classified here as the **primary unclassified published account/report of the Sharp/Grove speech claim** (the contemporary published article in the open literature), with the underlying experiment sourced by Justesen himself to a 28 Sep 1973 personal communication from Sharp and Grove, not to a separately-authored Sharp/Grove protocol paper or technical report. The protocol-grade T2 question — power level, modulation, intelligibility scoring, blinding, transcripts, replication — remains open above and beyond what Justesen 1975 reports. See [`SHARP_GROVE_PRIMARY_REPORT_HUNT.md`](SHARP_GROVE_PRIMARY_REPORT_HUNT.md) §2.3 for the consolidated Justesen-1975-as-primary-account / Lin-1978-as-secondary-synthesis classification.

## 5 · Authoritative URLs (consolidated)

| Reference | Live record |
|---|---|
| AD-A090426 (Oscar 1980, MERADCOM) | https://ntrl.ntis.gov/NTRL/dashboard/searchResults/titleDetail/ADA090426.xhtml ; https://apps.dtic.mil/sti/pdfs/ADA090426.pdf |
| AD747684 (Frey/Messenger/Eichert 1972) | https://ntrl.ntis.gov/NTRL/dashboard/searchResults/titleDetail/AD747684.xhtml |
| AD0747684 (DTIC official citation page) | https://apps.dtic.mil/sti/citations/AD0747684 |
| AD774823 (Polson et al. 1974, SRI) | https://ntrl.ntis.gov/NTRL/dashboard/searchResults/titleDetail/AD774823.xhtml |
| Oscar/Hawkins 1977 (BBB, Brain Research) | https://pubmed.ncbi.nlm.nih.gov/861720/ ; https://doi.org/10.1016/0006-8993(77)90726-0 |
| Merritt/Chamness/Allen 1978 (BBB replication) | https://pubmed.ncbi.nlm.nih.gov/756056/ ; https://doi.org/10.1007/BF01323461 |
| Justesen 1980 Proc. IEEE BBB review (citation-hygiene candidate) | https://scienceon.kisti.re.kr/srch/selectPORSrchArticle.do?cn=NART18400761 ; https://www.ncbi.nlm.nih.gov/books/NBK208983/ |
| Frey/Messenger 1973 Science | https://doi.org/10.1126/science.181.4097.356 |
| Sharp/Grove/Gandhi 1974 IEEE TMTT (mechanism) | https://doi.org/10.1109/TMTT.1974.1128293 |
| Justesen 1975 American Psychologist (primary unclassified published account/report of the Sharp/Grove speech claim) | https://pubmed.ncbi.nlm.nih.gov/1137231/ ; https://doi.org/10.1037/0003-066X.30.3.391 |
| Elder/Chou 2003 Bioelectromagnetics (RF-hearing mechanism review) | https://pubmed.ncbi.nlm.nih.gov/14628312/ ; https://onlinelibrary.wiley.com/doi/pdf/10.1002/bem.10163 |
| Wilson et al. 1980 Brain Research (auditory nuclei glucose) | https://ouci.dntb.gov.ua/en/works/4EbDwRBl/ ; https://doi.org/10.1016/0006-8993(80)90204-8 |
| Oscar et al. 1981 Brain Research (peer-reviewed follow-up to AD-A090426) | https://pubmed.ncbi.nlm.nih.gov/7248750/ |

## 6 · Cross-references inside this repo

- [`AD_A090426_OSCAR_1980_PRIMARY_REVIEW.md`](AD_A090426_OSCAR_1980_PRIMARY_REVIEW.md) — body-level review of AD-A090426 itself.
- [`BECKER_1985_AND_AD_A090426_DEEP_DIG.md`](BECKER_1985_AND_AD_A090426_DEEP_DIG.md) — page-pinning of Becker quotes; primary recovery of AD-A090426; reference-list mining.
- [`AD_A090426_OSCAR_1980_subagent_report.md`](AD_A090426_OSCAR_1980_subagent_report.md) — independent subagent corroboration.
- [`ad758136_hunt/AD758136_HUNT_LOG.md`](ad758136_hunt/AD758136_HUNT_LOG.md) — open thread on AD758136 (DTIC 403).
- [`SHARP_GROVE_PRIMARY_REPORT_HUNT.md`](SHARP_GROVE_PRIMARY_REPORT_HUNT.md) — open thread on the Sharp/Grove primary protocol report. See §4 (2026-04-29 dig) for the four-bucket classification of the secondary chain (Justesen/Lin), the Pandora/WRAIR program/personnel context (CIA-RDP80-01601R000300340041-0; WHS Operational Procedure for Project Pandora), the later USAF / SBIR RF-hearing branch (US 6,587,729 B2; US 6,470,214 B1; SBIR F41624-93-C-9013), and the modern mechanism / practicality reviews (Foster/Garrett/Ziskin 2021), with the net finding that the Sharp/Grove speech account remains **not located in the open primary record**.
- `V2K_EVIDENCE_MATRIX.md` — top-level matrix.
