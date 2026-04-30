# Sharp/Grove primary technical report hunt

**Date:** 2026-04-29
**Companion to:** `findings/03_Technology_Patents/34_JUSTESEN_1975_APA_MICROWAVE_HEARING.md`,
`V2K_EVIDENCE_MATRIX.md` (speech-evidence trace)

## 0. Why this hunt

The V2K evidence matrix flags an explicit closure target for tier T2 (intelligible
semantic speech via RF hearing): **the underlying Walter Reed / ARPA technical
report behind the Justesen 1975 "nine-word receiverless speech communication"
demonstration by Sharp and Grove.** The Justesen 1975 article cites the
demonstration only as

> "Sharp, J. C., & Grove, M. Personal communication, September 28, 1973"

so the published anchor for the strongest single speech claim in the corpus is
itself a personal communication, not a primary technical report. The closure
question is whether a separate primary report exists in the open record (DTIC,
NTRS, NTIS, peer-reviewed journal) and, if so, what additional protocol detail
it provides (subject count, blinding, error rates, RF parameters, replication).

This file documents the hunt and its outcome.

## 1. Search trail

### 1.1 DTIC public catalog

`discover.dtic.mil` was searched on 2026-04-29 across five strategies:

1. `"Sharp Grove microwave"` — no results
2. `"Joseph Sharp" Walter Reed microwave` — no standalone TR with Sharp as
   primary author
3. `"voice modulated microwave" Walter Reed` — no results
4. `"microwave hearing" "Walter Reed"` — 19 hits, none a primary Sharp/Grove
   speech-transmission report
5. Author-field searches for "Sharp, Joseph" and "Grove, Mark" — no
   author-matched standalone TRs

The closest matches are bibliographic / facility / annual-report records that
cite or index the Sharp/Grove work without containing it:

| AD Number | Title | Org | Relevance |
|-----------|-------|-----|-----------|
| ADA034926 | Biological Effects of Electromagnetic Radiation, Vol. I, No. 1/2, Jun/Sep 74 | Franklin Institute Research Laboratories (bibliography service) | Indexes a Grove, H.M. (WRAIR) abstract on microwave hearing |
| ADA258136 | Behavioral Effects of High Peak Power Microwave Pulses: Head Exposure at 1.3 GHz | Naval Medical Research and Development Command, Bethesda | Cites Sharp/Grove in its references list |
| ADA197116 | Contractor Operated Microwave Exposure Facility, Vol. 3 (1988) | (multi-topic) | Mentions WRAIR microwave hearing program |
| ADA284718 / ADA392971 | Services to Operate and Maintain WRAIR / Microwave Research Facility | WRAIR | Facility-operations reports, not primary research |
| ADA139177 | WRAIR Annual Progress Report | WRAIR | Multi-topic; mentions Sharp |

**Note on the ADA258136 snippet.** A snippet from ADA258136 captured by an
upstream search appeared to attribute the 1973 *Science* paper "Human perception
of illumination with pulsed ultra-high-frequency electromagnetic energy"
(Vol. 181, pp. 356-358) to Sharp and Grove. **This attribution is incorrect.**
The actual authors of that paper are **Allan H. Frey and Rodman Messenger, Jr.**
(PubMed PMID 4719908, confirmed by the Naval Medical Research Institute Glaser
bibliography 1976 which lists the same paper under FREY/MESSENGER, and by the
IEEE T-MTT 1974 "Further Studies on the Microwave Auditory Effect" reference
list which cites it under Frey & Messenger). The Frey/Messenger 1973 *Science*
paper is a peak-power-vs-average-power threshold study for microwave-induced
auditory perception, not a speech-transmission paper.

The misattribution does not change the negative finding: it is one more
indication that the Sharp/Grove speech-transmission demonstration does not
have a primary technical report indexed under their joint authorship in the
open DTIC record.

Search agent record: `dtic_sharp_grove_microwave_search_report.md` (workspace
copy), 2026-04-29.

### 1.2 Authoritative MAE bibliographies

The most authoritative bibliographies on the microwave auditory effect from
the era of the demonstration and the modern era were checked for any primary
Sharp/Grove speech citation:

**Lin, *Microwave Auditory Effects and Applications* (1978)**, the canonical
academic textbook on the MAE, lists in its bibliography (p. 195+) only one
Sharp-authored primary entry:

> Sharp, J. C., Grove, H. M., and Gandhi, O. P.: Generation of acoustic
> signals by pulsed microwave energy. *IEEE Trans Microwave Theory Tech*,
> 22:583-584, 1974.

This 1974 IEEE T-MTT paper is the *mechanism* paper (acoustic signal
generation by pulsed microwave energy in materials), not a speech-transmission
report. Lin's textual treatment of the speech demonstration (p. 176+, around
the description of voice-modulated microwave digit hearing) cites the
demonstration only via "(see Justesen, 1975)." Lin had direct contact with
the field at the time of writing and would have indexed a primary technical
report had one existed.

Source: `https://archive.org/details/microwaveauditor0000linj` (textbook),
local copy at `samim.io/dl/Microwave_Auditory_Effects_And_Applications-Book_by_James_C_Lin_Phd_1978.pdf`.

**Lin, "The Microwave Auditory Effect," IEEE J-ERM 6:16-28 (2022)**, Lin's
most recent comprehensive review, was checked for any newly surfaced primary
Sharp/Grove speech citation. The accessible take-home summary of the review
(`samim.io/p/2022-03-05-the-microwave-auditory-effect-james-c-lin-ieee-jour/`)
contains no mention of a primary Sharp/Grove speech-demo source beyond the
1974 mechanism paper.

**Foster, Garrett, and Ziskin, "Can the Microwave Auditory Effect Be
'Weaponized'?", *Frontiers in Public Health* (PMC8733248, 2021)**, the most
direct modern authority on whether MAE can be operationalized as a weapon, was
checked for any Sharp/Grove citation. The full article and its bibliography
contain **no references** to Sharp, Grove, voice-modulated microwaves, or
speech-modulated microwave demonstrations. Source:
`https://pmc.ncbi.nlm.nih.gov/articles/PMC8733248/`.

**Naval Medical Research Institute, Glaser bibliography (NMRI, 1976)**, the
near-contemporaneous comprehensive RF/microwave bioeffects bibliography
(`https://ehtrust.org/wp-content/uploads/Naval-MRI-Glaser-Report-1976.pdf`),
indexes Frey & Messenger 1973 *Science* 181:356-358 as the
"Human perception of illumination with pulsed ultra-high-frequency
electromagnetic energy" entry, not Sharp & Grove. The Glaser bibliography
covers the open RF bioeffects literature through 1976 and would have indexed
a primary Sharp/Grove speech report had one been issued.

### 1.3 Sharp's own primary publication record

Joseph C. Sharp's primary publication record at Walter Reed includes:

- **Sharp, J. C.: "Visual Deficit in Albino Rats following Fetal X-Irradiation,"
  *Perceptual and Motor Skills* (1963)** — establishes Sharp's WRAIR
  affiliation predates Pandora.
  Source: `https://journals.sagepub.com/doi/10.2466/pms.1963.16.1.291`
- **Sharp, J. C., Grove, H. M., and Gandhi, O. P.: "Generation of acoustic
  signals by pulsed microwave energy," *IEEE Trans Microwave Theory Tech*
  22:583-584 (1974)** — the mechanism paper, cited by Lin 1978.

No third Sharp+Grove primary publication on speech transmission has surfaced
in the open record indexed by Lin 1978, Foster/Garrett/Ziskin 2021, the NMRI
Glaser bibliography, or DTIC.

### 1.4 ARPA / Pandora institutional record

The institutional record on Project Pandora and Project Bizarre (the ARPA
program that funded the Sharp/Grove work) is well-documented through declassified
records and the National Security Archive (see file 34, Part 5-6), but those
records are programmatic / administrative documents (Pandora Operational
Procedure MRT-4-045/QM-66-071, ARPA Director Cesaro's October 1965 Pandora
Justification Memorandum, the 1969 Pandora Science Advisory Committee minutes
on contemplated unwitting human subjects). None of those records is a primary
Sharp/Grove technical report on the speech experiment per se.

## 2. Outcome

The hunt produces a **strong negative finding with one substantive partial
upgrade**, against an evidentiary frame in which Justesen 1975 is
re-classified as the **primary unclassified published account/report of the
Sharp/Grove speech-transmission demonstration** (see §2.3 below). The
distinction this section sustains is between (i) Justesen 1975 as the
contemporary published article that officially details the experiment in the
open literature, citing the underlying experiment to a 28 Sep 1973 personal
communication from Sharp and Grove, and (ii) a separately-authored
Sharp/Grove primary technical report (DTIC TR / NTIS / WRAIR / ARPA
deliverable / standalone peer-reviewed protocol paper), which is what the
hunt fails to locate.

### 2.1 Negative finding (the closure target)

**No standalone Sharp/Grove-authored primary technical report on the
speech-transmission demonstration has been located in the open record
reviewed here.** The absence is consistent across:

- DTIC public catalog (no AD-numbered TR)
- Lin 1978 monograph bibliography (only the 1974 IEEE T-MTT mechanism paper)
- Lin 2022 IEEE review (no new primary citation beyond Lin 1978)
- Foster/Garrett/Ziskin 2021 weaponization review (no Sharp/Grove citations
  at all)
- Naval Medical Research Institute Glaser bibliography 1976 (no Sharp/Grove
  speech entry)

The most parsimonious reading of the open-record evidence is that Sharp and
Grove communicated the speech-transmission demonstration to Justesen as a
personal communication on 28 September 1973, and Justesen's March 1975
*American Psychologist* article is the **primary unclassified published
account/report of the Sharp/Grove speech claim** in the open literature
(see §2.3). A *separately-authored* Sharp/Grove primary technical report
on the speech experiment, if one exists, is either classified (consistent
with the Bizarre special-access category attached to Pandora's most
sensitive behavioral results — see file 34, Part 6), an internal
WRAIR / ARPA deliverable that was not deposited with DTIC under Sharp's
and Grove's joint authorship, or simply was never written as a standalone
technical report.

This narrows but does not collapse T2 (intelligible semantic speech).
Justesen 1975 *American Psychologist* remains the peer-reviewed primary
unclassified published account/report of the speech demonstration in the
open literature. What is now established with confidence is that **no
separately-authored Sharp/Grove primary technical report has been located
in the open record** to provide protocol-grade detail (subject count beyond
the named investigators, sham controls, blinding, scoring method, error
distribution, full RF parameters, independent replication) above and beyond
what Justesen reports.

### 2.2 Substantive partial upgrade

The hunt did surface a primary Sharp/Grove peer-reviewed publication that is
not the speech paper, but is mechanism-relevant and was already in Lin 1978's
bibliography:

> **Sharp, J. C., Grove, H. M., and Gandhi, O. P.:** "Generation of acoustic
> signals by pulsed microwave energy." *IEEE Trans Microwave Theory Tech*,
> 22:583-584, 1974.

This 1974 IEEE T-MTT paper provides primary-source confirmation that Sharp
and Grove were active microwave-acoustic-effect investigators in the same
period as the speech demonstration, and that they worked with Om P. Gandhi
(University of Utah, a major figure in RF dosimetry). This strengthens the
*institutional and research-program plausibility* of the speech demonstration
as described to Justesen, even though it is not itself the speech-protocol
report.

The CIA FOIA records (CIA-RDP80-01601R000300340036-6 and -041-0), the
National Security Archive 2022 briefing book on Project Pandora, and the
IEEE Xplore historical review of the Moscow Embassy microwave signal
(see file 34, Part 5) collectively document the institutional ecosystem
(WRAIR, ARPA, Cesaro, Pandora, Bizarre, Walter Reed transfer 1970, Sharp as
Bizarre principal investigator) at high confidence. What remains thinly
sourced is the specific speech-protocol record itself.

### 2.3 Evidentiary classification of Justesen 1975 and Lin 1978

To prevent drift, this hunt fixes the following classifications, which are
applied consistently throughout the file (and which match the language used
in [`AD_A090426_REFERENCE_CHAIN_EVIDENCE.md`](AD_A090426_REFERENCE_CHAIN_EVIDENCE.md) §1.8):

- **Justesen, D. R. (1975).** *Microwaves and behavior.* American
  Psychologist 30(3):391–401. PubMed [PMID 1137231](https://pubmed.ncbi.nlm.nih.gov/1137231/)
  (no abstract available on PubMed); DOI [10.1037/0003-066X.30.3.391](https://doi.org/10.1037/0003-066X.30.3.391)
  (APA record confirms title, volume, issue, pages, year, and a topical
  abstract on RF / microwaves in psychology, Soviet involvement, wave
  theory, and methodological/instrumentation issues). **Classification:**
  *primary unclassified published account/report of the Sharp/Grove speech
  claim.* It is the contemporary published article that officially details
  the experiment in the open literature (the line "Sharp and Grove (Note 2)
  found that appropriate modulation of microwave energy can result in
  direct 'wireless' and 'receiverless' communication of SPEECH" with Note 2
  reading "Sharp, J. C., & Grove, M. Personal communication, Sept. 28,
  1973"). Its underlying source for the *experiment itself* is, by
  Justesen's own footnote, a personal communication from Sharp and Grove,
  not an independently-authored Sharp/Grove protocol paper. Treating
  Justesen 1975 as the primary unclassified published account/report does
  **not** elevate it to a separately-authored Sharp/Grove primary
  technical report, and does **not** close the protocol-grade questions
  (subject count beyond the named investigators, blinding, sham controls,
  scoring method, error distribution, full RF parameters, independent
  replication) that a standalone protocol report would address.
- **Lin, J. C. (1978).** *Microwave Auditory Effects and Applications.*
  Charles C. Thomas. **Classification:** *authoritative later monograph /
  secondary technical synthesis.* Lin 1978 expands the technical
  description of the demonstration (zero-crossing-triggered pulse
  modulation, self-irradiation, ten single-syllable digits, ceiling at
  simple words because of the 10 mW/cm² exposure guide — see §4.1) but
  cites the demonstration itself back to "(see Justesen, 1975)," not to
  an independent Sharp/Grove primary. Lin's bibliography lists only the
  Sharp/Grove/Gandhi 1974 IEEE T-MTT mechanism letter under Sharp's
  authorship.
- **Lin, J. C. (2022).** *The Microwave Auditory Effect.* IEEE J-ERM
  6:16–28. **Classification:** modern authoritative review; surfaces no
  new primary Sharp/Grove speech citation beyond what Lin 1978 already
  carries.
- **Pandora / WRAIR program-and-personnel records** (CIA-RDP80-01601R000300340036-6,
  CIA-RDP80-01601R000300340041-0, WHS Operational Procedure for Project
  Pandora MRT-4-045/QM-66-071, National Security Archive 2022 briefing
  book). **Classification:** program / personnel context only — establishes
  Sharp and Grove inside the WRAIR/ARPA microwave-bioeffects ecosystem at
  high confidence; contains no speech-protocol content.
- **Later USAF patents and SBIR (US 6,587,729 B2; US 6,470,214 B1;
  US 4,877,027 A; SBIR F41624-93-C-9013).** **Classification:** later R&D
  branch — does not cite a Sharp/Grove primary speech report as prior art
  and does not constitute primary evidence for the 1973 demonstration.

The Justesen 1975 → Lin 1978 → Lin 2022 chain therefore reads as
*primary published account → authoritative later technical synthesis →
modern review*, with the underlying experiment itself rooted (per Justesen
Note 2) in a Sharp/Grove personal communication of 28 September 1973 and
**no standalone Sharp/Grove-authored protocol paper or technical report
located in the open record**.

## 3. Tier impact

The V2K evidence matrix tier assessments should be updated as follows
(safe-phrasing form):

- **T1 (RF hearing mechanism):** unchanged — strongly supported.
- **T2 (intelligible semantic speech via RF hearing):** **strengthened** as a
  published historical claim by the Justesen 1975 *American Psychologist*
  article (the **primary unclassified published account/report** of the
  Sharp/Grove speech claim — see §2.3), with cross-corroboration from CIA
  FOIA records, the National Security Archive 2022 briefing book, the IEEE
  Xplore historical review, Lin 1978's authoritative later monograph /
  secondary technical synthesis of the demonstration, and Sharp & Grove's
  own 1974 IEEE T-MTT mechanism paper. **A separately-authored Sharp/Grove
  primary technical report (DTIC TR / NTIS / WRAIR / ARPA deliverable /
  standalone peer-reviewed protocol paper) has not been located in the open
  record reviewed here**, so the demonstration is not closed at
  protocol grade beyond what Justesen reports (subject count, blinding,
  sham controls, error distribution, replication).
- **T3 (patents and programs):** unchanged — supported, with the Sharp et al.
  1974 IEEE T-MTT paper now explicitly logged as a primary research-program
  artifact.
- **T4 (operational deployment):** unchanged — not established in the open
  record.
- **T5 (symptom / legal / media context):** unchanged — context only.

The corpus's strongest single-paragraph safe phrasing on the Sharp/Grove
speech demonstration becomes:

> The Justesen 1975 *American Psychologist* article (Vol. 30, No. 3, pp.
> 391-401; PMID 1137231; DOI 10.1037/0003-066X.30.3.391) is the **primary
> unclassified published account/report** of a Walter Reed Army Institute
> of Research demonstration by Joseph C. Sharp and Mark Grove, conducted
> under ARPA funding, in which the analog voice waveforms of the spoken
> digits "one" through "ten" were used to trigger pulsed microwave
> emissions whose negative-zero-crossing pulses were perceived as nine of
> the ten spoken words by the investigators when they irradiated
> themselves. Justesen cites the underlying experiment as "Sharp, J. C., &
> Grove, M. Personal communication, September 28, 1973," so the published
> primary account rests, by Justesen's own footnote, on a personal
> communication from Sharp and Grove. Sharp and Grove's primary
> peer-reviewed publication from the same period is the *mechanism* paper
> "Generation of acoustic signals by pulsed microwave energy," IEEE Trans
> Microwave Theory Tech 22:583-584 (1974), which is not a speech-protocol
> report. Lin 1978 *Microwave Auditory Effects and Applications* is an
> authoritative later monograph that expands the technical description of
> the demonstration but cites the demonstration itself back to Justesen
> 1975, not to a separately-authored Sharp/Grove primary. The
> institutional ecosystem (WRAIR, ARPA Project Pandora and the Bizarre
> special-access compartment) is documented at high confidence by CIA FOIA
> records and the National Security Archive 2022 briefing book on the
> Moscow Embassy microwave signal, but those records are program/personnel
> context, not speech-protocol records. A separately-authored Walter
> Reed / ARPA Sharp/Grove speech-protocol technical report has not been
> located in the open DTIC catalog, in Lin's 1978 or 2022 reviews, in
> Foster/Garrett/Ziskin's 2021 weaponization review, or in the Naval
> Medical Research Institute Glaser 1976 bibliography. Treating Justesen
> 1975 as the primary unclassified published account/report of the
> Sharp/Grove speech claim, with the personal-communication caveat intact
> for the underlying experiment, is the disciplined position consistent
> with the open-record evidence.

## 4. 2026-04-29 dig: secondary-chain consolidation, program context, later R&D branch

This section logs a follow-on pass that materially clarifies what the open
record does and does not say about the Sharp/Grove speech demonstration. The
net effect is to **narrow** the claim, not broaden it: the four evidence
buckets below are now better separated, and none of them upgrades the
Sharp/Grove speech account from secondary (personal-communication-rooted) to
primary (protocol-grade, independently authored, peer-reviewed).

### 4.1 Justesen / Lin secondary chain — exact wording recovered

The Lin 1978 monograph p. 176 passage, recovered from
`https://samim.io/dl/Microwave_Auditory_Effects_And_Applications-Book_by_James_C_Lin_Phd_1978.pdf`
(catalog corroboration: WorldCat
`https://search.worldcat.org/title/Microwave-auditory-effects-and-applications/oclc/643721075`,
NLM catalog
`https://catalog.nlm.nih.gov/discovery/fulldisplay?vid=01NLM_INST%3A01NLM_INST&search_scope=MyInstitution&tab=LibraryCatalog&docid=alma994914563406676&lang=en&context=L&adaptor=Local+Search_Engine&query=lds56%2Ccontains%2CNoise%2C+Occupational%2CAND&mode=advanced&offset=130`,
Archive.org `https://archive.org/details/microwaveauditor0000linj`), reads:

> "Direct communication of speech via appropriate modulation of microwave
> energy has been demonstrated by Sharp and Grove (see Justesen, 1975).
> They tape recorded each of the single-syllable words for digits between
> one and ten. The speech waveforms of each word were then converted to
> digital signals in such a fashion that each time an analog speech wave
> crossed the zero reference in the negative direction, a short pulse of
> microwave energy was emitted from the transmitter. By radiating
> themselves with the 'speech modulated' microwave energy, Sharp and Grove
> reported they were able to hear, identify, and distinguish the words
> tested. Communication of more complex words and sentences was not
> attempted because the average power density required to transmit these
> messages would exceed the current 10 mW/cm² guide for safe exposure..."

**Classification.** Lin 1978 is an **authoritative later monograph /
secondary technical synthesis** (per §2.3) and its description of the
experimental method is internally specific (zero-crossing-triggered pulse
modulation, self-irradiation, ten single-syllable digits, ceiling at simple
words because of the 10 mW/cm² exposure guide). However, for the speech
demonstration itself **Lin cites back to Justesen 1975**, not to a
separately-authored Sharp/Grove primary technical report. Lin's
bibliography lists only Sharp/Grove/Gandhi 1974 IEEE T-MTT (the mechanism
paper) under Sharp's authorship.

This passage therefore strengthens the **Justesen 1975 (primary
unclassified published account/report) → Lin 1978 (authoritative later
secondary technical synthesis) chain**. It does not constitute a
separately-authored primary recovery: Lin's text is a textbook restatement
of what Justesen 1975 reported, with the citation trail still terminating
at "Sharp, J. C., & Grove, M. Personal communication, September 28, 1973."

### 4.2 1999 bionet hard-copy bounty (provenance marker, non-authoritative)

A November 1999 bionet.neuroscience post offered "$300 for verifiable
hard-copy documentation of Dr. Joseph C. Sharp's verbal pulsed microwave
voice-to-skull success at WRAIR, or other verifiable successes" and stated
that the closest documentation known to the poster at that date was Don R.
Justesen, "Microwaves and Behavior," *American Psychologist*, March 1975,
pp. 391-401. The post quoted the Justesen passage, reproduced Note 2
("Sharp, J. C., & Grove, M. Personal communication, Sept. 28, 1973"),
interpreted "personal communication" as conversation rather than written
documentation, and as of 7 Nov 1999 reported "None" for new updates.

Source: `http://www.bio.net/bionet-archive/bioforum/1999-November/030064.html`

**Classification.** This is a non-authoritative public-seeker post, not
evidence of the experiment's existence or non-existence. Its evidentiary
weight is limited to a **provenance marker**: as of November 1999, motivated
public seekers had not surfaced hard-copy primary documentation of the
Sharp/Grove speech experiment, and a small bounty for such documentation
went unfulfilled. It is consistent with the negative finding in §2.1 of
this file but does not, on its own, prove anything about the underlying
event. Do not treat as proof.

### 4.3 CIA Reading Room — Anderson Washington Post clipping, 10 May 1972

Document: CIA-RDP80-01601R000300340041-0 (released 8 January 2001),
Jack Anderson, "'Brainwash' Attempt by Russians?", *The Washington Post*,
10 May 1972.

- HTML: `https://www.cia.gov/readingroom/document/cia-rdp80-01601r000300340041-0`
- PDF: `https://www.cia.gov/readingroom/docs/CIA-RDP80-01601R000300340041-0.pdf`

The clipping names Operation Pandora; Joseph Sharp at Walter Reed; H. Mark
Grove at the Air Force; Herbert Pollack; and Richard Cesaro. It states that
Sharp and Grove were supplied with the Moscow Embassy microwave-signal
parameters and duplicated the embassy environment using monkeys at Walter
Reed. A footnote records that Cesaro, Pollack, Sharp, Zaret, and Grove
acknowledged Pandora when contacted but refused to discuss details, with
Sharp adding that Pandora "was classified then and still was."

**The clipping makes no mention of microwave auditory perception, RF
hearing, voice modulation, speech transmission, or any auditory effect.**
It is program-and-personnel context for Sharp/Grove at WRAIR/ARPA in the
embassy-signal duplication line of work.

**Classification.** Program/personnel context only. Does not corroborate
the speech protocol or even the auditory line of investigation; corroborates
that Sharp and Grove were paired on Pandora-related microwave work at
WRAIR by the early 1970s.

### 4.4 WHS / DoD Project Pandora — official operational procedure file

Document: "Operational Procedure for Project Pandora Microwave Test
Facility," MRT-4-045/QM-66-071 (October 1966) and Project Pandora final
report MRT-4-046/QM-66-072/DRC-H-9331-00 (November 1966), E.V. Byron, with
follow-on metadata covering ARPA Orders 791, 796, 945, and 1508; transfer
of the program to WRAIR on 1 July 1970; and a stated $4,615,000 total
program cost across 1965-1970.

Source: `https://www.esd.whs.mil/Portals/54/Documents/FOID/Reading%20Room/Other/Operational_Procedure_For_Project_Pandora.pdf`

Personnel logged in the file include H. Mark Grove, T. Daryl Hawkins,
Joseph C. Sharp, Richard Cesaro, Herbert Pollack, and Joseph V. Brady.
Facility/equipment specifics include WRAIR Forest Glen Annex Building 503,
S-band 2.6-3.95 GHz, 1-10 mW/cm² rabbit exposures, 4-5 mW/cm² primate
exposures, and a simulated Moscow / WRAIR signal with documented modulation.

**The file makes no mention of speech transmission, voice-modulated
microwaves, RF hearing, or auditory perception.** It is a facility,
exposure-protocol, and personnel record.

**Classification.** Official program/personnel context. Places Sharp and
Grove inside the WRAIR/ARPA microwave-bioeffects ecosystem at high
confidence (independently of the press clipping in §4.3) but does not
corroborate the speech experiment.

### 4.5 Later Air Force / SBIR communication branch (do not conflate with Sharp/Grove primary)

Three patents and one later SBIR award were checked to see whether the
"intelligible speech via RF hearing" lineage cites a Sharp/Grove primary
report as prior art. None do.

| Source | URL | Cites Sharp/Grove as primary? | Notes |
|---|---|---|---|
| O'Loughlin & Loree, US 6,587,729 B2 (USAF) | `https://patents.google.com/patent/US6587729B2/en` | No | Cites Frey-line and Lin-line prior art in extracted text. Contains an explicit acknowledgement that pulsed-carrier modulation can induce simple tones but **severely distorts complex speech**, and that listeners who do not know the content perceive an "unintelligible" audio signal. |
| O'Loughlin & Loree, US 6,470,214 B1 (USAF) | `https://patents.google.com/patent/US6470214B1/en` | No | Companion AF patent in the same family; same lack of Sharp/Grove primary citation; same intelligibility caveat. |
| Brunkan, US 4,877,027 A | `https://patents.google.com/patent/US4877027A/en` | No | Cites Frey *Science* 1973 and Lin pp. 176-177 but not Sharp/Grove or Justesen explicitly. Routes through the Lin secondary chain. |
| Brian Kohn / Science & Engineering Associates, SBIR AF93-026, contract F41624-93-C-9013, Phase 1 1993, $37,806 | mirror at `http://gbppr.net/mil/mindcontrol/raven1/v2s-kohn.htm` (sbir.gov searches in this pass returned no result) | No | Mirror metadata describes a feasibility extension for Armstrong Laboratory / OEDR on RF-hearing voice communications. Mirror only; not located on official SBIR portal in this check. |

**Classification.** A **later R&D branch**, not corroboration of the 1973
Sharp/Grove speech demonstration. The two USAF patents are also a partial
**technical counterweight** to naive readings of the Sharp/Grove account:
they record on the face of the patent that simple zero-crossing
pulse-modulation schemes do not yield reliably intelligible complex speech,
which is consistent with Lin 1978's note that Sharp and Grove did not
attempt complex words or sentences.

### 4.6 Modern mechanism / weaponization review (already logged)

Foster, Garrett, Ziskin 2021, "Can the Microwave Auditory Effect Be
'Weaponized'?", PMC8733248 (`https://pmc.ncbi.nlm.nih.gov/articles/PMC8733248/`).
Already discussed in §1.2: contains no Sharp/Grove citations, no speech
claims; concludes that weaponization for speech is unlikely on practicality
grounds while noting that lack of public information leaves the question
not fully resolvable. Re-logged here for completeness of the four-bucket
classification.

### 4.7 Net classification table

| Bucket | Sources | What it shows | What it does NOT show |
|---|---|---|---|
| (a) Justesen 1975 primary published account + Lin 1978/2022 secondary technical synthesis | Justesen 1975 *Am Psychol* (PMID 1137231; DOI 10.1037/0003-066X.30.3.391) — primary unclassified published account/report of the Sharp/Grove speech claim; Lin 1978 monograph p. 176 — authoritative later monograph / secondary technical synthesis citing Justesen 1975; Lin 2022 IEEE J-ERM review — modern review with no new primary citation | Published, peer-respected primary account (Justesen 1975) plus authoritative later technical synthesis (Lin 1978) of the speech demonstration with internally specific method detail | A separately-authored Sharp/Grove primary technical report (DTIC TR / NTIS / WRAIR / ARPA deliverable / standalone protocol paper); the citation trail for the underlying experiment still terminates at a 28 Sep 1973 personal communication |
| (b) Pandora / WRAIR program & personnel context | CIA-RDP80-01601R000300340041-0 (Anderson 1972 clipping); WHS Operational Procedure for Project Pandora MRT-4-045/QM-66-071 (1966); CIA-RDP80-01601R000300340036-6; National Security Archive 2022 briefing book | Sharp and Grove were inside WRAIR/ARPA microwave bioeffects work in the 1965-1973 window; ARPA/Pandora budget, facility, and exposure parameters are documented | Any reference to speech transmission, voice modulation, RF hearing, or auditory perception in those program records |
| (c) Later AF patent / SBIR speech-via-RF-hearing branch | US 6,587,729 B2; US 6,470,214 B1; US 4,877,027 A; SBIR F41624-93-C-9013 (mirror) | A continued R&D interest in RF-hearing-based audio/speech communication into the 1990s-2000s | Any citation back to a Sharp/Grove primary speech report; the AF patents in fact note intelligibility limitations of naive pulse-modulation schemes |
| (d) Modern RF-hearing mechanism / practicality reviews | Foster/Garrett/Ziskin 2021 (PMC8733248); Elder/Chou 2003 (already in repo); Lin 2022 review | Independent confirmation of the underlying thermoacoustic mechanism and a guarded modern read on weaponization practicality | Any new primary Sharp/Grove documentation; in fact, Foster/Garrett/Ziskin 2021 contains no Sharp/Grove citation at all |

### 4.8 Sharp/Grove/Gandhi 1974 IEEE T-MTT — DOI confirmed

The mechanism paper is now logged with a stable DOI:

> Sharp, J. C., Grove, H. M., Gandhi, O. P., "Generation of Acoustic
> Signals by Pulsed Microwave Energy (Letters)," *IEEE Trans Microwave
> Theory and Techniques*, 22(5):583-584, May 1974,
> `https://doi.org/10.1109/TMTT.1974.1128293`.

This is an academic-search confirmation (IEEE Xplore DOI resolves) of the
existing Lin 1978 bibliography entry. It remains a **mechanism /
acoustic-signal-generation** paper, not a speech-protocol report.

### 4.9 Net conclusion of this pass

The Sharp/Grove speech account is now better mapped. The **primary
unclassified published account/report** of the experiment is Justesen 1975
(PMID 1137231; DOI 10.1037/0003-066X.30.3.391); a **separately-authored
Sharp/Grove primary technical report** (DTIC TR / NTIS / WRAIR / ARPA
deliverable / standalone peer-reviewed protocol paper) is **still not
located in the open record**. The disciplined safe-phrasing form of the
claim becomes:

> The Sharp/Grove ten-digit speech demonstration is anchored by Justesen
> 1975 *American Psychologist* — the primary unclassified published
> account/report of the experiment in the open literature — followed by
> Lin 1978 *Microwave Auditory Effects and Applications* and Lin 2022
> IEEE J-ERM, which are authoritative later monograph / review-grade
> secondary technical syntheses citing Justesen 1975. Justesen's account
> roots, by his own footnote, in a 28 Sep 1973 personal communication
> from Sharp and Grove; no separately-authored Walter Reed / ARPA
> Sharp/Grove primary technical report has been located in the open
> record. Independent program/personnel context
> (CIA-RDP80-01601R000300340041-0; WHS Operational Procedure for Project
> Pandora; National Security Archive 2022 briefing book) establishes
> Sharp and Grove inside the WRAIR/ARPA microwave-bioeffects ecosystem in
> the relevant window but does **not** corroborate the speech protocol.
> A later USAF patent / SBIR branch on RF-hearing-based voice
> communication (US 6,587,729 B2; US 6,470,214 B1; SBIR F41624-93-C-9013)
> exists but does not cite a Sharp/Grove primary report and explicitly
> notes intelligibility limitations of naive pulse-modulation schemes.
> Modern mechanism / practicality reviews (Foster/Garrett/Ziskin 2021;
> Lin 2022) confirm the underlying thermoacoustic effect and treat
> weaponized speech as practicality-limited; none cite Sharp/Grove. A
> November 1999 public bounty for hard-copy Sharp/Grove primary
> documentation went unfulfilled, which is a non-authoritative provenance
> marker only.

This pass therefore **narrows** the Sharp/Grove speech claim rather than
expands it. T2 (intelligible semantic speech via RF hearing) remains
strengthened as a *published historical claim* via Justesen 1975 (primary
account) and Lin 1978/2022 (secondary technical synthesis), and weakened
as a *protocol-grade established result above and beyond Justesen 1975*
because no separately-authored Sharp/Grove primary technical report has
surfaced.

## 5. External sources

- Justesen 1975, "Microwaves and Behavior," *American Psychologist*
  30(3):391-401 — DOI `https://doi.org/10.1037/0003-066X.30.3.391`
  (APA record confirms title, volume, issue, pages, year, and a topical
  abstract on RF / microwaves in psychology, Soviet involvement, wave
  theory, and methodological/instrumentation issues); PubMed
  `https://pubmed.ncbi.nlm.nih.gov/1137231/` (PMID 1137231; no abstract
  available on PubMed). Classified in this file as the **primary
  unclassified published account/report of the Sharp/Grove speech claim**
  (see §2.3).
- Sharp, Grove, Gandhi 1974, "Generation of acoustic signals by pulsed
  microwave energy," IEEE T-MTT 22:583-584 — referenced in Lin 1978
  bibliography
- Lin 1978, *Microwave Auditory Effects and Applications*, Charles C. Thomas
  — `https://archive.org/details/microwaveauditor0000linj`
- Lin 2022, "The Microwave Auditory Effect," IEEE J-ERM 6:16-28 —
  `https://samim.io/p/2022-03-05-the-microwave-auditory-effect-james-c-lin-ieee-jour/`
- Foster, Garrett, Ziskin 2021, "Can the Microwave Auditory Effect Be
  'Weaponized'?", *Frontiers in Public Health* —
  `https://pmc.ncbi.nlm.nih.gov/articles/PMC8733248/`
- Frey & Messenger 1973, "Human perception of illumination with pulsed
  ultrahigh-frequency electromagnetic energy," *Science* 181:356-358
  (PubMed PMID 4719908) — `https://pubmed.ncbi.nlm.nih.gov/4719908/`
  (note: not a Sharp/Grove paper; documented here to correct a snippet-level
  misattribution that surfaced during the search)
- Naval Medical Research Institute, Glaser bibliography 1976 —
  `https://ehtrust.org/wp-content/uploads/Naval-MRI-Glaser-Report-1976.pdf`
- DTIC public search catalog — `https://discover.dtic.mil/`
- CIA FOIA records on Operation Pandora —
  `https://www.cia.gov/readingroom/document/cia-rdp80-01601r000300340036-6`
  and `https://www.cia.gov/readingroom/document/cia-rdp80-01601r000300340041-0`
- National Security Archive, "Moscow Signals Declassified" briefing book
  (2022) — `https://nsarchive.gwu.edu/briefing-book/intelligence-russia-programs/2022-09-13/moscow-signals-declassified-microwave`
- Lin 1978 (mirror, full PDF) —
  `https://samim.io/dl/Microwave_Auditory_Effects_And_Applications-Book_by_James_C_Lin_Phd_1978.pdf`
- Lin 1978 (WorldCat catalog record) —
  `https://search.worldcat.org/title/Microwave-auditory-effects-and-applications/oclc/643721075`
- Lin 1978 (NLM catalog record) —
  `https://catalog.nlm.nih.gov/discovery/fulldisplay?vid=01NLM_INST%3A01NLM_INST&search_scope=MyInstitution&tab=LibraryCatalog&docid=alma994914563406676&lang=en&context=L&adaptor=Local+Search_Engine&query=lds56%2Ccontains%2CNoise%2C+Occupational%2CAND&mode=advanced&offset=130`
- bionet.neuroscience hard-copy bounty post (1999-11) —
  `http://www.bio.net/bionet-archive/bioforum/1999-November/030064.html`
- CIA-RDP80-01601R000300340041-0 (Anderson, *Washington Post*, 10 May 1972,
  "'Brainwash' Attempt by Russians?") — HTML
  `https://www.cia.gov/readingroom/document/cia-rdp80-01601r000300340041-0`;
  PDF
  `https://www.cia.gov/readingroom/docs/CIA-RDP80-01601R000300340041-0.pdf`
- WHS / DoD Operational Procedure for Project Pandora Microwave Test
  Facility, MRT-4-045/QM-66-071, October 1966 (E.V. Byron) —
  `https://www.esd.whs.mil/Portals/54/Documents/FOID/Reading%20Room/Other/Operational_Procedure_For_Project_Pandora.pdf`
- O'Loughlin & Loree, US 6,587,729 B2 (USAF) —
  `https://patents.google.com/patent/US6587729B2/en`
- O'Loughlin & Loree, US 6,470,214 B1 (USAF) —
  `https://patents.google.com/patent/US6470214B1/en`
- Brunkan, US 4,877,027 A —
  `https://patents.google.com/patent/US4877027A/en`
- SBIR Brian Kohn / Science & Engineering Associates, AF93-026, contract
  F41624-93-C-9013 (1993, mirror only; sbir.gov current search returned no
  result in this pass) —
  `http://gbppr.net/mil/mindcontrol/raven1/v2s-kohn.htm`
- Sharp, Grove, Gandhi 1974, IEEE T-MTT (DOI) —
  `https://doi.org/10.1109/TMTT.1974.1128293`

## 6. 2026-04-29 deeper-hunt pass: locator leads, indexed-reference evidence, and bioeffects-lineage cross-checks

This section logs a follow-on pass focused on five external-source leads that
sit *adjacent* to the Sharp/Grove speech question but, when checked against
their primary records or visible metadata, do **not** upgrade the speech
account from secondary (personal-communication-rooted, Justesen-1975 anchored)
to primary (separately-authored, protocol-grade). Each lead is documented with
its source URL, what its visible record actually says, and an explicit
classification. The overall conclusion is unchanged: **Justesen 1975 remains
the primary unclassified published account/report of the Sharp/Grove speech
claim, and no separately-authored Sharp/Grove primary technical report on the
speech demonstration has been located in the open record.** What this pass
adds is (a) a sharper map of the surrounding bioeffects/lethality lineage at
WRAIR/SRI in 1973-1974 and (b) an indexed-reference locator lead pointing
toward an obscure WRAIR "Progress Report" attributed to Sharp, Grove, and
Hawkins, which is **not** confirmed at primary-source / publisher full-record
grade in this pass and which, even if confirmed, is by topical context a
bioeffects entry rather than a speech-protocol source.

### 6.1 USNC/URSI 1975 Boulder proceedings (PB268094) — official NTRL record, microwave-auditory context only

- **Live record:** [NTRL titleDetail / PB268094](https://ntrl.ntis.gov/NTRL/dashboard/searchResults/titleDetail/PB268094.xhtml)
- **Title (verbatim):** "Biological Effects of Electromagnetic Waves.
  Selected Papers of the USNC/URSI Annual Meeting Held at Boulder, Colorado
  on October 20-23, 1975. Volume I."
- **Publication date:** 1977.
- **Personal authors / editors:** Johnson, C.; Shore, M. **Corporate
  author:** Bureau of Radiological Health / WHO Collaborating Center and
  USNC/URSI. **Page count:** 510. **Document type:** Technical Report.
  **NTIS issue:** 197718. **Supplemental note:** see Volume 2, PB268095.
- **Relevant partial contents (visible NTRL metadata):** "Theoretical
  analysis of microwave-generated auditory effects in animals and man" and
  "Microwave-induced auditory response — cochlear microphonics."
- **Negative metadata check:** the NTRL record metadata visible in this pass
  contains **no mentions** of Sharp, Grove, Walter Reed, WRAIR, speech,
  voice, or RF sound.
- **Classification:** **microwave-auditory context / proceedings locator
  only.** PB268094 is a useful proceedings locator for the broader
  microwave-auditory-effect community in the 1975 window (it is the same
  Boulder USNC/URSI meeting whose proceedings host much of the 1975-era
  RF-bioeffects literature), but it is **not** a direct Sharp/Grove primary
  source and **not** the missing speech primary. Its visible metadata does
  not reference the Sharp/Grove speech demonstration. Treat as a
  proceedings/community-locator lead, not a protocol-grade speech source.
  Does not alter the Justesen 1975 classification.

### 6.2 Glaser / NMRI bibliography supplement-family negative cross-check

- **Live record:** [Glaser 1976 PDF (ehtrust mirror)](https://ehtrust.org/wp-content/uploads/Naval-MRI-Glaser-Report-1976.pdf)
- **Official title:** "Bibliography of Reported Biological Phenomena
  ('Effects') and Clinical Manifestations Attributed to Microwave and
  Radio-Frequency Radiation: Compilation and Integration of Report and Seven
  Supplements," Zorach R. Glaser, Patricia F. Brown, Maire S. Brown,
  September 27, 1976.
- **Continuation / supplement family extracted in this pass:** the Glaser
  report-and-supplement family includes AD734391 (original), AD750271
  (revised report), AD770621 (fourth supplement), AD784007 (fifth
  supplement), A015622 (sixth supplement), A025354, and AD-A029430 (eighth
  supplement, **noted in the search snippet as not included** in the 1976
  compilation). This is useful retrieval-hygiene metadata for any future
  attempt to mine the Glaser supplement chain for an AD-numbered Sharp/Grove
  or WRAIR speech entry.
- **Negative content check:** targeted extraction of the visible Glaser
  text returned **no explicit matches** for Sharp, Grove, Hawkins, WRAIR,
  "Biological Effects of Microwave Radiation," "Progress Report," pp. 1073-
  1074, or AD758136; no speech / voice / auditory / RF-sound entry surfaced
  in the extracted text. (The Glaser PDF is also large enough that
  extraction was not exhaustive; see also `ad758136_hunt/AD758136_HUNT_LOG.md`
  for prior fetch difficulty against this same mirror.)
- **Classification:** **bibliography / report-number-family retrieval-
  hygiene lead.** The Glaser supplement chain is the right place to look
  for a 1973-1976 WRAIR-internal microwave-bioeffects entry, and the
  extracted AD-number set is a useful next-step locator. Current extraction
  in this pass does **not** provide a Sharp/Grove speech entry or a WRAIR
  progress-report entry. Does not alter the Justesen 1975 classification.

### 6.3 Berman 1985 / WRAIR "Progress Report" indexed-reference lead — locator only, not a confirmed primary

- **Wiley article (publisher record):** [J. Appl. Toxicol. 5(1):23-31, Feb 1985](https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/10.1002/jat.2550050105),
  DOI 10.1002/jat.2550050105.
- **Title and authors:** "Lethality in mice and rats exposed to 2450 MHz
  circularly polarized microwaves as a function of exposure duration and
  environmental factors," E. Berman, *Journal of Applied Toxicology*,
  Vol. 5 Issue 1, pages 23-31, February 1985. The publisher's visible page
  in this pass did **not** expose the full reference list at full-record
  grade; the article topic is animal microwave lethality, **not** speech or
  auditory effects.
- **Indexed-reference snippet (use cautiously):** a search/SciOn snippet /
  metadata view surfaced a reference-line text reading
  > "J. C. Sharp, H. M. Grove and T. D. Hawkins, *Biological Effects of
  > Microwave Radiation, Progress Report* of Walter Reed Army Instit. of
  > Research, pp. 1073-1074 (1973)."
  This is **indexed-reference / search-snippet evidence**, not a
  publisher-confirmed full reference list; the publisher page in this pass
  did not surface the full bibliography for direct verification.
- **Topical reading:** Berman 1985 is a microwave-lethality paper, and the
  "Progress Report" so titled is consistent with a WRAIR-internal
  bioeffects/lethality progress document indexed under Sharp + Grove +
  Hawkins joint authorship. The pp. 1073-1074 page range strongly suggests
  a *short entry within a larger composite WRAIR progress volume* (a
  page-range that is implausible for a 35-page standalone TR). Either way,
  the topical context of Berman 1985 is animal lethality / 2450 MHz
  exposure, not speech transmission.
- **Classification:** **material locator lead for an unpublished or
  obscure WRAIR progress-report family** (probably bioeffects / lethality
  context). **Not** evidence of a speech protocol; **not** a confirmed
  primary. Until the publisher full-text reference list, a DTIC AD record,
  or a holding-library record can be matched to this exact title and page
  range, treat as an indexed-reference lead only. Does not alter the
  Justesen 1975 classification.

### 6.4 SRI rat mortality report (Polson et al. 1974, full PDF) — bioeffects-lineage primary, no speech content; "Sharp personal communication" in this report concerns spontaneous tail amputation

- **Live record:** [Magda Havas mirror PDF](https://www.magdahavas.com/wp-content/uploads/2010/09/Mortarity_in_Rats_Exposed_to_CW_Microwave_Radiation.pdf)
- **Title and authors:** "Mortality in Rats Exposed to CW Microwave
  Radiation at 0.95, 2.45, 4.54, and 7.44 GHz." P. Polson, D. C. L. Jones,
  A. Karp, J. S. Krebs. **Final Technical Report, Type III; January 1974;
  Contract DAAK02-73-C-0453; SRI Project 2777; reporting period 1 July to
  31 December 1973.** This is the full-PDF version of AD774823 (Oscar 1980
  Ref 3, classified in [`AD_A090426_REFERENCE_CHAIN_EVIDENCE.md`](AD_A090426_REFERENCE_CHAIN_EVIDENCE.md)
  §1.3 as lethality / dosimetry background).
- **Reference list (visible in mirror PDF) includes:**
  - **H. Mark Grove**, "Biological Effects of Electromagnetic Radiation: A
    Bibliography," Behavioral Radiology Lab., WRAIR, Washington, D.C.
    (1971), **AD 887119**.
  - **T. Daryl Hawkins et al.**, "Some Biological Effects of Microwave
    Irradiation in the Rat," Department of Microwave Research, WRAIR,
    Washington, D.C. (March 1973). (This is the AD758136 entry —
    cross-references [`ad758136_hunt/AD758136_HUNT_LOG.md`](ad758136_hunt/AD758136_HUNT_LOG.md);
    pinning the SRI report to the same Hawkins et al. 1973 WRAIR entry
    further hardens AD758136's identity at full-PDF reference-list grade.)
  - **Dr. J. Sharp, WRAIR, personal communication.**
- **Body content (visible in mirror PDF):** the report mentions the WRAIR
  group and "a recent preliminary report of WRAIR research on rats
  irradiated with 10-cm-wavelength CW microwave radiation"; the **Sharp
  personal communication** in this Polson et al. 1974 report is logged in
  the body as relating to **spontaneous tail amputation in surviving rats
  after 3.0 GHz irradiation**, i.e., a lethality / bioeffects observation.
  The report contains **no mention** of speech transmission, voice
  modulation, RF hearing, or auditory perception attributable to Sharp or
  Grove.
- **Classification:** **bioeffects / lethality lineage primary; not a
  speech-evidence anchor.** Materially strengthens the AD758136 / WRAIR
  bioeffects family and personnel-overlap picture: Polson et al. 1974
  independently confirms (a) Grove's 1971 WRAIR bibliography (AD887119) as
  a real, AD-numbered Behavioral Radiology Lab artifact; (b) Hawkins et
  al. March 1973 WRAIR Department of Microwave Research as a real
  contemporaneous entry (i.e., AD758136); and (c) ongoing WRAIR-to-SRI
  personal-communication links between Sharp and the SRI mortality program
  in 1973-1974, on a lethality topic (tail amputation), **not** a speech
  topic. Does not alter the Justesen 1975 classification, and reinforces
  the §6.3 reading that any "Sharp + Grove + Hawkins" WRAIR composite from
  1973 is bioeffects / lethality material rather than a speech-protocol
  document.

### 6.5 PNNL/OSTI 1978 SPS bioeffects review (Justesen et al., PNL-2634) — RF-hearing background only, no Sharp/Grove primary surfaced

- **Live record:** [OSTI / PNL-2634 (May 1978)](https://www.osti.gov/servlets/purl/1069245)
- **Title and authors:** "Compilation and Assessment of Microwave
  Bioeffects: A Selective Review of the Literature on Biological Effects
  of Microwaves in Relation to the Satellite Power System." Final Report,
  PNL-2634, May 1978. Authors: D. R. Justesen, H. A. Ragan, L. E. Rogers,
  A. W. Guy, D. L. Hjeresen, W. T. Hinds; project manager R. D. Phillips.
- **Visible RF-hearing content:** the review surfaces Justesen 1975a in
  its RF-hearing / Frey-effect discussion and notes that "a single
  10-microsecond pulse depositing ~10 microjoules/g in the head can
  produce acoustic response," with cited mechanism / threshold sources
  including Frey 1962, Chou/Guy/Galambos 1977, Guy/Chou/Lin/Christensen
  1975, Foster/Finch 1974, and White 1963. The visible text contains
  **no speech / voice / words** content and **no Grove** reference; the
  only "J. Sharp" identifier in the visible record is in the **distribution
  list at NASA Ames**, which is administrative routing, not a citation of
  a Sharp primary speech source.
- **Classification:** **RF-hearing mechanism / background review.**
  PNL-2634 is a strong downstream secondary review supporting the reality
  of RF hearing and its threshold mechanics, but it surfaces **no
  standalone Sharp/Grove primary report** and **no speech-corroborating
  reference**. Aligns with the Foster/Garrett/Ziskin 2021 and Elder/Chou
  2003 mechanism-review pattern (§§1.2, 4.6 above; §1.8 of
  [`AD_A090426_REFERENCE_CHAIN_EVIDENCE.md`](AD_A090426_REFERENCE_CHAIN_EVIDENCE.md)):
  RF-hearing is treated as real and thermoelastic, but Sharp/Grove
  speech-protocol corroboration is absent. Does not alter the Justesen
  1975 classification.

### 6.6 AGU/Wiley Radio Science 1977 — Hawkins/Grove/Heiple/Schrot 1973 antecedent confirmation (already in chain)

AGU/Wiley snippets surfaced **Hawkins, Grove, Heiple, Schrot (1973),
"Some Biological Effects of Microwave Irradiation in the Rat,"** as a cited
antecedent in the 1977 Radio Science papers in the broader USNC/URSI 1975
proceedings volume. This is consistent with the Glaser 1976 +
Polson et al. 1974 + Oscar 1980 Ref 2 triangulation already documented in
[`ad758136_hunt/AD758136_HUNT_LOG.md`](ad758136_hunt/AD758136_HUNT_LOG.md)
("Citation triangulation" section) and in
[`AD_A090426_REFERENCE_CHAIN_EVIDENCE.md`](AD_A090426_REFERENCE_CHAIN_EVIDENCE.md) §1.2.
**Classification:** further confirmation of the bioeffects lineage of
AD758136 at indexed-reference grade. Use exact citation language
cautiously (snippet-only, not full-record) where the publisher full-text
was not directly fetched in this pass. Not a speech-evidence anchor.

### 6.7 Net effect of the 6.x deeper-hunt pass

- **Bioeffects/lethality lineage at WRAIR/SRI (1971-1974) is now better
  documented at primary-PDF grade** via the Polson et al. 1974 SRI mirror
  (§6.4), which independently confirms Grove 1971 AD887119, Hawkins et
  al. March 1973 (AD758136), and a Sharp personal-communication link to
  the SRI lethality program (on tail amputation, not speech). This
  strengthens the **lineage** picture without strengthening the **speech**
  picture.
- **An indexed-reference locator lead** (§6.3, Berman 1985 reference 24)
  points to a WRAIR "Progress Report" attributed to Sharp + Grove + Hawkins
  1973 with a pp. 1073-1074 page range. This is **not** a confirmed primary
  in this pass (publisher full reference list not visible in fetch); the
  pp. 1073-1074 page range is consistent with a short entry inside a larger
  composite WRAIR progress volume rather than a 35-page standalone TR; and
  the topical context (Berman 1985 is a lethality paper) is bioeffects, not
  speech. Treat as a locator lead for further DTIC / NTIS / library work,
  not as primary speech evidence.
- **No new primary Sharp/Grove speech-protocol report has surfaced.** The
  1975 USNC/URSI proceedings (PB268094, §6.1) and the 1978 PNNL/OSTI SPS
  review (PNL-2634, §6.5) both touch the microwave-auditory-effect
  community at exactly the right window and neither surfaces a separately-
  authored Sharp/Grove speech primary. The Glaser 1976 supplement family
  (§6.2) — the natural retrieval-hygiene mirror — likewise does not
  surface one in the extracted text. Justesen 1975 *American Psychologist*
  (PMID 1137231; DOI 10.1037/0003-066X.30.3.391) **remains** the primary
  unclassified published account/report of the Sharp/Grove speech claim,
  with the underlying experiment sourced by Justesen himself to a
  28 September 1973 personal communication from Sharp and Grove, and **no
  separately-authored Sharp/Grove primary technical report on the speech
  experiment located in the open record**.

### 6.8 External sources added in this pass

- USNC/URSI 1975 Boulder proceedings (PB268094) NTRL record —
  `https://ntrl.ntis.gov/NTRL/dashboard/searchResults/titleDetail/PB268094.xhtml`
- Glaser / NMRI 1976 bibliography (ehtrust mirror), supplement-family
  retrieval-hygiene reference —
  `https://ehtrust.org/wp-content/uploads/Naval-MRI-Glaser-Report-1976.pdf`
- Berman 1985 *J. Appl. Toxicol.* 5(1):23-31 (publisher page; reference 24
  surfaced as indexed-reference snippet only) —
  `https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/10.1002/jat.2550050105`
- Polson et al. 1974 SRI rat mortality report (full PDF mirror) —
  `https://www.magdahavas.com/wp-content/uploads/2010/09/Mortarity_in_Rats_Exposed_to_CW_Microwave_Radiation.pdf`
- PNNL/OSTI 1978 PNL-2634 SPS bioeffects review (Justesen et al.) —
  `https://www.osti.gov/servlets/purl/1069245`

---

## §7. RESOLUTION OF §6.3 (Berman 1985 ref 24) — see addendum

**As of 2026-04-29**, the Berman 1985 ref 24 lead (§6.3) has been fully resolved:

- **Cited document**: DTIC **AD-776967**, *Research in Biological and Medical Sciences ... Annual Progress Report 1 July 1972 – 30 June 1973, Volume II*, Walter Reed Army Institute of Research, **RCS MEDDH-288(R1)**.
- **Cited pages 1073-1074**: Inside Project 3A062110A824, Work Unit 057 — "Biological effects and hazards of microwave radiation" — with Sharp (PI), Grove, Hawkins, Githens, Hirsch, Larsen, Schrot, Brown.
- **Topic at pp. 1073-1074**: Rat lethality at 3.0 GHz and 2.45 GHz, frequency-dependent operant-performance decrement (1.7 GHz peak), mouse/rat/rabbit species lethality comparisons. **No speech, no auditory, no microwave-hearing, no V2K content.**
- **Implication**: Berman 1985 ref 24 is a topically-appropriate lethality citation within Berman's own lethality paper, and does NOT corroborate the V2K speech-transmission lineage. The Justesen 1975 *American Psychologist* article remains the sole unclassified contemporaneous published account of the September 1973 Sharp/Grove speech demo.

Full forensic detail (verbatim transcription of pp. 1073-1074, whole-volume topical search, cross-checks against §6.3's earlier negative findings, and FY74 follow-on candidates AD-A009337/AD-A009338): see **`BERMAN_1985_REF24_CHASE.md`** (companion file in this directory).

Local PDF + OCR archived in `findings/investigation-dig/ad776967_berman_ref24/`.
