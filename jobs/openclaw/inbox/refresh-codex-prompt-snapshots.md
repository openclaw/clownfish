---
repo: openclaw/openclaw
cluster_id: refresh-codex-prompt-snapshots
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
canonical: []
candidates:
  - #93222
cluster_refs:
  - #93222
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: false
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/refresh-codex-prompt-snapshots
source: current_main_ci_baseline
---

# Refresh Codex prompt snapshots

ProjectClownfish should create or update one standalone implementation PR from
`clownfish/refresh-codex-prompt-snapshots` against current `openclaw/openclaw`
`main`.

## Operator Prompt

This is a current-main generated-fixture regression, not a repair of a
contributor PR. Start from fresh current `origin/main`, and confirm commit
`ab1e5832d2fb218e0dca562a79509a09819717ea` is in its history before editing.

That commit changed Codex dynamic-tool serialization from the legacy flat tool
specification to the canonical direct-function and namespaced deferred-tool
shape. Regenerate only the six stale prompt snapshot outputs below with the
repo-native generator. Do not hand-edit source code, tool serialization, or
unrelated snapshots.

- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/telegram-direct-codex-message-tool.md`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/discord-group-codex-message-tool.md`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/telegram-heartbeat-codex-tool.md`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.telegram-direct.json`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.discord-group.json`
- `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.heartbeat-turn.json`

Use `pnpm prompt:snapshots:gen`, then stage only those six expected generated
files. Run `pnpm prompt:snapshots:check` and the narrowest native dynamic-tool
and prompt-snapshot tests. Run Codex review before pushing.

Do not update, comment on, label, close, or merge #93222. It is evidence for
the CI failure only. Do not alter ClawHub cleanup behavior or any unrelated
test/workflow. Open no more than one standalone PR.

## Validation

- `pnpm prompt:snapshots:gen`
- `pnpm prompt:snapshots:check`
- narrowest native tests for Codex dynamic tools and prompt snapshots

## Guardrails

- Create or update only `clownfish/refresh-codex-prompt-snapshots`.
- The only permissible target-repository code changes are the six generated
  fixture files listed above.
- Do not merge, close, comment on, or label any issue or PR.
- Do not update #93222 or any contributor branch.
