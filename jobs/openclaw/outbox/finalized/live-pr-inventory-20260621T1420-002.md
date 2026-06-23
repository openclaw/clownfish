---
repo: openclaw/openclaw
cluster_id: live-pr-inventory-20260621T1420-002
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
  - "#90033"
  - "#89973"
  - "#89720"
  - "#89529"
  - "#89132"
cluster_refs:
  - "#90033"
  - "#89973"
  - "#89720"
  - "#89529"
  - "#89132"
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

# PR Remediation Inventory 2

## Goal

Hydrate current GitHub state and identify an executable finalization path for each PR. Emit `merge_candidate` only with complete merge preflight. Emit `fix_needed` only with a complete bounded `fix_artifact`; otherwise retain the PR. Route security-sensitive work centrally. Do not mutate GitHub.

## Inventory

### #90033 fix(llm): apply model.compat.sendSessionAffinityHeaders at openai transport

- author: obuchowski
- labels: agents; size S; proof supplied and sufficient; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/90033

### #89973 fix(plugins): isolate doctor contract rows

- author: vincentkoc
- labels: maintainer; size S; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89973

### #89720 fix(plugin-sdk): guard plain text tool name reads

- author: vincentkoc
- labels: maintainer; size S; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89720

### #89529 fix(provider): harden unsupported schema keyword stripping

- author: vincentkoc
- labels: agents; maintainer; size M; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89529

### #89132 fix(agent-core): guard tool lookup descriptors

- author: vincentkoc
- labels: maintainer; size S; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/89132
