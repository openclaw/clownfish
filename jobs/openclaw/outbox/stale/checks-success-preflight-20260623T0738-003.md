---
repo: openclaw/openclaw
cluster_id: checks-success-preflight-20260623T0738-003
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
  - "#94880"
  - "#94510"
cluster_refs:
  - "#94880"
  - "#94510"
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

# Checks-Success PR External Preflight Shard 6

Hydrate live GitHub state for each listed PR and produce a current finalization path. Emit a planned merge only with complete merge preflight. If the only missing proof is deterministic exact-head validation and Codex `/review`, emit a blocked `merge_candidate` with reason `external_merge_preflight_required`, `expected_head_sha`, `target_updated_at`, and concrete evidence. The deterministic executor will run external merge preflight and guarded apply.

## Inventory

### #94880 fix(docs): replace Info callout inside Step to fix Chinese encoding garbled text

- bucket: checks_success_preflight
- live updated: 2026-06-22T04:12:33Z
- head at scan: bf5e7122f83c1e729021679e06ab6a6a035a5222
- scan summary: mergeability UNKNOWN/UNKNOWN; GitHub search checks: success; labels: docs, size: XS, proof supplied, ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/94880

### #94510 docs(onboarding): normalize inline Info callout to block form

- bucket: checks_success_preflight
- live updated: 2026-06-22T04:12:06Z
- head at scan: 7931226adfb89dc342d159d0910c161249ca2cbe
- scan summary: mergeability UNKNOWN/UNKNOWN; GitHub search checks: success; labels: docs, size: XS, proof supplied, ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/94510
