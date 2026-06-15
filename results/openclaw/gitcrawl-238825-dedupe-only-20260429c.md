---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238825-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25102894239"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102894239"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.122Z"
canonical: "https://github.com/openclaw/openclaw/issues/73546"
canonical_issue: "https://github.com/openclaw/openclaw/issues/73546"
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

# gitcrawl-238825-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102894239](https://github.com/openclaw/clownfish/actions/runs/25102894239)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/73546

## Summary

Hydrated preflight state shows #73546 is still the best live canonical for the TUI restart/reconnect resume gap. #59839 and #68162 remain open as related WebChat/session-switcher issues with distinct triggers and unresolved evidence, so no duplicate closeout is safe. #59018 and #60549 are already closed and are retained only as historical context.

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
| #73546 | keep_canonical | planned | canonical | #73546 is the newest open TUI-specific report and tracks the remaining fresh-process/reconnect session-resume gap. |
| #59839 | keep_related | planned | related | Related session-continuity family, but it has a distinct WebChat New session/session-switcher reproduction and should stay open. |
| #68162 | keep_related | planned | related | Related but not a duplicate; #68162 needs its own WebChat reconnect regression or fix path before closure can be reconsidered. |
| #59018 | keep_closed | skipped | related | Already closed in live preflight state; no mutation is valid. |
| #60549 | keep_closed | skipped | related | Already closed in live preflight state; no mutation is valid. |

## Needs Human

- none
