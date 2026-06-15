---
repo: openclaw/openclaw
cluster_id: gitcrawl-166-plan-ramp
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
  - "#74378"
candidates:
  - "#74378"
  - "#74425"
  - "#85268"
  - "#92389"
cluster_refs:
  - "#74378"
  - "#74425"
  - "#85268"
  - "#92389"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #74378 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 166 on 2026-06-14."
---

# Gitcrawl Cluster 166

Generated from local gitcrawl run cluster 166 for `openclaw/openclaw`.

Display title:

> [Bug]: OpenClaw CLI commands remain alive as node.exe processes after execution on Windows

Cluster shape from gitcrawl:

- total members: 4
- issues: 3
- pull requests: 1
- open candidates in local store: 4
- representative: #74378, currently open in local store
- latest member update: 2026-06-14T04:46:07.174589Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74378 [Bug]: OpenClaw CLI commands remain alive as node.exe processes after execution on Windows
- #74425 fix: ensure CLI processes exit after command completion on Windows
- #85268 [Bug]:  [Windows] exec spawn: all commands hang with no output (stdio pipe deadlock)
- #92389 [Bug]: Windows: "openclaw gateway status" returns JSON but process never exits (spawn hangs)
