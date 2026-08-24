---
repo: openclaw/openclaw
cluster_id: exact-merge-128732-cli-session-binding-20260824
mode: autonomous
expected_head_sha: def086c210b06c26900ddab27eb64a004fc9acd5
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
  - "#128732"
candidates:
  - "#128732"
cluster_refs:
  - "#128732"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
require_external_merge_preflight: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #128732 after deterministic validation and Codex review bind to exact head def086c210b06c26900ddab27eb64a004fc9acd5."
notes: "Maintainer authorized landing on 2026-08-24 at exact head def086c210b06c26900ddab27eb64a004fc9acd5. Exact-head ClawSweeper found no correctness or security issue, marked real-behavior proof sufficient, and required no maintainer product decision. Its pinned SDK rank-up was completed by direct inspection of @anthropic-ai/claude-agent-sdk 0.3.232. Hosted openclaw/ci-gate and all executed checks are green; native scripts/pr review artifacts and OPENCLAW_TESTBOX=1 prepare-run passed without changing the head. The resolved session-state risk was accepted at https://github.com/openclaw/openclaw/pull/128732#issuecomment-5401617727 and only that label was removed. Preserve SunnyShu0925 contributor credit through the native squash merge metadata. Re-fetch live state and stop if the head, checks, review, labels, or merge policy changes."
---

# Exact Merge: #128732

Hydrate live GitHub state for
https://github.com/openclaw/openclaw/pull/128732 and emit a blocked
`merge_candidate` with reason `external_merge_preflight_required`,
`expected_head_sha`, `target_updated_at`, and concrete evidence.

The executor must run the deterministic exact-head external merge preflight,
including focused validation of the CLI session invalidation owner, latest-store
recovery guard, auth-epoch identity boundary, AbortError behavior, failure-reason
matrix, and two-turn persisted-resume path plus Codex review. Apply only the
reviewed native squash merge action and preserve contributor credit. No comments,
labels, fixes, closures, refreshes, replacement PRs, bypasses, or adjacent work
are allowed.
