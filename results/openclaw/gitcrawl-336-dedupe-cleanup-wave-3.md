---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-336-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610220130"
workflow_run_id: "27610220130"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610220130"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.411Z"
canonical: "https://github.com/openclaw/openclaw/issues/48045"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48045"
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

# gitcrawl-336-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610220130](https://github.com/openclaw/clownfish/actions/runs/27610220130)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/48045

## Summary

Classified #48045 as the live canonical issue. Current main at 4fee34876462a577b1ed825ecbf7ce807f298a17 still has the direct Playwright /navigate path returning only {url} and rethrowing non-retryable navigation errors; the existing managed download work covers adjacent click/waiter paths but not the issue's direct Content-Disposition navigation case. No close, merge, or fix action is safe or allowed in this job. The excluded open overlap PR #89416 has security-boundary signals and is quarantined for central security routing as an exact PR ref, while remaining non-security items stay classified as evidence/context only.

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
| #48045 | keep_canonical | planned | canonical | #48045 remains the best live canonical because it tracks the still-open direct /navigate CDP attachment-download bug, and no duplicate target exists in this cluster that can be closed. |
| #89416 | route_security | planned | security_sensitive | Security-sensitive signals are scoped to this exact open PR; route #89416 to central security triage without poisoning the non-security canonical issue classification. |
| #48132 | keep_closed | skipped | superseded | Already-closed historical PR; evidence only, no mutation. |
| #64558 | keep_closed | skipped | superseded | Already-closed historical PR; it explains the adjacent landed managed-download work but does not close the canonical issue in this cluster. |

## Needs Human

- none
