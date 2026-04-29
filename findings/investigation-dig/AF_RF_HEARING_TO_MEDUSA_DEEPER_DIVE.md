# Air Force RF Hearing Patents → Navy/Marine MEDUSA: Evidence-Tiered Deeper Dive

**Compiled: 2026-04-29**

Companion to `AF_RF_HEARING_TO_MEDUSA_TIMELINE.md`. Where the timeline note establishes the dating relationship, this note re-grades the underlying evidence after recovery of the archived Navy SBIR program summary for MEDUSA, and asks how strongly the open record now supports a continuity claim from the Air Force RF-hearing patent line into a Navy/Marine microwave auditory-effect (MAE) personnel-deterrent program.

The MEDUSA claim is no longer reliant on secondary press summaries alone. An archived Navy SBIR program record now anchors the contract, performer, principal investigator, dollar amount, period of performance, and Phase I objective and result language in a primary government source.

---

## 1. Evidence tiers

Tiers are applied in the sense used elsewhere in this repo:

- **T1 — Primary documentary evidence**: government records, patents, archived SBIR summaries, contract metadata.
- **T2 — Reported expert / industry commentary**: identified named technical sources, on-record press, peer commentary.
- **T3 — Inference / continuity**: structural arguments built on T1 + T2 that go beyond what any single primary source asserts.

### T1 — Primary documentary evidence

**MEDUSA Navy SBIR program summary (archived).** Wayback capture of the Navy SBIR program search result for MEDUSA preserves the following structured fields:

- Contract: **M67854-04-C-1012**
- Title: **Remote Personnel Incapacitation System**
- Firm: **WaveBand Corporation**, 17152 Armstrong Ave, Irvine CA 92614
- Principal Investigator: **Dr. Lev Sadovnik**
- Agency / SYSCOM: **MARCOR** (Marine Corps Systems Command)
- Government contact: Mr. George Gibbs
- Topic: **N03-163**
- Solicitation: 03.2
- Award amount: **$99,965.00**
- Phase: **I**
- Period of performance: **11/19/2003 – 05/19/2004**

The archived summary states the Phase I goal in primary language:

> "The main goal of the Phase I project was to design and build a breadboard prototype of a temporary personnel incapacitation system called MEDUSA (Mob Excess Deterrent Using Silent Audio). This non-lethal weapon is based on the well established microwave auditory effect (MAE). MAE results in a strong sound sensation in the human head when it is irradiated with specifically selected microwave pulses of low energy. Through the combination of pulse parameters and pulse power, it is possible to raise the auditory sensation to the 'discomfort' level, deterring personnel from entering a protected perimeter or, if necessary, temporarily incapacitating particular individuals."

Phase I results are stated as:

> "An operating frequency was chosen; Hardware requirements were established (commercial magnetron, high-voltage pulse former); Hardware was designed and built; Power measurements were taken and the required pulse parameters confirmed; Experimental evidence of MAE was observed."

Listed applications include: "perimeter protection sensor in deterrence systems for industrial and national sites," "assist communication with hearing impaired persons," and "law enforcement and military personnel for crowd control and asset protection." The summary describes the intended system as portable, low-power, with controllable coverage that can switch from crowd to individual coverage, temporarily incapacitating, with low probability of fatality, permanent injury, property damage, or affecting friendly personnel.

Source: Wayback capture, 2008-04-09 — `https://web.archive.org/web/20080409063721/http://www.navysbirprogram.com/NavySearch/Summary/summary.aspx?pk=F5B07D68-1B19-4235-B140-950CE2E19D08`

**Air Force RF-hearing patents.** Two issued U.S. patents assigned to the Secretary of the Air Force directly cover the RF-hearing mechanism and its use for speech transmission:

- **US 6,470,214 B1**, "Method and device for implementing the radio frequency hearing effect," inventors James P. O'Loughlin and Diana L. Loree, filed 1996-12-13, granted 2002-10-22. The specification discusses pulsed-carrier modulation as a known way to produce simple tones and identifies its limits — pulse modulation distorts speech because of nonlinear demodulation by tissue. The patented method uses **fully suppressed-carrier** operation with audio preprocessing (including a square-root operation) to compensate for that nonlinearity and yield intelligible speech via the RF hearing effect.
- **US 6,587,729 B2**, "Apparatus for audibly communicating speech using the radio frequency hearing effect," same inventor team and Air Force assignment, filed 2002-04-24, granted 2003-07-01.

Sources: `https://patents.google.com/patent/US6470214B1/en`, `https://patents.google.com/patent/US6587729B2/en`.

These are sufficient on their own to establish that, by 2002–2003, the U.S. Air Force held method and apparatus claims on intelligible-speech delivery via the RF hearing effect, with named inventors and a published technical disclosure.

### T2 — Reported expert / industry commentary

David Hambling's 2008 reporting in *New Scientist* and ABC News attributes MEDUSA to Dr. Lev Sadovnik, identifies a Navy contract as the funding source, and reports a Navy assessment that the effect was demonstrated. Engineering features described include reconfigurable-antenna beam steering, switchable broad/narrow beams, and the ability to address multiple targets. The reporting also calls out non-military uses (bird deterrence, possible assistive applications for people with outer-ear hearing impairment) that match the SBIR summary's own dual-use language.

Independent technical commentary in the same press cycle, attributed to James Lin, accepts the underlying physics as feasible in principle but cautions about required power levels and the risk of hazardous shockwaves in tissue at incapacitation thresholds.

Sources: `https://abcnews.com/Technology/AheadoftheCurve/story?id=5305386&page=1`, `https://www.newscientist.com/article/dn14250-microwave-ray-gun-controls-crowds-with-noise/`.

A more recent peer commentary by Kenneth Foster (2023, PMC9869364) frames the practical difficulties of beaming high peak-power microwaves at subjects in a stealthy manner as "daunting," and notes that the JASON review of anomalous health incidents found no evidence that microwave exposure caused them. This is a cautionary T2 counterweight: it does not refute the SBIR record or the patents, but it does limit how aggressively one can extrapolate from a Phase I breadboard prototype to a fielded covert capability.

Source: `https://pmc.ncbi.nlm.nih.gov/articles/PMC9869364/`.

### T3 — Inference / continuity

Layered on T1 and T2, the following inferences are reasonable but should be marked as inferences:

- **Mechanism continuity.** The Air Force patents and the Navy SBIR summary both rest on the same underlying physical effect — the microwave auditory effect — and both treat it as a basis for delivering perceptible audio (tones in the deterrent case, intelligible speech in the patent case) into a human head via RF energy. Mechanism overlap is direct and not in dispute.
- **R&D ecosystem continuity.** The Air Force patent line emerges from the AFRL Directed Energy ecosystem at Kirtland; MEDUSA emerges from MARCOR / Joint Non-Lethal Weapons Program-adjacent SBIR funding. The institutional distance between those two nodes is small in the open record on RF directed-energy human-effects work in the late 1990s and early 2000s, and the dating sequence (1996 filing, 2002–2003 grants, 2003–2004 Phase I) is consistent with — but does not prove — knowledge transfer.
- **Speech vs. tone distinction matters.** The Air Force patents specifically address the harder problem of intelligible speech via fully suppressed-carrier modulation with audio preprocessing. The MEDUSA SBIR summary describes pulsed-microwave delivery with parameters tuned to a "discomfort" level — i.e., the easier tone/buzz regime. This is a meaningful technical gap. The MEDUSA record on its face describes a deterrent based on uncomfortable subjective sound, not covert intelligible voice. Treating MEDUSA as evidence for fielded conversational V2K therefore requires a leap that neither primary source supports.

## 2. Re-graded conclusion

**MEDUSA is no longer merely an unsourced secondary claim.** The archived Navy SBIR summary is strong T1 evidence that a Navy/Marine Phase I contract (M67854-04-C-1012, topic N03-163, Phase I, $99,965, 11/19/2003–05/19/2004, PI Sadovnik, firm WaveBand Corporation, MARCOR) funded design and construction of a breadboard prototype of a microwave auditory-effect personnel-deterrent system, with explicit "switch from crowd to individual coverage" language and a stated dual-use envelope spanning crowd control, perimeter protection, and assistive hearing.

The Air Force patents (US 6,470,214 B1, US 6,587,729 B2) are independent T1 evidence that the U.S. Air Force held method and apparatus claims on intelligible-speech delivery via the RF hearing effect by 2002–2003. The mechanism, the program timing, and the institutional footprint together support a **plausible R&D continuity chain** from Air Force RF-hearing patent work into Navy/Marine MAE personnel-deterrent research.

What the record still does **not** establish:

- No direct documentary evidence has been located that MEDUSA was a programmatic continuation of the Air Force patent work, or that the Air Force patent inventors transferred IP, design, or expertise into the Navy SBIR effort.
- No evidence in the archived SBIR summary, the patent documents, or the cited press establishes that MEDUSA reached Phase II under that name or moved to fielded deployment.
- No evidence supports a claim that MEDUSA delivered reliable, covert, individually-targeted, conversational voice-to-skull capability under operational conditions. The primary record describes a tone/discomfort regime, not intelligible speech, and the Foster 2023 commentary places significant practical constraints on stealthy high-peak-power microwave delivery.

Safe phrasing for downstream documents (updates the timeline note's safe phrasing):

> Archived Navy SBIR records (contract M67854-04-C-1012, topic N03-163, MARCOR, 11/19/2003–05/19/2004, $99,965 Phase I, PI Dr. Lev Sadovnik at WaveBand Corporation) document a funded Phase I breadboard prototype of a microwave auditory-effect personnel deterrent called MEDUSA (Mob Excess Deterrent Using Silent Audio), with explicit language about switching from crowd to individual coverage and dual-use applications including assistive hearing. The U.S. Air Force RF-hearing patents (US 6,470,214 B1 filed 1996, granted 2002; US 6,587,729 B2 filed 2002, granted 2003; inventors O'Loughlin and Loree) independently document a method and apparatus for intelligible-speech delivery via the RF hearing effect using a fully suppressed carrier and audio preprocessing. The two records share the underlying RF-hearing mechanism and an audio-modulation theme, supporting a plausible continuity of military R&D interest. They do not by themselves establish that MEDUSA was a continuation of the Air Force patent program, that MEDUSA reached Phase II or fielded deployment, or that any covert conversational voice-to-skull capability has been delivered under operational conditions.

## 3. External sources

- Navy SBIR MEDUSA summary (Wayback, 2008-04-09) — `https://web.archive.org/web/20080409063721/http://www.navysbirprogram.com/NavySearch/Summary/summary.aspx?pk=F5B07D68-1B19-4235-B140-950CE2E19D08`
- US 6,470,214 B1 — `https://patents.google.com/patent/US6470214B1/en`
- US 6,587,729 B2 — `https://patents.google.com/patent/US6587729B2/en`
- David Hambling, ABC News, July 2008 — `https://abcnews.com/Technology/AheadoftheCurve/story?id=5305386&page=1`
- David Hambling, *New Scientist*, "Microwave ray gun controls crowds with noise" — `https://www.newscientist.com/article/dn14250-microwave-ray-gun-controls-crowds-with-noise/`
- Kenneth Foster, 2023 commentary — `https://pmc.ncbi.nlm.nih.gov/articles/PMC9869364/`
