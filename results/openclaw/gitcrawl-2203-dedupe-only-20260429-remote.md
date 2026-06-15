---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2203-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132421068"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132421068"
head_sha: "2a25e72cd9df0710ef893de8f25823a6a78be854"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.946Z"
canonical: "https://github.com/openclaw/openclaw/issues/65636"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65636"
canonical_pr: "https://github.com/openclaw/openclaw/pull/66023"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 2
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2203-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132421068](https://github.com/openclaw/clownfish/actions/runs/25132421068)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65636

## Summary

Classified the open candidates from the hydrated preflight artifact. The closed representative #65669 is historical; the custom-job-ID family should stay centered on open issue #65636 with #66023 as the editable but not merge-ready implementation lane. Planned closeouts only for open issues clearly covered by hydrated candidate fixes: #50982 by merged #73379 and #59441 by active scoped PR #70046. No merge or fix actions are emitted.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 2 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #50982 | close_fixed_by_candidate | blocked | fixed_by_candidate | canonical is not listed in job refs |
| #59441 | close_fixed_by_candidate | blocked | fixed_by_candidate | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #40218 | keep_related | planned | related | Same custom-job-ID feature family, but keep open for credit and review history; do not close a useful contributor PR while the canonical implementation lane is still under repair. |
| #42327 | keep_related | planned | related | Related cron CLI ID work, but not a duplicate of the custom job ID creation feature and not safe to merge in this dedupe-only job. |
| #50982 | close_fixed_by_candidate | planned | fixed_by_candidate | The open issue is covered by a hydrated merged PR on the same thread-id feature path, so closeout can be replayed safely if the applicator re-fetch confirms the issue is unchanged. |
| #59441 | close_fixed_by_candidate | planned | fixed_by_candidate | The issue has no unique remaining scope beyond hydrated candidate PR #70046, and require_fix_before_close is false for this dedupe job. |
| #65636 | keep_canonical | planned | canonical | This is the clearest open canonical issue for the obsolete #65669 representative and should stay open until #66023 or an equivalent fix lands. |
| #66023 | keep_canonical | planned | canonical | Best current implementation lane for the custom-job-ID family, but merge and fixed-by-candidate closeout are blocked by review findings and failing checks. |
| #69975 | keep_related | planned | related | Related cron CLI UX work with actionable review feedback; keep open and do not merge or close in this cluster. |
| #70046 | keep_related | planned | fixed_by_candidate | Keep the candidate PR open as the validation and implementation path for #59441; no merge action is allowed by this job. |

## Needs Human

- none
