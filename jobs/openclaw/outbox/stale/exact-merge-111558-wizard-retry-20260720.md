---
repo: openclaw/openclaw
cluster_id: exact-merge-111558-wizard-retry-20260720
mode: autonomous
expected_head_sha: f8bbec4367bd06a49760c4cf9a0e73686ed1aa84
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
  - "#111558"
candidates:
  - "#111558"
cluster_refs:
  - "#111558"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
require_external_merge_preflight: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #111558 after deterministic validation and Codex review bind to its exact live head."
notes: "Qualified on 2026-07-20 at exact head f8bbec4367bd06a49760c4cf9a0e73686ed1aa84. The PR is open, non-draft, mergeable, and prepared through the repository-native scripts/pr flow. Exact-head CI run 29710820062 attempt 2 passed, including openclaw/ci-gate. Focused wizard, provider-auth, and setup-inference tests passed; pnpm tsgo, targeted format and oxlint, git diff --check, and fresh branch autoreview were clean. The change keeps rejected wizard retry credentials unpersisted and commits a valid retry only after the same live validation gate. The maintainer explicitly accepted the documented real-provider transcript gap based on temporary SQLite state-transition coverage. Re-fetch live state and stop if the head, checks, review state, or merge policy changes."
---

# Exact Merge: #111558

Hydrate live GitHub state for
https://github.com/openclaw/openclaw/pull/111558 and emit a blocked
`merge_candidate` with reason `external_merge_preflight_required`,
`expected_head_sha`, `target_updated_at`, and concrete evidence.

The executor must run the deterministic exact-head external merge preflight,
including focused validation of the classic setup wizard auth-retry files and
Codex review, then apply only the reviewed merge action. No comments, labels,
fixes, closures, refreshes, replacement PRs, or adjacent work are allowed.
