---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-541-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136420504"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136420504"
head_sha: "648e71ed1e7bd7c58c0085195d8e3302fdbfa10f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.262Z"
canonical: "https://github.com/openclaw/openclaw/pull/73976"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73976"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-541-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136420504](https://github.com/openclaw/clownfish/actions/runs/25136420504)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73976

## Summary

The original representative #39555 is already closed. The hydrated replacement #73976 is the best open canonical path for the per-keyword hybrid FTS fallback, but merge/fix actions are blocked by job permissions and it still has review/check follow-up. The other open refs are related memory-search subfamilies, not duplicates, so no close/comment/label mutations are planned.

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
| #39555 | keep_closed | skipped | superseded | Already closed; keep as historical source evidence for the open replacement path. |
| #73976 | keep_canonical | planned | canonical | Best open canonical path, but merge/fix are out of scope for this job and merge preflight is not clean. |
| #47754 | keep_related | planned | related | Related memory-search bug with useful code, but a separate snippet-rendering root cause. |
| #48112 | keep_related | planned | related | Related hybrid recall work with a distinct scoring/fallback decision. |
| #48300 | keep_related | planned | related | Keep open with its linked candidate #48328; the root cause is distinct from the canonical PR. |
| #48328 | keep_related | planned | related | Related open implementation candidate for #48300; keep separate from the canonical per-keyword fallback path. |

## Needs Human

- none
