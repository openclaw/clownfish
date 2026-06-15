---
repo: openclaw/openclaw
cluster_id: gitcrawl-191-bulk-plan-20260615-a
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
  - "#85696"
candidates:
  - "#84783"
  - "#85696"
  - "#88837"
cluster_refs:
  - "#84783"
  - "#85696"
  - "#88837"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#84783"
  - "#88837"
canonical_hint: "gitcrawl representative #85696 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 191 on 2026-06-15. Security-signal refs #84783, #88837 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 191

Generated from local gitcrawl run cluster 191 for `openclaw/openclaw`.

Display title:

> fix(agent): use static catalog for embedded model fast path

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #84783, #88837
- representative: #85696, currently open in local store
- latest member update: 2026-06-14T04:46:07.219993Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #84783 [security-signal] [Bug]: Native Moonshot Discord runs spend ~30s in model-resolution before dispatch
- #85696 fix(agent): use static catalog for embedded model fast path
- #88837 [security-signal] fix(agent): use static catalog for skip-agent model resolution
