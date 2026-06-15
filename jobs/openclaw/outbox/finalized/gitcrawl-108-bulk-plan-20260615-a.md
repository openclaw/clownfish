---
repo: openclaw/openclaw
cluster_id: gitcrawl-108-bulk-plan-20260615-a
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
  - "#91375"
candidates:
  - "#75621"
  - "#78381"
  - "#81595"
  - "#81787"
  - "#91375"
cluster_refs:
  - "#75621"
  - "#78381"
  - "#81595"
  - "#81787"
  - "#91375"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#81787"
canonical_hint: "gitcrawl representative #91375 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 108 on 2026-06-15. Security-signal refs #81787 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 108

Generated from local gitcrawl run cluster 108 for `openclaw/openclaw`.

Display title:

> [2026.6.1 regression] bundle-tools prep stage 5–7s → 21–27s (3–4×) with 3 stdio MCP servers

Cluster shape from gitcrawl:

- total members: 5
- issues: 3
- pull requests: 2
- open candidates in local store: 5
- security-signal refs requiring route_security: #81787
- representative: #91375, currently open in local store
- latest member update: 2026-06-14T04:46:06.87195Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #75621 Gateway lazy-spawns duplicate stdio MCP children with identical ppid+config (memory + CPU leak)
- #78381 feat(embedded-runner): expose prep stage timings
- #81595 observability: emit per-MCP-server sub-spans inside bundle-tools so cold-start cost is attributable
- #81787 [security-signal] Add bundle MCP diagnostics timeline spans
- #91375 [2026.6.1 regression] bundle-tools prep stage 5–7s → 21–27s (3–4×) with 3 stdio MCP servers
