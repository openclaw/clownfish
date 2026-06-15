---
repo: openclaw/openclaw
cluster_id: gitcrawl-430-plan-wave-20260615-a
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
  - "#39307"
candidates:
  - "#39307"
  - "#58830"
cluster_refs:
  - "#39307"
  - "#58830"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #39307 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 430 on 2026-06-15."
---

# Gitcrawl Cluster 430

Generated from local gitcrawl run cluster 430 for `openclaw/openclaw`.

Display title:

> feat: surface mid-thread context reset/compaction to users

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #39307, currently open in local store
- latest member update: 2026-06-14T04:46:07.012248Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39307 feat: surface mid-thread context reset/compaction to users
- #58830 [Feature]: Add user-visible and confirmable context compaction mechanisms
