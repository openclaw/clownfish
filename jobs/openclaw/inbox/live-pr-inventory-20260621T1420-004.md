---
repo: openclaw/openclaw
cluster_id: live-pr-inventory-20260621T1420-004
mode: plan
allowed_actions:
  - "merge"
  - "fix"
  - "raise_pr"
blocked_actions:
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
canonical: []
candidates:
  - "#90150"
  - "#90136"
  - "#90099"
  - "#90063"
  - "#89967"
cluster_refs:
  - "#90150"
  - "#90136"
  - "#90099"
  - "#90063"
  - "#89967"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Fresh independent PR remediation shard. A merge recommendation requires complete live merge preflight; a repair requires a complete executable fix artifact."
notes: "Generated from the live ready-for-maintainer inventory on 2026-06-21T14:20Z. Excludes all refs with June 21 result artifacts. Plan-only: no GitHub mutation is permitted."
---

# PR Remediation Inventory 4

## Goal

Hydrate current GitHub state and identify an executable finalization path for each PR. Emit `merge_candidate` only with complete merge preflight. Emit `fix_needed` only with a complete bounded `fix_artifact`; otherwise retain the PR. Route security-sensitive work centrally. Do not mutate GitHub.

## Inventory

### #90150 fix(doctor): guard tool allowlist manifest metadata

- author: vincentkoc
- labels: commands; maintainer; size S; P2; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/90150

### #90136 fix(plugins): guard manifest activation planning

- author: vincentkoc
- labels: maintainer; size M; proof sufficient; P2; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/90136

### #90099 fix(plugin-sdk): guard facade registry rows

- author: vincentkoc
- labels: maintainer; size M; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/90099

### #90063 fix(channels): clarify message receipt delivery evidence

- author: pdurlej
- labels: docs; size S; proof supplied and sufficient; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/90063

### #89967 fix #87199: macOS LaunchAgent external-home gateway run failure

- author: zhangguiping-xydt
- labels: gateway; size S; proof supplied and sufficient; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89967
