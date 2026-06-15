---
repo: openclaw/openclaw
cluster_id: gitcrawl-139-bulk-plan-20260615-a
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
  - "#87828"
candidates:
  - "#87730"
  - "#87828"
  - "#89606"
  - "#89882"
cluster_refs:
  - "#87730"
  - "#87828"
  - "#89606"
  - "#89882"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#87828"
canonical_hint: "gitcrawl representative #87828 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 139 on 2026-06-15. Security-signal refs #87828 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 139

Generated from local gitcrawl run cluster 139 for `openclaw/openclaw`.

Display title:

> fix(plugins): accept bundled plugins in source overlay root for --refresh compatibility

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 4
- security-signal refs requiring route_security: #87828
- representative: #87828, currently open in local store
- latest member update: 2026-06-14T04:46:06.782729Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87730 [Bug]: 2026.5.27 Refresh still says stale
- #87828 [security-signal] fix(plugins): accept bundled plugins in source overlay root for --refresh compatibility
- #89606 plugins registry --refresh (refreshReason: policy-changed) drops path/npm-origin plugins from plugins[]
- #89882 fix(plugins): rebuild missing installs on policy refresh
