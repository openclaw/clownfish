---
repo: openclaw/openclaw
cluster_id: gitcrawl-871-bulk-plan-20260615-a
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
  - "#76092"
candidates:
  - "#76092"
  - "#82290"
cluster_refs:
  - "#76092"
  - "#82290"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#82290"
canonical_hint: "gitcrawl representative #76092 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 871 on 2026-06-15. Security-signal refs #82290 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 871

Generated from local gitcrawl run cluster 871 for `openclaw/openclaw`.

Display title:

> fix(daemon): prefer bundled node for gateway service

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- security-signal refs requiring route_security: #82290
- representative: #76092, currently open in local store
- latest member update: 2026-06-14T04:46:07.404424Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #76092 fix(daemon): prefer bundled node for gateway service
- #82290 [security-signal] fix(gateway): support pinned daemon runtime paths
