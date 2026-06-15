---
repo: openclaw/openclaw
cluster_id: gitcrawl-731-plan-wave-20260615-b
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
  - "#81710"
candidates:
  - "#81710"
  - "#81779"
cluster_refs:
  - "#81710"
  - "#81779"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #81710 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 731 on 2026-06-15."
---

# Gitcrawl Cluster 731

Generated from local gitcrawl run cluster 731 for `openclaw/openclaw`.

Display title:

> [Bug]: Openclaw heartbeat and /new /reset is no longer reading the files like agent.md soul.md identity.md

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #81710, currently open in local store
- latest member update: 2026-06-14T04:46:05.926587Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81710 [Bug]: Openclaw heartbeat and /new /reset is no longer reading the files like agent.md soul.md identity.md
- #81779 fix(agents): name workspace files in /new/reset and heartbeat prompts
