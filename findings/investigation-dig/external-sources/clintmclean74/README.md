# ClintMclean74 external snapshot (investigation harness)

Purpose: reproducible linkage between `03_Technology_Patents/29_MCLEAN_RERADIATION_MALECH_BRIDGE.md` and upstream Git artifacts, without treating GitHub markup as courtroom-grade proof.

Committed in git:

- `manifests/` -- per-repository file hashes (`git ls-files`), plus `git archive HEAD` digest (byte-identical tarball of tracked files at HEAD)
- `captured-excerpts/` -- tiny README snippets used for stable citations if `clones/` is absent; checksums in `captured-excerpts/EXCERPT_SHA256.txt`
- `CLAIM_ARTIFACT_MAPPING.md` -- dossier claims mapped to specific paths and hashes
- `SNAPSHOT_SUMMARY.md` -- one-page index of commits and anchors

Excluded from git (see repository `.gitignore`):

- `clones/` -- local shallow clones used to compute the manifests (`git clone --depth 1 ...`)

Refresh (after clones exist or after re-cloning):

```bash
mkdir -p investigation-dig/external-sources/clintmclean74/clones investigation-dig/external-sources/clintmclean74/manifests
date -u +%Y-%m-%dT%H:%M:%SZ > investigation-dig/external-sources/clintmclean74/manifests/snapshot_datetime_utc.txt

BASE="investigation-dig/external-sources/clintmclean74"
for repo in Hodgkin-HuxleyCode SDRReradiationSpectrumAnalyzer SDRSpectrumAnalyzer; do
  git clone --depth 1 "https://github.com/ClintMclean74/${repo}.git" "$BASE/clones/$repo"
  R="$BASE/clones/$repo"
  OUT="$BASE/manifests/${repo}_HEAD.sha256.txt"
  {
    echo "# $repo ($(date -u +%Y-%m-%dT%H:%M:%SZ) UTC)"
    echo "# remote_origin: $(git -C "$R" remote get-url origin)"
    echo "# HEAD_commit: $(git -C "$R" rev-parse HEAD)"
    echo "# HEAD_tree: $(git -C "$R" rev-parse HEAD^{tree})"
    echo "# commit_date: $(git -C "$R" log -1 --format=%cI)"
    echo "# archive_HEAD_git_archive_sha256: $(git -C "$R" archive HEAD | shasum -a 256 | awk '{print $1}')"
    echo "---"
    (cd "$R" && git ls-files -z | xargs -0 shasum -a 256 | LC_ALL=C sort -k2)
  } > "$OUT"
done
```
