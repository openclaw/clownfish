---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156617-autonomous-smoke"
mode: "autonomous"
run_id: "25102334454"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102334454"
head_sha: "9a08eb9ac982c5d395ca81610998f5f78efc9ef6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.083Z"
canonical: "https://github.com/openclaw/openclaw/pull/72664"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63654"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72664"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156617-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102334454](https://github.com/openclaw/clownfish/actions/runs/25102334454)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72664

## Summary

Hydrated preflight shows every job seed ref is already closed. The current canonical path is merged PR #72664 on main, which replaced #63987 and landed the narrow explicit qwen3.6-plus Coding Plan opt-in while intentionally retaining built-in catalog suppression; no GitHub mutations are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #63654 | keep_closed | skipped | fixed_by_candidate | Already closed after the merged canonical fix; no mutation is planned. |
| #63987 | keep_closed | skipped | superseded | Contributor PR was superseded by the merged replacement PR with credit preserved. |
| #64672 | keep_closed | skipped | superseded | Already closed; the remaining broad catalog exposure request was superseded by the narrower landed maintainer policy in #72664. |
| #66367 | keep_closed | skipped | superseded | Already closed as superseded by the merged narrower replacement path. |
| #69027 | keep_closed | skipped | superseded | Already closed; broad catalog exposure is superseded by the narrower accepted #72664 policy. |
| #69274 | keep_closed | skipped | superseded | Already closed; the cluster's accepted canonical path is the merged narrower fix in #72664. |
| #70927 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by merged candidate #72664 for the explicit configured-model path. |
| #70957 | keep_closed | skipped | superseded | Already closed as superseded by the merged canonical replacement path. |
| #72664 | keep_closed | skipped | canonical | Canonical fix is already merged; no worker merge or fix artifact is needed. |

## Needs Human

- none
