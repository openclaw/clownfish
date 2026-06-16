---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-646-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610224870"
workflow_run_id: "27610224870"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610224870"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.489Z"
canonical: "https://github.com/openclaw/openclaw/issues/89709"
canonical_issue: "https://github.com/openclaw/openclaw/issues/89709"
canonical_pr: "https://github.com/openclaw/openclaw/pull/89745"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-646-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610224870](https://github.com/openclaw/clownfish/actions/runs/27610224870)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/89709

## Summary

Kept #89709 open as the canonical issue. Current main at 4fee34876462a577b1ed825ecbf7ce807f298a17 still has the bounded-usage timestamp gap, and the hydrated candidate fix #89745 is open but not merge-ready in this job. Routed the exact security-sensitive linked PR #87222 only; closed PR #90485 remains historical superseded evidence.

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
| #87222 | route_security | planned | security_sensitive | Exact linked PR carries the security-sensitive signal and must route to central OpenClaw security handling without affecting the non-security #89709/#89745 usage bug path. |
| #89709 | keep_canonical | planned | canonical | The bug is still present on current main and the candidate fix has not landed, so closing #89709 would be premature. |
| #89745 | keep_canonical | planned | canonical | #89745 is the canonical fix path for this cluster but must stay open for normal review/author follow-up; this worker cannot merge or repair it. |
| #90485 | keep_closed | skipped | superseded | Closed context refs are historical evidence only and must not receive close actions. |

## Needs Human

- none
