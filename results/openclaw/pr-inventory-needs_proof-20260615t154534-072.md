---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-072"
mode: "plan"
run_id: "27560323972-1-75"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T02:31:41.137Z"
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

# pr-inventory-needs_proof-20260615T154534-072

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No shared canonical was selected because the job is an inventory shard, not a dedupe cluster. Hydrated open PRs were kept non-mutating for proof/maintainer review; unhydrated listed refs need human/live-state follow-up before any action.

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
| #92153 | keep_related | planned | related | Open narrow PR remains in scope for maintainer/proof review; no close, merge, or fix action is permitted or safe from this shard. |
| #92676 | keep_related | planned | related | Active contributor PR with failing proof should remain open for author/maintainer follow-up, not closed or merged. |
| #91132 | keep_related | planned | related | Legitimate feature PR with passing proof but no merge preflight; keep for maintainer review. |
| #91156 | keep_related | planned | related | Narrow PR needs real behavior proof follow-up; keep open non-mutating. |
| #91157 | keep_related | planned | related | PR is plausibly useful but proof failed; no close or merge recommendation. |
| #91177 | keep_related | planned | related | Narrow passing PR should remain open for maintainer review; merge is blocked by job policy and missing merge preflight. |
| #91206 | keep_related | planned | related | Small passing PR remains a maintainer review item; no merge action allowed. |
| #93213 | keep_related | planned | related | Narrow channel fix appears in scope, but no merge preflight exists and merge is blocked. |
| #93177 | keep_related | planned | related | Small UI fix should remain open for maintainer review; no closure or merge is justified. |
| #93224 | needs_human | blocked | needs_human | Live state and security-boundary context are unavailable in the provided artifact, so this PR needs a focused hydration/security-boundary check before classification. |
| #87667 | keep_related | planned | related | Passing medium-sized Slack feature/fix needs maintainer review; merge is blocked by policy and missing merge preflight. |
| #93168 | keep_related | planned | related | Small passing extension fix remains open for review; no close/merge action. |
| #92680 | keep_related | planned | related | Potentially useful compatibility PR with many unhydrated comments should remain open for maintainer review; no merge preflight. |
| #93186 | keep_related | planned | related | Ready-looking PR still has pending/unstable checks and no merge preflight, so keep for maintainer review rather than merge or close. |
| #50359 | keep_related | planned | related | Proof failed; keep open for contributor/maintainer follow-up without routing security or closing. |
| #93187 | keep_related | planned | related | Broader memory-core/session-state PR needs maintainer/proof review; no merge or close action. |
| #93212 | keep_related | planned | related | Small provider compatibility fix can remain open for maintainer review; no merge preflight. |
| #93230 | needs_human | blocked | needs_human | Live state is unavailable from the artifact, so a non-ambiguous classification cannot be emitted with required target metadata. |
| #93232 | needs_human | blocked | needs_human | Live state is unavailable from the artifact, so this candidate needs hydration before classification. |
| #92577 | keep_related | planned | related | Small passing session-state fix remains open for maintainer review; merge is unavailable. |
| #89088 | keep_related | planned | related | Test-only PR with failed real behavior proof should stay open for maintainer decision rather than closure or merge. |
| #93218 | keep_related | planned | related | Broad feature PR with failed proof should remain open for maintainer/proof follow-up; no closure or merge. |
| #93235 | needs_human | blocked | needs_human | Live state is unavailable from the artifact, so this candidate needs hydration before classification. |
| #93240 | needs_human | blocked | needs_human | Live state and security-boundary context are unavailable in the provided artifact, so this PR needs a focused hydration/security-boundary check before classification. |
| #49511 | keep_related | planned | related | Large dirty UI PR with failed checks and prior bot review remains open for maintainer/author work; no low-signal close is allowed by job permissions. |

## Needs Human

- #93224 requires live hydration and security-boundary review before classification.
- #93230 requires live hydration before classification.
- #93232 requires live hydration before classification.
- #93235 requires live hydration before classification.
- #93240 requires live hydration and security-boundary review before classification.
