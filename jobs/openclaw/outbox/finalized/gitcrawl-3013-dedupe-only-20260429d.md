---
repo: openclaw/openclaw
cluster_id: gitcrawl-3013-dedupe-only-20260429d
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
  - "#48556"
candidates:
  - "#48556"
  - "#66243"
cluster_refs:
  - "#48556"
  - "#66243"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48556 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3013 on 2026-04-30."
---

# Gitcrawl Cluster 3013

Generated from local gitcrawl run cluster 3013 for `openclaw/openclaw`.

Display title:

> fix: normalize FormData body in proxy fetch for undici compatibility

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #48556, currently open in local store
- latest member update: 2026-04-28T21:55:43.671367021Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48556 fix: normalize FormData body in proxy fetch for undici compatibility
- #66243 infra: normalize proxy fetch input and convert global FormData to undici
