---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-842-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610225038"
workflow_run_id: "27610225038"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610225038"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.491Z"
canonical: "https://github.com/openclaw/openclaw/issues/73676"
canonical_issue: "https://github.com/openclaw/openclaw/issues/73676"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-842-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610225038](https://github.com/openclaw/clownfish/actions/runs/27610225038)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/73676

## Summary

Hydrated preflight keeps #73676 as the open canonical issue. There are no open duplicate candidates to close in this cluster; #74994 is an already-closed security-sensitive linked PR and is routed only to central security handling. #83875 is already merged/closed context and remains historical related evidence. Fix and merge work are not allowed by this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #73676 | keep_canonical | planned | canonical | #73676 remains the best live canonical item for the deleted-cwd CLI crash. The job forbids fix/raise_pr/merge, so the canonical issue should stay open for follow-up. |
| #74994 | route_security | planned | security_sensitive | Security-sensitive linked PRs are outside Clownfish backlog mutation and should be routed to central OpenClaw security handling without blocking the unrelated canonical issue classification. |
| #83875 | keep_closed | skipped | related | Already-closed merged related context; no mutation is allowed or needed. |

## Needs Human

- none
