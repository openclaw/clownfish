---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-4cf228466770
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-4cf228466770
source: clawsweeper_commit
commit_sha: 4cf228466770c9358fb5e7507edaa4b7e7dacb02
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/4cf228466770c9358fb5e7507edaa4b7e7dacb02.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-4cf228466770`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/4cf228466770c9358fb5e7507edaa4b7e7dacb02
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/4cf228466770c9358fb5e7507edaa4b7e7dacb02.md
- Latest main at intake: be445dd1c12840b77055965dd7da1f659236f8f4

## ClawSweeper Report

```md
---
sha: 4cf228466770c9358fb5e7507edaa4b7e7dacb02
parent: ef08f59b9f39b8a87d0bf77f7f318554775e25ae
repository: openclaw/openclaw
author: "jesse-merhi"
committer: "jesse-merhi"
github_author: jesse-merhi
github_committer: jesse-merhi
co_authors: []
commit_authored_at: "2026-04-29T13:09:20+10:00"
commit_committed_at: "2026-04-29T13:51:42+10:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T04:02:53Z
---

# Commit 4cf2284

## Summary

Found one LINE webhook regression for configured paths with a trailing slash.

## Findings

### Medium: LINE webhook targets cannot be resolved when `webhookPath` ends with `/`

- Kind: regression
- File: `extensions/line/src/monitor.ts`
- Line: 321
- Evidence: `normalizedPath` is computed with `normalizePluginHttpPath`, which preserves a trailing slash. The target is then registered through `registerWebhookTargetWithPluginRoute`, whose target registration canonicalizes paths with `normalizeWebhookPath` and strips the trailing slash. The route handler later looks up `lineWebhookTargets.get(normalizedPath)` at line 343, so a configured path like `/line/webhook/` stores the target under `/line/webhook` but looks it up under `/line/webhook/`. That leaves `targets` empty, causing valid POSTs to fail signature target resolution and non-POST verification to return 404.
- Impact: existing LINE configs or webhook URLs that use a trailing slash can stop receiving webhooks after this commit, even with a valid LINE signature.
- Suggested fix: use one canonical path value for both registration and lookup, for example by normalizing with `normalizeWebhookPath` before registration or by using the `registered.target.path` returned from `registerWebhookTargetWithPluginRoute` in the handler closure.
- Confidence: high

## Reviewed

- Diff: `ef08f59b9f39b8a87d0bf77f7f318554775e25ae..4cf228466770c9358fb5e7507edaa4b7e7dacb02`
- Changed files: `extensions/line/src/monitor.ts`, `extensions/line/src/monitor.lifecycle.test.ts`, `extensions/zalo/src/monitor.ts`, `extensions/zalo/src/monitor.polling.media-reply.test.ts`
- Code read: LINE monitor, LINE webhook body/signature helpers, LINE bot handler entry, Zalo monitor, Zalo webhook target helper, Zalo outbound media hosting, SDK webhook target helpers, plugin HTTP registry/matching/path normalization
- Dependencies/web: no dependency changes; no external web lookup needed

## Tests / Live Checks

- `pnpm docs:list`
- `pnpm install`
- `pnpm test extensions/line/src/monitor.lifecycle.test.ts extensions/zalo/src/monitor.polling.media-reply.test.ts` passed
- Attempted an inline LINE route smoke for the trailing-slash case, but the ad hoc `tsx` harness hit unrelated module/export issues before reaching the route logic.

## Limitations

- No full suite or Testbox gate run; review used focused code tracing and targeted tests.
```
