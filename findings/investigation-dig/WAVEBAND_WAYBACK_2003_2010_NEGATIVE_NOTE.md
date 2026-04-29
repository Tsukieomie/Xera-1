# WaveBand Wayback 2003-2010 Negative Note

Date: April 2026

Scope: probe the Internet Archive Wayback CDX index for any preserved content captures of `wavebandcorp.com` and `www.wavebandcorp.com` in the 2003-2010 window — i.e., the years that bracket the MEDUSA Phase I contract (`M67854-04-C-1012`) and the SNC acquisition window (May 2005).

## 1) Method

Two CDX queries were issued against the Wayback CDX API:

1. Apex + path, status 200 only, collapsed by digest:
   - https://web.archive.org/cdx?url=wavebandcorp.com/*&from=2003&to=2010&output=json&fl=timestamp,original,statuscode,mimetype,digest&filter=statuscode:200&collapse=digest
2. Subdomain wildcard, all status codes, collapsed by URL key:
   - https://web.archive.org/cdx?url=*.wavebandcorp.com/*&from=2003&to=2010&output=json&fl=timestamp,original,statuscode,mimetype,digest&collapse=urlkey

## 2) Result

**Only `robots.txt` captures were returned.** No content-page captures (e.g., `index.html`, project pages, "about", contact, publications, MEDUSA-relevant pages) were recovered for the apex domain or any indexed subdomain in the 2003-2010 window.

This means:

- The Wayback open index does not provide a content-bearing snapshot of WaveBand Corporation's own corporate web presence during the MEDUSA Phase I period.
- Any narrative about what WaveBand publicly said on its own site during this window cannot currently be sourced from the Wayback open index.

## 3) What this rules out (and does not rule out)

- **Rules out (for now):** using `wavebandcorp.com` HTML captures in 2003-2010 as a primary corroborating source for MEDUSA, Lev Sadovnik authorship, or self-reported program claims.
- **Does not rule out:** that such content existed at the time. A `robots.txt`-only CDX result is consistent with either (a) the site existed but was excluded from archival crawl/index by `robots.txt` directives, or (b) the crawler simply never cached deeper paths. It is not evidence the site was empty.

## 4) Interpretive impact

This is a **null-evidence** result for one specific corroboration channel. The MEDUSA-era WaveBand identity continues to rest primarily on:

- the archived Navy SBIR record (`medusa-navysbir-wayback.html`),
- the SBIR.gov portfolio entry for WaveBand Corporation (see `WAVEBAND_ENTITY_LINEAGE_NOTE.md`),
- the SNC press-page capture (`medusa-sncorp-wayback.html`) for ownership continuity.

It does **not** weaken those anchors. It does mean that the contractor's own public website is not currently available as an additional independent voice in the corpus.

## 5) Tier impact

- **T3 (program intent / provenance):** unchanged.
- **T4 (operational deployment):** unchanged — still not established.
- Source-diversity score for WaveBand self-statements during MEDUSA window: **lower than ideal** until a content-bearing capture is recovered.

## 6) Open TODOs

- Try targeted CDX queries against alternate WaveBand-associated hostnames (e.g., subsidiary or product-line subdomains) if any can be inferred from SBIR contact records.
- Try the Internet Archive "Save Page Now" + collection search interface, which sometimes surfaces captures the CDX wildcard path misses.
- Consider non-Wayback web archives (Common Crawl, archive.today / archive.ph, university archive partners) to recover historical WaveBand site content.
- Consider DTIC / MCSC FOIA for the underlying MEDUSA contract artifacts — still the top primary route.
