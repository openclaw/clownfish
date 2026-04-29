---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-a0fd105e5e41
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-a0fd105e5e41
source: clawsweeper_commit
commit_sha: a0fd105e5e41fafd7f537843af0dea9bd1a7336f
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/a0fd105e5e41fafd7f537843af0dea9bd1a7336f.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-a0fd105e5e41`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/a0fd105e5e41fafd7f537843af0dea9bd1a7336f
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/a0fd105e5e41fafd7f537843af0dea9bd1a7336f.md
- Latest main at intake: bd5afadc5c7a0575093d4e15fe518fe22d9792cb

## ClawSweeper Report

```md
---
sha: a0fd105e5e41fafd7f537843af0dea9bd1a7336f
parent: 9b1967e5efe2389e8387dcf9c2803f5bba4b7842
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T08:20:06+01:00"
commit_committed_at: "2026-04-29T08:21:12+01:00"
result: findings
confidence: high
highest_severity: low
check_conclusion: neutral
reviewed_at: 2026-04-29T07:26:06Z
---

# Commit a0fd105

## Summary

Found one low-severity release-operator documentation regression. The workflow split itself looks wired and covered by focused tests, but the release policy still describes the old child-workflow set in one approval paragraph.

## Findings

### Low: Release checklist omits the new plugin prerelease child from approval criteria

- Kind: regression
- File: `docs/reference/RELEASING.md`
- Line: 245
- Evidence: `full-release-validation.yml` now dispatches `plugin-prerelease.yml` as its own `plugin_prerelease` child and the final verifier requires `plugin_prerelease` success unless skipped (`.github/workflows/full-release-validation.yml:274`, `.github/workflows/full-release-validation.yml:713`). The release docs still say Full Release Validation dispatches only manual `CI`, `OpenClaw Release Checks`, and optional Telegram, and says a full run is acceptable when `normal_ci` and `release_checks` are successful plus optional `npm_telegram` (`docs/reference/RELEASING.md:245`, `docs/reference/RELEASING.md:251`).
- Impact: A release operator following this paragraph can miss the separate `Plugin Prerelease` evidence box and approve based on an incomplete checklist, especially when reviewing child run URLs or rerun evidence outside the parent verifier.
- Suggested fix: Update this paragraph to include `Plugin Prerelease`, and require `plugin_prerelease` success for full runs unless the rerun group intentionally skipped it.
- Confidence: high

## Reviewed

- Diff: `9b1967e5efe2389e8387dcf9c2803f5bba4b7842..a0fd105e5e41fafd7f537843af0dea9bd1a7336f`
- Changed files: `.github/workflows/ci.yml`, `.github/workflows/full-release-validation.yml`, `.github/workflows/plugin-prerelease.yml`, CI/testing docs, and workflow-plan tests.
- Code read: changed workflows in full, old CI release-only plugin lanes, reusable Docker E2E workflow call path, node/plugin prerelease plan helpers, release docs.
- GitHub checks: exact-sha broad CI was cancelled/superseded; Workflow Sanity/actionlint check on the commit completed successfully.

## Tests / Live Checks

- `pnpm docs:list`
- `pnpm install` after the first focused test attempt reported missing `node_modules`
- `pnpm test test/scripts/plugin-prerelease-test-plan.test.ts test/scripts/ci-node-test-plan.test.ts -- --reporter=verbose` passed, 17 tests.
- `node scripts/check-workflows.mjs` passed.
- `git diff --check 9b1967e5efe2389e8387dcf9c2803f5bba4b7842..a0fd105e5e41fafd7f537843af0dea9bd1a7336f` passed.
- Parsed the three changed workflow YAML files with the repo’s `yaml` dependency.

## Dependency / Web Checks

Checked `actions/checkout` documentation for the new SHA checkout usage; its `ref` input accepts a branch, tag, or SHA and `fetch-depth` defaults to one commit, matching the workflow’s target-SHA checkout pattern. ([github.com](https://github.com/actions/checkout))

## Limitations

- Did not run full CI, Docker, or release validation locally; this was a report-only review and the broad exact-sha CI run on GitHub was cancelled by later main activity.
```
