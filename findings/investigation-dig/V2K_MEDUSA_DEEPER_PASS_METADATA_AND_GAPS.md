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

Residual manual targets: DTIC Discovery **full-search** for `M67854-04-C-1012`, `N032-0412`, or “Mob Excess Deterrent”; DTIC STO for contractor Phase I technical report if it entered the archive under an unexpected title.

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
| T5 | §6 reinforces safety-regime caveat as T1/T5 framing; §7 adds T1/T5 military-AI / neurotech context; §8 adds T1/T5 historical neural-decoding (CBS/CMU "Mind Reading"; Haynes intentions; UT semantic decoder; BrainBERT) and T1/T5 military neuro-signal-exploitation context (Silent Talk, CT2WS, Army MIND). |

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

## Cross-links

- `MEDUSA_EVIDENCE_TABLE_PRIMARY.md`  
- `MEDUSA_TRANSITION_GAP_ANALYSIS.md`  
- `JNLWP_2006_2008_NEGATIVE_CONTRAST_NOTE.md`  
- `V2K_BRUNKAN_EXPERIMENTAL_DISCLAIMER_AND_PATENT_EXPERIMENT_GAP.md`  
- Root matrix: `/V2K_EVIDENCE_MATRIX.md`
