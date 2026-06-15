---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238888-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25103012009"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103012009"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.142Z"
canonical: "https://github.com/openclaw/openclaw/pull/73949"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73949"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238888-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103012009](https://github.com/openclaw/clownfish/actions/runs/25103012009)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73949

## Summary

The original three PR candidates are now closed. The surviving canonical path for the reconnect-exhausted stale-socket restart crash family is the hydrated open replacement PR #73949. #73989 is a separate related reconnect-grace replacement for #45712 and should stay open for its own workflow. No close, merge, fix, or PR-opening actions are emitted.

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
| #45712 | keep_closed | skipped | superseded | Already closed; historical source/superseded evidence only. |
| #58216 | keep_closed | skipped | superseded | Original representative is obsolete because it is closed and replaced by #73949. |
| #58988 | keep_closed | skipped | superseded | Already closed and superseded by the later lifecycle/reconnect-exhausted fix path. |
| #73949 | keep_canonical | planned | canonical | Canonical open path for the #58216/#58988 reconnect-exhausted shutdown crash subfamily. |
| #73989 | keep_related | planned | related | Related but separate reconnect-grace implementation candidate; keep open. |

## Needs Human

- none
