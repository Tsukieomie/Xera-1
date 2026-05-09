# V2K patent-to-experiment gap (Brunkan + Air Force RF-hearing line)

**Purpose:** Close a loop called out in `V2K_EVIDENCE_MATRIX.md` (“patent-to-experiment audit”) by extracting **tier-relevant inventor language** directly from patents and aligning it with inventor-side disclosures already on file for the federally assigned O’Loughlin/Loree applications.

**Rule:** Tier **T3** (patents / program intent) does not collapse into **T2** (protocol-grade semantic speech) without blinded methods, replication, and quantitative intelligibility scoring in the **open primary record**.

---

## 1. Wayne B. Brunkan — US 4,877,027 A (“Hearing system”), 1989

**Source:** Google Patents full text ([US4877027A](https://patents.google.com/patent/US4877027A/en)).

### 1.1 Claimed outcome vs. inventor’s experimental disclaimer

The specification opens with affirmative capability language—for example the “Brief Summary” states that Brunkan has “discovered that a pulsed signal on a radio frequency carrier of about 1,000 megahertz… is effective in creating intelligible signals inside the head of a person” when energy is projected through the air—and the operating section states that when parameters are adjusted, the subject “perceives intelligible audio.”

Immediately under **THEORY OF OPERATION**, however, Brunkan writes (verbatim emphasis added in prose here, not in original):

> **I have not been able to experiment to determine how my microwave system works**, but from my interpretation of prior work done in this field I believe that the process is as follows. […] However, **this theory of operation is only my guess and may prove to be in error in the future.**

**Tier read:** This is explicit on-record separation between (a) **device claims and phenomenological intent** in the operational description and (b) **mechanism theory** that the inventor states he could not verify experimentally. It does **not** negate the patent’s existence as T3 signal; it **does** block treating the patent’s “intelligible” operational language as stand-alone T2 validation.

### 1.2 Prior-art bridge to Lin (1978), not to a Brunkan trial

Brunkan cites Lin’s monograph *Microwave Auditory Effects and Applications* for “The transmission of intelligible speech by audio modulated Microwave.” That routes the speech-lineage citation through **Lin’s book** (which itself points readers to Justesen 1975 for the Sharp/Grove story), not through an independent Brunkan laboratory report in the patent text.

**Net:** Brunkan is best classified as **T3 strong / T2 claim-space only**, matching the matrix row update in `/V2K_EVIDENCE_MATRIX.md`.

---

## 2. James P. O’Loughlin & Diana L. Loree — US 6,470,214 B1 / US 6,587,729 B2 (Air Force assignee)

**Do not duplicate** the full institutional analysis here. The authoritative repo treatment is:

- `findings/03_Technology_Patents/36_OLOUGHLIN_LOREE_AIR_FORCE_RF_HEARING.md` (timeline, secrecy-order/SBIR adjacency, source-class discipline)
- `findings/investigation-dig/SPEECH_EVIDENCE_DEEPER_DIVE_MINDJUSTICE_PACKET.md` (1994 disclosure, 1995 draft, 2001 prosecution email)

**One-line ledger for this file:**

| Artifact | Experiment / evidence posture in open record reviewed here |
|----------|------------------------------------------------------------|
| 1994 invention disclosure (mirrors cited in file 36) | Documents **failure of simple AM** path for naïve-listener intelligible speech; proposes new modulation experiments. |
| 1995 draft patent-style write-up | Claims suppressed-carrier + preprocessing solution; **no** protocol-grade data in the disclosed packet. |
| 2001 O’Loughlin email (patent prosecution) | **Inventor assertion** of experimental success after “teachings of the invention”—not peer-reviewed, not naïve-listener scored. |
| Granted patents + JASA 2003 abstract | Federal T3 engineering claim-space; abstract mirrors spec—**does not substitute** for T2 closure (see file 36 Part 6). |

---

## 3. Consolidated conclusion (tier discipline)

| Source | Highest honest tier without overread |
|--------|-------------------------------------|
| Brunkan US4877027 | **T3**; inventor disclaims experimental basis for mechanism theory; operational “intelligible” claims remain **patent-domain**, not replicated trial evidence in this corpus. |
| O’Loughlin/Loree US6470214 / US6587729 | **T3** + narrow **policy/program** implications per file 36; **T2 open** absent independent published protocols. |

**Residual high-value targets** (unchanged from matrix): Sharp/Grove primary technical report; classified or FOIA-held SBIR final reports; WaveBand MEDUSA Phase I closeout if ever released in releasable form.

---

## Cross-links

- Root matrix: `/V2K_EVIDENCE_MATRIX.md`
- Deep matrix (Akwei-focused, long form): `v2k-evidence-matrix.md`
- Oscar 1980 (command-level rationale ≠ speech trial): `AD_A090426_OSCAR_1980_PRIMARY_REVIEW.md`
- Judicial-brief phrasing hygiene (Brunkan ≠ “replication”): `docs/judicial-brief/v5/V5_REDLINE_PATCHLIST.md`
