---
repo: openclaw/openclaw
cluster_id: exact-merge-128034-ollama-local-service-20260823
mode: autonomous
expected_head_sha: 22327a53cab44a1be2d71a30b38a62473e08793e
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
  - "#128034"
candidates:
  - "#128034"
cluster_refs:
  - "#128034"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
require_external_merge_preflight: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #128034 after deterministic validation and Codex review bind to its exact live head."
notes: "Maintainer authorized landing on 2026-08-23 at exact head 22327a53cab44a1be2d71a30b38a62473e08793e. Exact-head ClawSweeper reported no findings; its sole rank-up was successful exact-head CI, now satisfied. The compatibility behavior was acknowledged, hosted openclaw/ci-gate passed with no pending or failing checks, native scripts/pr review artifacts validated, and native OPENCLAW_TESTBOX=1 prepare-run passed without changing the head. Re-fetch live state and stop if the head or merge policy changes."
---

# Exact Merge: #128034

Hydrate live GitHub state for
https://github.com/openclaw/openclaw/pull/128034 and emit a blocked
`merge_candidate` with reason `external_merge_preflight_required`,
`expected_head_sha`, `target_updated_at`, and concrete evidence.

The executor must run the deterministic exact-head external merge preflight,
including focused validation of the Ollama local-service acquisition, timeout,
alias-preservation, NDJSON lease-lifetime, cleanup, and no-service paths plus
Codex review, then apply only the reviewed squash merge action. No comments,
labels, fixes, closures, refreshes, replacement PRs, or adjacent work are
allowed.
