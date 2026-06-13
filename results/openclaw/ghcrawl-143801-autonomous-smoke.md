---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143801-autonomous-smoke"
mode: "autonomous"
run_id: "27482131963"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27482131963"
head_sha: "d64f893eb27045dfc87f44dac4ad7060545f4b0b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-13T23:44:29.678Z"
canonical: "https://github.com/openclaw/openclaw/pull/67398"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/67398"
actions_total: 4
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-143801-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27482131963](https://github.com/openclaw/clownfish/actions/runs/27482131963)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/67398

## Summary

#67398 is the only open hydrated candidate and remains the canonical repair path. It is useful and narrow, but merge is not safe now because the PR is dirty, the Real behavior proof check failed, and ClawSweeper still requires behavior proof/review. Current main still shows the reported base-session outbound routing, so plan an in-place repair of the contributor branch rather than closing or merging anything.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| repair_contributor_branch | failed |  |  | source PR #67398 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/92807 | clownfish/ghcrawl-143801-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92807 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56941 | keep_closed | skipped | related | Already closed; retain as historical context for the heartbeat isolated-session family. |
| #57577 | keep_closed | skipped | related | Already closed; retain as historical context for the heartbeat isolated-session family. |
| #67398 | fix_needed | planned | canonical | Repair the existing contributor branch before any merge: rebase/resolve dirty state, preserve the narrow runSessionKey fix, add or keep explicit mirror proof, run Codex /review and pnpm check:changed, then re-evaluate merge. |
| cluster:ghcrawl-143801-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair artifact for the canonical contributor PR rather than merging a dirty branch or opening an unrelated replacement. |

## Needs Human

- none
