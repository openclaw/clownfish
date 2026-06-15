---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13639-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109732554"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109732554"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.739Z"
canonical: "https://github.com/openclaw/openclaw/pull/52449"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/52449"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13639-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109732554](https://github.com/openclaw/clownfish/actions/runs/25109732554)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/52449

## Summary

Closed representative #52063 is obsolete. Hydrated merged PR #52449 is the historical canonical for the closed general --json stdout-log family, but no open candidate safely replaces it for the whole cluster: #49085 and #68800 are related stdout-isolation subfamilies that should stay open, while #56176/#56102 are independent protocol-version work. No close/comment/label action is high-confidence for this run.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #52449 | keep_closed | skipped | canonical | Historical canonical is already merged/closed; keep only as context for the obsolete representative. |
| #49085 | keep_related | planned | related | Same stdout/JSON-RPC cleanliness family, but it has unique ACP CLI startup work not covered by merged #52449, so it should remain open. |
| #56102 | keep_independent | planned | independent | Different root cause and user-visible failure from the log-to-stderr dedupe cluster. |
| #56176 | keep_independent | planned | independent | Independent protocol-version compatibility PR with unresolved validation/review blockers. |
| #68587 | keep_related | planned | related | Related MCP stdout-isolation follow-up with an open candidate PR; keep open pending that path. |
| #68800 | keep_related | planned | related | Related but distinct MCP channel-server stdout-isolation candidate; keep open because the job disallows merge/fix and a review-bot test concern remains. |

## Needs Human

- none
