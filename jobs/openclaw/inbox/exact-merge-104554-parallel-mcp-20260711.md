---
repo: openclaw/openclaw
cluster_id: exact-merge-104554-parallel-mcp-20260711
mode: autonomous
expected_head_sha: 0a1b721ae6a1a4eeffd21d0b31ad4969cb0f2d53
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
  - "#104554"
candidates:
  - "#104554"
cluster_refs:
  - "#104554"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
require_external_merge_preflight: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #104554 after deterministic validation and Codex review bind to its exact live head."
notes: "Qualified on 2026-07-11 at exact head 0a1b721ae6a1a4eeffd21d0b31ad4969cb0f2d53. The PR is open, non-draft, maintainer-editable, rebaseable, exact-head checks are clean, ClawSweeper reports sufficient proof, and the change is limited to the Parallel MCP runtime plus its focused test. Re-fetch live state and stop if the head or merge policy changes."
---

# Exact Merge: #104554

Hydrate live GitHub state for
https://github.com/openclaw/openclaw/pull/104554 and emit a blocked
`merge_candidate` with reason `external_merge_preflight_required`,
`expected_head_sha`, `target_updated_at`, and concrete evidence.

The executor must run the deterministic exact-head external merge preflight,
including focused validation of the two Parallel MCP files and Codex review,
then apply only the reviewed merge action. No comments, labels, fixes,
closures, refreshes, replacement PRs, or adjacent work are allowed.
