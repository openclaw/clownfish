---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-028"
mode: "plan"
run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T16:28:28.912Z"
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
needs_human_count: 6
---

# pr-inventory-needs_proof-20260615T154534-028

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification. No GitHub mutations are planned. The shard has no shared canonical, merge/fix/raise_pr are blocked by job frontmatter, low-signal closeout is disabled, and missing hydrated live state blocks decisive classification for refs absent from the compacted artifact.

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
| Needs human | 6 |

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
| #91609 | keep_independent | planned | independent | Independent PR requiring normal maintainer review/proof path; no close or merge action is allowed in this shard. |
| #91610 | keep_independent | planned | independent | Independent CI coverage PR; keep for maintainer review rather than closing or merging from this plan. |
| #91612 | keep_independent | planned | independent | Independent docs automation PR with failing proof/dependency checks; non-mutating keep classification is appropriate. |
| #91611 | keep_independent | planned | independent | Independent session-state fix requiring proof/maintainer review; do not close or merge. |
| #48690 | keep_independent | planned | independent | Independent stale PR with unresolved proof/review evidence; no low-signal closeout is permitted by job frontmatter. |
| #44098 | route_security | planned | security_sensitive | Quarantine only this PR as security-sensitive; continue classifying unrelated non-security PRs. |
| #91655 | keep_independent | planned | independent | Independent small bug fix needing behavior proof; keep open for normal review. |
| #91698 | keep_independent | planned | independent | Independent channel fix requiring proof; no fixed-by-candidate or close action is supported. |
| #91703 | keep_independent | planned | independent | Independent draft feature PR; keep open for author/maintainer follow-up. |
| #91459 | keep_closed | skipped | superseded | Already closed; no mutation should be planned. |
| #91680 | keep_independent | planned | independent | Independent UI bug fix needing real behavior proof; keep open. |
| #91714 | keep_independent | planned | independent | Independent provider bug fix with pending checks; keep open for check completion and maintainer review. |
| #91702 | keep_independent | planned | independent | Independent broad feature PR; keep for product/maintainer review and proof, not dedupe closeout. |
| #91726 | keep_independent | planned | independent | Independent feature PR requiring proof and maintainer review; keep open. |
| #91729 | needs_human | blocked | needs_human | Hydrated live state is unavailable, so the worker cannot safely emit a definitive PR classification. |
| #90192 | keep_independent | planned | independent | Independent PR that may be reviewable outside this shard, but this plan cannot merge or close linked refs. |
| #91812 | needs_human | blocked | needs_human | Hydrated live state is unavailable, so the worker cannot safely classify this PR beyond escalation. |
| #60402 | keep_independent | planned | independent | Independent session/message-delivery fix needing proof and review resolution; keep open. |
| #58455 | keep_independent | planned | independent | Independent broad agents PR with unresolved proof/review evidence; keep open rather than closing. |
| #91857 | needs_human | blocked | needs_human | Hydrated live state is unavailable, so maintainer/tooling follow-up is needed. |
| #91863 | needs_human | blocked | needs_human | Hydrated live state is unavailable, so the worker cannot safely emit a definitive classification. |
| #91877 | needs_human | blocked | needs_human | Hydrated live state is unavailable, so the worker cannot safely classify this PR. |
| #48278 | keep_independent | planned | independent | Independent config scaffold PR with proof/check blockers; keep open for maintainer review. |
| #87691 | keep_independent | planned | independent | Independent auto-reply fix needing proof; keep open. |
| #87707 | keep_independent | planned | independent | Independent message-delivery fix requiring real behavior proof; keep open. |

## Needs Human

- #91729: missing hydrated live state in the compacted preflight artifact; target_updated_at unavailable.
- #91812: missing hydrated live state in the compacted preflight artifact; target_updated_at unavailable.
- #91857: missing hydrated live state in the compacted preflight artifact; target_updated_at unavailable.
- #91863: missing hydrated live state in the compacted preflight artifact; target_updated_at unavailable.
- #91877: missing hydrated live state in the compacted preflight artifact; target_updated_at unavailable.
- #44098: routed to central security handling because the hydrated PR body/title present sandbox fork-bomb vulnerability language.
