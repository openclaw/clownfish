---
repo: openclaw/openclaw
cluster_id: repair-93222-discord-timeout
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
  - #93222
candidates:
  - #93222
cluster_refs:
  - #93222
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: true
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-93222-discord-timeout
source: clawsweeper
---

# ClawSweeper-promoted fix PR candidate

ProjectClownfish should create or update one implementation PR from `clownfish/repair-93222-discord-timeout`.

## Operator Prompt

Repair #93222 only. Rehydrate the live PR and review threads, then address the concrete review-bot finding in the configurable Discord REST API timeout change with the narrowest maintainer-editable patch. Preserve contributor credit and existing intent. Do not broaden configuration semantics, merge, close, or mutate any unrelated ref. Run the narrowest OpenClaw-native validation and Codex review before opening or updating a repair PR.

## Related Refs

- #93222

## Likely Files

- unknown

## Validation

- choose the narrowest repo-native validation for the touched surface

## Guardrails

- Do not merge.
- Do not close issues before a fix PR is opened, landed, or explicitly proven unnecessary.
- Keep one PR for this cluster; reuse `clownfish/repair-93222-discord-timeout` if it already exists.
- Preserve contributor credit and add a changelog entry when the target repo expects one.
