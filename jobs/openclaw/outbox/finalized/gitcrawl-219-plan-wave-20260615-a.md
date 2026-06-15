---
repo: openclaw/openclaw
cluster_id: gitcrawl-219-plan-wave-20260615-a
mode: plan
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
  - "#88551"
candidates:
  - "#88551"
  - "#88553"
  - "#90979"
cluster_refs:
  - "#88551"
  - "#88553"
  - "#90979"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #88551 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 219 on 2026-06-15."
---

# Gitcrawl Cluster 219

Generated from local gitcrawl run cluster 219 for `openclaw/openclaw`.

Display title:

> fix(agents): skip auth gate for CLI-owned transport

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #88551, currently open in local store
- latest member update: 2026-06-14T04:46:04.926818Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #88551 fix(agents): skip auth gate for CLI-owned transport
- #88553 fix(agents): unblock fallback classification tests
- #90979 fix(agents): guard CLI MCP resume reuse
