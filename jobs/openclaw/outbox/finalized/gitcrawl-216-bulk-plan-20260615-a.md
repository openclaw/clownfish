---
repo: openclaw/openclaw
cluster_id: gitcrawl-216-bulk-plan-20260615-a
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
  - "#92044"
candidates:
  - "#77807"
  - "#92044"
  - "#92066"
cluster_refs:
  - "#77807"
  - "#92044"
  - "#92066"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#77807"
  - "#92044"
canonical_hint: "gitcrawl representative #92044 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 216 on 2026-06-15. Security-signal refs #77807, #92044 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 216

Generated from local gitcrawl run cluster 216 for `openclaw/openclaw`.

Display title:

> [Bug]: `openclaw workboard dispatch` fails with `missing scope: operator.admin` though the method is registered operator.write

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- security-signal refs requiring route_security: #77807, #92044
- representative: #92044, currently open in local store
- latest member update: 2026-06-14T04:46:06.341764Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77807 [security-signal] [Bug]: sessions_spawn fails with missing scope operator.write despite full-scope operator token
- #92044 [security-signal] [Bug]: `openclaw workboard dispatch` fails with `missing scope: operator.admin` though the method is registered operator.write
- #92066 fix(workboard): let gateway resolve dispatch scopes
