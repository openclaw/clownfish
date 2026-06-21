---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T154534-098"
mode: "plan"
run_id: "27560323972-1-100"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T09:24:39.250Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 11
---

# pr-inventory-ready_for_maintainer-20260615T154534-098

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification shard. No shared canonical is selected. Hydrated open PRs with no clear close/merge path are kept independently; PRs with active author/maintainer follow-up or missing hydration are escalated only for that item. No security-sensitive item was detected in the preflight artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 11 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90468 | needs_human | planned | needs_human | Active maintainer changes-requested review blocks automated close/merge classification. |
| #90487 | keep_independent | planned | independent | Independent ready-for-maintainer PR; no dedupe, close, or merge action is safe in plan mode. |
| #90489 | keep_independent | planned | independent | Independent narrow PR; keep open for maintainer review. |
| #90490 | needs_human | planned | needs_human | Active author follow-up and maintainer changes-requested review require human handling. |
| #90493 | needs_human | planned | needs_human | Active author follow-up plus dirty merge state/check hydration gap require item-specific human review. |
| #90503 | keep_independent | planned | independent | Independent narrow PR; keep open for maintainer review. |
| #91378 | needs_human | planned | needs_human | Required live state is absent from the preflight artifact for this listed candidate. |
| #93080 | needs_human | planned | needs_human | Required live state is absent from the preflight artifact for this listed candidate. |
| #93058 | needs_human | planned | needs_human | Required live state is absent from the preflight artifact for this listed candidate, and job metadata indicates active author follow-up. |
| #79687 | keep_independent | planned | independent | Independent focused PR; keep open for maintainer review. |
| #79702 | keep_independent | planned | independent | Independent PR with passing preflight evidence; keep open for maintainer review. |
| #92223 | needs_human | planned | needs_human | Required live state is absent from the preflight artifact for this listed candidate. |
| #90537 | keep_independent | planned | independent | Independent PR; keep open for maintainer review. |
| #90547 | keep_independent | planned | independent | Independent narrow attribution PR; keep open for maintainer review. |
| #90566 | keep_independent | planned | independent | Independent narrow PR; keep open for maintainer review. |
| #90571 | keep_closed | skipped | fixed_by_candidate | Already closed/merged; no closure action is valid. |
| #90572 | keep_independent | planned | independent | Independent focused PR; keep open for maintainer review. |
| #90586 | needs_human | planned | needs_human | Active author follow-up requires item-specific human review. |
| #90610 | keep_independent | planned | independent | Independent broad PR; keep open for maintainer review rather than close or merge. |
| #90622 | keep_independent | planned | independent | Independent partial mitigation; keep open for maintainer review. |
| #78813 | needs_human | planned | needs_human | Active author follow-up and dirty-candidate status require item-specific human review. |
| #79200 | keep_independent | planned | independent | Independent focused PR; keep open for maintainer review. |
| #79832 | keep_independent | planned | independent | Independent focused PR; keep open for maintainer review. |
| #93072 | needs_human | planned | needs_human | Required live state is absent from the preflight artifact, and job metadata indicates active re-review. |
| #83101 | needs_human | planned | needs_human | Active author follow-up requires item-specific human review. |

## Needs Human

- #90468: maintainer changes-requested review remains active.
- #90490: maintainer changes-requested review and waiting-on-author status.
- #90493: dirty merge state, waiting-on-author status, and checks hydration EOF.
- #91378: listed candidate missing hydrated live state in preflight artifact.
- #93080: listed candidate missing hydrated live state in preflight artifact.
- #93058: listed candidate missing hydrated live state and job metadata says waiting on author.
- #92223: listed candidate missing hydrated live state in preflight artifact.
- #90586: waiting-on-author status unresolved in hydrated artifact.
- #78813: waiting-on-author and dirty-candidate labels unresolved.
- #93072: listed candidate missing hydrated live state and job metadata says re-review loop.
- #83101: waiting-on-author status unresolved in hydrated artifact.
