---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-afc4f06ca3c7-qmd-startup
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
  - unclear_runtime_contract
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-afc4f06ca3c7-qmd-startup
source: clawsweeper_commit
commit_sha: afc4f06ca3c7ffcf19db61e17601bd317b7e428f
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/afc4f06ca3c7ffcf19db61e17601bd317b7e428f.md
---

# ClawSweeper commit finding repair: QMD startup arming only

ProjectClownfish should create or update one implementation PR from
`clownfish/clawsweeper-commit-openclaw-openclaw-afc4f06ca3c7-qmd-startup`
if the remaining QMD startup finding is still valid on latest
`openclaw/openclaw@main`.

## Operator Prompt

Use only the interval/embed startup finding from the ClawSweeper commit report below. Do not redo the already-landed watcher-root repair.

Current baseline:

- Latest main at split intake: dbcae5b78d9fcbae7479d0fddd1a7bb0a034e923
- PR https://github.com/openclaw/openclaw/pull/91884 landed the watcher-root finding from the original two-finding job.
- The original generated branch attempted to keep broader QMD manager ownership during Gateway startup. ClawSweeper rejected that direction because Gateway startup is intentionally one-shot. Do not reintroduce that design.

Before fixing, verify latest `main` still gates Gateway QMD startup solely on boot-sync eligibility. If latest `main` already fixed interval/embed startup arming, make no code changes and report that outcome.

If a narrow fix is possible, repair only the remaining startup arming semantics:

- Operators may disable boot refresh while still configuring periodic QMD refresh or embedding maintenance.
- Startup should not eagerly load every possible agent in multi-agent configs.
- Startup must preserve the existing one-shot manager close behavior unless a deliberately lightweight arming path exists.
- Prefer a small predicate/lifecycle helper plus focused tests over broad Gateway or QMD manager rewrites.

If the correct runtime contract is unclear, return `needs_human` with the exact decision needed instead of producing a broad speculative fix.

Do not merge. Do not close issues. Do not handle security-sensitive findings in this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/afc4f06ca3c7ffcf19db61e17601bd317b7e428f
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/afc4f06ca3c7ffcf19db61e17601bd317b7e428f.md
- Latest main at original intake: 1dd500c4951ce78747e260a9022325b8db61a54b
- Latest main at split intake: dbcae5b78d9fcbae7479d0fddd1a7bb0a034e923

## ClawSweeper Report Excerpt

```md
### Medium: Interval-only QMD background refresh no longer starts at gateway startup

- Kind: regression
- File: `src/gateway/server-startup-memory.ts`
- Line: 11
- Evidence: `shouldRunQmdStartupBootSync` now returns only `qmd.update.onBoot`, and `startGatewayMemoryBackend` skips manager creation when that is false. The actual periodic timers are only installed by the full QMD manager in `extensions/memory-core/src/memory/qmd-manager.ts:455`, so configs with `memory.qmd.update.onBoot=false` but `update.interval` or `update.embedInterval` enabled no longer arm those background refreshes during gateway startup. The previous predicate included `qmd.update.intervalMs > 0 || qmd.update.embedIntervalMs > 0`.
- Impact: Operators can disable boot refresh to avoid startup work while still expecting periodic QMD updates, as described by the config help for `memory.qmd.update.interval`. After this commit, those refreshes do not begin until an interactive memory manager is opened, leaving QMD indexes, session exports, or embeddings stale on idle gateways.
- Suggested fix: Keep interval/embed scheduling independent from boot sync, for example by preserving the interval/embed predicate and adding a lightweight startup mode that can arm timers without creating the full file watcher.
- Confidence: high
```

## Already Resolved From The Original Report

The watcher-root finding is resolved by https://github.com/openclaw/openclaw/pull/91884 and must not be reworked here.

## Suggested Validation

- Focused Gateway startup memory tests covering `onBoot: false` with non-zero `interval` and/or `embedInterval`.
- Focused QMD manager tests only if the fix touches manager lifecycle.
- `pnpm check:changed` or the repo-normalized changed-only validation lane.
