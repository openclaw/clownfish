---
repo: openclaw/openclaw
cluster_id: repair-104026-zod-locale-refresh-20260711
mode: autonomous
expected_head_sha: 1922f6fb7c92ecb0710ff5dddf1550cda3ac88a2
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
maintainer_calibration:
  - "Refresh the maintainer-editable contributor branch for #104026 onto current main without changing the narrow explicit Zod locale-registration intent. Require focused config validation tests and packaged CLI proof."
canonical:
  - "#104026"
candidates:
  - "#104026"
cluster_refs:
  - "#104026"
  - "#104014"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
require_external_merge_preflight: false
allow_post_merge_close: false
require_fix_before_close: true
rebase_only: true
canonical_hint: "Refresh only the existing writable contributor branch for #104026 against current main, preserving the explicit Zod locale registration fix and packaged validation-message proof."
notes: "Qualified on 2026-07-11 at exact head 1922f6fb7c92ecb0710ff5dddf1550cda3ac88a2. The bug and fix are valid, but main advanced in the same config-schema/build area after the prior CI. Use a non-force branch refresh, keep the product diff narrow, and stop on unclear overlap."
---

# Refresh #104026

Refresh the existing contributor branch for
https://github.com/openclaw/openclaw/pull/104026 only.

## Goal

Bring the narrow explicit Zod English-locale registration fix onto current
`main` without changing its product intent.

- Use a non-force update to the existing writable contributor branch.
- Preserve explicit locale registration at the canonical config-schema
  boundary.
- Keep the focused regression that proves packaged builds retain detailed Zod
  validation messages.
- Stop instead of resolving any broad or unclear config-schema overlap.

## Required Validation

- Run the focused config-schema validation-message tests.
- Reproduce the packaged CLI validation output and confirm it is more specific
  than bare `Invalid input`.
- Run `pnpm check:changed`.

## Boundaries

- Expected files remain the existing two-file PR surface.
- Do not refactor config parsing, change validation policy, or expand locale
  behavior.
- Do not merge, comment, label, close, create a replacement PR, or force-push.
