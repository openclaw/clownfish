---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-175-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520817109"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520817109"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.906Z"
canonical: "#84894"
canonical_issue: null
canonical_pr: "#84894"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-175-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520817109](https://github.com/openclaw/clownfish/actions/runs/27520817109)

Workflow conclusion: success

Worker result: planned

Canonical: #84894

## Summary

Plan-mode classification for four open PR candidates. #84894 remains the live canonical for the exec stdout empty-result family; #87228 is related but tracks a different orphan tool.result invariant; #84772 and #91076 are quarantined exactly as job-listed security-signal refs.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #84772 | route_security | planned | security_sensitive | Exact job-listed security-signal ref; route only this item to central OpenClaw security handling. |
| #84894 | keep_canonical | planned | canonical | Best hydrated open canonical for the exec stdout empty-result family. |
| #87228 | keep_related | planned | related | Related Codex app-server transcript invariant work, but a separate root cause and currently not merge/close ready. |
| #91076 | route_security | planned | security_sensitive | Exact job-listed security-signal ref; route only this item to central OpenClaw security handling. |

## Needs Human

- none
