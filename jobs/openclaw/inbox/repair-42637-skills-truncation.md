---
repo: openclaw/openclaw
cluster_id: repair-42637-skills-truncation
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
  - #42637
candidates:
  - #42637
cluster_refs:
  - #42637
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: true
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-42637-skills-truncation
source: clawsweeper
---

# ClawSweeper-promoted fix PR candidate

ProjectClownfish should create or update one implementation PR from `clownfish/repair-42637-skills-truncation`.

## Operator Prompt

Repair #42637 only. Rehydrate the live PR and complete review threads, then make the narrowest safe repair for listing omitted skill names when the prompt is truncated. Resolve only concrete review-bot findings, preserve contributor intent and credit, and avoid expanding prompt or skills behavior beyond the defect. Do not merge, close, or mutate unrelated refs. Require focused OpenClaw-native validation and Codex review before updating a repair PR.

## Related Refs

- #42637

## Likely Files

- unknown

## Validation

- choose the narrowest repo-native validation for the touched surface

## Guardrails

- Do not merge.
- Do not close issues before a fix PR is opened, landed, or explicitly proven unnecessary.
- Keep one PR for this cluster; reuse `clownfish/repair-42637-skills-truncation` if it already exists.
- Preserve contributor credit and add a changelog entry when the target repo expects one.
