---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156873-autonomous-smoke"
mode: "autonomous"
run_id: "25103584753"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103584753"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.144Z"
canonical: "https://github.com/openclaw/openclaw/pull/60773"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/60773"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156873-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103584753](https://github.com/openclaw/clownfish/actions/runs/25103584753)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/60773

## Summary

Classified the hydrated cluster without mutations. The original representative #60773 is now closed as merged and remains the canonical landed fix for the gatewayUrl encoding docs work. #54671 is related Control UI documentation work but is not a duplicate of #60773, so it should stay open. #61331 was already closed as superseded by the English-source path and receives no closure action.

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
| #54671 | keep_related | planned | related | Same docs area but different user-visible documentation scope; keep open rather than close or merge from this cluster. |
| #60773 | keep_closed | skipped | canonical | Already merged canonical PR for the gatewayUrl encoding docs work; no worker mutation is valid for an already-closed PR. |
| #61331 | keep_closed | skipped | superseded | Already closed superseded PR; no additional closure or comment action is valid. |

## Needs Human

- none
