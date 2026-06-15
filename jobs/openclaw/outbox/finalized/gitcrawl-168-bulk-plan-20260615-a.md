---
repo: openclaw/openclaw
cluster_id: gitcrawl-168-bulk-plan-20260615-a
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
  - "#85126"
candidates:
  - "#62710"
  - "#85126"
  - "#85311"
  - "#87957"
cluster_refs:
  - "#62710"
  - "#85126"
  - "#85311"
  - "#87957"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#62710"
  - "#85311"
canonical_hint: "gitcrawl representative #85126 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 168 on 2026-06-15. Security-signal refs #62710, #85311 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 168

Generated from local gitcrawl run cluster 168 for `openclaw/openclaw`.

Display title:

> Bug: Control UI (TUI/WebChat) sessions auto-select wrong authProfileOverride (deepseek instead of minimax) at creation

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 4
- security-signal refs requiring route_security: #62710, #85311
- representative: #85126, currently open in local store
- latest member update: 2026-06-14T04:46:06.842163Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #62710 [security-signal] fix(auth): stop new sessions inheriting auto-selected auth profile overrides
- #85126 Bug: Control UI (TUI/WebChat) sessions auto-select wrong authProfileOverride (deepseek instead of minimax) at creation
- #85311 [security-signal] fix(auth-profiles): break self-reinforcing session auth override loop (#85126)
- #87957 Refactor session model/auth state resolution
