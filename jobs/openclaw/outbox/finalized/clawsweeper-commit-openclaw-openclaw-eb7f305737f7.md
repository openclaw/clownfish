---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-eb7f305737f7
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-eb7f305737f7
source: clawsweeper_commit
commit_sha: eb7f305737f71f19c166eb79eebc0520a2e7538a
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/eb7f305737f71f19c166eb79eebc0520a2e7538a.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-eb7f305737f7`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/eb7f305737f71f19c166eb79eebc0520a2e7538a
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/eb7f305737f71f19c166eb79eebc0520a2e7538a.md
- Latest main at intake: 2a02b3bcec6cd9443c635372e09722baad07dd5d

## ClawSweeper Report

```md
---
sha: eb7f305737f71f19c166eb79eebc0520a2e7538a
parent: c01244e859279a2e60f50423174c94f6fc9e3e8f
repository: openclaw/openclaw
author: "Vincent Koc"
committer: "Vincent Koc"
github_author: vincentkoc
github_committer: vincentkoc
co_authors: []
commit_authored_at: "2026-04-29T00:36:24-07:00"
commit_committed_at: "2026-04-29T00:36:24-07:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T07:41:59Z
---

# Commit eb7f305

## Summary

Found one merge regression in the browser test-support relocation. The new import path cannot resolve, and the raw-fetch guard still sees the helper outside the skipped `test-support/` subtree.

## Findings

### Medium: Browser test-support fetch wrapper points at a missing module

- Kind: regression
- File: `extensions/browser/src/browser/test-support/fetch.ts`
- Line: 1
- Evidence: `test-support/fetch.ts` now re-exports from `./test-support-fetch.js`, which resolves to `extensions/browser/src/browser/test-support/test-support-fetch.js`; that file does not exist. The actual helper is `extensions/browser/src/browser/test-support-fetch.ts`. A focused run of `pnpm test extensions/browser/src/browser/server.auth-token-gates-http.test.ts` fails before running tests with `Cannot find module './test-support-fetch.js' imported from extensions/browser/src/browser/test-support/fetch.ts`.
- Impact: Every browser test importing `./test-support/fetch.js` fails to load. The same merge shape also leaves the raw fetch implementation at `extensions/browser/src/browser/test-support-fetch.ts:24` and `:27`, outside the new `/test-support/` skip in `scripts/check-no-raw-channel-fetch.mjs:97`; `node scripts/check-no-raw-channel-fetch.mjs` fails on those two callsites.
- Suggested fix: Keep the implementation under `extensions/browser/src/browser/test-support/fetch.ts` or change the re-export to `../test-support-fetch.js` and update the raw-fetch guard to skip/allow the actual helper location. The cleaner fix is to keep the raw-fetch test helper inside `test-support/`, matching the guard.
- Confidence: high

## Reviewed

- Diff: `c01244e859279a2e60f50423174c94f6fc9e3e8f..eb7f305737f71f19c166eb79eebc0520a2e7538a`
- Changed files: workflow reaction policy, changelog, browser test fetch relocation, Ollama stream cancellation fix/tests, raw-fetch guard, Docker e2e harness/probe scripts, hooks README.
- Code read: changed files in full where relevant, `src/infra/net/fetch-guard.ts`, `src/utils/fetch-timeout.ts`, `scripts/lib/callsite-guard.mjs`, `scripts/lib/ts-guard-utils.mjs`, Docker e2e helper callers.
- Issue context: inspected `#74133`; the Ollama change matches the intended cancellation fix.

## Tests / Live Checks

- `pnpm docs:list`: passed.
- `pnpm install`: completed after initial test run found missing local dependencies.
- `pnpm test extensions/browser/src/browser/server.auth-token-gates-http.test.ts`: failed with missing `./test-support-fetch.js`.
- `node scripts/check-no-raw-channel-fetch.mjs`: failed on `extensions/browser/src/browser/test-support-fetch.ts:24` and `:27`.
- `pnpm test extensions/ollama/src/stream-runtime.test.ts`: passed, 67 tests.
- `git diff --check c01244e859279a2e60f50423174c94f6fc9e3e8f..eb7f305737f71f19c166eb79eebc0520a2e7538a`: passed.

## Dependency / Web Checks

- No dependency or lockfile changes.
- Used `gh issue view 74133` for referenced PR context; no external package/advisory lookup was needed.

## Limitations

- Full suite was not run; the focused browser failure is directly reproduced, and broad gates are Testbox work by repo policy.
```
