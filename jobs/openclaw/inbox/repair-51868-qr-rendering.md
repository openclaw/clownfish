---
repo: openclaw/openclaw
cluster_id: repair-51868-qr-rendering
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
  - #51868
candidates:
  - #51868
cluster_refs:
  - #51868
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: true
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-51868-qr-rendering
source: clawsweeper
---

# ClawSweeper-promoted fix PR candidate

ProjectClownfish should create or update one implementation PR from `clownfish/repair-51868-qr-rendering`.

## Operator Prompt

Repair #51868 only. Rehydrate the live PR and source diff. The source branch is uneditable and contains dirty unrelated drift, so create a narrow credited replacement only if the UTF-8 half-block QR rendering fix is still concrete and independently reproducible. Keep the replacement limited to the rendering defect; do not carry unrelated source changes. Do not merge, close, or mutate unrelated refs. Require focused OpenClaw-native validation and Codex review before opening a replacement PR.

## Related Refs

- #51868

## Likely Files

- unknown

## Validation

- choose the narrowest repo-native validation for the touched surface

## Guardrails

- Do not merge.
- Do not close issues before a fix PR is opened, landed, or explicitly proven unnecessary.
- Keep one PR for this cluster; reuse `clownfish/repair-51868-qr-rendering` if it already exists.
- Preserve contributor credit and add a changelog entry when the target repo expects one.
