---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156980-autonomous-smoke"
mode: "autonomous"
run_id: "25102839415"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102839415"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.111Z"
canonical: "https://github.com/openclaw/openclaw/pull/73399"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73399"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156980-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102839415](https://github.com/openclaw/clownfish/actions/runs/25102839415)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73399

## Summary

Hydrated state shows the original representative #38958 is already closed unmerged after a credited replacement path, #51032 is merged and closed for the Feishu group-name subset, and the remaining open successor #73399 has security-shaped bot findings that must be routed to central security handling instead of Clownfish merge/fix automation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #35675 | keep_closed | skipped | fixed_by_candidate | Historical closed issue; no mutation is valid in this worker result. |
| #38378 | keep_closed | skipped | superseded | Already closed historical contributor PR superseded through the #38958 to #73399 path. |
| #38958 | keep_closed | skipped | superseded | No close action is valid because #38958 is already closed; classify it as superseded by the hydrated replacement PR. |
| #48898 | keep_closed | skipped | related | Closed broad related draft; keep as historical evidence only. |
| #51032 | keep_closed | skipped | fixed_by_candidate | Merged canonical baseline for the group-label subset; no additional close or merge action is valid on a closed PR. |
| #73399 | route_security | planned | security_sensitive | Route only #73399 to central OpenClaw security triage; continue treating unrelated closed refs as historical evidence. |

## Needs Human

- none
