---
repo: openclaw/openclaw
cluster_id: gitcrawl-255-bulk-plan-20260615-a
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
  - "#90531"
candidates:
  - "#90531"
  - "#90552"
  - "#90582"
cluster_refs:
  - "#90531"
  - "#90552"
  - "#90582"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90552"
canonical_hint: "gitcrawl representative #90531 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 255 on 2026-06-15. Security-signal refs #90552 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 255

Generated from local gitcrawl run cluster 255 for `openclaw/openclaw`.

Display title:

> Group chat session JSONL missing sender metadata (__openclaw / senderId)

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #90552
- representative: #90531, currently open in local store
- latest member update: 2026-06-14T04:46:05.399388Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90531 Group chat session JSONL missing sender metadata (__openclaw / senderId)
- #90552 [security-signal] fix(sessions): persist sender metadata in user turn transcript JSONL
- #90582 fix: persist sender metadata in group chat JSONL records
