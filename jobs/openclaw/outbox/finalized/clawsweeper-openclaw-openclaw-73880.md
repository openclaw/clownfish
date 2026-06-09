---
repo: openclaw/openclaw
cluster_id: clawsweeper-openclaw-openclaw-73880
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - fix
  - raise_pr
blocked_actions:
  - merge
require_human_for:
  - merge
canonical:
  - #73880
candidates:
  - #73880
cluster_refs:
  - #73880
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_post_merge_close: true
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/clawsweeper-openclaw-openclaw-73880
source: clawsweeper
---

# ClawSweeper-promoted fix PR candidate

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-openclaw-openclaw-73880`.

## Operator Prompt

Fix openclaw/openclaw#73880 with one narrow implementation PR.

Problem: `openclaw update --channel stable --yes --no-restart --json` can succeed at updating the core package but still exit 1 because post-update plugin sync tries to update a tracked ClawHub plugin that is explicitly disabled in config, then treats a transient ClawHub 429 as a fatal `post-update-plugins` failure. Disabled tracked plugins should be no-op for post-update sync.

Expected behavior:
- Before ClawHub/npm/marketplace network calls in post-update plugin sync, determine the effective enabled state for each tracked install.
- Explicitly disabled tracked plugins must be skipped, or reported as non-fatal skipped/warning results, so they do not make a successful core update fail.
- Preserve fail-closed behavior for enabled plugin update failures, integrity drift, and real install/update failures.
- Preserve disabled-but-configured install metadata and package-id migration behavior; do not delete disabled installs or lose config.

Likely files:
- src/cli/update-cli/update-command.ts
- src/plugins/update.ts
- src/plugins/update.test.ts
- docs/cli/update.md only if user-facing failure policy text changes

Validation:
- Add regression coverage for a disabled ClawHub install record that would otherwise hit a ClawHub 429/error and prove post-update sync treats it as skipped/non-fatal.
- Add/keep coverage that enabled plugin update failures remain fatal.
- Run the narrow plugin/update test lane and `pnpm check:changed` if available.

Keep the PR small. Do not change general update failure policy beyond explicitly disabled tracked plugins. Add a changelog entry if the target repo expects one.

## Related Refs

- #73880

## Likely Files

- unknown

## Validation

- choose the narrowest repo-native validation for the touched surface

## Guardrails

- Do not merge.
- Do not close issues before a fix PR is opened, landed, or explicitly proven unnecessary.
- Keep one PR for this cluster; reuse `clownfish/clawsweeper-openclaw-openclaw-73880` if it already exists.
- Preserve contributor credit and add a changelog entry when the target repo expects one.
