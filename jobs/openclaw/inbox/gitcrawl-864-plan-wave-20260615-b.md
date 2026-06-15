---
repo: openclaw/openclaw
cluster_id: gitcrawl-864-plan-wave-20260615-b
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
  - "#86987"
candidates:
  - "#86987"
  - "#87064"
cluster_refs:
  - "#86987"
  - "#87064"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #86987 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 864 on 2026-06-15."
---

# Gitcrawl Cluster 864

Generated from local gitcrawl run cluster 864 for `openclaw/openclaw`.

Display title:

> [Bug]:  [Regression] Gateway 5.18+ shows empty Caps for all node versions on Windows/Docker

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #86987, currently open in local store
- latest member update: 2026-06-14T04:46:06.74803Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #86987 [Bug]:  [Regression] Gateway 5.18+ shows empty Caps for all node versions on Windows/Docker
- #87064 fix(issue): resolve #86987 [Bug]:  [Regression] Gateway 5.18+ shows empty Caps for all 
