---
repo: openclaw/openclaw
cluster_id: gitcrawl-245-bulk-plan-20260615-a
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
canonical: []
candidates:
  - "#78544"
cluster_refs:
  - "#78544"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#70024"
  - "#70056"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #70056 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 245 on 2026-06-15. Existing-overlap refs #70024, #70056 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 245

Generated from local gitcrawl run cluster 245 for `openclaw/openclaw`.

Display title:

> fix(gateway): clean up store and set running=false on stop timeout

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #70024, #70056
- representative: #70056, currently open in local store
- latest member update: 2026-06-14T04:46:06.545269Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #78544 fix(gateway): fail hot reload when channel stop times out

Existing-overlap context refs:

- #70024 Bug: channel stop timeout leaves channel permanently dead — running: true with stale store entries
- #70056 fix(gateway): clean up store and set running=false on stop timeout
