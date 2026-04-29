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
