---
repo: openclaw/openclaw
cluster_id: gitcrawl-148-plan-ramp
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
  - "#89260"
candidates:
  - "#89232"
  - "#89260"
  - "#89282"
  - "#89514"
cluster_refs:
  - "#89232"
  - "#89260"
  - "#89282"
  - "#89514"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #89260 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 148 on 2026-06-14."
---

# Gitcrawl Cluster 148

Generated from local gitcrawl run cluster 148 for `openclaw/openclaw`.

Display title:

> fix(doctor): separate platform-incompatible skills from missing requirements

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- representative: #89260, currently open in local store
- latest member update: 2026-06-14T04:46:06.059809Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89232 [Bug]: openclaw doctor reports platform-incompatible skills (macOS-only / Linux-only) as 'missing requirements' on incompatible hosts
- #89260 fix(doctor): separate platform-incompatible skills from missing requirements
- #89282 fix: skip platform-incompatible skills in doctor warnings
- #89514 fix(doctor): exclude platform-incompatible skills from missing requirements
