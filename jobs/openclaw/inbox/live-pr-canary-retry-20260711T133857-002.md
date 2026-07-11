---
repo: openclaw/openclaw
cluster_id: live-pr-canary-retry-20260711T133857-002
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
  - "#104433"
cluster_refs:
  - "#104433"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Classify this current-head canary independently. Merge only through the deterministic exact-head external preflight; repair only through a complete executable fix artifact."
notes: "Fresh retry after adopted-main branch refresh on 2026-07-11. Observed head bcbc813b239dd4d8568a770aa13b007344d03cad; re-fetch live state before every mutation."
---

# Current-Head Canary Retry 2

Hydrate live GitHub state for the listed PR and produce its current finalization path.

Emit `merge_candidate` only with a complete merge preflight. If the PR is otherwise merge-shaped but lacks deterministic exact-head validation and Codex `/review`, emit a blocked `merge_candidate` with reason `external_merge_preflight_required`, `expected_head_sha`, `target_updated_at`, and concrete evidence so the executor can run the external merge preflight.

Emit bounded `fix_needed`, `build_fix_artifact`, and `open_fix_pr` only for a concrete repair with a complete executable `fix_artifact`. Use `needs_human` only for unclear scope, active author follow-up, broad work, or another specific maintainer decision. Route security-sensitive work centrally.

## Inventory

### #104433 fix(openrouter): Fusion prompt corrupts boundary emoji in model IDs

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- draft: no
- assignees: none
- signals: size S, proof sufficient, diamond, ready for maintainer look
- observed head: `bcbc813b239dd4d8568a770aa13b007344d03cad`
- live updated: 2026-07-11T11:35:46Z
- live url: https://github.com/openclaw/openclaw/pull/104433
