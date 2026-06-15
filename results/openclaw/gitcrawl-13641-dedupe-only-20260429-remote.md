---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13641-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109734445"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109734445"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.742Z"
canonical: "https://github.com/openclaw/openclaw/pull/74010"
canonical_issue: "https://github.com/openclaw/openclaw/issues/66830"
canonical_pr: "https://github.com/openclaw/openclaw/pull/74010"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13641-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109734445](https://github.com/openclaw/clownfish/actions/runs/25109734445)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/74010

## Summary

Hydrated state shows the original representative #69379 is now closed and replaced by open PR #74010 for the reserveTokens/reserveTokensFloor compaction gate bug. No high-confidence close/comment/label mutations are planned: the remaining open candidates are either independent or related follow-up PRs with distinct root causes, active review findings, failing checks, or useful contributor code that should stay open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| #74010 | keep_canonical | planned | canonical | This is the current canonical fix path for the #66830 reserveTokens/reserveTokensFloor gate bug, but only keep-open classification is safe in this dedupe-only job. |
| #69379 | keep_closed | skipped | superseded | Closed representative is historical evidence only; #74010 is the live canonical replacement. |
| #65263 | keep_closed | skipped | related | Already-closed candidate from the local store; no mutation is valid. |
| #50694 | keep_related | planned | related | Related compaction threshold work, but not safe to close or supersede without an explicit credited replacement that covers #50611. |
| #54392 | keep_related | planned | related | Related compaction fix, not a duplicate of the canonical reserve-token gate path. |
| #54406 | keep_related | planned | related | Related compaction observability work with distinct scope and active review blockers. |
| #63636 | keep_related | planned | related | Related compaction area, but unique crash/root cause and not closable as part of #74010. |
| #64384 | keep_related | planned | related | Related preflight-compaction gate family, but not the same reserveTokens/reserveTokensFloor defect. |
| #67706 | keep_related | planned | related | Related compaction event work, distinct from the reserve-token gate canonical. |
| #52012 | keep_related | planned | related | Related compaction configuration work, but broad and not a duplicate close candidate. |
| #40875 | keep_independent | planned | independent | Independent heartbeat documentation work; no close or label action belongs in this compaction reserve-token cluster. |
| #51389 | keep_independent | planned | independent | Independent model fallback feature/config work, not compaction reserve-token dedupe. |
| #69495 | keep_independent | planned | independent | Independent heartbeat fallback feature work; keep open outside this cluster's canonical fix path. |

## Needs Human

- none
