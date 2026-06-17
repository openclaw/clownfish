---
repo: openclaw/openclaw
cluster_id: repair-93869-qr-ci
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
  - #93869
candidates:
  - #93869
  - #51868
cluster_refs:
  - #93869
  - #51868
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-51868-qr-rendering
source: ci-remediation
---

# Clownfish CI repair

ProjectClownfish should repair the existing credited replacement PR #93869 only.

## Operator Prompt

Rehydrate #93869 and its live CI failures before editing. Update the existing `clownfish/repair-51868-qr-rendering` branch; do not open a second replacement or alter #51868.

Repair only the QR/block-art regression shown by the new PR head:

- `ui/src/ui/chat/grouped-render.test.ts` has a module mock for `../markdown.ts` that now needs the exported `isMarkdownBlockArtText` helper used by the repaired rendering path.
- QR half-block rendering must preserve its leading quiet-zone spaces in the clipboard payload as well as the rendered code block. Encode only block-art `data-code` payloads in `ui/src/ui/markdown.ts`, then decode those marked payloads before `copyToClipboard` in `ui/src/ui/views/chat.ts`, while retaining support for existing raw payloads.
- Keep the focused markdown assertions' whitespace-preserving intent and add coverage for normal and truncated block-art copy behavior.
- The previous repair still fails because the parsed DOM normalizes the first line of raw `dataset.code` from `"  ▀▀▀▀"` to `"▀▀▀▀"`. Do not store raw leading-space block art in the HTML data attribute. Use a deterministic marked representation that survives DOM parsing, decode it only at copy time, and prove through the rendered DOM plus the clipboard handler that the two leading spaces survive for normal and truncated QR art.

The known `prompt:snapshots:check` drift and the ClawHub temporary-directory cleanup failure are unrelated current-main failures. Do not edit snapshots, ClawHub scripts, or unrelated tests to make those checks green.

Preserve prior contributor credit. Run narrow native UI validation and Codex review. Do not comment, label, close, or merge anything.

## Related Refs

- #93869
- #51868

## Likely Files

- ui/src/ui/markdown.ts
- ui/src/ui/markdown.test.ts
- ui/src/ui/chat/grouped-render.test.ts
- ui/src/ui/views/chat.ts

## Validation

- choose the narrowest repo-native validation for the touched UI surface

## Guardrails

- Update only the existing replacement branch for #93869.
- Do not merge, close, comment on, or label any issue or PR.
- Do not touch unrelated prompt snapshots or ClawHub cleanup behavior.
- Preserve contributor credit and require Codex review before pushing.
