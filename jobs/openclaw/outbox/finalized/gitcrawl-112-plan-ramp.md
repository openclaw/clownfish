---
repo: openclaw/openclaw
cluster_id: gitcrawl-112-plan-ramp
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
  - "#90890"
candidates:
  - "#90890"
  - "#90931"
  - "#90932"
  - "#91447"
  - "#91533"
cluster_refs:
  - "#90890"
  - "#90931"
  - "#90932"
  - "#91447"
  - "#91533"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #90890 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 112 on 2026-06-14."
---

# Gitcrawl Cluster 112

Generated from local gitcrawl run cluster 112 for `openclaw/openclaw`.

Display title:

> [Bug]: You cannot give an avatar to a specific agent in settings

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 5
- representative: #90890, currently open in local store
- latest member update: 2026-06-14T04:46:05.211686Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90890 [Bug]: You cannot give an avatar to a specific agent in settings
- #90931 fix(ui): scope local assistant avatar overrides per agent (#90890)
- #90932 fix(ui): scope local assistant avatar override to agent ID (fixes #90890)
- #91447 fix(ui): scope local assistant avatar override to agent ID (fixes #90890)
- #91533 fix(ui): scope avatar storage per agent ID
