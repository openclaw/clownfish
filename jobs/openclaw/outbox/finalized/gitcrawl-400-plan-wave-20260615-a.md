---
repo: openclaw/openclaw
cluster_id: gitcrawl-400-plan-wave-20260615-a
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
  - "#91772"
candidates:
  - "#91772"
  - "#91786"
cluster_refs:
  - "#91772"
  - "#91786"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #91772 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 400 on 2026-06-15."
---

# Gitcrawl Cluster 400

Generated from local gitcrawl run cluster 400 for `openclaw/openclaw`.

Display title:

> plugins install fails with npm EOVERRIDE: shipped pnpm-workspace.yaml overrides conflict with stale managed peer pins (2026.6.5)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #91772, currently open in local store
- latest member update: 2026-06-14T04:46:04.700038Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91772 plugins install fails with npm EOVERRIDE: shipped pnpm-workspace.yaml overrides conflict with stale managed peer pins (2026.6.5)
- #91786 fix(plugins): reconcile managed npm root overrides with managed peer pins
