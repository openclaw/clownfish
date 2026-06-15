---
repo: openclaw/openclaw
cluster_id: gitcrawl-94-bulk-plan-20260615-a
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
  - "#92288"
candidates:
  - "#74403"
  - "#75040"
  - "#75085"
  - "#75350"
  - "#92288"
cluster_refs:
  - "#74403"
  - "#75040"
  - "#75085"
  - "#75350"
  - "#92288"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#92288"
canonical_hint: "gitcrawl representative #92288 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 94 on 2026-06-15. Security-signal refs #92288 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 94

Generated from local gitcrawl run cluster 94 for `openclaw/openclaw`.

Display title:

> fix(agents): quiet extra_body tuning-key collisions

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 5
- security-signal refs requiring route_security: #92288
- representative: #92288, currently open in local store
- latest member update: 2026-06-14T04:46:06.506018Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74403 fix(deepseek): strip reasoning_content when extra_body disables thinking
- #75040 [Bug]: extra_body overwriting request payload keys: thinking — framework-level thinking field collision affecting all providers
- #75085 fix(agents): preserve compaction summary extra params
- #75350 fix(deepseek): strip reasoning_content from input messages when thinking is enabled
- #92288 [security-signal] fix(agents): quiet extra_body tuning-key collisions
