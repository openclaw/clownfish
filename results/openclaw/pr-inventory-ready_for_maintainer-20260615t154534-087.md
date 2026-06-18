---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T154534-087"
mode: "plan"
run_id: "27560323972-1-89"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T16:45:39.856Z"
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

# pr-inventory-ready_for_maintainer-20260615T154534-087

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The hydrated preflight artifact shows 20 open PRs with no security-sensitive refs; each hydrated PR is a standalone maintainer-review candidate, not a dedupe/closure target. Five listed candidates were not hydrated in the artifact and need a refreshed preflight before classification.

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
| #52664 | keep_independent | planned | independent | Standalone feature/API PR requiring maintainer review; no duplicate, supersession, low-signal, or security route is established by the artifact. |
| #54724 | keep_independent | planned | independent | Standalone UI fix with failing proof check; leave open for author/maintainer follow-up rather than closing in this inventory shard. |
| #55596 | keep_independent | planned | independent | Standalone CLI/Markdown fix with failing proof checks; classify non-mutating and keep open. |
| #56806 | keep_independent | planned | independent | Standalone exec configuration feature needing maintainer compatibility review, not closure or security routing. |
| #72092 | keep_independent | planned | independent | Standalone provider/auth behavior fix; keep open for maintainer review rather than inventory closeout. |
| #72314 | keep_independent | planned | independent | Standalone message-delivery fix with review context; not a duplicate or low-signal close target. |
| #72557 | keep_independent | planned | independent | Standalone plugin API feature needing maintainer API review; no dedupe/closure target in this inventory shard. |
| #92524 | needs_human | blocked | needs_human | Refresh/hydrate this PR before classification; no mutating or close-style action is safe without live preflight state. |
| #73649 | keep_independent | planned | independent | Standalone low-risk template improvement; keep open for maintainer review. |
| #89724 | needs_human | blocked | needs_human | Refresh/hydrate this PR before classification; the worker cannot classify or route from the job snapshot alone. |
| #89745 | needs_human | blocked | needs_human | Refresh/hydrate this PR before classification. |
| #89767 | needs_human | blocked | needs_human | Refresh/hydrate this PR before classification. |
| #89428 | keep_independent | planned | independent | Standalone session-state/message-delivery fix; keep open for maintainer review. |
| #59695 | keep_independent | planned | independent | Standalone hardening/cleanup PR; not security-routed and not a closure target. |
| #89567 | keep_independent | planned | independent | Standalone memory-wiki hardening fix; keep open for maintainer review. |
| #62063 | keep_independent | planned | independent | Standalone large locale/automation PR; keep open rather than closing or merging in plan mode. |
| #74131 | keep_independent | planned | independent | Standalone availability/lifecycle fix with a failing check; leave open for maintainer/author follow-up. |
| #74136 | keep_independent | planned | independent | Standalone agents parsing/docs fix; keep open for maintainer review. |
| #92725 | needs_human | blocked | needs_human | Refresh/hydrate this broad PR before classification; current artifact cannot support a safe action. |
| #74185 | keep_independent | planned | independent | Standalone infra/auth-provider availability fix; keep open for maintainer review. |
| #74235 | keep_independent | planned | independent | Standalone broad Google Chat message-delivery PR with conflicts; keep open for maintainer/author repair, not closure. |
| #74252 | keep_independent | planned | independent | Standalone CLI/logging fix with pending proof; keep open. |
| #74369 | keep_independent | planned | independent | Standalone web UI fix; keep open for maintainer review. |
| #74444 | keep_independent | planned | independent | Standalone config/provider feature needing maintainer compatibility review; no closure or merge action is available. |
| #89577 | keep_independent | planned | independent | Standalone canvas hardening fix; keep open for maintainer review. |

## Needs Human

- #92524 missing hydrated preflight item; refresh before classification.
- #89724 missing hydrated preflight item; refresh before classification.
- #89745 missing hydrated preflight item; refresh before classification.
- #89767 missing hydrated preflight item; refresh before classification.
- #92725 missing hydrated preflight item; refresh before classification.
