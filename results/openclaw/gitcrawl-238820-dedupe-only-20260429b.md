---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238820-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25102882383"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102882383"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.120Z"
canonical: "https://github.com/openclaw/openclaw/pull/72393"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72393"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238820-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102882383](https://github.com/openclaw/clownfish/actions/runs/25102882383)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72393

## Summary

Autonomous dedupe classification for Windows exec/codepage decoding cluster. The original representative #64661 is now closed, and the hydrated preflight shows #72393 is the merged maintainer canonical fix on main for the core Windows exec CJK mojibake issue. The only still-open member, #73751, is a maintainer follow-up PR for broader streaming/memory-host surfaces, but it has failing checks and an unresolved Greptile P1 review finding, so it should remain open as related work rather than be closed or treated as merge-ready.

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
| #56538 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation planned. |
| #64661 | keep_closed | skipped | superseded | Representative is no longer live; canonical path is merged PR #72393. |
| #64709 | keep_closed | skipped | superseded | Already closed as superseded by the merged canonical path. |
| #72393 | keep_closed | skipped | canonical | Canonical fix is already merged; no post-merge close action is allowed by the job. |
| #73751 | keep_related | planned | related | Related maintainer follow-up with failing checks and unresolved bot review; keep open, do not close or merge. |

## Needs Human

- none
