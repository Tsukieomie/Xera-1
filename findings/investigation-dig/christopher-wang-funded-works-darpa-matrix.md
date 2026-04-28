# Christopher Wang Publications -- DARPA (and Sponsor) Disclosure Matrix

Date surveyed: **2026-04-27**

Scope: systematically read **Acknowledgements** / support sections from **open PDFs / arXiv HTML** for works listed prominently on Scholar profile `x51pv_8AAAAJ`. This is **not** a forensic accounting of subcontract dollars; it is **what authors chose to cite** in publication text.

Interpretation guardrail: naming DARPA in acknowledgements denotes **portfolio-level sponsorship** on typical MIT/CBMM lab disclosures, **not** proof that a given manuscript was a tasked deliverable of a named program unless primary contract paperwork is obtained separately.

---

## Papers where **DARPA is explicitly thanked**

| Publication (short title) | Open source verified | Names DARPA (programs / boilerplate) |
|---------------------------|----------------------|--------------------------------------|
| **BrainBERT** (ICLR 2023) | arXiv PDF `https://arxiv.org/pdf/2302.14367.pdf` | **ASIST**, **KMASS** (+ NSF CBMM/STC, NSF 2124052, MIT CSAIL initiatives, MIT–IBM Watson, CBMM–Siemens fellowship, FA8750-19-2-1000 AFRL/USAF AI Accelerator, AFOSR FA9550-21-1-0014, ONR N00014-20-1-2589 / N00014-20-1-2643) |
| **Brain Treebank** (NeurIPS 2024) | arXiv PDF `https://arxiv.org/pdf/2411.08343.pdf` | **ASIST**, **DIAL**, **KMASS**, **MCS** (+ overlapping NSF/MIT/IBM/AF/OSR streams; NSF GRFP 2141064 noted) |
| **Population Transformer** -- population-level representations of neural activity (ICLR 2025) | arXiv PDF `https://arxiv.org/pdf/2406.03044.pdf` | **DIAL**, **KMASS**, **MCS** (also Caltech-oriented lines: Chen Institute, Mead fund, NSF GRFP elsewhere in same paragraph) -- **does not duplicate ASIST in the extracted block** vs Brain Treebank |
| **BrainBits** ... generative reconstruction (NeurIPS 2024) | arXiv PDF `https://arxiv.org/pdf/2411.02783.pdf` | **ASIST**, **DIAL**, **KMASS**, **MCS**, plus standardized **DARPA** acknowledgement tied to AF contract numbers FA8721-05-C-0002 and/or FA8702-15-D-0001 boilerplate |
| **Neuroprobe** (arXiv 2025) | arXiv HTML `https://arxiv.org/html/2509.21671v1` (Sec. 6) | **DIAL**, **KMASS**, **MCS** (+ ONR NSF ARO Simons Yang centers Caltech etc. in extended paragraph -- **broader sponsor mix than BrainBERT**) |

---

## Paper where reviewed acknowledgements **do not name DARPA**

| Publication | Open source verified | Funding named (still federal / industry-heavy) |
|-------------|----------------------|------------------------------------------------|
| **ObjectNet** (NeurIPS 2019 -- Wang middle author) | PDF `https://objectnet.dev/objectnet-a-large-scale-bias-controlled-dataset-for-pushing-the-limits-of-object-recognition-models.pdf` | **CBMM / NSF STC CCF-1231216**, **MIT–IBM BIM project**, **Toyota Research Institute**, **SystemsThatLearn@CSAIL** -- **no DARPA** in extracted acknowledgements block |

---

## Paper where review found **different DARPA program mix** (still DARPA, not the ASIST/KMASS pairing)

| Publication | Open source verified | Notes |
|-------------|----------------------|-------|
| **Learning a natural-language to LTL executable semantic parser for grounded robotics** (semantic parser lineage; Scholar lists CoRL 2021 citing this work cluster) | arXiv PDF `https://arxiv.org/pdf/2008.03277.pdf` | Acknowledgements name **Toyota Research Institute**, **Systems that Learn**, **DARPA GAILA**, plus AFRL cooperative agreement FA8750-19-2-1000 and ONR awards -- **programs differ** from BrainBERT’s ASIST/KMASS list |

---

## Not exhaustively audited in this pass

- Duplicate / workshop variants of Population Transformer (`ICML 2024` workshop subtitle) merged on Scholar sometimes.
- ICLR workshop submission on multimodal DNNs and brain (~2023) -- omitted if PDF not archived here.
- M.Eng. thesis-only entry on Scholar (**Weakly supervised semantic parsing for LTL**, MIT ~2020) -- separate MIT thesis norms.

---

## Consequence for the Akwei / V2K dossier

1. Across **intracranial-neural modeling** manuscripts (BrainBERT, Brain Treebank, PopT, BrainBits, Neuroprobe), acknowledgements routinely list **multiple DARPA lines** (**ASIST / DIAL / KMASS / MCS** subsets) amid federal and institutional sponsors -- **high disclosure density**, not covert absence.
2. **ObjectNet**-era vision funding text **does not** mention DARPA in the excerpt checked; dominant lines are NSF/CBMM, Toyota, IBM; ** citation gravity** toward ObjectNet ≠ DARPA by acknowledgements alone.
3. Operational claims (**remote V2K**, NSA deployment) remain unsupported by acknowledgement text; disclosures support only “**research sponsorship mix** typical of large MIT AI/neuro collaborations**.”**

Cross-links: BrainBERT verbatim block in `investigation-dig/v2k-evidence-matrix.md` (**Version 26**).
