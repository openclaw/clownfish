---
repo: openclaw/openclaw
cluster_id: live-pr-inventory-20260621T1430-001
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
  - "#89898"
  - "#89880"
  - "#89860"
  - "#89747"
  - "#89142"
cluster_refs:
  - "#89898"
  - "#89880"
  - "#89860"
  - "#89747"
  - "#89142"
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

# PR Remediation Inventory 1

## Goal

Hydrate current GitHub state and identify an executable finalization path for each PR. Emit `merge_candidate` only with complete merge preflight. Emit `fix_needed` only with a complete bounded `fix_artifact`; otherwise retain the PR. Route security-sensitive work centrally. Do not mutate GitHub.

## Inventory

### #89898 fix(plugins): guard plugin service registration metadata

- author: vincentkoc
- labels: maintainer; size S; P2; other merge risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89898

### #89880 fix(plugins): guard model catalog registration metadata

- author: vincentkoc
- labels: maintainer; size S; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89880

### #89860 fix(media): guard hosted resolver failure logging

- author: vincentkoc
- labels: maintainer; size S; P2; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89860

### #89747 fix(auto-reply): guard tools status inventory reads

- author: vincentkoc
- labels: maintainer; size M; P2; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89747

### #89142 fix(secrets): generate secretref reference docs from the credential matrix

- author: 1052326311
- labels: docs; scripts; size M; P2; automation risk; needs PR context
- live url: https://github.com/openclaw/openclaw/pull/89142
