---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157058-autonomous-smoke"
mode: "autonomous"
run_id: "27584191031"
workflow_run_id: "27584191031"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584191031"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:05:26.821Z"
canonical: "https://github.com/openclaw/openclaw/issues/43015"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43015"
canonical_pr: "https://github.com/openclaw/openclaw/pull/65301"
actions_total: 8
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157058-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584191031](https://github.com/openclaw/clownfish/actions/runs/27584191031)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43015

## Summary

#43015 remains the open canonical issue. Current main still treats channel-extra poll metadata such as pollDurationSeconds as send-blocking poll intent. #65301 is the narrow maintainer-modifiable contributor repair path, but it is not merge-ready because hydrated checks fail and mergeability/review preflight are not clean.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | source PR #65301 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93441 | clownfish/ghcrawl-157058-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93441 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #43015 | keep_canonical | planned | canonical | Best surviving canonical issue for the remaining message.send poll-metadata false positive; no closure is appropriate before the repair path lands. |
| #65301 | fix_needed | planned | canonical | Repair the contributor branch, rebase/refactor narrowly onto current main, address current review/proof gates, run Codex /review and pnpm check:changed, then only merge if clean. |
| cluster:ghcrawl-157058-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair artifact for the open, maintainer-modifiable contributor PR rather than opening an unrelated replacement PR. |
| #65849 | keep_closed | skipped | fixed_by_candidate | Already closed; no action beyond retaining historical context. |
| #79681 | keep_independent | planned | independent | Different subsystem and user-visible failure; keep out of this cluster's fix/close path. |
| #56039 | keep_closed | skipped | fixed_by_candidate | Already closed historical schema-overexposure context, not an open target. |
| #88853 | keep_closed | skipped | superseded | Already closed mixed PR; no mutation target. |
| #89601 | keep_closed | skipped | fixed_by_candidate | Already merged partial fix; useful evidence but not sufficient to close #43015. |

## Needs Human

- none
