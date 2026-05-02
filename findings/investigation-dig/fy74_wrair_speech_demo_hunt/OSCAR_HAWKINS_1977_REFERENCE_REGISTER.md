# Oscar & Hawkins 1977 *Brain Research* — reference-register pass (Crossref)

**Date:** 2026-05-02  
**Article:** Oscar KJ, Hawkins TD. *Microwave alteration of the blood-brain barrier system of rats.* **Brain Research** 126(2):281–293, 1977 May.  
**DOI:** [10.1016/0006-8993(77)90726-0](https://doi.org/10.1016/0006-8993(77)90726-0)  
**PMID:** [861720](https://pubmed.ncbi.nlm.nih.gov/861720/)

**Purpose:** Close one carry from `FY74_SPEECH_DEMO_HUNT.md` / round-6+ synthesis — whether the **open Crossref reference metadata** for this paper cites **Sharp, Grove, Justesen, Walter Reed voice-modulation**, or otherwise ties the BBB paper to the Tier-B “speech demonstration” claim.

---

## 1) Access status (this environment)

| Source | Result |
|--------|--------|
| [Europe PMC](https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:861720&resulttype=core&format=json) | Abstract and bibliographic record returned; `fullTextUrlList` shows **subscription** DOI link only; `hasPDF` = **N**. |
| [OpenAlex](https://api.openalex.org/works/https://doi.org/10.1016/0006-8993(77)90726-0) | `open_access.is_oa` = **false**; `oa_status` = **closed**; no repository PDF indexed. |

Full text of the PDF body was **not** retrieved here; conclusions below are limited to **Crossref’s deposited reference list** (bibliography metadata), not to in-PDF discussion paragraphs.

---

## 2) Method

1. `GET https://api.crossref.org/works/10.1016/0006-8993(77)90726-0`  
2. Parse `message.reference[]` (34 entries in the deposit retrieved 2026-05-02).  
3. Flag any reference whose concatenated fields match: `sharp`, `grove`, `justesen`, `walter`, `reed`, `wrair`, `voice` (case-insensitive).

---

## 3) Result — **no Sharp / Grove / Justesen / WRAIR speech line in Crossref references**

Keyword scan over all `article-title`, `series-title`, `journal-title`, `author`, and `DOI` fields:

- **No** reference title or author string contains **Sharp**, **Grove**, **Justesen**, **Walter Reed**, or **WRAIR**.  
- **No** reference title contains **voice** (voice-modulation / speech-transmission sense).

The reference set is dominated by **blood–brain barrier** histology / permeability classics, **microwave bioeffects** (Frey, Foster, Guy, Gandhi, Bawin, Lambert, …), and **Hawkins** on **audiogenic seizure** (Hawkins 1975 reference line in Crossref deposit — seizure sensitivity, not speech).

**Representative microwave-auditory / RF-hearing references present in the Crossref deposit:**

| # (deposit order) | Year | Author (short) | Title (truncated) | DOI (if any) |
|---:|---:|---|---|---|
| 11 | 1974 | Foster | Microwave hearing: evidence for thermoacoustic auditory stimulation by pulsed microwaves | 10.1126/science.185.4147.256 |
| 12 | 1961 | Frey | Auditory system response to radio frequency energy | — |
| 13 | 1975 | Frey | Neural function and behavior: defining the relationship | 10.1111/j.1749-6632.1975.tb36019.x |
| 14 | 1973 | Frey | Human perception of illumination with pulsed ultrahigh frequency electromagnetic energy | 10.1126/science.181.4097.356 |
| 18 | 1975 | Guy | Microwave-induced acoustic effects in mammalian auditory systems and physical materials | 10.1111/j.1749-6632.1975.tb35996.x |

These support the **Tier A** (microwave hearing / thermoacoustic) literature context for Oscar & Hawkins’ **BBB permeability** experiment; they do **not**, in the Crossref reference layer, establish a citation bridge to the **Justesen 1975** “nine words” narrative or to **Sharp/Grove** as named co-trail.

---

## 4) Interpretation (disciplined)

1. **Negative finding on bibliography metadata:** The Crossref-deposited reference list for Oscar & Hawkins 1977 **does not** surface Sharp, Grove, Justesen, or WRAIR speech-demo hooks. If the full PDF’s *discussion* mentions them, that would be **outside** this metadata pass (requires institutional PDF or licensed Elsevier access).
2. **Consistency with repo tier split:** Oscar/Hawkins 1977 remains a **BBB / low-average-power permeability** paper in the same institutional arc as Hawkins at WRAIR / Oscar at USAMERDC (see `DEEPER_DIG_7_ADDENDUM.md`, `FY74_SPEECH_DEMO_HUNT.md`). It is **not** upgraded, by this pass, into independent corroboration of the **Tier-B** speech demonstration.
3. **Next closure step unchanged:** Primary PDF review (references *and* discussion), or KU / WRAIR archival leads, remain the paths to catch any in-body Sharp/Grove mention Crossref does not serialize.

---

## 5) Addendum — Brodeur 1977 *Zapping of America* (Internet Archive access, 2026-05-02)

**IA details page:** [archive.org/details/zappingofamerica00brod](https://archive.org/details/zappingofamerica00brod)

| Attempt | URL pattern | HTTP outcome |
|---------|-------------|--------------|
| Stream “djvu.txt” | `https://archive.org/stream/.../..._djvu.txt` | **200** but body is **HTML shell** (not OCR text) |
| CDN PDF | `https://archive.org/download/.../...pdf` → `dn710104.ca.archive.org/.../...pdf` | **401 Authorization Required** |

So from this workspace, **page-image OCR verification** of Brodeur (chapters / pp. cited in secondary sources) remains **blocked** without credentials, on-site download, or a user-provided copy. The round-5 caveat in `FY74_SPEECH_DEMO_HUNT.md` (unreliable web-fetch paraphrase) still applies.

---

## 6) Cross-links

- `FY74_SPEECH_DEMO_HUNT.md` (round synthesis; Brodeur carry)  
- `DEEPER_DIG_7_ADDENDUM.md` (Oscar/Hawkins URSI 1975 → 1977 arc)  
- `GROVE_VS_GROVES_NAME_NOTE.md` (engineer naming discipline)
