---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-233-bulk-plan-20260615-a"
mode: "plan"
run_id: "27525955160"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525955160"
head_sha: "4574037aa1f27e59d5ea43eca0073b4c4dfc504c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:29:00.259Z"
canonical: "#87980"
canonical_issue: "#87980"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-233-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525955160](https://github.com/openclaw/clownfish/actions/runs/27525955160)

Workflow conclusion: success

Worker result: planned

Canonical: #87980

## Summary

Read-only plan: no closures, labels, merges, or fix PRs are planned. #87980 is the only open actionable job candidate and should remain open as the live canonical for its own exec redirect corruption report. #75244 is already closed and must not receive a close action. Existing-overlap #53408 remains open but is context owned by another job, and the hydrated linked refs show separate subclusters rather than one duplicate family.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48780 | route_security | planned | security_sensitive | Security-sensitive linked ref must be routed to central OpenClaw security handling without affecting unrelated non-security classification. |
| #53408 | keep_related | skipped | related | Already owned by an existing overlapping job; do not mutate or reassign it in this cluster. |
| #69423 | keep_closed | skipped | independent | Closed historical context only; no closure action is valid. |
| #70033 | keep_closed | skipped | related | Already closed; no duplicate closeout is valid in this plan. |
| #75244 | keep_closed | skipped | independent | Already closed candidate; keep closed and do not emit any close action. |
| #87387 | keep_independent | planned | independent | Separate linked subcluster; do not close or merge as part of this job. |
| #87649 | keep_related | planned | related | Related to a separate WebChat subcluster, not to the tool parameter loss or exec redirect candidate family. |
| #87875 | keep_closed | skipped | related | Closed historical context only; no closure action is valid. |
| #87980 | keep_canonical | planned | canonical | Best live actionable canonical for the exec redirect corruption subcluster; keep open for maintainer review rather than closing as a duplicate. |

## Needs Human

- none
