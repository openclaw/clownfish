---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156629-autonomous-smoke"
mode: "autonomous"
run_id: "24985865652"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24985865652"
head_sha: "a357d4628713c59472019d207d99949bc4b4ad8e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T09:08:17.794Z"
canonical: "https://github.com/openclaw/openclaw/pull/72660"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48771"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72660"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156629-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24985865652](https://github.com/openclaw/clownfish/actions/runs/24985865652)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72660

## Summary

Autonomous classification found #72660 is the calibrated canonical PR for the Windows restart policy-close fix, but it is not merge-ready because review-bot/security-analysis findings and failing checks remain unresolved. #48771 remains the canonical issue for that narrow bug, #63491 is related broader Windows restart/state drift, and #69056 is a separate related SIGUSR1 Windows restart PR.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/72660 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72660 | merge_canonical | blocked | fix_pr | mergeable state is CONFLICTING |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48766 | keep_closed | skipped | duplicate | Already closed; retained as historical duplicate evidence only. |
| #48771 | keep_canonical | planned | canonical | Canonical issue remains open until the calibrated fix PR is repaired, reviewed, validated, and merged. |
| #49865 | route_security | planned | security_sensitive | Quarantine only this security-sensitive item; it does not block unrelated Windows restart classification. |
| #63491 | keep_related | planned | related | Related broader Windows restart/state-drift report, not a true duplicate of the narrow #48771/#72660 fix path. |
| #64476 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; historical context only. |
| #67416 | keep_closed | skipped | related | Already closed; related evidence for the Windows restart family only. |
| #69056 | keep_related | planned | related | Separate Windows restart root cause; keep open for its own review/merge path. |
| #69057 | keep_closed | skipped | superseded | Already closed as superseded by #69056; historical context only. |
| #72660 | fix_needed | planned | canonical | Repair the calibrated canonical PR branch, address review findings, rebase if needed, run /review and pnpm check:changed, then merge only after deterministic gates pass. |
| cluster:ghcrawl-156629-autonomous-smoke | build_fix_artifact | planned |  | Maintainer-calibrated canonical PR needs repair_contributor_branch work before merge. |

## Needs Human

- none
