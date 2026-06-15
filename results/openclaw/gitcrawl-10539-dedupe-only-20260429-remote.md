---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-10539-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109632916"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109632916"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.708Z"
canonical: "https://github.com/openclaw/openclaw/pull/62503"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/62503"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-10539-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109632916](https://github.com/openclaw/clownfish/actions/runs/25109632916)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/62503

## Summary

Classified #62503 as the current open canonical devcontainer PR. #67841 is related but not a duplicate because it adds benchmark and SBOM workflow scope with unresolved CI/release review questions. Closed refs #48497 and #60695 remain historical context only.

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
| #48497 | keep_closed | skipped | independent | Already closed and not a viable canonical item. |
| #60695 | keep_closed | skipped | superseded | Closed representative is obsolete; #62503 replaces it as the open canonical devcontainer PR. |
| #62503 | keep_canonical | planned | canonical | Best surviving canonical path for the devcontainer-only cluster, but this autonomous dedupe-only job should not merge or repair it. |
| #67841 | keep_related | planned | related | Related to the devcontainer family but not a true duplicate or safe superseded closeout because it contains distinct benchmark/SBOM workflow work and unresolved maintainer-level CI/release questions. |

## Needs Human

- none
