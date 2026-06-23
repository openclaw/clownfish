---
repo: openclaw/openclaw
cluster_id: live-pr-inventory-20260621T1420-003
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
  - "#92236"
  - "#92114"
  - "#90218"
  - "#90182"
  - "#90160"
cluster_refs:
  - "#92236"
  - "#92114"
  - "#90218"
  - "#90182"
  - "#90160"
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

# PR Remediation Inventory 3

## Goal

Hydrate current GitHub state and identify an executable finalization path for each PR. Emit `merge_candidate` only with complete merge preflight. Emit `fix_needed` only with a complete bounded `fix_artifact`; otherwise retain the PR. Route security-sensitive work centrally. Do not mutate GitHub.

## Inventory

### #92236 fix(webchat): surface Codex commentary progress

- author: 100yenadmin
- labels: docs; telegram; web UI; size S; proof supplied and sufficient; P2; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/92236

### #92114 fix(memory): report indexed vector store in status

- author: TurboTheTurtle
- labels: memory-core; size S; proof supplied and sufficient; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/92114

### #90218 Fix Mission Control docs markdown links

- author: spacegeologist
- labels: web UI; size M; proof supplied and sufficient; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/90218

### #90182 fix(plugins): isolate definition metadata failures

- author: vincentkoc
- labels: maintainer; size S; proof sufficient; P2; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/90182

### #90160 fix(channels): guard pairing adapter metadata

- author: vincentkoc
- labels: maintainer; size S; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/90160
