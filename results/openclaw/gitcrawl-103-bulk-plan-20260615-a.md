---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-103-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520776689"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520776689"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:43:28.438Z"
canonical: "#86174"
canonical_issue: "#86174"
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

# gitcrawl-103-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520776689](https://github.com/openclaw/clownfish/actions/runs/27520776689)

Workflow conclusion: success

Worker result: planned

Canonical: #86174

## Summary

Plan-only classification. #86174 remains the best live canonical for the WebChat New Session parent-override mismatch. #77440 and #77690 form a related but distinct agent-specific default-label subcluster, with #77690 not merge-ready because it is draft and its proof checks fail. #83565 is independent product/API work for per-turn model overrides. No security-sensitive refs were detected in the hydrated artifact.

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
| #61382 | keep_closed | skipped | superseded | Already closed historical PR; no mutation planned. |
| #77440 | keep_related | planned | related | Same WebChat model selector/session-state area as #86174, but distinct root cause and direct fix lane. |
| #77690 | keep_related | planned | related | Useful related PR for #77440, but not merge-ready and not a fix for #86174. |
| #83565 | keep_independent | planned | independent | Independent feature/API design issue; not a duplicate of this bug cluster. |
| #86174 | keep_canonical | planned | canonical | Best surviving canonical for the specific New Session parent-override mismatch. |

## Needs Human

- none
