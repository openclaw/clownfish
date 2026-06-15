---
repo: openclaw/openclaw
cluster_id: gitcrawl-128-bulk-plan-20260615-a
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
  - "#63919"
candidates:
  - "#37131"
  - "#63919"
  - "#79106"
  - "#85664"
cluster_refs:
  - "#37131"
  - "#63919"
  - "#79106"
  - "#85664"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#63919"
  - "#79106"
  - "#85664"
canonical_hint: "gitcrawl representative #63919 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 128 on 2026-06-15. Security-signal refs #63919, #79106, #85664 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 128

Generated from local gitcrawl run cluster 128 for `openclaw/openclaw`.

Display title:

> feat(gateway): wire coding tools into /tools/invoke HTTP surface

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- security-signal refs requiring route_security: #63919, #79106, #85664
- representative: #63919, currently open in local store
- latest member update: 2026-06-14T04:46:05.964177Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #37131 [Feature]: Invoke tools directly without LLM round-trip
- #63919 [security-signal] feat(gateway): wire coding tools into /tools/invoke HTTP surface
- #79106 [security-signal] feat(gateway): expose exec via /tools/invoke when explicitly allowlisted
- #85664 [security-signal] feat(gateway): wire read coding tool into HTTP /tools/invoke (narrow)
