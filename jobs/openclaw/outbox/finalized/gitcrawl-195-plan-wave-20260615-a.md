---
repo: openclaw/openclaw
cluster_id: gitcrawl-195-plan-wave-20260615-a
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
  - "#92569"
candidates:
  - "#68187"
  - "#92569"
  - "#92696"
cluster_refs:
  - "#68187"
  - "#92569"
  - "#92696"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #92569 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 195 on 2026-06-15."
---

# Gitcrawl Cluster 195

Generated from local gitcrawl run cluster 195 for `openclaw/openclaw`.

Display title:

> MCP server processes leaked across sessions — stale PID holds file lock on next reconnect

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- representative: #92569, currently open in local store
- latest member update: 2026-06-14T04:46:04.017336Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #68187 SSE-backed MCP sessions can stay stale after server restart and fail with 'Session not found'
- #92569 MCP server processes leaked across sessions — stale PID holds file lock on next reconnect
- #92696 fix(gateway): reap stale MCP processes on session reset regardless of agent run timeout
