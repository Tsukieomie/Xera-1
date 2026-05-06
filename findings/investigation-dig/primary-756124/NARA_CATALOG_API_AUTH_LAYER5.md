# Layer-5 Finding: NARA Catalog API — authenticated `x-api-key` requirement (SPA shell without key)

**Date:** 2026-05-06  
**Parent:** Application **756124** / `US3647970` archival targeting (`index.md`, E-006 NAID **302050**).

## Why E-030 and earlier probes returned HTML, not JSON

NARA's **official** developer instructions state that programmatic access to **`https://catalog.archives.gov/api/v2/records/search`** expects an API key issued by Catalog engineers:

- **Getting Started:** [`https://www.archives.gov/research/catalog/help/api-getting-started`](https://www.archives.gov/research/catalog/help/api-getting-started)  
  Documents the pattern:
  ```
  curl ... GET "https://catalog.archives.gov/api/v2/records/search?q=constitution" \
    --header "Content-Type: application/json" \
    --header "x-api-key: YOUR_API_KEY"
  ```
- **Contact** (catalog API): `Catalog_API@nara.gov` is listed on the parent API help page [`https://www.archives.gov/research/catalog/help/api`](https://www.archives.gov/research/catalog/help/api).
- **Swagger:** [`https://catalog.archives.gov/api/v2/api-docs/`](https://catalog.archives.gov/api/v2/api-docs/)

**Interpretation:** Observing **`Content-Type: text/html`** and a **~5454-byte** body starting with `<!doctype html>` from `catalog.archives.gov/api/v...` without an `x-api-key` header is consistent with delivery of the catalog **SPA shell**, not successful JSON retrieval — separate from generic "CloudFront quirks" hypotheses.

This **refines** E-030 / E-012: unmetered **`curl`** from this workspace is **blocked by design** until a Catalog-issued **`x-api-key`** is configured (plus rate limits per NARA policy).

## Repeat probes without key (`2026-05-06`, this environment)

All returned **`text/html`**, **`content-length: 5454`** (SPA pattern):

| URL |
|-----|
| `GET https://catalog.archives.gov/api/v2/records/search?q=302050` |
| `GET https://catalog.archives.gov/api/v2/records/search?q=naId:302050` |
| `GET https://catalog.archives.gov/api/v2/records/search?q=3647970` |
| `GET https://catalog.archives.gov/api/v2/records/search?q="US 3647970"` |
| Legacy-style `GET https://catalog.archives.gov/api/v1/search?...` variants |

No JSON `body.hits` structure was retrieved.

## Operational next steps (unchanged high-value routes)

1. **Request Catalog API access** (`Catalog_API@nara.gov`) if machine queries for NAID 302050 / patent band text are desired.
2. **Continue human channels** already in `ARCHIVAL_TARGETS_756124.md`: NARA Kansas City (`kansascity.archives@nara.gov`) + USPTO certified file-wrapper path.

## Evidence ledger mapping

Captured as **`E-031`** in `index.md` (Layer-5 interpretation of SPA responses; cites official NARA getting-started documentation).
