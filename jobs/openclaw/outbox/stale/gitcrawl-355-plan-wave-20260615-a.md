---
repo: openclaw/openclaw
cluster_id: gitcrawl-355-plan-wave-20260615-a
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
  - "#44253"
candidates:
  - "#44253"
  - "#59225"
cluster_refs:
  - "#44253"
  - "#59225"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #44253 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 355 on 2026-06-15."
---

# Gitcrawl Cluster 355

Generated from local gitcrawl run cluster 355 for `openclaw/openclaw`.

Display title:

> Per-agent tools.selfDeny — allow tool inheritance to subagents while denying direct use

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #44253, currently open in local store
- latest member update: 2026-06-14T04:46:04.676874Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44253 Per-agent tools.selfDeny — allow tool inheritance to subagents while denying direct use
- #59225 Feature: Per-agent tool schema parameter filtering (slim tool definitions for subagents)
