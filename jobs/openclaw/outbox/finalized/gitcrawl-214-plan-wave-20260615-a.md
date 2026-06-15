---
repo: openclaw/openclaw
cluster_id: gitcrawl-214-plan-wave-20260615-a
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
  - "#92102"
candidates:
  - "#74544"
  - "#92102"
  - "#92114"
cluster_refs:
  - "#74544"
  - "#92102"
  - "#92114"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #92102 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 214 on 2026-06-15."
---

# Gitcrawl Cluster 214

Generated from local gitcrawl run cluster 214 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw memory status shows "Vector store: unknown" despite working vectors (sqlite-vec lazy init in CLI fast path)

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- representative: #92102, currently open in local store
- latest member update: 2026-06-14T04:46:06.578736Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74544 [Bug]: openclaw memory status --deep hangs indefinitely while basic status reports vector ready
- #92102 [Bug]: openclaw memory status shows "Vector store: unknown" despite working vectors (sqlite-vec lazy init in CLI fast path)
- #92114 fix(memory): report indexed vector store in status
