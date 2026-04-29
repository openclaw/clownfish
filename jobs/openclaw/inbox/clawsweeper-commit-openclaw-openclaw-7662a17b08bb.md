---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-7662a17b08bb
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-7662a17b08bb
source: clawsweeper_commit
commit_sha: 7662a17b08bbc99483dad95b2657f869377df1b7
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/7662a17b08bbc99483dad95b2657f869377df1b7.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-7662a17b08bb`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/7662a17b08bbc99483dad95b2657f869377df1b7
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/7662a17b08bbc99483dad95b2657f869377df1b7.md
- Latest main at intake: a0fd105e5e41fafd7f537843af0dea9bd1a7336f

## ClawSweeper Report

```md
---
sha: 7662a17b08bbc99483dad95b2657f869377df1b7
parent: 9ddd10b84cf2d2d6ea899daeced4984851a56da0
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T08:15:48+01:00"
commit_committed_at: "2026-04-29T08:16:17+01:00"
result: findings
confidence: high
highest_severity: low
check_conclusion: neutral
reviewed_at: 2026-04-29T07:21:07Z
---

# Commit 7662a17

## Summary

Found one release-smoke reliability issue: the cross-OS release script removes `memory-core` from `plugins.allow`, but does not disable the default memory slot, so later broad runtime plugin loads still treat `memory-core` as enabled.

## Findings

### Low: Cross-OS smoke still leaves `memory-core` selected through the default memory slot

- Kind: reliability
- File: `scripts/openclaw-cross-os-release-checks.ts`
- Line: 58
- Evidence: The release allowlist no longer includes `memory-core`, and the script only writes `plugins.allow` at `scripts/openclaw-cross-os-release-checks.ts:1863` and `scripts/openclaw-cross-os-release-checks.ts:2633`. It never writes `plugins.slots.memory = "none"`. The config normalizer defaults an unset memory slot to `memory-core` (`src/plugins/config-normalization-shared.ts:148`, `src/plugins/slots.ts:17`), and agent runs call `ensureRuntimePluginsLoaded` before execution (`src/agents/pi-embedded-runner/run.ts:346`). A focused probe confirmed this exact release allowlist makes `memory-core` `enabled: true` in a broad loader snapshot; adding `slots: { memory: "none" }` disables it.
- Impact: The commit’s cross-OS release smoke path can still load/register the memory plugin during the agent turn, so the intended memory startup reduction is incomplete and can still carry the memory/plugin startup cost this change is trying to avoid.
- Suggested fix: When the release smoke script writes `plugins.allow`, also set `plugins.slots.memory` to `"none"` for both installed and dev paths, mirroring the new QA live gateway config behavior.
- Confidence: high

## Reviewed

- Diff: `9ddd10b84cf2d2d6ea899daeced4984851a56da0..7662a17b08bbc99483dad95b2657f869377df1b7`
- Changed files: `extensions/qa-lab/src/live-transports/shared/live-gateway.runtime.ts`, `extensions/qa-lab/src/live-transports/shared/live-gateway.runtime.test.ts`, `scripts/openclaw-cross-os-release-checks.ts`, `test/scripts/openclaw-cross-os-release-checks.test.ts`
- Code read: QA live gateway config/test, QA gateway child config staging, cross-OS release config writes, plugin slot normalization, activation policy, runtime plugin loading, memory plugin manifest/entrypoint.
- Dependencies/web: no dependency files changed; no web lookup needed.

## Tests / Live Checks

- `pnpm install`
- `pnpm test extensions/qa-lab/src/live-transports/shared/live-gateway.runtime.test.ts test/scripts/openclaw-cross-os-release-checks.test.ts` passed.
- `pnpm exec tsx -e ...` probe confirmed the release allowlist without `plugins.slots.memory` keeps `memory-core` enabled in a broad plugin load, while `slots.memory = "none"` disables it.
- `git diff --check 9ddd10b84cf2d2d6ea899daeced4984851a56da0..7662a17b08bbc99483dad95b2657f869377df1b7` passed.

## Limitations

- Did not run the full cross-OS release smoke; the focused static trace and runtime loader probe covered the changed contract directly.
```
