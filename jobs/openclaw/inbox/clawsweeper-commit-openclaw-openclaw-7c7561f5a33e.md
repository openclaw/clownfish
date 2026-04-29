---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-7c7561f5a33e
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-7c7561f5a33e
source: clawsweeper_commit
commit_sha: 7c7561f5a33e45080f791cd22c1be32374bca531
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/7c7561f5a33e45080f791cd22c1be32374bca531.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-7c7561f5a33e`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/7c7561f5a33e45080f791cd22c1be32374bca531
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/7c7561f5a33e45080f791cd22c1be32374bca531.md
- Latest main at intake: 450607847b7b5c9f6ce848c72afbeb571c41e10c

## ClawSweeper Report

```md
---
sha: 7c7561f5a33e45080f791cd22c1be32374bca531
parent: 2f04731a48ec99f052356e47bea7a4642a295673
repository: openclaw/openclaw
author: "Vincent Koc"
committer: "Vincent Koc"
github_author: vincentkoc
github_committer: vincentkoc
co_authors: []
commit_authored_at: "2026-04-28T22:19:07-07:00"
commit_committed_at: "2026-04-28T22:19:34-07:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T05:23:12Z
---

# Commit 7c7561f5a3

## Summary

Found one regression in the new scoped fallback load: configured workspace/external capability plugins are excluded because the scope is derived only from bundled manifest owners.

## Findings

### Medium: Cold capability resolution now drops configured non-bundled providers

- Kind: regression
- File: `src/plugins/capability-provider-runtime.ts`
- Line: 272
- Evidence: `resolveBundledCapabilityCompatPluginIds` only returns plugins where `plugin.origin === "bundled"` (`src/plugins/capability-provider-runtime.ts:58`). The new fallback then always passes `onlyPluginIds: pluginIds` into `resolveRuntimePluginRegistry` (`src/plugins/capability-provider-runtime.ts:272`), so when `pluginIds` is empty for a configured workspace/external provider, the loader gets an explicit empty scope and loads no plugins. I verified this with a temp native plugin configured through `plugins.load.paths`, `allow`, and `entries`, with `contracts.imageGenerationProviders: ["external-image"]` and `api.registerImageGenerationProvider(...)`: direct unscoped `resolveRuntimePluginRegistry({ config, activate: false })` returned `["external-image"]`, while `resolvePluginCapabilityProviders({ key: "imageGenerationProviders", cfg: config })` returned `[]`.
- Impact: cold provider registry paths can no longer discover configured third-party/native capability providers before an active runtime registry exists. This affects public capability surfaces such as image/video/music/media/speech/realtime providers, despite the plugin architecture docs describing capabilities as the public native plugin model and allowing native capability discovery snapshots.
- Suggested fix: build the scoped load from all manifest owners relevant to the current config, not only bundled compat owners, or omit `onlyPluginIds` when `cfg` explicitly configures non-bundled capability plugins. Keep the bundled narrowing, but include configured workspace/installed owners with matching capability contracts.
- Confidence: high

## Reviewed

- Diff: `2f04731a48ec99f052356e47bea7a4642a295673..7c7561f5a33e45080f791cd22c1be32374bca531`
- Changed files: `src/plugins/capability-provider-runtime.ts`, `src/plugins/capability-provider-runtime.test.ts`
- Code read: changed files in full, loader `onlyPluginIds` handling, plugin scope helpers, bundled compat helpers, provider registry callers, plugin architecture docs.
- Dependencies/web: no external dependency or web checks needed; this is internal loader/runtime behavior.

## Tests / Live Checks

- `pnpm docs:list`
- `pnpm install` because `node_modules` was missing
- `pnpm test src/plugins/capability-provider-runtime.test.ts` passed: 19 tests
- Ad-hoc temp plugin smoke reproduced the regression described above.

## Limitations

- Did not run full `pnpm check:changed`; focused review and targeted tests were sufficient for the touched surface and concrete regression.
```
