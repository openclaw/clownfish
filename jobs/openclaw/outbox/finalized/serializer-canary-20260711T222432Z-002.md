---
repo: openclaw/openclaw
cluster_id: serializer-canary-20260711T222432Z-002
mode: autonomous
expected_head_sha: 527b9e1314fa41963128b78b8b1982f6197e20a4
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
  - "#104487"
candidates:
  - "#104487"
cluster_refs:
  - "#104487"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
require_external_merge_preflight: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #104487 after deterministic validation and Codex review bind to its exact live head."
notes: "Serializer canary refreshed on 2026-07-11 at exact head 527b9e1314fa41963128b78b8b1982f6197e20a4 after a maintainer tightened the focused regression coverage. The PR is open, non-draft, mergeable, proof-sufficient, diamond-rated, and still touches only failover detail truncation code and its focused test. Re-fetch live state and stop if the head or merge policy changes."
---

# Serializer Canary 2: #104487

Hydrate live GitHub state for
https://github.com/openclaw/openclaw/pull/104487 and emit a blocked
`merge_candidate` with reason `external_merge_preflight_required`,
`expected_head_sha`, `target_updated_at`, and concrete evidence.

The executor must run the deterministic exact-head external merge preflight and
apply only the reviewed merge action. No comments, labels, fixes, closures, or
adjacent work are allowed.
