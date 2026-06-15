---
repo: openclaw/openclaw
cluster_id: gitcrawl-282-plan-wave-20260615-a
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
  - "#88147"
candidates:
  - "#88147"
  - "#88148"
  - "#88150"
cluster_refs:
  - "#88147"
  - "#88148"
  - "#88150"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #88147 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 282 on 2026-06-15."
---

# Gitcrawl Cluster 282

Generated from local gitcrawl run cluster 282 for `openclaw/openclaw`.

Display title:

> Gateway heap pressure from oversized session-store hydration

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- representative: #88147, currently open in local store
- latest member update: 2026-06-14T04:46:06.625263Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #88147 Gateway heap pressure from oversized session-store hydration
- #88148 Gateway memory pressure from unbounded bootstrap-cache retention
- #88150 fix(config): cap runtime session-store cache retention
