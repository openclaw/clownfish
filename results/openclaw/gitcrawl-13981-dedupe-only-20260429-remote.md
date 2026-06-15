---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13981-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109798595"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109798595"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.772Z"
canonical: "#68491"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/68491"
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13981-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109798595](https://github.com/openclaw/clownfish/actions/runs/25109798595)

Workflow conclusion: success

Worker result: planned

Canonical: #68491

## Summary

Representative #67791 is closed and the narrow Feishu streaming-card duplicate race is already landed via #68491 on main 9881a808f2fc0d5302f98a040a9efaad00336097. #38597 is also already closed by merged #73960. No high-confidence duplicate closures are planned: the remaining open candidates are distinct related delivery, replay, reconnect, sync, or draft-PR work and should stay open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
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
| #68491 | keep_canonical | skipped | canonical | Already-merged canonical fix for the original closed representative; no mutation is needed or allowed. |
| #67791 | keep_closed | skipped | fixed_by_candidate | Historical representative is already closed and covered by the hydrated merged PR #68491. |
| #38597 | keep_closed | skipped | fixed_by_candidate | Listed candidate is no longer open; preserve as historical fixed context only. |
| #38836 | keep_related | planned | related | Related Feishu delivery reliability work; not a duplicate and not safe to close in this dedupe-only job. |
| #41195 | keep_related | planned | related | Open Feishu replay-dedupe bug remains distinct; keep open as related follow-up. |
| #46778 | keep_related | planned | related | Related Feishu dedupe gap with unique reproduction details; not a high-confidence duplicate closure. |
| #49055 | keep_related | planned | related | Open delivery-status/retry bug remains related but distinct from the Feishu streaming duplicate canonical fix. |
| #52577 | keep_related | planned | related | Distinct Discord reconnect catch-up issue; keep open as related follow-up. |
| #53786 | keep_related | planned | related | Classification is clear enough to keep open as related; no dedupe closeout is appropriate. |
| #53961 | keep_related | planned | related | Useful related draft PR for #49055, but it is not merge-ready and this job cannot repair or merge it. |
| #55036 | keep_related | planned | related | Distinct Discord commentary durability issue; keep open as related follow-up. |
| #56610 | keep_related | planned | related | Related delivery reliability request; insufficient duplicate evidence for closure. |
| #57225 | keep_related | planned | related | Related channel delivery behavior, but not a true duplicate or fixed-by-candidate closeout. |
| #62906 | keep_related | planned | related | Related duplicate-response symptom with unclear root cause; keep open rather than closing against the Feishu streaming fix. |

## Needs Human

- none
