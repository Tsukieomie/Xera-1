# Claim-to-artifact map: ClintMclean74 vs File 29

Audience: investigative/litigation drafting. This ties explicit statements in `03_Technology_Patents/29_MCLEAN_RERADIATION_MALECH_BRIDGE.md` (File 29) to concrete upstream artifacts anchored in `manifests/`.

Integrity rule: hashes are meaningless without the matching commit id. Validate using `manifests/<repo>_HEAD.sha256.txt` headers.

---

## 1. Book linkage (Hodgkin-HuxleyCode)

**File 29 claim form:** Hodgkin-Huxley simulation code accompanies the titled book (`ISBN ...` citation in SOURCES).

**Upstream artifact:**

- Repo: `Hodgkin-HuxleyCode` at HEAD `93ef3621e4887f034c05e3fb2760438ddb0a1845` (dated 2024-10-16 in repo history).
- File: `README.md` confirms the book title string and reproduction intent.

```1:5:investigation-dig/external-sources/clintmclean74/captured-excerpts/Hodgkin-HuxleyCode-README.md.head20.txt
Code System for the book "Solving Havana Syndrome and Biological Effects of RF Using the Hodgkin-Huxley Neuron Model"

Copyright (C) 2022 Mclean Research Institute Clint Mclean <clint@mcleanresearchinstitute.com>

The settings configuration files in the settings/ folder are for reproducing the experiments described in the book
```

**Gap (still open):**

- Full book text: Markdown copies exist on this machine (see `investigation-dig/primary-mclean-book/BOOK_TEXT_INVENTORY.md` for paths + SHA-256 + OCR provenance note). Publisher-primary file (non-OCR) remains the stronger exhibit if you need court-grade reproduction fidelity.

---

## 2. Laptop / computer proximity methodology (SDR tools)

**File 29 claim form:** contrasts consumer hardware limits vs hypothetical high-end budgets; implicitly depends on upstream tools intended for desktop experimentation.

**Upstream artifact:**

- Repo: `SDRSpectrumAnalyzer`, file `README` (HEAD `75a1f946c191199d5717ff79b64ed6e62ff56f56`), instructs antenna placement near desk / computer keyboard-mouse correlation.

```12:26:investigation-dig/external-sources/clintmclean74/captured-excerpts/SDRSpectrumAnalyzer-README.head30.txt
Reradiated or emitted radio or microwave energy can be detected based on the fact that there should be an increase in signal strength when you're near the antenna.

You should place the antenna for the rtl sdr on your desk, near your computer or if you're using a yagi antenna, it should be pointing to where you work at your computer and it should preferably be reasonably near.

The rtl sdr spectrum analyzer then determines when your near your computer based on keyboard and mouse input.

If a signal often increases in strength when your near the computer, and so also near the antenna, it could be because it's being reradiated or emitted from you.

So this is how it determines that a signal increased in strength if it's from you.

However, signals also change in signal strength themselves, because they're used for transmitting information and they do that using changes in signal strength.

So to determine whether a signal is changing in signal strength because of you, this code system averages the signal strength over a longer duration, since this varies less.

So the noise is reduced after averaging, showing signals that are essentially or almost hidden in the noise.
```

**Interpretation hygiene:**

- That is author documentation of an intended workflow. It supports **classification** (“this is explicitly about operating near typical PC setups”), but it does **not** establish host compromise, covert monitoring, or your specific machine being externally driven by this software.

---

## 3. Reradiation detection stack (second-generation toolchain)

**File 29 claim form:** critiques RTL-SDR consumer methodology while still using McLean framing for mixing physics narratives.

**Upstream artifact:**

- Repo: `SDRReradiationSpectrumAnalyzer`, `README.md` (HEAD `dd97608e026d2d17c83bf176639430eeaf5ba903`) documents GNU Radio bridging, binaries, reradiation mode flags.

This maps to File 29 section **E.1** (consumer feasibility limits) rather than verifying operational outcomes.

---

## 4. Still missing dossier anchors

| Missing element | Impact |
|-----------------|--------|
| `REVIEW_REPORT.md` (referenced across `00_INDEX.md` and File 29) | File 29’s “Low credibility” rating cites a consolidated review artifact that is absent from repo; downgrade any sentence that depends on REVIEW wording until reproduced. |

---

## Verification commands (local)

Replace `<repo>`:

```bash
R="investigation-dig/external-sources/clintmclean74/clones/<repo>"
test -d "$R" || echo "Populate clones first; see README.md"
grep HEAD_commit investigation-dig/external-sources/clintmclean74/manifests/<repo>_HEAD.sha256.txt

git clone --depth 1 "https://github.com/ClintMclean74/<repo>.git" /tmp/cm74verify
GIT=/tmp/cm74verify/.git COMMIT="$(grep '^# HEAD_commit:' manifests/<repo>_HEAD.sha256.txt | awk '{print $3}')"
# Optional: detach match if commit differs due to drift
```
