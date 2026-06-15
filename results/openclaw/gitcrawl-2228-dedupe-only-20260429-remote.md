---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2228-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132435926"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132435926"
head_sha: "8b6ee7ffa77533bbae10cb97289fd78b142edfab"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.952Z"
canonical: "https://github.com/openclaw/openclaw/issues/43383"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43383"
canonical_pr: "https://github.com/openclaw/openclaw/pull/38789"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2228-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132435926](https://github.com/openclaw/clownfish/actions/runs/25132435926)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43383

## Summary

Closed representative #46257 is obsolete for this run. The live canonical issue is #43383, with #38789 as the hydrated focused implementation PR. No high-confidence open duplicate closeout is planned: #58351 is a related workspaceOnly/fs-sandbox variant with distinct scope, #48034 tracks a separate rw-mode repair path, and #74161 is related prompt hardening.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #38789 | keep_canonical | planned | canonical | Keep #38789 open as the canonical implementation path; do not merge, repair, or close in this dedupe-only job. |
| #43383 | keep_canonical | planned | canonical | Use #43383 as the live canonical issue because the representative #46257 is closed and the bug remains open through #43383/#38789. |
| #43526 | keep_closed | skipped | superseded | Already closed; keep as historical superseded evidence only. |
| #46257 | keep_closed | skipped | duplicate | Closed representative is obsolete; keep closed and route the live canonical path through #43383/#38789. |
| #48011 | keep_closed | skipped | related | Already closed related rw-mode context; keep it out of the non-rw canonical closeout path. |
| #48034 | keep_related | planned | related | Keep open as a related rw-mode subcluster, not a duplicate of the canonical non-rw sandbox issue. |
| #58351 | keep_related | planned | related | Not a high-confidence duplicate; keep open as related due distinct configuration and remaining product/implementation scope. |
| #74161 | keep_related | planned | related | Related prompt-hardening PR, not a duplicate or canonical fix for the sandbox snapshot path root cause. |

## Needs Human

- none
