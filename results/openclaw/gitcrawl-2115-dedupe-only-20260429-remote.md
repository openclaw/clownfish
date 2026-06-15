---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2115-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131911323"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131911323"
head_sha: "d8a032e46d7a5449946bb8a8f542719694995636"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.934Z"
canonical: "https://github.com/openclaw/openclaw/issues/45158"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45158"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2115-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131911323](https://github.com/openclaw/clownfish/actions/runs/25131911323)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/45158

## Summary

Canonical remains open issue #45158. The hydrated artifact shows no security-sensitive items and no high-confidence closeout target: #45158 is recent, has concrete Feishu routing logs, and still needs redacted config/reproduction to distinguish stale configuration/account-scope issues from a remaining runtime bug. Open linked PRs #39389, #43170, and #49769 are related follow-up work, not duplicates or merge-ready candidates.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #45158 | keep_canonical | planned | canonical | Best surviving live canonical for this Feishu multi-agent routing cluster; no duplicate close or fix artifact is safe from the hydrated evidence. |
| #39389 | keep_related | planned | related | Related documentation work with unresolved review feedback; not cleanup-closeable and not a canonical fix for #45158. |
| #43170 | keep_related | planned | related | Related ACP/provider follow-up, broader than the Feishu multi-agent routing issue and explicitly not cleanup-closeable. |
| #49769 | keep_related | planned | related | Related accountId/docs and command behavior work with unresolved review and failing checks; not a duplicate or safe closeout target for #45158. |
| #43633 | keep_closed | skipped | related | Closed context ref; no close/comment/label mutation is allowed or needed. |
| #50127 | keep_closed | skipped | related | Closed context ref; no close/comment/label mutation is allowed or needed. |
| #54609 | keep_closed | skipped | related | Closed context ref; no close/comment/label mutation is allowed or needed. |
| #63674 | keep_closed | skipped | related | Closed context ref; no close/comment/label mutation is allowed or needed. |

## Needs Human

- none
