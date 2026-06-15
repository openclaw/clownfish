---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-921-plan-wave-20260615-b"
mode: "plan"
run_id: "27519113292"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519113292"
head_sha: "31c87ca3fe1fa037e42cb47214effc4eb921b052"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:10:12.691Z"
canonical: "#86207"
canonical_issue: "#86198"
canonical_pr: "#86207"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-921-plan-wave-20260615-b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519113292](https://github.com/openclaw/clownfish/actions/runs/27519113292)

Workflow conclusion: success

Worker result: planned

Canonical: #86207

## Summary

Plan-only classification for the Bun launcher import-miss cluster. #86207 remains the best hydrated canonical PR because it covers #86198, includes focused code and regression coverage, and has real behavior proof. #86394 covers the same root cause but is superseded by the better-proven canonical PR and remains blocked on real behavior proof.

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
| #86198 | keep_closed | skipped | fixed_by_candidate | Historical linked issue is useful evidence for root cause but is already closed. |
| #86207 | keep_canonical | planned | canonical | Best surviving hydrated PR for this root cause, but not merge-ready in plan mode. |
| #86394 | close_superseded | planned | superseded | Same root cause as the canonical PR, but lower proof and still blocked; safe plan-mode superseded closeout with contributor credit. |

## Needs Human

- none
