---
repo: "openclaw/openclaw"
cluster_id: "low-signal-pr-sweep-20260615T1033-13"
mode: "plan"
run_id: "27540419985"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27540419985"
head_sha: "51197cadc27d6fbaf52d53f2f539b911f08d1209"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T10:40:04.883Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 4
---

# low-signal-pr-sweep-20260615T1033-13

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27540419985](https://github.com/openclaw/clownfish/actions/runs/27540419985)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Planning low-signal PR sweep only. Used the supplied preflight artifact as live state; no direct GitHub mutations are planned.

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
| Needs human | 4 |

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
| #89966 | needs_human | planned | needs_human | Maintainer judgment is required on whether to accept third-party external docs links; the evidence does not meet the boringly-clear low-signal close bar. |
| #90063 | needs_human | planned | needs_human | This is a focused public SDK/API contract change with review proof, not a boring low-signal PR. Maintainer API-shape judgment is required. |
| #89816 | needs_human | planned | needs_human | Active author follow-up and operator-risk/product judgment block low-signal closure. |
| #90069 | close_superseded | planned | superseded | The PR is open but its documented behavior was made stale by the hydrated merged fix #92343. Superseded close is allowed by the closure policy and includes live target_updated_at. |
| #89783 | needs_human | planned | needs_human | This is a substantive Feishu feature/fix PR with proof and unresolved maintainer compatibility judgment; it is not eligible for low-signal close. |

## Needs Human

- #89966: Maintainer judgment on whether the Firecrawl external docs links should be accepted.
- #90063: Maintainer judgment on public SDK helper/type contract shape.
- #89816: Maintainer judgment on operator-facing launchd workaround risk, with active author follow-up.
- #89783: Maintainer judgment on Feishu bot-to-bot capability, config/data-model compatibility, and broad message-delivery risk.
