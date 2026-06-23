---
repo: openclaw/openclaw
cluster_id: live-pr-inventory-20260621T1420-001
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
  - "#93567"
  - "#93504"
  - "#90870"
  - "#90153"
  - "#90061"
cluster_refs:
  - "#93567"
  - "#93504"
  - "#90870"
  - "#90153"
  - "#90061"
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

# PR Remediation Inventory 1

## Goal

Hydrate current GitHub state and identify an executable finalization path for each PR. Emit `merge_candidate` only with complete merge preflight. Emit `fix_needed` only with a complete bounded `fix_artifact`; otherwise retain the PR. Route security-sensitive work centrally. Do not mutate GitHub.

## Inventory

### #93567 fix(cron): normalize run-log jobId on write to match read-side validation

- author: Alix-007
- labels: size XS; proof supplied and sufficient; P2; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/93567

### #93504 fix(device-pairing): guard role normalization against non-string entries

- author: ly-wang19
- labels: size S; proof supplied and sufficient; P2; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/93504

### #90870 [AI] fix(memory-wiki): index wiki pages in query-dir subfolders

- author: Agent-Aurelius
- labels: memory-wiki; size S; proof supplied and sufficient; P2; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/90870

### #90153 fix(doctor): isolate channel doctor hook failures

- author: vincentkoc
- labels: cli; commands; maintainer; size M; P2; compatibility risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/90153

### #90061 fix(agent-runtime): guard prompt cache tool names

- author: vincentkoc
- labels: agents; maintainer; size XS; P2; other merge risk; ready for maintainer look
- live url: https://github.com/openclaw/openclaw/pull/90061
