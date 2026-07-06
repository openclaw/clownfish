---
repo: openclaw/openclaw
cluster_id: gitcrawl-296-plan-wave-20260615-a
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
  - "#74038"
candidates:
  - "#74020"
  - "#74038"
  - "#90085"
cluster_refs:
  - "#74020"
  - "#74038"
  - "#90085"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #74038 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 296 on 2026-06-15."
---

# Gitcrawl Cluster 296

Generated from local gitcrawl run cluster 296 for `openclaw/openclaw`.

Display title:

> fix(gateway): skip pricing bootstrap in replace mode

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #74038, currently open in local store
- latest member update: 2026-06-14T04:46:06.595307Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74020 Gateway startup: models.mode=replace should skip pricing fetches
- #74038 fix(gateway): skip pricing bootstrap in replace mode
- #90085 fix(gateway): guard model pricing metadata
