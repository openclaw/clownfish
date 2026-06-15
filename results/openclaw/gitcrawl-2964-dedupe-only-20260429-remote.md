---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2964-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134564509"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134564509"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.011Z"
canonical: "https://github.com/openclaw/openclaw/issues/12590"
canonical_issue: "https://github.com/openclaw/openclaw/issues/12590"
canonical_pr: "https://github.com/openclaw/openclaw/pull/51421"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2964-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134564509](https://github.com/openclaw/clownfish/actions/runs/25134564509)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/12590

## Summary

Hydrated state splits this over-broad memory-flush cluster into two live subfamilies. #12590 with open PR #51421 is the canonical path for the alternating compaction-cycle memoryFlush bug. #47143 remains a related but distinct zero-initialization/cycle-0 dedup issue. No close, merge, or fix-PR action is safe from this dedupe-only job; closed refs remain historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #12590 | keep_canonical | planned | canonical | Keep #12590 open as the canonical issue until #51421 or another validated fix lands. |
| #51421 | keep_canonical | planned | canonical | #51421 is the best surviving fix PR for #12590, but this worker should only keep it canonical because merge and repair are out of scope and failing checks block finalization. |
| #47143 | keep_related | planned | related | Related memory-flush dedup subfamily with unique reproduction; do not close it as a duplicate of #12590 or #51421. |
| #45424 | keep_closed | skipped | related | Already closed context ref; no close action is valid. |
| #47174 | keep_closed | skipped | related | Closed representative remains evidence for the #47143 subfamily only. |
| #66845 | keep_closed | skipped | related | Already closed context ref for the related #47143 subfamily; no close action is valid. |
| #69138 | keep_closed | skipped | superseded | Already closed superseded PR; no close action is valid. |

## Needs Human

- none
