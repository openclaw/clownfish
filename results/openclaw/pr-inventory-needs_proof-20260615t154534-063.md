---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-063"
mode: "plan"
run_id: "27560323972-1-66"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-21T09:55:05.904Z"
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
needs_human_count: 5
---

# pr-inventory-needs_proof-20260615T154534-063

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-mode PR inventory classification shard. The preflight artifact hydrates 20 of 25 listed PR refs; all hydrated refs are open pull requests with no shared canonical, no security-sensitive signal, and no allowed merge/fix path. Five listed refs are absent from the compacted preflight artifact, so live state is unavailable for those specific decisions.

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
| Needs human | 5 |

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
| #87100 | keep_independent | planned | independent | No shared canonical and no allowed merge/fix path; keep as an independent PR needing normal maintainer review. |
| #87119 | keep_independent | planned | independent | Draft PR with failed proof and no dedupe target; keep independent for author/maintainer follow-up. |
| #87122 | keep_independent | planned | independent | Provider/auth behavior requires normal technical review; keep independent. |
| #87164 | keep_independent | planned | independent | Session-state correctness needs maintainer review; keep independent rather than close or merge. |
| #87206 | keep_independent | planned | independent | Narrow bug PR but proof failed; keep independent for normal review. |
| #87260 | keep_independent | planned | independent | Keep independent; closure is not allowed by this plan's low-signal closeout permissions. |
| #87275 | keep_independent | planned | independent | Failed proof/checks block merge or fixed-by-candidate treatment; keep independent. |
| #92455 | needs_human | blocked | needs_human | Live preflight state is unavailable for this listed ref. |
| #82303 | keep_independent | planned | independent | Potentially viable independent PR, but this plan shard cannot merge or fix. |
| #86711 | keep_independent | planned | independent | Potentially viable independent PR, outside merge authority for this plan. |
| #93039 | needs_human | blocked | needs_human | Live preflight state is unavailable for this listed ref. |
| #93108 | needs_human | blocked | needs_human | Live preflight state is unavailable for this listed ref. |
| #87330 | keep_independent | planned | independent | Session/message-delivery behavior needs proof and review; keep independent. |
| #87377 | keep_independent | planned | independent | Broad feature PR should remain an independent maintainer review item. |
| #93157 | needs_human | blocked | needs_human | Live preflight state is unavailable for this listed ref. |
| #90966 | keep_independent | planned | independent | Channel availability PR needs proof/review; keep independent. |
| #90969 | keep_independent | planned | independent | Draft PR with failed proof; keep independent for author follow-up. |
| #90990 | keep_independent | planned | independent | Small independent cleanup PR with failed proof; do not close or merge in this shard. |
| #90997 | keep_independent | planned | independent | Telegram message-delivery PR needs proof; keep independent. |
| #91002 | keep_independent | planned | independent | Potentially viable independent PR, but merge/fix are out of scope. |
| #91015 | keep_independent | planned | independent | Availability/hardening PR is non-security per preflight but needs proof and review; keep independent. |
| #91028 | keep_independent | planned | independent | Feature/provider-boundary PR requires normal maintainer and bot-review handling; keep independent. |
| #91050 | keep_independent | planned | independent | Session-state related PR needs proof/review; keep independent. |
| #91055 | needs_human | blocked | needs_human | Live preflight state is unavailable for this listed ref. |
| #87480 | keep_independent | planned | independent | Provider compatibility PR needs real proof/maintainer review; keep independent. |

## Needs Human

- #92455: listed in job candidates but not hydrated in the compacted preflight artifact, so target_kind and target_updated_at are unavailable.
- #93039: listed in job candidates but not hydrated in the compacted preflight artifact, so target_kind and target_updated_at are unavailable.
- #93108: listed in job candidates but not hydrated in the compacted preflight artifact, so target_kind and target_updated_at are unavailable.
- #93157: listed in job candidates but not hydrated in the compacted preflight artifact, so target_kind and target_updated_at are unavailable.
- #91055: listed in job candidates but not hydrated in the compacted preflight artifact, so target_kind and target_updated_at are unavailable.
