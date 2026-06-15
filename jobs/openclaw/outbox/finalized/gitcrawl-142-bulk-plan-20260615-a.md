---
repo: openclaw/openclaw
cluster_id: gitcrawl-142-bulk-plan-20260615-a
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
  - "#91739"
candidates:
  - "#91739"
  - "#92072"
  - "#92526"
  - "#92763"
cluster_refs:
  - "#91739"
  - "#92072"
  - "#92526"
  - "#92763"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#92072"
canonical_hint: "gitcrawl representative #91739 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 142 on 2026-06-15. Security-signal refs #92072 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 142

Generated from local gitcrawl run cluster 142 for `openclaw/openclaw`.

Display title:

> google-gemini-cli rejects image attachments before CLI image prestage

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- security-signal refs requiring route_security: #92072
- representative: #91739, currently open in local store
- latest member update: 2026-06-14T04:46:04.801414Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91739 google-gemini-cli rejects image attachments before CLI image prestage
- #92072 [security-signal] fix(gateway): treat `google-gemini-cli` Gemini models as image-capable
- #92526 fix(gateway): treat google-gemini-cli Gemini models as image-capable (fixes #91739)
- #92763 fix(gateway): add google-gemini-cli image capability fallback for stale catalog rows
