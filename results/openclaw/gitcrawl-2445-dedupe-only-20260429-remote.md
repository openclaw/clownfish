---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2445-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133494804"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133494804"
head_sha: "14c5bb8a9bdcc7f06ff1432229999dc0dd88ca23"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.975Z"
canonical: "https://github.com/openclaw/openclaw/issues/46369"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46369"
canonical_pr: "https://github.com/openclaw/openclaw/pull/46506"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2445-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133494804](https://github.com/openclaw/clownfish/actions/runs/25133494804)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46369

## Summary

Hydrated state makes #46369 the live canonical bug and #46506 the open repairable implementation candidate. #46475 is already closed, and #63535 is related but covers orphaned running-session recovery after crashes rather than cron.remove cleanup. No close/comment/label mutation is high-confidence for this pass.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #46369 | keep_canonical | planned | canonical | Keep #46369 open as the canonical tracker until #46506 or an equivalent fix lands and validates the cleanup behavior. |
| #46475 | keep_closed | skipped | superseded | Already closed; retain only as historical evidence for choosing #46369/#46506 as the current canonical path. |
| #46506 | keep_canonical | planned | canonical | Keep #46506 open as the repairable canonical implementation candidate; merge, fix, and fixed-by-candidate closeout are blocked by review findings/check state and by job policy. |
| #63535 | keep_related | planned | related | Keep #63535 open as a related follow-up PR, not a duplicate or superseded item in the cron.remove cleanup cluster. |

## Needs Human

- none
