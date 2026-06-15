---
repo: openclaw/openclaw
cluster_id: gitcrawl-237-autonomous-issue-wave
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#49183"
candidates:
  - "#44484"
  - "#49183"
cluster_refs:
  - "#44484"
  - "#49183"
  - "#73864"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#73864"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #49183 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 237 on 2026-06-15. Security-signal refs #73864 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 237

Generated from local gitcrawl run cluster 237 for `openclaw/openclaw`.

Display title:

> RFC: Per-session tool policies — bridging operator scopes and agent tool access

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 2
- security-signal refs requiring route_security: #73864
- representative: #49183, currently open in local store
- latest member update: 2026-06-15T11:49:41.200031Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #73864 [security-signal] Feature: let openclaw mcp serve request configurable operator scopes

Open candidates:

- #44484 Agent declared tools != effective session tools: no strict inheritance mode, no visibility, no clipping reason trace
- #49183 RFC: Per-session tool policies — bridging operator scopes and agent tool access
