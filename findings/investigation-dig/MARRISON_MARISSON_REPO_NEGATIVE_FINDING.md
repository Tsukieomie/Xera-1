# Janet Marrison / Chris Marisson — repository negative finding

**Date:** 2026-05-03  
**Request:** Locate “Janet Marrison” / “Chris Marisson” (and spelling variants) anywhere in `/workspace`.

## Search methodology (exhaustive for this workspace)

Executed **case-insensitive** `grep`/`rg` over the **entire repo** (`/workspace`, no glob restriction for primary surname checks):

| Pattern / scope | Result |
| --- | --- |
| `Marrison`, `Marisson`, `Marrisson`, `Maryson`, `Morisen`, `Marrion`, `Marison` | **0 hits** |
| `Marris`, `Mariss` substrings | **0 hits** |
| `Morri` + `son`/`sson` typo families beyond standard `Morri[sc]on` | Covered via Morrison scan |
| **`Janet`** in `*.md`, `*.txt`, `*.pdf` | **0 hits** (`pdf` corpus may be limited if binaries not grepped — no PDF in tree matched Janet in filename-only pass) |
| **`janet`** (any file) | **1** substantive hit cluster (below) |

**Related names in Akwei line (for comparison):** `findings/03_Technology_Patents/10_NEXUS_DOSSIER_ANALYSIS.md` discusses **Kinnecome** group and Robert Kinnecome / NLRB framing — **no** Janet/Chris Morrison/Marrison/Marisson string appears there.

**Git history (`git log -p`):** `-S 'Marrison' -S 'Marisson' -S 'Janet Morrison'` over tracked text — **no commits** introduced those tokens.

## Sole “Janet …” occurrence (false positive)

`findings/investigation-dig/v2k-lin-book-trail.json` embeds scraped HTML mentioning **Janet Li** (physician finder page juxtaposed with a **different** “James C. Lin” urology listing). **Unrelated** to Marrison/Marisson, Akwei defendants, or V2K dossier indexing.

## Morrison spelling (orthogonal)

WRAIR FY74 OCR-derived files list **MAJ Alan S. Morrison, MC**, **MAJ R. E. Morrison**, plus textbook **Morrison, D. (Ed.),** *Multivariate Statistical Methods*. **None** are “Janet Marrison,” “Chris Marisson,” or “Janet/Chris Morrison” as queried.

## Bottom line

**No person file, complaint excerpt, bibliography, OCR layer, or analysis markdown in this repository names “Janet Marrison” or “Chris Marisson”** under any plausible spelling sampled above.

**Next ingest if externally sourced:** add primary URL or court PDF excerpt citing those names → then re-run targeted index + cross-link to `10_NEXUS_DOSSIER_ANALYSIS.md` or employment-gap dossier.
