---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-1e168b17b79e
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-1e168b17b79e
source: clawsweeper_commit
commit_sha: 1e168b17b79e269d26b5bc2b37b06e3f287b09b8
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/1e168b17b79e269d26b5bc2b37b06e3f287b09b8.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-1e168b17b79e`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/1e168b17b79e269d26b5bc2b37b06e3f287b09b8
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/1e168b17b79e269d26b5bc2b37b06e3f287b09b8.md
- Latest main at intake: f2405c830bd925bd24f91b6bac5d417c6d36e5ba

## ClawSweeper Report

```md
---
sha: 1e168b17b79e269d26b5bc2b37b06e3f287b09b8
parent: 0f11dcd15f761101dacf3a489248f0d133142fed
repository: openclaw/openclaw
author: "Vincent Koc"
committer: "Vincent Koc"
github_author: vincentkoc
github_committer: vincentkoc
co_authors: []
commit_authored_at: "2026-04-29T00:48:31-07:00"
commit_committed_at: "2026-04-29T00:50:56-07:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T07:54:19Z
---

# Commit 1e168b1

## Summary

Found one CI regression: the commit makes `extensions/browser/tsconfig.json` diverge from the shared package-boundary tsconfig contract without updating the shared exclude constant or generated configs.

## Findings

### Medium: Browser package-boundary tsconfig now fails the plugin contract test

- Kind: regression
- File: `extensions/browser/tsconfig.json`
- Line: 12
- Evidence: The commit adds `./src/**/test-support/**` only to the browser plugin config, but `scripts/lib/extension-package-boundary.ts:8` still defines the shared `EXTENSION_PACKAGE_BOUNDARY_EXCLUDE` without that entry. The existing contract test at `src/plugins/contracts/extension-package-project-boundaries.test.ts:131` asserts every opt-in plugin tsconfig uses exactly the shared exclude list. Running `pnpm test src/plugins/contracts/extension-package-project-boundaries.test.ts` fails with the added browser exclude shown as the unexpected received entry.
- Impact: This breaks the existing `contracts-plugin` test lane on the reviewed main commit, so CI can fail even though the intended TypeScript exclusion itself is small.
- Suggested fix: Add `./src/**/test-support/**` to `EXTENSION_PACKAGE_BOUNDARY_EXCLUDE` and regenerate/update all opt-in plugin tsconfigs, or explicitly model browser as an allowed custom tsconfig if this one-off divergence is intentional.
- Confidence: high

## Reviewed

- Diff: `0f11dcd15f761101dacf3a489248f0d133142fed..1e168b17b79e269d26b5bc2b37b06e3f287b09b8`
- Changed files: `extensions/browser/tsconfig.json`, `tsconfig.extensions.json`
- Code read: `extensions/AGENTS.md`, `docs/ci.md`, `extensions/tsconfig.package-boundary.base.json`, `scripts/lib/extension-package-boundary.ts`, `src/plugins/contracts/extension-package-project-boundaries.test.ts`, `scripts/check-extension-package-tsc-boundary.mjs`
- Dependencies/web: no external dependency or web lookup needed; config-only commit
- Commands: `pnpm docs:list`, `pnpm install`, `pnpm test src/plugins/contracts/extension-package-project-boundaries.test.ts`, `git diff --check 0f11dcd15f761101dacf3a489248f0d133142fed..1e168b17b79e269d26b5bc2b37b06e3f287b09b8`

## Tests / Live Checks

- `pnpm test src/plugins/contracts/extension-package-project-boundaries.test.ts` failed: 1 failed, 6 passed. Failure is the shared exclude-list assertion at `src/plugins/contracts/extension-package-project-boundaries.test.ts:131`.
- Initial test attempt could not start because `node_modules` was missing; `pnpm install` completed successfully, then the focused test was retried.

## Limitations

- Did not run broad `pnpm check:changed`; the focused contract test already reproduces the actionable regression.
```
