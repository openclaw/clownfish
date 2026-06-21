---
repo: openclaw/openclaw
cluster_id: symlink-test-repair-autonomous-20260621
mode: autonomous
allowed_actions:
  - "fix"
  - "raise_pr"
blocked_actions:
  - "comment"
  - "label"
  - "close"
  - "force_push"
  - "bypass_checks"
  - "merge"
require_human_for:
  - "security_sensitive"
  - "unclear_canonical"
  - "broad_code_delta"
  - "active_author_followup"
canonical: []
candidates:
  - "#90223"
  - "#90280"
cluster_refs:
  - "#90223"
  - "#90280"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "These two source PRs are the same narrow symlink-test repair. Rehydrate them and create a credited replacement only if the test-only scope remains current."
notes: "Autonomous repair canary from a reviewed plan artifact. It may open one narrow credited fix PR only. Do not comment on, close, label, merge, or modify either source PR branch."
---

# Symlink Test Repair Canary

## Goal

Rehydrate both source pull requests and carry their compatible symlink-test
intent forward only if the live evidence remains current. Do not mutate either
source pull request. The only permitted mutation is one new replacement fix PR
that credits both source PRs and their author.

The repair must remain limited to:

- `extensions/qqbot/src/engine/utils/file-utils.test.ts`
- `extensions/zalo/src/token.test.ts`

Move file-symlink capability probing out of module import time. Gate assertions
on actual file-symlink capability and retain each test file's local Vitest
convention. Do not broaden the change or add a changelog.

## Validation

Before opening a replacement PR, require:

- `pnpm -s vitest run extensions/qqbot/src/engine/utils/file-utils.test.ts extensions/zalo/src/token.test.ts`
- `pnpm check:changed`
- a clean Codex `/review`

## Source Credit

- https://github.com/openclaw/openclaw/pull/90223 by @aniruddhaadak80
- https://github.com/openclaw/openclaw/pull/90280 by @aniruddhaadak80
