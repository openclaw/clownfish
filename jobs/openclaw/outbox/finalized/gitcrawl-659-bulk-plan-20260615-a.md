---
repo: openclaw/openclaw
cluster_id: gitcrawl-659-bulk-plan-20260615-a
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
  - "#90295"
candidates:
  - "#90295"
  - "#90407"
cluster_refs:
  - "#90295"
  - "#90407"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90407"
canonical_hint: "gitcrawl representative #90295 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 659 on 2026-06-15. Security-signal refs #90407 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 659

Generated from local gitcrawl run cluster 659 for `openclaw/openclaw`.

Display title:

> memory-lancedb 2026.6.1 fails to install: apache-arrow 21.1.0 conflicts with @lancedb/lancedb 0.30.0 peer range

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- security-signal refs requiring route_security: #90407
- representative: #90295, currently open in local store
- latest member update: 2026-06-14T04:46:05.465203Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90295 memory-lancedb 2026.6.1 fails to install: apache-arrow 21.1.0 conflicts with @lancedb/lancedb 0.30.0 peer range
- #90407 [security-signal] fix(memory-lancedb): align apache arrow peer dependency
