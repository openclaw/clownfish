---
repo: openclaw/openclaw
cluster_id: gitcrawl-200-bulk-plan-20260615-a
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
  - "#92361"
candidates:
  - "#92361"
  - "#92411"
  - "#92592"
cluster_refs:
  - "#92361"
  - "#92411"
  - "#92592"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#92592"
canonical_hint: "gitcrawl representative #92361 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 200 on 2026-06-15. Security-signal refs #92592 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 200

Generated from local gitcrawl run cluster 200 for `openclaw/openclaw`.

Display title:

> [Bug]:  Tool availability evaluator silently ignores empty `allOf`/`anyOf` groups during expression normalization

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #92592
- representative: #92361, currently open in local store
- latest member update: 2026-06-14T04:46:04.229792Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92361 [Bug]:  Tool availability evaluator silently ignores empty `allOf`/`anyOf` groups during expression normalization
- #92411 fix(tools): surface empty availability group diagnostics via onHiddenDiagnostic callback
- #92592 [security-signal]  [AI] fix(tools): warn when tool availability contains malformed empty allOf/anyOf
