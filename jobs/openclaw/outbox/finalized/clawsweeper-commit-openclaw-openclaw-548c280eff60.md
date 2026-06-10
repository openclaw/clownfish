---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-548c280eff60
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-548c280eff60
source: clawsweeper_commit
commit_sha: 548c280eff60d1851473fdb455cfdc82dd552779
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/548c280eff60d1851473fdb455cfdc82dd552779.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-548c280eff60`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/548c280eff60d1851473fdb455cfdc82dd552779
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/548c280eff60d1851473fdb455cfdc82dd552779.md
- Latest main at intake: 4932e91517ad04797ae57283a602bd5c2ac92199

## ClawSweeper Report

```md
---
sha: 548c280eff60d1851473fdb455cfdc82dd552779
parent: 66b4324d41e1c44c1262acf521bc661dcf2a7a29
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T06:29:36+01:00"
commit_committed_at: "2026-04-29T06:29:44+01:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T05:35:10Z
---

# Commit 548c280

## Summary

Found one concrete regression: the commit expands the public Plugin SDK channel contract but does not update the generated API baseline hash, so the SDK API check fails.

## Findings

### Medium: Plugin SDK API baseline is stale after exporting `ChannelOutboundPayloadHint`

- Kind: regression
- File: `src/plugin-sdk/channel-contract.ts`
- Line: 41
- Evidence: the commit adds `ChannelOutboundPayloadHint` to the public `channel-contract` export surface, but does not update `docs/.generated/plugin-sdk-api-baseline.sha256`. Running `pnpm plugin-sdk:api:check` fails with `Plugin SDK API baseline drift detected` and `Hash mismatch: docs/.generated/plugin-sdk-api-baseline.sha256`.
- Impact: changed/API gates will fail for this main commit, and the recorded public Plugin SDK baseline no longer matches the shipped contract.
- Suggested fix: verify the new export is intentional, then run `pnpm plugin-sdk:api:gen` and commit the updated `docs/.generated/plugin-sdk-api-baseline.sha256`.
- Confidence: high

## Reviewed

- Diff: `66b4324d41e1c44c1262acf521bc661dcf2a7a29..548c280eff60d1851473fdb455cfdc82dd552779`
- Changed files: changelog/docs, Discord approval code, dispatch tests, native approval route coordinator, channel outbound types, plugin SDK channel contract.
- Code read: changed implementation files, coordinator tests, dispatch approval flow, Discord approval capability/runtime paths, gateway send path, approval filter/account helpers.
- GitHub context: inspected issue `#73954` and PR `#74027`.
- Docs: ran `pnpm docs:list`; read Discord and exec approval docs.

## Tests / Live Checks

- `pnpm install` because `node_modules` was missing.
- `pnpm test src/infra/approval-native-route-coordinator.test.ts src/agents/system-prompt.test.ts src/auto-reply/reply/dispatch-from-config.test.ts -- -t "native delivery reaches no targets|keeps approval slug guidance|local discord exec approval tool prompts"`: passed 3 Vitest shards.
- `git diff --check 66b4324d41e1c44c1262acf521bc661dcf2a7a29..548c280eff60d1851473fdb455cfdc82dd552779`: passed.
- `pnpm plugin-sdk:api:check`: failed with API baseline drift.

## Dependency / Web Checks

- No dependency changes in this commit.
- No external web lookup needed for the finding.

## Limitations

- No live Discord/Ollama approval roundtrip was run.
- Full `pnpm check` was not run; the focused Plugin SDK API check already exposed a gate failure.
```
