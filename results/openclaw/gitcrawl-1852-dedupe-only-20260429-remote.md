---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1852-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130790164"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130790164"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.875Z"
canonical: "https://github.com/openclaw/openclaw/pull/72331"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72331"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1852-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130790164](https://github.com/openclaw/clownfish/actions/runs/25130790164)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72331

## Summary

Hydrated state shows the original representative #59390 is closed and the original ACP-only streamTo hard-error path is already fixed on main by merged PR #72331. The remaining open candidates split into related but distinct subfamilies: parent-scoped subagent communication, ACP bridge/runtime failures, ACP parent progress visibility, provider schema filtering, and redundant argument normalization. No high-confidence close/comment/label mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #18967 | keep_related | planned | related | Keep open as a related product/design request with unique remaining work. |
| #38907 | keep_independent | planned | independent | Different root cause and validation path; keep out of this dedupe closeout. |
| #43573 | keep_related | planned | related | Related ACP spawn work, but not duplicate of the streamTo tolerance fix and not safe for automated closeout. |
| #47596 | keep_related | planned | related | Keep open as a related ACP parent-stream visibility request. |
| #47597 | keep_related | planned | related | Do not close; the duplicate-looking error symptom is fixed, but the feature request remains distinct. |
| #52457 | keep_related | planned | related | Keep open for maintainer policy review and branch repair; no closure gate is satisfied. |
| #53319 | keep_independent | planned | independent | Different root cause and validation requirement; keep independent. |
| #54471 | keep_related | planned | related | Keep open; unresolved bot review findings block any merge/fixed-by-candidate closeout. |
| #58686 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation planned. |
| #59225 | keep_related | planned | related | Keep as a related schema-shaping feature request. |
| #59251 | keep_related | planned | related | Partially overlapped by landed streamTo tolerance, but still contains unique potentially useful work. |
| #66720 | keep_related | planned | related | Related provider-schema compatibility work; keep open for maintainer review/rework, not duplicate closeout. |

## Needs Human

- none
