---
repo: openclaw/openclaw
cluster_id: gitcrawl-238792-dedupe-only-20260429
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
  - "#61080"
candidates:
  - "#39692"
  - "#52776"
  - "#61073"
  - "#61080"
  - "#61092"
  - "#61104"
  - "#61112"
cluster_refs:
  - "#39692"
  - "#52776"
  - "#61073"
  - "#61080"
  - "#61092"
  - "#61104"
  - "#61112"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #61080 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238792 on 2026-04-29."
---

# Gitcrawl Cluster 238792

Generated from local gitcrawl run cluster 238792 for `openclaw/openclaw`.

Display title:

> UI: localize logs hardcoded labels

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 7
- representative: #61080, currently open in local store
- latest member update: 2026-04-28T19:02:29.700Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39692 Localize control UI hardcoded strings to zh-CN
- #52776 UI: localize Control UI shell labels
- #61073 UI: localize instances hardcoded labels
- #61080 UI: localize logs hardcoded labels
- #61092 UI: localize skills hardcoded labels
- #61104 UI: localize agent tools and skills labels
- #61112 UI: localize markdown sidebar labels
