# Tracecraft

Investigation desk for organizing evidence, timelines, hypotheses, and a deterministic research plan. Local prototype, no live web search, no LLM calls — pure rules over the case state.

**Deployed preview:** https://www.perplexity.ai/computer/a/tracecraft-RcWjC54xSaSJSRimEr6lhQ

## Run

```bash
cd tracecraft
npm install          # only first time
npm run dev          # http://localhost:5000
```

The dev server runs Express + Vite on the same port. SQLite (`data.db`) is created and seeded on first run with one sample case ("The Harborlight Disappearance").

## Build

```bash
npm run build        # compiles client to dist/public and server to dist/index.cjs
```

## Deploy (parent agent)

After `npm run build`:

1. Start production: `start_server(command="NODE_ENV=production node dist/index.cjs", project_path="/home/user/workspace/tracecraft", port=5000)`
2. Deploy: `deploy_website(project_path="/home/user/workspace/tracecraft/dist/public", site_name="Tracecraft", entry_point="index.html")`

The template's `__PORT_5000__` token is replaced at deploy time so API calls proxy through to the running server.

## Architecture

- **Schema** (`shared/schema.ts`): `cases`, `evidence`, `events`, `hypotheses`. JSON-encoded text columns for arrays (tags, ids, next_tests).
- **Storage** (`server/storage.ts`): SQLite via better-sqlite3 + Drizzle, synchronous queries with `.get()`/`.all()`. Bootstraps tables and seeds one rich sample case on first run.
- **Routes** (`server/routes.ts`): REST under `/api/cases`, `/api/cases/:id/{evidence,events,hypotheses}`. Zod validation on all writes.
- **Frontend**: hash routing via `wouter` + `useHashLocation`. Pages in `client/src/pages/`, layout/sidebar in `client/src/components/AppLayout.tsx`, theme provider toggles `.dark` class on `<html>` (no localStorage). React Query manages all server state.

## Key files

```
client/src/index.css                    -- design tokens (paper warm + ink/slate)
client/src/components/Logo.tsx          -- inline SVG mark
client/src/components/AppLayout.tsx     -- sidebar + mobile drawer + theme toggle
client/src/components/ThemeProvider.tsx -- in-memory theme state
client/src/lib/types.ts                 -- evidence/epistemic constants and helpers
client/src/lib/caseHooks.ts             -- React Query hooks
client/src/pages/Overview.tsx           -- case brief, posture, KPIs, copy/export
client/src/pages/EvidenceBoard.tsx      -- matrix, weak-claim/contradiction flags, CRUD
client/src/pages/Timeline.tsx           -- merged events + dated evidence, certainty badges
client/src/pages/Hypotheses.tsx         -- competing theories, support/contradict, tests
client/src/pages/ResearchPlan.tsx       -- deterministic plan generator
shared/schema.ts                        -- SQLite schema + Zod insert schemas
server/storage.ts                       -- IStorage + seed data
server/routes.ts                        -- REST endpoints
```

## Design decisions

- **Investigation desk**, not detective cliché. Warm paper background (HSL `39 25% 95%`), ink text (HSL `30 18% 14%`), single amber accent (HSL `32 88% 44%`) plus restrained teal-soft for "fact" indicators. Subtle paper-grain background, ruled-line cards via `paper` utility class.
- **Typography**: Source Serif 4 for headings (editorial, evidentiary tone) + Instrument Sans for UI/body + JetBrains Mono for `stamp` micro-labels. Loaded once via Google Fonts CDN.
- **Source discipline first**: every evidence item carries an explicit `epistemic` register (Fact / Claim / Assumption / Unknown) plus reliability and relevance scores. Tracecraft prompts users to corroborate uncited claims, flags single-source items, and surfaces contradictions.
- **Deterministic plan**: `buildPlan()` in `ResearchPlan.tsx` is rule-based. It looks at uncited claims, unknowns, hypothesis next-tests, evidence that both supports and contradicts hypotheses, undated evidence, large timeline gaps, and high-confidence hypotheses lacking strong support. No LLM, no fetches.
- **Persistence**: SQLite via Drizzle. No `localStorage`/`sessionStorage`/`indexedDB`/cookies anywhere (sandbox-safe).
- **Hash routing**: `<Router hook={useHashLocation}>` wrapping `<Switch>` so deployed iframes work.
- **Dark mode** seeded from `prefers-color-scheme`, toggled via `.dark` on `<html>`, all theme state in React (no storage).

## Limitations

- Single active case — the UI uses the first case as "active". No case-switching UI or new-case dialog (could be added easily; the storage layer supports it).
- No editing of evidence/hypotheses after creation — only delete + re-add.
- Export buttons download Markdown and copy to clipboard. No PDF.
- `data.db` is not committed (in `.gitignore`); a fresh one is seeded on first run.
- `deploy_website` will serve the static client; for full backend behavior the parent agent must `start_server` first as noted above.

## Test IDs (selection)

- Sidebar nav: `nav-overview`, `nav-evidence`, `nav-timeline`, `nav-hypotheses`, `nav-plan`
- Theme toggle: `button-toggle-theme`
- Mobile menu: `button-menu-toggle`
- Add evidence dialog: `button-add-evidence`, `input-evidence-title`, `input-evidence-url`, `slider-evidence-reliability`, `slider-evidence-relevance`, `select-evidence-type`, `select-evidence-epistemic`, `button-save-evidence`
- Add hypothesis: `button-add-hypothesis`, `input-hypothesis-title`, `slider-hypothesis-confidence`, `button-save-hypothesis`
- Export: `button-copy-brief`, `button-export-brief`, `button-copy-plan`, `button-export-plan`
- Dynamic items: `card-evidence-{id}`, `card-hypothesis-{id}`, `plan-item-{id}`, `timeline-row-{id}`, `matrix-cell-{r}-{v}`
