---
repo: openclaw/openclaw
cluster_id: gitcrawl-860-dedupe-cleanup-wave-3
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
  - "#73478"
candidates:
  - "#73478"
cluster_refs:
  - "#73478"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#81136"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #73478 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 860 on 2026-06-16. Existing-overlap refs #81136 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 860

Generated from local gitcrawl run cluster 860 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw gateway 没有输出图片信息

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #81136
- representative: #73478, currently open in local store
- latest member update: 2026-06-15T19:04:12.412313Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #73478 [Bug]: openclaw gateway 没有输出图片信息

Existing-overlap context refs:

- #81136 fix(gateway): carry assistant mediaUrls through live chat deltas and finals
