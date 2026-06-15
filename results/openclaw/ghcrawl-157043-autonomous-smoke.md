---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157043-autonomous-smoke"
mode: "autonomous"
run_id: "25103012172"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103012172"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.142Z"
canonical: null
canonical_issue: "https://github.com/openclaw/openclaw/issues/42219"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73965"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157043-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103012172](https://github.com/openclaw/clownfish/actions/runs/25103012172)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/42219

## Summary

Preflight shows both seed issues are already closed. #42219 is the security-sensitive canonical report and should remain quarantined to central security handling; #73965 is the hydrated merged canonical fix on current main. #46847 was already closed as the duplicate report, so there is no close, comment, merge, or fix mutation left for this cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #42219 | route_security | planned | security_sensitive | Security-sensitive item is quarantined to central OpenClaw security handling; it is already closed, so no close/comment/label action is emitted. |
| #46847 | keep_closed | skipped | duplicate | Already closed duplicate; keep closed and do not emit post-merge closeout for a closed target. |

## Needs Human

- none
