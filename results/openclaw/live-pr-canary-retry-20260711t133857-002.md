---
repo: "openclaw/openclaw"
cluster_id: "live-pr-canary-retry-20260711T133857-002"
mode: "autonomous"
run_id: "29162234083"
workflow_run_id: "29162234083"
run_url: "https://github.com/openclaw/clownfish/actions/runs/29162234083"
head_sha: "610ad085235eb0bc3eff1b6ce18e3420542d1055"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-07-11T18:14:17.129Z"
canonical: "https://github.com/openclaw/openclaw/pull/104433"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/104433"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 1
needs_human_count: 0
---

# live-pr-canary-retry-20260711T133857-002

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/29162234083](https://github.com/openclaw/clownfish/actions/runs/29162234083)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/pull/104433

## Summary

#104433 is the canonical current-head canary PR for the OpenRouter Fusion model-ID UTF-16 truncation bug. It is small, open, non-draft, security-cleared by the artifact, and CI is green, but merge is blocked for the deterministic exact-head external merge preflight and fresh Codex /review required by the job before any merge recommendation can be applied.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | skipped |  |  | worker result status blocked is not executable |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #104433 | merge_candidate | skipped | canonical | action status is blocked |
| #104433 | merge_canonical | blocked | canonical | main changed during stale test merge branch refresh |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| 1 | apply | #104433 | merge_candidate | skipped | action status is blocked |
| 2 | apply | #104433 | merge_candidate | skipped | action status is blocked |
|  | external_merge_preflight | #104433 | merge_canonical | blocked | main changed during stale test merge branch refresh |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #104433 | merge_candidate | blocked | canonical | external_merge_preflight_required |

## Needs Human

- none
