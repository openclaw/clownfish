---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238800-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25107663920"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107663920"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.635Z"
canonical: "https://github.com/openclaw/openclaw/issues/55334"
canonical_issue: "https://github.com/openclaw/openclaw/issues/55334"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238800-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107663920](https://github.com/openclaw/clownfish/actions/runs/25107663920)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/55334

## Summary

Hydrated state supports #55334 as the live canonical issue for sessions.json/skillsSnapshot bloat. #51977 is already closed as its duplicate. #45438, #54155, #71227, and #73114 are related but not closable because each preserves a distinct structuredClone, broad RSS/soak, latency/run-budget, or task-record sub-scope. No security-sensitive refs, merge path, closure mutation, or fix artifact is planned for this dedupe-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #55334 | keep_canonical | planned | canonical | Best live canonical for the retained skillsSnapshot/systemPromptReport duplication and unbounded sessions.json growth family. |
| #51977 | keep_closed | skipped | duplicate | Already closed as a duplicate of #55334; keep as historical evidence only. |
| #45438 | keep_related | planned | related | Related Gateway OOM family, but not a duplicate of #55334 because the remaining work is the structuredClone/auth-profile path and validation proof. |
| #54155 | keep_related | planned | related | Related broad memory tracker with distinct soak/profiling and non-skillsSnapshot contributors; leave open. |
| #71227 | keep_related | planned | related | Related session-store bloat issue, but not a true duplicate because it preserves a distinct run-budget/latency failure mode. |
| #73114 | keep_related | planned | related | Related mixed session/task accumulation report; leave open because it contains unique task-record scope. |

## Needs Human

- none
