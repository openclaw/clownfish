---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-11370-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143131604"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143131604"
head_sha: "82a75cbed53460e49c2bd45f5695375a0ca1eeb1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.334Z"
canonical: "https://github.com/openclaw/openclaw/issues/63308"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63308"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-11370-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143131604](https://github.com/openclaw/clownfish/actions/runs/25143131604)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63308

## Summary

Canonical remains open issue #63308. #64699 is related rather than safe duplicate closeout because it adds a distinct Control UI/ClawX argument-assembly reproduction. Open schema PR #63339 is related but partial, and active runtime PR #74009 must be routed to central security triage because a hydrated security bot comment raises a possible session-key disclosure finding.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #63308 | keep_canonical | planned | canonical | Keep #63308 as the canonical open issue until a safe canonical fix lands. |
| #64699 | keep_related | planned | related | Keep related rather than closing: the issue shares the canonical failure family but preserves unique client/UI reproduction detail and no safe landed candidate fix is available. |
| #63339 | keep_related | planned | related | Keep #63339 as a related schema/docs PR; it is not a complete canonical fix for the runtime failure. |
| #74009 | route_security | planned | security_sensitive | Quarantine this PR for central OpenClaw security handling; do not close, merge, repair, or use it as a fixed-by candidate in this Clownfish pass. |

## Needs Human

- none
