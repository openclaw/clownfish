---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2501-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133523783"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133523783"
head_sha: "70c8a777fa9eb04b416c45f07c80bfc38f2df21b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T21:04:45.085Z"
canonical: "https://github.com/openclaw/openclaw/issues/56467"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56467"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2501-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133523783](https://github.com/openclaw/clownfish/actions/runs/25133523783)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/56467

## Summary

Hydrated state shows #56467 is the only open cluster candidate. The representative #52703 is closed, so it is retained only as historical decision evidence rather than used as an executable duplicate-close canonical. Keep #56467 as the current open canonical for this family, keep closed context refs untouched, and route unrelated security-shaped PR evidence on #41964 to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #41924 | keep_closed | skipped | related | Closed linked context only; no mutation planned. |
| #41964 | route_security | planned | security_sensitive | Security-shaped hydrated linked PR evidence must be quarantined separately; it does not block #56467 classification. |
| #52698 | keep_closed | skipped | related | Already closed related context; retain as historical evidence for the current open canonical #56467. |
| #52703 | keep_closed | skipped | related | Closed representative retained as historical evidence only; the current open canonical is #56467. |
| #56467 | keep_canonical | planned | canonical | Retain the only open candidate as the current canonical instead of closing it against the already-closed historical representative #52703. |

## Needs Human

- none
