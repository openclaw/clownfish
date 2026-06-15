---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-291-plan-wave-20260615-a"
mode: "plan"
run_id: "27518795985"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27518795985"
head_sha: "bde7630054b9beb03f7c7699a1f6d7426b906c50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.126Z"
canonical: "#87346"
canonical_issue: "#87329"
canonical_pr: "#87346"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-291-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27518795985](https://github.com/openclaw/clownfish/actions/runs/27518795985)

Workflow conclusion: success

Worker result: planned

Canonical: #87346

## Summary

All hydrated refs are already closed in the preflight artifact. The former canonical issue #87329 was closed after the merged #87346 fix; #88687 was closed after maintainer verification found its metadata change would drop the only assistant answer from replay. No GitHub mutation is planned in plan mode.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #87329 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action is valid. Treat the issue as fixed by the merged #87346 path. |
| #87346 | keep_closed | skipped | canonical | This is the landed canonical fix for the #87329 root cause, but it is already merged and closed, so no mutation is planned. |
| #88687 | keep_closed | skipped | superseded | Already closed after maintainer rejection and superseded by the merged #87346 fix path; no close action is valid. |
| #77839 | keep_closed | skipped | related | Already merged historical context; keep closed as related evidence only. |
| #83635 | keep_closed | skipped | related | Already merged related transcript fix; no mutation is valid. |
| #88025 | keep_closed | skipped | superseded | Already closed as superseded by other replay classifier/recovery work; keep as historical related context only. |

## Needs Human

- none
