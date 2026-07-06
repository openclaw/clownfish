---
repo: openclaw/openclaw
cluster_id: gitcrawl-321-bulk-plan-20260615-a
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
  - "#58067"
cluster_refs:
  - "#58067"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#47975"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #47975 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 321 on 2026-06-15. Existing-overlap refs #47975 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 321

Generated from local gitcrawl run cluster 321 for `openclaw/openclaw`.

Display title:

> Subagent sessions persist after completion, main session becomes unresponsive

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #47975
- representative: #47975, currently open in local store
- latest member update: 2026-06-14T04:46:04.733466Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #58067 [Bug]: Control UI frozen during sessions_yield + subagent wait — no progress indicator or streaming

Existing-overlap context refs:

- #47975 Subagent sessions persist after completion, main session becomes unresponsive
