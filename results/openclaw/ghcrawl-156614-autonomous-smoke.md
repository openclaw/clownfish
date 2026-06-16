---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156614-autonomous-smoke"
mode: "autonomous"
run_id: "27584186408"
workflow_run_id: "27584186408"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584186408"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:10:23.388Z"
canonical: "https://github.com/openclaw/openclaw/pull/54647"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/54647"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156614-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584186408](https://github.com/openclaw/clownfish/actions/runs/27584186408)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/54647

## Summary

All job seed PRs are already closed in the hydrated live artifact, so no close, label, comment, or merge mutation is safe or needed for those refs. The only remaining actionable path is a narrow replacement fix artifact for closed PR #54647, whose ACP sessions.list model-reporting bug is still represented as real and whose contributor branch is closed, dirty, uneditable, and has unresolved bot review findings.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| open_fix_pr | blocked |  | clownfish/ghcrawl-156614-autonomous-smoke | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/gateway/session-utils.test.ts: core test [check:changed] src/gateway/session-utils.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] changelog attributions $ node scripts/check-changelog-attributions.mjs [check:changed] guarded extension wildcard re-exports $ node scripts/check-extension-wildcard-reexports.mjs [check:changed] plugin-sdk wildcard re-exports $ node scripts/check-plugin-sdk-wildcard-reexports.mjs [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node scripts/check-dependency-pins.mjs [check:changed] package patch guard $ node scripts/check-package-patches.mjs [check:changed] test temp creation report (warning-only) No new bare test temp-directory creation patterns found. [check:changed] typecheck core $ node scripts/run-tsgo.mjs -p tsconfig.core.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/core.tsbuildinfo [check:changed] summary 255ms ok conflict markers 218ms ok changelog attributions 228ms ok guarded extensio... |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #43984 | keep_closed | skipped | related | Closed historical PR; evidence only. |
| #54647 | fix_needed | planned | related | The useful contributor fix is closed and uneditable, so the executor should open a narrow credited replacement PR. |
| #65178 | keep_closed | skipped | superseded | Closed source PR already superseded; no mutation. |
| #67766 | keep_closed | skipped | superseded | Original representative is obsolete and closed. |
| #67768 | keep_closed | skipped | superseded | Closed superseded PR; evidence only. |
| #68047 | keep_closed | skipped | superseded | Closed redundant PR; no mutation. |
| #70302 | keep_closed | skipped | fixed_by_candidate | Closed PR covered by merged hydrated candidate #72324. |
| #70981 | keep_closed | skipped | fixed_by_candidate | Closed PR covered by merged hydrated candidate #72324. |
| cluster:ghcrawl-156614-autonomous-smoke | build_fix_artifact | planned |  | Fix-enabled autonomous job with no viable open canonical PR for the ACP model-reporting bug. |

## Needs Human

- none
