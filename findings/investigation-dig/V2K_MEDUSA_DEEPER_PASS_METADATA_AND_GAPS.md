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
| T2 | **No upgrade.** §7 adds explicit T2-adjacent future-risk evidence (BrainBERT / DARPA N3) **without** retrofitting onto MEDUSA. |
| T3 | **Hygiene:** internal DB keys + **amount conflict flag** + archive/403 reproducibility notes. |
| T4 | **No upgrade.** |
| T5 | §6 reinforces safety-regime caveat as T1/T5 framing; §7 adds T1/T5 military-AI / neurotech context. |

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

## Cross-links

- `MEDUSA_EVIDENCE_TABLE_PRIMARY.md`  
- `MEDUSA_TRANSITION_GAP_ANALYSIS.md`  
- `JNLWP_2006_2008_NEGATIVE_CONTRAST_NOTE.md`  
- `V2K_BRUNKAN_EXPERIMENTAL_DISCLAIMER_AND_PATENT_EXPERIMENT_GAP.md`  
- Root matrix: `/V2K_EVIDENCE_MATRIX.md`
