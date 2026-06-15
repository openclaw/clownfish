---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-041"
mode: "plan"
run_id: "27549045141"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549045141"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.660Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-needs_proof-20260615T131654-041

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549045141](https://github.com/openclaw/clownfish/actions/runs/27549045141)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The hydrated preflight artifact covers 20 open PRs; no shared canonical is present and the job explicitly says this is not a dedupe cluster. No merge, fix, raise_pr, or low-signal close action is allowed by the job permissions, so each hydrated PR is kept independent for normal maintainer review/proof handling. The remaining listed candidates were not present in the compacted hydrated item matrix, so they are classified non-mutating with null live timestamps rather than planning any close-style action.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
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
| #91476 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #93065 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #93089 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #93111 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #92301 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #91140 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #91161 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #91162 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #91180 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #87739 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #93151 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #45901 | keep_independent | planned | independent | Open broad proof-needed PR with failing checks; no shared canonical and no allowed mutation. |
| #60328 | keep_independent | planned | independent | Feature PR remains independent and needs proof/review outside this inventory shard. |
| #64611 | keep_independent | planned | independent | Narrow bugfix candidate, but proof gate is failing and merge/fix actions are unavailable. |
| #69904 | keep_independent | planned | independent | Independent message/session behavior PR with proof failures; no closure or merge path in plan mode. |
| #70156 | keep_independent | planned | independent | Independent CI/hygiene proposal requiring maintainer review; no allowed close/merge action. |
| #71135 | keep_independent | planned | independent | Draft feature PR should remain independently open for author/maintainer follow-up. |
| #71154 | keep_independent | planned | independent | Independent exec-adjacent bugfix candidate with unresolved proof/check failures. |
| #71205 | keep_independent | planned | independent | Independent config behavior proposal requiring proof/maintainer review. |
| #71249 | keep_independent | planned | independent | Independent proof-needed PR; no closure/merge allowed. |
| #71382 | keep_independent | planned | independent | Independent WhatsApp feature/bugfix candidate blocked by proof/check failures. |
| #71517 | keep_independent | planned | independent | Potentially useful independent PR, but merge is not allowed and preflight is incomplete. |
| #71678 | keep_independent | planned | independent | Broad independent memory PR with failing checks and incomplete proof. |
| #71792 | keep_independent | planned | independent | Independent session-state fix candidate with proof/check blockers. |
| #71837 | keep_independent | planned | independent | Independent feature/fix PR with non-main base and proof blocker. |
| #71839 | keep_independent | planned | independent | Independent Telegram behavior candidate requiring proof follow-up. |
| #71885 | keep_independent | planned | independent | Narrow independent bugfix candidate with failing checks. |
| #71902 | keep_independent | planned | independent | Broad dirty-candidate PR remains independent; not safe to close or repair in this job. |
| #72005 | keep_independent | planned | independent | Independent broad feature PR with proof/check blockers. |
| #72209 | keep_independent | planned | independent | Independent broad session recovery proposal with failing checks. |
| #72254 | keep_independent | planned | independent | Narrow independent bugfix candidate with proof blocker and no allowed merge/fix path. |
| #72351 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #72358 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #72449 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #72467 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #72510 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #72513 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #72770 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #72771 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |
| #72987 | keep_independent | planned | independent | Non-mutating inventory classification only; live target_updated_at unavailable. |

## Needs Human

- none
