# Flanagan Investigation Fifth-Pass Addendum

## Executive summary

The fifth pass upgrades the LIFE Magazine claim from “likely but needing primary page-image capture” to **page-resolved near-primary scan confirmed**. Google Books exposes the LIFE September 14, 1962 issue at page **69**, where the article title **“Whiz Kid, Hands Down”** is visible and the opening text names **Pat Flanagan** as a 17-year-old inventor from Bellaire, Texas ([Google Books page 69](https://books.google.com/books?id=z00EAAAAMBAJ&pg=PA69)). The article continuation is page **72**, giving a stable two-page citation path for repo notes and future screenshots ([Google Books page 72](https://books.google.com/books?id=z00EAAAAMBAJ&pg=PA72)).

The USPTO assignment lane gained procedural support but not the missing assignment image. Data.gov’s catalog record for the **Patent Assignment Search API Version 1.4** lists the API as public, identifies its documentation link as `https://assignment-api.uspto.gov/documentation-patent/`, and describes temporal coverage from **1980-08-01 to 2025-12-31**, which covers the 1984 Biolectron assignment record ([Data.gov](https://catalog.data.gov/dataset/patent-assignment-search-api-version-1-4)). However, both `assignment.uspto.gov` and `assignment-api.uspto.gov` failed to resolve from the current environment, so the actual USPTO assignment image for reel/frame **004271/0859** remains unrecovered.

The clinical full-text lane remains partially blocked. The DOI for Puharich/Lawrence’s 1969 Acta Otolaryngologica article resolves to the article title, but the full text was not retrieved during this pass ([DOI resolver](https://doi.org/10.3109/00016486909124370)). PubMed remains the reliable bibliographic source for the paper and confirms the title, authors, publication details, DOI, and clinical-trial classification, but it provides no abstract ([PubMed](https://pubmed.ncbi.nlm.nih.gov/4906301/)).

## LIFE page-image upgrade

The previous state of the record treated the LIFE article as likely because transcript mirrors gave consistent bibliographic details, but a page-stable primary scan had not yet been captured. The fifth pass located a Google Books page URL for page **69** of the September 14, 1962 LIFE issue, where the article title **“Whiz Kid, Hands Down”** is readable and the opening column begins with “The very young man above is standing on his head because he says it helps him think,” then identifies **Pat Flanagan** in the first paragraph ([Google Books page 69](https://books.google.com/books?id=z00EAAAAMBAJ&pg=PA69)). Google Books also exposes page **72** as the article continuation, matching secondary references that identify the piece as spanning pages 69 and 72 ([Google Books page 72](https://books.google.com/books?id=z00EAAAAMBAJ&pg=PA72)).

Two screenshots were saved locally during the pass:

| Screenshot | Content captured | Evidence value |
| --- | --- | --- |
| `LIFE_Sep14_1962_p69_WhizKid_Flanagan.jpg` | Page/snippet view of page 69 | Confirms page-resolved Google Books access |
| `LIFE_Sep14_1962_p69_full_WhizKid.jpg` | Full page 69 view with photo, title, and opening text | Confirms visible title, page selector, issue sidebar, and opening text |

The article’s byline is still best cited through corroborating mirrors unless a clearer full-page scan shows the byline directly. PhiSciences identifies the article as **“Whiz Kid, Hands Down,” LIFE Magazine, September 14, 1962, written by William Moeser**, and provides a transcript that matches the visible opening text in the Google Books scan ([PhiSciences](https://www.phisciences.com/pages/dr-patrick-flanagan-life-magazine-article)). The repo should now cite Google Books for page existence and page numbers, and cite PhiSciences only for the byline/transcript unless a sharper page image exposes the byline.

## USPTO assignment API and reel/frame path

USPTO’s older AOTW help page documents the correct reel/frame search behavior: users enter at least one digit in the reel field, tab to the frame field, enter at least one numeric digit, and the system adds leading zeros where needed; it also states that all data associated with the recorded assignment displays on the Assignment Details page ([USPTO AOTW help](https://www.uspto.gov/patents/laws/power-attorney-and-assignment/assignments-web-aotw)). That procedural documentation supports the target strategy for reel/frame **004271/0859**, but it does not itself display the Biolectron assignment.

Data.gov’s Patent Assignment Search API catalog record is useful because it names the hidden documentation endpoint, says the API retrieves patent assignment information from the USPTO assignment search database and generates XML result files, and gives the temporal coverage as **1980-08-01 to 2025-12-31** ([Data.gov](https://catalog.data.gov/dataset/patent-assignment-search-api-version-1-4)). The record also gives the access URL as USPTO’s developer catalog and the references/FAQ URL as `https://assignment.uspto.gov/patent/index.html#/faq`, but the current environment could not resolve the actual `assignment-api.uspto.gov` documentation host ([Data.gov](https://catalog.data.gov/dataset/patent-assignment-search-api-version-1-4)).

The assignment image target therefore remains:

| Target | Current status | Next action |
| --- | --- | --- |
| `assignment.uspto.gov` reel/frame page | Direct browser and fetch attempts failed due blank SPA/DNS resolution | Retry from a different network or local browser if available |
| `assignment-api.uspto.gov/documentation-patent/` | Data.gov identifies it, but DNS resolution failed in this environment | Try later or from a network that resolves USPTO assignment subdomains |
| USPTO Assignment Services | AOTW help lists assignment-data contact pathways | Request reel/frame **004271/0859** image/document manually if web access remains blocked ([USPTO AOTW help](https://www.uspto.gov/patents/laws/power-attorney-and-assignment/assignments-web-aotw)) |

## Clinical full-text path status

The full text of Puharich/Lawrence 1969 remains the main unresolved clinical target. The DOI resolver identifies the article as **“Hearing Rehabilitation By Means Of Transdermal Electrotherapy In Human Hearing Loss Of Sensorineural Origin: Preliminary Report”**, matching the PubMed record ([DOI resolver](https://doi.org/10.3109/00016486909124370), [PubMed](https://pubmed.ncbi.nlm.nih.gov/4906301/)). Searches did not produce a freely accessible full-text copy during this pass, and PubMed continues to provide no abstract ([PubMed](https://pubmed.ncbi.nlm.nih.gov/4906301/)).

The best next steps are library-style rather than search-style: use a university/library database, Taylor & Francis access, interlibrary loan, or document delivery for **Acta Otolaryngologica 1969;67(1):69-83**. Brooks/Harrison 1975 remains in a similar state: PubMed confirms the clinical-trial bibliographic record, but the abstract and full text were not recovered during this pass ([PubMed Brooks/Harrison](https://pubmed.ncbi.nlm.nih.gov/1092039/)).

## Updated evidence status

| Claim or target | Status after fifth pass | Repo label |
| --- | --- | --- |
| LIFE “Whiz Kid, Hands Down” article exists and begins on page 69 | Page-resolved Google Books scan confirms visible title and opening text naming Pat Flanagan ([Google Books page 69](https://books.google.com/books?id=z00EAAAAMBAJ&pg=PA69)) | Upgraded to page-resolved near-primary scan |
| LIFE continuation page | Page 72 URL identified as continuation path ([Google Books page 72](https://books.google.com/books?id=z00EAAAAMBAJ&pg=PA72)) | Add page 72 pointer |
| William Moeser byline | Still best supported by transcript/mirror source unless clearer Google Books byline crop is captured ([PhiSciences](https://www.phisciences.com/pages/dr-patrick-flanagan-life-magazine-article)) | Keep as corroborated secondary byline |
| USPTO assignment image for 004271/0859 | Not recovered; official API documentation host identified but inaccessible from this environment ([Data.gov](https://catalog.data.gov/dataset/patent-assignment-search-api-version-1-4)) | Leave as open primary-record target |
| Puharich/Lawrence full text | DOI and PubMed record confirmed; full text not recovered ([DOI resolver](https://doi.org/10.3109/00016486909124370), [PubMed](https://pubmed.ncbi.nlm.nih.gov/4906301/)) | Leave as library/document-delivery target |
