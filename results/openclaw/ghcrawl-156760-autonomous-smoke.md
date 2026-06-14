---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156760-autonomous-smoke"
mode: "autonomous"
run_id: "27484665398"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27484665398"
head_sha: "15ce3c5acb722f6304d0f6de2dc809dfe5816678"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T01:30:03.930Z"
canonical: "https://github.com/openclaw/openclaw/issues/34528"
canonical_issue: "https://github.com/openclaw/openclaw/issues/34528"
canonical_pr: "https://github.com/openclaw/openclaw/pull/77653"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156760-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27484665398](https://github.com/openclaw/clownfish/actions/runs/27484665398)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/34528

## Summary

Canonical issue #34528 remains open. Current main still has the Feishu reaction-suffixed message ID bug, and open PR #77653 is the only hydrated repairable candidate, but merge and post-merge closeout are blocked until the real behavior proof gate, mergeability, validation, and Codex review are clean. No GitHub mutations are emitted.

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
| #34528 | keep_canonical | planned | canonical | #34528 is the surviving canonical bug report; require_fix_before_close blocks closeout until #77653 or a replacement lands and validates. |
| #77653 | fix_needed | planned | canonical | Repair the contributor branch rather than opening a new fix PR: the branch is editable and focused, but it must be rebased/validated/reviewed and supplied with real behavior proof before merge. |
| cluster:ghcrawl-156760-autonomous-smoke | build_fix_artifact | planned |  | A narrow repair artifact is needed so the executor can refresh #77653 and preserve contributor credit while keeping closure and merge blocked. |
| #34565 | keep_closed | skipped | superseded | Already closed historical contributor PR; preserve as credit/evidence only. |
| #34639 | keep_closed | skipped | superseded | Already closed historical contributor PR; preserve as credit/evidence only. |

## Needs Human

- none
