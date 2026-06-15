---
repo: openclaw/openclaw
cluster_id: gitcrawl-238-bulk-plan-20260615-a
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
  - "#91283"
candidates:
  - "#91283"
  - "#91286"
  - "#91288"
cluster_refs:
  - "#91283"
  - "#91286"
  - "#91288"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#91286"
  - "#91288"
canonical_hint: "gitcrawl representative #91283 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238 on 2026-06-15. Security-signal refs #91286, #91288 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 238

Generated from local gitcrawl run cluster 238 for `openclaw/openclaw`.

Display title:

> minSecurity inverted — security="full" session override clamped to "allowlist" by agent config

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #91286, #91288
- representative: #91283, currently open in local store
- latest member update: 2026-06-14T04:46:05.032666Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91283 minSecurity inverted — security="full" session override clamped to "allowlist" by agent config
- #91286 [security-signal] fix: minSecurity order inverted — full should be least restrictive
- #91288 [security-signal] fix: minSecurity inverted security rank order (#91283)
