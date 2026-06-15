---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14025-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25110424479"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25110424479"
head_sha: "7d2adb9c59b8750974f50f0d9103e76d18fa9122"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.797Z"
canonical: "https://github.com/openclaw/openclaw/issues/66468"
canonical_issue: "https://github.com/openclaw/openclaw/issues/66468"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14025-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25110424479](https://github.com/openclaw/clownfish/actions/runs/25110424479)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/66468

## Summary

Hydrated state shows no security-sensitive refs and no high-confidence duplicate closeout among the current open candidates. The obsolete representative #56381 and candidate #48067 are already closed. #66468 is the best surviving open canonical for the remaining fallback status-bar subfamily; #42690 is related but distinct, and #61019 is independent product behavior around global default migration. No GitHub mutations are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #66468 | keep_canonical | planned | canonical | Best surviving open canonical for the remaining provider-fallback TUI status-bar subfamily after the original representative #56381 was closed as implemented. |
| #42690 | keep_related | planned | related | Related model-status work, but not a true duplicate of the fallback-attempt status-bar canonical. |
| #61019 | keep_independent | planned | independent | Independent active-session inheritance/product behavior; it should remain open outside this fallback/status dedupe cluster. |
| #48067 | keep_closed | skipped | related | Already closed before this worker pass; no mutation is valid. |
| #56381 | keep_closed | skipped | fixed_by_candidate | Obsolete closed representative; #66468 is the current open fallback-status canonical for the remaining in-flight attempt gap. |

## Needs Human

- none
