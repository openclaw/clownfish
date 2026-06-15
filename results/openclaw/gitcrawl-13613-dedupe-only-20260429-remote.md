---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13613-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109725135"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109725135"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.737Z"
canonical: "https://github.com/openclaw/openclaw/issues/42213"
canonical_issue: "https://github.com/openclaw/openclaw/issues/42213"
canonical_pr: "https://github.com/openclaw/openclaw/pull/42258"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13613-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109725135](https://github.com/openclaw/clownfish/actions/runs/25109725135)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/42213

## Summary

Hydrated preflight shows no security-sensitive refs. #42213 remains the canonical open Control UI stale-busy tracker, with #42258 as the open UI watchdog candidate. #42011 is related but distinct and should stay open with #73105 as its backend lifecycle candidate. No close, merge, fix, or label actions are planned.

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
| #42213 | keep_canonical | planned | canonical | Best surviving open tracker for the Control UI stale-busy and queued-message root cause; keep open until #42258 or an equivalent fix lands. |
| #42258 | keep_canonical | planned | canonical | Canonical implementation candidate for #42213, but this dedupe-only job should not merge or repair it. |
| #42011 | keep_related | planned | related | Related Control UI stuck-state symptom, but distinct embedded-timeout lifecycle root cause with its own candidate fix. |
| #73105 | keep_related | planned | related | Useful related backend candidate for #42011; keep open for normal review rather than closing or merging in this dedupe-only run. |
| #47975 | keep_related | planned | related | Related broader responsiveness tracker; not a duplicate or close target for this cluster. |
| #54488 | keep_related | planned | related | Related queue/responsiveness family, but distinct root cause and scope. |
| #70991 | keep_related | planned | related | Related Control UI recovery issue with a different reconnect/reload scope; keep open. |

## Needs Human

- none
