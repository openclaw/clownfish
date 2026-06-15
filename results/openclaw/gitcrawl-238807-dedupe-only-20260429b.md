---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238807-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25102854748"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102854748"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.112Z"
canonical: "https://github.com/openclaw/openclaw/issues/46733"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46733"
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238807-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102854748](https://github.com/openclaw/clownfish/actions/runs/25102854748)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46733

## Summary

Canonical remains open issue #46733 for the Anthropic Opus 4.6 OAuth/Claude Max 1M context contract gap. No new close actions are safe: the remaining open items are related but distinct follow-ups or incomplete PR candidates, and the duplicate #11057 is already closed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #11057 | keep_closed | skipped | duplicate | Already closed duplicate; no further mutation is valid. |
| #22979 | keep_closed | skipped | related | Closed historical related context; no action. |
| #27846 | keep_closed | skipped | duplicate | Closed historical duplicate evidence; no action. |
| #41444 | keep_related | planned | related | Related Anthropic OAuth header behavior, but distinct 401/model-level header root cause; keep open. |
| #46733 | keep_canonical | planned | canonical | Best live canonical issue for the Opus 4.6 OAuth/Claude Max 1M context gap. |
| #65360 | keep_closed | skipped | related | Already closed as implemented; related display-layer history only. |
| #65433 | keep_related | planned | related | Useful but broad related PR; not canonical and not safe to close or merge in this dedupe-only run. |
| #66766 | keep_related | planned | related | Related but not a true duplicate; keep open while #66862 or an equivalent patch is reviewed. |
| #66862 | keep_related | planned | related | Related implementation candidate with unresolved bot review blockers; keep open. |
| #67530 | keep_closed | skipped | related | Already closed as implemented; related UI-meter history only. |

## Needs Human

- none
