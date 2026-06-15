---
repo: openclaw/openclaw
cluster_id: gitcrawl-237-bulk-plan-20260615-a
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
  - "#49183"
candidates:
  - "#44484"
  - "#49183"
  - "#73864"
cluster_refs:
  - "#44484"
  - "#49183"
  - "#73864"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#73864"
canonical_hint: "gitcrawl representative #49183 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 237 on 2026-06-15. Security-signal refs #73864 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 237

Generated from local gitcrawl run cluster 237 for `openclaw/openclaw`.

Display title:

> RFC: Per-session tool policies — bridging operator scopes and agent tool access

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- security-signal refs requiring route_security: #73864
- representative: #49183, currently open in local store
- latest member update: 2026-06-14T04:46:06.593955Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44484 Agent declared tools != effective session tools: no strict inheritance mode, no visibility, no clipping reason trace
- #49183 RFC: Per-session tool policies — bridging operator scopes and agent tool access
- #73864 [security-signal] Feature: let openclaw mcp serve request configurable operator scopes
