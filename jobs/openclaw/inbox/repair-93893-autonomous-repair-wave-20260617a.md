---
repo: "openclaw/openclaw"
cluster_id: "repair-93893-autonomous-repair-wave-20260617a"
mode: autonomous
allowed_actions:
  - fix
  - raise_pr
blocked_actions:
  - comment
  - label
  - close
  - merge
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - active_author_followup
  - broad_code_delta
canonical:
  - "#93893"
candidates:
  - "#93893"
cluster_refs:
  - "#93893"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-93893-autonomous-repair-wave-20260617a"
source: "autonomous_repair_scout"
repair_strategy: "repair_contributor_branch"
---

# Repair Wave #93893

Repair contributor PR #93893 only if live checkout confirms duplicate Docker mounts when user-provided binds overlap internal skill mounts.

## Likely Files

- src/agents/sandbox/docker.ts
- focused sandbox Docker mount regression test selected from the checkout

## Validation

- pnpm check:changed
- run the focused sandbox Docker mount regression selected from the checkout
- /review

## Credit

- Preserve source PR credit for https://github.com/openclaw/openclaw/pull/93893.

## Guardrails

- Re-fetch #93893 and current main before editing.
- Preserve sandbox and mount security boundaries; deduplicate only the proven overlapping mount inputs.
- Do not comment, label, close, merge, force-push, or bypass checks.
