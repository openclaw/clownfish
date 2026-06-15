---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238824-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25107703512"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107703512"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.648Z"
canonical: "https://github.com/openclaw/openclaw/pull/72614"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72614"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238824-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107703512](https://github.com/openclaw/clownfish/actions/runs/25107703512)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72614

## Summary

Canonical hint #64787 is obsolete because it is closed. The current canonical path is merged PR #72614 on main. Closed seed PRs stay closed, #72101 remains open as related follow-up work for the distinct model='default' behavior, and security-sensitive linked PR #47115 is quarantined only for central security handling. No close/comment/label/merge/fix mutation is planned.

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
| #47115 | route_security | planned | security_sensitive | Route the security-sensitive linked ref to central OpenClaw security handling; do not use it as canonical evidence for this dedupe cluster. |
| #72614 | keep_closed | skipped | canonical | Current canonical fix path is already merged and closed; no mutation is needed or allowed. |
| #58686 | keep_closed | skipped | superseded | Already closed as superseded by the merged canonical #72614; no close action may be emitted. |
| #63121 | keep_closed | skipped | superseded | Already closed as superseded by #72614; no further mutation is valid. |
| #64787 | keep_closed | skipped | superseded | Representative is obsolete and already closed; keep it as historical superseded evidence only. |
| #72331 | keep_closed | skipped | superseded | Historical merged predecessor; final canonical path for this cluster is #72614. |
| #72101 | keep_related | planned | related | Keep open as related follow-up work, not a true duplicate of the streamTo canonical fix. |

## Needs Human

- none
