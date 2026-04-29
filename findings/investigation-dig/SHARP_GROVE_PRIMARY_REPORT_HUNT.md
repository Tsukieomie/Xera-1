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
upgrade**.

### 2.1 Negative finding (the closure target)

**No primary Sharp/Grove technical report on the speech-transmission
demonstration has been located in the open record reviewed here.** The
absence is consistent across:

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
*American Psychologist* article is the principal published anchor. A separate
primary technical report on the speech experiment, if one exists, is either
classified (consistent with the Bizarre special-access category attached to
Pandora's most sensitive behavioral results — see file 34, Part 6), an
internal WRAIR / ARPA deliverable that was not deposited with DTIC under
Sharp's and Grove's joint authorship, or simply was never written as a
standalone technical report.

This narrows but does not collapse T2 (intelligible semantic speech). The
Justesen 1975 *American Psychologist* article remains a peer-reviewed
published source for the speech demonstration. What is now established with
confidence is that **no separately verifiable primary technical report has
been located in the open record** to provide protocol-grade detail (subject
count beyond the named investigators, sham controls, blinding, scoring
method, error distribution, full RF parameters, independent replication).

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

## 3. Tier impact

The V2K evidence matrix tier assessments should be updated as follows
(safe-phrasing form):

- **T1 (RF hearing mechanism):** unchanged — strongly supported.
- **T2 (intelligible semantic speech via RF hearing):** **strengthened** as a
  published historical claim by the Justesen 1975 *American Psychologist*
  article, with cross-corroboration from CIA FOIA records, the
  National Security Archive 2022 briefing book, the IEEE Xplore historical
  review, Lin 1978's textual reproduction of the demonstration, and Sharp &
  Grove's own 1974 IEEE T-MTT mechanism paper. **A primary Walter Reed / ARPA
  speech-protocol technical report has not been located in the open record
  reviewed here**, so the demonstration is not closed at protocol grade
  (subject count, blinding, sham controls, error distribution, replication).
- **T3 (patents and programs):** unchanged — supported, with the Sharp et al.
  1974 IEEE T-MTT paper now explicitly logged as a primary research-program
  artifact.
- **T4 (operational deployment):** unchanged — not established in the open
  record.
- **T5 (symptom / legal / media context):** unchanged — context only.

The corpus's strongest single-paragraph safe phrasing on the Sharp/Grove
speech demonstration becomes:

> The Justesen 1975 *American Psychologist* article (Vol. 30, No. 3, pp.
> 391-401) reports a Walter Reed Army Institute of Research demonstration by
> Joseph C. Sharp and Mark Grove, conducted under ARPA funding, in which the
> analog voice waveforms of the spoken digits "one" through "ten" were used
> to trigger pulsed microwave emissions whose negative-zero-crossing pulses
> were perceived as nine of the ten spoken words by the investigators when
> they irradiated themselves. Justesen cites the demonstration as
> "Sharp, J. C., & Grove, M. Personal communication, September 28, 1973."
> Sharp and Grove's primary peer-reviewed publication from the same period
> is the mechanism paper "Generation of acoustic signals by pulsed microwave
> energy," IEEE Trans Microwave Theory Tech 22:583-584 (1974). The
> institutional ecosystem (WRAIR, ARPA Project Pandora and the Bizarre
> special-access compartment) is documented at high confidence by CIA FOIA
> records and the National Security Archive 2022 briefing book on the
> Moscow Embassy microwave signal. A separately-authored Walter Reed / ARPA
> speech-protocol technical report has not been located in the open DTIC
> catalog, in Lin's 1978 or 2022 reviews, in Foster/Garrett/Ziskin's 2021
> weaponization review, or in the Naval Medical Research Institute Glaser
> 1976 bibliography. Treating the Justesen 1975 article as the published
> anchor for the speech claim, with the personal-communication caveat
> intact, is the disciplined position consistent with the open-record
> evidence.

## 4. External sources

- Justesen 1975, "Microwaves and Behavior," *American Psychologist*
  30(3):391-401 — `https://doi.org/10.1037/0003-066X.30.3.391`
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
