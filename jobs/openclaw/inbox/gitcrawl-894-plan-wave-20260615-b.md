---
repo: openclaw/openclaw
cluster_id: gitcrawl-894-plan-wave-20260615-b
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
  - "#80667"
candidates:
  - "#80667"
  - "#81039"
cluster_refs:
  - "#80667"
  - "#81039"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #80667 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 894 on 2026-06-15."
---

# Gitcrawl Cluster 894

Generated from local gitcrawl run cluster 894 for `openclaw/openclaw`.

Display title:

> trajectory.jsonl never written for pure claude-cli sessions (recordEvent only wired into selection-* dispatch path)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #80667, currently open in local store
- latest member update: 2026-06-14T04:46:07.345922Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #80667 trajectory.jsonl never written for pure claude-cli sessions (recordEvent only wired into selection-* dispatch path)
- #81039 fix(cli-runner): emit trajectory events from CLI executor path
