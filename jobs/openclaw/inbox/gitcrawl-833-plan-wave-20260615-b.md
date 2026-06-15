---
repo: openclaw/openclaw
cluster_id: gitcrawl-833-plan-wave-20260615-b
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
  - "#76352"
candidates:
  - "#76352"
  - "#76364"
cluster_refs:
  - "#76352"
  - "#76364"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #76352 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 833 on 2026-06-15."
---

# Gitcrawl Cluster 833

Generated from local gitcrawl run cluster 833 for `openclaw/openclaw`.

Display title:

> fix(restart): silently skip lsof stale-pid scan when lsof not installed

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #76352, currently open in local store
- latest member update: 2026-06-14T04:46:06.684829Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #76352 fix(restart): silently skip lsof stale-pid scan when lsof not installed
- #76364 fix(restart): skip unavailable lsof in initial scan
