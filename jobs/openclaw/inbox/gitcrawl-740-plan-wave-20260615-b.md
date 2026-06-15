---
repo: openclaw/openclaw
cluster_id: gitcrawl-740-plan-wave-20260615-b
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
  - "#79638"
candidates:
  - "#79638"
  - "#85614"
cluster_refs:
  - "#79638"
  - "#85614"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #79638 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 740 on 2026-06-15."
---

# Gitcrawl Cluster 740

Generated from local gitcrawl run cluster 740 for `openclaw/openclaw`.

Display title:

> [Bug]: [4.29–5.4 regression] Heartbeat causes message cross-contamination between agents and replies with stale conversation content

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #79638, currently open in local store
- latest member update: 2026-06-14T04:46:07.091427Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #79638 [Bug]: [4.29–5.4 regression] Heartbeat causes message cross-contamination between agents and replies with stale conversation content
- #85614 [Bug]: First user message after heartbeat poll is misidentified as heartbeat continuation
