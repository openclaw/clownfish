---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-018"
mode: "plan"
run_id: "27549040530"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549040530"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T13:28:19.548Z"
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
needs_human_count: 1
---

# pr-inventory-needs_proof-20260615T131654-018

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549040530](https://github.com/openclaw/clownfish/actions/runs/27549040530)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-mode PR inventory classification. The preflight artifact is compacted and only hydrates 20 of the 40 listed candidates, so hydrated PRs are classified conservatively and unhydrated candidates are left for a follow-up hydration pass. No GitHub mutations are planned.

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
| Needs human | 1 |

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
| #40392 | keep_independent | planned | independent | Distinct open PR that needs proof/review, not a duplicate or closeout candidate. |
| #43656 | keep_independent | planned | independent | Distinct broad feature PR with failing checks/proof, so keep open for maintainer review rather than close. |
| #43953 | keep_independent | planned | independent | Focused PR may still be useful, but proof/review gates block merge or closeout decisions. |
| #44098 | keep_independent | planned | independent | Exec-adjacent hardening without artifact security routing; keep as an independent PR needing proof/check repair. |
| #48278 | keep_independent | planned | independent | Distinct config scaffolding PR with failing validation, not a safe close or merge candidate. |
| #49750 | keep_independent | planned | independent | Useful but unresolved PR; keep independent for proof/check follow-up. |
| #58455 | keep_independent | planned | independent | Independent compaction PR with unresolved proof/review risk; no closure action is justified. |
| #60402 | keep_independent | planned | independent | Distinct stale PR that still has useful code and unresolved proof; keep open. |
| #87691 | keep_independent | planned | independent | Focused independent bugfix still needs proof; not a closeout candidate. |
| #87707 | keep_independent | planned | independent | Independent message-delivery bugfix needing proof, so keep open for validation. |
| #88270 | keep_independent | planned | independent | Independent gateway probe fix with broad diff and missing proof; keep open. |
| #88506 | keep_independent | planned | independent | Broad draft feature PR is not suitable for closeout or merge in this shard; keep independent. |
| #88507 | keep_independent | planned | independent | Draft broad config/plugin PR with failing checks; keep independent for author/maintainer follow-up. |
| #88522 | keep_independent | planned | independent | Draft channel-runtime PR needs proof repair; keep independent. |
| #88531 | keep_independent | planned | independent | Potentially viable independent PR, but this plan job cannot merge and should not close it. |
| #88584 | keep_independent | planned | independent | Potentially viable independent PR requiring normal review/merge path outside this plan shard. |
| #88651 | keep_independent | planned | independent | Small independent availability fix, but proof/review completeness is insufficient for merge planning. |
| #88668 | keep_independent | planned | independent | Draft feature PR with failed proof; keep independent. |
| #88684 | keep_independent | planned | independent | Likely viable independent PR, but this shard can only classify it. |
| #88754 | keep_independent | planned | independent | Focused independent text handling PR needing proof; no closure action is justified. |
| #91655 | needs_human | blocked | needs_human | Cannot classify with required live target metadata from the artifact. |
| #91698 | needs_human | blocked | needs_human | Cannot emit the required per-open-candidate metadata from the artifact. |
| #91703 | needs_human | blocked | needs_human | Requires a follow-up hydration pass before classification. |
| #91459 | needs_human | blocked | needs_human | Cannot classify safely without the artifact live-state entry. |
| #91680 | needs_human | blocked | needs_human | Needs live preflight hydration before a plan action can be reliable. |
| #91714 | needs_human | blocked | needs_human | Cannot use gitcrawl snapshot timestamp for target_updated_at. |
| #91702 | needs_human | blocked | needs_human | Needs a follow-up artifact with live PR details. |
| #91726 | needs_human | blocked | needs_human | Cannot classify safely with missing live metadata. |
| #91729 | needs_human | blocked | needs_human | Requires hydration before classification. |
| #90192 | needs_human | blocked | needs_human | Cannot copy target_updated_at from hydrated artifact because it is absent. |
| #91812 | needs_human | blocked | needs_human | Needs live state from a complete preflight artifact. |
| #91857 | needs_human | blocked | needs_human | Cannot classify with required target metadata missing. |
| #91863 | needs_human | blocked | needs_human | Needs follow-up hydration. |
| #91877 | needs_human | blocked | needs_human | Cannot plan safely without hydrated live PR data. |
| #91924 | needs_human | blocked | needs_human | Requires complete preflight hydration. |
| #91885 | needs_human | blocked | needs_human | Cannot classify safely with missing artifact metadata. |
| #88776 | needs_human | blocked | needs_human | Active-author/follow-up status plus missing live artifact details requires human or rehydration. |
| #92006 | needs_human | blocked | needs_human | Needs a complete preflight artifact before classification. |
| #91994 | needs_human | blocked | needs_human | Cannot classify safely without target_updated_at from preflight. |
| #92066 | needs_human | blocked | needs_human | Needs live artifact hydration before classification. |

## Needs Human

- Follow-up hydration is required for unhydrated candidates #91655, #91698, #91703, #91459, #91680, #91714, #91702, #91726, #91729, #90192, #91812, #91857, #91863, #91877, #91924, #91885, #88776, #92006, #91994, and #92066 because the compacted preflight artifact lacks live state and target_updated_at for them.
