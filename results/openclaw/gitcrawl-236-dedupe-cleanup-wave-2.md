---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-236-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384270"
workflow_run_id: "27609384270"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384270"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.120Z"
canonical: null
canonical_issue: null
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

# gitcrawl-236-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384270](https://github.com/openclaw/clownfish/actions/runs/27609384270)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Routed all validator/security-sensitive hydrated refs individually to central OpenClaw security handling and left the already-closed context issue untouched. No close, merge, or fix actions are planned because the job blocks fix/raise_pr/merge and the remaining live refs require security routing rather than dedupe cleanup.

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
| #64086 | route_security | planned | security_sensitive | The validator marks #64086 as security-sensitive for this result, so the safe deterministic repair is to quarantine this exact issue with route_security instead of keeping it as canonical. |
| #53774 | route_security | planned | security_sensitive | Security-sensitive linked context must be quarantined individually and not handled through dedupe cleanup. |
| #64085 | keep_closed | skipped | superseded | Already closed context item; no mutation is valid. |
| #64127 | route_security | planned | security_sensitive | Security-sensitive linked PR must be quarantined individually; it is not a valid canonical or candidate fix for closing #64086 in this job. |

## Needs Human

- none
