---
repo: openclaw/openclaw
cluster_id: gitcrawl-126-plan-ramp
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
  - "#92684"
candidates:
  - "#92684"
  - "#92691"
  - "#92692"
  - "#92731"
cluster_refs:
  - "#92684"
  - "#92691"
  - "#92692"
  - "#92731"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #92684 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 126 on 2026-06-14."
---

# Gitcrawl Cluster 126

Generated from local gitcrawl run cluster 126 for `openclaw/openclaw`.

Display title:

> doctor over-warns on an empty top-level groupAllowFrom despite populated per-account allowlists (2026.6.5)

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- representative: #92684, currently open in local store
- latest member update: 2026-06-14T04:46:03.857408Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92684 doctor over-warns on an empty top-level groupAllowFrom despite populated per-account allowlists (2026.6.5)
- #92691 fix(doctor): suppress false-positive empty-group-allowlist warning when all accounts have effective group allowlists
- #92692 fix(doctor): suppress false-positive group allowlist warning for parent-only channel records (#92684)
- #92731 fix(doctor): skip top-level group-allowlist scan when sub-accounts exist
