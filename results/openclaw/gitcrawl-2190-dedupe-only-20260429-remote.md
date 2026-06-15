---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2190-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132411304"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132411304"
head_sha: "2a25e72cd9df0710ef893de8f25823a6a78be854"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.942Z"
canonical: "https://github.com/openclaw/openclaw/issues/49915"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49915"
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2190-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132411304](https://github.com/openclaw/clownfish/actions/runs/25132411304)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/49915

## Summary

Representative #49915 remains the live canonical Feishu group slash-command issue. No duplicate or fixed-by-candidate closeout is safe: the other open reports are distinct related subfamilies, #49958 is not merge-ready, and security-sensitive PR #43512 is quarantined for central security handling.

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
| #49915 | keep_canonical | planned | canonical | Keep the canonical issue open until #49958 or an equivalent focused fix lands. |
| #49958 | keep_related | planned | related | Useful candidate, but failing checks and actionable bot findings block merge or fixed-by-candidate closeout. |
| #39428 | keep_related | planned | related | Same slash-command/routing neighborhood, but different channel and root cause from #49915. |
| #39485 | keep_related | planned | related | Keep open for its own Discord routing subcluster; unresolved review-bot findings block merge or issue closeout. |
| #39605 | keep_related | planned | related | Related slash-command routing family, but its dmScope stale-config root cause is separate from #49915. |
| #39617 | keep_related | planned | related | Keep open as the candidate for the dmScope subcluster; no merge or close action is permitted here. |
| #42803 | keep_related | planned | related | Related Feishu command issue, but distinct queue/fast-path root cause from #49915 and blocked by the security-sensitive linked PR. |
| #43512 | route_security | planned | security_sensitive | Quarantine #43512 for central OpenClaw security handling and continue non-security classification for the rest of the cluster. |
| #47335 | keep_independent | planned | independent | Different subsystem and root cause; leave for a separate reliability cluster. |
| #47561 | keep_related | planned | related | Related command/session-routing family, but not the same Feishu group allowlist authorization root cause as #49915. |

## Needs Human

- none
