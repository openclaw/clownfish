---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-199248-agentic-merge"
mode: "autonomous"
run_id: "24968254807"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24968254807"
head_sha: "ca0a88e67e5debd868d492727ed94b15a8da7f88"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T22:27:53.941Z"
canonical: "https://github.com/openclaw/openclaw/issues/50519"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50519"
canonical_pr: null
actions_total: 12
apply_executed: 0
apply_blocked: 1
apply_skipped: 6
needs_human_count: 0
---

# ghcrawl-199248-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24968254807](https://github.com/openclaw/projectclownfish/actions/runs/24968254807)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/50519

## Summary

Classified the Windows CJK/GBK exec-output cluster from the hydrated preflight artifact. #50519 is the canonical open bug. No contributor PR is merge-ready because candidates either have actionable bot findings, failing checks, incomplete scope, or broad/unsafe deltas, so the safe path is a narrow replacement fix artifact that preserves contributor credit. No GitHub mutations were performed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 6 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #43611 | close_superseded | skipped | superseded | action status is blocked |
| #50586 | close_superseded | skipped | superseded | action status is blocked |
| #50885 | close_superseded | skipped | superseded | action status is blocked |
| #56538 | close_superseded | skipped | superseded | action status is blocked |
| #64661 | close_superseded | skipped | superseded | action status is blocked |
| #64709 | close_superseded | skipped | superseded | action status is blocked |
| #72393 | merge_canonical | blocked | fix_pr | mergeable state is CONFLICTING |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #50519 | keep_canonical | planned | canonical | Best live canonical for the user-visible bug; keep open until a validated fix lands. |
| #43611 | close_superseded | blocked | superseded | Superseded by the canonical bug and replacement fix path, but require_fix_before_close blocks closure until the replacement PR exists. |
| #50586 | close_superseded | blocked | superseded | Same root cause as #50519 but not viable as canonical; closure is blocked until a replacement fix PR exists. |
| #50885 | close_superseded | blocked | superseded | Useful but superseded by the replacement decoder path; closure is blocked until the replacement PR exists. |
| #56538 | close_superseded | blocked | superseded | Representative is not merge-ready; replacement fix required before closing/superseding. |
| #64661 | close_superseded | blocked | superseded | Useful but too risky as canonical; closure blocked until replacement fix PR exists. |
| #64709 | close_superseded | blocked | superseded | Best later broad attempt still has unresolved review findings and failing checks; closure blocked until replacement fix PR exists. |
| #56462 | keep_closed | skipped | duplicate | Closed historical duplicate; no closure action is valid. |
| #64072 | route_security | planned | security_sensitive | Quarantine only this security-sensitive linked ref to central OpenClaw security handling. |
| #39 | keep_closed | skipped | independent | Closed unrelated context ref; no action. |
| cluster:ghcrawl-199248-agentic-merge | fix_needed | planned |  | A narrow replacement fix is needed before superseded PR closeout or post-merge closeout. |
| cluster:ghcrawl-199248-agentic-merge | build_fix_artifact | planned |  | Build a narrow replacement fix plan for ProjectClownfish executor; do not mutate GitHub directly. |

## Needs Human

- none
