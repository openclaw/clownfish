---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2125-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585831302"
workflow_run_id: "27585831302"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585831302"
head_sha: "0c53ea84a83f5ae51d05bdc974bab3c3e31d6ee1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:37:05.229Z"
canonical: "https://github.com/openclaw/openclaw/issues/83184"
canonical_issue: "https://github.com/openclaw/openclaw/issues/83184"
canonical_pr: "https://github.com/openclaw/openclaw/pull/83187"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2125-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585831302](https://github.com/openclaw/clownfish/actions/runs/27585831302)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/83184

## Summary

Closed representative #65488 is obsolete. The current hydrated canonical path is open issue #83184 with open implementation PR #83187. No close, merge, or fix action is safe or permitted in this job: the original candidate refs are already closed, #83184 must remain open until the fix lands, and #83187 is still blocked by review/rebase follow-up plus job-level merge/fix prohibitions.

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
| #65488 | keep_closed | skipped | superseded | Closed gitcrawl representative is historical evidence only; use #83184/#83187 as the current canonical path. |
| #83184 | keep_canonical | planned | canonical | This is the surviving canonical issue; keep open until #83187 or an equivalent fix is landed and validated. |
| #83187 | keep_canonical | planned | canonical | Keep as the canonical PR lane, but do not merge or close anything from this job. |
| #44993 | keep_closed | skipped | fixed_by_candidate | Already closed; distinct stale timestamp subproblem is not an open close target for this cluster run. |
| #59710 | keep_closed | skipped | duplicate | Already closed as covered/split to #83184 and #83187. |
| #62294 | keep_closed | skipped | fixed_by_candidate | Already closed; the interval/App Nap wake-gating issue is a separate fixed historical subproblem. |
| #64016 | keep_closed | skipped | fixed_by_candidate | Already closed; separate event-wake cooldown issue is historical evidence only. |
| #64293 | keep_closed | skipped | independent | Already closed and not the same root cause as the pendingFinalDelivery canonical path. |

## Needs Human

- none
