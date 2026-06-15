---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-030"
mode: "plan"
run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T16:28:28.930Z"
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
needs_human_count: 4
---

# pr-inventory-needs_proof-20260615T154534-030

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The hydrated artifact marks the shard as non-dedupe with no shared canonical and no security-sensitive hydrated items; merge/fix/low-signal closeout are disabled, so hydrated open PRs are kept independently unless a specific safety boundary or missing hydration blocks classification.

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
| Needs human | 4 |

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
| #88828 | keep_independent | planned | independent | Independent gateway PR; no close or merge action is available in plan mode. |
| #92091 | keep_independent | planned | independent | Independent Discord feature/fix PR with failing checks; keep open for maintainer review. |
| #92036 | keep_independent | planned | independent | Independent provider fix; conflicts block merge but not non-mutating classification. |
| #92025 | keep_independent | planned | independent | Independent CLI UX PR requiring proof/review rather than closeout. |
| #92028 | keep_independent | planned | independent | Independent broader skills lint PR with failing check and unresolved proof/review context. |
| #92128 | keep_independent | planned | independent | Independent Feishu session-state fix pending proof/review. |
| #92149 | keep_independent | planned | independent | Independent high-risk gateway/auth compatibility PR; keep for focused maintainer review. |
| #92164 | keep_independent | planned | independent | Independent memory-core availability fix blocked from merge by conflict/proof state. |
| #92188 | keep_independent | planned | independent | Independent logging/session-state fix; keep open for normal review path. |
| #92202 | keep_independent | planned | independent | Independent draft PR requiring validation before any close/merge decision. |
| #92179 | keep_independent | planned | independent | Independent TUI rendering PR; keep for maintainer review. |
| #92167 | keep_independent | planned | independent | Independent media compatibility PR; no inventory close action applies. |
| #92221 | keep_independent | planned | independent | Independent draft MCP feature PR; broad scope and failing proof require maintainer review. |
| #92254 | keep_independent | planned | independent | Independent model-picker fix pending proof and review-bot resolution. |
| #92203 | keep_independent | planned | independent | Independent plugin/runtime PR requiring proof; no closeout action is supported. |
| #92090 | keep_independent | planned | independent | Independent cron fix with conflicts; keep open for repair/review path. |
| #92303 | keep_independent | planned | independent | Independent recovery fix requiring proof; keep open. |
| #92298 | keep_independent | planned | independent | Independent Codex extension fix pending proof/review. |
| #92310 | keep_independent | planned | independent | Independent Telegram delivery fix requiring proof; keep open. |
| #91332 | keep_independent | planned | independent | Independent session-state PR with failing proof and unresolved review-bot context. |
| #92334 | needs_human | planned | needs_human | Missing hydrated live state for the specific candidate. |
| #92349 | needs_human | planned | needs_human | Missing hydrated live state for the specific candidate. |
| #92354 | route_security | planned | security_sensitive | Potential security-boundary/sensitive-output exposure item should be routed to central OpenClaw security handling, not backlog cleanup. |
| #92358 | needs_human | planned | needs_human | Missing hydrated live state for the specific candidate. |
| #92359 | needs_human | planned | needs_human | Missing hydrated live state for the specific candidate. |

## Needs Human

- #92334: missing hydrated preflight item; target_updated_at unavailable.
- #92349: missing hydrated preflight item; target_updated_at unavailable.
- #92358: missing hydrated preflight item; target_updated_at unavailable.
- #92359: missing hydrated preflight item; target_updated_at unavailable.
