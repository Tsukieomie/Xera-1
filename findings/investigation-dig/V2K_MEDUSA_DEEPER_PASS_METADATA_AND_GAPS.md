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
| T1 | Slight **safety framing** reinforcement via Lin quote in *New Scientist* (secondary to Lin’s own papers). |
| T2 | **No upgrade.** |
| T3 | **Hygiene:** internal DB keys + **amount conflict flag** + archive/403 reproducibility notes. |
| T4 | **No upgrade.** |

---

## Cross-links

- `MEDUSA_EVIDENCE_TABLE_PRIMARY.md`  
- `MEDUSA_TRANSITION_GAP_ANALYSIS.md`  
- `JNLWP_2006_2008_NEGATIVE_CONTRAST_NOTE.md`  
- `V2K_BRUNKAN_EXPERIMENTAL_DISCLAIMER_AND_PATENT_EXPERIMENT_GAP.md`  
- Root matrix: `/V2K_EVIDENCE_MATRIX.md`
