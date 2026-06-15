---
repo: openclaw/openclaw
cluster_id: gitcrawl-242-plan-wave-20260615-a
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
  - "#91095"
candidates:
  - "#91095"
  - "#91315"
  - "#91446"
cluster_refs:
  - "#91095"
  - "#91315"
  - "#91446"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #91095 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 242 on 2026-06-15."
---

# Gitcrawl Cluster 242

Generated from local gitcrawl run cluster 242 for `openclaw/openclaw`.

Display title:

> [Bug]: Interactive TUI sessions (gateway and --local) cannot expose sessions_spawn even when agents.defaults.subagents.allowAgents is configured

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #91095, currently open in local store
- latest member update: 2026-06-14T04:46:05.08457Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91095 [Bug]: Interactive TUI sessions (gateway and --local) cannot expose sessions_spawn even when agents.defaults.subagents.allowAgents is configured
- #91315 fix(agents): expose sessions_spawn in embedded mode when allowAgents is configured
- #91446 fix(agents): expose sessions_spawn in TUI when subagents.allowAgents is configured
