---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-343-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610222084"
workflow_run_id: "27610222084"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610222084"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.450Z"
canonical: "https://github.com/openclaw/openclaw/issues/77981"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77981"
canonical_pr: "https://github.com/openclaw/openclaw/pull/75165"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-343-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610222084](https://github.com/openclaw/clownfish/actions/runs/27610222084)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/77981

## Summary

Classified the live open candidate without planning any GitHub mutations. #77981 should stay open as the canonical feature/product tracking issue; #75165 is the linked implementation PR context but is excluded from this worker's actionable scope and still has maintainer/product review blockers.

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
| #77981 | keep_canonical | planned | canonical | The issue is not a duplicate or already fixed report. It is the surviving tracking item for the requested feature while the linked implementation remains under maintainer review. |
| #75165 | keep_canonical | skipped | canonical | Context-only canonical implementation PR owned by an existing overlapping job; no action should be applied by this worker. |

## Needs Human

- none
