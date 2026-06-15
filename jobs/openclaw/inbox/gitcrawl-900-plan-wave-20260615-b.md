---
repo: openclaw/openclaw
cluster_id: gitcrawl-900-plan-wave-20260615-b
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
  - "#86827"
candidates:
  - "#86827"
  - "#89045"
cluster_refs:
  - "#86827"
  - "#89045"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #86827 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 900 on 2026-06-15."
---

# Gitcrawl Cluster 900

Generated from local gitcrawl run cluster 900 for `openclaw/openclaw`.

Display title:

> Group chat session stuck in 'failed' state silently drops all subsequent messages

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #86827, currently open in local store
- latest member update: 2026-06-14T04:46:06.936498Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #86827 Group chat session stuck in 'failed' state silently drops all subsequent messages
- #89045 fix: recover terminal session status on visible inbound turns
