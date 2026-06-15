---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-366-bulk-plan-20260615-a"
mode: "plan"
run_id: "27525987489"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525987489"
head_sha: "4574037aa1f27e59d5ea43eca0073b4c4dfc504c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:30:14.801Z"
canonical: "#87255"
canonical_issue: null
canonical_pr: "#87255"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-366-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525987489](https://github.com/openclaw/clownfish/actions/runs/27525987489)

Workflow conclusion: success

Worker result: planned

Canonical: #87255

## Summary

Plan-only classification: #87255 is the remaining actionable open ref and should be kept as the canonical implementation path for the OPENCLAW_HOME double-nesting bug. #45765 is hydrated context from an existing-overlap job and remains the source issue context, while #45793 is already closed historical fix context. No GitHub mutations are planned.

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
| #87255 | keep_canonical | planned | canonical | #87255 is the only remaining open actionable candidate and is the best live canonical within this job scope. |
| #45765 | keep_related | skipped | related | Existing-overlap context only; classification records relationship without planning a mutation. |
| #45793 | keep_closed | skipped | superseded | Already closed historical PR; no mutation is valid. |

## Needs Human

- none
