---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-0bbbc99980b8
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-0bbbc99980b8
source: clawsweeper_commit
commit_sha: 0bbbc99980b89d9dfc7d77b782fd609c6abe4d93
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/0bbbc99980b89d9dfc7d77b782fd609c6abe4d93.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-0bbbc99980b8`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/0bbbc99980b89d9dfc7d77b782fd609c6abe4d93
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/0bbbc99980b89d9dfc7d77b782fd609c6abe4d93.md
- Latest main at intake: e71d7d48fb2805fadc643bd154a6005b0cd9ad75

## ClawSweeper Report

```md
---
sha: 0bbbc99980b89d9dfc7d77b782fd609c6abe4d93
parent: 20c7a98fb8b34bcc71caee029ff5d27ab82cc7a0
repository: openclaw/openclaw
author: "tmimmanuel"
committer: "GitHub"
github_author: tmimmanuel
github_committer: web-flow
co_authors: []
commit_authored_at: "2026-04-29T08:57:04+02:00"
commit_committed_at: "2026-04-29T01:57:04-05:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T07:00:53+00:00
---

# Commit 0bbbc999

## Summary

Found one queued-message lifecycle bug. The commit preserves queued items across a session switch, but if the original run finishes while the user is viewing another session, the restored queued item is never drained when the user comes back.

## Findings

### Medium: Restored queue can stay stuck after the active run finishes off-screen

- Kind: reliability
- File: `ui/src/ui/app-render.helpers.ts`
- Line: 107
- Evidence: `resetChatStateForSessionSwitch()` saves the previous session queue and restores it later, but `switchChatSession()` only reloads history/session options after restore and never drains an idle restored queue. Queue draining only happens from terminal chat-event handling via `flushChatQueueForEvent()` in `ui/src/ui/app-gateway.ts:551`, but `handleChatEvent()` returns `null` for events whose `payload.sessionKey` differs from the currently selected session in `ui/src/ui/controllers/chat.ts:717`. Therefore, if session A has queued message B, the user switches to session C, and A's run finishes while C is active, the terminal event is ignored for queue purposes. Returning to A restores B into `state.chatQueue`, but no terminal event remains to trigger `flushChatQueue()`.
- Impact: The issue fixed by this PR is only partially fixed. The linked issue expects the queued follow-up to remain visible and get processed after message A finishes; in this timing, the follow-up is visible again but sits in the UI queue indefinitely until some unrelated future run happens to trigger another drain.
- Suggested fix: Track enough per-session run state to know whether the saved queue is still waiting on an active run, or update terminal event handling to notice stored queues for `payload.sessionKey` and drain/mark them when that session becomes idle. Add a regression test where the queued session’s final chat event arrives while another session is selected, then switching back processes or explicitly resumes the saved queue.
- Confidence: high

## Reviewed

- Diff: `20c7a98fb8b34bcc71caee029ff5d27ab82cc7a0..0bbbc99980b89d9dfc7d77b782fd609c6abe4d93`
- Changed files: `ui/src/ui/app-render.helpers.node.test.ts`, `ui/src/ui/app-render.helpers.ts`, `ui/src/ui/app-render.ts`, `ui/src/ui/app-view-state.ts`, `ui/src/ui/app.ts`
- Code read: changed files, `ui/src/ui/app-chat.ts`, `ui/src/ui/app-gateway.ts`, `ui/src/ui/controllers/chat.ts`, `ui/src/ui/chat/chat-queue.ts`, `ui/src/ui/views/chat.ts`, `ui/src/ui/views/overview.ts`
- Issue/PR context: PR `#73679`, issue `#73621`
- Docs: `docs/web/control-ui.md`

## Tests / Live Checks

- `pnpm docs:list`: passed.
- `pnpm install`: needed because `node_modules` was missing.
- `pnpm test ui/src/ui/app-render.helpers.node.test.ts ui/src/ui/app-chat.test.ts -- --run`: passed selected helper shard, 47 tests.
- `node scripts/run-vitest.mjs run --config test/vitest/vitest.unit-ui.config.ts ui/src/ui/app-chat.test.ts --run`: passed, 26 tests.
- `git diff --check 20c7a98fb8b34bcc71caee029ff5d27ab82cc7a0..0bbbc99980b89d9dfc7d77b782fd609c6abe4d93 -- ...`: passed.

## Dependency / Web Checks

- No dependency changes.
- No external web facts needed.

## Limitations

- No live browser reproduction was run; finding is based on the direct source event path and focused tests.
```
