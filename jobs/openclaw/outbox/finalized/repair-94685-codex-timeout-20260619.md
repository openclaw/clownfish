---
repo: openclaw/openclaw
cluster_id: repair-94685-codex-timeout-20260619
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
  - #94685
candidates:
  - #94685
cluster_refs:
  - #94685
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: true
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-94685-codex-timeout-20260619
source: clawsweeper
---

# ClawSweeper-promoted fix PR candidate

ProjectClownfish should create or update one implementation PR from `clownfish/repair-94685-codex-timeout-20260619`.

## Operator Prompt

Treat #94685 as useful contributor work for the Codex app-server timeout lane.

Start by diagnosing the current failing `checks-node-core-tooling-docker` run
and separate a branch-caused regression from an unrelated or environment-only
failure. If the failure is relevant, safely update the existing contributor
branch: rebase narrowly onto current `main`, repair only the timeout cleanup
implementation or its regression coverage, run focused reproduction plus
`pnpm check:changed`, and address actionable review feedback. Do not broaden
scope. Preserve the contributor's authorship and credit.

If the failing check is unrelated or cannot be reproduced from the current
head, do not change source files or open a replacement. Record the exact
blocker and leave the PR open. Do not merge or close anything.

## Related Refs

- #94685

## Likely Files

- unknown

## Validation

- choose the narrowest repo-native validation for the touched surface

## Guardrails

- Do not merge.
- Do not close issues before a fix PR is opened, landed, or explicitly proven unnecessary.
- Keep one PR for this cluster; reuse `clownfish/repair-94685-codex-timeout-20260619` if it already exists.
- Preserve contributor credit and add a changelog entry when the target repo expects one.
