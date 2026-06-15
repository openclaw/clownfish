---
repo: openclaw/openclaw
cluster_id: gitcrawl-458-plan-wave-20260615-a
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
  - "#92360"
candidates:
  - "#92360"
  - "#92373"
cluster_refs:
  - "#92360"
  - "#92373"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #92360 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 458 on 2026-06-15."
---

# Gitcrawl Cluster 458

Generated from local gitcrawl run cluster 458 for `openclaw/openclaw`.

Display title:

> [Bug]: Persistent sessions corrupted by stale thinking blocks — provider rejects all subsequent turns

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #92360, currently open in local store
- latest member update: 2026-06-14T04:46:04.252296Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92360 [Bug]: Persistent sessions corrupted by stale thinking blocks — provider rejects all subsequent turns
- #92373 fix(anthropic): strip thinking blocks from history when thinking is disabled (fixes #92360)
