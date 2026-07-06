---
repo: openclaw/openclaw
cluster_id: checks-success-preflight-20260623T0738-002
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
  - "#95778"
  - "#94991"
cluster_refs:
  - "#95778"
  - "#94991"
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

# Checks-Success PR External Preflight Shard 5

Hydrate live GitHub state for each listed PR and produce a current finalization path. Emit a planned merge only with complete merge preflight. If the only missing proof is deterministic exact-head validation and Codex `/review`, emit a blocked `merge_candidate` with reason `external_merge_preflight_required`, `expected_head_sha`, `target_updated_at`, and concrete evidence. The deterministic executor will run external merge preflight and guarded apply.

## Inventory

### #95778 [codex] Fix stale active work session recovery

- bucket: checks_success_preflight
- live updated: 2026-06-22T14:23:41Z
- head at scan: 9269e4494203e0a75943de5a93732b2b08bff832
- scan summary: mergeability UNKNOWN/UNKNOWN; GitHub search checks: success; labels: commands, size: S
- live url: https://github.com/openclaw/openclaw/pull/95778

### #94991 fix(ios): reset sidebar navigation stacks

- bucket: checks_success_preflight
- live updated: 2026-06-20T22:50:46Z
- head at scan: ebbca489cdf16d69e8ac87f9a9ea8d38fd039bcc
- scan summary: mergeability UNKNOWN/UNKNOWN; GitHub search checks: success; labels: app: ios, size: L, proof supplied/sufficient, ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/94991
