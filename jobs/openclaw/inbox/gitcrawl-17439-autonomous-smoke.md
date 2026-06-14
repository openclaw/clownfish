---
repo: openclaw/openclaw
cluster_id: gitcrawl-17439-autonomous-smoke
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#1254"
candidates:
  - "#1863"
cluster_refs:
  - "#1243"
  - "#1254"
  - "#1256"
  - "#1863"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #1254 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 17439 on 2026-06-14."
---

# Gitcrawl Cluster 17439

Generated from local gitcrawl run cluster 17439 for `openclaw/openclaw`.

Display title:

> Search misses `Midscene` and other direct name/slug prefix queries when vector recall fails

Cluster shape from gitcrawl:

- total members: 4
- issues: 3
- pull requests: 1
- open candidates in local store: 1
- representative: #1254, currently closed in local store
- latest member update: 2026-04-30T10:08:29.716413095Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #1243 Search: skill with 'phone' and 'voice' tags not surfacing when searching those terms
- #1254 Search misses `Midscene` and other direct name/slug prefix queries when vector recall fails
- #1256 Fix direct skill prefix recall when vector search misses

Open candidates:

- #1863 /skills search is not stable for English queries: `scienceclaw` returns 3 results while `ScienceClaw` returns 6`
