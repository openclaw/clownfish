---
repo: openclaw/openclaw
cluster_id: checks-success-preflight-20260623T0738-001
mode: autonomous
allowed_actions:
  - "merge"
  - "fix"
  - "raise_pr"
blocked_actions:
  - "comment"
  - "label"
  - "close"
  - "force_push"
  - "bypass_checks"
require_human_for:
  - "security_sensitive"
  - "unclear_canonical"
  - "broad_code_delta"
  - "active_author_followup"
canonical: []
candidates:
  - "#95899"
  - "#95824"
cluster_refs:
  - "#95899"
  - "#95824"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "This is a fresh PR external-preflight shard. Classify each PR independently. If the PR is otherwise merge-shaped but lacks deterministic exact-head validation and Codex review, emit a blocked merge_candidate with reason external_merge_preflight_required."
notes: "Generated from live checks-success PR inventory after the first checks-success wave merged three PRs. Filtered out maintainer, security, merge-risk, draft, status-blocked, and prior-known blocked candidates."
---

# Checks-Success PR External Preflight Shard 4

Hydrate live GitHub state for each listed PR and produce a current finalization path. Emit a planned merge only with complete merge preflight. If the only missing proof is deterministic exact-head validation and Codex `/review`, emit a blocked `merge_candidate` with reason `external_merge_preflight_required`, `expected_head_sha`, `target_updated_at`, and concrete evidence. The deterministic executor will run external merge preflight and guarded apply.

## Inventory

### #95899 [AI] fix(agents): recover from non-resumable assistant tail by re-presenting last user message

- bucket: checks_success_preflight
- live updated: 2026-06-23T06:59:06Z
- head at scan: f03c2a4cee862eca0a82fe8702b2ee5ffe659a87
- scan summary: mergeability UNKNOWN/UNKNOWN; GitHub search checks: success; labels: agents, size: S
- live url: https://github.com/openclaw/openclaw/pull/95899

### #95824 fix(deepinfra): use OpenAI video end point and tag DeepSeek thinking format

- bucket: checks_success_preflight
- live updated: 2026-06-23T04:40:12Z
- head at scan: 5a76badf160f289839b80162dcaf50c88a66050b
- scan summary: mergeability UNKNOWN/UNKNOWN; GitHub search checks: success; labels: size: M, extensions: deepinfra
- live url: https://github.com/openclaw/openclaw/pull/95824
