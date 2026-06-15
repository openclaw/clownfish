---
repo: openclaw/openclaw
cluster_id: gitcrawl-88-pr-backlog-plan-20260615-a
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
  - "#82548"
candidates:
  - "#38626"
  - "#50291"
  - "#55806"
  - "#79168"
  - "#82548"
  - "#87207"
cluster_refs:
  - "#38626"
  - "#50291"
  - "#55806"
  - "#79168"
  - "#82548"
  - "#87207"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#55806"
  - "#79168"
  - "#82548"
canonical_hint: "gitcrawl representative #82548 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 88 on 2026-06-15. Security-signal refs #55806, #79168, #82548 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 88

Generated from local gitcrawl run cluster 88 for `openclaw/openclaw`.

Display title:

> [Feature]: Add AI safety and quality observability events

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 6
- security-signal refs requiring route_security: #55806, #79168, #82548
- representative: #82548, currently open in local store
- latest member update: 2026-06-14T04:46:07.431147Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38626 Subagent lifecycle observability + async supervision controls
- #50291 Plugin Hooks: Missing trace context for observability (messageId, runId in all hooks, parentSpanId)
- #55806 [security-signal] Tool call observability: input sanitization, error categorization, and context writeback
- #79168 [security-signal] [Feature] Content-based prompt injection scanning on tool output
- #82548 [security-signal] [Feature]: Add AI safety and quality observability events
- #87207 [Feature]: agent_end (or new turn_end) hook payload should expose per-turn tool-call outcomes + completion_reason
