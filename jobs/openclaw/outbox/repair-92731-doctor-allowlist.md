---
repo: openclaw/openclaw
cluster_id: repair-92731-doctor-allowlist
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
  - #92731
candidates:
  - #92731
cluster_refs:
  - #92731
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: true
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-92731-doctor-allowlist
source: clawsweeper
---

# ClawSweeper-promoted fix PR candidate

ProjectClownfish should create or update one implementation PR from `clownfish/repair-92731-doctor-allowlist`.

## Operator Prompt

Repair #92731 only. Rehydrate the live PR and review threads, then address concrete review findings in the doctor group-allowlist false-positive fix with the narrowest maintainer-editable patch. Preserve the reported sub-account behavior and contributor credit. Do not broaden allowlist policy, merge, close, or mutate unrelated refs. Require focused OpenClaw-native validation and Codex review before updating a repair PR.

## Related Refs

- #92731

## Likely Files

- unknown

## Validation

- choose the narrowest repo-native validation for the touched surface

## Guardrails

- Do not merge.
- Do not close issues before a fix PR is opened, landed, or explicitly proven unnecessary.
- Keep one PR for this cluster; reuse `clownfish/repair-92731-doctor-allowlist` if it already exists.
- Preserve contributor credit and add a changelog entry when the target repo expects one.
