---
repo: openclaw/openclaw
cluster_id: gitcrawl-875-plan-wave-20260615-b
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
  - "#87573"
candidates:
  - "#87573"
  - "#87942"
cluster_refs:
  - "#87573"
  - "#87942"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #87573 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 875 on 2026-06-15."
---

# Gitcrawl Cluster 875

Generated from local gitcrawl run cluster 875 for `openclaw/openclaw`.

Display title:

> Repair active npm host after plugin installs

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #87573, currently open in local store
- latest member update: 2026-06-14T04:46:06.745022Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87573 Repair active npm host after plugin installs
- #87942 fix: repair active npm host after plugin installs
