---
repo: openclaw/openclaw
cluster_id: gitcrawl-3429-dedupe-only-20260429d
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
  - "#65356"
candidates:
  - "#65356"
  - "#67623"
cluster_refs:
  - "#65356"
  - "#67623"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65356 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3429 on 2026-04-30."
---

# Gitcrawl Cluster 3429

Generated from local gitcrawl run cluster 3429 for `openclaw/openclaw`.

Display title:

> fix(sandbox): use resolveGlobalSingleton for backend registry

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #65356, currently open in local store
- latest member update: 2026-04-28T07:04:52.086371367Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #65356 fix(sandbox): use resolveGlobalSingleton for backend registry
- #67623 fix: Change the scope of the variable SANDBOX_BACKEND_FACTORIES from …
