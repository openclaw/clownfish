---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238798-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25107660174"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107660174"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.633Z"
canonical: "https://github.com/openclaw/openclaw/pull/72614"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43556"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72614"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238798-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107660174](https://github.com/openclaw/clownfish/actions/runs/25107660174)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72614

## Summary

Hydrated preflight state shows all six job candidates are already closed. The current canonical fix path is merged PR #72614 on main; no close, label, merge, or fix action is needed. Security-sensitive linked PR #47115 is quarantined to central security handling only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #47115 | route_security | planned | security_sensitive | Route the exact linked security-sensitive PR to central OpenClaw security handling; do not mutate it in this cluster. |
| #72614 | keep_closed | skipped | canonical | Already-merged canonical fix; no merge or post-merge action is allowed or needed. |
| #43556 | keep_closed | skipped | canonical | Historical canonical issue is already closed and the canonical fix has landed. |
| #56326 | keep_closed | skipped | fixed_by_candidate | Already closed as covered by merged canonical fix #72614. |
| #61724 | keep_closed | skipped | fixed_by_candidate | Already closed as covered by merged canonical fix #72614. |
| #63120 | keep_closed | skipped | fixed_by_candidate | Already closed as covered by merged canonical fix #72614. |
| #64714 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by the canonical sessions_spawn fix path. |
| #67248 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by merged canonical fix #72614. |

## Needs Human

- none
