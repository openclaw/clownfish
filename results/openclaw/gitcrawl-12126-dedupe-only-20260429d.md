---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-12126-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143155524"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143155524"
head_sha: "a2bff82d05ec1e93ecfbfdca9074f10f1f9b53ad"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.334Z"
canonical: "https://github.com/openclaw/openclaw/issues/65522"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65522"
canonical_pr: "https://github.com/openclaw/openclaw/pull/74690"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-12126-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143155524](https://github.com/openclaw/clownfish/actions/runs/25143155524)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65522

## Summary

Hydrated state keeps #65522 as the canonical issue and #74690 as the canonical focused fix PR. #66395 overlaps the same UI guard but is superseded by #74690; #73836 is a related broader responsiveness/media report with unique remaining scope. No close, merge, or fix action is planned because instant close, merge, fix, and post-merge closeout are disabled for this job and the canonical PR has not landed.

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
| #65522 | keep_canonical | planned | canonical | Keep #65522 open as the canonical tracking issue until the focused canonical PR #74690 lands or is closed. |
| #74690 | keep_canonical | planned | canonical | Treat #74690 as the canonical fix candidate, but do not recommend merge because this job disallows merge and lacks a completed merge preflight with Codex /review. |
| #66395 | keep_related | planned | superseded | Classify #66395 as superseded by hydrated canonical fix PR #74690, but leave it open in this run because closeout is disabled/premature until the canonical path lands or maintainers choose to close it. |
| #73836 | keep_related | planned | related | Keep #73836 open as related broader follow-up work; it is not a true duplicate of #65522 and is only partially covered by #74690. |

## Needs Human

- none
