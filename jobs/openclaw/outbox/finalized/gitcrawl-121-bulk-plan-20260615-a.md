---
repo: openclaw/openclaw
cluster_id: gitcrawl-121-bulk-plan-20260615-a
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
  - "#83244"
candidates:
  - "#72535"
  - "#77802"
  - "#83244"
cluster_refs:
  - "#72535"
  - "#77802"
  - "#83244"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#68664"
  - "#68685"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#83244"
canonical_hint: "gitcrawl representative #83244 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 121 on 2026-06-15. Security-signal refs #83244 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #68664, #68685 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 121

Generated from local gitcrawl run cluster 121 for `openclaw/openclaw`.

Display title:

> fix(config): tolerate unknown metadata keys

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 3
- excluded existing-overlap refs: #68664, #68685
- security-signal refs requiring route_security: #83244
- representative: #83244, currently open in local store
- latest member update: 2026-06-14T04:46:07.189586Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #72535 fix(config): add actionable hints to version-mismatch warning on downgrade
- #77802 doctor --fix fails atomically when config has multiple validation errors, preventing fixes from persisting
- #83244 [security-signal] fix(config): tolerate unknown metadata keys

Existing-overlap context refs:

- #68664 [Bug]: Config Migration Order Causes Service Failure on Schema Changes
- #68685 [security-signal] fix(config): strip obsolete memorySearch keys before schema validation (#68664)
