---
repo: openclaw/openclaw
cluster_id: gitcrawl-747-plan-wave-20260615-b
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
  - "#89264"
candidates:
  - "#89264"
  - "#91563"
cluster_refs:
  - "#89264"
  - "#91563"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #89264 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 747 on 2026-06-15."
---

# Gitcrawl Cluster 747

Generated from local gitcrawl run cluster 747 for `openclaw/openclaw`.

Display title:

> [Bug]: Dreaming deep promotion biased to stale 3-5 day old content; REM produces repetitive meta-themes; promotion gates bypassed via phase-signal boost

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #89264, currently open in local store
- latest member update: 2026-06-14T04:46:06.051213Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89264 [Bug]: Dreaming deep promotion biased to stale 3-5 day old content; REM produces repetitive meta-themes; promotion gates bypassed via phase-signal boost
- #91563 Dreaming deep phase: minUniqueQueries gate bypassed by day-diversity counting
