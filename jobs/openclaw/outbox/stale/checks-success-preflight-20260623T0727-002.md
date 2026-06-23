---
repo: openclaw/openclaw
cluster_id: checks-success-preflight-20260623T0727-002
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
  - "#95860"
  - "#95782"
cluster_refs:
  - "#95860"
  - "#95782"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "This is a fresh PR external-preflight shard. Classify each PR independently. If the PR is otherwise merge-shaped but lacks deterministic exact-head validation and Codex review, emit a blocked merge_candidate with reason external_merge_preflight_required."
notes: "Generated from live checks-success PR inventory on 2026-06-23T07:27:29Z after filtering out maintainer, security, merge-risk, draft, and status-blocked candidates."
---

# Checks-Success PR External Preflight Shard 2

Hydrate live GitHub state for each listed PR and produce a current finalization path. Emit a planned merge only with complete merge preflight. If the only missing proof is deterministic exact-head validation and Codex `/review`, emit a blocked `merge_candidate` with reason `external_merge_preflight_required`, `expected_head_sha`, `target_updated_at`, and concrete evidence. The deterministic executor will run external merge preflight and guarded apply.

## Inventory

### #95860 fix(compaction): trim prefix when transcript ends in an oversized tool result

- bucket: checks_success_preflight
- live updated: 2026-06-22T23:46:08Z
- head at scan: f154ea7947f21700e5869c86899304fc1a68e5a4
- scan summary: mergeability UNKNOWN/UNKNOWN; GitHub search checks: success; labels: size: S
- live url: https://github.com/openclaw/openclaw/pull/95860

### #95782 fix(sessions): honor configured store for outbound transcript mirrors

- bucket: checks_success_preflight
- live updated: 2026-06-23T03:10:30Z
- head at scan: 45e478c2a5ae99ae0d95d4fd1e50d56ee78d6bb9
- scan summary: mergeability UNKNOWN/UNKNOWN; GitHub search checks: success; labels: size: S
- live url: https://github.com/openclaw/openclaw/pull/95782
