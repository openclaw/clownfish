---
repo: openclaw/openclaw
cluster_id: checks-success-preflight-20260623T0738-004
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
  - "#94436"
  - "#94361"
cluster_refs:
  - "#94436"
  - "#94361"
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

# Checks-Success PR External Preflight Shard 7

Hydrate live GitHub state for each listed PR and produce a current finalization path. Emit a planned merge only with complete merge preflight. If the only missing proof is deterministic exact-head validation and Codex `/review`, emit a blocked `merge_candidate` with reason `external_merge_preflight_required`, `expected_head_sha`, `target_updated_at`, and concrete evidence. The deterministic executor will run external merge preflight and guarded apply.

## Inventory

### #94436 docs(media): clarify legacy MEDIA line formatting

- bucket: checks_success_preflight
- live updated: 2026-06-21T14:16:00Z
- head at scan: 720a6312fb0ece0da4418eb42b48d8e19c7b7d28
- scan summary: mergeability UNKNOWN/unknown; GitHub search checks: success; labels: docs, size: XS, proof supplied, ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/94436

### #94361 fix(ui): scroll to cron run history

- bucket: checks_success_preflight
- live updated: 2026-06-23T06:41:33Z
- head at scan: 6c36d6a193a6d27f1f4c65a727dc12629eabb14a
- scan summary: mergeability UNKNOWN/UNKNOWN; GitHub search checks: success; labels: app: web-ui, size: XS, proof supplied/sufficient, ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/94361
