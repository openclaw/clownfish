---
repo: openclaw/openclaw
cluster_id: gitcrawl-150-plan-ramp
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
  - "#89147"
candidates:
  - "#89147"
  - "#89325"
  - "#90762"
  - "#91009"
cluster_refs:
  - "#89147"
  - "#89325"
  - "#90762"
  - "#91009"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #89147 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 150 on 2026-06-14."
---

# Gitcrawl Cluster 150

Generated from local gitcrawl run cluster 150 for `openclaw/openclaw`.

Display title:

> Native hook relay starves mid-turn after long model-thinking gap (renewal loop tool-call-driven)

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #89147, currently open in local store
- latest member update: 2026-06-14T04:46:06.026069Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89147 Native hook relay starves mid-turn after long model-thinking gap (renewal loop tool-call-driven)
- #89325 [Bug]: Native Hook Relay — Stale Relay After Gateway Restart/Drain
- #90762 Native Codex subagents hit `Native hook relay unavailable` on 2026.6.1 while parent session works
- #91009 Codex PreToolUse native hook relay spawns CPU-bound openclaw-hooks processes and stalls gateway RPC
