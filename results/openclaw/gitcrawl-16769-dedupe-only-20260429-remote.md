---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-16769-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130306747"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130306747"
head_sha: "59815fb21cd4e74e6fe01972c176792bdc76c884"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.865Z"
canonical: "https://github.com/openclaw/openclaw/issues/49603"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49603"
canonical_pr: "https://github.com/openclaw/openclaw/pull/49660"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-16769-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130306747](https://github.com/openclaw/clownfish/actions/runs/25130306747)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/49603

## Summary

No GitHub mutations planned. #49603 replaces closed representative #60258 as the open canonical issue for self-owned session lock cleanup; #49660 is the repairable contributor PR, but unresolved P1 bot review comments and blocked merge/fix gates prevent fixed-by-candidate closeout. Open linked refs #63819, #66399, and #66646 remain related follow-up work, not duplicates.

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
| #49603 | keep_canonical | planned | canonical | Keep #49603 open as the current canonical issue; it is not safe to close until #49660 or another hydrated fix lands. |
| #49660 | keep_canonical | planned | canonical | Keep #49660 as the canonical repair path, but do not recommend merge, closeout, or repair execution in this job because merge/fix/raise_pr are blocked and P1 review comments remain. |
| #63819 | keep_related | planned | related | Related session-timeout fallout, but a different root cause and code path than #49603 self-owned session lock cleanup; keep open as a separate follow-up. |
| #66399 | keep_related | planned | related | Related because SIGKILL can cause session-lock cleanup cascades, but it is a process-supervisor behavior gap, not a duplicate of #49603 startup self-lock cleanup. |
| #66646 | keep_related | planned | related | Related session-lock symptom family, but the root cause is model-fallback classification/control flow rather than stale self-owned lock reclamation; keep open separately. |

## Needs Human

- none
