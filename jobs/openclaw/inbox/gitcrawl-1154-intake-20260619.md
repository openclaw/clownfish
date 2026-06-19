---
repo: openclaw/openclaw
cluster_id: gitcrawl-1154-intake-20260619
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
  - "#94555"
candidates:
  - "#94555"
cluster_refs:
  - "#94555"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#94562"
  - "#94568"
  - "#94601"
  - "#94617"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #94555 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1154 on 2026-06-19. Existing-overlap refs #94562, #94568, #94601, #94617 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1154

Generated from local gitcrawl run cluster 1154 for `openclaw/openclaw`.

Display title:

> Bug: `openclaw workboard list` CLI does not filter archived cards (CLI/API inconsistency)

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 1
- excluded existing-overlap refs: #94562, #94568, #94601, #94617
- representative: #94555, currently open in local store
- latest member update: 2026-06-18T16:17:06.545094Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94555 Bug: `openclaw workboard list` CLI does not filter archived cards (CLI/API inconsistency)

Existing-overlap context refs:

- #94562 fix(workboard): hide archived cards in CLI list by default
- #94568 fix(workboard): filter archived cards from CLI list output
- #94601 fix(workboard): filter archived cards in CLI list by default
- #94617 fix(workboard): hide archived cards from CLI list by default, matching API tool behavior
