---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-036"
mode: "plan"
run_id: "27560323972-1-39"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T01:05:08.248Z"
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

# pr-inventory-needs_proof-20260615T154534-036

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification. No GitHub mutations planned; low-signal close, fix PR, and merge are disabled. Hydrated open PRs are kept as independent backlog items needing maintainer/proof review; already-closed PRs are skipped as closed; unhydrated refs are marked needs_human only for missing live state.

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
| #89447 | keep_independent | planned | independent | Open independent PR with insufficient proof for closure or merge. |
| #89453 | needs_human | blocked | needs_human | Missing hydrated live state required for reliable classification. |
| #89467 | needs_human | blocked | needs_human | Missing hydrated live state required for reliable classification. |
| #57959 | keep_independent | planned | independent | Independent broad PR with failing checks and unresolved proof/review risk. |
| #92959 | needs_human | blocked | needs_human | Missing hydrated live state required for reliable classification. |
| #61485 | keep_independent | planned | independent | Independent feature PR; conflicts, proof failure, and unhydrated review/security-bot context block closure or merge. |
| #92963 | needs_human | blocked | needs_human | Missing hydrated live state required for reliable classification. |
| #92933 | needs_human | blocked | needs_human | Missing hydrated live state required for reliable classification. |
| #54652 | keep_independent | planned | independent | Independent narrow test PR awaiting proof/maintainer review. |
| #59816 | keep_independent | planned | independent | Independent channel PR with proof and review-bot context still unresolved. |
| #65058 | keep_independent | planned | independent | Independent channel parser fix awaiting proof/review resolution. |
| #65382 | keep_independent | planned | independent | Independent UI PR awaiting proof and review-bot resolution. |
| #65962 | keep_independent | planned | independent | Independent small build PR; cannot merge in this plan-mode shard. |
| #66213 | keep_independent | planned | independent | Independent automation PR with requested reviewer and blocked/proof-failing state. |
| #66720 | keep_closed | skipped | superseded | Already closed; no action to apply. |
| #66735 | keep_independent | planned | independent | Independent broad PR with conflicts, failing checks, and active review history. |
| #67420 | keep_independent | planned | independent | Independent feature PR awaiting proof and maintainer decision. |
| #67433 | keep_independent | planned | independent | Independent feature PR; proof exists but merge/review gates are not satisfied in this shard. |
| #67623 | keep_independent | planned | independent | Independent small PR; cannot close or merge without hydrated linked issue/proof and conflict resolution. |
| #67669 | keep_closed | skipped | superseded | Already closed; no action to apply. |
| #67734 | keep_independent | planned | independent | Independent channel PR awaiting proof. |
| #67758 | keep_independent | planned | independent | Independent provider compatibility PR awaiting proof/review resolution. |
| #67761 | keep_independent | planned | independent | Independent channel behavior PR with failing checks/proof. |
| #67782 | keep_independent | planned | independent | Independent PR with encouraging channel proof but no allowed merge action and incomplete merge preflight. |
| #67788 | keep_independent | planned | independent | Independent CLI/docs PR with failing checks and unresolved review-bot context. |

## Needs Human

- #89453: missing hydrated live state in the compacted preflight artifact.
- #89467: missing hydrated live state in the compacted preflight artifact.
- #92959: missing hydrated live state in the compacted preflight artifact.
- #92963: missing hydrated live state in the compacted preflight artifact.
- #92933: missing hydrated live state in the compacted preflight artifact.
