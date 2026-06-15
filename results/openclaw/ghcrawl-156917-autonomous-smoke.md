---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156917-autonomous-smoke"
mode: "autonomous"
run_id: "27584189396"
workflow_run_id: "27584189396"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584189396"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:59:12.388Z"
canonical: "https://github.com/openclaw/openclaw/issues/67777"
canonical_issue: "https://github.com/openclaw/openclaw/issues/67777"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156917-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584189396](https://github.com/openclaw/clownfish/actions/runs/27584189396)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/67777

## Summary

Canonical shifted from closed #65000 to open #67777. The hydrated artifact and current main show the direct-delivery loss window has partial fixes, but the restore/resume orphan-prune path can still remove a pending completion delivery before replay. #68464 and #85716 are security-routed, and #85770 is related but distinct heartbeat replay work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #65000 | keep_closed | skipped | superseded | Closed historical context only; keep closed as superseded by #67777. |
| #66683 | keep_closed | skipped | fixed_by_candidate | Closed implemented context; no mutation planned. |
| #67777 | keep_canonical | planned | canonical | Best live canonical issue for the remaining durable subagent completion redelivery bug. |
| #68464 | route_security | planned | security_sensitive | Security-sensitive linked PR must be routed to central OpenClaw security handling, not mutated or closed by Clownfish backlog automation. |
| #75462 | keep_closed | skipped | superseded | Closed superseded PR with landed credited main commit; historical evidence only. |
| #85716 | route_security | planned | security_sensitive | Security-sensitive linked PR must be routed to central OpenClaw security handling, not mutated by Clownfish backlog automation. |
| #85770 | keep_related | planned | related | Related but independent follow-up PR; do not close or merge in this cluster. |
| cluster:ghcrawl-156917-autonomous-smoke | fix_needed | planned |  | A narrow new fix is needed for the remaining #67777 restore/orphan-prune delivery preservation gap. |
| cluster:ghcrawl-156917-autonomous-smoke | build_fix_artifact | planned |  | Fix artifact is allowed by job frontmatter and keeps the repair narrow enough for autonomous execution. |

## Needs Human

- none
