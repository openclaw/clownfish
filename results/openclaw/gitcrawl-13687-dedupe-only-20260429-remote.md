---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13687-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109748254"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109748254"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.750Z"
canonical: "https://github.com/openclaw/openclaw/pull/46300"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/46300"
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13687-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109748254](https://github.com/openclaw/clownfish/actions/runs/25109748254)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/46300

## Summary

Hydrated preflight state keeps #46300 as the best live canonical PR for the writable workspaceAccess:none family. No close, merge, or fix action is safe here: #46300 is unmerged and still has a failing macos check plus maintainer-review work, while #70573 and #70682 are security-boundary work that must route to central security handling.

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
| #46300 | keep_canonical | planned | canonical | Best live canonical path, but not merge-ready and this job forbids merge/fix/raise_pr. |
| #70682 | route_security | planned | security_sensitive | Security-boundary PR linked to a routed security issue; do not close, merge, label, comment, or repair in this cluster. |
| #70573 | route_security | planned | security_sensitive | Central security only; quarantine this exact linked ref and keep non-security classification separate. |
| #37634 | keep_related | planned | related | Same focused bug family as #46300, but the fix has not landed. |
| #36525 | keep_related | planned | related | Related product-direction issue, not a duplicate closeout target for this PR cluster. |
| #39497 | keep_related | planned | related | Same sandbox access area, different root cause and fix path. |
| #44077 | keep_related | planned | related | Related sandbox I/O family, but independent from writable workspaceAccess:none. |
| #39525 | keep_closed | skipped | related | Closed historical context only; no close action emitted. |
| #40582 | keep_closed | skipped | related | Closed linked context only. |
| #41033 | keep_closed | skipped | related | Closed historical context only; no close action emitted. |
| #42353 | keep_closed | skipped | related | Closed historical context only; no close action emitted. |
| #43704 | keep_closed | skipped | independent | Closed unrelated linked context only. |
| #44114 | keep_closed | skipped | related | Closed historical context only; no close action emitted. |
| #46065 | keep_closed | skipped | superseded | Closed historical context only; no close action emitted. |

## Needs Human

- none
