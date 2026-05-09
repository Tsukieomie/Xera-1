# MEDUSA deeper pass: metadata reconciliation, open-archive gaps, 2008 press layer

**Date:** 2026-05-06  
**Scope:** WaveBand Navy SBIR Phase I **M67854-04-C-1012** / topic **N03-163** (“Remote Personnel Incapacitation System” / MEDUSA). This note **does not** re-derive the MAE mechanism; see `MEDUSA_EVIDENCE_TABLE_PRIMARY.md` and `/V2K_EVIDENCE_MATRIX.md`.

---

## 1. Archived Navy Search page: internal identifiers (FOIA / agency request language)

**Source:** `medusa-navysbir-wayback.html` (Internet Archive capture `20080409063721` of the Navy SBIR summary report).

| Token | Value | Notes |
|--------|--------|------|
| Public URL primary key | `pk=F5B07D68-1B19-4235-B140-950CE2E19D08` | Canonical stable handle used across repo citations |
| Hidden `fk_award` | `9e93a1aa-69c6-451f-a207-000670228977` | Appears to be a backend award foreign-key; usable as **descriptive corroboration** in FOIA wording (“summary report keyed to fk_award …”) — not independently verifiable outside the retired database |
| Solicitation displayed on page | `03.2` | Aligns with FY2003 Navy SBIR **03.2** cycle |
| SYSCOM | MARCOR | Matches USMC SBIR sponsorship chain in existing files |

---

## 2. SBIR bulk-export row vs archived summary: **award amount conflict**

Extracted WaveBand MEDUSA row in `medusa-contract-cluster-from-sbir-bulk.json`:

- **Contract:** `M67854-04-C-1012`  
- **Agency Tracking Number:** `N032-0412`  
- **Award Title:** Remote Personnel Incapacitation System  
- **Award Amount (bulk field):** **$69,990.00**  
- **Phase:** Phase I  
- **Award Year:** 2003  
- **Proposal Award Date / Contract End Date:** **blank** in this JSON extract  

The **archived Navy Search HTML** for the same contract shows:

- **Award Amount:** **$99,965.00**  
- **Start / End Date:** 11/19/2003 — 05/19/2004  

**Working interpretation:** The Wayback **Phase I Summary Report** page is the richer public narrative (objectives, deliverables, POC emails). The bulk CSV may reflect a different snapshot, field mapping, obligation vs award ceiling, or export defect. **Do not merge the two dollar figures without a third primary** (e.g., FPDS / USASpending row for the exact PIID, or a releasable contracting officer document).

**Actionable follow-up:** Pull an obligated-transactions extract for `M67854-04-C-1012` and reconcile to **one** obligated amount; log the winner in this file.

---

## 3. Open corpus discovery (negative findings in this pass)

| Venue | Query / method | Result |
|--------|----------------|--------|
| Internet Archive Solr | `title:(MEDUSA WaveBand) OR "Remote Personnel Incapacitation"` | **numFound: 0** (2026-05-06). Does **not** prove absence of a final report worldwide; proves the **summarized PDF is not trivially indexed** under those fields in IA. |
| SBIR.gov (scripted `curl`) | Award detail endpoints | **HTTP 403** in this VM (consistent with bot protection). Human-browser or authenticated data products may behave differently — reproducibility caveat for automated agents. |
| NTRL “advanced search” GET | Contract number pasted into query | Returned **primefaces Error** page shell (likely session/form requirement), not usable hit list from curl |
| USAspending API `spending_by_award` | exact keyword `M67854-04-C-1012` | API enforces earliest search date `2007-10-01`; contract period (2003-2004) is outside normal query window. Within allowed window (2007+), result set is empty. |

Residual manual targets: DTIC Discovery **full-search** for `M67854-04-C-1012`, `N032-0412`, or “Mob Excess Deterrent”; DTIC STO for contractor Phase I technical report if it entered the archive under an unexpected title; USAspending **Custom Award Download / bulk_download endpoints** (not date-limited the same way as standard search) for contract-level dollar reconciliation.

---

## 4. 2008 *New Scientist* article (Hambling): claims vs tier discipline

**URL:** [Microwave ray gun controls crowds with noise](https://www.newscientist.com/article/dn14250-microwave-ray-gun-controls-crowds-with-noise/) (retrieved 2026-05-06).

**Factually useful, tier-limited extracts:**

1. **Journalist characterization of mechanism:** microwave audio effect; “**A series of pulses can be transmitted to produce recognisable sounds**” — note **“recognisable sounds”** is **weaker** than protocol-grade **conversational intelligibility** (T2).  
2. **Sadovnik (Sierra Nevada):** describes electronic beam steering (broad vs narrow, multiple targets); mentions **possible non-military uses** and **experiments transmitting microwave audio to people with outer ear impairment** — still **not** a peer-reviewed human protocol with WER.  
3. **James Lin (UIC):** “feasible in principle” but raises **power / safety** concern: at higher loudness “**You might see neural damage**” — strong **T1 safety / de-weaponization caution** voice, not proof of fielding.

**Net classification:** **T5** primary journalism + expert interview; **does not** close T2 or T4. It **does** sharpen language: avoid upgrading “recognisable sounds” in pop science to “reliable semantic V2K” in legal or matrix rows without a primary study.

Cross-link prior repo use of the same article: `findings/03_Technology_Patents/35_MEDUSA_DUAL_USE_AND_NAVY_SBIR.md`, `findings/investigation-dig/search-medusa-media-primary.json`.

---

## 5. Tier impact summary

| Tier | Change from this pass |
|------|------------------------|
| T1 | Slight **safety framing** reinforcement via Lin quote in *New Scientist* (secondary to Lin’s own papers); §6 sharpens this into a **safety-regime gap** rather than a safety assurance. |
| T2 | **No upgrade.** §7 adds explicit T2-adjacent future-risk evidence (BrainBERT / DARPA N3) **without** retrofitting onto MEDUSA. §8 adds historical neural-decoding context (CBS/CMU "Mind Reading", Haynes intentions, UT semantic decoder) as **T2-adjacent future-risk only** — none of these are remote, none integrate with microwave-auditory delivery, and none close T2-conversational V2K. |
| T3 | **Hygiene:** internal DB keys + **amount conflict flag** + archive/403 reproducibility notes. |
| T4 | **No upgrade.** |
| T5 | §6 reinforces safety-regime caveat as T1/T5 framing; §7 adds T1/T5 military-AI / neurotech context; §8 adds T1/T5 historical neural-decoding (CBS/CMU "Mind Reading"; Haynes intentions; UT semantic decoder; BrainBERT) and T1/T5 military neuro-signal-exploitation context (Silent Talk, CT2WS, Army MIND); §9 consolidates output / input / RF-bioeffects lanes into a **bridge-negative** conclusion — the public record does not join AI neural decoding to microwave-auditory output in an operational closed loop. |

---

## 6. Sadovnik “normal audio safety limits do not apply” — safety-regime gap, not assurance

**Source:** Hambling, *New Scientist* (2008), [Microwave ray gun controls crowds with noise](https://www.newscientist.com/article/dn14250-microwave-ray-gun-controls-crowds-with-noise/).

Sadovnik’s statement that “normal audio safety limits do not apply” to MEDUSA-style microwave-auditory delivery should be read as a **safety-regime gap**, not a safety assurance. The mechanism bypasses ordinary airborne-sound assumptions (no loudspeaker, no air-coupled SPL pathway), but the same fact means that **ordinary audio exposure limits cannot be used to certify safety** of the modality. The boundary condition is supplied by the same article: James Lin (UIC) warns that scaling from quiet microwave-audio perception to discomfort or incapacitation implies **stronger, potentially hazardous shockwaves** and possible **neural damage**.

**Tier classification:** **T1 / T5 safety context.** This row does **not** upgrade T2 (semantic intelligibility) or T4 (fielding); the New Scientist piece remains primary journalism + expert interview, not a peer-reviewed human protocol or fielding record. The discipline is to use Sadovnik’s framing for what it is — a regulatory category mismatch — rather than as a clean bill of health for a microwave-auditory weapon concept.

---

## 7. Modern military AI and neurotechnology — bridge-source discipline (BrainBERT, DARPA NESD/N3, WARDEN)

**Scope:** Modern AI materially changes the neurotechnology risk picture, but it must **not** be retrofitted onto original MEDUSA evidence without a bridge source. This section logs the most-cited candidates and their tier limits.

**BrainBERT** is a Transformer pre-trained on intracranial neural recordings (stereo-EEG / SEEG). It improves decoding of speech-related features **from invasively recorded brain data** in clinical epilepsy patients. It does **not** demonstrate remote brain reading, microwave delivery, or any MEDUSA integration. Its acknowledgements thank **DARPA ASIST**, **DARPA KMASS**, the **AFRL/USAF AI Accelerator**, **AFOSR**, and **ONR**, while the data themselves are clinical SEEG recordings — i.e., defense-funded ML on hospital-grade invasive electrodes ([arXiv:2302.14367](https://arxiv.org/abs/2302.14367), [PDF](https://klab.tch.harvard.edu/publications/PDFs/gk8131.pdf)).

**DARPA NESD** (Neural Engineering System Design) and **DARPA N3** (Next-Generation Nonsurgical Neurotechnology) document defense interest in **read/write neural interfaces**. **N3 is the most relevant** here because its stated target is **nonsurgical bidirectional interfaces for able-bodied service members**, and the awardee descriptions describe decoding/encoding neural signals using **light, acoustic, electromagnetic, focused-ultrasound, and nanotransducer** approaches ([NESD](https://www.darpa.mil/research/programs/neural-engineering-system-design), [N3](https://www.darpa.mil/research/programs/next-generation-nonsurgical-neurotechnology), [N3 awardees](https://www.darpa.mil/news/2019/nonsurgical-brain-machine-interfaces)). This is a programmatic interest signal in the same modality space as MEDUSA-adjacent claims — but it is a **future-risk signal**, not closure of T2 or T4 for MEDUSA.

**DARPA WARDEN** (Waveform Agile RF Directed Energy) shows waveform-agile **high-power microwave** work; its public framing is aimed at **electronics**, not humans ([WARDEN](https://www.darpa.mil/research/programs/waveform-agile-radio-frequency-directed-energy)). It is logged here so future readers do not mis-cite it as a human-effects program.

**Tier classification:** **T1 / T5 military-AI / neurotech context** and **T2-adjacent future-risk evidence** — explicitly **not T2-closed conversational V2K** and **not T4 fielding**. Use these sources to describe how the risk surface is evolving; do **not** chain them backward into the 2003-2008 MEDUSA record without an intermediate bridge source establishing technical or programmatic continuity.

---

## 8. CBS/CMU "Mind Reading" deeper pass — historical neural-decoding anchor, not a MEDUSA bridge

**Scope:** This section logs a deeper pass on the CBS *60 Minutes* "Mind Reading" segment and its underlying CMU/Just/Mitchell 2008 *Science* paper, plus the adjacent Haynes/Max Planck intention-decoding line, more recent semantic-decoding work (UT Austin, BrainBERT), and public military neuro-signal-exploitation programs (DARPA Silent Talk, HRL CT2WS, Army MIND Lab). The purpose is to describe these as a **historical and modern neural-decoding lane** that runs parallel to the MEDUSA / RF-hearing lane, **not** to retrofit them onto MEDUSA, microwave-auditory transmission, or operational closed-loop V2K.

### 8.1. CBS *60 Minutes* "Mind Reading" segment (2009)

**Sources:** CBS News, *How Technology May Soon "Read" Your Mind* ([cbsnews.com](https://www.cbsnews.com/news/how-technology-may-soon-read-your-mind/)) and producer's account *Reading My Mind* ([cbsnews.com](https://www.cbsnews.com/news/reading-my-mind/)).

The CBS segment reports that researchers at Carnegie Mellon University used **fMRI plus machine learning** to identify which of a small set of **constrained object/noun thoughts** (e.g., a hammer, a house, a pair of pliers) a subject was thinking about, by matching the subject's whole-brain activation pattern against models trained on prior trials. The producer's first-person account corroborates the basic protocol: the subject lies in an fMRI scanner, is shown or asked to think about specific concrete nouns, the scanner records BOLD signal across the brain, and a trained classifier maps the activation pattern back to one of the constrained noun categories.

**What this evidence supports (T1 / T5):** that fMRI + ML can decode constrained object thoughts under cooperative, in-scanner conditions, and that this capability was publicly demonstrated to a major U.S. journalism outlet in 2009 with named institutional researchers (Just, Mitchell). Useful as a historical **neural-decoding anchor** that helps the lay reader calibrate what "mind reading" meant in the open record at that time.

**What this evidence does not support (not T2 / not T4 for V2K):** the segment does not show **remote** decoding (the scanner is required, the subject is inside it), it does not show decoding of **language-rate continuous speech**, it does not show decoding of **uncooperative or covert** subjects, and it does not connect to **microwave-auditory transmission** or any **closed-loop V2K** writeback channel. Tier-collapsing the CBS segment into evidence of remote thought-reading or V2K is a category error: read-side fMRI decoding and write-side microwave-auditory transmission are different modalities that the open record does not publicly join.

### 8.2. CMU / Just / Mitchell 2008 *Science* paper — primary neural-decoding source

**Sources:** CMU press release ([cs.cmu.edu](https://www.cs.cmu.edu/news/2008/carnegie-mellon-study-identifies-where-thoughts-familiar-objects-occur-inside-human)); *Science* PDF ([cs.cmu.edu](https://www.cs.cmu.edu/~tom/pubs/science2008.pdf)); fMRI data page ([cs.cmu.edu](https://www.cs.cmu.edu/afs/cs/project/theo-73/www/science2008/data.html)).

The 2008 paper underlying the CBS segment trains a model to predict the fMRI activation pattern associated with concrete-noun stimuli using a corpus-derived semantic feature representation, then tests whether the model can identify which of two held-out noun stimuli the subject was viewing. The CMU-hosted data page documents that the underlying data are fMRI BOLD measurements collected on a small number of subjects who viewed line-drawings/words for concrete nouns over many repeated trials in a scanner.

**Key limits to preserve as part of evidence-tier discipline:**

- **Scanner required:** the modality is fMRI; no part of this work demonstrates remote, non-contact decoding outside a scanner.
- **Subject cooperation:** subjects are inside a scanner, holding still, viewing stimuli on cue, and following protocol; nothing in the public record extends the method to uncooperative or unaware subjects.
- **Constrained categories:** the decoded thoughts are concrete nouns / familiar objects with a fixed stimulus set, not free-form internal monologue or conversational speech.
- **Small sample, repeated trials:** the public protocol relies on many repeated trials per subject to train a per-subject model and small-N validation, not population-scale single-trial decoding.
- **Not remote, not covert:** the experimental geometry is the opposite of remote interception — it is in-scanner, instrumented, and consented.

**Tier classification:** **T1 / T5 neural-decoding anchor.** The 2008 *Science* paper is a primary peer-reviewed neural-decoding source; for V2K it is parallel-lane context, not a MEDUSA bridge or T2 closure for conversational V2K.

### 8.3. Haynes / Max Planck intention-decoding line — calibrate the press-release numbers

**Sources:** Haynes et al., PubMed record ([pubmed.ncbi.nlm.nih.gov/17291759](https://pubmed.ncbi.nlm.nih.gov/17291759/?dopt=Abstract)); Max Planck press release ([mpg.de](https://www.mpg.de/550068/pressRelease20070206)); Soon/Haynes abstract-intentions follow-up ([pmc.ncbi.nlm.nih.gov/articles/PMC3625266](https://pmc.ncbi.nlm.nih.gov/articles/PMC3625266/)); Lages critique ([Frontiers in Psychology](http://journal.frontiersin.org/article/10.3389/fpsyg.2013.00925/abstract)).

The Haynes/Max Planck line decoded a **binary "add vs subtract" intention** from fMRI prefrontal activity in a lab setup. The Max Planck press release advertised an **approximately 70%** classification figure, which is widely re-quoted in popular accounts. The later Soon/Haynes work on **abstract intentions** (e.g., choosing between two arithmetic operations) reports more modest **~59-60% key-region accuracies**, and a published critique (Lages, Frontiers in Psychology 2013) raises **sequential-dependency confounds** and other methodological caveats that pull the apparent decoding accuracy further toward chance under stricter analysis.

**Discipline rule for this repo:** when summarizing the Haynes line, **carry both numbers and the caveat together** — the ~70% press-release figure for binary add/subtract, the ~59-60% later abstract-intention key-region figures, and the sequential-dependency / methodological critique. Do not cite the press-release number alone, and do not generalize "decode intentions" to "decode arbitrary thoughts."

**Tier classification:** **T1 / T5 historical intention-decoding context.** Useful as part of the neural-decoding lane; not a remote-reading capability and not a V2K bridge.

### 8.4. Later neural-decoding systems strengthen the lane (not the V2K bridge)

**Sources:** UT Austin semantic decoder ([pmc.ncbi.nlm.nih.gov/articles/PMC11304553](https://pmc.ncbi.nlm.nih.gov/articles/PMC11304553/)); BrainBERT ([klab.tch.harvard.edu PDF](https://klab.tch.harvard.edu/publications/PDFs/gk8131.pdf)).

The UT Austin semantic decoder reports decoding of continuous semantic content from fMRI BOLD signal in cooperative subjects who actively attended to stimuli, with explicit findings that **subject cooperation matters** — counter-strategies (thinking about something else) materially degrade the decoder. BrainBERT is a Transformer pre-trained on **intracranial** stereo-EEG / SEEG recordings from clinical epilepsy patients, improving decoding of speech-related neural features from invasive electrodes (already covered in §7).

These systems strengthen the **read-side neural-decoding lane** as a research trajectory but do **not** demonstrate (a) remote decoding without contact or scanner, (b) decoding of uncooperative/unaware subjects, or (c) any joining to microwave-auditory transmission or closed-loop V2K.

### 8.5. Military / DARPA neuro-signal-exploitation programs — public interest, not closed-loop V2K

**Sources:** DARPA "Silent Talk" reporting ([PBS Frontline DigitalNation](https://www.pbs.org/wgb/pages/frontline/digitalnation/blog/2009/05/darpa-funding-computer-mediated-telepathy.html); fallback URL [www.pbs.org/wgbh/...](https://www.pbs.org/wgbh/pages/frontline/digitalnation/blog/2009/05/darpa-funding-computer-mediated-telepathy.html)); HRL CT2WS press release ([hrl.com](https://www.hrl.com/hrlDocs/pressreleases/2012/prsRls_120918.html)); Army MIND Lab article ([army.mil](https://www.army.mil/article/158256/armys_mind_lab_able_to_decode_brain_waves)).

These three sources establish public defense interest in **brain-signal exploitation** of various forms: DARPA "Silent Talk" advertised a research interest in EEG-mediated user-to-user communication of pre-speech intent; HRL's CT2WS (Cognitive Technology Threat Warning System) used **EEG signals from a human operator** to flag candidate threats in wide-area imagery (a target-cueing system, not telepathy); and the Army MIND Lab article describes Army interest in **decoding brain waves** for human-machine teaming.

**What these support (T1 / T5):** a continuous public record of military interest in EEG/fMRI-style brain-signal exploitation across the 2009-2016 window, useful as background for the modern military-neurotech risk surface (and as company to BrainBERT / DARPA N3 in §7).

**What these do not support (not T2 / not T4 for V2K):** none of these public sources demonstrate **remote** brain reading, **closed-loop** read-then-write architectures, or any integration with **microwave-auditory transmission**. CT2WS in particular is sometimes mis-characterized as "mind reading" — it is more accurately **signal-borrowing** from a cooperating operator's visual EEG to accelerate target detection, which is a human-in-the-loop computer-vision augmentation pattern, not telepathy.

### 8.6. Bridge-source discipline — what the public record does and does not join

The defining negative finding of this pass is that **none of these sources publicly join neural decoding to MEDUSA, to microwave-auditory transmission, or to operational closed-loop V2K**:

- The CBS/CMU 2008 line is fMRI **read-side** decoding; MEDUSA is a microwave-auditory **write-side** concept. There is no published bridge connecting the two modalities into a closed loop.
- The Haynes/Max Planck and Soon/Haynes lines decode intention/choice signals in fMRI, not language-rate speech, and not remotely.
- BrainBERT and UT semantic-decoding strengthen the **invasive or in-scanner read** lane; they do not provide a remote, non-contact reading capability.
- DARPA Silent Talk, HRL CT2WS, and Army MIND show **public military interest** in EEG/fMRI brain-signal exploitation — interest signals, not deployed closed-loop V2K systems, and not bridges back to MEDUSA-era microwave-auditory hardware.

**Tier classification:** **T1 / T5 historical neural-decoding and military-neurotech context** + **T2-adjacent future-risk** evidence — **not T2-closed conversational V2K** and **not T4 fielding**. Treat the CBS/CMU "Mind Reading" anchor as historical context for neural decoding, not as a MEDUSA bridge.

---

## 9. Bridge-hunt appendix (2026-05-06) — output lane vs neural-decoding lane vs RF-bioeffects lane

**Scope:** This appendix consolidates the targeted bridge hunt — i.e., is there a public source that joins **AI-driven neural decoding** with **microwave-auditory output** in an **operational closed loop** (read the brain → encode the inference → deliver via microwave-auditory channel → repeat)? The hunt is run against MEDUSA as the canonical microwave-auditory write-side anchor and against the named modern neural-decoding and RF-bioeffects bodies of literature most often invoked in V2K discussions.

### 9.1. Bottom line

**No public evidence located in this pass establishes that MEDUSA, or a successor program, integrated AI neural decoding with microwave-auditory output in an operational closed loop.** The public record separates cleanly into three lanes that do not publicly join:

- an **output lane** (microwave-auditory effect: MEDUSA SBIR, Brunkan US4877027A, Lin/Sharp/Grove/Gandhi physics, US4858612A);
- an **input / neural-decoding lane** (US11630513B2 attention decoding, BrainBERT SEEG transformer, DARPA Silent Talk EEG, HRL CT2WS, Army MIND, CMU/Just/Mitchell fMRI work covered in §8);
- an **RF bioeffects / directed-energy context lane** (Foster/Garrett/Ziskin 2021, NAS AHI, ODNI 2024, CBS/60 Minutes 2026 Russian-component device reporting, Scientific American Soviet-pseudoscience critique).

The **bridge — neural-decoded inferences delivered as microwave-auditory speech in a closed loop against an unconsenting target — remains absent from the public record reviewed here.** This is the defining negative finding to preserve.

### 9.2. Output lane: Navy MEDUSA Phase I — archived primary record

**Source:** [Internet Archive capture 20080409063721 of the Navy SBIR Phase I summary report for MEDUSA](https://web.archive.org/web/20080409063721/http://www.navysbirprogram.com/NavySearch/Summary/summary.aspx?pk=F5B07D68-1B19-4235-B140-950CE2E19D08).

**Key fields preserved verbatim from the archived page:**

- Contract: **M67854-04-C-1012**
- Topic: **N03-163**
- SYSCOM: **MARCOR**
- Awardee: **WaveBand Corporation**
- Phase: **Phase I Navy SBIR**
- Award amount: **$99,965.00** (see §2 for the bulk-export conflict at $69,990.00)
- Performance period: **11/19/2003 – 05/19/2004**
- Title: **Remote Personnel Incapacitation System**

**Objective (paraphrased from archived summary):** design and build a breadboard prototype temporary personnel incapacitation system, called MEDUSA, based on the microwave auditory effect; selected low-energy microwave pulses can cause a strong sound sensation in the head; pulse parameters and power could raise this sensation to discomfort level; intended to deter or temporarily incapacitate.

**Results (paraphrased from archived summary):** operating frequency chosen; commercial magnetron and high-voltage pulse-former requirements established; hardware designed/built; power measurements taken; required pulse parameters confirmed; experimental evidence of microwave auditory effect observed.

**Applications (paraphrased from archived summary):** perimeter protection, hearing-impaired communication, law-enforcement / military crowd control / asset protection; portable, low power, controllable radius, crowd-to-individual coverage, temporary incapacitation, low probability of fatality / permanent injury, no property damage, low friendly-personnel effect.

**Explicit absence in the archived record:** no AI, no neural decoding, no speech recognition, no closed-loop feedback. The Phase I summary describes a microwave-auditory write-side breadboard effort, not a sensor-driven closed-loop system.

**Tier classification:** **T1 / T5 device/prototype provenance.** Useful as primary program-intent record for MEDUSA. **Not a closed-loop bridge.**

### 9.3. Output lane: 2008 popular-press layer (New Scientist, ABC)

**Sources:** Hambling, [*New Scientist*, "Microwave ray gun controls crowds with noise" (2008)](https://www.newscientist.com/article/dn14250-microwave-ray-gun-controls-crowds-with-noise/); ABC News republication / context, [abcnews.go.com](https://abcnews.go.com/Technology/AheadoftheCurve/story?id=5305386&page=1).

**Article context (paraphrased, with one verbatim quote preserved):**

- Mechanism described: MEDUSA exploits the microwave audio effect; short microwave pulses rapidly heat tissue, causing a shockwave inside the skull detected by the ears; a series of pulses can produce **recognisable sounds**.
- Sadovnik (Sierra Nevada Corporation): normal audio safety limits do not apply because the sound does not enter through the eardrums; verbatim quote — *"The repel effect is a combination of loudness and the irritation factor… You can't block it out."*
- Article reports Sadovnik began the work on a US Navy research contract; states a Navy report said the effect was shown effective; describes a reconfigurable antenna by Vladimir Manasson used to steer the beam electronically, switch between broad and narrow beam, or aim at multiple targets.

**Explicit absence in the article:** no neural decoding, no AI, no closed-loop feedback, no use of the term "V2K" / "voice to skull" applied operationally. The quote on safety limits is logged in §6 of this note as a **safety-regime gap**, not a safety assurance.

**Tier classification:** **T1 / T5 public reporting + expert-interview quote context.** Sharpens public framing; **not a closed-loop bridge.**

### 9.4. Output lane: Brunkan US4877027A and US4858612A — patent-concept space

**Sources:** [US4877027A — Brunkan, "Hearing system"](https://patents.google.com/patent/US4877027A/en); [US4858612A — "Hearing device"](https://patents.google.com/patent/US4858612A/en).

**US4877027A — Brunkan, "Hearing system" (paraphrased):** sound is induced in the head of a person by microwaves in the range 100 MHz to 10,000 MHz modulated with a particular waveform; with parameters adjusted for a particular individual, the system may produce intelligible audio independent of the external hearing organs. This is a **patent concept**, not proof of fielding; in-patent experimental disclaimer is documented in [`V2K_BRUNKAN_EXPERIMENTAL_DISCLAIMER_AND_PATENT_EXPERIMENT_GAP.md`](V2K_BRUNKAN_EXPERIMENTAL_DISCLAIMER_AND_PATENT_EXPERIMENT_GAP.md). No AI, no neural decoding, no closed-loop feedback in the patent text.

**US4858612A — "Hearing device" (paraphrased):** simulates hearing by introducing microwaves into the auditory-cortex region; describes audio / microphone processing and antenna placement concepts. Not a deployment record; no AI, no neural decoding, no closed-loop architecture.

**Tier classification:** **T1 output-lane mechanism / claim-space concepts.** Not deployment, not a closed-loop bridge.

### 9.5. Input / neural-decoding lane: US11630513B2 (auditory attention DNN)

**Source:** [US11630513B2 — End-to-end deep neural network for auditory attention decoding](https://patents.google.com/patent/US11630513B2/en).

**Paraphrased content:** a deep neural network processes EEG / neural data alongside acoustic signals to identify which acoustic source the listener is attending to; the patent's stated context is assisted-listening / hearing applications. The patent acknowledges **government support via FA8702-15-D-0001 awarded by the U.S. Air Force**.

**Boundary preservation:** the work is read-side neural decoding for assisted listening; the acoustic signals are externally measured (ordinary microphone audio), not microwave-auditory percepts. **No microwave delivery, no MEDUSA reference, no V2K, no directed-energy output.** A USAF acknowledgment in a hearing-aid-style attention decoder is not a bridge to MEDUSA.

**Tier classification:** **T2-adjacent input / neural-decoding lane.** Not a microwave-output bridge.

### 9.6. Input / neural-decoding lane: BrainBERT (SEEG transformer)

**Source:** [BrainBERT PDF (Klab/Harvard hosted)](https://klab.tch.harvard.edu/publications/PDFs/gk8131.pdf).

**Paraphrased content:** invasive **stereo-EEG (SEEG)** clinical data are used to pretrain a Transformer / self-supervised model; downstream tasks include **sentence onset, speech vs non-speech, pitch, and volume** classification. Funding acknowledgments include **DARPA ASIST**, **DARPA KMASS**, **AFRL / USAF AI Accelerator FA8750-19-2-1000**, **AFOSR FA9550-21-1-0014**, and ONR **N00014-20-1-2589** and **N00014-20-1-2643**.

**Boundary preservation:** SEEG is invasive intracranial electrophysiology in clinical epilepsy patients; nothing in the BrainBERT paper demonstrates **remote sensing**, **microwave-auditory delivery**, or any **MEDUSA / V2K closed-loop directed-energy** integration. Defense funding of a clinical-data ML method is a **future-risk signal**, not a bridge.

**Tier classification:** **T2-adjacent input / military-AI lane.** Not a microwave-output bridge.

### 9.7. Input / neural-decoding lane: DARPA Silent Talk, HRL CT2WS, Army MIND

**Sources:** [DARPA "Silent Talk" reporting (PBS Frontline DigitalNation)](https://www.pbs.org/wgbh/pages/frontline/digitalnation/blog/2009/05/darpa-funding-computer-mediated-telepathy.html); [HRL CT2WS press release](https://www.hrl.com/hrlDocs/pressreleases/2012/prsRls_120918.html); [Army MIND Lab article](https://www.army.mil/article/158256/armys_mind_lab_able_to_decode_brain_waves).

**Paraphrased content:**

- **DARPA Silent Talk** advertised a research aim of **EEG-based pre-speech word mapping** and a fieldable pre-prototype to decode and transmit over a limited range. **No microwave-auditory delivery**, no MEDUSA / V2K / directed-energy output described.
- **HRL CT2WS** (Cognitive Technology Threat Warning System) used a camera, cognitive visual processing, and an **EEG cap** for threat recognition with reported >90% accuracy; transitioned to the Army Night Vision Lab. **No speech, no MEDUSA / V2K, no microwave directed-energy** output.
- **Army MIND Lab** decoded **EEG responses to target image categories** for rapid imagery analysis. **No remote neural decoding, no speech, no microwave auditory, no MEDUSA, no V2K, no closed-loop directed-energy.**

**Tier classification:** **T2-adjacent input / military-AI lane.** Public defense interest in EEG-based read-side exploitation; **not a microwave-output bridge.**

### 9.8. RF-bioeffects / directed-energy context lane

**Sources:** Foster, Garrett, Ziskin, [*Frontiers in Public Health* (2021)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8733248/); National Academies, [*New Report Assesses Illnesses Among US Government Personnel and Their Families at Overseas Embassies*](https://www.nationalacademies.org/news/new-report-assesses-illnesses-among-us-government-personnel-and-their-families-at-overseas-embassies); CBS News, [*US military tested device that may be tied to Havana syndrome — 60 Minutes transcript* (2026)](https://www.cbsnews.com/news/us-military-tested-device-that-may-be-tied-to-havana-syndrome-60-minutes-transcript/); *Scientific American*, [*Soviet-Era Pseudoscience Lurks Behind Havana Syndrome Worries*](https://www.scientificamerican.com/article/soviet-era-pseudoscience-lurks-behind-havana-syndrome-worries/).

**Paraphrased content with discipline rules:**

- **Foster / Garrett / Ziskin** (peer-reviewed weaponization review): the microwave auditory effect is real; weaponization appears unlikely on grounds of effect size and practicality; lack of public high-power microwave (HPM) details and threshold uncertainty prevents full resolution. The review notes that low-GHz weaponized systems would tend to be **large and obvious**, that **mm-wave** systems carry potential stealth characteristics but with **shallow penetration and skull attenuation**, and states that **no evidence available to the authors** indicates such systems played a role in the Havana incidents. **No AI, no neural decoding, no closed-loop V2K** asserted.
- **National Academies AHI press release**: directed, pulsed RF energy appeared **most plausible** for some embassy-illness cases, with explicit caveats — cannot rule out other mechanisms; symptom variability; lack of access to specific health and personal information. **No MEDUSA / AI / V2K / closed-loop speech delivery** claimed.
- **CBS / 60 Minutes (2026)**: reports that the U.S. military tested a portable / concealable pulsed-RF / microwave-like device with a **programmable waveform** and **Russian components**. Strictly limited as a bridge: **no MEDUSA, no microwave auditory effect framing, no AI neural decoding, no speech content, no closed-loop V2K** is asserted in the reporting.
- **Scientific American critique**: warns that Soviet-era psychotronic / RF literature is often flawed and controversial; notes that NAS cited Russian / USSR literature but also acknowledged that many former-Soviet studies were flawed. **No AI / MEDUSA / V2K / closed-loop speech evidence.**

**Tier classification:** **T1 / T4 RF directed-energy / bioeffects context, contested.** Not a V2K bridge; the RF-bioeffects lane and the closed-loop V2K claim are not joined in any of these sources.

### 9.9. Bridge-hunt evidence-tier roll-up

| Source / cluster | Lane | Tier impact | Bridge to closed-loop AI-V2K? |
|---|---|---|---|
| Archived Navy MEDUSA SBIR (M67854-04-C-1012) | Output (microwave-auditory) | T1 / T5 device/prototype provenance | **No.** No AI / neural decoding / closed-loop in the archived record. |
| New Scientist 2008 + ABC republication | Output (popular reporting) | T1 / T5 public reporting and quote context | **No.** "Recognisable sounds" framing only; no AI / neural decoding / closed-loop. |
| US4877027A (Brunkan) and US4858612A | Output (patent concept space) | T1 mechanism / claim-space concepts | **No.** Patent concepts, not deployment, no AI / decoding / closed loop. |
| US11630513B2, BrainBERT, DARPA Silent Talk, HRL CT2WS, Army MIND | Input / neural decoding | T2-adjacent input / neural / military-AI lane | **No.** Read-side decoding; no microwave-auditory delivery, no closed loop with MEDUSA. |
| Foster/Garrett/Ziskin, NAS AHI, ODNI 2024, CBS 2026, *Sci. Am.* critique | RF-bioeffects / directed-energy context | T1 / T4 RF directed-energy / bioeffects context, contested | **No.** RF directed-energy context only; not joined to AI / decoding / V2K speech. |
| **Conclusion row** | **All three lanes together** | **Bridge negative** | **No public source located in this pass joins AI-driven neural decoding to microwave-auditory output in an operational closed loop. The missing bridge remains missing.** |

### 9.10. Discipline rules carried forward

1. Do **not** chain Phase I MEDUSA → modern AI neural decoding without an intermediate bridge source establishing technical or programmatic continuity.
2. Do **not** upgrade "recognisable sounds" (popular press) to "reliable semantic V2K" without a primary protocol-grade study.
3. Do **not** treat USAF / DARPA / AFOSR / ONR / AFRL acknowledgments in read-side neural-decoding patents and papers as evidence of microwave-auditory delivery; the modalities are different.
4. Do **not** treat NAS / ODNI / CBS / Foster–Garrett–Ziskin RF bioeffects context as evidence of conversational V2K; these sources address bioeffects and attribution, not closed-loop speech delivery.
5. **Preserve the bridge-negative conclusion explicitly** in matrix updates so future passes do not silently retire it.

---

## 10. Deeper near-bridge and false-positive pass (2026-05-06)

**Scope:** This appendix logs a second, deeper bridge-search pass run after §9. The aim was to push past the obvious output / input / RF-bioeffects clusters and ask whether stronger near-bridge material — including official-adjacent definitions, primary RF-hearing patents, the canonical historical microwave-speech demonstration, an FOIA'd nonlethal-weapons assessment, two remote-EM brain patents, two speculative or abandoned "bridge" patent filings, and a modern microwave + AI speech-recognition system — closes the public missing chain between neural acquisition/decoding, AI interpretation, generated speech, microwave auditory delivery, and operational closed-loop feedback.

### 10.1. Bottom line

Stronger near-bridge material exists, but **no irrefutable public closed-loop bridge was found in this pass**. Public sources support **RF / microwave speech-to-head output**; public sources separately support **brain / neural monitoring or decoding**; a few **speculative patents** mention both worlds; **none proves an enabled operational system that decodes neural content and feeds it into microwave-auditory output**. The public missing chain remains:

> neural acquisition / decoding → AI interpretation → generated speech / audio → microwave auditory delivery → operational feedback loop.

The §9 bridge-negative conclusion is preserved.

### 10.2. Output-lane definitional source: FAS / CALL "voice to skull" thesaurus entry

**Source:** [FAS mirror of the Center for Army Lessons Learned (CALL) thesaurus, "voice to skull devices"](https://sgp.fas.org/othergov/dod/vts.html).

**Paraphrased content:** the CALL thesaurus defines "voice to skull devices" as a nonlethal-weapon term covering (a) a **neuro-electromagnetic device** that uses microwave transmission of sound into the skull of persons or animals via pulse-modulated microwave radiation, and (b) a **silent sound device** that transmits sound into the skull. The note remarks that sound modulation may be voice or audio subliminal messages, and that one application is as an **electronic scarecrow** to frighten birds near airports.

**Explicit absence:** no neural decoding, no AI, no remote brain monitoring, no closed-loop feedback. The entry is a vocabulary / terminology record, not a deployment record.

**Tier classification:** **official-adjacent definitional output-lane source** — useful as institutional vocabulary evidence; **not a bridge** to AI-driven closed-loop V2K.

### 10.3. Output-lane primary patent: US6470214B1 (O'Loughlin / Loree, US Air Force)

**Source:** [US6470214B1 — "Method and device for implementing the radio frequency hearing effect," patents.google.com](https://patents.google.com/patent/US6470214B1/en).

**Paraphrased content:** inventors **James P. O'Loughlin and Diana L. Loree**, assignee **United States Department of the Air Force**. The patent claims preprocessing of input audio / speech and **suppressed-carrier / SSB / CSAM modulation** so that the RF hearing effect induces an intelligible subjective sound in the head. A key claim describes a transmitted signal directed at the head inducing a thermo-acoustic signal in bone / tissue that **replicates the input audio** and is conducted to the inner ear / cochlea, enabling intelligible speech to be perceived.

**Explicit absence:** no neural decoding, no AI, no closed-loop feedback. The patent is unilateral output-lane: input audio in, microwave-auditory percept out. There is no read-side neural channel and no feedback path.

**Tier classification:** **very strong T1 output-lane RF speech-to-head source.** Closely related to US6587729B2 already in the matrix; reinforces the patent-concept space at the output side. **Not an input or closed-loop bridge.**

### 10.4. Output-lane historical experiment: Justesen 1975 reporting Sharp / Grove and the A.W. Guy Morse-code communication

**Source:** [Don R. Justesen, "Microwaves and Behavior," *American Psychologist*, March 1975, pp. 391–401, mirrored as PDF](https://zoryglaser.com/wp-content/uploads/2020/05/MICROWAVES-AND-BEHAVIOR.pdf).

**Paraphrased content:**

- Justesen reports that **A.W. Guy** transmitted **Morse-code microwave messages** (cited in the article as a personal communication, October 15, 1973).
- Justesen reports that **Sharp and Grove** (cited as personal communication, September 28, 1973) achieved **direct "wireless" and "receiverless" communication of speech**: they recorded single-syllable digit words for the digits 1 through 10, processed the electrical sine-wave analogs so that **negative zero-crossings triggered brief microwave pulses**, and by radiating themselves with the resulting "voice-modulated" microwaves they could **hear, identify, and distinguish among 9 of the 10 words**.
- Justesen also notes that **longer messages were not attempted** because the average energy densities required would approach the **10 mW/cm² safe-exposure limit**.

**Explicit absence:** no neural decoding, no AI, no remote neural monitoring, no closed-loop feedback. The experiment is a write-side voice-modulation demonstration with the experimenters as their own subjects.

**Source-class caveat:** Justesen's citations for both items are **personal communications**, not peer-reviewed experimental reports. This source is therefore **strong as a published historical record** of the speech demonstration's existence, but **weaker than a primary protocol-grade experimental report** in the underlying Walter Reed / ARPA file. Cross-link to evidence-matrix rows on Justesen 1975 and the Sharp/Grove primary-report hunt.

**Tier classification:** **strong historical output-lane speech-through-microwave evidence** — the canonical anchor for limited word-level intelligibility. **Not a bridge** to neural decoding or closed-loop V2K.

### 10.5. Output-lane FOIA'd assessment: NGIC "Bioeffects of Selected Nonlethal Weapons"

**Source:** [NGIC, *Bioeffects of Selected Nonlethal Weapons*, addendum to *Nonlethal Technologies — Worldwide* (NGIC-1147-101-98), Squarespace mirror](https://static1.squarespace.com/static/56e08a19e321404a3d38517e/t/56e08afbfb436dcaca3efc47/1223868606423/Bioeffec...). (URL shown as supplied; truncation reflects the upstream Squarespace path. Document referred to here by its title.)

**Paraphrased content:**

- **Title and provenance:** *Bioeffects of Selected Nonlethal Weapons*, addendum to *Nonlethal Technologies — Worldwide* (**NGIC-1147-101-98**); information cutoff / source date **17 February 1998**; **regraded UNCLASSIFIED by USAINSCOM FOI/PA**.
- **Microwave hearing section:** the document describes microwave-induced auditory phenomena as buzzing, ticking, hissing, or knocking inside the head; emphasizes that **no airborne sound** is produced; states that a crude form could distract while a refined form could communicate **Morse / code / message systems / possibly voice**; reports that **words could be transmitted to be heard like spoken words but only within the head**; mentions **one experiment communicating words one through ten using "speech modulated" microwave energy** (consistent with the Sharp/Grove account); notes that **microphones next to the person could not pick up the sound**; gives an estimated range of **hundreds of meters**; and observes that longer or more sophisticated signals require bulkier equipment.
- **Limitations:** human sensitivity / cochlear condition matters; **bilateral cochlear destruction abolishes RF auditory stimuli**; extreme targeting may need additional development; **shielding can defeat RF**.

**Explicit absence:** no neural decoding, no AI, no remote neural monitoring, no MEDUSA reference, no closed-loop feedback architecture.

**Tier classification:** **strong official / FOIA output-lane and nonlethal-weapons context source** — institutional acknowledgment, at the federal-intelligence-center level, that microwave-auditory communication was treated as a real if equipment-limited capability area. **Not a neural bridge** and not a closed-loop V2K record.

### 10.6. Input-lane patent: Malech US3951134A — remote EEG monitoring + alteration

**Source:** [US3951134A — "Apparatus and method for remotely monitoring and altering brain waves," patents.google.com](https://patents.google.com/patent/US3951134A/en).

**Paraphrased content:** inventor **Robert G. Malech**, assignee **Dorne and Margolin Inc.**; status **expired**. The patent claims transmitting **two electromagnetic signals to the brain**, receiving a **response signal modulated by brain-wave activity**, interpreting that signal, and transmitting a **compensating EM signal to vary brain-wave activity**. Worked example uses **100 MHz** and **210 MHz** signals mixing to a **110 MHz** response, with a stated 1 MHz to 40 GHz range; a computer compares the recovered brain-wave signal to a stored standard and generates the compensating signal.

**Explicit absence:** no microwave auditory effect, no speech audio output, no RF hearing claim, no V2K delivery, **and no neural decoding to microwave audio output**. The compensating signal is described as an EM signal, not as audio modulation, and the patent does not claim audio intelligibility.

**Discipline note:** Malech is widely cited in V2K-adjacent literature as if it were a remote brain-reading + V2K bridge. The patent text supports a **remote EM brain-monitoring / brain-altering claim**, but **does not claim speech or microwave-auditory output**. Enablement and practicality in 1974 / 1976-grant-era technology should not be overclaimed; a granted patent is a claim, not a built and validated device.

**Tier classification:** **T1 remote-EM brain-monitor / alter patent claim** in the input lane; **not a speech / MEDUSA / V2K output bridge**.

### 10.7. Input-lane patent: US6011991A — Mardirossian brain-wave communication concept

**Source:** [US6011991A — "Communication system and method including brain wave analysis and/or use of brain activity," patents.google.com](https://patents.google.com/patent/US6011991A/en).

**Paraphrased content:** inventor **Aris Mardirossian**. Claims **sensors on a first human**, a **satellite / computer at a remote location**, and comparison of brain activity to **stored normalized / averaged patterns** to infer **words / phrases / thoughts**. The computer then outputs words to a **second human**.

**Explicit absence:** no microwave auditory effect, no V2K delivery, no RF hearing claim, no MEDUSA reference, no directed-energy output. The output channel to the second human is described as ordinary computer / display / audio, not as microwave-auditory percept. The first-human input requires **on-body sensors**, not a remote read.

**Tier classification:** **input / brain-to-text communication patent concept**; **not an RF-auditory output bridge** and not a closed-loop V2K source.

### 10.8. Speculative / false-positive patents that mention both worlds but do not bridge them

**Source A:** [US20200390360A1 — "Automatic Machine for Identifying Victim of Abuse Voice to Skull and Remote Neural Monitoring Technology…," patents.google.com](https://patents.google.com/patent/US20200390360A1/en).

- Inventor **Da Li**; status **abandoned**.
- The application explicitly invokes **V2K** and **RNM** and cites Malech, Air Force RF-hearing patents, Stocklin, and similar prior art.
- The actual claim space is an **identification / certification machine** using visual displays, a touchscreen, and polygraph-style instrumentation — i.e., a device for *identifying alleged victims*, not a system that decodes neural content and delivers microwave-auditory output.
- **No enabled system linking neural decoding to microwave output** is claimed.
- **Classification:** explicit term co-occurrence; **weak / unsupported false-positive**; not usable as a bridge source. Co-occurrence of V2K and RNM language inside a patent application is **not** evidence of a working closed-loop AI-V2K system.

**Source B:** [DE10253433A1 — "Thought transmission unit…," patents.google.com](https://patents.google.com/patent/DE10253433A1/en).

- Status **withdrawn**.
- Claims that **modulated EM beams** could influence thoughts / actions; includes **speech-to-pulse modulation**, **neural-network / correlation** ideas, and source candidates such as **maser, laser, phased array, magnetron, klystron**.
- **No experimental proof** is supplied; the disclosure is **speculative**, **open-loop** (no decoded neural signal feedback to output), and the application was **withdrawn**.
- **Classification:** **speculative near-bridge / false-positive**; not proof. Useful only as a record that some inventors have *imagined* both lanes inside one filing; the public bridge to an enabled, validated, operational system is still not established.

**Discipline rule (carried forward to §10.10):** patent applications that **name both** "V2K" / RF-hearing and "RNM" / neural monitoring are not bridges. The relevant test is whether the **claims / specification disclose an enabled closed-loop system** that decodes neural content and feeds it into a microwave-auditory output. Both filings here fail that test.

### 10.9. Modern RF + AI input but not neural and not output: programmable-metasurface microwave speech recognizer

**Source:** [*Microwave Speech Recognizer Empowered by a Programmable Metasurface*, *Advanced Science* (2024), DOI 10.1002/advs.202309826](https://doi.org/10.1002/advs.202309826).

**Paraphrased content:** the system uses **microwave reflections in the 7.49–8.3 GHz band**, a **programmable metasurface**, and **AI / CNN / Transformer models** to perform **through-mask and through-wall speech and speaker recognition**. The recognized signal is the **physical articulator / mouth / facial-muscle motion** picked up via microwave reflection — a **biosignal** of speech production, not a neural signal — and the system has **no microwave-auditory or V2K output channel**.

**Explicit absence:** no neural acquisition, no neural decoding, no microwave-auditory delivery, no closed-loop feedback. The work is **read-only** at the physical-articulator level.

**Tier classification:** shows **RF + AI speech-recognition adjacency**, useful as a near-future-risk signal for "passive RF speech surveillance"; **not a neural bridge** and **not a V2K output** source. Distinct in modality from MEDUSA-style microwave-auditory delivery.

### 10.10. Deeper-pass evidence-tier roll-up

| Source / cluster | Lane | Tier impact | Bridge to closed-loop AI-V2K? |
|---|---|---|---|
| FAS / CALL "voice to skull" thesaurus entry | Output (definitional / terminology) | Official-adjacent definitional output-lane source | **No.** Definition only; no neural decoding, AI, remote monitoring, or closed loop. |
| US6470214B1 (O'Loughlin / Loree, USAF) | Output (RF-hearing patent, primary) | T1 output-lane RF speech-to-head | **No.** Unilateral input-audio → microwave-auditory output; no neural read, no feedback. |
| Justesen 1975 reporting Sharp/Grove + A.W. Guy Morse-code | Output (historical experiment, secondary) | Strong historical output-lane (personal-communication source class) | **No.** Write-side voice-modulation only; no neural decoding, AI, or closed loop. |
| NGIC *Bioeffects of Selected Nonlethal Weapons* (NGIC-1147-101-98) | Output (FOIA'd nonlethal-weapons context) | Strong official / FOIA output-lane and NLW context | **No.** Acknowledges microwave-auditory communication concept; no neural decoding, AI, MEDUSA, or closed loop. |
| Malech US3951134A | Input / remote EM brain monitor + alter | T1 patent claim, expired; enablement not overclaimed | **No.** No microwave-auditory output, no speech, no decoded-content → microwave-audio path. |
| Mardirossian US6011991A | Input / brain-wave communication | Patent concept, on-body sensors + computer | **No.** Output is computer / display / ordinary audio; no RF-auditory output. |
| US20200390360A1 (Da Li, abandoned) | Speculative / false-positive (V2K + RNM co-occurrence) | Weak / unsupported false-positive | **No.** Identification machine, not an enabled closed-loop system. |
| DE10253433A1 (withdrawn) | Speculative / false-positive (modulated-beam thought-transmission) | Speculative near-bridge / false-positive | **No.** No experimental proof; open-loop; no decoded-neural feedback to output. |
| *Microwave Speech Recognizer* (DOI 10.1002/advs.202309826) | Adjacent (RF + AI input, physical articulators) | RF + AI speech-recognition adjacency | **No.** Reads physical articulators, not neural activity; has no microwave-auditory output. |
| **Conclusion row** | **All clusters together** | **Bridge negative, deeper pass** | **Stronger near-bridge material exists, but no public source located in this pass joins neural acquisition / decoding → AI interpretation → generated speech → microwave-auditory delivery → operational closed-loop feedback. The strongest near-bridge cluster still falls short of closed-loop proof.** |

### 10.11. Discipline rules added by this pass

1. Treat the **CALL thesaurus** entry as **vocabulary evidence**, not deployment evidence; do not chain it to operational V2K claims.
2. Treat **US6470214B1** as a primary **output-lane** RF-hearing patent; do not extend it into a closed-loop system on the strength of USAF assignment alone.
3. Preserve the **personal-communication source-class caveat** when citing Justesen 1975 for Sharp/Grove and for the A.W. Guy Morse-code report; the article is a published secondary record, not the underlying primary technical report.
4. The **NGIC bioeffects** document is FOIA'd nonlethal-weapons context; do not upgrade its "possibly voice" / "speech modulated" framing into protocol-grade conversational V2K, and do not retrofit it as a MEDUSA antecedent.
5. **Malech US3951134A** is an **expired remote-EM brain-monitor / alter** patent; do not represent it as a remote brain-reader **and** RF-auditory output device. The patent does not claim speech or RF-hearing output. Enablement claims must not be inflated beyond the granted text.
6. **US6011991A** is a **brain-to-text** communication concept with **on-body sensors and ordinary output**; not an RF-auditory output bridge.
7. Patent applications that **co-mention V2K and RNM** (e.g., **US20200390360A1**, **DE10253433A1**) are **not bridges**. Require enabled closed-loop disclosure (decoded neural content → microwave-auditory output → feedback) before treating any such filing as bridge evidence; absent that, classify as **speculative / false-positive** regardless of how many V2K-adjacent terms appear.
8. **Microwave + AI speech recognizers that read physical articulators** (e.g., DOI 10.1002/advs.202309826) are **read-only adjacency**; do not conflate articulator-reading with neural decoding, and do not treat the absence of microwave-auditory output as evidence of one elsewhere.
9. **Preserve the deeper-pass bridge-negative conclusion** (this §10) alongside the §9 bridge-negative conclusion in any future matrix update.

### 10.12. Carry-over to the matrix

The deeper-pass entries in this section are reflected as concise rows in `/V2K_EVIDENCE_MATRIX.md` (rows added 2026-05-06, deeper-pass set). The **conclusion row** preserved at the end of the matrix update is: **strongest near-bridge cluster still falls short of closed-loop proof.**

---

## Cross-links

- `MEDUSA_EVIDENCE_TABLE_PRIMARY.md`  
- `MEDUSA_TRANSITION_GAP_ANALYSIS.md`  
- `JNLWP_2006_2008_NEGATIVE_CONTRAST_NOTE.md`  
- `V2K_BRUNKAN_EXPERIMENTAL_DISCLAIMER_AND_PATENT_EXPERIMENT_GAP.md`  
- Root matrix: `/V2K_EVIDENCE_MATRIX.md`
