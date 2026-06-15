---
repo: openclaw/openclaw
cluster_id: gitcrawl-203-bulk-plan-20260615-a
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
  - "#74235"
candidates:
  - "#74235"
  - "#85837"
  - "#89790"
cluster_refs:
  - "#74235"
  - "#85837"
  - "#89790"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#74235"
canonical_hint: "gitcrawl representative #74235 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 203 on 2026-06-15. Security-signal refs #74235 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 203

Generated from local gitcrawl run cluster 203 for `openclaw/openclaw`.

Display title:

> fix(googlechat): preserve thread reply target through delivery

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- security-signal refs requiring route_security: #74235
- representative: #74235, currently open in local store
- latest member update: 2026-06-14T04:46:07.081447Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74235 [security-signal] fix(googlechat): preserve thread reply target through delivery
- #85837 fix(googlechat): auto-resolve room thread for group channel replies
- #89790 fix(googlechat): preserve thread targets through reply delivery
