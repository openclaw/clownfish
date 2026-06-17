---
repo: "openclaw/openclaw"
cluster_id: "repair-51868-qr-rendering"
mode: "autonomous"
run_id: "27661253545"
workflow_run_id: "27661253545"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27661253545"
head_sha: "673fe763791e7ae1c517bac298e0f869db66869d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T02:40:06.229Z"
canonical: "https://github.com/openclaw/openclaw/pull/51868"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/51868"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-51868-qr-rendering

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27661253545](https://github.com/openclaw/clownfish/actions/runs/27661253545)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/51868

## Summary

PR #51868 is the canonical source for the UTF-8 half-block QR rendering defect, but it is not automation-mergeable: the hydrated PR is open, dirty/unmergeable, from an uneditable fork branch, and review-bot findings require a narrow replacement that preserves @emg110's credit. Current main at a588a33ffa599fc88c6ab46d7a0ccbf3f65db8b8 still lacks half-block-art detection/styling in the markdown renderer and tool-output sidebar path, so a replacement fix PR is appropriate. No GitHub mutations, closures, or merges are planned directly by the worker.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93869 | clownfish/repair-51868-qr-rendering |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93869 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #51868 | fix_needed | planned | canonical | Create a narrow credited replacement on clownfish/repair-51868-qr-rendering instead of repairing the uneditable dirty source branch. |
| cluster:repair-51868-qr-rendering | build_fix_artifact | planned |  | A complete, narrow replacement fix artifact can be executed without maintainer judgment. |
| cluster:repair-51868-qr-rendering | open_fix_pr | planned |  | Job allows raise_pr and the canonical source branch is uneditable/dirty, so the executor should open one credited replacement PR after gates pass. |

## Needs Human

- none
