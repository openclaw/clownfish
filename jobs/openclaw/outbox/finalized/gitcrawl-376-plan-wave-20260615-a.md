---
repo: openclaw/openclaw
cluster_id: gitcrawl-376-plan-wave-20260615-a
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
  - "#40001"
candidates:
  - "#40001"
  - "#77127"
cluster_refs:
  - "#40001"
  - "#77127"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #40001 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 376 on 2026-06-15."
---

# Gitcrawl Cluster 376

Generated from local gitcrawl run cluster 376 for `openclaw/openclaw`.

Display title:

> Write tool lacks append mode — isolated cron sessions destroy shared files

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #40001, currently open in local store
- latest member update: 2026-06-14T04:46:03.828549Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40001 Write tool lacks append mode — isolated cron sessions destroy shared files
- #77127 feat(tools/write): add append mode for agent writes
