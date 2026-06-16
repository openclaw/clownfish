---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14022-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585129809"
workflow_run_id: "27585129809"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585129809"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:21:47.003Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14022-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585129809](https://github.com/openclaw/clownfish/actions/runs/27585129809)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Planned non-mutating classification pass only. The original representative #46721 is closed and the local-timezone session-memory lane appears already replaced/handled through closed historical work; the remaining live open PRs in this candidate set are related session cleanup/path-canonicalization work, not safe duplicates to close. Security-sensitive refs are quarantined item-by-item.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #44123 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #45612 | keep_closed | skipped | independent | Already closed and not a duplicate target for this cluster. |
| #47635 | keep_closed | skipped | related | Already closed; related context only. |
| #49660 | keep_closed | skipped | fixed_by_candidate | Already closed after being superseded by a hydrated fixed path. |
| #50584 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for Clownfish cleanup automation. |
| #51327 | keep_closed | skipped | related | Already closed; no close or merge action is valid. |
| #62298 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for Clownfish cleanup automation. |
| #64832 | keep_closed | skipped | related | Already closed; related context only. |
| #66174 | keep_related | planned | related | Related open work with failing checks; no high-confidence close action. |
| #69954 | keep_related | planned | related | Related open cleanup work; failing proof blocks stronger action. |

## Needs Human

- none
