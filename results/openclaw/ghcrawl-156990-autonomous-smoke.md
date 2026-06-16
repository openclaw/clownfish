---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156990-autonomous-smoke"
mode: "autonomous"
run_id: "27598132840"
workflow_run_id: "27598132840"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598132840"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T06:19:29.372Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-156990-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598132840](https://github.com/openclaw/clownfish/actions/runs/27598132840)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Hydrated live state shows all cluster refs are already closed. Current main at 6aa83374d90d35226b9cf3577155c3876a91b4b3 still lacks per-agent agents.list[].userTimezone support, but the only implementation PR (#39610) is closed, unmerged, uneditable, dirty, failed proof, and broad. No close, merge, or executable autonomous fix PR is safe from this cluster without splitting the feature into narrower follow-up jobs.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39579 | keep_closed | skipped | canonical | Historical representative only; not a live canonical issue. |
| #51312 | keep_closed | skipped | duplicate | Already closed duplicate of the same feature request family. |
| #39610 | keep_closed | skipped | superseded | Closed unmerged contributor PR remains useful evidence and credit source, but cannot be merged or repaired by Clownfish. |
| cluster:ghcrawl-156990-autonomous-smoke | fix_needed | blocked | needs_human | The bug is real, but a complete fix crosses schema/types, agent-aware timezone resolution, multiple runtime call paths, docs, generated schema, and tests; this exceeds a narrow autonomous fix artifact and should be split or explicitly calibrated. |

## Needs Human

- Decide how to split per-agent userTimezone into narrower follow-up jobs, or explicitly calibrate Clownfish to take the broad feature/config/docs/runtime change. Suggested split: schema/types plus shared resolver first, then runtime propagation paths, then docs/generated schema/tests.
