---
repo: openclaw/openclaw
cluster_id: gitcrawl-636-plan-wave-20260615-a
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
  - "#90556"
candidates:
  - "#90556"
  - "#91132"
cluster_refs:
  - "#90556"
  - "#91132"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #90556 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 636 on 2026-06-15."
---

# Gitcrawl Cluster 636

Generated from local gitcrawl run cluster 636 for `openclaw/openclaw`.

Display title:

> Chat UI: Display response latency under each message

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #90556, currently open in local store
- latest member update: 2026-06-14T04:46:05.364738Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90556 Chat UI: Display response latency under each message
- #91132 feat(gateway): add first-output and completed latency phases to chat.send_timing
