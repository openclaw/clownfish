---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238892-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25108031299"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25108031299"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T12:20:07.452Z"
canonical: "https://github.com/openclaw/openclaw/issues/50248"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50248"
canonical_pr: "https://github.com/openclaw/openclaw/pull/69954"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238892-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25108031299](https://github.com/openclaw/clownfish/actions/runs/25108031299)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/50248

## Summary

Classification only. #50248 remains the canonical open issue for the sessions cleanup --fix-missing stale sessionFile safety bug, with #69954 as the active but not merge-ready implementation candidate. #63897 is already closed as duplicate/superseded by #50248. #46369/#46506 and #73471 are related but distinct follow-up families and should stay open separately. No GitHub mutation is planned.

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
| #50248 | keep_canonical | planned | canonical | Best surviving canonical issue for the stale sessionFile cleanup-safety root cause. |
| #69954 | keep_canonical | planned | canonical | Canonical implementation candidate for #50248, but not merge-ready in this dedupe-only run. |
| #63897 | keep_closed | skipped | duplicate | Already closed duplicate/superseded item; closed refs are evidence only. |
| #46369 | keep_related | planned | related | Related session/cron maintenance area, but not the same root cause or same user-visible failure as #50248. |
| #46506 | keep_related | planned | related | Separate implementation candidate for the cron.remove ghost-session issue; not merge-ready and outside this dedupe closeout. |
| #73471 | keep_related | planned | related | Related doctor/orphan-classification family, but distinct scope and should not be closed as a duplicate of #50248. |
| #24753 | keep_closed | skipped | related | Closed historical context only. |
| #27508 | keep_closed | skipped | related | Closed historical context only. |
| #72167 | keep_closed | skipped | superseded | Already closed superseded PR; closed refs are evidence only. |

## Needs Human

- none
