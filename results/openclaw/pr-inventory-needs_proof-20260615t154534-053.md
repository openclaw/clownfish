---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-053"
mode: "plan"
run_id: "27560323972-1-56"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T01:05:08.337Z"
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

# pr-inventory-needs_proof-20260615T154534-053

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No canonical was selected because the job explicitly says this is not a dedupe cluster. All hydrated open PRs are kept as independent PRs for normal maintainer review/proof handling; unhydrated job refs are blocked for live-state-dependent classification.

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
| #90196 | keep_independent | planned | independent | Independent feature PR requiring normal proof/review, not a duplicate or closure candidate. |
| #61167 | keep_independent | planned | independent | Independent Docker setup PR with unresolved proof/check risk. |
| #90323 | needs_human | blocked | needs_human | Live preflight state is missing for this listed candidate. |
| #90329 | needs_human | blocked | needs_human | Live preflight state is missing for this listed candidate. |
| #79556 | keep_independent | planned | independent | Independent focused Feishu bug-fix PR that still needs proof/review. |
| #93046 | needs_human | blocked | needs_human | Live preflight state is missing for this listed candidate. |
| #93040 | needs_human | blocked | needs_human | Live preflight state is missing for this listed candidate. |
| #81417 | keep_independent | planned | independent | Independent memory-core behavior change with failing proof/checks. |
| #81832 | keep_independent | planned | independent | Independent WhatsApp/docs PR; keep open for maintainer review rather than close or merge. |
| #81851 | keep_independent | planned | independent | Independent broad/risky provider feature PR with failing gates; not closable as duplicate from this shard. |
| #82079 | keep_independent | planned | independent | Independent focused Telegram fix that should remain open for normal maintainer review. |
| #82179 | keep_independent | planned | independent | Independent provider compatibility PR; keep open for maintainer review. |
| #82193 | keep_independent | planned | independent | Independent agent-tool feature PR with proof still failing. |
| #82213 | keep_independent | planned | independent | Independent plugin SDK feature PR with unresolved proof/check failures. |
| #82240 | keep_independent | planned | independent | Independent plugin approval feature PR; keep open for maintainer review. |
| #93079 | needs_human | blocked | needs_human | Live preflight state is missing for this listed candidate. |
| #82349 | keep_independent | planned | independent | Independent draft feature PR; no low-signal close is allowed by this job. |
| #82355 | keep_independent | planned | independent | Independent focused gateway streaming fix; keep open for maintainer review. |
| #82373 | keep_independent | planned | independent | Independent broad startup-resilience PR with failing checks; keep open for maintainer review rather than close. |
| #82379 | keep_independent | planned | independent | Independent docs PR waiting on author/proof; keep open. |
| #82435 | keep_independent | planned | independent | Independent focused session-state/message-delivery fix with failing checks. |
| #82505 | keep_independent | planned | independent | Independent Canvas bug-fix PR with unresolved proof/check failure. |
| #82512 | keep_independent | planned | independent | Independent hardening/bug-fix PR; keep open for maintainer review. |
| #82519 | keep_independent | planned | independent | Independent CI stabilization PR; possible overlap with #82512 should stay open for maintainer review. |
| #82520 | keep_independent | planned | independent | Independent compaction/session-continuation PR with unresolved proof/check failures. |

## Needs Human

- #90323 missing from the preflight artifact item matrix, so live state and target_updated_at are unavailable.
- #90329 missing from the preflight artifact item matrix, so live state and target_updated_at are unavailable.
- #93046 missing from the preflight artifact item matrix, so live state and target_updated_at are unavailable.
- #93040 missing from the preflight artifact item matrix, so live state and target_updated_at are unavailable.
- #93079 missing from the preflight artifact item matrix, so live state and target_updated_at are unavailable.
