---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-3aadeba93fde
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-3aadeba93fde
source: clawsweeper_commit
commit_sha: 3aadeba93fdebc34a2ea6f5fea8bf3f58b48cd4a
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/3aadeba93fdebc34a2ea6f5fea8bf3f58b48cd4a.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-3aadeba93fde`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/3aadeba93fdebc34a2ea6f5fea8bf3f58b48cd4a
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/3aadeba93fdebc34a2ea6f5fea8bf3f58b48cd4a.md
- Latest main at intake: 9e34fb9febe2918f274ab7d86e12d64e4829eb51

## ClawSweeper Report

```md
---
sha: 3aadeba93fdebc34a2ea6f5fea8bf3f58b48cd4a
parent: b85edb3f0cf6c2a8bec06537af9211a044266a6c
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T05:36:51+01:00"
commit_committed_at: "2026-04-29T05:37:29+01:00"
result: findings
confidence: high
highest_severity: high
check_conclusion: failure
reviewed_at: 2026-04-29T04:40:32Z
---

# Commit 3aadeba93f

## Summary

Found one regression: the changed doctor config-write path fails core typecheck, and the same call can dereference an undefined env object at runtime when doctor needs to write config.

## Findings

### High: Doctor config write passes optional env to required update guard

- Kind: regression
- File: `src/flows/doctor-health-contributions.ts`
- Line: 522
- Evidence: `DoctorHealthFlowContext.env` is optional, and `doctorCommand` builds the production context in `src/flows/doctor-health.ts` without `env`. This commit changed the call from `env: ctx.env ?? process.env` to `env: ctx.env`, while `shouldSkipLegacyUpdateDoctorConfigWrite` immediately reads `params.env.OPENCLAW_UPDATE_IN_PROGRESS`.
- Impact: `pnpm tsgo:core` fails on this commit with `TS2322: Type 'ProcessEnv | undefined' is not assignable to type 'ProcessEnv'`. If typechecking is bypassed, doctor can also throw when `shouldWriteConfig` is true and no test-supplied `ctx.env` exists.
- Suggested fix: restore the fallback at the call site (`env: ctx.env ?? process.env`) or make/populate `ctx.env` required in the production doctor context.
- Confidence: high

## Reviewed

- Diff: `b85edb3f0cf6c2a8bec06537af9211a044266a6c..3aadeba93fdebc34a2ea6f5fea8bf3f58b48cd4a`
- Changed files: `src/flows/doctor-health-contributions.ts`, `src/flows/doctor-health-contributions.test.ts`
- Code read: changed files, `src/flows/doctor-health.ts`, `src/commands/doctor-config-flow.ts`, update runner/env call sites, installer update path, doctor docs
- Dependencies/web: no dependency files changed; no web lookup needed

## Tests / Live Checks

- `pnpm docs:list`: passed
- `pnpm test src/flows/doctor-health-contributions.test.ts`: passed after installing missing deps
- `pnpm tsgo:core`: failed with the type error above

## Limitations

- Full suite not run because the focused core typecheck already fails on the reviewed commit.
```
