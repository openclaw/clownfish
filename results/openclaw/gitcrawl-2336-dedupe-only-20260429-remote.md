---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2336-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132962877"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132962877"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.965Z"
canonical: "https://github.com/openclaw/openclaw/pull/56706"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/56706"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2336-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132962877](https://github.com/openclaw/clownfish/actions/runs/25132962877)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/56706

## Summary

Classified the two open candidates from the hydrated preflight artifact. #56706 remains the canonical open TTS standalone-directive thread, but it is not merge-ready and no merge/fix actions are allowed by this job. #56705 is related overlap with independent config/Slack work, not a closeable duplicate. No close actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #56706 | keep_canonical | planned | canonical | Keep #56706 as the canonical open TTS contract thread; do not close or merge it in this dedupe-only autonomous pass. |
| #56705 | keep_related | planned | related | Keep #56705 open as related overlap; it is not the canonical TTS standalone-directive path and should not be closed in this cluster. |

## Needs Human

- none
