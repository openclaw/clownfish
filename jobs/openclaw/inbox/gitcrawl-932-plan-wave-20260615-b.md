---
repo: openclaw/openclaw
cluster_id: gitcrawl-932-plan-wave-20260615-b
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
  - "#77322"
candidates:
  - "#77322"
  - "#77339"
cluster_refs:
  - "#77322"
  - "#77339"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #77322 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 932 on 2026-06-15."
---

# Gitcrawl Cluster 932

Generated from local gitcrawl run cluster 932 for `openclaw/openclaw`.

Display title:

> [Bug]: session.model cache survives /new and ignores agents.defaults.model.primary changes, scope distinct from PR #69419

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #77322, currently open in local store
- latest member update: 2026-06-14T04:46:07.08627Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77322 [Bug]: session.model cache survives /new and ignores agents.defaults.model.primary changes, scope distinct from PR #69419
- #77339 fix(auto-reply): clear runtime model cache on reset
