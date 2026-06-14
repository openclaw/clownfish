---
repo: openclaw/openclaw
cluster_id: gitcrawl-17436-autonomous-smoke
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
  - "#29"
candidates:
  - "#26"
cluster_refs:
  - "#26"
  - "#28"
  - "#29"
  - "#30"
  - "#552"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #29 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 17436 on 2026-06-14."
---

# Gitcrawl Cluster 17436

Generated from local gitcrawl run cluster 17436 for `openclaw/openclaw`.

Display title:

> Tests: Search Results

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 1
- representative: #29, currently closed in local store
- latest member update: 2026-04-30T10:08:30.443350347Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #28 [Issue #26] Search fix.
- #29 Tests: Search Results
- #30 Search Fixes
- #552 test(search): add soft-delete filtering tests (#29)

Open candidates:

- #26 Search doesn't work in the latest update.
