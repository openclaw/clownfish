---
repo: openclaw/openclaw
cluster_id: gitcrawl-223-bulk-plan-20260615-a
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
  - "#91893"
candidates:
  - "#91893"
  - "#91907"
  - "#92570"
cluster_refs:
  - "#91893"
  - "#91907"
  - "#92570"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#91907"
canonical_hint: "gitcrawl representative #91893 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 223 on 2026-06-15. Security-signal refs #91907 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 223

Generated from local gitcrawl run cluster 223 for `openclaw/openclaw`.

Display title:

> test-env.ts: copyDirIfExists copies multi-GB browser cache causing ENOSPC in live tests

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #91907
- representative: #91893, currently open in local store
- latest member update: 2026-06-14T04:46:04.640045Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91893 test-env.ts: copyDirIfExists copies multi-GB browser cache causing ENOSPC in live tests
- #91907 [security-signal] fix(test): skip live auth browser caches
- #92570 fix(test): exclude browser cache and profile directories from live auth staging (fixes #91893)
