---
repo: openclaw/openclaw
cluster_id: gitcrawl-970-plan-wave-20260615-b
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
  - "#83877"
candidates:
  - "#83877"
  - "#92574"
cluster_refs:
  - "#83877"
  - "#92574"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #83877 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 970 on 2026-06-15."
---

# Gitcrawl Cluster 970

Generated from local gitcrawl run cluster 970 for `openclaw/openclaw`.

Display title:

> Broad CLI command surface has no test coverage

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #83877, currently open in local store
- latest member update: 2026-06-14T04:46:07.351897Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #83877 Broad CLI command surface has no test coverage
- #92574 test(browser): cover action-input CLI request bodies
