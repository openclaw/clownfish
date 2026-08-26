---
repo: openclaw/openclaw
cluster_id: exact-merge-130108-duplicate-attachment-lifecycle-20260826
mode: autonomous
expected_head_sha: cdb652131d1d507cd2e0c727e6a2ad7a489ce420
allowed_actions:
  - "merge"
blocked_actions:
  - "comment"
  - "label"
  - "close"
  - "fix"
  - "raise_pr"
  - "force_push"
  - "bypass_checks"
require_human_for:
  - "security_sensitive"
  - "unresolved_review"
  - "unclear_canonical"
  - "broad_code_delta"
  - "active_author_followup"
canonical:
  - "#130108"
candidates:
  - "#130108"
cluster_refs:
  - "#130108"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
require_external_merge_preflight: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #130108 at exact head cdb652131d1d507cd2e0c727e6a2ad7a489ce420 after deterministic current-main synthetic exact merge and effective-diff reconstruction plus pinned Codex review."
notes: "Maintainer authorized merge-only execution on 2026-08-26 at exact head cdb652131d1d507cd2e0c727e6a2ad7a489ce420. Live evidence records one test file with a +0/-108 deletion-only delta, exact-head CI green with 78 checks and no attention, and a durable exact-head ClawSweeper review with no findings or security issue. Authorization is limited to deterministic current-main synthetic exact merge validation, effective-diff reconstruction, pinned Codex review, and the resulting exact reviewed merge. Branch repair, rebase, refresh, comments, labels, replacement PRs, closure, and adjacent work are prohibited. Stop if the head, policy, or material effective diff changes."
---

# Exact Merge: #130108

Hydrate live GitHub state for
https://github.com/openclaw/openclaw/pull/130108 and emit a blocked
`merge_candidate` with reason `external_merge_preflight_required`,
`expected_head_sha`, `target_updated_at`, and concrete evidence.

The executor must re-fetch current `main` and exact head
`cdb652131d1d507cd2e0c727e6a2ad7a489ce420`, construct the deterministic
synthetic exact merge, and reconstruct the effective diff against current `main`.
That effective diff must remain a one-file test-only deletion with +0/-108
lines and no production, helper, workflow, dependency, or adjacent change.
The pinned Codex review and focused validation must pass on that exact
synthetic result before applying only the reviewed merge action.

No branch repair, rebase, refresh, comments, labels, fixes, replacement PRs,
closures, force pushes, check bypasses, or adjacent work are allowed. Stop
without mutation if the head, policy, or material effective diff changes.
