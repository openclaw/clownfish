---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1375-autonomous-bulk-20260622b"
mode: "autonomous"
run_id: "27961719096"
workflow_run_id: "27961719096"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27961719096"
head_sha: "cbf4207a7692d7b1b364a892069127245a796578"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-22T14:56:41.082Z"
canonical: "https://github.com/openclaw/openclaw/issues/94280"
canonical_issue: "https://github.com/openclaw/openclaw/issues/94280"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# gitcrawl-1375-autonomous-bulk-20260622b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27961719096](https://github.com/openclaw/clownfish/actions/runs/27961719096)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/94280

## Summary

Current main already fixed the default screenshot delivery path through merged PR #93499: `screen.snapshot` is mapped to `screen_snapshot`, writes a file-backed result, and raw default invoke is blocked. The remaining open work is the explicit raw-media-invoke compatibility question in #94281, which has a failing real-behavior-proof check and a bot review asking for proof before merge, so this cluster should not close #94280 or merge/repair #94281 without maintainer direction.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #94280 | keep_canonical | blocked | canonical | Keep #94280 as the canonical open decision thread. Closure is blocked because the default behavior is fixed, but the remaining explicit raw `nodes.invoke` compatibility behavior is still unresolved and linked to #94281. |
| #94281 | keep_related | skipped | related | #94281 is related same-root-cause context, but overlap policy excludes it from this cluster's actionable refs. It also is not merge-ready because the raw invoke compatibility decision and real behavior proof remain unresolved. |
| #94818 | route_security | planned | security_sensitive | Exact hydrated item is security-sensitive; route only this ref to central security handling. |

## Needs Human

- Maintainer decision needed for #94280/#94281: whether explicit `allowMediaInvokeCommands` raw `nodes.invoke screen.snapshot` should keep returning raw JSON for compatibility, or be changed to a file-backed/sanitized return path.
- If maintainers approve changing the explicit raw invoke path, #94281 still needs real behavior proof and a fresh review/validation gate before any merge recommendation.
