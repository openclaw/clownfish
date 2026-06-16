---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157026-autonomous-smoke"
mode: "autonomous"
run_id: "27598133016"
workflow_run_id: "27598133016"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598133016"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:30:45.674Z"
canonical: "https://github.com/openclaw/openclaw/pull/41296"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/41296"
actions_total: 7
fix_executed: 0
fix_failed: 1
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157026-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598133016](https://github.com/openclaw/clownfish/actions/runs/27598133016)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/41296

## Summary

Hydrated state shows the original representative #41296 is already merged and present on current main, while #63084 is also already merged for the smaller gateway lifecycle hook surface. The only open hydrated PR, #56258, is related but not covered by those merged PRs: current main still awaits non-HTTP subsystem shutdown steps directly, and #56258 has unresolved bot blockers plus failing real-behavior proof. Plan a narrow repair of #56258's contributor branch rather than closing or merging it now.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | source PR #56258 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | blocked |  | clownfish/ghcrawl-157026-autonomous-smoke | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/gateway/server-close.test.ts: core test [check:changed] src/gateway/server-close.ts: core production [check:changed] src/gateway/shutdown-timeout.test.ts: core test [check:changed] src/gateway/shutdown-timeout.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] changelog attributions $ node scripts/check-changelog-attributions.mjs [check:changed] guarded extension wildcard re-exports $ node scripts/check-extension-wildcard-reexports.mjs [check:changed] plugin-sdk wildcard re-exports $ node scripts/check-plugin-sdk-wildcard-reexports.mjs [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node scripts/check-dependency-pins.mjs [check:changed] package patch guard $ node scripts/check-package-patches.mjs [check:changed] test temp creation report (warning-only) No new bare test temp-directory creation patterns found. [check:changed] typecheck core $ node scripts/run-tsgo.mjs -p tsconfig.core.json --incremental --tsBuildInfoFile .artifacts/tsgo-cac... |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41296 | keep_closed | skipped | canonical | Already merged canonical shutdown error visibility fix; closed PRs are historical evidence only and must not receive close actions. |
| #63084 | keep_closed | skipped | fixed_by_candidate | Already merged lifecycle hook fix; no mutation is valid for this closed PR. |
| #61407 | keep_closed | skipped | superseded | Closed historical PR superseded by the narrower merged #63084 path. |
| #62448 | keep_closed | skipped | superseded | Closed historical PR superseded by the smaller merged #63084 path. |
| #56258 | keep_related | planned | related | Related follow-up reliability gap. It is not safe to merge or close #56258 now because the branch lacks proof and has actionable bot blockers, but the source PR is useful and repairable. |
| cluster:ghcrawl-157026-autonomous-smoke | fix_needed | planned |  | A narrow fix path is available and allowed by job frontmatter, but merge gates are not met yet. |
| cluster:ghcrawl-157026-autonomous-smoke | build_fix_artifact | planned |  | Executor should repair and validate the open contributor PR branch before any future merge or closeout decision. |

## Needs Human

- none
