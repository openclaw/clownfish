---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156995-autonomous-smoke"
mode: "autonomous"
run_id: "27598132224"
workflow_run_id: "27598132224"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598132224"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:40:00.333Z"
canonical: "new_fix_pr:ghcrawl-156995-autonomous-smoke"
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156995-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598132224](https://github.com/openclaw/clownfish/actions/runs/27598132224)

Workflow conclusion: success

Worker result: planned

Canonical: new_fix_pr:ghcrawl-156995-autonomous-smoke

## Summary

Both job PRs are already closed in the hydrated live state, so no close, comment, label, or merge mutation is appropriate. Current main still suppresses successful empty-output background exec notifications unless notifyOnExitEmptySuccess is explicitly true, so the remaining narrow chat-session UX gap should move through a credited replacement fix PR.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93525 | clownfish/ghcrawl-156995-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93525 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39726 | keep_closed | skipped | superseded | Historical useful source PR, but closed and not mergeable; preserve as credited source evidence for replacement fix. |
| #46926 | keep_closed | skipped | superseded | Closed broader PR remains credited context only; no mutation is planned. |
| cluster:ghcrawl-156995-autonomous-smoke | fix_needed | planned |  | The original open candidates are closed, but the source-level gap remains on current main and is narrow enough for a replacement fix PR. |
| cluster:ghcrawl-156995-autonomous-smoke | build_fix_artifact | planned |  | Build a new credited replacement branch because the useful source PRs are closed/unmergeable and maintainer_can_modify=false. |

## Needs Human

- none
