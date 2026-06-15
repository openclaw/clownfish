---
repo: openclaw/openclaw
cluster_id: gitcrawl-984-plan-wave-20260615-b
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
  - "#83046"
candidates:
  - "#83046"
  - "#83048"
cluster_refs:
  - "#83046"
  - "#83048"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #83046 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 984 on 2026-06-15."
---

# Gitcrawl Cluster 984

Generated from local gitcrawl run cluster 984 for `openclaw/openclaw`.

Display title:

> fix(a2a): resolve direct/dm announce target from session key fallback

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #83046, currently open in local store
- latest member update: 2026-06-14T04:46:07.415439Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #83046 fix(a2a): resolve direct/dm announce target from session key fallback
- #83048 fix(a2a): resolve direct/dm announce target from session-key fallback
