---
repo: openclaw/openclaw
cluster_id: serializer-canary-20260711T222432Z-003
mode: autonomous
expected_head_sha: fae5f6c2775784fbd28f3ea2b8dc87036f9d2c3b
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
  - "unclear_canonical"
  - "broad_code_delta"
  - "active_author_followup"
canonical:
  - "#104540"
candidates:
  - "#104540"
cluster_refs:
  - "#104540"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
require_external_merge_preflight: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #104540 after deterministic validation and Codex review bind to its exact live head."
notes: "Serializer canary prepared on 2026-07-11 at exact head fae5f6c2775784fbd28f3ea2b8dc87036f9d2c3b. The PR is open, non-draft, mergeable, proof-sufficient, diamond-rated, and touches only persisted tool-detail truncation code and its focused test. Re-fetch live state and stop if the head or merge policy changes."
---

# Serializer Canary 3: #104540

Hydrate live GitHub state for
https://github.com/openclaw/openclaw/pull/104540 and emit a blocked
`merge_candidate` with reason `external_merge_preflight_required`,
`expected_head_sha`, `target_updated_at`, and concrete evidence.

The executor must run the deterministic exact-head external merge preflight and
apply only the reviewed merge action. No comments, labels, fixes, closures, or
adjacent work are allowed.
