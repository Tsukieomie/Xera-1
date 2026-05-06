# MEDUSA Primary-Record Evidence Table

Objective: one-page, primary-first table for the **WaveBand MEDUSA** line only.

Legend:
- Confidence: `High / Moderate / Low`
- Tier: repo `T1-T5`

| Claim | Artifact | Type | Tier | Confidence | Notes |
|---|---|---|---|---|---|
| WaveBand held a Navy Phase I award tied to MEDUSA language | `medusa-navysbir-wayback.html` (`Contract # M67854-04-C-1012`, `Topic N03-163`, `Title: Remote Personnel Incapacitation System`) | Archived primary program record | T3 | High | Strongest anchor in corpus; identifies contractor, topic, schedule, and title. |
| Program explicitly framed as MAE-based non-lethal concept | `medusa-navysbir-wayback.html` objective text references "MEDUSA (Mob Excess Deterrent Using Silent Audio)" and "microwave auditory effect (MAE)" | Archived primary narrative | T1/T3 | High | Supports mechanism/program-intent framing, not deployment proof. |
| Prototype-stage engineering activity occurred | `medusa-navysbir-wayback.html` summary text: frequency chosen, hardware built, pulse params confirmed, MAE observed | Archived primary self-report | T3 (with T1 context) | Moderate | Evidence is contractor/government summary text; independent replication not provided here. |
| WaveBand corporate lineage into SNC is documented | `medusa-sncorp-wayback.html` press page (`press_more_info.php?id=350`) with "Acquisition of WaveBand Corporation by Sierra Nevada Corporation" (May 2005) | Archived corporate primary | T3 provenance | High | Useful ownership continuity artifact; not efficacy evidence. |
| "MEDUSA" label is ambiguous and includes unrelated programs | `search-medusa-primary-only-pass-1.json` includes unrelated awards/topics such as EPIC entries (`M67854-04-C-1013`, `M67854-05-C-6509`) and unrelated MEDUSA pages | Retrieval-noise control artifact | Method guardrail | High | Prevents false joins when attributing evidence to WaveBand MEDUSA. |
| Public federal databases do not trivially surface this exact historic contract today | `search-medusa-primary-only-pass-1.json` targeted queries returned mostly unrelated USAspending/SAM hits | Negative search result log | T3 gap note | Moderate | Absence in quick modern index queries is not disproof; archive anchor remains primary. |
| Archived Navy summary vs SBIR bulk disagree on award amount | Wayback summary page shows **$99,965**; `medusa-contract-cluster-from-sbir-bulk.json` shows **$69,990** for the same contract — reconciliation open | Data conflict log | T3 hygiene | Moderate | Treat Wayback narrative as primary **story**; require FPDS/USASpending or CO document to resolve dollars. See `V2K_MEDUSA_DEEPER_PASS_METADATA_AND_GAPS.md`. |
| WaveBand MEDUSA proves operational field deployment | No primary artifact recovered in this pass proving program-of-record fielding | Missing-evidence entry | T4 | Low / Not established | Keep as "not established." |
| WaveBand MEDUSA proves covert semantic speech delivery | No protocol-grade, primary speech-transmission validation recovered in this pass | Missing-evidence entry | T2 | Low / Not established | MEDUSA remains T3 anchor, not T2 closure. |

## Bottom line (for repo use)

Use MEDUSA as a **T3 provenance anchor** with limited T1 context from stated MAE basis.  
Do **not** use MEDUSA as standalone proof of T2 semantic-speech capability or T4 operational deployment.
