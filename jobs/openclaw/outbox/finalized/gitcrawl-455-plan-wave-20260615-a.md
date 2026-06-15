---
repo: openclaw/openclaw
cluster_id: gitcrawl-455-plan-wave-20260615-a
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
  - "#81046"
candidates:
  - "#81046"
  - "#81054"
cluster_refs:
  - "#81046"
  - "#81054"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #81046 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 455 on 2026-06-15."
---

# Gitcrawl Cluster 455

Generated from local gitcrawl run cluster 455 for `openclaw/openclaw`.

Display title:

> Persist model exhaustion cooldowns

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #81046, currently open in local store
- latest member update: 2026-06-14T04:46:04.217403Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81046 Persist model exhaustion cooldowns
- #81054 feat: persist model exhaustion cooldowns per session
