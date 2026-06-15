---
repo: openclaw/openclaw
cluster_id: gitcrawl-799-plan-wave-20260615-b
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
  - "#77822"
candidates:
  - "#77822"
  - "#78075"
cluster_refs:
  - "#77822"
  - "#78075"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #77822 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 799 on 2026-06-15."
---

# Gitcrawl Cluster 799

Generated from local gitcrawl run cluster 799 for `openclaw/openclaw`.

Display title:

> Plugin architecture: register() called multiple times causes closure variables not shared (affects @mem0/openclaw-mem0)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #77822, currently open in local store
- latest member update: 2026-06-14T04:46:06.691857Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77822 Plugin architecture: register() called multiple times causes closure variables not shared (affects @mem0/openclaw-mem0)
- #78075 fix: preserve plugin hook and tool closure state
