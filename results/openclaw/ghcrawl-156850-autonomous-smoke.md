---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156850-autonomous-smoke"
mode: "autonomous"
run_id: "27598130666"
workflow_run_id: "27598130666"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598130666"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:19:29.338Z"
canonical: "https://github.com/openclaw/openclaw/issues/51185"
canonical_issue: "https://github.com/openclaw/openclaw/issues/51185"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156850-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598130666](https://github.com/openclaw/clownfish/actions/runs/27598130666)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/51185

## Summary

All three job refs are already closed in the hydrated preflight state, so no close, comment, label, merge, or fix mutation is valid. Current main at 6aa83374d90d35226b9cf3577155c3876a91b4b3 already contains the default Docker sandbox fix: ensureDockerImage() only returns when the image exists and otherwise fails fast for openclaw-sandbox:bookworm-slim with setup guidance instead of pulling/tagging plain debian:bookworm-slim. PR #58277 is a separate already-merged abort-listener cleanup and should remain closed as independent context.

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
| #51166 | keep_closed | skipped | superseded | Already closed; preserve as historical superseded contributor PR evidence and do not mutate. |
| #51185 | keep_closed | skipped | canonical | Canonical root-cause issue is already closed and current main contains the fix; no mutation needed. |
| #58277 | keep_closed | skipped | independent | Already merged and closed; classify as independent related-file context, not a canonical path for the default-image bug. |

## Needs Human

- none
