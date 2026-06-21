---
repo: openclaw/openclaw
cluster_id: repair-83041-autonomous-20260621
mode: autonomous
allowed_actions:
  - "fix"
  - "raise_pr"
blocked_actions:
  - "merge"
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
canonical:
  - "#83041"
candidates:
  - "#83041"
cluster_refs:
  - "#83041"
  - "#46797"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: true
canonical_hint: "Repair only the existing writable contributor branch for #83041. Do not create a replacement PR, merge, comment, label, or close any GitHub item."
notes: "Fresh live plan identified a complete bounded repair artifact for the config patch restart-required notice path. Re-fetch the exact branch head before any write."
---

# Repair #83041

Repair the canonical contributor branch for #83041 only.

## Goal

Resolve the current failed checks and any actionable review findings with the smallest safe change. Preserve contributor credit and keep the existing PR as the only implementation lane.

## Required Validation

- node scripts/run-vitest.mjs src/infra/restart-sentinel.test.ts src/gateway/server-restart-sentinel.test.ts src/gateway/server-methods/config.shared-auth.test.ts
- pnpm check:changed

## Boundaries

- Likely files: `src/gateway/server-methods/config-write-flow.ts`, `src/gateway/server-methods/config.shared-auth.test.ts`, `src/gateway/server-restart-sentinel.ts`, `src/gateway/server-restart-sentinel.test.ts`, `src/infra/restart-sentinel.ts`, `src/infra/restart-sentinel.test.ts`
- Do not modify unrelated PRs or issues.
- Do not merge #83041. Fresh green CI and maintainer review remain required.
