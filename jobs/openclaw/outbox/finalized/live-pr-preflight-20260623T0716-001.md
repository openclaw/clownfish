---
repo: openclaw/openclaw
cluster_id: live-pr-preflight-20260623T0716-001
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
  - "#94437"
  - "#94636"
cluster_refs:
  - "#94437"
  - "#94636"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "This is a fresh PR external-preflight shard. Classify each PR independently. If the PR is otherwise merge-shaped but lacks deterministic exact-head validation and Codex review, emit a blocked merge_candidate with reason external_merge_preflight_required."
notes: "Generated from live ready-for-maintainer inventory on 2026-06-23T07:16:00Z after filtering out maintainer, security, merge-risk, draft, and non-ignored failing-check candidates."
---

# PR External Preflight Shard 1

Hydrate live GitHub state for each listed PR and produce a current finalization path. Emit a planned merge only with complete merge preflight. If the only missing proof is deterministic exact-head validation and Codex `/review`, emit a blocked `merge_candidate` with reason `external_merge_preflight_required`, `expected_head_sha`, `target_updated_at`, and concrete evidence. The deterministic executor will run external merge preflight and guarded apply.

## Inventory

### #94437 fix(agents): render identity name in runtime prompt

- bucket: ready_for_maintainer_preflight
- live updated: 2026-06-23T06:41:19Z
- head at scan: f9d979764cfe439d262dc9f601dc16029ec06d1d
- scan summary: mergeability UNKNOWN/UNKNOWN; non-ignored failing checks: 0; pending checks: 0
- live url: https://github.com/openclaw/openclaw/pull/94437

### #94636 fix(memory): skip raw snippets during promotion

- bucket: ready_for_maintainer_preflight
- live updated: 2026-06-22T16:13:49Z
- head at scan: c6128eeb5be253cbb693340aa7d3b24262a9d3dd
- scan summary: mergeability UNKNOWN/UNKNOWN; non-ignored failing checks: 0; pending checks: 0
- live url: https://github.com/openclaw/openclaw/pull/94636
