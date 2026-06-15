---
repo: openclaw/openclaw
cluster_id: gitcrawl-718-bulk-plan-20260615-a
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
  - "#81312"
candidates:
  - "#81312"
  - "#90068"
cluster_refs:
  - "#81312"
  - "#90068"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90068"
canonical_hint: "gitcrawl representative #81312 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 718 on 2026-06-15. Security-signal refs #90068 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 718

Generated from local gitcrawl run cluster 718 for `openclaw/openclaw`.

Display title:

> fix(plugins): preserve bundled capability manifest contracts

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- security-signal refs requiring route_security: #90068
- representative: #81312, currently open in local store
- latest member update: 2026-06-14T04:46:05.850977Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81312 fix(plugins): preserve bundled capability manifest contracts
- #90068 [security-signal] fix(plugins): isolate bundled capability capture fields
