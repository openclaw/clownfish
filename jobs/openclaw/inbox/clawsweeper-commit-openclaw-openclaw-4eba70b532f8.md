---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-4eba70b532f8
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-4eba70b532f8
source: clawsweeper_commit
commit_sha: 4eba70b532f8b54c6cceac20c407526c9ea9121d
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/4eba70b532f8b54c6cceac20c407526c9ea9121d.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-4eba70b532f8`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/4eba70b532f8b54c6cceac20c407526c9ea9121d
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/4eba70b532f8b54c6cceac20c407526c9ea9121d.md
- Latest main at intake: ad761975dead160e1ac2a86e6511eea1a159d32e

## ClawSweeper Report

```md
---
sha: 4eba70b532f8b54c6cceac20c407526c9ea9121d
parent: 7d74c1f4b99ec40b834ae02eb1b8043b052aa5f9
repository: openclaw/openclaw
author: "Vincent Koc"
committer: "Vincent Koc"
github_author: vincentkoc
github_committer: vincentkoc
co_authors: []
commit_authored_at: "2026-04-28T23:06:45-07:00"
commit_committed_at: "2026-04-28T23:10:10-07:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T06:17:08Z
---

# Commit 4eba70b

## Summary

Found one generated-baseline regression. The code changes are JSDoc/type-doc only, but they touch public plugin SDK surfaces and leave the tracked SDK API hash stale.

## Findings

### Medium: Plugin SDK API baseline hash is stale

- Kind: regression
- File: `docs/.generated/plugin-sdk-api-baseline.sha256`
- Line: 1
- Evidence: `pnpm plugin-sdk:api:check` fails with `Plugin SDK API baseline drift detected` and points to `docs/.generated/plugin-sdk-api-baseline.sha256`. Rendering the baseline in `/tmp` shows the committed hash remains `21c1ddb7...` / `b4e011ed...`, while this commit renders `835d600...` / `48ab32a...`. The drift is caused by public SDK source-line/comment changes in files such as `src/channels/plugins/types.core.ts:115`, `src/channels/plugins/types.core.ts:410`, `src/plugins/types.ts:1217`, and `src/plugin-sdk/channel-config-schema-legacy.ts:2`.
- Impact: The repository’s plugin SDK API check now fails on `main` for this commit. Release/check gates that include `pnpm plugin-sdk:api:check` will reject the tree until the generated hash is updated.
- Suggested fix: If the deprecation annotations are intentional, run `pnpm plugin-sdk:api:gen` and commit the updated `docs/.generated/plugin-sdk-api-baseline.sha256`.
- Confidence: high

## Reviewed

- Diff: `7d74c1f4b99ec40b834ae02eb1b8043b052aa5f9..4eba70b532f8b54c6cceac20c407526c9ea9121d`
- Changed files: all 15 listed files; verified the diff is comment/JSDoc-only.
- Code read: scoped AGENTS for `src/plugin-sdk`, `src/channels`, `src/plugins`; plugin SDK API baseline generator; relevant SDK migration/entrypoint/overview docs.
- Dependencies/web: no dependency file changes; no web lookup needed.

## Tests / Live Checks

- `pnpm docs:list`: passed.
- `git diff --check 7d74c1f4...4eba70b`: passed.
- `pnpm exec oxfmt --check --threads=1 <15 changed files>`: passed after `pnpm install`.
- `pnpm config:docs:check`: passed.
- `pnpm plugin-sdk:api:check`: failed with SDK API baseline drift.
- Initial focused checks could not start because `node_modules` was missing; ran `pnpm install` once per repo instructions, then retried.

## Limitations

- Did not run broad `pnpm check:changed`; the actionable issue is covered by the focused generated API check.
```
