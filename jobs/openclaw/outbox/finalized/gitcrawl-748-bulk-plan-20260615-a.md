---
repo: openclaw/openclaw
cluster_id: gitcrawl-748-bulk-plan-20260615-a
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
  - "#89225"
candidates:
  - "#89225"
  - "#89226"
cluster_refs:
  - "#89225"
  - "#89226"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89226"
canonical_hint: "gitcrawl representative #89225 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 748 on 2026-06-15. Security-signal refs #89226 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 748

Generated from local gitcrawl run cluster 748 for `openclaw/openclaw`.

Display title:

> doctor: unhandled rejection "FsSafeError: root dir not found" when an agent workspace dir is missing

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- security-signal refs requiring route_security: #89226
- representative: #89225, currently open in local store
- latest member update: 2026-06-14T04:46:06.064933Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89225 doctor: unhandled rejection "FsSafeError: root dir not found" when an agent workspace dir is missing
- #89226 [security-signal] fix(agent-tools): resolve workspace-scoped tool fs root lazily
