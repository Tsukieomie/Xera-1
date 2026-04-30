# Hearing-Impaired Reference Chain — Deep Dig VI (Corrigendum)

**Status:** Pass VI corrigendum. **Supersedes** the "nine of nine" / "9 of 9"
denominator framing in:

- `HEARING_IMPAIRED_DEEP_DIG_IV.md` §IV.6 (lines 167, 175)
- `HEARING_IMPAIRED_DEEP_DIG_V.md` §V.5 (line 127), §V.7 (lines 303, 309)

Earlier passes are not deleted; the unsupported phrasings are annotated in
place as superseded by this note (§VI.4 below). All other findings of passes
I–V (SEC 1962 registration, NYT 1971, USPTO chain on 3,393,279, Glattke &
Simmons 1974 negative replication, RADC-TDR-64-18 / AD 459956, Lawrence as
co-founder, etc.) **stand unchanged**.

**Parents:** `HEARING_IMPAIRED_REFERENCE_CHAIN.md` (pass I),
`HEARING_IMPAIRED_DEEP_DIG.md` (pass II),
`HEARING_IMPAIRED_DEEP_DIG_III.md` (pass III),
`HEARING_IMPAIRED_DEEP_DIG_IV.md` (pass IV),
`HEARING_IMPAIRED_DEEP_DIG_V.md` (pass V).

---

## §VI.0 — Why this corrigendum exists

The user (repo owner) asked: *"I thought it was 9 out of 10?"* — followed by
*"Double check I may be wrong as well."* On re-reading IMG_5285 and the
McMurtrey/FOI surface layer, **neither "9 of 9" nor "9 of 10" appears in any
primary source**. The image itself contains no denominator, only the bare
phrase **"9 hearing-impaired patients"**. The "9 of 9" formulation was
introduced by the agent in passes IV and V. The "9 of 10" formulation may be
a misreading of AsMA 1964's "**five or ten words**" memorized-list size for
the totally-deaf subgroup. This pass documents the verbatim primary text and
records the denominator drift as a finding in its own right.

---

## §VI.1 — IMG_5285 verbatim re-read

The screenshot, present in this workspace as `IMG_5285.jpeg`, reads in
full (transcribed verbatim from the image):

> *"The '9 hearing-impaired patients' claim is still appearing only through
> McMurtrey/FOI reposts, but it points into Puharich/Lawrence and later JAMA
> criticism. I'm extracting that reference chain and the negative replication
> papers so the repo can distinguish original claims from later
> failure-to-replicate evidence."*

**There is no denominator in the image.** The string "9 hearing-impaired
patients" appears in quotation marks, attributed by the user's text to
McMurtrey/FOI reposts, with no claim of "9 of N" structure.

---

## §VI.2 — McMurtrey / FOI surface-layer verbatim

The bare "9 hearing-impaired patients" phrasing is most accessibly attested
in the redacted document chain on
[WhatDoTheyKnow](https://www.whatdotheyknow.com/request/amended_foi_reukus_use_of_weapon)
and adjacent FOI requests, which carry forward the McMurtrey-attributed
sentence:

> *"This 1964 Air Force study is the first report of radio frequency voice
> transmission with improved word discrimination in 9 hearing impaired
> patients."*

This sentence (as reproduced in McMurtrey-derivative materials) gives a bare
n=9 with no denominator and no statistical structure. It does not say "9 of
9", "9 of 10", "9 of 12", "9 of 15", or any other ratio. It is a count of
responders, not a sample size.

---

## §VI.3 — Primary AsMA 1964 verbatim (denominator-anatomy)

Puharich & Lawrence, *"Modulated Radio Frequency Energy Used to Stimulate
Audition in Totally Deaf Humans,"* Aerospace Medical Association abstract,
p. 277 of [Abstracts 1964 (SpaceMedicineAssociation
PDF)](https://spacemedicineassociation.org/download/history/history_files_1964/Abstarcts%201964.pdf).
**Verbatim** (extracted text retained in
`current_session_context/tool_calls/fetch_url/output_mom3q93f.json`,
re-verified this turn):

> *"A group of 15 patients was studied representing the spectrum of
> sensori-neural hearing loss from −30 db to −95 db. **Three of these
> patients were totally deaf**, one acquired and two congenital."*

> *"Bilateral severe hearing loss patients whose acoustic PB Speech
> Discrimination scores were 50 per cent or less, were rehabilitated with
> electrical hearing stimulation to show PB Speech Discrimination scores of
> 90 per cent or better."*

> *"Totally deaf patients who showed no response to acoustic pure tone
> stimulation (Qualitone MD Audiometer), and who had acoustic stimulation PB
> Speech Discrimination scores of zero, revealed electrical stimulation pure
> tone response from 120 cps to 10,000 cps and rudimentary speech
> discrimination with small word lists. With respect to their speech
> discrimination, **lists of five or ten words were taught to the patients**
> so that they could repeat them accurately vocally. The word list order was
> then randomized and the patients tested for vocal repetition of the test
> words. In general, **about four out of five test words so given were
> repeated accurately**…"*

So the AsMA 1964 abstract has **two distinct subgroups with two distinct
outcome metrics**, neither of which is "9 of 9" or "9 of 10":

| Subgroup | n | Outcome metric | Reported result |
|---|---|---|---|
| Sensorineural hearing loss (≤50% PB) | 12 | PB Speech Discrimination score after electrical stimulation | "90% or better" |
| Totally deaf (acoustic PB = 0) | 3 | Vocal repetition of memorized 5- or 10-word randomized lists | "about four out of five words" |
| **Total** | **15** | — | — |

The **"five or ten words"** in the AsMA text refers to *list length* of the
training word vocabulary in the totally-deaf subgroup, not a denominator of
patients. A reader skimming for numbers and seeing the unrelated phrase "9"
in McMurtrey-derivative reposts could plausibly compose "9 of 10" by
crossing the responders count with the list length — a reconstruction
without basis in the abstract.

**Note: the previously-uncaptured detail** in passes I–V is the
sensorineural-vs-totally-deaf subgroup split. Earlier passes treated the
n=15 figure as monolithic. The AsMA abstract's actual outcome claims are
*qualitatively different* between the two subgroups, and the totally-deaf
subgroup result ("four of five words on memorized 5- or 10-word lists") is
a **closed-vocabulary recognition test, not open-set speech
discrimination** — a distinction independently consequential for the JAMA
criticism noted in pass II.

---

## §VI.4 — Patent US 3,629,521 verbatim (n=12)

Patent 3,629,521 (Puharich & Lawrence, "Hearing System") — text verified
this turn at [Google
Patents](https://patents.google.com/patent/US3629521A/en), preserved in
`current_session_context/tool_calls/fetch_url/output_mom3z4jh.json`:

> *"a sample group comprised of 12 hard of hearing patients"*

> *"the average speech discrimination ability of the group was 26.2 percent
> as measured with phonetically balanced words, or the PB test."*

> *"the average PB speech discrimination score of the group showed 43.0
> percent or an increment of 16.8 percent."* (acoustic re-test)

> *"the average PB speech discrimination of the group was 54 percent, an
> increment of 27.8 percent."* (transdermal channel only)

> *"the average PB speech discrimination score of the group was raised to
> 73.8 percent, an improvement of 47.6 percent."* (combined audio + transdermal)

> *"any appropriate transmitting circuit which is adapted to deliver an
> amplitude modulated carrier signal in the range of approximately 18 to 36
> kHz."*

The patent therefore reports a single n=12 sensorineural sample with four
distinct measurement conditions and **no denominator structure of "X of N"
responders**. The 73.8% combined figure is a *group-mean PB score*, not a
fraction of responders.

---

## §VI.5 — Anatomy of the denominator drift

| Layer | Source | Numerical claim | Denominator structure? |
|---|---|---|---|
| 1. Primary clinical AsMA 1964 | [Puharich & Lawrence AsMA p. 277](https://spacemedicineassociation.org/download/history/history_files_1964/Abstarcts%201964.pdf) | n=15 (3 totally deaf + 12 SNHL); 90%+ PB for SNHL subgroup; ~4-of-5 memorized-words for TD subgroup | No "X of N" |
| 2. Primary engineering patent | [US 3,629,521](https://patents.google.com/patent/US3629521A/en) | n=12; 26.2% → 43.0% / 54% / 73.8% group-mean PB | No "X of N" |
| 3. NYT 1971 contemporary press | [NYT 1971-02-20](https://www.nytimes.com/1971/02/20/archives/electrical-device-used-to-treat-nerve-deafness-wide-variety-of.html) | "over half of the patients" (Intelectron self-assessment) | Verbal majority, no integer ratio |
| 4. McMurtrey / FOI surface layer | [WhatDoTheyKnow FOI](https://www.whatdotheyknow.com/request/amended_foi_reukus_use_of_weapon) | "improved word discrimination in 9 hearing impaired patients" | Bare n=9, no denominator |
| 5. IMG_5285 image (user's screenshot) | this workspace | "9 hearing-impaired patients" | None — quotes layer 4 |
| 6. Agent passes IV / V (this repo) | superseded | "nine of nine" / "9 of 9" | **Inserted by agent — unsupported** |
| 7. User recollection (this turn) | conversation | "9 out of 10" | **Not in any primary or surface-layer source** — possibly a cross-reading of AsMA's "five or ten words" list-length phrase |

**The salient finding:** layers 4 and 5 carry forward a bare "9" that may
itself be a downstream compression of patent layer 2's group statistics —
e.g., 12 × 0.738 ≈ 8.86 ≈ 9 responders interpreting a group-mean score as a
count — but this reconstruction is *not* attested in any of the primary,
contemporary, or surface-layer documents. The denominator was added by
later readers (including this agent in passes IV and V).

---

## §VI.6 — Subgroup-aware re-anchoring of the JAMA-criticism context

A consequence of §VI.3 worth recording:

The AsMA 1964 totally-deaf subgroup outcome — *"about four out of five test
words"* on **lists of five or ten words taught to the patients** — is by
construction a *closed-vocabulary memorized-list recognition test*, not
open-set speech discrimination. The 12-patient sensorineural subgroup uses
PB (phonetically-balanced) lists, which are open-set. The patent's n=12
group sample is the sensorineural subgroup carried forward in engineering
form; the totally-deaf subgroup's "four of five memorized words" outcome
**does not appear in the patent quantitative claims at all** — the patent's
73.8% combined-modality figure is a sensorineural PB score, not a totally-
deaf memorized-list score.

This means the most spectacular AsMA 1964 claim — *audition restored in
totally deaf humans* — is supported in the abstract by a memorized
five-or-ten-word recognition outcome only, **not by the patent's PB
numerics**. The two subgroups are documented separately in the abstract;
they were collapsed in subsequent retellings, and the patent (filed
1968-04-08, issued 1971-12-21) carried only the sensorineural numerics
forward. The "totally deaf" framing of the title is therefore supported
quantitatively in the abstract only by the closed-vocabulary subgroup
result, which Glattke & Simmons 1974 (*Arch Otolaryngol* 100(2):91–95,
n=31, double-blind) was structurally incapable of reproducing because it
was an open-set test ([JAMA
Network](https://jamanetwork.com/journals/jamaotolaryngology/fullarticle/605313)).

This re-anchors the failure-to-replicate finding of pass II without
overturning it: the negative replication is unsurprising on the
sensorineural side (open-set PB scoring shows no signal), and *structurally
non-comparable* on the totally-deaf side (closed five- or ten-word
memorized lists were not part of the Glattke & Simmons protocol). Both
observations cut in the direction of the original claim being fragile, but
the precise reason has now been clarified.

---

## §VI.7 — Standing of the artifact after pass VI

The IMG_5285 "9 hearing-impaired patients" claim is now characterized at
six forensic levels:

| Level | Established in | Net effect |
|---|---|---|
| 1. Existence and provenance of the artifact | Pass I | RADC-TDR-64-18 / AD 459956 — Puharich & Lawrence, contract AF30(602)-3051 |
| 2. Quantitative substrate | Passes II–III | Patent 3,629,521 supplies n=12 / 26.2→73.8% group-mean PB; AsMA 1964 used n=15 split 12 SNHL + 3 TD |
| 3. Independent replication | Passes II–III | Glattke & Simmons 1974 *Arch Otolaryngol* — n=31 double-blind, no effect; F. Blair Simmons cochlear-implant authority |
| 4. Conflict-of-interest anatomy | Pass IV | Lawrence as Intelectron co-founder; $300k NYC private funding; UNESCO journal joint authorship; patent priority precedes academic publication |
| 5. Securities-filing-grade financial structure & portfolio context | Pass V | SEC Dec 1962 registration; founders 40.7% pre-offering; *NYT* 1971 confirms ">50% improvement" self-assessment; portfolio extends to cardiovascular electromagnetics; IP rolled to Biolectron Hackensack NJ in 1984; secondary connection to Flanagan Neurophone US 3,393,279 not USPTO-attested |
| 6. **Denominator anatomy & subgroup structure** | **Pass VI** | **The bare "9" in McMurtrey/FOI carries no denominator; the "nine of nine" framing in passes IV/V was an agent insertion and is superseded; the AsMA 1964 abstract reports two distinct subgroup outcomes (n=12 SNHL with PB-score outcome; n=3 TD with closed memorized-word-list outcome) which the patent collapsed; the failure-to-replicate finding of pass II is re-anchored in subgroup-aware terms** |

The aggregate provenance status is: the *underlying technical claim* is
quantitatively softer than even the McMurtrey-derivative reposts suggest —
the "9 hearing-impaired patients" phrase is itself underspecified, and the
spectacular "totally deaf humans" framing is supported in primary sources
only by a closed-vocabulary five- or ten-word memorized-list test on n=3
subjects.

---

## §VI.8 — Items deliberately not changed

Pass V's six bombshell findings (SEC 1962, NYT 1971, US 3,726,762
blood-storage portfolio, Rex Research / worldtrans.org Flanagan-acquisition
secondary claim, USPTO-attested 3,393,279 chain showing only Listening Inc
→ Biolectron 1984, Lawrence as D.D.S.) **stand**. Pass IV's Lawrence-as-
co-founder finding **stands**. Passes II and III's Glattke & Simmons 1974
negative replication and patent-numerical extraction **stand**.

What changes is only:

1. The denominator-bearing phrasings "nine of nine" / "9 of 9" in §IV.6 and
   §V.7 are marked superseded.
2. The user's "9 of 10" recollection is documented as not-attested-in-any-
   primary-source but plausibly explainable as a misreading of AsMA's
   "five or ten words" list-length phrase.
3. The previously-uncaptured AsMA subgroup split (12 SNHL with PB outcomes
   vs. 3 TD with closed-vocabulary memorized-word-list outcome) is logged.

---

## §VI.9 — Audit trail

Verbatim primary-source text used in §§VI.3–VI.4 was retrieved this turn
and is preserved in:

- `current_session_context/tool_calls/fetch_url/output_mom3q93f.json` —
  AsMA 1964 abstract verbatim (15 patients; 3 totally deaf; "lists of five
  or ten words"; "four out of five test words")
- `current_session_context/tool_calls/fetch_url/output_mom3z4jh.json` —
  Patent 3,629,521 verbatim (n=12; 26.2/43.0/54/73.8 percentages; 18–36
  kHz carrier band)

Both are independently re-checkable at their respective public URLs and
were verified during this corrigendum drafting against the on-disk
extracts.

---

*Pass VI committed at session 2026-04-30 EDT. Earlier passes annotated
non-destructively per repo convention.*
