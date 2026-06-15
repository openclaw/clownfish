---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238787-dedupe-only-20260429"
mode: "autonomous"
run_id: "25107637895"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107637895"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.623Z"
canonical: "https://github.com/openclaw/openclaw/issues/38622"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38622"
canonical_pr: null
actions_total: 18
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238787-dedupe-only-20260429

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107637895](https://github.com/openclaw/clownfish/actions/runs/25107637895)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/38622

## Summary

Representative #38650 is already closed. The live non-security canonical for the workspace-bootstrap symlink report is #38622; the open PRs now split into separate related subfamilies. No close, merge, or fix action is safe in this run. Security-shaped review findings are scoped to exact PRs and routed without poisoning unrelated items.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 18 |
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
| #38622 | keep_canonical | planned | canonical | Use the live issue as the canonical workspace-bootstrap symlink thread because the hinted representative PR #38650 is closed. |
| #38650 | keep_closed | skipped | superseded | Closed historical PR; no mutation is valid. |
| #38981 | keep_related | planned | related | Related to workspace symlink handling, but not a duplicate of the fixed-bootstrap-file bug and not safe for autonomous closeout. |
| #40230 | keep_closed | skipped | superseded | Closed historical PR; no mutation is valid. |
| #51277 | keep_closed | skipped | independent | Closed historical PR with mixed scope; no mutation is valid. |
| #62917 | keep_related | planned | related | Keep as a related follow-up subcluster. |
| #62938 | route_security | planned | security_sensitive | Approval-path trust boundary concerns should be routed to central OpenClaw security handling for this exact PR. |
| #64472 | keep_related | planned | related | Keep as a related follow-up subcluster rather than closing into #38622. |
| #64473 | route_security | planned | security_sensitive | Shared boundary-path bypass concerns require central security routing for this exact PR. |
| #65736 | keep_closed | skipped | superseded | Closed historical PR; no mutation is valid. |
| #68417 | keep_closed | skipped | superseded | Closed historical PR; no mutation is valid. |
| #70819 | keep_closed | skipped | fixed_by_candidate | Closed historical PR; no mutation is valid. |
| #72572 | keep_related | planned | related | Keep as a related follow-up subcluster. |
| #72650 | keep_related | planned | related | Useful related PR for a separate exec-policy symlink subcluster; not a close target in this workspace-bootstrap dedupe run. |
| #72713 | keep_related | planned | related | Keep open as related; broad draft scope and possible unique macOS behavior make superseded closeout unsafe. |
| #73401 | route_security | planned | security_sensitive | Potential sensitive OpenClaw state exposure should be routed for central security handling; no close or merge is planned. |
| #73988 | route_security | planned | security_sensitive | Potential sensitive-data exposure should be routed to central OpenClaw security handling for this exact PR. |
| #74002 | route_security | planned | security_sensitive | Approval-policy and socket trust-boundary concerns should be routed to central OpenClaw security handling for this exact PR. |

## Needs Human

- none
