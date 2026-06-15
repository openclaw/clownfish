---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238861-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107745553"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107745553"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.659Z"
canonical: "https://github.com/openclaw/openclaw/pull/73228"
canonical_issue: "https://github.com/openclaw/openclaw/issues/24693"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73228"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238861-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107745553](https://github.com/openclaw/clownfish/actions/runs/25107745553)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73228

## Summary

The hydrated artifact shows the original representative #68667 is already closed and superseded by merged replacement PR #73228. Quarantine the closed security-sensitive issue #24693 to central security handling, keep closed historical refs as evidence only, and plan closure only for the remaining open draft PR #39046 as superseded by #73228.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39046 | close_superseded | blocked | superseded | canonical is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #24016 | keep_closed | skipped | related | Closed related context only; no mutation planned. |
| #24693 | route_security | planned | security_sensitive | Security-sensitive item is quarantined to central security handling without mutating it. |
| #39046 | close_superseded | planned | superseded | The only open PR in the cluster is an obsolete draft covering the same root cause already merged through hydrated replacement PR #73228. |
| #68667 | keep_closed | skipped | superseded | Closed source PR is already superseded by hydrated replacement PR #73228 with credit preserved. |
| #73228 | keep_closed | skipped | canonical | Merged replacement PR is the canonical fixed path on current main. |

## Needs Human

- none
