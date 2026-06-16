---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156790-autonomous-smoke"
mode: "autonomous"
run_id: "27597851709"
workflow_run_id: "27597851709"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597851709"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:22:30.934Z"
canonical: "https://github.com/openclaw/openclaw/issues/41860"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41860"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156790-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597851709](https://github.com/openclaw/clownfish/actions/runs/27597851709)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41860

## Summary

Hydrated state shows the hinted canonical PR #41880 and candidate PRs #41946/#68514 are already closed and unmerged. The live canonical path is the linked open issue #41860, and current main still sends Feishu post text directly as an md element, so a narrow credited replacement fix PR is needed before any fix-first closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| open_fix_pr | blocked |  | clownfish/ghcrawl-156790-autonomous-smoke | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] extensions/feishu/src/markdown-urls.test.ts: extension test [check:changed] extensions/feishu/src/markdown-urls.ts: extension production [check:changed] extensions/feishu/src/send.test.ts: extension test [check:changed] extensions/feishu/src/send.ts: extension production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] changelog attributions $ node scripts/check-changelog-attributions.mjs [check:changed] guarded extension wildcard re-exports $ node scripts/check-extension-wildcard-reexports.mjs [check:changed] plugin-sdk wildcard re-exports $ node scripts/check-plugin-sdk-wildcard-reexports.mjs [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node scripts/check-dependency-pins.mjs [check:changed] package patch guard $ node scripts/check-package-patches.mjs [check:changed] test temp creation report (warning-only) No new bare test temp-directory creation patterns found. [check:changed] typecheck extensions $ node scripts/run-tsgo.mjs -p tsconfig.extensions.j... |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41860 | keep_canonical | planned | canonical | #41860 is the only open hydrated tracker and remains the canonical issue because all implementation PR candidates are closed and unmerged. |
| #41880 | keep_closed | skipped | superseded | Already closed historical implementation candidate; preserve as credited source material only. |
| #41946 | keep_closed | skipped | superseded | Already closed implementation candidate with unresolved branch-specific review blockers; preserve as historical evidence and credit. |
| #68514 | keep_closed | skipped | superseded | Already closed broader implementation candidate; keep only as credited source and as evidence for edge cases the replacement must address. |
| cluster:ghcrawl-156790-autonomous-smoke | fix_needed | planned |  | Current main still exhibits the Feishu md URL handling bug, and all prior implementation candidates are unavailable for merge. |
| cluster:ghcrawl-156790-autonomous-smoke | build_fix_artifact | planned |  | A complete, narrow executable fix artifact is safe and allowed for this non-security Feishu message-rendering bug. |

## Needs Human

- none
