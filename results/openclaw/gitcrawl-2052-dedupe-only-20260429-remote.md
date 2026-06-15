---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2052-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131881557"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131881557"
head_sha: "d8a032e46d7a5449946bb8a8f542719694995636"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.925Z"
canonical: "https://github.com/openclaw/openclaw/pull/55923"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/55923"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2052-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131881557](https://github.com/openclaw/clownfish/actions/runs/25131881557)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/55923

## Summary

Hydrated state shows the hinted representative #52836 is already closed. The current open canonical path for the narrow fake-tool/placeholder-reply/legacy-WS subset is #55923, but it is not merge-ready and merge/fix actions are blocked by this dedupe-only job. The six open issue candidates each retain unique scope, provider, channel, or product-design details, so no high-confidence close action is planned.

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
| #55923 | keep_canonical | planned | canonical | Keep the open PR as the canonical non-mutating path; do not merge, repair, or close against it in this dedupe-only run. |
| #41304 | keep_related | planned | related | Related symptom family, but not a true duplicate and not safe to close. |
| #41824 | keep_related | planned | related | Related execution-discipline issue with unique channel and verification requirements; keep open. |
| #47606 | keep_related | planned | related | Related execution reliability work, but materially different scope and not closable as a duplicate. |
| #62505 | keep_related | planned | related | Related no-action/no-completion family with remaining OpenAI Codex/background-delivery specifics; no closeout candidate is clean. |
| #63135 | keep_related | planned | related | Related symptom family but distinct channel/provider root cause; keep open. |
| #65490 | keep_related | planned | related | Related production-operations tracker with unique broad scope; keep open. |

## Needs Human

- none
