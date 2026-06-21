---
repo: openclaw/openclaw
cluster_id: automerge-openclaw-openclaw-92230
mode: autonomous
allowed_actions:
  - comment
  - label
  - fix
  - raise_pr
blocked_actions:
  - close
  - merge
require_human_for:
  - close
  - merge
canonical:
  - #92230
candidates:
  - #92230
cluster_refs:
  - #92230
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
force_fresh_repair: true
preserve_focused_validation: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/automerge-openclaw-openclaw-92230
source: pr_automerge
---

# Clownfish automerge repair candidate

Maintainer opted #92230 into Clownfish automerge.

Source PR: https://github.com/openclaw/openclaw/pull/92230
Title: feat: add model switch choices to /model

Clownfish should use this job only for the bounded ClawSweeper review/fix loop:

- If ClawSweeper requests changes, returns `needs-human`, or finds failing checks/rebase work, and the PR branch is safe to update, emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/openclaw/pull/92230"]`.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.

## Pinned repair requirements

Start from the current source PR head `38ee9edebfc7633bb232871a0df05c3dedcd1490`. Keep the fresh model-picker repair, but correct these two remaining defects before adding unrelated scope.

1. Preserve configured Discord ACP binding readiness for bare `/model`. The picker branch must resolve the same guarded native route state as the normal command path before it loads picker data or replies. When a configured binding is unavailable, return the existing unavailable-binding response and do not expose a picker or its agent catalog. Add a regression test with a failed configured binding that proves the picker loader/reply is not invoked.
2. Prove Telegram long-model reachability, not merely the provider-browser entry. When any `/model` choice cannot fit Telegram callback data, do not emit a partial `tgcmd` keyboard; exercise the existing provider browse callback and assert the next menu exposes the real provider-scoped `mdl_sel_<provider>/<model>` route for the long model. `mdl_prov` alone is not sufficient proof. Retain short-model behavior where all callbacks fit.
3. Run this focused suite before pushing a checkpoint:

   ```bash
   pnpm test:serial \
     extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts \
     extensions/discord/src/monitor/native-command.model-picker.test.ts \
     extensions/telegram/src/bot-native-commands.test.ts \
     src/auto-reply/commands-registry.test.ts
   ```

Treat current unrelated `opencode-go` `check:changed` type failures as baseline evidence only. Do not edit that surface. Push only after the focused suite passes, then run normal changed validation and review.
