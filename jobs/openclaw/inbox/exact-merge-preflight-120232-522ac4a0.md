---
repo: openclaw/openclaw
cluster_id: exact-merge-preflight-120232-522ac4a03828
mode: autonomous
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
  - "failing_checks"
  - "unresolved_review_threads"
  - "broad_code_delta"
canonical:
  - "#120232"
candidates:
  - "#120232"
cluster_refs:
  - "#120232"
expected_head_shas:
  - "#120232=522ac4a03828a827c5c266194459d995b9982ff9"
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
require_external_merge_preflight: true
allow_post_merge_close: false
require_fix_before_close: false
security_policy: central_security_only
security_sensitive: false
canonical_hint: "Run the deterministic read-only external merge preflight for exact PR head 522ac4a03828a827c5c266194459d995b9982ff9."
notes: "Operator-requested exact-merge gate proof for #120232. The workflow must run with apply=false and must not mutate or merge the target PR."
---

# Exact merge preflight: #120232

Validate the exact PR head against current `openclaw/openclaw` main through the
repo-native external merge preflight. Do not apply or merge.
