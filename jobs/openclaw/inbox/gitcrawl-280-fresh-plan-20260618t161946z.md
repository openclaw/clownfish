---
repo: openclaw/openclaw
cluster_id: gitcrawl-280-fresh-plan-20260618t161946z
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
  - "#78904"
cluster_refs:
  - "#78904"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#72253"
  - "#79044"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #79044 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 280 on 2026-06-18. Existing-overlap refs #72253, #79044 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 280

Generated from local gitcrawl run cluster 280 for `openclaw/openclaw`.

Display title:

> fix(status): clarify heartbeat cadence source

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #72253, #79044
- representative: #79044, currently open in local store
- latest member update: 2026-06-18T16:17:08.287007Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #78904 openclaw status reports Heartbeat 1h while actual native heartbeat delivery is 30m

Existing-overlap context refs:

- #72253 [security-signal] fix(heartbeat): keep benign exec completions internal
- #79044 [security-signal] fix(status): clarify heartbeat cadence source
