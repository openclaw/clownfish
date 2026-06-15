---
repo: openclaw/openclaw
cluster_id: gitcrawl-136-plan-ramp
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
  - "#80499"
candidates:
  - "#80499"
  - "#84916"
  - "#90968"
  - "#91479"
cluster_refs:
  - "#80499"
  - "#84916"
  - "#90968"
  - "#91479"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #80499 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 136 on 2026-06-14."
---

# Gitcrawl Cluster 136

Generated from local gitcrawl run cluster 136 for `openclaw/openclaw`.

Display title:

> Fix Claude ACP config controls

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #80499, currently open in local store
- latest member update: 2026-06-14T04:46:07.213005Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #80499 Fix Claude ACP config controls
- #84916 [codex] Skip ACP timeout session config
- #90968 fix(acp): strip chat options for Claude ACP sessions
- #91479 fix(acp): preserve timeout progress summaries
