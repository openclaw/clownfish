---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2746-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134078208"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134078208"
head_sha: "d0688cc86ec05c840c9f64b264bd897e9b409ff3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T21:19:12.620Z"
canonical: "https://github.com/openclaw/openclaw/issues/42079"
canonical_issue: "https://github.com/openclaw/openclaw/issues/42079"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2746-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134078208](https://github.com/openclaw/clownfish/actions/runs/25134078208)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/42079

## Summary

Hydrated state shows the closed representative #41046 should not be reopened or used for closeout. The current open timeout-family tracker is #42079, while #42837 is a separate Feishu dynamicAgentCreation routing bug with a useful but closed source PR. No duplicate close actions are safe; one credited replacement fix artifact is planned for #42837 only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #41046 | keep_closed | skipped | related | Closed context representative only; no mutation planned. |
| #42079 | keep_canonical | planned | canonical | Best surviving open tracker for the Feishu embedded-run timeout family; not safe to close as fixed or duplicate. |
| #42354 | keep_related | planned | related | Related Feishu transport issue, but distinct root cause and no hydrated fixed-by candidate. |
| #42803 | keep_related | planned | related | Related Feishu channel area, but not a duplicate of the timeout family and not closable in this cluster. |
| #42837 | fix_needed | planned | independent | Independent real Feishu routing bug with a narrow credited replacement path; no close action is safe. |
| #42886 | keep_closed | skipped | superseded | Closed source PR preserved as credit/evidence for the #42837 fix artifact. |
| #49915 | keep_related | planned | related | Related Feishu command issue; keep open for its own hydrated candidate review. |
| #73501 | keep_independent | planned | independent | Broad performance tracker is not a duplicate of the Feishu timeout or dynamicAgentCreation items in this cluster. |
| cluster:gitcrawl-2746-dedupe-only-20260429-remote | build_fix_artifact | planned | independent | A narrow non-security fix path exists, but the current job is dedupe-only and cannot raise the PR itself. |

## Needs Human

- none
