---
repo: openclaw/openclaw
cluster_id: repair-openclaw-62338-20260706
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
  - #62338
candidates:
  - #62338
cluster_refs:
  - #62338
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: codex/doctor-fts5-warning
source: planner_promotion
---

# ClawSweeper-promoted fix PR candidate

ProjectClownfish should repair the existing contributor PR branch
`codex/doctor-fts5-warning`.

## Operator Prompt

Repair the existing editable contributor PR #62338 against current main. Preserve contributor authorship. Semantically port only the still-missing FTS5 doctor diagnostic: drop the release-owned changelog edit, keep the canonical issue related rather than closing it, add optional validated fts data while preserving current agent/Dreaming and QMD behavior, keep gateway probe types private with skipped optional, emit the warning through current noteFn after the QMD exit, and warn only when enabled=true and available=false with trimmed optional errors. Add forwarding, unavailable, disabled, available, malformed-payload, and supported-Node runtime proof. Run the two focused doctor suites, check:changed when available, diff check, autoreview, and refresh required PR-body evidence. Stop with needs_human if the current memory contract changed or the patch exceeds six files. Do not merge, close, label, or comment.

## Related Refs

- #62338

## Likely Files

- unknown

## Validation

- choose the narrowest repo-native validation for the touched surface

## Guardrails

- Do not merge.
- Do not close issues before a fix PR is opened, landed, or explicitly proven unnecessary.
- Keep one PR for this cluster; repair #62338 instead of opening a replacement when the contributor branch remains editable.
- Preserve contributor credit and add a changelog entry when the target repo expects one.
