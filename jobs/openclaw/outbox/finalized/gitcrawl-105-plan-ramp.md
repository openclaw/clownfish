---
repo: openclaw/openclaw
cluster_id: gitcrawl-105-plan-ramp
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
  - "#91697"
candidates:
  - "#91697"
  - "#91712"
  - "#91721"
  - "#92188"
  - "#92581"
cluster_refs:
  - "#91697"
  - "#91712"
  - "#91721"
  - "#92188"
  - "#92581"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #91697 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 105 on 2026-06-14."
---

# Gitcrawl Cluster 105

Generated from local gitcrawl run cluster 105 for `openclaw/openclaw`.

Display title:

> pruneDiagnosticSessionStates() does not clean up non-idle stale entries — ghost entries accumulate indefinitely after failed recovery

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 5
- representative: #91697, currently open in local store
- latest member update: 2026-06-14T04:46:04.818001Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91697 pruneDiagnosticSessionStates() does not clean up non-idle stale entries — ghost entries accumulate indefinitely after failed recovery
- #91712 fix(logging): prune non-idle stale diagnostic session entries
- #91721 fix(logging): prune non-idle stale diagnostic session states
- #92188 fix(logging): prune non-idle stale diagnostic session states (fixes #91697)
- #92581 fix(logging): prune stale non-idle diagnostic session states after fallback TTL (fixes #91697)
