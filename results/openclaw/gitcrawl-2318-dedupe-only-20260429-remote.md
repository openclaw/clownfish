---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2318-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132954355"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132954355"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.961Z"
canonical: "https://github.com/openclaw/openclaw/issues/29552"
canonical_issue: "https://github.com/openclaw/openclaw/issues/29552"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-2318-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132954355](https://github.com/openclaw/clownfish/actions/runs/25132954355)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/29552

## Summary

Closed representative #48008 is historical. The current open canonical for this cluster is #29552; no duplicate or fixed-by-candidate closeout is safe. Open linked items #64973 and #72535 are related but separate, and all closed refs remain evidence only.

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
| Needs human | 1 |

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
| #29552 | keep_canonical | planned | canonical | #29552 is the best surviving open issue for the remaining version/gateway-auth mismatch path; it should not be closed against closed #48008 or warning-only #72535. |
| #28191 | keep_closed | skipped | related | Closed related context only; no mutation is valid. |
| #29676 | keep_closed | skipped | related | Closed source PR remains useful evidence for #29552 but is not a current merge or close target. |
| #45507 | keep_closed | skipped | superseded | Closed superseded context only; #64973 remains the separate open follow-up for that subfamily. |
| #46100 | keep_closed | skipped | fixed_by_candidate | Closed implemented diagnostic issue; it is adjacent to Gateway auth but not the open #29552 root cause. |
| #46117 | keep_closed | skipped | fixed_by_candidate | Closed implemented loopback scope issue; not a current action target. |
| #48008 | keep_closed | skipped | fixed_by_candidate | Historical representative only; #29552 is the current open canonical for the remaining version/gateway-auth mismatch work. |
| #64973 | keep_related | planned | related | Related Gateway auth/config restart subfamily, but distinct from #29552's local Gateway auth/version mismatch path; leave it open separately. |
| #72535 | keep_related | planned | related | Adjacent version-warning cleanup PR; keep open/related but do not treat as canonical or fixed-by-candidate for #29552. |

## Needs Human

- #29552 needs maintainer Gateway-auth behavior judgment: either preserve env-first local call precedence and document stale-token recovery, or approve a narrowly guarded local-only retry with config-first gateway.auth credentials.
