---
repo: openclaw/openclaw
cluster_id: repair-openclaw-83630-20260706
mode: autonomous
allowed_actions:
  - fix
  - raise_pr
blocked_actions:
  - comment
  - label
  - close
  - merge
  - force_push
  - bypass_checks
require_human_for:
  - merge
canonical:
  - #83630
candidates:
  - #83630
cluster_refs:
  - #83630
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: fix/doctor-missing-transcript-preview
source: planner_promotion
---

# ClawSweeper-promoted fix PR candidate

ProjectClownfish should repair the existing contributor PR branch
`fix/doctor-missing-transcript-preview`.

## Operator Prompt

Repair the existing contributor PR #83630 on its editable branch. Re-fetch current main and the live PR head first. Preserve contributor authorship. Rebase narrowly, retain the intended --fix-missing doctor dry-run preview correction, add or update focused state-integrity coverage, and add current real CLI proof plus the required PR-body evidence sections. Do not broaden scope. If current main already supersedes the fix, the conflict is not mechanical, or proof cannot be produced without privileged state, stop with needs_human instead of opening replacement work. Do not merge.

## Related Refs

- #83630

## Likely Files

- unknown

## Validation

- choose the narrowest repo-native validation for the touched surface

## Guardrails

- Do not merge.
- Do not close issues before a fix PR is opened, landed, or explicitly proven unnecessary.
- Keep one PR for this cluster; repair #83630 instead of opening a replacement when the contributor branch remains editable.
- Preserve contributor credit and add a changelog entry when the target repo expects one.
