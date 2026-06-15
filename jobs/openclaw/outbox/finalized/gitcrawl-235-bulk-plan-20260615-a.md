---
repo: openclaw/openclaw
cluster_id: gitcrawl-235-bulk-plan-20260615-a
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
  - "#91280"
candidates:
  - "#83440"
  - "#91280"
cluster_refs:
  - "#83440"
  - "#91280"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#53250"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#83440"
canonical_hint: "gitcrawl representative #91280 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 235 on 2026-06-15. Security-signal refs #83440 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #53250 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 235

Generated from local gitcrawl run cluster 235 for `openclaw/openclaw`.

Display title:

> fix(cli): add exec approval recovery guidance (Fixes #53250)

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 2
- excluded existing-overlap refs: #53250
- security-signal refs requiring route_security: #83440
- representative: #91280, currently open in local store
- latest member update: 2026-06-14T04:46:07.39311Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #83440 [security-signal] feat(cli): resolve pending exec approvals
- #91280 fix(cli): add exec approval recovery guidance (Fixes #53250)

Existing-overlap context refs:

- #53250 [UX] Exec approval timeout message should include Control UI link and setup hints
