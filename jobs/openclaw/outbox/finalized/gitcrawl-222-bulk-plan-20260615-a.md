---
repo: openclaw/openclaw
cluster_id: gitcrawl-222-bulk-plan-20260615-a
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
  - "#88075"
candidates:
  - "#74379"
  - "#88075"
  - "#92456"
cluster_refs:
  - "#74379"
  - "#88075"
  - "#92456"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#74379"
  - "#88075"
canonical_hint: "gitcrawl representative #88075 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 222 on 2026-06-15. Security-signal refs #74379, #88075 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 222

Generated from local gitcrawl run cluster 222 for `openclaw/openclaw`.

Display title:

> feat(security/exec): add tools.exec.denyPathPatterns hard-deny gate (#74379)

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #74379, #88075
- representative: #88075, currently open in local store
- latest member update: 2026-06-14T04:46:06.434103Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74379 [security-signal] Feature: execDenyPathPatterns — config-level denylist for file paths in exec commands
- #88075 [security-signal] feat(security/exec): add tools.exec.denyPathPatterns hard-deny gate (#74379)
- #92456 feat: add exec approvals denylist (STOP list) screening
