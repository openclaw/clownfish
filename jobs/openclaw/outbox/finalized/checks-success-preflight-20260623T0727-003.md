---
repo: openclaw/openclaw
cluster_id: checks-success-preflight-20260623T0727-003
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
  - "#95774"
  - "#95926"
cluster_refs:
  - "#95774"
  - "#95926"
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

# Checks-Success PR External Preflight Shard 3

Hydrate live GitHub state for each listed PR and produce a current finalization path. Emit a planned merge only with complete merge preflight. If the only missing proof is deterministic exact-head validation and Codex `/review`, emit a blocked `merge_candidate` with reason `external_merge_preflight_required`, `expected_head_sha`, `target_updated_at`, and concrete evidence. The deterministic executor will run external merge preflight and guarded apply.

## Inventory

### #95774 fix(telegram): sanitize outbound tool traces

- bucket: checks_success_preflight
- live updated: 2026-06-23T01:05:53Z
- head at scan: f85bb708b66e0aeefd634de8296b73410244638f
- scan summary: mergeability UNKNOWN/UNKNOWN; GitHub search checks: success; labels: channel: telegram, size: XS
- live url: https://github.com/openclaw/openclaw/pull/95774

### #95926 fix(media-understanding): append actionable install hint when a media provider is missing (#95658)

- bucket: checks_success_preflight
- live updated: 2026-06-23T07:04:40Z
- head at scan: 59252272836f3481423c84b27361995f40218a33
- scan summary: mergeability UNKNOWN/UNKNOWN; GitHub search checks: success; labels: scripts, size: M
- live url: https://github.com/openclaw/openclaw/pull/95926
