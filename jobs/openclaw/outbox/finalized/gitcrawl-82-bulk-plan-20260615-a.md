---
repo: openclaw/openclaw
cluster_id: gitcrawl-82-bulk-plan-20260615-a
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
  - "#77653"
candidates:
  - "#55691"
  - "#66478"
  - "#77653"
  - "#83517"
  - "#83531"
cluster_refs:
  - "#55691"
  - "#66478"
  - "#77653"
  - "#83517"
  - "#83531"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#34528"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#83517"
  - "#83531"
canonical_hint: "gitcrawl representative #77653 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 82 on 2026-06-15. Security-signal refs #83517, #83531 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #34528 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 82

Generated from local gitcrawl run cluster 82 for `openclaw/openclaw`.

Display title:

> fix(feishu): normalize reaction message IDs for API calls

Cluster shape from gitcrawl:

- total members: 6
- issues: 2
- pull requests: 4
- open candidates in local store: 5
- excluded existing-overlap refs: #34528
- security-signal refs requiring route_security: #83517, #83531
- representative: #77653, currently open in local store
- latest member update: 2026-06-14T04:46:07.110052Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #55691 Feature Request: Support message recall/edit events to cancel running tasks
- #66478 fix(feishu): normalize unicode emojis to Feishu emoji type strings for reactions API (#66406)
- #77653 fix(feishu): normalize reaction message IDs for API calls
- #83517 [security-signal] feat(feishu): add agent message delete and recall
- #83531 [security-signal] feat(feishu): expose reaction tool

Existing-overlap context refs:

- #34528 Feishu: reaction message_id with suffix causes 400 error on API calls
