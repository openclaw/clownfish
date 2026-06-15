---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-10404-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109628167"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109628167"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.707Z"
canonical: "https://github.com/openclaw/openclaw/issues/60247"
canonical_issue: "https://github.com/openclaw/openclaw/issues/60247"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-10404-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109628167](https://github.com/openclaw/clownfish/actions/runs/25109628167)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/60247

## Summary

#60247 remains the best live canonical for the Control UI CJK WebSocket/display JSON parse failure. The other open hydrated refs are related streaming/non-ASCII JSON failures with distinct symptoms, channels, or implementation lanes, so no high-confidence close/comment/label mutation is planned.

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
| #60247 | keep_canonical | planned | canonical | Best surviving canonical issue for the Control UI transport/display CJK JSON parse failure; no merged candidate fix is hydrated for this root cause. |
| #50887 | keep_related | planned | related | Related UTF-8 boundary family item, but not a true duplicate of the Control UI WebSocket/display parse failure. |
| #51303 | keep_related | planned | related | Useful related implementation lane for #50887, but not the canonical Control UI #60247 issue and not merge-ready in this job. |
| #59076 | keep_related | planned | related | Related streaming CJK JSON parse family item with unique channel and runtime failure details; not safe to close as a duplicate. |
| #60593 | keep_related | planned | related | Related follow-up subcluster for Anthropic provider error handling, not a duplicate of the Control UI canonical. |
| #61076 | keep_related | planned | related | Related provider/parser failure with separate reproduction and scope; keep open for its own fix path. |
| #68442 | keep_related | planned | related | Related UI/non-ASCII streaming JSON family item, but it has unique edit-tool and Gateway-freeze details that block duplicate closeout. |
| #63315 | keep_closed | skipped | fixed_by_candidate | Already closed context ref; no mutation planned. |

## Needs Human

- none
