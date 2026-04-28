# ClintMclean74 snapshot summary (anchors)

First capture run UTC (overall): `investigation-dig/external-sources/clintmclean74/manifests/snapshot_datetime_utc.txt`.

Per-repository headers inside each `manifests/*_HEAD.sha256.txt` record the capture clock used for that file list.

| Repo | HEAD commit | Commit date (authoritative) | `git archive HEAD` SHA-256 |
|------|-------------|-----------------------------|-----------------------------|
| [Hodgkin-HuxleyCode](https://github.com/ClintMclean74/Hodgkin-HuxleyCode) | `93ef3621e4887f034c05e3fb2760438ddb0a1845` | 2024-10-16T19:19:20+02:00 | `b661897e8e7048d8d62b0bbf2718905b92ccf207bb70c4f2564874f2aaa83823` |
| [SDRReradiationSpectrumAnalyzer](https://github.com/ClintMclean74/SDRReradiationSpectrumAnalyzer) | `dd97608e026d2d17c83bf176639430eeaf5ba903` | 2023-10-29T19:51:59+02:00 | `56ea106e5bb4ad992283b704f369d64c204f492bc0c1d66d737c5bd97b74d079` |
| [SDRSpectrumAnalyzer](https://github.com/ClintMclean74/SDRSpectrumAnalyzer) | `75a1f946c191199d5717ff79b64ed6e62ff56f56` | 2019-05-30T14:28:53+02:00 | `ba11bff97a6bda585a2fda382e540141f30954f7debcaf2482ffb920032ca935` |

Entry-point files (canonical text the dossier cites most often):

| Repo | Path | README SHA-256 (from manifest) |
|------|------|-------------------------------|
| Hodgkin-HuxleyCode | `README.md` | `5013d1ffb253a4862f8ec5800334a68915be88eda6e2b0139e2e549bdb7b8499` |
| SDRReradiationSpectrumAnalyzer | `README.md` | `cec05fb0dacf7b82035f0be51eaf5e3eea6b59853540ff48f897611bd3c64282` |
| SDRSpectrumAnalyzer | `README` | `20686f1bc68874559abc355501947395c346710c95c5d247fc22921085a96d22` |

Notes:

1. **`git archive` digest** is often the easiest third-party verifier: unpack and confirm the tarball hash matches without needing the `.git/` directory at all.
2. **Shallow clones** were used strictly to compute manifests; full history forks are unnecessary for hash anchoring of `HEAD`.
