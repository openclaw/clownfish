---
repo: openclaw/openclaw
cluster_id: checks-success-preflight-20260623T0727-001
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
  - "#95934"
  - "#95923"
cluster_refs:
  - "#95934"
  - "#95923"
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

# Checks-Success PR External Preflight Shard 1

Hydrate live GitHub state for each listed PR and produce a current finalization path. Emit a planned merge only with complete merge preflight. If the only missing proof is deterministic exact-head validation and Codex `/review`, emit a blocked `merge_candidate` with reason `external_merge_preflight_required`, `expected_head_sha`, `target_updated_at`, and concrete evidence. The deterministic executor will run external merge preflight and guarded apply.

## Inventory

### #95934 fix(xiaomi): correct mimo-v2.5 and mimo-v2.5-pro max output tokens to 128K

- bucket: checks_success_preflight
- live updated: 2026-06-23T05:59:12Z
- head at scan: e602e3030cd5c7f7b5c7615a68295a822c306561
- scan summary: mergeability UNKNOWN/UNKNOWN; GitHub search checks: success; labels: docs, size: XS, extensions: xiaomi
- live url: https://github.com/openclaw/openclaw/pull/95934

### #95923 fix(commitments): keep table columns aligned when an id or scope is truncated

- bucket: checks_success_preflight
- live updated: 2026-06-23T02:31:48Z
- head at scan: 8abd07755516799f90835a5129324891295d3321
- scan summary: mergeability UNKNOWN/UNKNOWN; GitHub search checks: success; labels: commands, size: S
- live url: https://github.com/openclaw/openclaw/pull/95923
