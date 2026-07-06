---
repo: openclaw/openclaw
cluster_id: gitcrawl-997-bulk-plan-20260615-a
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
  - "#76140"
cluster_refs:
  - "#76140"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#65374"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #65374 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 997 on 2026-06-15. Existing-overlap refs #65374 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 997

Generated from local gitcrawl run cluster 997 for `openclaw/openclaw`.

Display title:

> Bug: Built-in dreaming system contaminates agent identity in multi-agent setups

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #65374
- representative: #65374, currently open in local store
- latest member update: 2026-06-14T04:46:07.479661Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #76140 fix(memory): prevent cross-agent dreaming contamination (Bug #65374)

Existing-overlap context refs:

- #65374 Bug: Built-in dreaming system contaminates agent identity in multi-agent setups
