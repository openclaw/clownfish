---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156779-autonomous-smoke"
mode: "autonomous"
run_id: "27483675257"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27483675257"
head_sha: "74c3495db93c53072dae244aaf2a2dc23cfce9db"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T00:41:53.945Z"
canonical: "https://github.com/openclaw/openclaw/issues/40768"
canonical_issue: "https://github.com/openclaw/openclaw/issues/40768"
canonical_pr: "https://github.com/openclaw/openclaw/pull/40782"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156779-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27483675257](https://github.com/openclaw/clownfish/actions/runs/27483675257)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/40768

## Summary

#40768 remains the canonical open issue. #40782 is the useful writable contributor repair path, but it is not merge-ready: current main still uses open_id-only mention detection, human and bot review findings remain unresolved, mergeability is unknown, and relevant checks are failing. Plan a contributor-branch repair artifact; do not merge or close anything from this worker result.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

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
| #40768 | keep_canonical | planned | canonical | #40768 is the surviving canonical issue for the Feishu multi-bot @mention root cause. |
| #40782 | fix_needed | planned | canonical | Repair the contributor branch before any merge or issue closeout; #40782 is useful but currently blocked by unresolved review, proof, check, and rebase work. |
| #35994 | keep_closed | skipped | related | Already closed historical context; no mutation is planned. |
| #40783 | keep_closed | skipped | superseded | Already closed contributor PR; no mutation is planned. |
| cluster:ghcrawl-156779-autonomous-smoke | build_fix_artifact | planned |  | Build a narrow repair artifact for #40782 so the executor can rebase/refactor the contributor branch and preserve attribution. |

## Needs Human

- none
