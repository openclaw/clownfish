---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-120-dedupe-cleanup-wave"
mode: "autonomous"
run_id: "27608147987"
workflow_run_id: "27608147987"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27608147987"
head_sha: "d39befcd6309943509cd00e8e3cd0ee7c314e6be"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T09:36:29.369Z"
canonical: "https://github.com/openclaw/openclaw/issues/85846"
canonical_issue: "https://github.com/openclaw/openclaw/issues/85846"
canonical_pr: "https://github.com/openclaw/openclaw/pull/86285"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-120-dedupe-cleanup-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27608147987](https://github.com/openclaw/clownfish/actions/runs/27608147987)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/85846

## Summary

Classified the hydrated cluster without direct GitHub mutation. #85846 remains the canonical issue for the OpenAI realtime duplicate-greeting bug, with #86285 as the best open canonical fix path. #85932 is a planned superseded close because it overlaps the same #85846 fix but lacks the real behavior proof that #86285 has. #85847 and #90749 are distinct related/independent work and stay open. Linked security-sensitive #79055 is routed only to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
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
| #85932 | close_superseded | executed | superseded | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #79055 | route_security | planned | security_sensitive | Security-sensitive linked issue is out of scope for Clownfish backlog cleanup and should be handled by central OpenClaw security triage. |
| #85846 | keep_canonical | planned | canonical | Keep the live issue open as the canonical tracking thread until the preferred fix path lands or maintainers choose a different fix. |
| #85847 | keep_related | planned | related | Same voice-call/realtime area, but a different root cause and product scope from #85846; it should stay open outside this duplicate-greeting closeout. |
| #85932 | close_superseded | planned | superseded | High-confidence overlapping PR superseded by hydrated candidate #86285, which has the required proof path passing while preserving contributor credit. |
| #86285 | keep_canonical | planned | canonical | Keep as the canonical open fix path for #85846; merge is out of scope for this job. |
| #90749 | keep_independent | planned | independent | Different user-visible failure and implementation scope from #85846; leave it open as independent PR work. |

## Needs Human

- none
