---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13581-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109708095"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109708095"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.732Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 19
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13581-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109708095](https://github.com/openclaw/clownfish/actions/runs/25109708095)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Hydrated preflight shows no security-sensitive refs and main at 9881a808f2fc0d5302f98a040a9efaad00336097. The original representative #51614 is already closed, and the live open items split into distinct WhatsApp, Telegram, Slack, reaction, and gateway-stall subfamilies. No high-confidence close, label, merge, or fix action is safe in this dedupe-only job; useful PRs remain open and closed refs are skipped as historical evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 19 |
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
| #51614 | keep_closed | skipped | superseded | Original representative is already closed and is evidence only. |
| #49569 | keep_closed | skipped | superseded | Source contributor PR is already closed after replacement; no additional closure is valid. |
| #67986 | keep_closed | skipped | related | Already closed candidate; no mutation is valid. |
| #37842 | keep_related | planned | related | Related multi-agent cascade family, but not a duplicate of the WhatsApp representative or Slack error cascade. |
| #42246 | keep_related | planned | related | Keep open as a distinct Telegram batching feature, not a duplicate of #69165. |
| #47677 | keep_related | planned | related | Related to #64752 but broader; not safe to close as a duplicate. |
| #51832 | keep_related | planned | related | Distinct Slack error-cascade bug; keep open for its own fix path. |
| #53745 | keep_related | planned | related | Related gateway liveness issue with unique repro; not closeable as duplicate. |
| #56733 | keep_related | planned | related | Related liveness symptom family; insufficient duplicate or fixed-by evidence. |
| #60137 | keep_related | planned | related | Useful open PR with a failing check; keep open, do not merge or close in this job. |
| #61616 | keep_related | planned | related | Related gateway-stall report with unique timing/platform details; leave open. |
| #62784 | keep_related | planned | related | Distinct Slack Socket Mode concurrency bug; not a duplicate close candidate. |
| #63757 | keep_related | planned | related | Related Telegram reaction area, but distinct structured-hook scope remains. |
| #63939 | keep_related | planned | related | Useful related WhatsApp config PR; closure would require maintainer product judgment after the quiet-session fix path. |
| #64752 | keep_related | planned | related | Narrow live Telegram reaction wake bug; not fixed and not a duplicate of the broader feature request. |
| #67782 | keep_related | planned | related | Related Telegram command-menu optimization; keep open for maintainer review. |
| #68833 | keep_related | planned | related | Useful related Telegram PR; keep open, do not merge in this job. |
| #69165 | keep_related | planned | related | Related Telegram outbound reliability feature, but not duplicate of #42246. |
| #73947 | keep_canonical | planned | canonical | Canonical open PR for the Telegram command-menu 429 retry subfamily; keep open for the normal review/merge path. |

## Needs Human

- none
