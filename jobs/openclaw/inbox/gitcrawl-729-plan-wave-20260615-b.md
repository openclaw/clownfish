---
repo: openclaw/openclaw
cluster_id: gitcrawl-729-plan-wave-20260615-b
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
  - "#81594"
candidates:
  - "#81594"
  - "#81613"
cluster_refs:
  - "#81594"
  - "#81613"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #81594 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 729 on 2026-06-15."
---

# Gitcrawl Cluster 729

Generated from local gitcrawl run cluster 729 for `openclaw/openclaw`.

Display title:

> [Bug]: Text /steer can target slash lane instead of active direct lane

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #81594, currently open in local store
- latest member update: 2026-06-14T04:46:05.920422Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81594 [Bug]: Text /steer can target slash lane instead of active direct lane
- #81613 fix(steer): fallback to sibling direct/DM lanes when slash lane has no active run
