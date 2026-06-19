---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-064"
mode: "plan"
run_id: "27560323972-1-67"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T05:41:39.828Z"
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

# pr-inventory-needs_proof-20260615T154534-064

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification shard. No GitHub mutations planned. The cluster preflight artifact hydrated 20 of 25 listed PRs; the hydrated PRs are independent backlog candidates, not duplicates or a shared canonical family. Five listed PRs were not present as hydrated preflight items in the compacted artifact, so they are classified non-mutating with missing-live-state evidence only.

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
| #93160 | needs_human | planned | needs_human | Missing hydrated live state for a listed candidate blocks an auditable PR classification beyond this specific needs_human item. |
| #93161 | needs_human | planned | needs_human | Missing hydrated live state for a listed candidate blocks an auditable PR classification beyond this specific needs_human item. |
| #49022 | keep_independent | planned | independent | Standalone draft feature PR with failing proof/check evidence; keep as independent backlog work. |
| #43659 | keep_independent | planned | independent | Independent auth-provider bugfix candidate; failing proof and missing bot-review detail block any merge or close recommendation. |
| #60842 | keep_independent | planned | independent | Independent agents/toolsAllow bugfix candidate; failing proof/check state prevents stronger action. |
| #75208 | keep_independent | planned | independent | Broad independent feature PR with failing proof; not eligible for close, merge, or fix planning in this job. |
| #87709 | keep_independent | planned | independent | Independent Feishu channel bugfix candidate; proof failure blocks stronger action. |
| #87777 | keep_independent | planned | independent | Independent large Telegram feature PR; unresolved review-bot preflight prevents merge-style action, and no duplicate/superseded evidence exists. |
| #87799 | keep_independent | planned | independent | Independent installer bugfix candidate with passing proof; keep for maintainer review because merge is blocked in this shard. |
| #87863 | keep_independent | planned | independent | Independent QQ Bot bugfix candidate; failing proof blocks merge-style action. |
| #87900 | keep_independent | planned | independent | Broad draft feature PR; keep as independent backlog work. |
| #87941 | keep_independent | planned | independent | Independent web UI feature PR with dependency changes and failing proof; no closure/merge action is safe in plan mode. |
| #88894 | needs_human | planned | needs_human | Missing hydrated live state for a listed candidate blocks an auditable PR classification beyond this specific needs_human item. |
| #88013 | keep_independent | planned | independent | Independent secrets bugfix candidate with passing proof; keep for maintainer review. |
| #88023 | keep_independent | planned | independent | Independent hooks/session recovery feature PR; failing proof blocks stronger action. |
| #88078 | keep_independent | planned | independent | Independent Active Memory bugfix candidate with passing proof; keep for maintainer review. |
| #88082 | keep_independent | planned | independent | Independent draft provider-model update; keep for maintainer review after draft/proof state is resolved. |
| #88112 | keep_independent | planned | independent | Independent agent attachment bugfix candidate; merge is blocked by job mode/actions, so keep for maintainer review. |
| #88193 | keep_independent | planned | independent | Independent draft Telegram delivery bugfix candidate; keep for maintainer review. |
| #88224 | keep_independent | planned | independent | Independent update bugfix candidate; failing proof blocks stronger action. |
| #88239 | keep_independent | planned | independent | Independent agents bugfix candidate with passing proof; keep for maintainer review. |
| #88240 | keep_independent | planned | independent | Independent broad UI/session PR; keep for maintainer review rather than planning closure or merge. |
| #88249 | keep_independent | planned | independent | Independent broad desktop feature PR; failing lint and broad scope block stronger action. |
| #88336 | needs_human | planned | needs_human | Missing hydrated live state for a listed candidate blocks an auditable PR classification beyond this specific needs_human item. |
| #88396 | needs_human | planned | needs_human | Missing hydrated live state for a listed candidate blocks an auditable PR classification beyond this specific needs_human item. |

## Needs Human

- #93160: missing hydrated preflight state for a listed candidate.
- #93161: missing hydrated preflight state for a listed candidate.
- #88894: missing hydrated preflight state for a listed candidate.
- #88336: missing hydrated preflight state for a listed candidate.
- #88396: missing hydrated preflight state for a listed candidate.
