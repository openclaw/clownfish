---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1278-intake-20260621b"
mode: "plan"
run_id: "27893685593"
workflow_run_id: "27893685593"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27893685593"
head_sha: "e446e7d79e74bd9bb902ecb1186dfa1f3693af84"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T04:40:09.281Z"
canonical: "#64334"
canonical_issue: "#64334"
canonical_pr: "#94308"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1278-intake-20260621b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27893685593](https://github.com/openclaw/clownfish/actions/runs/27893685593)

Workflow conclusion: success

Worker result: planned

Canonical: #64334

## Summary

Plan-only classification: keep #64334 as the canonical open issue. #94308 is the related active fix candidate for the same session-cost status work, but it is excluded by the overlap policy and is not merge-ready because ClawSweeper reports unresolved changes and failing checks. Closed linked PRs remain historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #64334 | keep_canonical | planned | canonical | Best surviving canonical for the feature request; keep open until a validated fix lands. |
| #94308 | keep_related | planned | related | Same root cause as #64334 and likely active fix path, but it is outside this cluster's actionable scope and currently merge-blocked. |
| #73162 | keep_closed | skipped | independent | Already closed and unrelated to the #64334 session-cost status request. |
| #89862 | keep_closed | skipped | superseded | Closed earlier attempt on the same feature family, superseded by the broader active #94308 path. |
| #91130 | keep_closed | skipped | superseded | Closed partial slash-status attempt, superseded by the active #94308 work that later added bounded full-session cost handling. |
| #92994 | keep_closed | skipped | superseded | Closed CLI-only implementation attempt, superseded by the active #94308 path covering both slash and CLI status. |
| #93042 | keep_closed | skipped | superseded | Closed CLI-only follow-up attempt, superseded by #94308's broader active implementation. |

## Needs Human

- none
