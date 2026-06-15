---
repo: openclaw/openclaw
cluster_id: gitcrawl-172-bulk-plan-20260615-a
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
  - "#79478"
candidates:
  - "#57552"
  - "#73948"
  - "#79478"
cluster_refs:
  - "#57552"
  - "#73948"
  - "#79478"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#43469"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#57552"
canonical_hint: "gitcrawl representative #79478 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 172 on 2026-06-15. Security-signal refs #57552 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #43469 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 172

Generated from local gitcrawl run cluster 172 for `openclaw/openclaw`.

Display title:

> fix(security): flag sensitive skill markdown network sends

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 3
- excluded existing-overlap refs: #43469
- security-signal refs requiring route_security: #57552
- representative: #79478, currently open in local store
- latest member update: 2026-06-14T04:46:07.52171Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57552 [security-signal] Proposal: Enhance security audit to include `skill.md` for better risk detection
- #73948 fix(security): align audit symlink_escape boundary with skill loader
- #79478 fix(security): flag sensitive skill markdown network sends

Existing-overlap context refs:

- #43469 [security-signal] security: scan markdown skill definitions for injection threats
