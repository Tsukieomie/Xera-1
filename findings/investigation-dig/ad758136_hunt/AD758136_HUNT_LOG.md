# AD758136 Hunt Log — In Progress

**Target:** Hawkins, T.D., H.M. Grove, T.W. Heiple, and J. Schrot, (1973), *Some biological effects of microwave irradiation in the rat*, Walter Reed Army Institute of Research, Department of Microwave Research, 35 pages. NTIS AD758136.

**Why it matters:** Reference 2 of 41 in Oscar 1980 (AD-A090426). If recoverable as primary, it is the earliest WRAIR-internal primary report on microwave biological effects in the chain leading to the Sharp/Grove "voice" demonstration that Becker 1985 pp. 319-320 describes. Hawkins → Grove links the Hawkins+Grove pair to the same Department of Microwave Research at WRAIR where Sharp later worked.

## Citation triangulation (already strong)

The full citation has been independently corroborated by at least three secondary sources:

1. **Glaser 1976 NMRI bibliography** — Naval Medical Research Institute "Bibliography of Reported Biological Phenomena ('Effects') and Clinical Manifestations Attributed to Microwave and Radio-Frequency Radiation," 1976. Hosted at [ehtrust.org](https://ehtrust.org/wp-content/uploads/Naval-MRI-Glaser-Report-1976.pdf).
2. **AGU Radio Science 1977** — two papers cite the report: [Radio Science RS12i06Sp00263](https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/RS012i06Sp00263) and [Radio Science RS12i06Sp00287](https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/RS012i06Sp00287).
3. **Oscar 1980 (AD-A090426)** — Reference 2 of 41 (verified in extracted plaintext at `AD_A090426_OSCAR_1980_full.txt`).

So the existence and bibliographic identity of AD758136 are not in question. What is in question is whether the **full text** can be retrieved through public channels.

## Access attempts (this session)

### DTIC direct PDF URLs (the pattern that worked for ADA090426)

- `https://apps.dtic.mil/sti/pdfs/ADA758136.pdf` — **HTTP 403** (15 byte response saved as `dtic_apps_ADA758136_403.txt`)
- `https://apps.dtic.mil/sti/pdfs/AD758136.pdf` — **HTTP 403** (saved as `dtic_apps_AD758136_403.txt`)
- `https://apps.dtic.mil/sti/pdfs/AD0758136.pdf` — **HTTP 403** (saved as `dtic_apps_AD0758136_403.txt`)
- `https://apps.dtic.mil/sti/citations/AD0758136` — **HTTP 403** (saved as `dtic_citations_AD0758136_403.txt`)

### DTIC search portal

- `https://discover.dtic.mil/results/?q=AD758136` — HTTP 200, 382 KB HTML (saved as `dtic_search_AD758136.html`). Page is JS-rendered; no static result hits in the raw HTML. The search shell loads but actual result rendering is client-side.

### Glaser NMRI 1976 PDF (authoritative bibliographic source)

- `https://ehtrust.org/wp-content/uploads/Naval-MRI-Glaser-Report-1976.pdf` — `curl` returned 5704 bytes of HTML, **HTTP 403**, under both default and browser User-Agent. (This file is currently the placeholder `Glaser_NMRI_1976.pdf` in this directory and **needs to be replaced** with the real PDF or removed.) Plan: retry via `fetch_url` (which handles some domains curl rejects) or via the Wayback Machine.

## Interpretation of the access pattern

The DTIC public-portal direct-PDF route succeeds for **ADA090426** (Oscar 1980, recovered earlier this session at 543 KB) and fails uniformly across multiple AD-number variants for **AD758136**. The likely explanations, in order of plausibility:

1. **Distribution restriction at the document level.** DTIC documents carry per-record distribution statements (A through F). It is possible that AD758136 was filed with a distribution statement that excludes the public-PDF mirror. The 403 is then policy, not technical accident.
2. **Document not digitized in the public-mirror branch.** Some pre-1980 DTIC records exist only in microfiche or hard-copy archives and were never moved to the `apps.dtic.mil/sti/pdfs/` cache. Retrieval would require either an NTIS purchase or a FOIA request.
3. **AD-number normalization mismatch.** Tried four common variants (ADA, AD, AD0, ADA-prefixed). If DTIC uses an internal canonical form different from all four, the 403 is from path-not-found rather than access denial.

If hypothesis (1) holds, this is itself a structural finding worth flagging in the V2K matrix: a 1973 WRAIR Department of Microwave Research primary report exists, is referenced 7+ times across the open literature, and is *not* publicly downloadable from the federal repository while a directly downstream 1980 MERADCOM report *is*.

## Next moves planned

1. Replace Glaser placeholder via `fetch_url` or Wayback Machine.
2. Try NTIS NTRL detail page: `https://ntrl.ntis.gov/NTRL/dashboard/searchResults/titleDetail/AD758136.xhtml`.
3. Try `https://discover.dtic.mil` API endpoint instead of the JS-rendered HTML page.
4. Search Google Scholar / Semantic Scholar / archive.org for any open mirror of the Hawkins et al. 1973 report.
5. If all fail: log the access barrier as a meaningful finding rather than treat it as a dead end.

## Status

**OPEN — partial.** Citation triangulation complete; full-text retrieval blocked. Hunt continues.

## Update 2026-04-29 — disambiguation closed via AD-A090426 body-content review

The body-content review of AD-A090426 ([`AD_A090426_OSCAR_1980_PRIMARY_REVIEW.md`](../AD_A090426_OSCAR_1980_PRIMARY_REVIEW.md)) clarifies AD758136's role within the WRAIR / MERADCOM / SRI / NMRI / NIH research lineage. Oscar 1980 cites AD758136 as Reference 2, in support of the statement that earlier MERADCOM × SRI × WRAIR work showed *lethality, seizures, and behavioural performance decrements* were strongly frequency- and polarisation-dependent. **AD758136 is therefore confirmed at the citation level as a background bioeffects primary, NOT as a Sharp/Grove voice-modulation speech-protocol source.** This is consistent with Sharp/Grove/Gandhi 1974 IEEE TMTT being the *mechanism* paper (acoustic transduction in absorber and aluminium-foil targets) rather than a speech-protocol paper. Identification, citation context, and lineage role are now closed; the only outstanding question for AD758136 is full-text retrieval, which remains blocked at the DTIC public mirror (HTTP 403 across `ADA758136.pdf`, `AD758136.pdf`, `AD0758136.pdf`, and `citations/AD0758136`).

**Next target redirected.** With AD758136's role disambiguated, primary-recovery effort on the immediate "intelligible speech" lineage now reverts to AD-A090426 itself ([primary review](../AD_A090426_OSCAR_1980_PRIMARY_REVIEW.md)) and to Frey **AD747684** ([`../primary/DTIC_AD0747684_Frey_Messenger_Eichert_1972_rf_sound.pdf`](../primary/DTIC_AD0747684_Frey_Messenger_Eichert_1972_rf_sound.pdf) + extract; Phase 3 fails vocoder/speech path on same project line — see digest §6).

## Update 2026-05-06 — OCR body lexical pass closes “hidden speech protocol” surrogate

DjVu OCR at workspace [`_deeper_dig_pass2/AD758136_djvu.txt`](../../_deeper_dig_pass2/AD758136_djvu.txt) confirms **explicit abstract scope = 3000 MHz rat lethality + behavioural frequency-effects** only; readable layer **does not contain** Sharp/Grove voice-modulated speech demonstration content. Interpretation aligns with **`SHARP_GROVE_PRIMARY_REPORT_HUNT.md`** §9 and **`SHARP_GROVE_INTELLIGIBLE_SPEECH_DEEP_DIGEST_2026-05-06.md`**. Public DTIC HTTPS PDF remains uniformly **403**; open-record closure on full-text fidelity still benefits from cleaner PDF if mirrored.

## Update 2026-04-29 — fourth-source identity confirmation via Polson et al. 1974 SRI mirror PDF

A full-PDF mirror of Polson, Jones, Karp, Krebs (1974), *Mortality in Rats Exposed to CW Microwave Radiation at 0.95, 2.45, 4.54, and 7.44 GHz* (the SRI Final Technical Report, Type III, January 1974; Contract DAAK02-73-C-0453; SRI Project 2777; corresponds to AD774823 / Oscar 1980 Reference 3) is accessible at `https://www.magdahavas.com/wp-content/uploads/2010/09/Mortarity_in_Rats_Exposed_to_CW_Microwave_Radiation.pdf`. Its reference list independently logs **Hawkins et al. March 1973, "Some Biological Effects of Microwave Irradiation in the Rat," WRAIR Department of Microwave Research** as a cited antecedent — the same entry corresponding to AD758136 — alongside **Grove 1971 AD887119 (WRAIR Behavioral Radiology Lab bibliography)** and a "Dr. J. Sharp, WRAIR, personal communication." This is now a **fourth independent secondary** corroborating AD758136's bibliographic identity (joining Glaser 1976 NMRI, AGU Radio Science 1977, and Oscar 1980) and the first that surfaces this entry at full-PDF reference-list grade rather than at index/snippet grade.

**Substantive finding for the speech question (negative):** the body-level "Sharp, WRAIR, personal communication" in this Polson et al. 1974 report concerns **spontaneous tail amputation in surviving rats after 3.0 GHz irradiation** — a lethality / bioeffects observation, **not** a speech-transmission, voice-modulation, or RF-hearing observation. This reinforces the disambiguation already closed in this hunt log: AD758136 sits in the bioeffects / lethality lineage at WRAIR Department of Microwave Research, not in the Sharp/Grove speech-protocol lineage. Full-text retrieval of AD758136 itself remains blocked at the DTIC public mirror (HTTP 403 across all AD-number variants). See also [`../SHARP_GROVE_PRIMARY_REPORT_HUNT.md`](../SHARP_GROVE_PRIMARY_REPORT_HUNT.md) §6.4 and [`../AD_A090426_REFERENCE_CHAIN_EVIDENCE.md`](../AD_A090426_REFERENCE_CHAIN_EVIDENCE.md) §1.3 for the cross-document treatment.
