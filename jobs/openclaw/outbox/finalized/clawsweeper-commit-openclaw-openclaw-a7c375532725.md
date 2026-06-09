---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-a7c375532725
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-a7c375532725
source: clawsweeper_commit
commit_sha: a7c375532725cd135b0735b96f5f9fbc2dd1e4bb
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/a7c375532725cd135b0735b96f5f9fbc2dd1e4bb.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-a7c375532725`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/a7c375532725cd135b0735b96f5f9fbc2dd1e4bb
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/a7c375532725cd135b0735b96f5f9fbc2dd1e4bb.md
- Latest main at intake: 83df409d9482e54f9d261462c85fc97f440299e7

## ClawSweeper Report

```md
---
sha: a7c375532725cd135b0735b96f5f9fbc2dd1e4bb
parent: 67e8d35f1cf8ef4b8173d963e250c776af355099
repository: openclaw/openclaw
author: "Vincent Koc"
committer: "Vincent Koc"
github_author: vincentkoc
github_committer: vincentkoc
co_authors: []
commit_authored_at: "2026-04-28T22:35:51-07:00"
commit_committed_at: "2026-04-28T22:41:23-07:00"
result: findings
confidence: high
highest_severity: low
check_conclusion: neutral
reviewed_at: 2026-04-29T05:45:02Z
---

# Commit a7c3755

## Summary

The runtime change is comment-only and the compatibility facades still expose the same exports and loader paths, but the SDK API baseline check now fails because the tracked generated hash was not updated.

## Findings

### Low: Plugin SDK API baseline hash is stale

- Kind: regression
- File: `docs/.generated/plugin-sdk-api-baseline.sha256`
- Line: 1
- Evidence: `pnpm plugin-sdk:api:check` fails with `Plugin SDK API baseline drift detected` and points at `docs/.generated/plugin-sdk-api-baseline.sha256`. The commit changes public SDK facade JSDoc in `src/plugin-sdk/channel-config-schema-legacy.ts`, `src/plugin-sdk/discord.ts`, and `src/plugin-sdk/telegram-account.ts`, but does not update the tracked generated hash.
- Impact: The SDK API drift gate will fail for this commit even though the intended API surface change is documentation/deprecation metadata only.
- Suggested fix: Run `pnpm plugin-sdk:api:gen` and commit the updated `docs/.generated/plugin-sdk-api-baseline.sha256`, or revert the SDK comment changes if no public-surface drift was intended.
- Confidence: high

## Reviewed

- Diff: `67e8d35f1cf8ef4b8173d963e250c776af355099..a7c375532725cd135b0735b96f5f9fbc2dd1e4bb`
- Changed files: `src/plugin-sdk/channel-config-schema-legacy.ts`, `src/plugin-sdk/discord.ts`, `src/plugin-sdk/telegram-account.ts`
- Code read: full changed files, parent versions, SDK entrypoint/export metadata, API baseline generator, relevant SDK docs, adjacent facade/boundary tests
- Dependencies/web: no dependency files changed; no external lookup needed

## Tests / Live Checks

- `pnpm docs:list`: passed
- `git diff --check 67e8d35f1cf8ef4b8173d963e250c776af355099..a7c375532725cd135b0735b96f5f9fbc2dd1e4bb`: passed
- `pnpm exec oxfmt --check --threads=1 src/plugin-sdk/channel-config-schema-legacy.ts src/plugin-sdk/discord.ts src/plugin-sdk/telegram-account.ts`: passed after `pnpm install`
- `pnpm plugin-sdk:check-exports`: passed
- `pnpm plugin-sdk:api:check`: failed with SDK API baseline drift
- `pnpm test src/plugin-sdk/telegram-account.test.ts test/extension-test-boundary.test.ts`: passed

## Limitations

- none
```
