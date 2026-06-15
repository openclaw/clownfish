---
repo: openclaw/openclaw
cluster_id: gitcrawl-280-bulk-plan-20260615-a
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
  - "#79044"
candidates:
  - "#72253"
  - "#78904"
  - "#79044"
cluster_refs:
  - "#72253"
  - "#78904"
  - "#79044"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#72253"
  - "#79044"
canonical_hint: "gitcrawl representative #79044 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 280 on 2026-06-15. Security-signal refs #72253, #79044 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 280

Generated from local gitcrawl run cluster 280 for `openclaw/openclaw`.

Display title:

> fix(status): clarify heartbeat cadence source

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #72253, #79044
- representative: #79044, currently open in local store
- latest member update: 2026-06-14T04:46:07.13883Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #72253 [security-signal] fix(heartbeat): keep benign exec completions internal
- #78904 openclaw status reports Heartbeat 1h while actual native heartbeat delivery is 30m
- #79044 [security-signal] fix(status): clarify heartbeat cadence source
