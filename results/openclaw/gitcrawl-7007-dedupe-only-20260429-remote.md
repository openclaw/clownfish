---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-7007-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136848749"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136848749"
head_sha: "c207d367ab088fb89ca96c77cc23dd9c55875cc5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.280Z"
canonical: "https://github.com/openclaw/openclaw/issues/48947"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48947"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-7007-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136848749](https://github.com/openclaw/clownfish/actions/runs/25136848749)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/48947

## Summary

Hydrated preflight at main 9a3a341d93721f808d9deeae6e39c727249d2824 found no security-sensitive items. #48947 remains the live canonical for the broad runaway tool-call/no-feedback/UI-refresh family. No close, comment, label, merge, or fix actions are planned because the other open items have distinct active subcases or an unmerged related PR.

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
| #48947 | keep_canonical | planned | canonical | Representative #48947 remains the best live canonical for the broad symptom family; no duplicate closeout is safe. |
| #44888 | keep_related | planned | related | Useful related contributor PR, but not merge-ready in this dedupe-only run and not a closeout target. |
| #55942 | keep_related | planned | related | Same broad broken-tool symptom family, but provider-specific Kimi/NVIDIA root cause with separate open implementation path. |
| #60861 | keep_related | planned | related | Related tool-execution hang symptom, but unique Windows/WorkClaw reproduction and not a true duplicate of #48947. |
| #67434 | keep_related | planned | related | Focused update_plan-only subcase remains actionable and should stay open rather than be closed into the broader #48947 thread. |
| #68285 | keep_related | planned | related | Related broken-tool symptom family, but distinct Google Gemini CLI permission-mode and Matrix CPU scope that should remain open. |

## Needs Human

- none
