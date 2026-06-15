---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-367-plan-wave-20260615-a"
mode: "plan"
run_id: "27518819572"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27518819572"
head_sha: "bde7630054b9beb03f7c7699a1f6d7426b906c50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.140Z"
canonical: "#92777"
canonical_issue: "#92777"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-367-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27518819572](https://github.com/openclaw/clownfish/actions/runs/27518819572)

Workflow conclusion: success

Worker result: planned

Canonical: #92777

## Summary

Classified the hydrated cluster in read-only plan mode. #92777 remains the live canonical issue for the WSL2/Ubuntu TUI backspace regression; #92818 is already closed and should not receive a closure action.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #92777 | keep_canonical | planned | canonical | #92777 is the only open surviving report and remains the best canonical path for reproduction, validation, and any future narrow fix. |
| #92818 | keep_closed | skipped | related | Already-closed PRs are historical evidence only. The canonical issue remains open for the unresolved behavior proof and follow-up path. |

## Needs Human

- none
