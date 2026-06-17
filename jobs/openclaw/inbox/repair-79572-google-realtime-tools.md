---
repo: openclaw/openclaw
cluster_id: repair-79572-google-realtime-tools
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
  - failing_checks
canonical:
  - "#79572"
candidates:
  - "#79572"
cluster_refs:
  - "#79572"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-79572-google-realtime-tools
source: clawsweeper
---

# ClawSweeper-promoted Google realtime repair

Repair #79572 only. Rehydrate the live contributor pull request and review
threads, then replay the narrow Google realtime FunctionDeclaration projection
repair on current `main`. Preserve contributor credit and update the contributor
branch when safely editable; otherwise use a guarded credited replacement.

The required behavior is limited to Google realtime tool declarations:

- use `parameters` instead of `parametersJsonSchema`;
- keep the change confined to
  `extensions/google/realtime-voice-provider.ts` and
  `extensions/google/realtime-voice-provider.test.ts` unless current code proves
  a third file is necessary;
- cover both the built-in consult tool and a custom realtime tool;
- do not alter other providers, configuration, or add a schema-normalization
  layer without fresh evidence.

Run the narrow provider test, `pnpm tsgo:extensions`, `pnpm check:changed`, and
`git diff --check`. Require a real Google Live tool-call proof for both tool
paths before considering the repair ready. Do not merge, comment on, label, or
close any issue or pull request.
