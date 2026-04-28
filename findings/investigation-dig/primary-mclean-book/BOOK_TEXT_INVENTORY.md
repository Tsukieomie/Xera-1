# McLean: *Solving Havana Syndrome…* -- local text inventory

Date cataloged: 2026-04-28  
Purpose: chain-of-custody for on-desktop Markdown copies of the ebook, without importing full copyrighted text into this repository.

---

## 1) Located copies (byte-identical)

| Path | Lines | SHA-256 (file) |
|------|------:|----------------|
| `/Users/kenny/Desktop/Testing/McLean-Books/01-Solving-Havana-Syndrome/McLean_Solving_Havana_Syndrome.md` | 867 | `cccfe31a8485d7df778e241b4d4c6744371182d2aa02611f312812c3f8b61045` |
| `/Users/kenny/Desktop/Investigating-RF-Tracking-Defenses/01-Source-Materials/McLean-Books/01-Solving-Havana-Syndrome/McLean_Solving_Havana_Syndrome.md` | 867 | `cccfe31a8485d7df778e241b4d4c6744371182d2aa02611f312812c3f8b61045` |

Cross-repo note: `Investigating-RF-Tracking-Defenses/06-Historical-Subjects/CLINT_MCLEAN_RERADIATION_DETECTION_AND_HH_MODEL.md` summarizes McLean’s reradiation tooling + HH framing (narrative briefing, not primary text).

Companion volume (same `McLean-Books/` tree on Desktop):

| `/Users/kenny/Desktop/Testing/McLean-Books/02-Methods-for-Detecting/McLean_Methods_for_Detecting.md` | 420 | `710dba595cab5f0774e8a7093f7ac41a7405be0370764aa5738ae211e97935a3` |

---

## 2) Provenance string inside the Markdown (downstream of your copy)

The Markdown file ends with:

- `Document extracted from Kindle (ASIN: B0BCNG8H89) using Claude Vision OCR`
- `January 2026`

**Investigation implication:** treat this as **non-publisher text** for quotes: it may drift from the commercial EPUB/PDF (OCR/vision errors). For litigation-grade wording, prefer a direct export or publisher file + hash.

**Bibliographic anchors** (from the same file header):

- ISBN ebook: `978-0-6397-2006-7`
- ASIN: `B0BCNG8H89`

---

## 3) Structure (for navigation)

Major sections: Copyright; Table of Contents; List of Figures; Preface; `1` Introduction; `2` Background; `3` Methods (temperature-sensitive neuron + network + artificial-life task); `4` Results (membrane voltage shifts, spike effects, network amplification); `5` Discussion (includes “salt water antennas” / seawater comms quotes); `6` Conclusion; Acknowledgments; Supplementary Materials; Bibliography; Quick Links.

---

## 4) Author’s stated thesis (compressed, from Preface + Conclusion)

The book advances a **single causal stack**:

1. Sub-thermal RF can produce **small, pulsed temperature excursions** (linked to thermoelastic / microwave-hearing-scale physics in the narrative).
2. Those perturbations shift **Hodgkin–Huxley-related** equilibria so membrane voltages and spike timing change.
3. **Feedforward neural networks** amplify small per-neuron differences across layers; the text argues this scales to large-scale disruption in biology.
4. Closing move: frame this as explaining **Havana Syndrome symptom lists** and broader **sub-thermal RF “mystery.”**

The Conclusion also explicitly lists **safety standards inadequate** and **weaponization potential** as implications.

---

## 5) Relationship to *this* investigation (evidence hygiene)

| Thread in your repo | Alignment | Tension / caveat |
|--------------------|-----------|------------------|
| `03_Technology_Patents/29_MCLEAN_RERADIATION_MALECH_BRIDGE.md` (Malech “read” bridge) | Same HH + temperature-sensitivity **story class** | Your File 29 already flags **inflated HH parameters** and weak **consumer SDR** detection; do not merge those critiques with the book’s strongest marketing lines without re-deriving parameters. |
| `investigation-dig/havana-phase3-claim-audit.md` posture | Both deal with **directed-energy / RF plausibility** | The book is **not** an IC assessment, clinical cohort study, or peer-reviewed replication; it is an author model + simulation narrative. |
| `investigation-dig/v2k-evidence-matrix.md` tiers | Useful as **Tier: author mechanism + code** | Separate from **Tier: primary medical diagnosis of AHI** or **Tier: attributed attack proof**. |

---

## 6) Suggested next ingestion step (optional)

If you want the book **inside** git with defensible provenance:

1. Obtain a publisher-sourced file (Kindle/KDP PDF if license allows, or print scan you control).  
2. `shasum -a 256` the file.  
3. Store under `investigation-dig/primary-mclean-book/raw/` **only if** license and risk posture allow; otherwise keep out of git and reference path + hash here.

This inventory file intentionally holds **metadata and structure**, not chapter body text.
