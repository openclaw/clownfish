---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2798-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134540944"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134540944"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.006Z"
canonical: "https://github.com/openclaw/openclaw/pull/73965"
canonical_issue: "https://github.com/openclaw/openclaw/issues/42219"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73965"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2798-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134540944](https://github.com/openclaw/clownfish/actions/runs/25134540944)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73965

## Summary

No mutating actions are planned. The hydrated preflight artifact shows the original representative and all open-candidate PRs are already closed, while #73965 is the merged canonical fix on main and #42219 is a closed security-sensitive issue routed outside this cluster.

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
| #42219 | route_security | planned | security_sensitive | Security-sensitive linked issue is quarantined for central security handling; no mutation is planned. |
| #42338 | keep_closed | skipped | superseded | Already closed historical PR superseded by merged #73965. |
| #42675 | keep_closed | skipped | superseded | Representative is obsolete and already closed; merged #73965 is the canonical fix. |
| #49218 | keep_closed | skipped | superseded | Already closed prior-credit source superseded by merged #73965. |
| #64768 | keep_closed | skipped | superseded | Already closed cleanup follow-up superseded by merged #73965. |
| #68298 | keep_closed | skipped | superseded | Already closed current-layout candidate superseded by merged #73965. |
| #73965 | keep_canonical | planned | canonical | Merged canonical fix on current main; no merge or post-merge action is allowed or needed. |

## Needs Human

- none
