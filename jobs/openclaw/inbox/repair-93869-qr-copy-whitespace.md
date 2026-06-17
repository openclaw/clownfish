---
repo: openclaw/openclaw
cluster_id: repair-93869-qr-copy-whitespace
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
  - close
  - merge
  - security_sensitive
canonical:
  - "#93869"
candidates:
  - "#93869"
cluster_refs:
  - "#93869"
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

# QR clipboard whitespace repair

Repair the existing credited replacement PR #93869 only. Rehydrate its live
head and CI before editing. Continue only if the current head is
`d20a3bd9ed72db0b5f7e88f7fc8288d057351595`; otherwise stop and report the
fresh state.

The current UI failure is a real copy-path regression: DOMPurify trims
leading and trailing whitespace in raw `data-code` attributes. The rendered
QR/block-art text remains correct, but the clipboard payload loses its quiet
zone. Keep the existing attribute-copy design and its newline semantics.
Do not replace the payload with rendered `textContent`.

Make the smallest coherent repair:

- encode the raw clipboard payload with non-whitespace boundary sentinels in
  `ui/src/ui/markdown.ts`;
- decode only a valid marked payload in `ui/src/ui/views/chat.ts`, using
  `slice(1, -1)` without trimming;
- preserve legacy raw payload support;
- prove through rendered DOM and the actual copy click path that both leading
  and final block-art spaces reach `copyToClipboard` exactly;
- do not weaken or delete the equality regression assertion.

Keep scope to these files unless live code proves a fifth is required:

- `ui/src/ui/markdown.ts`
- `ui/src/ui/views/chat.ts`
- `ui/src/ui/markdown.test.ts`
- `ui/src/ui/views/chat.test.ts`

Do not touch QR classification, tool cards, CSS, prompt snapshots, or ClawHub
cleanup. Update the existing `clownfish/repair-51868-qr-rendering` branch.
Do not open another replacement, and do not comment, label, close, or merge
anything.

Run `pnpm test:serial ui/src/ui/markdown.test.ts ui/src/ui/views/chat.test.ts`,
`pnpm check:changed`, `git diff --check`, and Codex review before pushing.
This canary must run with strict target-validation mode so its focused tests
cannot be normalized away.
