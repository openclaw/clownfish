---
repo: openclaw/openclaw
cluster_id: gitcrawl-181-bulk-plan-20260615-a
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
canonical: []
candidates:
  - "#81471"
  - "#89184"
cluster_refs:
  - "#81471"
  - "#89184"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#47264"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#81471"
canonical_hint: "gitcrawl representative #47264 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 181 on 2026-06-15. Security-signal refs #81471 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #47264 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 181

Generated from local gitcrawl run cluster 181 for `openclaw/openclaw`.

Display title:

> LINE plugin: multi-account mode breaks webhook route registration (404)

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #47264
- security-signal refs requiring route_security: #81471
- representative: #47264, currently open in local store
- latest member update: 2026-06-14T04:46:05.859065Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81471 [security-signal] fix(line): load accounts.default and default-enable named accounts
- #89184 [Bug] LINE channel webhook returns 404 after v2026.5.28 update

Existing-overlap context refs:

- #47264 LINE plugin: multi-account mode breaks webhook route registration (404)
