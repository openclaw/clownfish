---
repo: openclaw/openclaw
cluster_id: gitcrawl-201-plan-wave-20260615-a
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
  - "#92474"
candidates:
  - "#92474"
  - "#92484"
  - "#92491"
cluster_refs:
  - "#92474"
  - "#92484"
  - "#92491"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #92474 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 201 on 2026-06-15."
---

# Gitcrawl Cluster 201

Generated from local gitcrawl run cluster 201 for `openclaw/openclaw`.

Display title:

> [Bug]: PYTHONPATH in MCP stdio env config floods gateway journal with per-spawn warnings

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #92474, currently open in local store
- latest member update: 2026-06-14T04:46:04.179711Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92474 [Bug]: PYTHONPATH in MCP stdio env config floods gateway journal with per-spawn warnings
- #92484 fix(mcp): reject blocked stdio env keys at write time and warn once per server
- #92491 fix(mcp): reject blocked stdio env keys at MCP config write time (fixes #92474)
