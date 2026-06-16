---
repo: openclaw/openclaw
cluster_id: gitcrawl-78-dedupe-cleanup-wave
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#92341"
candidates:
  - "#92061"
  - "#92164"
  - "#92337"
  - "#92341"
  - "#92524"
  - "#92728"
cluster_refs:
  - "#92061"
  - "#92164"
  - "#92337"
  - "#92341"
  - "#92524"
  - "#92728"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #92341 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 78 on 2026-06-16."
---

# Gitcrawl Cluster 78

Generated from local gitcrawl run cluster 78 for `openclaw/openclaw`.

Display title:

> fix(memory-core): CJK textScore=0 and empty MATCH LIKE fallback

Cluster shape from gitcrawl:

- total members: 6
- issues: 3
- pull requests: 3
- open candidates in local store: 6
- representative: #92341, currently open in local store
- latest member update: 2026-06-15T19:04:11.867113Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92061 memory-core: CJK text FTS5 search returns textScore=0 with trigram tokenizer
- #92164 fix(memory-core): score CJK keyword search instead of textScore=0 with trigram FTS5
- #92337 memory-core: mergeHybridResults ignores textScore when keyword/vector chunk IDs don't overlap
- #92341 fix(memory-core): CJK textScore=0 and empty MATCH LIKE fallback
- #92524 fix(memory-core): preserve keyword-only hybrid results
- #92728 memory-core: CJK LIKE fallback returns wrong results for multi-character queries
