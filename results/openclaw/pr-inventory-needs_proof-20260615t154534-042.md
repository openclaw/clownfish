---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-042"
mode: "plan"
run_id: "27560323972-1-45"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T05:48:04.325Z"
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
needs_human_count: 8
---

# pr-inventory-needs_proof-20260615T154534-042

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification shard. No GitHub mutations planned. The hydrated artifact covers 20 of 25 listed candidates; the 5 candidates missing live hydrated state are scoped to needs_human. All hydrated open PRs remain non-mutating classifications because this shard is not a dedupe cluster and close/merge/fix paths are either unsupported by evidence or blocked by job permissions.

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
| Needs human | 8 |

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
| #74223 | keep_independent | planned | independent | Open contributor PR with useful code and no hydrated duplicate/canonical path; keep for normal proof/review rather than close. |
| #91875 | needs_human | blocked | needs_human | Cannot classify or plan any close-style action without hydrated live state. |
| #74425 | keep_independent | planned | independent | Useful focused bug-fix PR, but proof/merge state prevents stronger action. |
| #74891 | keep_independent | planned | independent | Potentially useful candidate, but this plan job cannot merge and lacks required merge preflight. |
| #74979 | keep_independent | planned | independent | Useful focused PR; keep for maintainer/rebase path rather than close. |
| #75043 | keep_independent | planned | independent | Substantial feature PR needing normal maintainer review, not cleanup closure. |
| #75065 | keep_independent | planned | independent | Independent feature/fix PR with failing proof/checks; keep for targeted review/proof. |
| #75118 | keep_independent | planned | independent | Potential trust-boundary-adjacent feature needs maintainer review/proof, but artifact does not classify it as security-sensitive. |
| #75121 | keep_independent | planned | independent | Useful channel fix, but plan mode and missing merge preflight limit action to non-mutating keep. |
| #75126 | needs_human | planned | needs_human | Human maintainer judgment is needed on product/implementation scope and whether this broad unmodifiable branch should be narrowed or abandoned. |
| #75160 | keep_independent | planned | independent | Small useful candidate but proof failure blocks stronger action. |
| #75198 | keep_independent | planned | independent | Focused bug-fix PR should remain open pending proof/mergeability. |
| #75201 | keep_independent | planned | independent | Good candidate for normal review/merge path, but not actionable in this plan-only inventory shard. |
| #75217 | keep_independent | planned | independent | Strong candidate to keep for maintainer merge review, not closure. |
| #75336 | keep_independent | planned | independent | Potentially mergeable-looking candidate, but still non-mutating in this plan job and missing merge preflight. |
| #89807 | needs_human | blocked | needs_human | Cannot classify or plan any close-style action without hydrated live state. |
| #76120 | keep_independent | planned | independent | Draft contributor PR with no close permission/proof; keep open for author or maintainer follow-up. |
| #76495 | keep_independent | planned | independent | Keep as independent release-branch candidate; proof/base branch require maintainer path. |
| #76668 | needs_human | blocked | needs_human | Cannot classify or plan any close-style action without hydrated live state. |
| #76806 | needs_human | blocked | needs_human | Cannot classify or plan any close-style action without hydrated live state. |
| #93024 | needs_human | blocked | needs_human | Cannot classify or plan any close-style action without hydrated live state. |
| #41299 | keep_independent | planned | independent | Open PR with useful scoped code but unresolved proof/review risk; not closeable in this inventory shard. |
| #55592 | needs_human | planned | needs_human | Technical correctness/product judgment is needed for the broad backend transcript deletion behavior and dirty branch; not enough evidence for close or merge. |
| #59214 | keep_independent | planned | independent | Independent feature PR with failing checks/proof; keep for maintainer review or author repair. |
| #59898 | needs_human | planned | needs_human | Broad prompt/gateway behavior and unresolved bot-review/check state need maintainer judgment before any cleanup decision. |

## Needs Human

- #91875 missing hydrated live state in preflight artifact.
- #89807 missing hydrated live state in preflight artifact.
- #76668 missing hydrated live state in preflight artifact.
- #76806 missing hydrated live state in preflight artifact.
- #93024 missing hydrated live state in preflight artifact.
- #75126 broad dirty-candidate strict tool mode PR has human review asking to minimize changes and maintainer_can_modify=false.
- #55592 broad backend transcript deletion/session UI change has dirty merge state, failed proof, and product/security-boundary-adjacent labels despite artifact security_sensitive=false.
- #59898 broad prompt/gateway empty-tool behavior change has dirty merge state, failed proof, failing core check, and unhydrated review-bot detail.
