---
repo: openclaw/openclaw
cluster_id: repair-92165-memory-dreaming
mode: autonomous
allowed_actions:
  - fix
  - raise_pr
blocked_actions:
  - comment
  - label
  - close
  - merge
require_human_for:
  - close
  - merge
canonical:
  - #92165
candidates:
  - #92165
  - #87637
cluster_refs:
  - #92165
  - #87637
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: true
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-92165-memory-dreaming
source: clawsweeper
---

# ClawSweeper-promoted fix PR candidate

ProjectClownfish should create or update one implementation PR from `clownfish/repair-92165-memory-dreaming`.

## Operator Prompt

Repair #92165 for linked issue #87637 only. Rehydrate the live contributor PR and review threads, then make the narrowest safe repair for showing dreaming status without search. Preserve contributor intent and credit; update the contributor branch when safely editable, otherwise use a guarded credited replacement. Do not merge, close, comment on, label, or touch security-linked work. Require focused OpenClaw-native validation and Codex review before opening or updating a repair PR.

The previous guarded execution reached the final `pnpm check:changed` gate and
failed only in `src/commands/doctor-memory-search.test.ts`: three
`DoctorMemoryDreamingPayload` fixture values inferred `storageMode` as `string`
instead of the `"both" | "inline" | "separate"` union. Preserve the fixture
literal type with the narrowest TypeScript-safe construction, then run the
targeted test and `pnpm check:changed`. Do not relax production types or skip
the changed gate.

The replay fixed that fixture typing but exposed the remaining #87637 behavior
gap: when memory search is configured but `resolveActiveMemoryBackendConfig()`
returns no active backend, the doctor path reports only `No active memory
plugin` and returns without the dreaming status. Preserve the existing
no-active-plugin diagnostic, but also render the available dreaming status in
that configured-no-backend case. Add a focused regression test for this exact
path; do not broaden the change into memory-provider discovery or unrelated
doctor output.

## Related Refs

- #92165
- #87637

## Likely Files

- unknown

## Validation

- choose the narrowest repo-native validation for the touched surface

## Guardrails

- Do not merge.
- Do not comment on, label, or close any issue or PR.
- Do not close issues before a fix PR is opened, landed, or explicitly proven unnecessary.
- Keep one PR for this cluster; reuse `clownfish/repair-92165-memory-dreaming` if it already exists.
- Preserve contributor credit and add a changelog entry when the target repo expects one.
