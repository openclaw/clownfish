---
repo: openclaw/openclaw
cluster_id: gitcrawl-891-plan-wave-20260615-b
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
  - "#72500"
candidates:
  - "#72500"
  - "#85352"
cluster_refs:
  - "#72500"
  - "#85352"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #72500 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 891 on 2026-06-15."
---

# Gitcrawl Cluster 891

Generated from local gitcrawl run cluster 891 for `openclaw/openclaw`.

Display title:

> [Bug]: Control UI webchat flashes credentials gate on tab re-focus due to immediate connected=false render

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #72500, currently open in local store
- latest member update: 2026-06-14T04:46:07.059952Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #72500 [Bug]: Control UI webchat flashes credentials gate on tab re-focus due to immediate connected=false render
- #85352 [Bug]: macOS menu bar app flashes credentials gate on open (login screen flickers before Control UI)
