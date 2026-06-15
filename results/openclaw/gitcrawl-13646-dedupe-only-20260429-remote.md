---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13646-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109737863"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109737863"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.743Z"
canonical: "https://github.com/openclaw/openclaw/pull/73923"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41545"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73923"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13646-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109737863](https://github.com/openclaw/clownfish/actions/runs/25109737863)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73923

## Summary

Classified the refreshed cluster artifact without GitHub mutations. The original representative #41546 is already closed and superseded; #41545 remains the canonical open issue and #73923 is the current likely canonical fix PR. No close actions are planned because the canonical fix is still open and the live Clawsweeper comment says to keep the issue open until that PR or an equivalent fix lands. #69647 and #73987 are related but distinct Control UI storage/token-scope follow-up PRs.

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
| #41545 | keep_canonical | planned | canonical | Keep the canonical issue open until #73923 or an equivalent fix lands; early close would contradict the hydrated Clawsweeper guidance. |
| #73923 | keep_canonical | planned | canonical | #73923 is the likely canonical fix path, but this dedupe-only autonomous job cannot merge it and should not close the issue before the fix lands. |
| #69647 | keep_related | planned | related | Related storage-area work, but not a duplicate of #41545 and not closable in this cluster. |
| #73987 | keep_related | planned | related | Related Control UI token-scope work with unresolved review/design questions; keep it separate from the #41545/#73923 canonical path. |
| #41546 | keep_closed | skipped | superseded | Already closed; no close mutation is valid. |
| #41552 | keep_closed | skipped | superseded | Already closed; no close mutation is valid. |
| #41718 | keep_closed | skipped | superseded | Already closed; no close mutation is valid. |
| #42001 | keep_closed | skipped | superseded | Already closed and replaced by hydrated candidate #73923; no close mutation is valid. |
| #43254 | keep_closed | skipped | superseded | Already closed and replaced by hydrated related PR #73987; no close mutation is valid. |
| #39615 | keep_closed | skipped | related | Closed context only; no action in this dedupe pass. |
| #41389 | keep_closed | skipped | independent | Closed context only; no action in this dedupe pass. |
| #41408 | keep_closed | skipped | independent | Closed context only; no action in this dedupe pass. |

## Needs Human

- none
