---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-045"
mode: "plan"
run_id: "27549046037"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549046037"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T13:28:19.721Z"
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
needs_human_count: 20
---

# pr-inventory-needs_proof-20260615T131654-045

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549046037](https://github.com/openclaw/clownfish/actions/runs/27549046037)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory shard. The preflight artifact hydrates 20 open PRs; all hydrated items are independent PRs with no shared canonical and no safe close/merge/fix action available under this job. The remaining 20 listed candidates are not present in the compacted preflight artifact, so they need refreshed hydration before classification with live target_updated_at.

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
| Needs human | 20 |

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
| #87102 | keep_independent | planned | independent | Independent open PR needing normal proof/review, not closure. |
| #93210 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #87521 | keep_independent | planned | independent | Independent open PR needing proof and technical review. |
| #87526 | keep_independent | planned | independent | Independent provider PR needing proof and normal review. |
| #87527 | keep_independent | planned | independent | Independent open PR needing proof and review. |
| #87528 | keep_independent | planned | independent | Independent open PR needing proof and review. |
| #87545 | keep_independent | planned | independent | Independent test-only PR needing proof/review. |
| #87552 | keep_independent | planned | independent | Independent draft PR needing author/maintainer follow-up. |
| #87592 | keep_independent | planned | independent | Independent feature PR needing product/proof review. |
| #87759 | keep_independent | planned | independent | Independent PR with proof but currently unmergeable in this plan-only shard. |
| #87784 | keep_independent | planned | independent | Independent PR needing normal merge preflight outside this shard. |
| #87793 | keep_independent | planned | independent | Independent PR needing proof/check resolution. |
| #87937 | keep_independent | planned | independent | Independent PR needing real behavior proof. |
| #90740 | keep_independent | planned | independent | Independent PR needing proof and review. |
| #90932 | keep_independent | planned | independent | Independent PR that may be a future merge candidate after normal gates. |
| #92153 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #92676 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #91132 | keep_independent | planned | independent | Independent PR that may be a future merge candidate after normal gates. |
| #91156 | keep_independent | planned | independent | Independent PR needing proof and review. |
| #91157 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #91177 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #91206 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #93213 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #93177 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #93224 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #87667 | keep_independent | planned | independent | Independent PR that may be a future merge candidate after normal gates. |
| #93168 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #92680 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #93186 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #50359 | keep_independent | planned | independent | Independent PR needing proof and review. |
| #93187 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #93212 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #93230 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #93232 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #92577 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #89088 | keep_independent | planned | independent | Independent test PR needing proof/review. |
| #93218 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #93235 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #93240 | needs_human | blocked | needs_human | Needs refreshed preflight hydration before classification. |
| #49511 | keep_independent | planned | independent | Independent broad feature PR needing proof/check resolution. |

## Needs Human

- #93210 requires refreshed preflight hydration before classification.
- #92153 requires refreshed preflight hydration before classification.
- #92676 requires refreshed preflight hydration before classification.
- #91157 requires refreshed preflight hydration before classification.
- #91177 requires refreshed preflight hydration before classification.
- #91206 requires refreshed preflight hydration before classification.
- #93213 requires refreshed preflight hydration before classification.
- #93177 requires refreshed preflight hydration before classification.
- #93224 requires refreshed preflight hydration before classification.
- #93168 requires refreshed preflight hydration before classification.
- #92680 requires refreshed preflight hydration before classification.
- #93186 requires refreshed preflight hydration before classification.
- #93187 requires refreshed preflight hydration before classification.
- #93212 requires refreshed preflight hydration before classification.
- #93230 requires refreshed preflight hydration before classification.
- #93232 requires refreshed preflight hydration before classification.
- #92577 requires refreshed preflight hydration before classification.
- #93218 requires refreshed preflight hydration before classification.
- #93235 requires refreshed preflight hydration before classification.
- #93240 requires refreshed preflight hydration before classification.
