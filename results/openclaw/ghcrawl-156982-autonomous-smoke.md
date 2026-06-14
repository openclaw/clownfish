---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156982-autonomous-smoke"
mode: "autonomous"
run_id: "27515659253"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27515659253"
head_sha: "50268f1fd89dafa5e2ca7b68d5d0e69622b10373"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T23:44:39.067Z"
canonical: "https://github.com/openclaw/openclaw/pull/39245"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/39245"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156982-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27515659253](https://github.com/openclaw/clownfish/actions/runs/27515659253)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39245

## Summary

Current main at 9ba6ed1d5cb87c258459b5997f03895f27083dc1 still lacks the OpenAI-compatible functions-space tool-call normalization. #39091 is already closed and must stay historical. #39245 is the live useful contributor PR, but it is not merge-ready: it has a failing Real behavior proof gate, unknown mergeability, unresolved ClawSweeper proof/scope concerns, and node exec workdir changes outside the stated tool-call fix. Plan a narrow credited replacement fix artifact and block superseding #39245 until that replacement PR exists.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/session-transcript-repair.attachments.test.ts: core test [check:changed] src/agents/session-transcript-repair.test.ts: core test [check:changed] src/agents/session-transcript-repair.ts: core production [check:changed] src/agents/tool-call-id.test.ts: core test [check:changed] src/agents/tool-call-id.ts: core production [check:changed] src/agents/tool-call-shared.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] changelog attributions $ node scripts/check-changelog-attributions.mjs [check:changed] guarded extension wildcard re-exports $ node scripts/check-extension-wildcard-reexports.mjs [check:changed] plugin-sdk wildcard re-exports $ node scripts/check-plugin-sdk-wildcard-reexports.mjs [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node scripts/check-dependency-pins.mjs [check:changed] package patch guard $ node scripts/check-package-patches.mjs [check:changed] typecheck core $ node scripts/run-tsgo.mjs -p tsconfig.core.json --increme... |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39245 | close_superseded | skipped | superseded | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39091 | keep_closed | skipped | superseded | Already closed historical PR; keep as evidence and credit source only. |
| #39245 | close_superseded | blocked | superseded | Blocked by fix-first policy: do not close the useful source PR until Clownfish has opened or merged the narrow credited replacement. |
| cluster:ghcrawl-156982-autonomous-smoke | fix_needed | planned |  | The bug still appears real on current main and the only live PR is useful but not safe to merge as-is. |
| cluster:ghcrawl-156982-autonomous-smoke | build_fix_artifact | planned |  | Allowed actions include fix and raise_pr; replacement is narrow, auditable, and preserves contributor credit. |

## Needs Human

- none
