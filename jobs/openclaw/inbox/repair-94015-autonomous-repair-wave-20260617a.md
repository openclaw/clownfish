---
repo: "openclaw/openclaw"
cluster_id: "repair-94015-autonomous-repair-wave-20260617a"
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
  - "#94015"
candidates:
  - "#94015"
cluster_refs:
  - "#94015"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-94015-autonomous-repair-wave-20260617a"
source: "autonomous_repair_scout"
repair_strategy: "repair_contributor_branch"
---

# Repair Wave #94015

Repair contributor PR #94015 only if live checkout confirms that voice-call TTS uses stale post-compaction payloads.

## Likely Files

- extensions/voice-call/src/response-generator.ts
- extensions/voice-call/src/response-generator.test.ts

## Validation

- pnpm check:changed
- run the focused voice-call response regression selected from the checkout
- /review

## Credit

- Preserve source PR credit for https://github.com/openclaw/openclaw/pull/94015.

## Guardrails

- Re-fetch #94015 and current main before editing.
- Do not change TTS policy, compaction policy, or voice-call configuration beyond the proven stale-payload path.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Emit a blocked artifact if the live defect is not narrow and reproducible.
