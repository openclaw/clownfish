---
repo: openclaw/openclaw
cluster_id: live-pr-inventory-20260621T1430-002
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
  - "#95483"
  - "#89917"
  - "#89907"
  - "#89897"
  - "#89894"
cluster_refs:
  - "#95483"
  - "#89917"
  - "#89907"
  - "#89897"
  - "#89894"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Fresh independent PR remediation shard. A merge recommendation requires complete live merge preflight; a repair requires a complete executable fix artifact."
notes: "Generated from the second live ready-for-maintainer page on 2026-06-21T14:30Z. Excludes all refs with June 21 result artifacts and the prior intake. Plan-only: no GitHub mutation is permitted."
---

# PR Remediation Inventory 2

## Goal

Hydrate current GitHub state and identify an executable finalization path for each PR. Emit `merge_candidate` only with complete merge preflight. Emit `fix_needed` only with a complete bounded `fix_artifact`; otherwise retain the PR. Route security-sensitive work centrally. Do not mutate GitHub.

## Inventory

### #95483 fix(whatsapp): preserve native quote replies

- author: mcaxtr
- labels: whatsapp-web; maintainer; size M; QA lab; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/95483

### #89917 fix(agents): guard provider auth alias metadata

- author: vincentkoc
- labels: agents; maintainer; size S; P2; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89917

### #89907 fix(plugins): guard config contract metadata

- author: vincentkoc
- labels: maintainer; size S; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89907

### #89897 fix(cli): replace hardcoded FLAG_TERMINATOR in getCommandPathInternal

- author: whiteyzy
- labels: cli; size XS; proof supplied and sufficient; P3; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89897

### #89894 fix(docs): reorder AGENTS.md template to protect critical rules from truncation

- author: dwc1997
- labels: docs; size XS; proof supplied; P2; other merge risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89894
