---
repo: openclaw/openclaw
cluster_id: gitcrawl-147-fresh-plan-20260618t161946z
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
  - "#90982"
candidates:
  - "#90982"
cluster_refs:
  - "#90982"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#91002"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #90982 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 147 on 2026-06-18. Existing-overlap refs #91002 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 147

Generated from local gitcrawl run cluster 147 for `openclaw/openclaw`.

Display title:

> [Bug]: TUI hides tool-call validation errors behind "run aborted" — root cause only visible in gateway log

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #91002
- representative: #90982, currently open in local store
- latest member update: 2026-06-18T16:17:08.526827Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90982 [Bug]: TUI hides tool-call validation errors behind "run aborted" — root cause only visible in gateway log

Existing-overlap context refs:

- #91002 [security-signal] fix(tui): show last tool-error summary on aborted runs
