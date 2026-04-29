---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-07631fb931fc
mode: autonomous
allowed_actions:
  - comment
  - label
  - fix
  - raise_pr
blocked_actions:
  - close
  - merge
require_human_for:
  - close
  - merge
canonical: []
candidates: []
cluster_refs: []
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: false
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-07631fb931fc
source: clawsweeper_commit
commit_sha: 07631fb931fca5522c80d3c9481a589dde134345
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/07631fb931fca5522c80d3c9481a589dde134345.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-07631fb931fc`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/07631fb931fca5522c80d3c9481a589dde134345
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/07631fb931fca5522c80d3c9481a589dde134345.md
- Latest main at intake: 2b0b61441799f85f274fe49102453eb704512181

## ClawSweeper Report

```md
---
sha: 07631fb931fca5522c80d3c9481a589dde134345
parent: f7aebf8cb78ccce7cfc7f3947468c93a3d334aa2
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T06:06:59+01:00"
commit_committed_at: "2026-04-29T06:07:12+01:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T05:10:55Z
---

# Commit 07631fb

## Summary

Found one compatibility regression in the Discord public runtime sidecar. The queue/runtime behavior itself is covered by focused tests and matches the stated “no Discord-owned agent turn timeout” intent.

## Findings

### Medium: Discord runtime sidecar drops previously exported timeout helpers

- Kind: compatibility
- File: `extensions/discord/runtime-api.ts`
- Line: 94
- Evidence: `runtime-api.ts` now only re-exports timeout constants plus `mergeAbortSignals`, removing `isAbortError`, `normalizeDiscordInboundWorkerTimeoutMs`, `normalizeDiscordListenerTimeoutMs`, and `runDiscordTaskWithTimeout` from the prior public export set. The sidecar is treated as public/runtime surface: `src/plugins/bundled-plugin-metadata.test.ts:234` includes `runtime-api.js` in Discord public artifacts and runtime sidecars, and `extensions/discord/runtime-setter-api.ts:1` says `runtime-api.js` remains the broad compatibility barrel. The commit also updates `src/plugins/contracts/plugin-sdk-runtime-api-guardrails.test.ts:23` to accept the smaller export set, so the regression is now baked into the guard.
- Impact: any external plugin or operator script importing these named exports from `@openclaw/discord/runtime-api.js` will fail at module import time after upgrade, even though the exported helpers can remain deprecated and unused by Discord’s own queue.
- Suggested fix: restore the removed named exports as deprecated compatibility exports in `extensions/discord/src/monitor/timeouts.ts` and `extensions/discord/runtime-api.ts`, while keeping them unwired from the Discord message run queue. If the API removal is intentional, handle it as a documented public-surface break with version/compat follow-through.
- Confidence: high

## Reviewed

- Diff: `f7aebf8cb78ccce7cfc7f3947468c93a3d334aa2..07631fb931fca5522c80d3c9481a589dde134345`
- Changed files: all 23 files from the commit
- Code read: Discord message listener/handler/run queue, deleted inbound worker, timeout helpers, provider startup wiring, config metadata/types, changed queue tests, Discord docs
- Dependencies/web: inspected installed `@buape/carbon@0.16.0` `EventQueue` source for listener timeout behavior; no web lookup needed
- Commands: `pnpm docs:list`; `pnpm install`; `pnpm test extensions/discord/src/monitor/message-handler.queue.test.ts extensions/discord/src/monitor/provider.test.ts src/plugins/contracts/plugin-sdk-runtime-api-guardrails.test.ts -- --reporter=verbose` passed, 39 tests

## Limitations

- No live Discord gateway smoke was run; this finding is based on static public API compatibility.
```
