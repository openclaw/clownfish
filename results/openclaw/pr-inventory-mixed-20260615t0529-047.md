---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-047"
mode: "plan"
run_id: "27526386607"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526386607"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.450Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# pr-inventory-mixed-20260615T0529-047

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526386607](https://github.com/openclaw/clownfish/actions/runs/27526386607)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory shard. No shared canonical was selected; open non-security PRs are kept for maintainer/product review, security-sensitive PR #74529 is routed to central security handling, and already-closed PRs are not targeted for closure.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #72972 | keep_independent | planned | independent | Useful focused PR, but it is not closable or merge-ready in this shard. |
| #74120 | keep_closed | skipped | superseded | Already closed in live hydrated state. |
| #74529 | route_security | planned | security_sensitive | Security-sensitive Matrix E2EE behavior; route to central OpenClaw security handling. |
| #73138 | keep_closed | skipped | superseded | Already closed in live hydrated state. |
| #74955 | needs_human | blocked | needs_human | Hydrated live state for #74955 is missing from the provided artifact, so this single PR needs human or rehydration. |
| #74735 | keep_related | planned | related | Related bootstrap/session-state work should stay open for maintainer review rather than be closed in this inventory shard. |
| #73197 | keep_closed | skipped | superseded | Already closed in live hydrated state. |
| #74783 | keep_independent | planned | independent | Standalone gateway telemetry PR should remain open for proof/maintainer review. |
| #73594 | keep_independent | planned | independent | Provider compatibility change needs maintainer/author follow-up, not closure in this inventory shard. |
| #74232 | keep_independent | planned | independent | Standalone runtime behavior PR should remain open pending proof and technical review. |

## Needs Human

- #74955 requires rehydration or human review because live state for the listed candidate is absent from the compacted preflight artifact.
