---
repo: openclaw/openclaw
cluster_id: gitcrawl-930-plan-wave-20260615-b
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
  - "#74377"
candidates:
  - "#74377"
  - "#75496"
cluster_refs:
  - "#74377"
  - "#75496"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #74377 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 930 on 2026-06-15."
---

# Gitcrawl Cluster 930

Generated from local gitcrawl run cluster 930 for `openclaw/openclaw`.

Display title:

> [Bug]: tools array empty at Anthropic provider despite 17 tools computed in attempt.ts (Telegram channel)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #74377, currently open in local store
- latest member update: 2026-06-14T04:46:07.05401Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74377 [Bug]: tools array empty at Anthropic provider despite 17 tools computed in attempt.ts (Telegram channel)
- #75496 fix(pi-runner): re-apply tool allowlist before prompt dispatch
