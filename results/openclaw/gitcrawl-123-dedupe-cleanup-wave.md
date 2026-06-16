---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-123-dedupe-cleanup-wave"
mode: "autonomous"
run_id: "27608149032"
workflow_run_id: "27608149032"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27608149032"
head_sha: "d39befcd6309943509cd00e8e3cd0ee7c314e6be"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T10:04:56.990Z"
canonical: "https://github.com/openclaw/openclaw/pull/92819"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/92819"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-123-dedupe-cleanup-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27608149032](https://github.com/openclaw/clownfish/actions/runs/27608149032)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92819

## Summary

Open PR #92819 is the hydrated stale auto-fallback origin candidate, but deterministic validation marks it security-sensitive, so this repaired result routes that exact PR to central security handling and avoids mutating closeout that depends on it. Open issue #92776 is kept open as related until the quarantined canonical/fix path is cleared. Broader fallback work in #75270 and #80502 remains related but not duplicate-cleanup material. Closed refs are retained only as historical evidence.

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
| #92819 | route_security | planned | security_sensitive | Validator-identified security-sensitive PR is quarantined to central OpenClaw security handling. |
| #92776 | keep_related | planned | related | Non-mutating downgrade: the issue is related to the quarantined #92819 path, but fixed-by-candidate closure is not safe while #92819 is security-routed. |
| #75270 | keep_related | planned | related | Related fallback-session work, but not the clean canonical for the precise stale-origin issue and not safe to close as superseded in this close-only job. |
| #80502 | keep_related | planned | related | Same fallback/session-state family, but a meaningfully different product-scope issue; keep open. |
| #82544 | keep_closed | skipped | fixed_by_candidate | Closed historical context only. |
| #82676 | keep_closed | skipped | related | Closed historical evidence for the fallback family. |
| #87484 | keep_closed | skipped | related | Closed historical related PR; no mutation. |
| #92486 | keep_closed | skipped | fixed_by_candidate | Closed linked context; distinct from #92819's stale auto-fallback-origin root cause. |
| #92573 | keep_closed | skipped | related | Closed related context only. |
| #92790 | keep_closed | skipped | superseded | Already-closed superseded PR; no mutation. |
| #92821 | keep_closed | skipped | superseded | Closed historical candidate superseded by #92819. |

## Needs Human

- none
