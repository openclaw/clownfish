---
repo: openclaw/openclaw
cluster_id: conflicting-branch-repair-100932-22b6ff600f1a8aa3c83000bb4b8836e5e4bc26a2
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
  - "#100932"
candidates:
  - "#100932"
cluster_refs:
  - "#100932"
expected_head_shas:
  - "#100932=22b6ff600f1a8aa3c83000bb4b8836e5e4bc26a2"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
repair_strategy: repair_contributor_branch
rebase_only: true
security_policy: central_security_only
security_sensitive: false
canonical_hint: "#100932 is the sole canonical PR. Repair its maintainer-editable contributor branch against current main before any separate exact-head merge finalization."
notes: "Generated from live GitHub conflicting branch repair intake; profile=rebase_only; exact reviewed head=22b6ff600f1a8aa3c83000bb4b8836e5e4bc26a2. Do not merge, close, label, comment, create a replacement PR, or expand scope."
---

# Conflicting branch repair: #100932

Re-hydrate #100932 and emit `fix_needed` plus a complete `build_fix_artifact` using `repair_strategy: repair_contributor_branch`.

Rebase the existing maintainer-editable contributor branch onto current main. Preserve the current implementation, resolve only rebase conflicts, run changed-surface validation and Codex `/review`, then push the repaired contributor branch.

Do not merge, close, label, comment, create a replacement PR, or broaden the PR.

## Inventory

### #100932 chore(ui): add mock chat fixtures for design QA

- bucket: conflicting_branch_repair
- repair profile: rebase_only
- author: vyctorbrzezowski
- author association: unknown
- draft: no
- assignees: none
- labels: scripts, maintainer, size: M, clawsweeper:automerge, clawsweeper:human-review, proof: sufficient, P3, rating: platinum hermit, status: automerge armed, proof: screenshot
- live updated: 2026-07-07T12:48:26Z
- live url: https://github.com/openclaw/openclaw/pull/100932
