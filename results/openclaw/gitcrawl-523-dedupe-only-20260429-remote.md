---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-523-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136023706"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136023706"
head_sha: "ed3c070f16b94246f3b571063f0ecb9ffa228dd1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.260Z"
canonical: "https://github.com/openclaw/openclaw/pull/39485"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39428"
canonical_pr: "https://github.com/openclaw/openclaw/pull/39485"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-523-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136023706](https://github.com/openclaw/clownfish/actions/runs/25136023706)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39485

## Summary

Hydrated state supports keeping #39428 as the canonical bug and #39485 as the narrow canonical PR candidate. #39485 is repairable but not merge-ready because actionable Codex/Greptile review findings remain. #45808 is related but broader, failing checks, and has unresolved review/design blockers, so it should stay open rather than be closed as a duplicate or superseded PR. Closed #41307 is historical context only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #39428 | keep_canonical | planned | canonical | Keep the bug report open as the canonical issue until a guarded fix lands. |
| #39485 | keep_canonical | planned | canonical | #39485 is the best canonical PR candidate, but it must stay open for repair before any merge or fixed-by closeout. |
| #45808 | keep_related | planned | related | Keep #45808 open as related follow-up work; it is broader than the narrow #39428/#39485 canonical path and is not safe to close as duplicate or superseded. |
| #41307 | keep_closed | skipped | independent | Closed historical context only; no mutation is valid for this ref. |

## Needs Human

- none
