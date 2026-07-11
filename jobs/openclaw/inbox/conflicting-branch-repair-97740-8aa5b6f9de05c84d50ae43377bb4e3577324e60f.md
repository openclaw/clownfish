---
repo: openclaw/openclaw
cluster_id: conflicting-branch-repair-97740-8aa5b6f9de05c84d50ae43377bb4e3577324e60f
mode: autonomous
allowed_actions:
  - "fix"
  - "raise_pr"
blocked_actions:
  - "force_push"
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
  - "Repair the exact-current-head actionable ClawSweeper finding on the maintainer-editable contributor branch, rebase it onto current main, validate it, and run Codex /review without broadening the PR."
canonical:
  - "#97740"
candidates:
  - "#97740"
cluster_refs:
  - "#97740"
expected_head_shas:
  - "#97740=8aa5b6f9de05c84d50ae43377bb4e3577324e60f"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
repair_strategy: repair_contributor_branch
security_policy: central_security_only
security_sensitive: false
canonical_hint: "#97740 is the sole canonical PR. Repair its maintainer-editable contributor branch against current main before any separate exact-head merge finalization."
notes: "Generated from live GitHub conflicting branch repair intake; profile=review_fix; exact reviewed head=8aa5b6f9de05c84d50ae43377bb4e3577324e60f. Do not merge, close, label, comment, create a replacement PR, or expand scope."
---

# Conflicting branch repair: #97740

Re-hydrate #97740 and emit `fix_needed` plus a complete `build_fix_artifact` using `repair_strategy: repair_contributor_branch`.

Address the exact-current-head actionable ClawSweeper finding on the existing maintainer-editable contributor branch. Keep the repair bounded to that finding, rebase onto current main, run changed-surface validation and Codex `/review`, then push the repaired contributor branch.

Do not merge, close, label, comment, create a replacement PR, or broaden the PR.

## Inventory

### #97740 fix(exec-approval): stop misattributing Allow Always unavailability to policy

- bucket: conflicting_branch_repair
- repair profile: review_fix
- author: saju01
- author association: unknown
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: S, proof: sufficient, mantis: telegram-visible-proof, P2, rating: gold shrimp, status: waiting on author, proof: screenshot, merge-risk: other
- live updated: 2026-06-29T11:27:34Z
- live url: https://github.com/openclaw/openclaw/pull/97740
