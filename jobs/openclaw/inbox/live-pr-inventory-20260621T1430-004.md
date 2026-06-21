---
repo: openclaw/openclaw
cluster_id: live-pr-inventory-20260621T1430-004
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
  - "#89778"
  - "#89767"
  - "#89619"
  - "#89384"
  - "#89320"
cluster_refs:
  - "#89778"
  - "#89767"
  - "#89619"
  - "#89384"
  - "#89320"
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

# PR Remediation Inventory 4

## Goal

Hydrate current GitHub state and identify an executable finalization path for each PR. Emit `merge_candidate` only with complete merge preflight. Emit `fix_needed` only with a complete bounded `fix_artifact`; otherwise retain the PR. Route security-sensitive work centrally. Do not mutate GitHub.

## Inventory

### #89778 fix(media): guard hosted media resolver metadata

- author: vincentkoc
- labels: maintainer; size S; P2; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89778

### #89767 fix(skills): route installs to requested agent workspace

- author: AliAbuelkheir
- labels: docs; web UI; gateway; size M; proof supplied and sufficient; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89767

### #89619 fix(agents): wrap bundle MCP schema setup errors

- author: vincentkoc
- labels: agents; maintainer; size S; proof sufficient; P2; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89619

### #89384 fix(plugins): isolate unreadable plugin tool descriptors

- author: vincentkoc
- labels: maintainer; size M; proof sufficient; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89384

### #89320 docs: document ACP stateful target contracts

- author: steipete
- labels: web UI; gateway; maintainer; size XL; proof sufficient; P3; other merge risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89320
