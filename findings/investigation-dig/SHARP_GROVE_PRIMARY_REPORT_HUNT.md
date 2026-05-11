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

### 1.35 Bibliometric closure check — who cites Justesen (1975) and what **they** cite (2026-05-02)

APA’s Crossref deposit for [`10.1037/0003-066X.30.3.391`](https://doi.org/10.1037/0003-066X.30.3.391) lists **`reference-count: 0`** (metadata only; the article obviously has footnotes in print). **OpenAlex** ([`W4213062251`](https://openalex.org/W4213062251)) reports **`cited_by_count: 6`** as of this pass — a **small** citing set, which is useful: it can be **enumerated** without leaving the open graph.

**Works OpenAlex lists as citing Justesen 1975** (year, title, DOI where present):

| Year | Title (short) | DOI |
| --- | --- | --- |
| 1977 | The effect of microwave radiation (2450 MHz) on the morphology and chromosomes of lymphocytes in vitro | [`10.1029/rs012i06sp00173`](https://doi.org/10.1029/rs012i06sp00173) |
| 1977 | Drug-induced ectothermia in small mammals: The quest for a biological microwave dosimeter | [`10.1029/rs012i06sp00073`](https://doi.org/10.1029/rs012i06sp00073) |
| 1977 | Diathermy versus the microwaves and other radio-frequency radiations: A rose by any other name is a rose by any other name | [`10.1029/rs012i003p00355`](https://doi.org/10.1029/rs012i003p00355) |
| 1980 | Holographic Assessment of Microwave Hearing | [`10.1126/science.7403877`](https://doi.org/10.1126/science.7403877) |
| 1986 | Behavioral Thermoregulation with Microwave Radiation of Albino Rats | [`10.2466/pms.1986.62.3.831`](https://doi.org/10.2466/pms.1986.62.3.831) |
| 2021 | Applied Aspects and Applications (book chapter — *Electromagnetic Fields in Biology and Medicine*) | [`10.1007/978-3-030-64544-1_10`](https://doi.org/10.1007/978-3-030-64544-1_10) |

**Deep read — Chou et al., *Science* 209:1143–1145 (1980)** ([Crossref-derived reference list](https://api.crossref.org/works/10.1126/science.7403877)):

- **Document type (PubMed):** indexed as a **Letter** (`PublicationTypeList` → Letter), PMID [7403877](https://pubmed.ncbi.nlm.nih.gov/7403877/); **no abstract** in the MEDLINE record (typical for short *Science* correspondence). Indexing terms are hearing / holography / microwaves — **not** speech intelligibility.
- **Authorship overlap:** fifth author **`Don R. Justesen`** appears on what is primarily a UW / microwave-dosimetry / holographic-mechanism paper (**Chou, Guy, Foster, Galambos, Justesen** per OpenAlex).
- **Citational practice (Crossref deposit):** the publisher reference table includes **18** rows, among them **both** `JUSTESEN, D.R., MICROWAVES AND BEHAVIOR, AMERICAN PSYCHOLOGIST 30:391 (1975)` **and** `SHARP, J.C., GENERATION OF ACOUSTIC-SIGNALS BY PULSED MICROWAVE-ENERGY` (*IEEE Trans. Microwave Theory Tech.* — **mechanism** line, first author only in the Crossref string), alongside canonical MAE bibliography (Guy *Ann. N.Y. Acad. Sci.*, Lin, Tyazhelov, Frey 1979 *Science* companion piece, Lebovitz cat single-unit *Radio Science*, …).
- **Metadata hygiene — OpenAlex vs Crossref on the *same* DOI:** OpenAlex’s `referenced_works` graph for this letter lists **14** outgoing edges and **does not** currently include a resolved work for **Sharp’s 1974 IEEE T-MTT** paper (it *does* include Justesen 1975, Frey & Messenger 1973 *Science*, Guy 1975 *Ann. N.Y. Acad. Sci.*, Tyazhelov 1979, etc.). **Conclusion for investigators:** the **Crossref** reference table is the authoritative open check for “did this letter cite Sharp *and* Justesen together?”; **OpenAlex-only** scans can **under-link** Sharp for this item. Neither database adds a Sharp/Grove **speech-protocol** primary.

**T2 implication:** contemporaneous microwave-hearing investigators **were aware** of the *American Psychologist* article and the **Sharp et al. 1974** mechanism paper in the **same** reference block, yet the **1980 *Science* paper is not a replication or protocol extension of the nine-word Sharp/Grove claim** — it advances **physical assessment** of hypothesized microwave hearing (**holographic** tissue-displacement framing per title). Enumerating citations therefore **widens corroborating context** (Justesen-as-cited-literature hub) **without** producing a missing **Sharp/Grove speech-protocol** technical report.

**Negative control:** none of these six cite-by edges, inspected at title + (for *Science*) full Crossref references, substitutes for **Lin 1978**-style bibliography closure of **T2** (intelligible speech under controlled replication).

### 1.36 Complement — who cites **Sharp/Grove/Gandhi (1974 IEEE T-MTT)** and whether they bridge to **Justesen** (2026-05-02)

Symmetric to §1.35: if a later paper cited the **mechanism letter** and **independently documented** the Sharp/Grove **speech** demonstration, that would narrow T2. OpenAlex work ID [`W2089706740`](https://openalex.org/W2089706740) (*Generation of Acoustic Signals by Pulsed Microwave Energy*, DOI [`10.1109/TMTT.1974.1128293`](https://doi.org/10.1109/TMTT.1974.1128293)) lists **`cited_by_count: 23`**. Enumerated `filter=cites:W2089706740` (OpenAlex query, `per_page=50`):

| Year | Citing work (short) | DOI |
| --- | --- | --- |
| 1975 | Microwave-induced acoustic effects in mammalian auditory systems and physical materials* (Guy *Ann. N.Y. Acad. Sci.* proceedings line) | [`10.1111/j.1749-6632.1975.tb35996.x`](https://doi.org/10.1111/j.1749-6632.1975.tb35996.x) |
| 1975 | Sensation and Perception of Microwave Energy (Guy book chapter) | [`10.1007/978-1-4684-0760-0_9`](https://doi.org/10.1007/978-1-4684-0760-0_9) |
| 1977 | Further studies on the microwave auditory effect | [`10.1109/tmtt.1977.1129245`](https://doi.org/10.1109/tmtt.1977.1129245) |
| 1977 | On microwave-induced hearing sensation | [`10.1109/tmtt.1977.1129167`](https://doi.org/10.1109/tmtt.1977.1129167) |
| 1977 | Single auditory unit responses … pulsed microwave radiation | [`10.1016/0006-8993(77)90735-1`](https://doi.org/10.1016/0006-8993(77)90735-1) |
| 1977 | Theoretical analysis of acoustic signal generation… | [`10.1109/tmtt.1977.1129246`](https://doi.org/10.1109/tmtt.1977.1129246) |
| 1977 | Theoretical calculation of frequencies and thresholds … *Radio Science* | [`10.1029/rs012i06sp00237`](https://doi.org/10.1029/rs012i06sp00237) |
| 1978 | Mammalian auditory responses to 3.0 GHz microwave pulses | [`10.1109/tbme.1978.326343`](https://doi.org/10.1109/tbme.1978.326343) |
| 1979 | Holographic assessment of a hypothesized microwave hearing mechanism (Frey *Science*) | [`10.1126/science.482939`](https://doi.org/10.1126/science.482939) |
| 1980 | *Response*: Holographic assessment of microwave hearing (Frey/Coren *Science* letter) | [`10.1126/science.209.4461.1144`](https://doi.org/10.1126/science.209.4461.1144) |
| 1980 | Alterations in activity at auditory nuclei… | [`10.1016/0006-8993(80)90204-8`](https://doi.org/10.1016/0006-8993(80)90204-8) |
| 1980 | The microwave auditory phenomenon (Lin *Proc. IEEE*) | [`10.1109/proc.1980.11583`](https://doi.org/10.1109/proc.1980.11583) |
| 1981 | Field-induced forces at dielectric interfaces … *Bull. Math. Biol.* | [`10.1007/bf02459430`](https://doi.org/10.1007/bf02459430) |
| 1981 | Field-induced forces … *Math. Biosci.* | [`10.1016/s0092-8240(81)90003-3`](https://doi.org/10.1016/s0092-8240(81)90003-3) |
| 1982 | Biological effects and medical applications… *IEEE T-MTT* tutorial | [`10.1109/tmtt.1982.1131332`](https://doi.org/10.1109/tmtt.1982.1131332) |
| 1988 | Microwave-induced auditory effect in a dielectric sphere | [`10.1109/22.6090`](https://doi.org/10.1109/22.6090) |
| 1988 | The bioelectromagnetics research laboratory, University of Washington… | [`10.1002/bem.2250090203`](https://doi.org/10.1002/bem.2250090203) |
| 1995 | Effects of microwave radiation exposure on behavioral performance in nonhuman primates | [`10.1007/978-1-4899-0945-9_26`](https://doi.org/10.1007/978-1-4899-0945-9_26) |
| 2007 | Radio frequency electromagnetic fields (*Prog. Brain Res.* chapter) | [`10.1016/s0079-6123(06)62007-4`](https://doi.org/10.1016/s0079-6123(06)62007-4) |
| 2016 | Photoacoustics: a historical review | [`10.1364/aop.8.000586`](https://doi.org/10.1364/aop.8.000586) |
| 2018 | Sensing magnetic fields with magnetosensitive ion channels | [`10.3390/s18030728`](https://doi.org/10.3390/s18030728) |
| 2021 | Mechanisms for microwave to acoustic energy conversion | [`10.1007/978-3-030-64544-1_7`](https://doi.org/10.1007/978-3-030-64544-1_7) |
| 2021 | Applied Aspects and Applications | [`10.1007/978-3-030-64544-1_10`](https://doi.org/10.1007/978-3-030-64544-1_10) |

**Overlap with §1.35 (Justesen → cited-by):** **Chou et al. 1980 *Science*** and the **2021 book chapter** [`10.1007/978-3-030-64544-1_10`](https://doi.org/10.1007/978-3-030-64544-1_10) appear in **both** directions — expected, because Chou 1980 cites **both** anchors in Crossref (§1.35). The rest of the Sharp-1974 citing set is **mechanism / dosimetry / neurophysiology / reviews**, not secondary speech-protocol deposits.

**Spot check — Guy, *Sensation and Perception of Microwave Energy* (1975 chapter):** Crossref reference list ([`10.1007/978-1-4684-0760-0_9`](https://doi.org/10.1007/978-1-4684-0760-0_9)) contains an explicit bibliographic line for **Sharp, Grove, Gandhi** *IEEE Trans. Microwave Theory Tech.* **MTT-22 (1974) 583** (keyword scan of **49** reference rows: **no** `Justesen` / *American Psychologist* / `speech` lemma match in reference strings). So a **first-hand Guy-line** citation of the mechanism letter **did not**, in the deposited metadata, require bundling the psychology-article speech channel in the same reference table.

**Spot check — Frey & Coren, *Science* “Response: Holographic assessment…” (1980):** DOI [`10.1126/science.209.4461.1144`](https://doi.org/10.1126/science.209.4461.1144) cites Frey’s own *Science* holography line; Crossref **`reference` list (11 rows)** shows **no Justesen** and **no Sharp** string in the deposit — it is an **exchange within the holographic-mechanism thread**, not an extension into speech psychophysics.

**T2 net:** the **1974 letter** is cited widely for **acoustic / thermoelastic / neural** MAE work; **none** of the 23 OpenAlex-indexed citing edges, on title inspection, presents as a **protocol publication** for the nine-word demonstration. The **Guy 1975 chapter** reference deposit is a concrete example of **Sharp without Justesen** at the bibliography layer.

### 1.37 Independent citation index — **OpenCitations COCI** vs OpenAlex (2026-05-02)

The OpenCitations Index API requires **HTTPS + redirect follow** (`curl -L`); bare `http://` returns **301** with an empty body.

**Justesen 1975** — `GET https://opencitations.net/index/api/v2/citations/doi:10.1037/0003-066x.30.3.391` (saved payload in this pass: `/tmp/oc_justesen.json`):

- **`citations` edges:** **6** (`unique citing DOIs: 6`) — **matches** OpenAlex `cited_by_count: 6` ([`W4213062251`](https://openalex.org/W4213062251)).
- Citing DOIs (lowercased): `10.1029/rs012i06sp00073`, `10.1029/rs012i06sp00173`, `10.1029/rs012i003p00355`, `10.1126/science.7403877`, `10.2466/pms.1986.62.3.831`, `10.1007/978-3-030-64544-1_10`.

**Sharp 1974 IEEE T-MTT** — `GET https://opencitations.net/index/api/v2/citations/doi:10.1109/tmtt.1974.1128293` (`/tmp/oc_sharp.json`):

- **`citations` edges:** **19** (`unique citing DOIs: 19`) vs OpenAlex **`cited_by_count: 23`** ([`W2089706740`](https://openalex.org/W2089706740)).
- **Set difference (in OpenAlex, not in OpenCitations on this date):**  
  `10.1016/0006-8993(77)90735-1` (Lebovitz *Brain Res.* single-unit MAE), `10.1016/s0092-8240(81)90003-3` (Lin *Math. Biosci.* RF-hearing forces), `10.1126/science.482939` (Frey *Science* holography 1979), `10.1126/science.209.4461.1144` (Frey/Coren *Science* response 1980), `10.3390/s18030728` (MDPI *Sensors* 2018). Interpretation: **COCI lags or omits some publisher deposits**; use **OpenAlex for enumeration**, OpenCitations for **third-party corroboration** of the smaller core.
- **Set difference (in OpenCitations, not in OpenAlex):** `10.20944/preprints201801.0248.v1` — likely **preprint** shard of a later Sensors paper; treat as **bibliography noise** unless deduplicated to a final DOI.

**Intersection of citing sets (COCI-derived):** `|citing(Justesen) ∩ citing(Sharp)| = 1` → **`10.1007/978-3-030-64544-1_10`** (2021 handbook chapter) only. **Chou *Science* 1980** cites **both** anchors in **Crossref** (§1.35) but OpenCitations **does not** index `10.1126/science.7403877` as citing the Sharp 1974 DOI in this snapshot — another **indexCompleteness** warning, not a factual claim about the letter’s reference list.

**Lin, “The microwave auditory phenomenon,” *Proc. IEEE* 68(1):67–76 (1980)** — Crossref deposit [`10.1109/proc.1980.11583`](https://doi.org/10.1109/proc.1980.11583), **41** `reference` rows:

- **Positive:** row **15** article-title string is **“Generation of acoustic signals by pulsed microwave energy”** (Sharp mechanism letter) — present in the **canonical review’s** reference table.
- **Negative (Crossref text layer):** **no** `Justesen` / *American Psychologist* / `30:391` / `speech` lemma match across **all** reference rows when searching the full JSON `reference` objects (not only `article-title`; many rows are empty strings in Crossref but carry no hidden Justesen key in this deposit).
- **T2 read:** Lin’s **1980 IEEE review bibliography** (as deposited) **anchors mechanism** via Sharp **without** listing the psychology-article speech channel — parallel to **Guy 1975** (§1.36) and consistent with Lin 1978’s in-text “(see Justesen, 1975)” pattern living in **prose/bibliography elsewhere**, not necessarily in every Crossref-parsed reference row for every Lin article in the COCI pipeline.

### 1.38 Outgoing-reference APIs and Lin 1980 **OpenAlex graph** — **Justesen absent** machine-check (2026-05-02)

**Justesen → references (OpenCitations):** `GET https://opencitations.net/index/api/v2/references/doi:10.1037/0003-066x.30.3.391` returned **`[]`** in this workspace. COCI openly prioritizes citation *edges* reconstructed from PubMed/OpenCitations ingestion; APA / psychology journals are **thin** on outgoing-reference coverage compared with biomedicine. **Do not** treat an empty OC `references/` payload as proof that Justesen 1975 has no footnotes in print.

**Lin 1980 → OpenAlex `referenced_works`:** work [`https://doi.org/10.1109/proc.1980.11583`](https://doi.org/10.1109/proc.1980.11583) ([`W2026834927`](https://openalex.org/W2026834927)) lists **34** referenced-work IDs. Dereferencing each ID (with two **404** ids at list tail — OpenAlex orphan stubs) shows **Sharp 1974** present as *Generation of Acoustic Signals by Pulsed Microwave Energy (Letters)*, DOI [`10.1109/TMTT.1974.1128293`](https://doi.org/10.1109/TMTT.1974.1128293). **Justesen 1975** OpenAlex id [`W4213062251`](https://openalex.org/W4213062251) (**Microwaves and behavior.**) is **not** an element of `referenced_works` for Lin 1980.

**Cross-check:** the only `10.1037/...` edge resolved in those 34 is **Justesen *et al.* 1975 *J Comp Physiol Psychol*** on rat avoidance ([`10.1037/h0076662`](https://doi.org/10.1037/h0076662)) — behavioral microwave work, **not** the *American Psychologist* speech-demo article.

**Europe PMC citation tools on PMID 1137231:** REST paths such as `/article/MED/1137231/citations` and `/linkages/MED/1137231` returned **404** here; searchable core metadata for Justesen is reachable via **`EXT_ID:1137231 AND SRC:MED`**, but **automated citation fan-out from Europe PMC remains blocked** in this session for PMID 1137231.

**Synthesis:** across **Crossref reference strings** (§1.37), **OpenAlex dereferenced reference graph**, and **COCI incoming-only strength** for APA DOIs, the **IEEE-side canonical review** (Lin *Proc.* 1980) **does not** attach the psychology-journal Sharp/Grove speech anchor in machine-readable bibliography layers — sharpening the interpretation that **speech-channel lore stayed psychology-corpus-local** unless a paper explicitly bridged it (cf. **Chou** Crossref bundle in §1.35).

### 1.39 Lin **2022** J-ERM review — **neither** Justesen *Am Psych* **nor** Sharp 1974 in machine-resolved reference layers (2026-05-02)

The matrix already treats Lin 2022 as **mechanism/phenomenology**, not speech closure. This pass **machine-checks** that the modern review’s **deposited bibliography** does not quietly reattach the speech-demo anchor as a structured reference.

**Work:** *The Microwave Auditory Effect*, **IEEE J. Electromagn. RF Microwaves Med. Biol.** (J-ERM), resolved in Crossref as DOI [`10.1109/jerm.2021.3062826`](https://doi.org/10.1109/jerm.2021.3062826) (publisher year **2021** in Crossref metadata; bibliographically cited as **Lin 2022** in this corpus). OpenAlex: [`W3135162477`](https://openalex.org/W3135162477).

**Crossref `reference` list:** **75** rows. Case-insensitive scan of `article-title` + `unstructured` JSON text for `justesen`, `sharp`, `grove`, `american psycholo`, `speech`, `voice` → **no hits** (the sole `psychol` substring is **unrelated** — *Fundamentals of Experimental Psychology*, Sheridan 1971, `volume-title` field).

**OpenAlex `referenced_works`:** **72** IDs. Membership check: **neither** [`W4213062251`](https://openalex.org/W4213062251) (Justesen *Microwaves and behavior.*) **nor** [`W2089706740`](https://openalex.org/W2089706740) (Sharp **1974** IEEE T-MTT mechanism letter) appears. Full-title dereference pass (keyword filter) still surfaces **Frey & Messenger 1973** *Science* paper, **Frey 1971** *IEEE T-MTT*, **Justesen et al.** 1975 *J Comp Physiol Psychol* ([`10.1037/h0076662`](https://doi.org/10.1037/h0076662)) — same **non–*Am Psych*** Justesen edge seen for Lin 1980 (§1.38) — plus generic psych/biophysics refs (e.g. **Frey 1965**, *Psychol Bull* review).

**Contrast with Lin 1980 (§§1.37–1.38):** *Proc. IEEE* 1980 **does** include Sharp 1974 in Crossref + OpenAlex graphs; **Lin 2022 J-ERM includes neither Sharp 1974 nor Justesen *Am Psych* 1975** in those same machine layers. That is consistent with **progressive narrowing** of the IEEE-review reference graph toward **mechanism + health-physics** threads, leaving the **nine-word** narrative **outside** the structured bibliography even when Lin 1978 monograph **prose** still carried the Justesen speech description (human-verified in prior passes, not re-OCR’d here).

### 1.40 Springer handbook deposit restores bibliographic coupling J-ERM standalone drops (2026-05-02)

Lin’s MAE prose appears both as standalone **IEEE J-ERM article** [`10.1109/jerm.2021.3062826`](https://doi.org/10.1109/jerm.2021.3062826) (§1.39 omits **`W4213062251` / `W2089706740`**) **and** as **Springer volume chapters** ISBN **978-3-030-64544-1**. The **`citing(Justesen) ∩ citing(Sharp-1974)`** singleton in §1.37 (**`10.1007/978-3-030-64544-1_10`**) is the linkage target.

Crossref handbook chapter **`10.1007/978-3-030-64544-1_10`** (*Applied Aspects and Applications*) — **`reference`** list **88** rows:

| Crossref-ref index | Verbatim-shape summary |
| --- | --- |
| **19** | `Justesen DR (1975) Microwaves and behavior. Am Psychol 30:391–401` |
| **67** | `Sharp JC, Grove HM, Gandhi OP (1974) Generation of acoustic signals by pulsed microwave energy. IEEE Trans Microw Theory Tech 22:583–584` |

**OpenAlex:** [`W3211355265`](https://openalex.org/W3211355265) — **`referenced_works` 76** — **includes** [`W4213062251`](https://openalex.org/W4213062251) **and** [`W2089706740`](https://openalex.org/W2089706740) (membership aligns with Crossref lines above).

Sibling chapter **10.1007/978-3-030-64544-1_7** (*Mechanisms for Microwave to Acoustic Energy Conversion*): **42** reference rows — **Sharp/Grove/Gandhi 1974** (Crossref-ref **~34**) **without** a Justesen *Am Psych* line in scanned reference fields (**Sharp-without-Justesen** at chapter granularity).

Duplicate-title chapter **10.1007/978-3-030-64544-1_6** (“*The Microwave Auditory Effect*”): **61** references; **serialized `message` JSON** scan yields **zero** hits on `justesen`, `sharp`, `grove`, or doi-ish substrings **`1128293` / `0003-066x`** — chapter `_6`’s cite table **does not** mirror handbook `_10`’s bundled anchors in this Crossref snapshot despite shared wording with standalone J‑ERM.

**Lin 2022 cites (OpenCitations):** `https://opencitations.net/index/api/v2/citations/doi:10.1109/jerm.2021.3062826` returned **20** edges in-session vs OpenAlex **`cited_by_count: 27`** — reinforces **multi-index** cite checks.

**T2 takeaway:** **publisher/book packaging** (`_10`) re-establishes **dual coupling** stripped from standalone **J-ERM** graphs; **still no** Sharp/Grove **speech-protocol** primary beyond Justesen.

### 1.41 Duplicate DOI packaging — handbook `_6` vs IEEE J‑ERM, citing edge, Foster 2022 negative (2026-05-02)

**Lin J‑ERM as two distinct OpenAlex works:** Springer chapter DOI **`10.1007/978-3-030-64544-1_6`** maps to **[`W4240494194`](https://openalex.org/W4240494194)** (*The Microwave Auditory Effect*, **`referenced_works` 49**) — confirming §1.40’s observation that **`W4213062251` / `W2089706740` are absent** from that graph. Standalone IEEE J‑ERM **[`10.1109/jerm.2021.3062826`](https://doi.org/10.1109/jerm.2021.3062826)** remains **[`W3135162477`](https://openalex.org/W3135162477)** (**72** references; §1.39). **Same human-facing title ≠ same bibliography object** across publisher channels.

**Who cites handbook `_10`?** OpenAlex `filter=cites:W3211355265` returns **`meta.count = 1`**: **`10.1007/978-3-030-64544-1`** (“*Auditory Effects of Microwave Radiation*”), i.e. the **parent handbook DOI/book record**, not downstream reviews — partly explaining why **COCI’s Justesen∩Sharp cite intersection** collapses toward **publisher-cluster** edges.

**Third-party spine — Foster / Garrett / Ziskin (2022 *Frontiers in Public Health*):** PMC mirror [PMC8733248](https://pmc.ncbi.nlm.nih.gov/articles/PMC8733248/). Crossref DOI [`10.3389/fpubh.2021.788613`](https://doi.org/10.3389/fpubh.2021.788613), OpenAlex [`W4200290987`](https://openalex.org/W4200290987). Deposited **`reference` list:** **only 12 rows** — **zero** lexical hits on `justesen`, `sharp`, `grove`, *American Psychologist*, or “generation of acoustic” in **`article-title`** / **`unstructured`** blobs. **`referenced_works` membership:** **does not** include **`W4213062251`**, **`W2089706740`**, or **`W3135162477`** (Lin J‑ERM 2022). This **re-grounds** the matrix row that Foster *et al.* is **mechanism / practicality / weapon-framing**, **not** a bibliographic funnel that restores the Sharp/Grove speech chain for T2.

### 1.42 Chou *Health Physics* 2007 • IEEE C95.1‑2006 bibliography deposit — spine without Sharp/Justesen speech anchors (2026‑05‑03)

**Purpose:** extend the **`2026‑05‑02`** closure checks (§§1.35–1.41) upstream into the **heavyweight synthesis** Lin’s J‑ERM explicitly cites (**Chou *et al.* 2007**) and into **occupational IEEE RF-exposure bibliography mass** (**IEEE C95.1‑2006**).

#### A. Chou *et al.* *Health Physics* — OpenAlex vs Crossref hygiene

**Work:** *HEARING OF MICROWAVE PULSES BY HUMANS AND ANIMALS: EFFECTS, MECHANISM, AND THRESHOLDS* — OpenAlex **[`W2095532249`](https://openalex.org/W2095532249)**; DOI [10.1097/01.HP.0000250644.84530.e2](https://doi.org/10.1097/01.HP.0000250644.84530.e2).

**OpenAlex `referenced_works`** (`2026‑05‑03` fetch): neither **`W4213062251`** (Justesen *Am Psych* 1975) **nor** **`W2089706740`** (Sharp/Grove/Gandhi IEEE T‑MTT 1974 mechanism letter) appears as a linked **`referenced_works`** member. So the MAE-review object Lin packages as foundational **does not** machine-resolve either **speech-demo anchor**, paralleling **Lin Proc. IEEE 1980** (§1.38) and **Lin J‑ERM standalone** (§1.39).

**Crossref `reference`** table (**37 rows** deposited for this DOI in-session): scripted scan for lexical pairs **`american psychologist`** / **`0003-066x`** / **`sharp` ∩ `1974` ∩ `IEEE`** returned **zero** qualifying rows (**`justesen`** rows that *do* appear are **later book/chapter/other Justesen refs**, not Am Psych **1975**).

**Interpretation:** this node is authoritative for **pulse hearing thresholds / thermoelastic mechanism framing** (T1) but reinforces that **Sharp/Grove speech** does not sit inside the **same resolved reference envelope** as the rest of Lin’s deposited spine unless reintroduced by **publisher packaging** (§1.40) or sparse citing articles.

#### B. IEEE C95.1‑2006 — Crossref `reference-count: 1287` scan hygiene

**Work:** IEEE **Standard for Safety Levels with Respect to Human Exposure to Radio Frequency Electromagnetic Fields, 3 kHz to 300 GHz**, Crossref type `standard`, DOI [10.1109/IEEESTD.2006.99501](https://doi.org/10.1109/IEEESTD.2006.99501).

**Method:** downloaded Crossref **`message.reference`** JSON; iterated all **1287** blobs; flagged rows whose serialized text matched (**i**) `sharp` ∩ (`1974` | `t-mtt` | `microwave theor`) or (**ii**) `american psychologist` / (`justesen` ∩ `1975` ∩ psych).

**Outcome:** **`sharp74-like hits: 0`**, **`justesen-ampsych hits: 0`** in deposited titles/unstructured blobs. (Full standard PDF annexes might still carry citations **not surfaced** as structured Crossref refs — this pass is deliberately **deposit-limited**.)

#### C. T2 bookkeeping + popular-misinformation control (2014 brain-to‑brain pairs)

Separate from MAE bibliography: **`2026‑05‑03`** fact-check reinforces **two different** *PLOS ONE* papers from **2014** — **do not collapse with “UW + hola + ciao”**:

| Paper | DOI | Institutional anchor | Relation to Sharp/Grove / MAE |
| --- | --- | --- | --- |
| **Grau *et al.***, “Conscious brain-to‑brain…” | [`10.1371/journal.pone.0105225`](https://doi.org/10.1371/journal.pone.0105225) | Emitter **India**, receiver **Strasbourg**; EU / Starlab / Axilum-related author network | EEG motor-imagery **bits** → email → TMS **phosphenes**; encodes greetings **by Bacon cipher**, **not audible voice** inside skull; **orthogonal stack** |
| **Rao *et al.***, “A direct brain‑to‑brain interface…” | [`10.1371/journal.pone.0111332`](https://doi.org/10.1371/journal.pone.0111332) | **UW** | EEG→TMS cooperative **game/visuomotor** prototype; abstracts **omit** hola/ciao scheme **per open metadata** |

**Relevance:** blocks the common argument path “**accepted 2014 telepathy ⇒ MAE/V2K is ordinary**”: the accepted physics path for MAE stays **thermal-acoustic/cochlea** literature; brain-to‑brain EEG/TMS is **another branch entirely**.

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

---

## §8. EXTENSION TO FY74 WRAIR COMPOSITE — see addendum

**As of 2026-04-29**, following the resolution of §7 (Berman 1985 ref 24 = AD-776967 FY73 Vol 2), the investigation was extended to the FY74 WRAIR Annual Progress Report — the volume covering 1 July 1973 – 30 June 1974, the period containing Justesen's 28-September-1973 personal-communication date for the Sharp/Grove speech demonstration.

**Documents pulled**:
- **AD-A009337** — *WRAIR Annual Progress Report, 1 Jul 1973 – 30 Jun 1974, Volume 1* (Internet Archive: `DTIC_ADA009337`).
- **AD-A009338** — *WRAIR Annual Progress Report, 1 Jul 1973 – 30 Jun 1974, Volume 2* (Internet Archive: `DTIC_ADA009338`) — contains the WU 057 narrative.

### §8.1 Major positive finding

The FY74 WU 057 narrative explicitly contains a section titled **"Modulated microwave signals"** (printed pp. 985-986, OCR lines 9476-9489 in AD-A009338) that openly references "the so-called hearing effect produced by extremely low average power levels" and "the auditory study". This is the **first direct unclassified Army-internal documentary acknowledgement** that Sharp and Grove conducted formal microwave-auditory-effect research at WRAIR in the period containing Justesen's 28-Sept-1973 date. The work is officially linked to the Sharp/Grove/Gandhi 1974 IEEE T-MTT paper "Generation of acoustic signals of pulsed microwaves" (which appears as Publication #1 in WU 057's FY74 publication list).

### §8.2 Critical limitations

- The work is described in **bioeffects/safety dosimetry framing only** — no mention of speech, voice, verbal stimuli, phonemes, words, intelligibility, or human voice-modulation schemes.
- The work is reported as **officially halted** during the latter half of the FY74 reporting period, for two stated reasons: (a) a non-biological electrostrictive transducer model is adequate, and (b) BBB-permeability concerns at similar exposure parameters.
- **No mention of Justesen** appears anywhere in either FY74 volume; no mention of the 28-Sept-1973 demonstration; no description of voice-modulation experiments.
- The narrative does NOT constitute a primary technical-report account of the speech demonstration itself.

### §8.3 Updated assessment of the §6.7 conclusion

The §6.7 conclusion — that **Justesen 1975 (*American Psychologist*) remains the sole primary unclassified published account of the Sharp/Grove speech-demonstration claim** — is reaffirmed by the FY74 evidence. The FY74 WU 057 narrative is the **strongest contemporaneous Army-internal corroboration of the existence of Sharp/Grove auditory work** but does not bridge from "Frey-effect bioeffects characterization" to "speech transmission demonstration." The most parsimonious reading consistent with both records is that an informal speech-modulation extension of the formal study was conducted around the time the formal study was being wound down, demonstrated to Justesen, and never written into the formal WU 057 narrative.

Full forensic detail (verbatim transcription of the "Modulated microwave signals" section, FY74 investigator roster delta vs FY73, full WU 057 narrative outline, false-positive disambiguation of WU 031 Military Psychiatry / WU 112 Drugs of Abuse, and recommended further-inquiry threads): see **`fy74_wrair_speech_demo_hunt/FY74_SPEECH_DEMO_HUNT.md`** (companion file).

Local PDFs + OCR archived in `findings/investigation-dig/fy74_wrair_speech_demo_hunt/`.
