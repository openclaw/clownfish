---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156592-autonomous-smoke"
mode: "autonomous"
run_id: "24978153082"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978153082"
head_sha: "e8d437d9978c397d8d3fb39c23597d4e5c1d98bf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T05:31:09.510Z"
canonical: "https://github.com/openclaw/openclaw/issues/62917"
canonical_issue: "https://github.com/openclaw/openclaw/issues/62917"
canonical_pr: null
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156592-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24978153082](https://github.com/openclaw/clownfish/actions/runs/24978153082)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/62917

## Summary

Classified the cluster into two non-security subfamilies plus quarantined security-sensitive PRs. No merge or close is safe in this run: the representative #62938 and #64473 are security-routed, the workspace-symlink work still has unresolved review findings/failing checks, and the exec-approvals OPENCLAW_STATE_DIR work needs a narrow replacement/repair path before any fix-first closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
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
| execute_fix | skipped |  |  | fix artifact scope itself contains security-sensitive signals |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #38650 | keep_related | planned | related | Keep open as related workspace-symlink implementation candidate; it is not a duplicate of the exec-approvals state-dir canonical path and is not merge-ready. |
| #51277 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #62938 | route_security | planned | security_sensitive | Security-sensitive item must be quarantined to central OpenClaw security handling; do not merge, close, comment, label, or open a fix PR directly for this PR. |
| #64472 | keep_related | planned | related | Keep open as related workspace-symlink issue; not safe to close because the associated fix path is unresolved and security-routed. |
| #64473 | route_security | planned | security_sensitive | Security-sensitive boundary-path PR must route to central OpenClaw security handling. |
| #64663 | keep_closed | skipped | superseded | Already closed and superseded by the merged replacement; no close action is valid. |
| #65736 | fix_needed | planned | fixed_by_candidate | The bug is real and this PR is the best non-security repair base, but unresolved bot findings prevent merge or fixed-by-candidate closeout. |
| #66404 | keep_closed | skipped | security_sensitive | Already closed; mention only as historical/security-sensitive context. |
| #68417 | keep_related | planned | related | Keep open as related follow-up candidate; not safe to close before the canonical OPENCLAW_STATE_DIR fix path lands. |
| #38622 | keep_canonical | planned | canonical | Canonical issue for the workspace bootstrap symlink subfamily. |
| #40210 | keep_related | planned | duplicate | True duplicate of #38622, but require_fix_before_close blocks closure until a canonical fix lands. |
| #40230 | route_security | planned | security_sensitive | Security-sensitive workspace bootstrap PR must be quarantined, while non-security workspace issues remain open. |
| #62917 | keep_canonical | planned | canonical | Canonical issue for the non-security exec-approvals OPENCLAW_STATE_DIR subfamily. |
| cluster:ghcrawl-156592-autonomous-smoke | build_fix_artifact | planned |  | Build a narrow credited replacement/repair artifact for the non-security exec-approvals OPENCLAW_STATE_DIR path behavior. |

## Needs Human

- none
