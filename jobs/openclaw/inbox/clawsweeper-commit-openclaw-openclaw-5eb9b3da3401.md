---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-5eb9b3da3401
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-5eb9b3da3401
source: clawsweeper_commit
commit_sha: 5eb9b3da3401f4f3e600b6e1c480e915edcbe9f2
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/5eb9b3da3401f4f3e600b6e1c480e915edcbe9f2.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-5eb9b3da3401`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/5eb9b3da3401f4f3e600b6e1c480e915edcbe9f2
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/5eb9b3da3401f4f3e600b6e1c480e915edcbe9f2.md
- Latest main at intake: 0fc303232506cdcce42306ff71a2b3c657fe2d31

## ClawSweeper Report

```md
---
sha: 5eb9b3da3401f4f3e600b6e1c480e915edcbe9f2
parent: 806a0119f3cd0683c1b7797f835dc09203253948
repository: openclaw/openclaw
author: "steipete"
committer: "steipete"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T05:25:27+01:00"
commit_committed_at: "2026-04-29T05:25:42+01:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T04:29:47Z
---

# Commit 5eb9b3d

## Summary

Found one reliability regression in the QA live transport memory suppression path.

## Findings

### Medium: Memory-core is still selected by the default plugin slot in packaged live lanes

- Kind: reliability
- File: `extensions/qa-lab/src/live-transports/shared/live-gateway.runtime.ts`
- Line: 49
- Evidence: `prepareLiveTransportGatewayConfig` removes `memory-core` from `plugins.allow` and `plugins.entries`, but it does not set `plugins.slots.memory` to `"none"` or explicitly disable the entry. The plugin config normalizer defaults an unset memory slot to `memory-core` (`src/plugins/config-normalization-shared.ts:155`, `src/plugins/slots.ts:17`), and activation enables a plugin selected by that slot before the allowlist rejection path (`src/plugins/config-activation-shared.ts:203`). This matters for installed/package Telegram QA because `sutOpenClawCommand` sets `usePackagedPlugins: true` (`extensions/qa-lab/src/live-transports/telegram/telegram-live.runtime.ts:1202`), and that bypasses the source-tree staging filter that would otherwise omit `memory-core` from `OPENCLAW_BUNDLED_PLUGINS_DIR` (`extensions/qa-lab/src/gateway-child.ts:621`).
- Impact: packaged live Telegram release/package validation can still load the `memory-core` runtime even though this commit is trying to slim transport-only startup. That preserves the startup cost and side effects the change is meant to remove, and can keep the release transport lane vulnerable to startup timeouts.
- Suggested fix: when preparing transport-only gateway config, also set `plugins.slots.memory = "none"` or set `plugins.entries["memory-core"].enabled = false`; add a test that runs the mutated config through the plugin activation/normalization contract, not only an allowlist/entry assertion.
- Confidence: high

## Reviewed

- Diff: `806a0119f3cd0683c1b7797f835dc09203253948..5eb9b3da3401f4f3e600b6e1c480e915edcbe9f2`
- Changed files: `.github/workflows/openclaw-release-checks.yml`, `extensions/qa-lab/src/gateway-child.ts`, `extensions/qa-lab/src/live-transports/shared/live-gateway.runtime.ts`, `src/gateway/server-startup-post-attach.ts`, and adjacent tests.
- Code read: QA gateway config/build/staging, live transport Telegram/Discord callers, gateway startup prewarm sidecar, plugin config normalization/activation/slot handling.
- Dependencies/web: no external web lookup needed; no dependency manifests changed.

## Tests / Live Checks

- `pnpm docs:list`
- `pnpm test extensions/qa-lab/src/live-transports/shared/live-gateway.runtime.test.ts extensions/qa-lab/src/gateway-child.test.ts src/gateway/server-startup.test.ts` initially failed because `node_modules` was missing.
- `pnpm install`
- Retried targeted tests: passed, 3 files / 59 tests.
- `pnpm test src/plugins/config-state.test.ts`: passed, 47 tests.

## Limitations

- Did not run full release QA or package Telegram live lanes; finding is based on source trace plus existing plugin-slot contract tests.
```
