---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-170-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610220220"
workflow_run_id: "27610220220"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610220220"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.414Z"
canonical: "https://github.com/openclaw/openclaw/issues/92141"
canonical_issue: "https://github.com/openclaw/openclaw/issues/92141"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-170-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610220220](https://github.com/openclaw/clownfish/actions/runs/27610220220)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/92141

## Summary

Hydrated preflight state supports only non-mutating classification. Security-sensitive linked issues #61009 and #72858 are routed to central security handling item-by-item. Closed representative #87213 is historical context only. The remaining open non-security candidate #92141 is the live canonical issue for its distinct WebChat/Codex node-exec tool-surface report, not a duplicate of the closed selector-canonicalization issue, and no close/fix/merge action is allowed or appropriate in this job.

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
| #61009 | route_security | planned | security_sensitive | Security-sensitive exec-routing documentation issue; route only this exact issue to central OpenClaw security handling. |
| #72858 | route_security | planned | security_sensitive | Security-sensitive browser-surface host exec allowlist semantics; route only this exact issue to central OpenClaw security handling. |
| #87213 | keep_closed | skipped |  | Already closed historical representative; no mutation is valid. |
| #92141 | keep_canonical | planned | canonical | Best live non-security canonical for the remaining candidate; not a duplicate of the closed selector-canonicalization issue and no close/fix path is enabled. |

## Needs Human

- none
