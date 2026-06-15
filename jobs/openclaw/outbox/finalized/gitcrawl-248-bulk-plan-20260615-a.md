---
repo: openclaw/openclaw
cluster_id: gitcrawl-248-bulk-plan-20260615-a
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
  - "#90713"
candidates:
  - "#90713"
  - "#90719"
  - "#90882"
cluster_refs:
  - "#90713"
  - "#90719"
  - "#90882"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90719"
canonical_hint: "gitcrawl representative #90713 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 248 on 2026-06-15. Security-signal refs #90719 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 248

Generated from local gitcrawl run cluster 248 for `openclaw/openclaw`.

Display title:

> System prompt should instruct agent to read docs before answering self-knowledge questions

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #90719
- representative: #90713, currently open in local store
- latest member update: 2026-06-14T04:46:05.328598Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90713 System prompt should instruct agent to read docs before answering self-knowledge questions
- #90719 [security-signal] docs: add self-knowledge rule to system prompt
- #90882 fix: add self-knowledge docs rule to system prompt
