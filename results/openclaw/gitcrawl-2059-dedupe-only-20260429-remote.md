---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2059-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131885111"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131885111"
head_sha: "d8a032e46d7a5449946bb8a8f542719694995636"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.927Z"
canonical: "https://github.com/openclaw/openclaw/pull/51024"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/51024"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2059-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131885111](https://github.com/openclaw/clownfish/actions/runs/25131885111)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/51024

## Summary

Hydrated preflight shows no security-sensitive refs. #51024 remains the best open canonical for timeout-aware stale runningAtMs cleanup; the other open PRs either cover different cron timeout/fallback/startup/ledger failures or carry useful alternate work that is not safe to close in this dedupe-only pass. No merge, fix, or close actions are planned.

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
| #51024 | keep_canonical | planned | canonical | Best surviving canonical PR for the stale runningAtMs per-job timeout cleanup family, but not merge-ready in this dedupe-only job. |
| #43816 | keep_related | planned | related | Same stale-marker family as the canonical PR, but keep open for maintainer comparison and contributor-credit preservation rather than closing in this pass. |
| #42482 | keep_related | planned | related | Related cron timeout/fallback work with a distinct remaining root cause; not a duplicate close target. |
| #52365 | keep_related | planned | related | Related cron fallback-budget work, but independent from the canonical stale-marker threshold fix and not eligible for close or merge here. |
| #68112 | keep_related | planned | related | Related cron scheduler resilience work with a distinct root cause; keep open. |
| #68645 | keep_related | planned | related | Related draft cron timeout/ledger work with separate scope; not safe to close or canonicalize in this cluster. |

## Needs Human

- none
