---
repo: openclaw/openclaw
cluster_id: gitcrawl-429-plan-wave-20260615-a
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
  - "#85844"
candidates:
  - "#85844"
  - "#85852"
cluster_refs:
  - "#85844"
  - "#85852"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #85844 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 429 on 2026-06-15."
---

# Gitcrawl Cluster 429

Generated from local gitcrawl run cluster 429 for `openclaw/openclaw`.

Display title:

> Auto-update can leave running gateway with stale hashed bundle imports

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #85844, currently open in local store
- latest member update: 2026-06-14T04:46:07.079757Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #85844 Auto-update can leave running gateway with stale hashed bundle imports
- #85852 v2026.5.20 still requires local stability hotfixes after auto-update
