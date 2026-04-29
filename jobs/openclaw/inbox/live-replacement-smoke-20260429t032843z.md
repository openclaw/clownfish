---
repo: openclaw/openclaw
cluster_id: live-replacement-smoke-20260429t032843z
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
  - #74037
candidates:
  - #74037
cluster_refs:
  - #74037
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: true
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/live-replacement-smoke-20260429t032843z
source: clawsweeper
---

# ClawSweeper-promoted fix PR candidate

ProjectClownfish should create or update one implementation PR from `clownfish/live-replacement-smoke-20260429t032843z`.

## Operator Prompt

Live replacement smoke for source PR #74037.

Treat #74037 as useful source work, but do not repair or push to the source branch. Always create a narrow Clownfish replacement PR instead. The source PR intentionally added docs/clownfish-replacement-smoke.md with the typo `replacment`; the replacement PR should add the same smoke note but correct the typo to `replacement` and keep the smoke id 20260429T032843Z.

The worker must emit a fix artifact with repair_strategy=replace_uneditable_branch and source_prs containing https://github.com/openclaw/openclaw/pull/74037. Preserve the source PR author as co-author, credit the source PR in the replacement PR body, and close only source PR #74037 after the replacement PR is opened. Do not merge anything.

## Related Refs

- #74037

## Likely Files

- unknown

## Validation

- choose the narrowest repo-native validation for the touched surface

## Guardrails

- Do not merge.
- Do not close issues before a fix PR is opened, landed, or explicitly proven unnecessary.
- Keep one PR for this cluster; reuse `clownfish/live-replacement-smoke-20260429t032843z` if it already exists.
- Preserve contributor credit and add a changelog entry when the target repo expects one.
