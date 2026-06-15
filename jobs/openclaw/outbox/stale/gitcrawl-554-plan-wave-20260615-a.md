---
repo: openclaw/openclaw
cluster_id: gitcrawl-554-plan-wave-20260615-a
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
  - "#54157"
candidates:
  - "#54157"
  - "#55913"
cluster_refs:
  - "#54157"
  - "#55913"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #54157 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 554 on 2026-06-15."
---

# Gitcrawl Cluster 554

Generated from local gitcrawl run cluster 554 for `openclaw/openclaw`.

Display title:

> Doubao/BytePlus model catalog: cacheRead/cacheWrite pricing set to 0, missing context caching cost

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #54157, currently open in local store
- latest member update: 2026-06-14T04:46:04.887782Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #54157 Doubao/BytePlus model catalog: cacheRead/cacheWrite pricing set to 0, missing context caching cost
- #55913 fix(agents): add Doubao/BytePlus context caching prices and correct per-Mtok rates
