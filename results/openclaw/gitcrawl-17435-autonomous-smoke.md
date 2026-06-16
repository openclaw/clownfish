---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-17435-autonomous-smoke"
mode: "autonomous"
run_id: "27598168591"
workflow_run_id: "27598168591"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598168591"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T06:19:29.397Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-17435-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598168591](https://github.com/openclaw/clownfish/actions/runs/27598168591)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

The preflight artifact materially disagrees with the job inventory: every hydrated ref is a closed pull request unrelated to the rate-limit/Clawhub issue family named in the job, and there is no open hydrated canonical or candidate to classify or close. No GitHub mutations are safe from this cluster as hydrated.

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
| Needs human | 1 |

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
| #390 | keep_closed | skipped | superseded | Already closed and unrelated to the job's rate-limit issue family. |
| #521 | keep_closed | skipped | independent | Already closed and independent of the rate-limit cluster. |
| #524 | keep_closed | skipped | superseded | Obsolete closed representative; no open canonical replacement was hydrated. |
| #539 | keep_closed | skipped | independent | Already closed and independent of the rate-limit cluster. |
| #589 | keep_closed | skipped | independent | Already closed and independent of the rate-limit cluster. |
| cluster:gitcrawl-17435-autonomous-smoke | needs_human | blocked | needs_human | Material job/preflight mismatch leaves the actual rate-limit canonical and candidates unhydrated; maintainer or planner should regenerate the cluster from fresh GitHub state before any mutation. |

## Needs Human

- Regenerate or replan cluster gitcrawl-17435-autonomous-smoke: the job inventory names rate-limit/Clawhub issues, but the hydrated refs are all closed unrelated pull requests, so no canonical rate-limit path is available in scope.
