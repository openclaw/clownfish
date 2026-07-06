---
repo: openclaw/openclaw
cluster_id: gitcrawl-291-plan-wave-20260615-a
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
  - "#87329"
candidates:
  - "#87329"
  - "#87346"
  - "#88687"
cluster_refs:
  - "#87329"
  - "#87346"
  - "#88687"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #87329 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 291 on 2026-06-15."
---

# Gitcrawl Cluster 291

Generated from local gitcrawl run cluster 291 for `openclaw/openclaw`.

Display title:

> Bug: Subagent announce-delivery echo messages inherit wrong provider/model metadata, causing persistent "thinking blocks cannot be modified" errors after gateway restart

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #87329, currently open in local store
- latest member update: 2026-06-14T04:46:06.45144Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87329 Bug: Subagent announce-delivery echo messages inherit wrong provider/model metadata, causing persistent "thinking blocks cannot be modified" errors after gateway restart
- #87346 fix(anthropic): merge consecutive assistant turns in turn validation
- #88687 Tag embedded subagent gap-fill rows as delivery mirrors
