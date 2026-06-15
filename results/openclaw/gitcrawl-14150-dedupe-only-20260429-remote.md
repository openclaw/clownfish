---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14150-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129787645"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129787645"
head_sha: "57b657bc4ce868d681ea2ae867230254e2cbce60"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.844Z"
canonical: "https://github.com/openclaw/openclaw/pull/43984"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43737"
canonical_pr: "https://github.com/openclaw/openclaw/pull/43984"
actions_total: 16
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14150-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129787645](https://github.com/openclaw/clownfish/actions/runs/25129787645)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/43984

## Summary

Classified the hydrated open refs without planning GitHub mutations. #43984 remains the canonical PR for the stale-main-session visibility regression tracked by #43737. Other open refs are related or independent follow-up work; closed candidate refs are skipped as historical evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
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
| #43737 | keep_canonical | planned | canonical | Canonical issue for the cluster root; keep open while the open canonical PR remains unmerged. |
| #43984 | keep_canonical | planned | canonical | Best live canonical path for the representative root cause, but not merge-ready and merge/fix actions are disallowed. |
| #39722 | keep_related | planned | related | Related session-title subcluster; not a duplicate of #43984. |
| #39790 | keep_related | planned | related | Useful related contributor PR with unresolved review/check gates; keep open. |
| #44561 | keep_related | planned | related | Related display-name stabilization work, not the same root cause as #43984. |
| #48942 | keep_related | planned | related | Related title-precedence/refactor PR with unresolved product and review concerns. |
| #54647 | keep_independent | planned | independent | Different root cause and validation path; keep independent. |
| #54655 | keep_independent | planned | independent | Independent WebChat UX work. |
| #57583 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation planned. |
| #65165 | keep_independent | planned | independent | Independent gateway image-capability issue. |
| #65178 | keep_closed | skipped | superseded | Already closed as superseded/replaced; no mutation planned. |
| #66544 | keep_related | planned | related | Related heartbeat display-name subcluster, not a duplicate of #43984. |
| #66656 | keep_related | planned | related | Related heartbeat preview subcluster with unresolved checks/review. |
| #67759 | keep_independent | planned | independent | Independent provider image-capability issue. |
| #68047 | keep_independent | planned | independent | Independent provider image-capability PR. |
| #69599 | keep_related | planned | related | Related session UX follow-up, not a duplicate or close target. |

## Needs Human

- none
