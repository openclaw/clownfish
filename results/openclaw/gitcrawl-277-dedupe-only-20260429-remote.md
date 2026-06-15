---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-277-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134531260"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134531260"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.004Z"
canonical: "https://github.com/openclaw/openclaw/issues/37634"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37634"
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-277-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134531260](https://github.com/openclaw/clownfish/actions/runs/25134531260)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/37634

## Summary

Hydrated preflight state keeps #37634 as the focused canonical issue for workspaceAccess "none" making the isolated sandbox workspace read-only. No high-confidence closeout is safe for the other open candidates because each has distinct remaining scope or live maintainer-follow-up context. #47237 is quarantined as the only security-sensitive hydrated ref.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

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
| #37634 | keep_canonical | planned | canonical | Best focused canonical for the isolated workspace writable-none behavior. |
| #46300 | keep_related | planned | related | Keep as the related open fix candidate; no merge or fixed-by-candidate closeout is permitted in this dedupe-only job. |
| #31331 | keep_related | planned | related | Related sandbox workspaceAccess family, but distinct root cause and its own open canonical thread. |
| #36525 | keep_related | planned | related | Related product-semantics request with broader scope than the canonical bug; not safe to close as duplicate. |
| #39497 | keep_related | planned | related | Same sandbox/mount area, different root cause and user-visible failure. |
| #44077 | keep_independent | planned | independent | Independent sandbox file-permission regression; do not close under #37634. |
| #59613 | keep_related | planned | related | Overlaps #37634 but retains distinct Docker setup and tool-surface details, so closure would lose useful reproduction scope. |
| #59718 | keep_related | planned | related | Related least-privilege feature gap with separate authorization semantics; keep open. |
| #57271 | keep_related | planned | related | Hydrated first-hop related issue; keep open as adjacent custom-bind contract work. |
| #65316 | keep_closed | skipped | duplicate | Already closed targets must not receive close actions. |
| #47237 | route_security | planned | security_sensitive | Quarantine the exact security-sensitive hydrated ref for central OpenClaw security handling. |

## Needs Human

- none
