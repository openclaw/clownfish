---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-12645-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143189121"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143189121"
head_sha: "fed76c211ce49d72a75810a0ccba3e2f6c6d43d3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-30T01:53:12.703Z"
canonical: "https://github.com/openclaw/openclaw/issues/67192"
canonical_issue: "https://github.com/openclaw/openclaw/issues/67192"
canonical_pr: "https://github.com/openclaw/openclaw/pull/67203"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-12645-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143189121](https://github.com/openclaw/clownfish/actions/runs/25143189121)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/67192

## Summary

Classified #67192 as the live canonical issue and #67203 as the best open implementation candidate, but not merge-ready. No close, merge, label, comment, or fix action is planned because instant close, merge, fix, and raise_pr are disabled for this dedupe-only job, and #67203 still has failing checks plus unresolved review-bot findings and unrelated logging churn.

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
| #67192 | keep_canonical | planned | canonical | Keep #67192 open as the canonical report because the bug remains unresolved on current main and the linked implementation PR has not landed. |
| #67203 | keep_canonical | planned | canonical | Keep #67203 open as the best hydrated implementation candidate for #67192, but do not recommend merge or closure because checks fail, review-bot findings are unresolved, and the job blocks merge, fix, and raise_pr actions. |

## Needs Human

- none
