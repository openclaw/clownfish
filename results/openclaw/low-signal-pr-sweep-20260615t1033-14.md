---
repo: "openclaw/openclaw"
cluster_id: "low-signal-pr-sweep-20260615T1033-14"
mode: "plan"
run_id: "27540420483"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27540420483"
head_sha: "51197cadc27d6fbaf52d53f2f539b911f08d1209"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T10:40:04.886Z"
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
needs_human_count: 3
---

# low-signal-pr-sweep-20260615T1033-14

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27540420483](https://github.com/openclaw/clownfish/actions/runs/27540420483)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only low-signal sweep found no open PR that is boringly safe to close. Two listed candidates were already closed, and the three open PRs are focused fixes or docs work with proof, linked issue context, maintainer signal, or technical correctness questions that require human review outside the low-signal close policy.

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
| Needs human | 3 |

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
| #63339 | keep_closed | skipped |  | Already closed candidates must not receive close_low_signal or any other close action. |
| #65707 | keep_closed | skipped |  | Already closed candidates must not receive close_low_signal or any other close action. |
| #85308 | needs_human | blocked | needs_human | The low-signal policy forbids closing focused bug fixes, PRs with maintainer signal, or PRs needing technical correctness judgment. |
| #90542 | needs_human | blocked | needs_human | This is a focused behavior/config contract PR, not a boring low-signal cleanup close candidate. |
| #90625 | needs_human | blocked | needs_human | This is linked docs work with a concrete issue and a technical docs correctness blocker; low-signal closure would be inappropriate and fixes are blocked by the job. |

## Needs Human

- #85308 needs maintainer review because it is a focused P1 subagent delivery fix with maintainer signal, proof, and persistent state-shape changes.
- #90542 needs maintainer/product judgment because it changes shipped mention-pattern allow-mode semantics and lacks the required real behavior proof/generated metadata alignment.
- #90625 needs maintainer or author follow-up because it addresses a real linked docs gap but the current instructions need a narrow correctness repair.
