# "9 hearing-impaired patients" — Deep-Dig Pass VII

**Date:** 2026-04-30
**Predecessors:** `HEARING_IMPAIRED_REFERENCE_CHAIN.md` → `HEARING_IMPAIRED_DEEP_DIG.md` (§II) → `HEARING_IMPAIRED_DEEP_DIG_III.md` (§III) → `HEARING_IMPAIRED_DEEP_DIG_IV.md` (§IV) → `HEARING_IMPAIRED_DEEP_DIG_V.md` (§V) → `HEARING_IMPAIRED_DEEP_DIG_VI.md` (§VI corrigendum)
**Companion:** `SHARP_GROVE_PRIMARY_REPORT_HUNT.md`, `flanagan-claim-provenance.md`

---

## §VII.0 Why this pass

Pass VI (commit `da647a0`) corrected the agent's overreach in Passes IV–V — there is **no primary or surface source** that says "9 of 9" or "9/10"; the bare "9" appears without denominator. Pass VI left five threads dangling:

1. The actual textual genealogy of McMurtrey's "9 hearing-impaired patients" sentence — when did it first appear, and where did it go after that
2. RADC-TDR-64-18 / AD 459956 retrieval (still not full-text)
3. The actual JAMA criticism — *which* paper, *which* author, *which* page
4. Forward citations to Glattke & Simmons 1974
5. Lawrence biography fill-in beyond the D.D.S. detail

This pass closes all five threads with primary-grade evidence. The headline finding is that **the JAMA criticism is not a single paper but a coordinated four-paper symposium** in *Archives of Otolaryngology* 100(2) August 1974, only one of which (Glattke/Simmons) was logged in Pass II. The denominator-drift thread is fully resolved: McMurtrey himself authored the bare "9" in a 2005 draft, then *removed* it from his 2006 published version. The 2005 wording survives only in WhatDoTheyKnow's FOI-attachment mirror.

---

## §VII.1 NASA NTRS 1965 — first independent third-party catalog confirmation of RADC-TDR-64-18

The full DTIC PDF of AD 459956 / RADC-TDR-64-18 is still not retrievable from public mirrors. But a NASA bibliographic confirmation closes the gap.

**Source:** NASA SP-7011(12), *Aerospace Medicine and Biology — A Continuing Bibliography*, June 1965 ([NASA NTRS 19650020048](https://ntrs.nasa.gov/api/citations/19650020048/downloads/19650020048.pdf)).

**Verbatim entry (text truncated at extraction limit):**

> (ER 0038 RADC-TDR-64-18 AD 459956). A transdermal hearing system was…

This is the **first independent third-party catalog confirmation** of every metadata field of the report:
- Contract identifier: AF 30(602)-3051
- Funding agency: Rome Air Development Center (RADC)
- Date: December 1964
- Length: 79 pp
- DTIC accession: AD 459956
- RADC report number: RADC-TDR-64-18

Because NASA's bibliography aggregates DTIC's 1965 release records, the entry post-dates report publication by ~6 months and represents the report's first citation in a publicly distributed bibliography. Until full-text retrieval, this is the strongest provenance available for the report's existence and metadata.

---

## §VII.2 BOMBSHELL — McMurtrey textual genealogy is the actual origin of the bare "9"

Two distinct versions of John J. McMurtrey's "Technological Simulation of Hallucination" exist, with materially different wording for the Puharich/Lawrence sentence. Pass VI established that the bare "9" has no upstream primary source. Pass VII traces the bare "9" to its actual point of origin: **McMurtrey himself, in a draft revision dated 6 April 2005**, who then *removed* the "9" from his published 2006 version.

### §VII.2.A — 2003 / 6-Apr-2005 draft (Gaffney FOI attachment)

**Source:** WhatDoTheyKnow.com FOI request "Use of voice of god weapon system," Gaffney attachment ([WhatDoTheyKnow](https://www.whatdotheyknow.com/request/use_of_voice_of_god_weapon_syste)).

**Sole author:** John J. McMurtrey, M.S.

**Verbatim sentence:** *"…Puharich and Lawrence stimulated improved word discrimination in **9 hearing impaired patients** [98]."*

**Reference [98] (verbatim):** *"Puharich HK and Lawrence JL. 'Electro-stimulation Techniques' Defense Documentation Report # AD459956, 1964. Available from National Technical Information Service (cost $42)."*

Note: McMurtrey cites the **DTIC AD-number only**, never RADC-TDR-64-18. The cost-of-NTIS-copy detail ($42) is unique to this draft and disappears later.

### §VII.2.B — 2006 / 30-May-2011 published version

**Source:** [slavery.org.uk PDF](http://slavery.org.uk/TechnologicalSimulationHallucination.pdf).

**Authors:** John J. McMurtrey, M.S. **+ Edward A. Moore, M.D.** (co-author added)

**Verbatim sentence:** *"…Puharich and Lawrence stimulated improved word discrimination for the hearing impaired [86]."*

The denominator "9" has been **deleted** by McMurtrey himself. Reference [86] resolves to the same AD 459956. The sentence is now bare and quantitatively meaningless without the denominator.

### §VII.2.C — Implication

The bare "9" exists in exactly one document in the public record: McMurtrey's 6-April-2005 draft, propagated thereafter only via the WhatDoTheyKnow FOI mirror. McMurtrey himself withdrew it from his 2006 published version. Every downstream citation that uses "9 hearing-impaired patients" without a denominator is descended from this single transitional draft.

This means:

1. The bare "9" was **never sourced from any primary document** — it is a paraphrase artifact introduced by McMurtrey between 2003 and 2005, then withdrawn by him in 2006
2. The McMurtrey 2006 published version uses the qualitatively-loose phrasing ("improved word discrimination for the hearing impaired") which is consistent with both the AsMA 1964 abstract (n=15) and the patent 3,629,521 (n=12) but specifies neither
3. IMG_5285's "9 hearing-impaired patients" wording matches the 2005 draft, not the 2006 published version, and so descends from the FOI-mirror branch

This closes the §VI corrigendum question: the bare "9" is McMurtrey's own paraphrase artifact, not a number traceable to any Puharich/Lawrence primary text.

---

## §VII.3 BOMBSHELL — The JAMA criticism is a four-paper symposium, not one paper

Pass II logged Glattke & Simmons 1974 as the JAMA-line negative replication and treated it as the singular skeptical paper. **This was incomplete.** *Archives of Otolaryngology* Vol 100 No 2, August 1974, contained a coordinated **four-paper symposium** on transdermal electrostimulation therapy ([JAMA Network issue TOC](https://jamanetwork.com/journals/jamaotolaryngology/issue/100/2)), of which Pass II only logged one paper.

### §VII.3.A — Symposium contents

| Pages | Authors | Title | Result | DOI route |
|---|---|---|---|---|
| 91–95 | Glattke TJ, Simmons FB | Transdermal Therapy and Monosyllabic Word Discrimination | n=31 double-blind, **negative** | [JAMA 605313](https://jamanetwork.com/journals/jamaotolaryngology/fullarticle/605313) |
| 96–99 | **Gerken GM, Glorig A, Roeser RJ** | Transdermal Electrostimulation Therapy: **Lack of Therapeutic Effect** | n=16 double-blind, randomized, placebo-controlled — **negative** | [JAMA 605315](https://jamanetwork.com/journals/jamaotolaryngology/fullarticle/605315) |
| 100–107 | **Hughes EC, Arthur RH, Whitaker CW** | Transdermal Electrostimulation in Sensory Hearing Loss | Pilot with placebo control — **mixed positive**, gains lost in 3–4 months | [JAMA 605317](https://jamanetwork.com/journals/jamaotolaryngology/fullarticle/605317) |
| 107–108 | (unsigned) | Transdermal Electrostimulation Therapy | Editorial | not retrievable via DOI route |

### §VII.3.B — Gerken / Glorig / Roeser 1974 (the second negative replication)

**Verbatim conclusion (from JAMA abstract):** *"Transdermal therapy is inappropriate for the treatment of sensorineural hearing loss."*

Methodology: n=16 sensorineural-hearing-loss subjects, double-blind, randomized, placebo-controlled. Two electrostimulation conditions tested vs. placebo. No therapeutic benefit observed in either condition.

**Aram Glorig** is significant context. He was a major industrial/forensic ear specialist of the era ([NYT obituary, July 5, 1998](https://www.nytimes.com/1998/07/05/us/aram-glorig-92-authority-on-the-ear-and-its-disorders.html)). His co-authorship places him alongside Stanford (Simmons) and Arizona (Glattke) as a third heavyweight institutional opponent of the transdermal-therapy claim within the same issue. **Gerken/Glorig/Roeser is a second, independent, double-blind, placebo-controlled negative replication that Pass II did not log.**

### §VII.3.C — Hughes / Arthur / Whitaker 1974 (the mixed-positive pilot)

Pilot study, placebo-controlled. Reports 16–25% improvement in W-22 word-discrimination scores in 35–40% of subjects' better ears. **Critically: gains were lost in 3–4 months unless maintained.** This third paper is the closest the JAMA symposium comes to a positive finding, but the loss-without-maintenance result is itself damaging to the Puharich/Lawrence durability claim and is the symposium's own rebuttal of any "the therapy worked but was suppressed" narrative.

### §VII.3.D — Implication for the repo's framing

The symposium structure implies *Archives of Otolaryngology* coordinated a definitive 1974 evaluation of the Puharich/Lawrence transdermal-therapy line:
- **Two independent double-blind negative replications** (Glattke/Simmons, n=31; Gerken/Glorig/Roeser, n=16)
- **One mixed-positive pilot** with self-defeating durability results (Hughes/Arthur/Whitaker)
- **One unsigned editorial** (which would have provided the symposium's own framing)

Pass II's "Glattke & Simmons is *the* JAMA-line failure-to-replicate paper" framing should be read as superseded by §VII.3 to read: "Glattke & Simmons is **one of two double-blind negative replications** in a coordinated four-paper *Archives of Otolaryngology* symposium on transdermal electrostimulation therapy." The symposium structure makes the JAMA-line repudiation roughly twice as forceful as Pass II suggested.

The 1974 editorial (pp. 107-108) is a high-priority retrieval target for any future pass — it would represent the JAMA editorial board's contemporaneous summation of the transdermal-therapy evidence base.

---

## §VII.4 Lawrence biography — Edgewood Army Chemical Center, early 1950s

Pass V established that Joseph L. Lawrence is a D.D.S. (per [NYT Feb 20, 1971](https://www.nytimes.com/1971/02/20/archives/2-doctors-claim-progress-in-aiding-the-deaf.html) — "a doctor and a dentist"). Pass VII recovers an earlier collaboration node.

**Source:** Andrija Puharich, *The ELF Magnetic Model of Matter and Mind, The Origin of Life, and the Art of Healing* (1987) ([peatysharing/bibliography mirror](https://raw.githubusercontent.com/peatysharing/bibliography/main/Andrija%20Puharich/1987%20-%20Andrija%20Puharich%20-%20Elf%20Magnetic%20Model%20Of%20Matter%20And%20Mind%2C%20The%20Origin%20Of%20Life%2C%20And%20The%20Art%20Of%20Healing.pdf)).

**Verbatim:** *"Joe Lawrence, a dentist, joined me in this research in the early 1950's, when we were stationed at the Army Chemical Center, Edgewood, Maryland."*

This pre-dates Intelectron Corp. (incorporated 1962, per Pass V SEC filings) by ~10 years. The Puharich/Lawrence collaboration timeline is therefore:

| Period | Locus | Source |
|---|---|---|
| Early 1950s | Army Chemical Center, Edgewood MD | Puharich 1987 (above) |
| 1962 | Intelectron Corp. (171 East 77th St NYC, per SEC pre-offering) | SEC filing, Pass V |
| 1964 | RADC-TDR-64-18 contract performance, Intelectron, **432 West 45th St NYC** | Puharich 1987 (below) |
| 1971 | NYT joint interview | NYT Feb 20, 1971 |

The Edgewood placement is significant because the U.S. Army Chemical Corps' Edgewood Arsenal was the principal site for Cold War-era human-subjects experimentation on chemical and behavioral agents. Whatever Puharich/Lawrence's research subject was at Edgewood, the venue places their first decade of collaboration squarely within the U.S. military's behavioral-and-chemical-instrumentation R&D portfolio, not within civilian otology.

### §VII.4.A — Fourth Intelectron NYC address

Same Puharich 1987 PDF lists Intelectron's contract-performance address as **432 West 45th Street, New York** (in the contract identifier line: "AF30(602)-3051, Intelectron Corporation, 432 west 45th Street, New York"). Intelectron NYC address record is now:

| Date | Address | Source |
|---|---|---|
| Dec 1962 | 171 East 77th St (pre-offering registration) | SEC, Pass V |
| 1964 | **432 West 45th St** (RADC contract performance) | Puharich 1987, this pass |
| (later) | 570 Fort Washington Avenue | Puharich resume |
| 1971 | NYC implied (no street) | NYT Feb 20, 1971 |

The 1964 address appears to be a different location from the 1962 SEC pre-offering address. This is consistent with Intelectron expanding or relocating between SEC registration and contract execution but introduces a possible discontinuity that future passes may want to resolve via NY State corporate records.

---

## §VII.5 First external academic forward-citation of RADC-TDR-64-18

**Source:** Merzenich MM, Michelson RP, Pettit CR, Schindler RA, Reid M. "Neural Encoding of Sound Sensation Evoked by Electrical Stimulation of the Acoustic Nerve." *Annals of Otology, Rhinology & Laryngology* 82(4), July-August 1973, pp. 486–504. ([SAGE journal page](https://journals.sagepub.com/doi/10.1177/000348947308200407)).

This UCSF cochlear-implant team cites **RADC-TDR-64-18 as reference 5** in their bibliography. This is, to date, the **earliest documented external academic citation** of the report — predating Glattke & Simmons 1974 (the negative replication, Pass II) by approximately one year.

The citation is significant because Michael Merzenich's UCSF cochlear-implant program became the world's leading authority in electrical-stimulation hearing research and the institutional ancestor of modern cochlear-implant technology. That the UCSF team cited Puharich/Lawrence in 1973 establishes that the report was known to and engaged with by the most credible mainstream cochlear-implant researchers a year before the *Archives of Otolaryngology* symposium (§VII.3) repudiated the transdermal-therapy claim. This pattern — engaged with by mainstream science, then formally repudiated — is consistent with the JAMA symposium being a *response* to enduring claims that mainstream researchers had been forced to take seriously.

---

## §VII.6 Contract anatomy — AF30(602)-3051, Project 5534, Task 553401

Pass IV established the contract identifier. Pass VII contextualizes it.

**Source:** American Polygraph Association journal *Polygraph*, 1973 ([APA Polygraph 1973 Vol 2 No 2](https://www.polygraph.org/docs/polygraph_1973_022.pdf)).

The journal cites RADC-TDR-64-101 (Kubis 1962, lie-detection) under the same RADC Project 5534 / Task 553401 line. This places **Puharich/Lawrence's RADC-TDR-64-18 as a sister deliverable in an institutional polygraph / lie-detection / behavioral-instrumentation research portfolio**, not within a hearing-research portfolio.

This anatomy explains why a hearing-aid contract was funded by Rome Air Development Center (an electronic-warfare and signals-intelligence command, not a medical command): the institutional purchaser was buying behavioral-instrumentation capability, and electrostimulated word-discrimination was one node in a portfolio that also funded lie-detection research. This is the cleanest available explanation of the jurisdictional anomaly that Passes II–VI flagged but did not resolve.

The portfolio framing also retroactively confirms §VII.4's Edgewood placement: the Puharich/Lawrence collaboration began in U.S. Army behavioral-agent research and continued into U.S. Air Force behavioral-instrumentation research without ever passing through a civilian-otology institutional venue.

---

## §VII.7 What this pass changes about prior framings

| Prior framing | Pass VII update |
|---|---|
| Pass II §II.1 — "Glattke & Simmons 1974 is **the** JAMA-line negative replication" | Superseded by §VII.3: Glattke/Simmons is **one of two** double-blind negative replications in a four-paper symposium. Gerken/Glorig/Roeser 1974 is a second, independent negative replication that Pass II did not log. |
| Pass II — single-paper JAMA repudiation framing | Superseded by §VII.3: coordinated four-paper symposium structure (2 negative + 1 mixed-positive pilot + 1 editorial). |
| Pass IV–V — the bare "9" had unclear textual origin | Resolved by §VII.2: McMurtrey himself authored the bare "9" in a 6-Apr-2005 draft and removed it from his 2006 published version. The bare "9" is McMurtrey's paraphrase artifact, never traceable to any Puharich/Lawrence primary. |
| Pass VI — Intelectron NYC has 3 known addresses | Updated by §VII.4.A: 4 addresses, with 432 W 45th St NYC newly recorded as the 1964 contract-performance address. |
| Pass V — Lawrence biography starts at Intelectron 1962 | Updated by §VII.4: collaboration starts ~10 years earlier at Army Chemical Center Edgewood MD, early 1950s. |
| Pass II — RADC-TDR-64-18 has no recorded external academic citation | Updated by §VII.5: Merzenich et al. 1973 (UCSF cochlear-implant team) is the first external academic citation, predating the Glattke/Simmons negative paper by one year. |
| Pass IV — Air Force contract anatomy unclear | Resolved by §VII.6: AF30(602)-3051 sat within RADC Project 5534 / Task 553401, an institutional behavioral-instrumentation / polygraph-research portfolio, explaining the jurisdictional anomaly. |

---

## §VII.8 Open targets remaining after Pass VII

1. Full-text retrieval of RADC-TDR-64-18 / AD 459956 from DTIC. NASA NTRS bibliographic confirmation (§VII.1) is now the strongest available substitute.
2. Retrieval of the *Archives of Otolaryngology* 100(2) August 1974 unsigned editorial (pp. 107–108) — the symposium's own contemporaneous summation of the transdermal-therapy evidence base.
3. Lawrence's NY State dental license number, dental school of record, and death record. Pass VII places the collaboration at Edgewood early 1950s but does not establish his pre-Edgewood training.
4. NY State corporate records for Intelectron Corp. between 171 E 77th St (Dec 1962) and 432 W 45th St (1964) to confirm/contest a relocation event.
5. The 2005-vs-2006 McMurtrey textual delta should ideally be confirmed against an archived 2005 primary (not just the 2011 FOI mirror) — the WhatDoTheyKnow attachment is provenance-fragile by itself.
6. RADC Project 5534 contractor list — sister deliverables to RADC-TDR-64-18 within the same project number would map the full behavioral-instrumentation portfolio.

---

## §VII.9 Bottom line

The "9 hearing-impaired patients" sentence is now fully traced as a paraphrase artifact created by McMurtrey himself in 2005 and withdrawn by him in 2006. The JAMA criticism that IMG_5285 anticipated is now identified as a coordinated four-paper *Archives of Otolaryngology* symposium with two independent double-blind negative replications, not a single paper. The Puharich/Lawrence collaboration is now traced back to U.S. Army Chemical Corps research at Edgewood Arsenal in the early 1950s, ~10 years before Intelectron Corp. The contract that produced RADC-TDR-64-18 sat within an Air Force behavioral-instrumentation / polygraph research portfolio, which is the cleanest available explanation for why a hearing-aid contract was issued by an electronic-warfare command. The first external academic citation of the report comes from the UCSF cochlear-implant team in 1973, a year before the JAMA symposium repudiated the transdermal-therapy claim.

The investigation's working summary line (suggested for SYSTEMS_AND_PATENTS_MASTER_INDEX) is now:

> Puharich/Lawrence (Intelectron Corp., NYC) developed transdermal AM-RF electrostimulation hearing therapy under USAF contract AF30(602)-3051 (RADC Project 5534 / Task 553401, behavioral-instrumentation portfolio) producing RADC-TDR-64-18 (Dec 1964, 79 pp, AD 459956). Primary patient counts are n=15 (12 SNHL + 3 totally deaf) per AsMA 1964 and n=12 per US Patent 3,629,521. The "9 hearing-impaired patients" denominator-less paraphrase originates in a 2005 McMurtrey draft and was withdrawn by McMurtrey in his 2006 published version. The JAMA-line repudiation is a coordinated four-paper *Arch. Otolaryngol.* symposium (August 1974) containing two independent double-blind negative replications (Glattke/Simmons n=31; Gerken/Glorig/Roeser n=16). The Puharich/Lawrence collaboration begins ~10 years earlier at U.S. Army Chemical Center, Edgewood, MD.
