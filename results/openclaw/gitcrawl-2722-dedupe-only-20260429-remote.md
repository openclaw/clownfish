---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2722-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134070812"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134070812"
head_sha: "d0688cc86ec05c840c9f64b264bd897e9b409ff3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.998Z"
canonical: "https://github.com/openclaw/openclaw/issues/46056"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46056"
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

# gitcrawl-2722-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134070812](https://github.com/openclaw/clownfish/actions/runs/25134070812)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46056

## Summary

Closed context refs #40478 and #43988 remain evidence only. #46056 is the current open canonical issue for the still-unresolved preconfigured shell-builtin allowlist behavior, so no close/comment/label mutation is planned.

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
| #40478 | keep_closed | skipped | related | Already closed and related only; closed context refs are evidence and must not receive close actions. |
| #43988 | keep_closed | skipped | related | Already closed and related only; no mutation is valid for this closed context ref. |
| #46056 | keep_canonical | planned | canonical | Open #46056 is the current canonical issue for the unresolved builtin allowlist behavior; it is not a duplicate of the closed allow-always persistence fixes. |

## Needs Human

- none
