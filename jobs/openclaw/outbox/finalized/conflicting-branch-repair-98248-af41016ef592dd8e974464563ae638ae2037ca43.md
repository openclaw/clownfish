---
repo: openclaw/openclaw
cluster_id: conflicting-branch-repair-98248-af41016ef592dd8e974464563ae638ae2037ca43
mode: autonomous
allowed_actions:
  - "fix"
  - "raise_pr"
  - "force_push"
blocked_actions:
  - "bypass_checks"
  - "comment"
  - "label"
  - "close"
  - "merge"
require_human_for:
  - "security_sensitive"
  - "failing_checks"
  - "unresolved_review_threads"
  - "broad_code_delta"
maintainer_calibration:
  - "Rebase the current maintainer-editable contributor branch onto current main, validate it, and run Codex /review. Preserve the existing contributor change and do not broaden the PR."
canonical:
  - "#98248"
candidates:
  - "#98248"
cluster_refs:
  - "#98248"
expected_head_shas:
  - "#98248=af41016ef592dd8e974464563ae638ae2037ca43"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
repair_strategy: repair_contributor_branch
rebase_only: true
security_policy: central_security_only
security_sensitive: false
canonical_hint: "#98248 is the sole canonical PR. Repair its maintainer-editable contributor branch against current main before any separate exact-head merge finalization."
notes: "Generated from live GitHub conflicting branch repair intake; profile=rebase_only; exact reviewed head=af41016ef592dd8e974464563ae638ae2037ca43. Do not merge, close, label, comment, create a replacement PR, or expand scope."
---

# Conflicting branch repair: #98248

Re-hydrate #98248 and emit `fix_needed` plus a complete `build_fix_artifact` using `repair_strategy: repair_contributor_branch`.

Rebase the existing maintainer-editable contributor branch onto current main. Preserve the current implementation, resolve only rebase conflicts, run changed-surface validation and Codex `/review`, then push the repaired contributor branch.

Do not merge, close, label, comment, create a replacement PR, or broaden the PR.

## Inventory

### #98248 fix: Codex catalog honors app-server context caps

- bucket: conflicting_branch_repair
- repair profile: rebase_only
- author: hannesrudolph
- author association: unknown
- draft: no
- assignees: none
- labels: docs, maintainer, size: S, extensions: codex, P2, rating: platinum hermit, merge-risk: compatibility, status: ready for maintainer look
- live updated: 2026-07-02T06:22:23Z
- live url: https://github.com/openclaw/openclaw/pull/98248
