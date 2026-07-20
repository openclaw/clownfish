---
repo: openclaw/openclaw
cluster_id: exact-merge-111571-model-validation-20260719
mode: autonomous
expected_head_sha: 698c4b0ee5858a9ab9a7338a4b961d5c6e4b9b77
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
  - "#111571"
candidates:
  - "#111571"
cluster_refs:
  - "#111571"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
require_external_merge_preflight: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #111571 after deterministic validation and Codex review bind to its exact live head."
notes: "Qualified on 2026-07-19 at exact head 698c4b0ee5858a9ab9a7338a4b961d5c6e4b9b77. The PR is open, non-draft, mergeable, and prepared through the repository-native scripts/pr flow. Exact-head CI run 29710937376 passed all 137 jobs, including openclaw/ci-gate. Fresh branch autoreview reported no accepted or actionable findings. The change validates changed default and per-agent text-model primaries and fallbacks before config persistence and preserves authored environment placeholders. Re-fetch live state and stop if the head, checks, review state, or merge policy changes."
---

# Exact Merge: #111571

Hydrate live GitHub state for
https://github.com/openclaw/openclaw/pull/111571 and emit a blocked
`merge_candidate` with reason `external_merge_preflight_required`,
`expected_head_sha`, `target_updated_at`, and concrete evidence.

The executor must run the deterministic exact-head external merge preflight,
including focused validation of the config CLI model-validation files and Codex
review, then apply only the reviewed merge action. No comments, labels, fixes,
closures, refreshes, replacement PRs, or adjacent work are allowed.
