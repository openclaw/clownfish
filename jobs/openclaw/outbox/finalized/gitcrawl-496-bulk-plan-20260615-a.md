---
repo: openclaw/openclaw
cluster_id: gitcrawl-496-bulk-plan-20260615-a
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
  - "#47668"
candidates:
  - "#47668"
cluster_refs:
  - "#47668"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#70605"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #47668 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 496 on 2026-06-15. Existing-overlap refs #70605 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 496

Generated from local gitcrawl run cluster 496 for `openclaw/openclaw`.

Display title:

> Context/memory accumulates too quickly causing frequent session resets

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #70605
- representative: #47668, currently open in local store
- latest member update: 2026-06-14T04:46:04.458608Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #47668 Context/memory accumulates too quickly causing frequent session resets

Existing-overlap context refs:

- #70605 BUG: Strip strikethrough text from context files before sending to model
