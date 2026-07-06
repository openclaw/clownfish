---
repo: openclaw/openclaw
cluster_id: repair-openclaw-85238-20260706
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
  - merge
canonical:
  - #85238
candidates:
  - #85238
cluster_refs:
  - #85238
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: tung/pnpm11-service-path
source: planner_promotion
---

# ClawSweeper-promoted fix PR candidate

ProjectClownfish should repair the existing contributor PR branch
`tung/pnpm11-service-path`.

## Operator Prompt

Repair the existing editable contributor PR #85238 against current main. Preserve contributor authorship. Resolve the path-env conflict by keeping current resolvePathBootstrapBrewDirs, existingPathParts filtering, deleted-cwd hardening, and service identity behavior, then add the bounded pnpm 11 package-manager candidates after trusted system paths: PNPM_HOME/bin, macOS Library/pnpm/bin, Linux/XDG .local/share/pnpm/bin, NPM_CONFIG_PREFIX/bin, and .npm-global/bin. Retain legacy pnpm paths and existence/current-PATH filtering. Run focused service-env and path-env tests, check:changed when available, real PATH ordering proof, and autoreview. Stop with needs_human if current main changed the trust model or the repair broadens. Do not merge, close, label, or comment.

## Related Refs

- #85238

## Likely Files

- unknown

## Validation

- choose the narrowest repo-native validation for the touched surface

## Guardrails

- Do not merge.
- Do not close issues before a fix PR is opened, landed, or explicitly proven unnecessary.
- Keep one PR for this cluster; repair #85238 instead of opening a replacement when the contributor branch remains editable.
- Preserve contributor credit and add a changelog entry when the target repo expects one.
