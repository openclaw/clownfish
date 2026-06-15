---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-980-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526249471"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526249471"
head_sha: "df0ecb937a5f73036ef8def5c1f076a5c228a0d6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:37:32.195Z"
canonical: "#83342"
canonical_issue: "#83342"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-980-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526249471](https://github.com/openclaw/clownfish/actions/runs/27526249471)

Workflow conclusion: success

Worker result: planned

Canonical: #83342

## Summary

Plan mode only. Keep #83342 as the live canonical issue for the /models CLI-runtime alias duplicate-provider UX problem. Route #85982 to central security handling because the job explicitly lists it as a security-signal ref, despite the hydrated item being already closed and unmerged.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #83342 | keep_canonical | planned | canonical | #83342 remains the clearest open canonical item for this root cause; no closure, merge, or fix action is allowed in this plan job. |
| #85982 | route_security | planned | security_sensitive | The job explicitly marks #85982 as the security-signal ref for central routing. This quarantine is scoped to #85982 and does not change #83342's canonical issue classification. |

## Needs Human

- #83342 still needs a maintainer product decision on the shared /models display contract for canonical provider rows versus CLI runtime alias rows before a new fix lane changes behavior.
