# MEDUSA Deep Audit (WaveBand MAE Program)

Scope: isolate the specific **Mob Excess Deterrent Using Silent Audio** lineage from unrelated "MEDUSA" programs and classify evidence strength against repo tiers.

## 1) Identity disambiguation (critical)

"MEDUSA" is a high-collision label across defense and civilian records. At least three unrelated clusters appear:

1. **WaveBand crowd-control MAE concept** (target of this audit)
2. **Undersea sensor-array MEDUSA** topics/awards (different acronym/program family)
3. **Later AI/COP or logistics projects named MEDUSA** (unrelated to MAE/V2K)

Conclusion: source filtering is mandatory before any inference.

## 2) Primary provenance chain (WaveBand MEDUSA)

### A. Archived Navy SBIR summary (primary anchor in corpus)

`medusa-navysbir-wayback.html` captures a Wayback snapshot of the old Navy SBIR search record with:

- Contract: `M67854-04-C-1012`
- Topic: `N03-163`
- Phase: `I`
- Title: `Remote Personnel Incapacitation System`
- Firm: `WaveBand Corporation`
- Program language naming MEDUSA and describing MAE-based discomfort/incapacitation concept
- Reported result language: operating frequency selected, hardware designed/built, pulse parameters confirmed, "experimental evidence of MAE observed."

This is the strongest in-repo artifact for program existence and declared Phase I outcomes.

### B. Corporate continuity / ownership chain

`medusa-sncorp-wayback.html` preserves a historical SNC press-page capture used in this repo to support that WaveBand was acquired by Sierra Nevada Corporation.

Interpretation: this supports organizational continuity/provenance of the contractor lineage; it does not establish operational fielding.

### C. Public reporting echoes (secondary)

Media coverage (e.g., Wired/New Scientist references in repository search captures) reiterates the same broad narrative, but these are downstream from primary contract/snapshot evidence and should remain secondary corroboration only.

## 3) What the evidence does and does not prove

## Supported

- A Navy-linked Phase I SBIR effort existed under the identified contract/topic with WaveBand.
- The project framing explicitly invokes MAE and non-lethal crowd-control intent.
- Prototype-level hardware activity and MAE observation are described in the archived summary text.

## Not supported (from current open corpus)

- No primary evidence in-corpus of completed Phase II/III transition for this exact MAE crowd-control line.
- No validated public test report establishing reliable deployed crowd-control efficacy at operational scales.
- No primary record proving sustained program-of-record adoption or broad operational fielding.

## 4) Tier placement (repo model)

- **T1 (mechanism):** MAE references in the summary are consistent with known mechanism literature context.
- **T3 (patent/program intent):** Strong for contract/prototype intent and engineering narrative.
- **T2 (semantic speech closure):** Not established by MEDUSA artifacts.
- **T4 (operational attribution/deployment):** Not established by currently recovered primary records.
- **T5 (policy/media context):** Media reports are context only.

## 5) Confidence grading for MEDUSA sub-claims

- "WaveBand had a Navy-funded MEDUSA Phase I effort" -> **High confidence**
- "MEDUSA demonstrated MAE in prototype context" -> **Moderate confidence** (self-reported in archived summary)
- "MEDUSA was operationally fielded at scale" -> **Low confidence / not established**
- "MEDUSA proves covert semantic V2K speech capability" -> **Not established**

## 6) Noise-control rules for future MEDUSA searches

When searching MEDUSA, require at least one of:

- `WaveBand`
- `M67854-04-C-1012`
- `N03-163`
- `Remote Personnel Incapacitation System`
- `Mob Excess Deterrent Using Silent Audio`

Exclude or separately bucket:

- Undersea sensor-array MEDUSA pages
- Recent AI/COP software MEDUSA pages
- Non-defense "Medusa" company/entity results

## 7) Net judgment

The MEDUSA record materially strengthens **T3 provenance** (real contract + explicit concept framing + prototype-stage claims) but does **not** close T2 or T4. In this repository, MEDUSA should remain a **program-intent/prototype anchor**, not a proof-of-deployment anchor.

## 8) Lineage question — ADS / LRAD vs MEDUSA (short answer)

A common follow-up question is whether the Active Denial System (ADS) or the LRAD / acoustic-hailing-device (AHD) family are evolutions or variations of WaveBand MEDUSA. **Short answer: no.** ADS is a JNLWP / JNLWD 95 GHz millimeter-wave skin-heating / repel system; LRAD / AHD is a fielded audible acoustic-hailing / voice-and-tone projection family; WaveBand MEDUSA was a Navy SBIR Phase I microwave-auditory-effect breadboard prototype. The three paths share the broad non-lethal / counter-personnel problem space, but the public evidence trail does not support a lineage claim from MEDUSA to ADS or to LRAD — different funding paths, different mechanisms, and disjoint evidence trails. "Adjacent / same broad NLW ecosystem" is fair; "evolution / variant / successor / transition path" is not. See `MEDUSA_VS_ADS_LRAD_LINEAGE_QUESTION.md` for the full one-stop write-up and `ADS_JNLWP_DEEP_DIVE_CONTRAST_NOTE_SUPPLEMENT.md` for the 2007-2015 contrast trail.

## 9) Cross-repo McLean-Books bound (Havana / Hodgkin-Huxley vs MEDUSA)

A second recurring follow-up is whether Clint McLean's Havana / Hodgkin-Huxley monographs (`Tsukieomie/McLean-Books`: *Solving Havana Syndrome…* 2022, ISBN 978-0-6397-2006-7; *Methods for Detecting Biology Affecting Electromagnetic Frequency Ranges Causing Havana Syndrome*, ~2024) close the WaveBand MEDUSA evidence question. They do not. The cross-repo audit found **zero** mentions of `MEDUSA`, `WaveBand`, `Sadovnik`, `Navy SBIR`, or `MAE` in either book; the only `MEDUSA` strings in the McLean-Books repository are two unsourced maintainer annotation lines in `EEG_RF_CONNECTION_AND_PATENT_EVOLUTION.md` with no citation, no frequency, and no waveform. McLean's mechanism work — sub-thermal pulsed RF → Hodgkin-Huxley equilibria → layered amplification, anchored around ~400–700 MHz head resonance citing ARRL, generally valid ≥10 MHz, with ADS 95 GHz used only as a generic existence proof — supports a **broad contextual hypothesis** that pulsed-RF / thermoelastic / neural-modulation systems belong in the Havana problem space. That is consistent with MEDUSA-class discussion at the category level, but it is **not** evidence of MEDUSA parameters, deployment, lineage, or Havana causation. McLean's books are self-published and non-peer-reviewed; for primary medical / IC anchors, route directly to Frey 1962, Lin 2002 / 2017, Golomb 2018, NAS 2020, and the ODNI 2022 expert panel rather than via McLean. See `MCLEAN_BOOKS_HAVANA_MEDUSA_WAVE_NOTE.md` for the full bound.

## 10) Contemporaneity context: Army CALL "voice to skull devices" thesaurus entry

The Army Center for Army Lessons Learned (CALL) Thesaurus "voice to skull devices" entry — preserved by FAS at [https://sgp.fas.org/othergov/dod/vts.html](https://sgp.fas.org/othergov/dod/vts.html), original CALL URL `http://call.army.mil/products/thesaur_e/00016275.htm`, broader term "nonlethal weapons" — carries a last-reviewed date of **25 March 2004**, which falls inside the MEDUSA Phase I performance period **19 November 2003 — 19 May 2004**. This is contemporaneous **terminology + prototype-development** overlap inside the early-2000s DoD non-lethal-weapons ecosystem. It strengthens T3 provenance only; it does not upgrade T2 (semantic speech) or T4 (deployment/attribution). The 2008 Phys.org / Wired / New Scientist coverage cluster is a public-visibility resurfacing event, not documented program discontinuation. See `CALL_THESAURUS_MEDUSA_CONTEMPORANEITY_NOTE.md` and `v2k-evidence-matrix.md` Version 38.

## 11) Primary-page deep read — `medusa-navysbir-wayback.html` (Wayback 2008-04-09)

This section is a **line-by-line discipline pass** on the archived Navy SBIR **Phase I Summary Report** page mirrored in-repo. It does not add new URLs; it constrains how far primary language can be pushed.

### 11.1 Frozen bibliographic header (award block)

From the HTML award table (verbatim strings, punctuation as captured):


| Field              | Value in mirror                                                     |
| ------------------ | ------------------------------------------------------------------- |
| Page title         | `Phase I Summary Report`                                            |
| Government contact | Mr. George Gibbs (`george.gibbs@usmc.mil`)                          |
| Contractor POC     | Dr. Lev Sadovnik (`lsadovnik@waveband.com`)                         |
| Firm               | WaveBand Corporation, 17152 Armstrong Avenue, Irvine, CA 92614-5718 |
| Contract #         | `M67854-04-C-1012`                                                  |
| Topic              | `N03-163`                                                           |
| Solicitation       | `03.2`                                                              |
| SYSCOM             | `MARCOR`                                                            |
| Award amount       | `99965.00`                                                          |
| Phase              | `I`                                                                 |
| Program            | `Navy SBIR`                                                         |
| Start / End Date   | `11/19/2003 - 05/19/2004`                                           |
| FY Reported        | `2004`                                                              |
| Title              | `Remote Personnel Incapacitation System`                            |


**Interpretation:** six-month Phase I, **USMC SYSCOM** channel, **under $100k** — consistent with breadboard risk reduction, not a program-of-record procurement.

**SBIR-bulk vs Wayback-summary amount mismatch (data hygiene):** `medusa-contract-cluster-from-sbir-bulk.json` lists the WaveBand **Remote Personnel Incapacitation System** row as **`M67854-04-C-1012`**, Phase **I**, award year **2003**, amount **`69990.0000`**, agency tracking **`N032-0412`**, with **Topic Code blank** in that extract. The archived Navy summary page (`medusa-navysbir-wayback.html`) instead shows **`99965.00`** and topic **`N03-163`** in the visible award table. **Do not over-fit the dollar figure or topic-code field across extracts** without reconciling which database row maps 1:1 to the Wayback snapshot; treat the **Wayback HTML** as the **displayed** program summary anchor and the **bulk JSON** as a **separate index projection** that can drift on nullable columns.

### 11.2 Objective paragraph — acronym, mechanism, phenomenology (not speech)

The objective `<span>` text (Wayback capture) defines MEDUSA and ties it to MAE. Notable details:

- **Acronym is explicit:** *"MEDUSA (Mob Excess Deterrent Using Silent Audio)"* — the word **"silent"** here is **MAE / internal-sensation framing**, not a claim that the device is silent to bystanders in all modes; the same paragraph still describes **microwave irradiation** and **auditory sensation**.
- **Mechanism claim:** *"well established microwave auditory effect (MAE)"* and *"strong sound sensation in the human head"* under *"specifically selected microwave pulses of low energy"*.
- **Operational verbs:** *"discomfort"*, *"deterring personnel"*, *"temporarily incapacitating particular individuals"* — **aversive / incapacitation** intent, not **semantic communication** intent.

**OCR/typography in government HTML:** the mirror reads *"The main goal of the Phase I project **wad** to design…"* — almost certainly **"was"**; do not treat the typo as substantive.

### 11.3 Results paragraph — five self-reported bullets (prototype, not field)

The Phase I results list is only:

1. An operating frequency was chosen
2. Hardware requirements were established (commercial magnetron, high-voltage pulse former)
3. Hardware was designed and built
4. Power measurements; pulse parameters confirmed
5. **Experimental evidence of MAE was observed**

**Load-bearing negative:** there is **no** separate bullet for human-subject testing at range, crowd trials, **intelligibility metrics**, **word error rate**, **deployment**, or **transition to Phase II**. Evidence grade stays **contractor Phase I self-report** (Moderate confidence for "something was built and MAE was seen in the lab sense of the summary," per §5).

### 11.4 "Potential Applications and Benefits" — **requirements language**, not demonstrated capability

The benefits paragraph mixes **stated use cases** (perimeter protection, hearing-impaired assistive communication, law enforcement / military crowd control) with a **future-tense specification block:** *"The system **will**: be portable, require low power, … be able to **switch from crowd to individual coverage**, …"*.

**Discipline point:** in acquisition grammar, this reads like **desired system attributes** copied from a solicitation or internal concept brief — **not** outcomes demonstrated inside the six-month Phase I window. Treating that sentence as proof of built hardware capability would be **tier collapse** (requirements text → T4). It remains **T3 / intent** unless a separate test report is produced.

### 11.5 Tier-B lexical scan on the primary page body

A case-insensitive search of `medusa-navysbir-wayback.html` for: `speech`, `intelligib`, `word`, `voice`, `semantic`, `conversation` → **no matches** in the objective/results/benefits spans.

**Conclusion:** the **archived Navy SBIR summary page itself** does **not** assert Tier-B **conversational microwave speech**; press and secondary narratives are where that escalation usually enters. Repo advocacy file `findings/03_Technology_Patents/35_MEDUSA_DUAL_USE_AND_NAVY_SBIR.md` may **infer** operational bridges; this audit file stays bound to **what the primary mirror text says**.

### 11.6 Tight coupling back to EPIC / `N03-163` (continuation hygiene)

Combine §11 with `MEDUSA_TRANSITION_GAP_ANALYSIS.md`:

- **EPIC (Invocon)** shows **Phase I → Phase II** under bulk-row topic code **`N03-163`** (`M67854-05-C-6509`).
- **MEDUSA (WaveBand)** shows **Phase I only** at `M67854-04-C-1012` with topic **`N03-163`** on the summary page but **topic code blank** in the SBIR bulk row used in the gap analysis.

So: **shared topic code on paper does not equal same engineering line.** Safe sentence: *Open SBIR bulk + archived summary support a WaveBand MEDUSA Phase I MAE prototype and a separate Invocon EPIC line with visible Phase II; they do not, in this corpus, merge into one transitioned MEDUSA product record.*

## 12) “Voice of God” — where the phrase comes from (and what it is **not** in-repo)

This section answers a recurring confusion: **“Voice of God” is not language from the archived WaveBand MEDUSA SBIR summary page.** A case-insensitive search of `medusa-navysbir-wayback.html` for `voice of god` / `Voice of God` returns **no matches**.

### 12.1 Journalism / NLW community — **LRAD (acoustic hailing), not MAE**

In open reporting, **“Voice of God” is widely used as a colloquial nickname for the Long Range Acoustic Device (LRAD)** and similar **acoustic hailing** systems: highly directional **airborne** sound used to project warnings or voice commands at distance. Examples accessible without paywall friction include the Wikipedia article on [Long-range acoustic devices](https://en.wikipedia.org/wiki/Long-range_acoustic_device) and popular-press explainers that pair **ADS (“heat ray”)** with **LRAD (“voice of God”)** as distinct NLW items (e.g. [Forbes, 2020](https://www.forbes.com/sites/markcancian/2020/09/18/will-dod-deploy-a--heat-ray-and-the-voice-of-god-against-demonstrators/)).

**Mechanism contrast (repo discipline):** LRAD/AHD is **ordinary sound in air**. WaveBand MEDUSA Phase I language is **microwave auditory effect (MAE)** — a different physical channel. Conflating the nicknames across channels is a common **category error**; see also §8 (`MEDUSA_VS_ADS_LRAD_LINEAGE_QUESTION.md`).

### 12.2 Targeted-individual / V2K discourse — **folk label, not a program name**

Internet Archive and forum bundles sometimes tag material with **`voice of god` alongside `v2k`, `voice to skull`, `targeted individuals`** (see metadata string captured in `findings/investigation-dig/search-dig-lin1978-archive.json`). That is **community vocabulary**, not a DoD system-of-record designation.

### 12.3 UK FOI / McMurtrey trail — **request title, not a verified weapon system name**

`HEARING_IMPAIRED_DEEP_DIG_VII.md` cites a WhatDoTheyKnow request titled **“Use of voice of god weapon system”** as the provenance path for a **McMurtrey draft** attachment ([WhatDoTheyKnow](https://www.whatdotheyknow.com/request/use_of_voice_of_god_weapon_syste)). There, **“Voice of God” is the requester’s framing / misnomer**, not an indexed program identifier returned as a verified MoD equipment name in the sense of a stable procurement nomenclature.

### 12.4 In-repo advocacy layer — **Mode label on MEDUSA, not primary text**

`findings/03_Technology_Patents/35_MEDUSA_DUAL_USE_AND_NAVY_SBIR.md` labels a speculative operating mode as **“Individual targeted incapacitation / ‘voice of god’”** and ties it to the Navy’s **crowd-to-individual** language. That is **author synthesis** building on press/Sadovnik threads — useful as **hypothesis navigation**, but it must not be back-read as if it appeared on **`medusa-navysbir-wayback.html`**. For tier discipline, keep §11 primary text separate from Part 4 of file 35.

### 12.5 Wired (Dec 2007) — early headline tying **“Voice of God”** to **LRAD** in major press

*Wired* published **“The Voice of God Weapon Returns”** (URL slug `the-voice-of-go`, Dec 2007) — an early **mainstream-tech-press** instance of the nickname in a **weapon / NLW** frame: [https://www.wired.com/2007/12/the-voice-of-go/](https://www.wired.com/2007/12/the-voice-of-go/). Later explainers (e.g. [Forbes, 2020](https://www.forbes.com/sites/markcancian/2020/09/18/will-dod-deploy-a--heat-ray-and-the-voice-of-god-against-demonstrators/), [Popular Science](https://www.popsci.com/story/technology/heat-weapon-active-denial-system-ads-lrad-explained/)) repeat **LRAD** as **“voice of God”** alongside **ADS** as **“heat ray,”** still treating them as **distinct** systems. **Caveat:** tracing the **first** spoken use in Iraq or elsewhere is beyond this repo’s primary-archive scope; the chain above is sufficient to show the nickname was **journalism- and operator-culture-driven** on the **acoustic** side, not derived from the **WaveBand MEDUSA** SBIR HTML.

### 12.6 Wired Dec 2007 (Wayback HTML) — **LRAD “Voice of God”** chain **and** a **microwave MAE** paragraph in the **same** article (press mixing)

A Wayback **raw HTML** capture of *Wired* **“The Voice of God Weapon Returns”** (`http://www.wired.com/2007/12/the-voice-of-go/`, capture **20140416132938**, `https://web.archive.org/web/20140416132938id_/http://www.wired.com/2007/12/the-voice-of-go/`) lets us quote the **body** without the live site’s modern JS shell.

**Directed-sound / LRAD block (acoustic channel).** The article cites **Holosonic Research Labs** and **American Technology Corporation** as vendors of directed sound, notes **DARPA** work on a **“sonic projector,”** then writes (ellipsis in square brackets marks a skip of navigation chrome in the plain-text extract):

> … **Strategy Page** reports that troops are using the **Long Range Acoustic Device** as a **modified Voice of God weapon**: It appears that some of the troops in **Iraq** are using **"spoken"** (as opposed to **"screeching"**) **LRAD** to mess with enemy fighters. … **LRAD** can put the **"word of God"** into their heads. If God, in the form of a **voice that only you can hear**, tells you to surrender, or run away, what are you gonna do?

**Microwave / MAE block (RF channel) — same article, same scroll.** Immediately after CNET / *Paranormal State* advertising aside, the piece continues:

> Beyond directed sound, it’s long been known that **microwaves** at certain frequencies can produce an **auditory effect** that sounds like it’s coming from **within someone’s head** (and there’s the nagging question of **classified microwave work at Brooks Air Force Base**, that the Air Force stubbornly refuses to talk about). That brings us back to the **Voice of God/Allah Weapon**. Is it real or bogus?

**Why this matters for investigation hygiene:** in **one December 2007 *Wired* column**, the author **stitches** (a) **LRAD / “voice only you hear”** tactical lore, (b) **Holosonics / ATC** directed-audio marketing, (c) **DARPA sonic projector** rumor-space, and (d) **microwave auditory effect + Brooks classified-work** rumor-space — then asks a single “real or bogus?” question about **“Voice of God/Allah Weapon.”** That is **Tier‑5 / journalism** texture: it helps explain **why** later readers **merge LRAD nicknames with MAE / MEDUSA / V2K** on social media, but it is **not** a primary program record that **equates** WaveBand MEDUSA with LRAD or with a Brooks fielded system.

## 13) EPIC sibling line — quantitative bulk row (Invocon) vs SNC press capture (WaveBand)

This section deepens `MEDUSA_TRANSITION_GAP_ANALYSIS.md` with **exact fields** pulled from `medusa-contract-cluster-from-sbir-bulk.json` (SBIR bulk extract used across MEDUSA passes).

### 13.1 Invocon EPIC — Phase I and Phase II (open index)

| Phase | Contract | Company | Agency tracking | Topic code | Award year | Amount (USD) | Other dates |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Phase I** | `M67854-04-C-1013` | INVOCON, INC. | `N032-0874` | *(blank in bulk row)* | 2003 | **69,977.00** | — |
| **Phase II** | `M67854-05-C-6509` | INVOCON, INC. | `N032-0874` | **`N03-163`** | 2005 | **749,843.00** | Proposal award **2005-06-09**; contract end **2007-12-08**; solicitation **`2003.2`** |

**Interpretation:** the **only** row in this bulk slice that carries **`Topic Code = N03-163` with a Phase II** flag is **EPIC**, not WaveBand MEDUSA. That is the clean quantitative backbone for the “**continuation ≠ MEDUSA**” warning already stated in §11.6.

### 13.2 SNC acquisition press page — **MMW radar framing only** (negative for MEDUSA/MAE in this mirror)

`medusa-sncorp-wayback.html` (Wayback **2012-11-27** capture of SNC `press_more_info.php`-style content) announces **acquisition of WaveBand Corporation (May 2005)** and describes WB as **millimeter wave (MMW)** innovation: **beam-steering antennas and imaging radar**; applications listed include **aircraft landing aids, missile seekers, surveillance sensors**.

**String scan (negative):** `rg` over this HTML file for `MEDUSA`, `MAE`, `microwave auditory`, `auditory` (case-insensitive) → **no matches**.

**Interpretation:** the **corporate-facing** acquisition narrative preserved here does **not** surface the Navy MEDUSA / MAE non-lethal wording at all. That is consistent with treating **SNC’s public press layer** as **imaging / radar / aperture** marketing, while the **MAE crowd-control narrative** lives on the **separate** `navysbirprogram.com` summary capture (`medusa-navysbir-wayback.html`). Do not merge the two into one “SNC admitted MEDUSA” sentence without a primary that explicitly does so.

### 13.3 EPIC patent **US7841989** — USPTO full text in-repo (PDF + OCR lexical pass)

This subsection grounds `MEDUSA_EPIC_CALIFORNIA_EVIDENCE_NOTE.md` §2.3 with a **reproducible primary pull** suitable for corpus audit (not reliance on mirrors alone).

#### 13.3.1 Artifacts

| Artifact | Role |
| --- | --- |
| `findings/investigation-dig/primary/US7841989_EPIC_patent_uspto.pdf` | Official USPTO image-PDF (**16 pp.**), fetched **2026-05-02** from `GET https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/7841989` (`Content-Type: application/pdf`). |
| `findings/investigation-dig/primary/US7841989_EPIC_patent_uspto_ocr.txt` | Full-document OCR text (`pdftoppm` PNG @ 150 DPI, **`tesseract` eng** concatenated per page). **Hygiene:** the source PDF carries **no extractable text layer** (`pdftotext` output empty); OCR introduces character noise on headings and formulae — treat verbatim quotes from OCR as **best-effort** unless checked against the PDF raster. |

**Note on Google Patents direct PDF shortcut:** `https://patents.google.com/patent/US7841989B2/pdf` returned **`text/html`** in this workspace (SPA shell ~141 KB), not a binary PDF; **USPTO image-PPUBS** is the stable machine pull used here.

#### 13.3.2 Government support and stated mechanism (OCR-aligned)

Federal clause (p. ~9 on USPTO facsimile, OCR extraction):

> This invention was made with Government support under DOD Small Business Innovation Research (SBIR) Contract No. **M67854-04-C-1013** awarded by the **U.S. Marine Corps Systems Command.**

Framing through the specification (same corpus): EPIC describes **non-destructive stun / interdiction** by **beamed RF** energy whose principal claimed coupling is **Lorentz force on ion currents in sensory / vestibular hair-cell cilia**, disrupting mechanical transduction and related electrochemistry → **disorientation, confusion, temporary incapacity** (“through walls” is claimed as an operational aspiration in the narrative block).

Worked example in the illustrative hardware discussion (Fig. 11 schematic, OCR): example parameters cited include **carrier ~915 MHz**, **driving / modulation frequency ~300 Hz**, **~1.3 kW transmit power**, **parabolic antenna ~20 dB gain**, illustrative **hair-bundle power on target ~5 nW at ~10 m** (values read from patent body OCR; formulas/tables adjacent in the patent contain scaling discussion).

Sensory wording that can be **mis-read** beside MAE in quick scans: dependent-claim language (OCR) states that random excitation of vestibular hair cells can yield sensations of **“intense wideband sound”** *together with* vestibular / visual mismatch disorientation — that is framed as **undecodable, confused sensory flooding**, **not** as **intelligible speech** or semantic messaging.

#### 13.3.3 Negative lexical scan (full OCR file) vs MAE / MEDUSA / V2K-adjacent terms

`rg` over `US7841989_EPIC_patent_uspto_ocr.txt`, case-insensitive, on a MAE-centric watchlist (`microwave auditory`, `Frey`, `thermoelastic`, `thermo acoustic`, thermo+acoustic compounds, **`MEDUSA`**, **`WaveBand`**, `Sadovnik`, `Manasson`, `Mob Excess`, `silent audio`, **`speech`**, **`voice`**, `intelligib`, semantic, conversational, **`skull`**) → **no hits**.

Separate positive hits (**expected**, anatomy / mechanism vocabulary): **`vestibular`**, **`Lorentz`**, **`auditory`** (system / cortex pathway description), **`interdiction`**, **`M67854-04-C-1013`**, **`915 MHz`**.

**Interpretation for §11 / MEDUSA corpus hygiene:** EPIC’s **published primary specification** reinforces a **distinct mechanism story** (**RF Lorentz-force sensory / vestibular disruption** plus **incoherent wideband-sound sensation** language) vs WaveBand MEDUSA’s **microwave auditory effect (MAE)** SBIR wording. OCR confirms **non-merger**: no lexical bridge to MAE nomenclature, MEDUSA branding, or intelligible-speech messaging in this patent instrument.

### 13.4 EPIC patent **US7841989** — prior-art / examiner-citation cluster (face sheet + specification anchors)

This subsection reads the **References Cited** block on the US7841989 facsimile (`US7841989_EPIC_patent_uspto_ocr.txt` **page 02**) and ties it to **in-body** scientific anchors (Hudspeth / BPPV), so the EPIC story is not only “no MAE words” (§13.3.3) but also **positively anchored** in a **hair-cell electro-mechanics + clinical vertigo** literature stack.

#### 13.4.1 U.S. patent documents (as printed on the grant; titles from Google Patents HTML `DC.title` except where noted)

| As printed (OCR) | Normalized ID | Short title (verification source) |
| --- | --- | --- |
| `4,611,599 A` … Bentall et al. | **US4611599** | *Electrical apparatus for influencing the metabolic characteristics of living systems* — [Google Patents](https://patents.google.com/patent/US4611599A/en) |
| `2002/0072781 A1` … Lattner et al. | **US20020072781 A1** | *Vestibular stimulation system and method* — [Google Patents](https://patents.google.com/patent/US20020072781A1/en) |
| `5,787,340 A` … Sepponen | **US5787340** | *Radiation shielding apparatus for communication device* — [Google Patents](https://patents.google.com/patent/US5787340A/en) |
| `5,935,054 A` … Loos | **US5935054** | *Magnetic excitation of sensory resonances* — [Google Patents](https://patents.google.com/patent/US5935054A/en) |
| `6,077,237 A` … Campbell et al. | **US6077237** | *Headset for vestibular stimulation in virtual environments* — [Google Patents](https://patents.google.com/patent/US6077237A/en) |
| `6,238,333 B1` … Loos | **US6238333** | *Remote magnetic manipulation of nervous systems* — [Google Patents](https://patents.google.com/patent/US6238333B1/en) |
| `6,314,324 B1` … *(assignee line OCR-garbled on face)* | **US6314324 B1** | *Vestibular stimulation system and method* — [Google Patents](https://patents.google.com/patent/US6314324B1/en) (same title family as **US20020072781**; typical continuation pattern) |
| `7,277,749 B2` … Lattner et al. / Gordon et al. | **US7277749 B2** | **USPTO first-page OCR** (not Google Patents `DC.title` in this environment): *Treatments for snoring using injectable neuromuscular stimulators* — inventors **David C. Gordon** et al., assignee **Alfred E. Mann Institute…** — USPTO PDF `GET https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/7277749` + `tesseract` page 1. |

**OCR hygiene on the face sheet:** the printed **References** line pairs **`7,277,749 B2`** with **“Lattner et al.”** while the **USPTO grant** for `7277749` lists **Gordon** (and others) on the title block — treat the **number** as authoritative; treat the **inventor string on the EPIC face OCR** as **likely mis-keyed or merged-line noise** unless a second facsimile confirms.

**Examiner flag:** the face sheet marks **`* cited by examiner`** on at least **US20020072781** and **US7277749** rows in the OCR extract — i.e. parts of this cluster entered via **examination**, not only applicant choice.

#### 13.4.2 Non-patent literature (as printed)

- **Miller, Diane F.,** “Basics of Radio Astronomy,” Mar. 1997, Caltech JPL D-13835 (general RF / propagation literacy).
- **Bozovic D, Hudspeth A. J.,** “Hair-bundle movements elicited by transepithelial electrical stimulation of hair cells in the sacculus of the bullfrog,” *Proc. Natl. Acad. Sci. USA* **100**(3):958–63 (2003) — this is also **quoted in the EPIC specification** (OCR around **US7841989** p. 12) as the bridge from **transepithelial electrical stimulation** of hair bundles to the inventors’ **RF / Lorentz-force** excitation analogy.

#### 13.4.3 Why this deepens the EPIC vs MAE separation (and one folklore guardrail)

- **Inner-ear / balance / hair-cell physics** dominates both the **cited patent titles** (vestibular headsets; vestibular stimulation publication) and the **in-body** argumentation (**BPPV** mimicry, **Hudspeth** hair-bundle mechanics) — still **no thermo-acoustic / MAE / skull-conduction hearing** pathway in the instrument text (§13.3.3).
- **US5935054 (*Magnetic excitation of sensory resonances*, Loos)** is a patent that **Internet “sensory resonance” lore** often treats as a standalone meme. Here it appears only as **U.S. patent prior art on EPIC’s face**; **EPIC’s specification** does not adopt Loos’s “sensory resonance” framing by name in the OCR corpus checked for §13.3. **Do not** treat “EPIC cites Loos” as “EPIC equals Loos weaponology” without in-body text support.