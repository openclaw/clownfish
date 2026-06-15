---
repo: openclaw/openclaw
cluster_id: gitcrawl-35-bulk-plan-20260615-a
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
  - "#90766"
candidates:
  - "#61242"
  - "#73746"
  - "#74131"
  - "#84157"
  - "#90444"
  - "#90505"
  - "#90766"
  - "#90817"
  - "#91611"
  - "#91668"
  - "#92285"
  - "#92301"
  - "#92346"
  - "#92454"
  - "#92697"
cluster_refs:
  - "#61242"
  - "#73746"
  - "#74131"
  - "#84157"
  - "#90444"
  - "#90505"
  - "#90766"
  - "#90817"
  - "#91611"
  - "#91668"
  - "#92285"
  - "#92301"
  - "#92346"
  - "#92454"
  - "#92697"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#67946"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#61242"
  - "#84157"
  - "#90817"
  - "#91611"
canonical_hint: "gitcrawl representative #90766 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 35 on 2026-06-15. Security-signal refs #61242, #84157, #90817, #91611 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #67946 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 35

Generated from local gitcrawl run cluster 35 for `openclaw/openclaw`.

Display title:

> [Bug]: orphan recovery can resurrect stale subagent runs after long downtime

Cluster shape from gitcrawl:

- total members: 16
- issues: 3
- pull requests: 13
- open candidates in local store: 15
- excluded existing-overlap refs: #67946
- security-signal refs requiring route_security: #61242, #84157, #90817, #91611
- representative: #90766, currently open in local store
- latest member update: 2026-06-14T04:46:06.648095Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #61242 [security-signal] Improve managed child-task flow UX for long-running tasks
- #73746 feat(tasks): improve task state transitions and lifecycle formatting
- #74131 fix(agents): harden subagent lifecycle calls against transient gateway readiness failures
- #84157 [security-signal] fix(sessions): heal stale running rows on abort no-active-run and restart
- #90444 Bug: killed subagent run can leave task_runs stuck in running, with tasks cancel and maintenance unable to clear it
- #90505 fix(agents): finalize killed subagent task rows via maintenance to avoid kill-vs-complete race
- #90766 [Bug]: orphan recovery can resurrect stale subagent runs after long downtime
- #90817 [security-signal] fix(agents): apply stale-run liveness check to aborted subagent orphan recovery
- #91611 [security-signal] fix(agents): reconcile stale restart-aborted subagent runs instead of resurrecting them (fixes #90766)
- #91668 fix(agents): skip stale orphaned subagent sessions during restart recovery
- #92285 [Bug]: Parent subagent task and TaskFlow remain stale_running after child becomes lost
- #92301 #92285: fix: reconcile orphaned managed flows when all child tasks are terminal
- #92346 fix(agents): retire stale aborted subagent runs past the staleness window in orphan recovery (fixes #90766)
- #92454 fix(tasks): reconcile stale subagent tasks when backing CLI child is terminal (fixes #92285)
- #92697 feat(sessions): surface blocked and stale session run statuses

Existing-overlap context refs:

- #67946 Clear stale subagent lineage on top-level sessions
