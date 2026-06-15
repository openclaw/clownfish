---
repo: openclaw/openclaw
cluster_id: gitcrawl-317-bulk-plan-20260615-a
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
  - "#83893"
candidates:
  - "#83893"
  - "#88085"
  - "#91193"
cluster_refs:
  - "#83893"
  - "#88085"
  - "#91193"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#91193"
canonical_hint: "gitcrawl representative #83893 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 317 on 2026-06-15. Security-signal refs #91193 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 317

Generated from local gitcrawl run cluster 317 for `openclaw/openclaw`.

Display title:

> Non-public Commander rawArgs property accessed via unsafe cast

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #91193
- representative: #83893, currently open in local store
- latest member update: 2026-06-14T04:46:07.352195Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #83893 Non-public Commander rawArgs property accessed via unsafe cast
- #88085 fix(cli): guard against commander rawArgs API drift in action reparse
- #91193 [security-signal] fix(cli): document Commander rawArgs internal API dependency in action-reparse.ts
