---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-312-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27623784958"
workflow_run_id: "27623784958"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27623784958"
head_sha: "49af434b25e9ed881efb163fc22dc0077d559bf3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T14:19:31.090Z"
canonical: "https://github.com/openclaw/openclaw/pull/86503"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/86503"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-312-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27623784958](https://github.com/openclaw/clownfish/actions/runs/27623784958)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/86503

## Summary

Current main already contains the gateway session-tool fanout dedupe from merged PR #86503, with regression coverage proving overlapping run/session subscribers do not receive duplicate tool events. Plan closeout for #84821 as fixed by #86503; keep #84850 open as related because it still carries a distinct CPU/live-repro/product-decision thread; treat #84823 as excluded overlap context only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #84821 | close_fixed_by_candidate | blocked | fixed_by_candidate | candidate fix is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #84821 | close_fixed_by_candidate | planned | fixed_by_candidate | The reported duplicate websocket tool-event fanout is fixed on current main by hydrated merged PR #86503; #84821 remains open and can be safely closed with credit and a reopen path. |
| #84850 | keep_related | planned | related | Related but not a true duplicate: #86503 covers the primary fanout, while #84850 preserves a distinct CPU/live-repro and product-decision thread. |
| #84823 | keep_related | skipped | superseded | Superseded by #86503 as evidence, but excluded by overlap policy from closeout in this cluster. |
| #86503 | keep_closed | skipped | canonical | Already merged canonical fix; no mutation is needed. |
| #90463 | keep_closed | skipped | independent | Closed historical context, independent of the narrow #84821/#86503 tool-event dedupe closeout. |

## Needs Human

- none
