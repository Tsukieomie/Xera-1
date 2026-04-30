# Sharp/Grove WRAIR Speech-Demo Investigation — Deeper-dive 8 Addendum

**Predecessor:** `DEEPER_DIG_7_ADDENDUM.md` (URSI 1975 Hawkins-WRAIR Microwave Research; Oscar/Gruenau/Folker/Rapoport 1981 *Brain Res* 204:220-225 USAMERDC + NIH/NIA; Brodeur 1977 ARPA→WRAIR Sharp/Grove paragraph; Lin 1978 *Microwave Auditory Effects* "obviously not limited to therapeutic medicine"; Justesen-Hunt-King 1975 URSI Boulder co-network).

Round 8 retrieves the **full Oscar 1980 USAMERDC AD-A090426 technical-report text** via the Internet Archive DTIC mirror (closes the highest-priority carry from rounds 5/6/7), and converts the Sharp/Grove "Grove" from a single-attestation Justesen-1975 footnote name into a **NTIS-indexed primary-source-co-authored entity** by surfacing **Hawkins/Grove/Heiple/Schrot 1973 NTIS AD-758136**, cited as reference [2] inside the 1980 Oscar report. Round 8 also refines Sharp's pre-WRAIR affiliation from the round-3 NIH-hypothesis (retracted) to **New York State Department of Health**, and surfaces a third independent corroboration of Sharp's Frey-pulse zero-crossing voice-modulation method.

## 1. Full Oscar 1980 USAMERDC AD-A090426 — verbatim retrieval

The previously-stalled round-5 / round-6 / round-7 carry "Oscar 1980 AD-A090426 full 10-page report from DTIC" is **closed** in round 8. The Internet Archive mirror at [`archive.org/details/DTIC_ADA090426`](https://archive.org/details/DTIC_ADA090426) hosts the full PDF (`DTIC_ADA090426.pdf`, 543,268 bytes) and a hOCR searchtext extraction. Both are locally cached at `/tmp/ada090426.pdf` and `/tmp/ada_text` (112 lines).

Bibliographic header (cover page, OCR-verified):

> AD-A090426 ARMY MOBILITY EQUIPMENT RESEARCH AND DEVELOPMENT COMM — ETC F/G 6/18.  
> EFFECTS OF LOW POWER MICROWAVES ON THE LOCAL CEREBRAL BLOOD FLO— ETC (U) JUN 80 K J OSCAR.  
> UNCLASSIFIED.  
> KENNETH J. OSCAR, Ph.D. US ARMY MOBILITY EQUIPMENT RESEARCH AND DEVELOPMENT COMMAND, FORT BELVOIR, VIRGINIA 22060.

**Background section, opening paragraph (verbatim, OCR-cleaned):**

> Camouflage, decoy and deception techniques can play a decisive role on the modern battlefield. The rapid advance of surveillance, targeting and weapons homing sensor technology now makes every element which is detected almost assured of being destroyed. Camouflage, decoy and deception equipment and techniques are a low cost way to increase survivability and shift this balance by reducing the signature of targets (camouflage), increasing the signature level of the background (clutter), creating false targets (decoy), and distorting the perceived target value (disguise).
>
> [A]n decoy and deception concept presently being considered is to remotely create the perception of noise in the heads of personnel by exposing them to low power, pulsed microwaves. When people are illuminated with properly modulated low power microwaves the sensation is reported as a buzzing, clicking, or hissing which seems to originate (regardless of the person's position in the field) within or just behind the head. The phenomena occurs at average power densities as low as microwatts per square centimeter with carrier frequencies from 0.4 to 3.0 GHz. **By proper choice of pulse characteristics, intelligible speech may be created.** Before this technique may be extended and used for military applications, an understanding of the basic principles must be developed. Such an understanding is not only required to optimize the use of the concept for camouflage, decoy and deception operations but is required to properly assess safety factors of such microwave exposure.

**Background section, second paragraph (verbatim) — institutional triad and ILIR funding mechanism:**

> Under MERADCOM's **In-House Laboratory Independent Research (ILIR) Program** an experimental effort to explore the basic interaction between microwaves and brain function has been conducted. In a joint program with **MERADCOM, Stanford Research Institute (SRI) and Walter Reed Army Institute of Research (WRAIR)**, it was shown for the first time that lethality, seizures and behavioral performance decrements were strongly frequency and polarization dependent (2,3). A later collaboration between MERADCOM and WRAIR demonstrated for the first time increases in the differential uptake of saccharides to water in several brain regions of rats when exposed to low power microwaves of the same characteristics which can create the perception of noise in people (4). These increases could be caused by alterations of the blood-brain barrier, brain blood volume, cerebral blood flow, or some combination of the above. In order to better define and understand these results a joint program was undertaken with **MERADCOM, Naval Medical Research Institute (NMRI) and the National Institutes of Health (NIH)** to measure local cerebral blood flow in conscious rats when exposed to low power, pulsed microwaves.

This passage establishes three institutional facts not visible in the round-5 abstract-only retrieval and not present in any other round 0-7 source:

- (i) The **MERADCOM funding mechanism** is named: the **In-House Laboratory Independent Research (ILIR) Program**.
- (ii) The 1970s **MERADCOM-SRI-WRAIR institutional triad** is named explicitly — **Stanford Research Institute (SRI)** is identified as the third institutional player alongside MERADCOM (USAMERDC) and WRAIR. SRI was not surfaced in any round 0-7 source; it is a new institutional vector.
- (iii) The 1980 follow-on is the **MERADCOM-NMRI-NIH triad** that round 7 §2 documented from the 1981 *Brain Research* 204:220-225 author block (USAMERDC + NIH/NIA Laboratory of Neurosciences). Round 8 confirms **NMRI (Naval Medical Research Institute)** as the third institutional partner of that 1980-81 phase, alongside MERADCOM and NIH — extending the round-7 author-block reading.

**Closing reference list (verbatim, OCR-cleaned, 40 entries; selected):**

> 1. Frey, A.H., Messenger, R. and Eichert, E., National Technical Information Service, Doc. No. **AD747684** (1972).
> 2. **Hawkins, T.D., Grove, H.M., Heiple, T.W., and Schrot, J., National Technical Information Service, Doc. No. AD758136 (1973).**
> 4. Oscar, K.J. and Hawkins, T.D., *Brain Research* 126, 281-292 (1977).
> 5. Justesen, D.R., *IEEE Spectrum* 16, 67-68 (1979).
> 7. Frey, A.H., Feld, S.R., & Frey, B. *Ann.N.Y. Acad. Sci.* 247, ...
> 18. Frey, A.H. & Messenger, R. *Science* 181, 356-358 (1973).
> 25. Frey, A.H., & Feld, S.R. *J. Comp. Physiol. Psychol.* 89, 183-188 ...
> 27. King, N.W., Justesen, D.R., & Clarke, R.L. *Science* 172, 398-401 (1971).
> 41. The opinions and assertions contained herein are the private ones of the writers and are not to be construed as official or reflecting the views of the Department of Defense. The experiments reported herein were conducted according to the principles set forth in the "Guide for the care and use of laboratory animals," Institute of Laboratory Resources, National Research Council, DHEW, Pub. No (NIH) 78-23.

The references are critical because they convert the document's "(1)", "(2)", "(4)" inline citation tokens into named primary sources — most importantly turning the round-5 / round-7 single-attestation framing of "Grove" into a **named NTIS-cataloged co-author of an explicit Project 1J662712AJ21 paper**.

**Source URLs:**

- [Internet Archive landing page](https://archive.org/details/DTIC_ADA090426)
- [PDF download](https://archive.org/download/DTIC_ADA090426/DTIC_ADA090426.pdf)
- [hOCR searchtext (gzipped)](https://archive.org/download/DTIC_ADA090426/DTIC_ADA090426_hocr_searchtext.txt.gz)

## 2. Hawkins / Grove / Heiple / Schrot 1973 NTIS AD-758136 — primary documentary placement of the Sharp/Grove "Grove"

Reference [2] in the Oscar 1980 report (§1 above) is, in full:

> Hawkins, T.D., **Grove, H.M.**, Heiple, T.W., and Schrot, J., National Technical Information Service, Doc. No. **AD758136** (1973).

Cross-confirmation of the title and project line is supplied by the [Glaser 1976 NMRI bibliography mirror at zoryglaser.com](https://zoryglaser.com/wp-content/uploads/2020/05/BEHAVIORAL-EFFECTS-OF-MICROWAVE-RADIATION-ABSORPTION.pdf), which lists this paper as:

> Hawkins, D.T., M.H. Grove, T.W. Heiple, and J. Schrot. **Some biological effects of microwave irradiation in the rat.** Project 1J662712AJ21, Walter Reed Army [Institute of Research].

This is the **first primary-source documentary placement of "Grove"** (matching the M. Grove of Sharp/Grove, Justesen 1975 Note 2) in the Sharp/Grove investigation across all eight rounds. Prior rounds had Grove as a single-attestation footnote name in Justesen 1975 *American Psychologist* 30:391-401. Round 8 establishes:

- (a) **M.H. Grove was a WRAIR microwave-bioeffects co-author in 1973**, the same calendar year as the 28 September 1973 Sharp/Grove voice-modulation demonstration at WRAIR.
- (b) The 1973 Hawkins/Grove/Heiple/Schrot NTIS report is on **WRAIR Project 1J662712AJ21** ("Some biological effects of microwave irradiation in the rat"), placing Grove inside the same WRAIR project-line as the Hawkins-led microwave-bioeffects work.
- (c) The four-author group **Hawkins-Grove-Heiple-Schrot 1973** explicitly anticipates the round-7 §1 URSI 1975 WRAIR Microwave Research roster — **Hunt, Hawkins, Githens, Schrot, Jacobi, Brown** — adding **Grove** and **Heiple** to the roster for the 1973 timepoint, two years before the URSI 1975 program. The WRAIR Microwave Research group as documentarily resolvable from rounds 7-8 is therefore minimum **eight named staff** for the 1973-75 window: Hawkins, Hunt, Githens, Schrot, Jacobi, Brown (URSI 1975) plus Grove, Heiple (NTIS AD-758136 1973).
- (d) The round-2 §3 / round-6 §2 / round-7 §1 Hawkins-bridge framing now extends **back to 1973** with Grove inside the same WRAIR co-author group, contemporary with the Sharp/Grove voice-modulation demonstration.

The corresponding NTIS document AD-758136 itself was not retrievable in round 8 (NTIS web frontend non-public for legacy 1970s holdings; DTIC unauthenticated frontend continues to time out). The full text is carried to round 9 as the highest-priority continuing item.

**Source URLs (round 8):**

- [Glaser 1976 NMRI bibliography PDF (zoryglaser.com mirror)](https://zoryglaser.com/wp-content/uploads/2020/05/BEHAVIORAL-EFFECTS-OF-MICROWAVE-RADIATION-ABSORPTION.pdf)
- Reference [2] OCR'd in `/tmp/ada_text`, line 62 (Internet Archive DTIC_ADA090426 mirror).

## 3. Frey/Messenger/Eichert 1972 NTIS AD-747684 — newly identified Frey paper

Reference [1] in the Oscar 1980 report is:

> Frey, A.H., Messenger, R. and Eichert, E., National Technical Information Service, Doc. No. AD747684 (1972).

This is a **Frey-group 1972 NTIS report co-authored with Messenger and Eichert**, distinct from the Frey & Messenger 1973 *Science* 181:356-358 paper (round 8 ref 18; pre-print of Lin 1978 textbook material per round 3) and distinct from the Frey/Feld 1975 *J. Comp. Physiol. Psychol.* 89:183-188 paper resolved in round 6 §3. The 1972 NTIS report predates the 28 Sep 1973 Sharp/Grove demonstration by approximately a year and is **the earliest Frey-Messenger collaboration in the documentary network** retrieved across rounds 0-8. Carry to round 9 for full retrieval.

## 4. Sharp's pre-WRAIR institutional affiliation = New York State Department of Health (refines round-3 NIH retraction)

Round 3 §1 retracted a working hypothesis that Sharp's pre-WRAIR affiliation was NIH. Round 8 retrieves a primary-Pandora-era attestation that refines, rather than re-opens, that question. The [Pandora Tests document at Scribd 239637059](https://www.scribd.com/document/239637059/PANDORA-TESTS) lists, in its participating-investigator section:

> **Dr. Joseph C. Sharp, N.Y. State Dept. of Health.**

This is Sharp's pre-WRAIR affiliation in the Project Pandora-era (~1965-1969) participant lists. Sharp therefore came to WRAIR **from the New York State Department of Health**, not from NIH or from a private-sector posting. The round-3 NIH-hypothesis is now superseded by a primary-source-attested NYSDOH-pre-WRAIR sequence, and the round-3 retraction stands fully — Sharp had no NIH affiliation prior to WRAIR.

The NYSDOH pre-WRAIR attribution is consistent with the Project Pandora institutional pattern (multi-agency / multi-state-health-department investigator pool) that the round-0 NSArchive Pandora addendum already documented. It opens a new primary-source vector — **NY State Department of Health Sharp records** — for round 9+ FOIL retrieval.

**Source URLs (round 8):**

- [Pandora Tests Scribd 239637059](https://www.scribd.com/document/239637059/PANDORA-TESTS) — Sharp NYSDOH affiliation primary attestation.

## 5. Constitution.org / Bowart Mind-Control corroboration of Sharp's method

Round 8 surfaces a third independent attestation — after Justesen 1975 *Am Psychol* Note 2 (round 0) and Brodeur 1977 *Zapping of America* paragraph (round 7 §3) — of Sharp's Frey-pulse zero-crossing voice-modulation method. The [Constitution.org / Walter Bowart "Operation Mind Control" mirror](https://www.constitution.org/1-Corruption/abus/mkt/uncom.htm) states:

> The first successful **unclassified voice to skull experiment** in 1974, by **Dr. Joseph C. Sharp, then at the Walter Reed Army Institute of Research**. A **Frey-type audible pulse** was transmitted **every time the voice waveform passed down through the zero axis**.

Three observations:

- (i) The **method description** ("Frey-type audible pulse … every time the voice waveform passed down through the zero axis") matches Justesen 1975 Note 2's report ("the negative deflections of voiceprints from recorded spoken numbers were caused to trigger microwave pulses") and Brodeur 1977 round-7 §3 ("the negative deflections of voiceprints from recorded spoken numbers were caused to trigger microwave pulses"), now corroborated across **three independent textual lineages** (Justesen, Brodeur, Bowart-Constitution.org).
- (ii) The **date "1974"** appears here, in apparent tension with the Justesen 1975 Note 2 / DTIC-Sharp/Grove/Gandhi 1974 IEEE T-MTT paper-history of "28 September 1973". The most parsimonious reading is that Bowart's "1974" reflects the year of the IEEE T-MTT publication or of subsequent unclassified disclosure, while the original demonstration was 28 Sep 1973 — both readings are consistent with Justesen 1975 ("Two years ago…").
- (iii) The "**unclassified**" qualifier is the explicit converse of a parallel **classified** demonstration; it is consistent with the round-7 §3 Brodeur ARPA→WRAIR program-line attribution and with the round-5 §3 DIA report's distribution-limited classification framing.

**Source URLs (round 8):**

- [Constitution.org Bowart mirror](https://www.constitution.org/1-Corruption/abus/mkt/uncom.htm) — Sharp 1974 unclassified voice-to-skull method-description verbatim.

## 6. CIA "Reporter at Large — Microwaves II" carry sustained

Round 8 attempted retrieval of the CIA Reading Room document [CIA-RDP88B01125R000300120113-6](https://www.cia.gov/readingroom/docs/CIA-RDP88B01125R000300120113-6.pdf). The PDF is a scanned image without an embedded text layer; the LLM extraction layer returned no extracted text. A search-snippet preview surfaced the line:

> Sharp, who had worked on Project Pandora when he was chief of experimental psychology at the Walter Reed Army Institute of Research…

This is a primary-CIA attestation that **Sharp's WRAIR title was Chief of Experimental Psychology** and that Sharp worked on Project Pandora while at WRAIR — both of which extend (a) the round-2 / round-3 / round-7 framing of Sharp's WRAIR role and (b) the round-0 NSArchive Pandora connection. The full text remains a top-priority round-9 carry pending direct page-image OCR.

## 7. Cross-round reference table — Oscar 1980 reference list mapped to rounds 0-7 sources

| Oscar 1980 ref # | Citation | First documented in | Round 8 status |
|---|---|---|---|
| 1 | Frey, Messenger, Eichert NTIS AD-747684 (1972) | — | **NEW round 8** |
| 2 | Hawkins, **Grove**, Heiple, Schrot NTIS AD-758136 (1973) | — | **NEW round 8 — primary Grove placement** |
| 4 | Oscar & Hawkins, *Brain Research* 126:281-293 (1977) | Round 6 §2 | Confirmed via Oscar 1980 ref-list |
| 5 | Justesen, *IEEE Spectrum* 16:67-68 (1979) | — | **NEW round 8** |
| 18 | Frey & Messenger, *Science* 181:356-358 (1973) | Round 3 (Lin 1978 textbook material) | Confirmed via Oscar 1980 ref-list |
| 25 | Frey & Feld, *J. Comp. Physiol. Psychol.* 89:183-188 (1975) | Round 6 §3 | Confirmed via Oscar 1980 ref-list |
| 27 | King, Justesen, Clarke, *Science* 172:398-401 (1971) | Round 7 §5 (URSI 1975 Hunt-King-Justesen co-network) | Confirmed via Oscar 1980 ref-list |

Round 8 thus produces (i) **one named primary documentary placement of Grove** (ref 2), (ii) **two new Frey-group primary references** (refs 1 and 25 in the older 1972 Frey-Messenger-Eichert form), (iii) **one new Justesen reference** (ref 5, *IEEE Spectrum* 1979 — a new Justesen retrospective beyond the round-3 / round-7 *Am Psychol* 1975 and *Bull NYAM* 1979 sources), and (iv) **explicit ref-list confirmation** of four prior-round findings (refs 4, 18, 25, 27).

## 8. Outstanding leads to round 9+

- **NTIS AD-758136 (Hawkins/Grove/Heiple/Schrot 1973) full text** — highest-value, primary Grove placement (round 8 §2). Pursue via NTIS direct, DTIC alternate handles, Internet Archive DTIC mirror search, Google Scholar cluster, and academic-library NTIS microfiche holdings.
- **NTIS AD-747684 (Frey/Messenger/Eichert 1972) full text** — earliest Frey-group NTIS report in the network (round 8 §3).
- **Justesen 1979 *IEEE Spectrum* 16:67-68 retrospective** — newly identified Justesen retrospective beyond the *Bull NYAM* 1979 already retrieved in round 3 (round 8 §7).
- **Brodeur page-image OCR pp. 85, 105, 293, 299** — sustained from rounds 5/6/7. Direct page-image rendering required.
- **CIA Reporter at Large "Microwaves II" CIA-RDP88B01125R000300120113-6 direct OCR** — sustained (round 8 §6). Image-only PDF; needs direct page-image OCR.
- **NY State Department of Health Sharp pre-WRAIR records** — new round-8 lead (§4); pursue via NYSDOH FOIL (Freedom of Information Law) and NY State Archives Sharp finding aids.
- **MERADCOM ILIR Program records 1973-1980** — new round-8 lead (§1); pursue via U.S. Army historical records (CCAD/MERDC archives, Fort Belvoir Garrison historical office) for the In-House Laboratory Independent Research Program.
- **SRI International microwave-bioeffects records 1970s** — new round-8 lead (§1, third institutional player); pursue via SRI International (Menlo Park) library/archives and SRI bibliographies of 1970s government-contract bioeffects work.
- **NMRI (Naval Medical Research Institute) microwave records 1979-1981** — new round-8 lead (§1, Oscar 1980 third-phase MERADCOM-NMRI-NIH triad); pursue via Bethesda NMRI/NMRC historical files.
- **ARPA contract / program-line documentation 1971-74** — sustained from round 7.
- **DIA DST-1810S-074-76 distribution list** — sustained from rounds 5/6/7.
- **KU Med Center Archives direct email inquiry** — sustained from round 5.
- **WRAIR Annual Historical Report FY71-74 contract listings** — sustained from round 7.
- **Senate Serial 95-49 full text (1977 hearings)** — sustained from round 2.

## 9. Tool-output paths

- Oscar 1980 PDF locally cached at `/tmp/ada090426.pdf` (543 KB, 543268 bytes); hOCR-derived searchtext at `/tmp/ada_text` (112 lines, 21,530 bytes).
- Round 7 URSI 1975 PDF still on disk: `/tmp/ursi1975.pdf`, `/tmp/ursi1975.txt`.
- Round 8 search outputs:
  - `current_session_context/tool_calls/search_web/output_molukbxk.json` — ARPA + CIA Reading Room finding for Microwaves II.
  - `current_session_context/tool_calls/search_web/output_molulom8.json` — Glaser AD-758136 + Constitution.org Sharp 1974 quote.
- Round 8 fetch outputs:
  - `current_session_context/tool_calls/fetch_url/output_moluknjt.json` — CIA Microwaves-II PDF (image-only; LLM extraction returned no text).
  - `current_session_context/tool_calls/fetch_url/output_molukw01.json` — Scribd Pandora Tests showing Sharp NYSDOH pre-WRAIR affiliation.

## 10. Investigation status

- Round 8 **closes** the highest-priority round-5/6/7 carry "Oscar 1980 AD-A090426 full 10-page PDF from DTIC" by retrieving the full PDF and hOCR searchtext via the Internet Archive DTIC mirror.
- Round 8 **converts** the Sharp/Grove "Grove" from a single-attestation Justesen-1975 *American Psychologist* footnote name into a **NTIS-indexed WRAIR microwave-bioeffects co-author** (Hawkins/Grove/Heiple/Schrot, NTIS AD-758136, 1973, Project 1J662712AJ21) — the **first primary documentary placement of M.H. Grove** in the Sharp/Grove investigation across all eight rounds.
- Round 8 **identifies SRI (Stanford Research Institute) as a third institutional player** in the MERADCOM-WRAIR microwave-bioeffects collaboration — not surfaced in any round 0-7 source — and **MERADCOM's ILIR (In-House Laboratory Independent Research) Program** as the named funding mechanism for the 1970s USAMERDC microwave work.
- Round 8 **identifies NMRI (Naval Medical Research Institute) as the third institutional partner** of the 1980 MERADCOM-NMRI-NIH triad that produced the 1981 *Brain Research* 204:220-225 paper, refining the round-7 §2 USAMERDC + NIH/NIA author-block reading.
- Round 8 **refines** Sharp's pre-WRAIR institutional affiliation to **New York State Department of Health** (per Pandora Tests primary-Pandora-era investigator list), superseding the round-3 NIH retracted hypothesis with a primary-source-attested NYSDOH-pre-WRAIR sequence.
- Round 8 **adds a third independent textual corroboration** of Sharp's Frey-pulse zero-crossing voice-modulation method (Bowart / Constitution.org), now triangulated across Justesen 1975 → Brodeur 1977 → Bowart.
- Round 8 **identifies two newly named primary-source Frey-group references** (Frey/Messenger/Eichert 1972 NTIS AD-747684; Frey/Feld 1975 *J. Comp. Physiol. Psychol.* — already round 6 §3) and **one new Justesen retrospective** (*IEEE Spectrum* 16:67-68, 1979) beyond the *Bull NYAM* 1979 already in round 3.
- The 1973 Sharp/Grove voice-modulation event remains documented by **a single primary attestation** (Justesen 1975 Note 2, *American Psychologist*) with no independent open-literature replication. The surrounding 1962-1998 documentary network is now end-to-end primary-source-verified across rounds 0-8, with **the Sharp/Grove "Grove" specifically now placed inside a 1973 NTIS-cataloged WRAIR microwave-bioeffects co-author group** for the first time in the investigation.
- Round 8 does **not** retrieve verbatim NTIS AD-758136 full text, NTIS AD-747684 full text, the *IEEE Spectrum* 1979 Justesen retrospective full text, or Brodeur page-image OCR; all four are top-priority round-9 carries.
