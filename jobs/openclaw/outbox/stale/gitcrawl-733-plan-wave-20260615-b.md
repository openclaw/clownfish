---
repo: openclaw/openclaw
cluster_id: gitcrawl-733-plan-wave-20260615-b
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
  - "#81723"
candidates:
  - "#81723"
  - "#92384"
cluster_refs:
  - "#81723"
  - "#92384"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #81723 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 733 on 2026-06-15."
---

# Gitcrawl Cluster 733

Generated from local gitcrawl run cluster 733 for `openclaw/openclaw`.

Display title:

> [Bug] message tool sends to wrong WeChat session type (group instead of direct)

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #81723, currently open in local store
- latest member update: 2026-06-14T04:46:05.93848Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81723 [Bug] message tool sends to wrong WeChat session type (group instead of direct)
- #92384 [Bug]: WeChat channel: same DM peer spawns duplicate direct+group sessions — outbound target classifier defaults bare IDs to "group"
