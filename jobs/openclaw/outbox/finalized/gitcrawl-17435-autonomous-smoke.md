---
repo: openclaw/openclaw
cluster_id: gitcrawl-17435-autonomous-smoke
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
  - "#524"
candidates:
  - "#390"
  - "#539"
  - "#589"
cluster_refs:
  - "#390"
  - "#521"
  - "#524"
  - "#539"
  - "#589"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #524 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 17435 on 2026-06-14."
---

# Gitcrawl Cluster 17435

Generated from local gitcrawl run cluster 17435 for `openclaw/openclaw`.

Display title:

> Rate limit exceeded  Clawhub

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 3
- representative: #524, currently closed in local store
- latest member update: 2026-04-30T10:08:30.161952529Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #521 RegLimited skill issue
- #524 Rate limit exceeded  Clawhub

Open candidates:

- #390 Rate limit exceeded` when installing skills via `npx clawhub@latest install <skill>`
- #539 Severe rate limiting issue on VPS/shared IP environments — search and installation blocked
- #589 Rate limit exceeded when installing clawhub
