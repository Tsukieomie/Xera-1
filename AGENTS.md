# AGENTS.md

## Cursor Cloud specific instructions

This is a **documentation-only research repository** (Akwei v. NSA investigation). It contains no application code, no build system, no package manager, and no runnable services.

### Repository contents

- 140 Markdown files (`.md`) -- investigation findings, analysis, evidence matrices, judicial brief drafts
- 93 JSON files (`.json`) -- web search results, patent lookups, SBIR data, USAspending queries
- 34 Text files (`.txt`) -- OCR'd DTIC documents, transcripts, SHA256 manifests
- 11 PDF files -- judicial brief source documents (in `docs/judicial-brief/source/`)
- 6 HTML files -- archived web pages (Wayback Machine captures, DTIC search results)

### Development environment

- **Git** is the only required tool. No package managers, compilers, or runtimes are needed.
- There are no tests, no linting, no build steps, and no services to start.
- The update script is intentionally a no-op (`true`) since there are no dependencies to install.

### Workflow

- Editing workflow consists of creating/modifying Markdown files and committing via Git.
- See `README.md` for the directory structure and investigation reading order.
- `FINDINGS.md` contains the 33-finding summary; `SOURCES.md` is the bibliography.
