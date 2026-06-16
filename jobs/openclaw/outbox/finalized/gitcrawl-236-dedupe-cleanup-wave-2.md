---
repo: openclaw/openclaw
cluster_id: gitcrawl-236-dedupe-cleanup-wave-2
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical: []
candidates:
  - "#64086"
cluster_refs:
  - "#64086"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#53774"
  - "#72557"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #72557 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 236 on 2026-06-16. Existing-overlap refs #53774, #72557 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 236

Generated from local gitcrawl run cluster 236 for `openclaw/openclaw`.

Display title:

> feat: PluginStatusProvider plugin API for TUI footer status (resolves #64086)

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #53774, #72557
- representative: #72557, currently open in local store
- latest member update: 2026-06-15T19:04:12.540429Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #64086 feat: Plugin API for TUI footer status contributions (registerStatusProvider)

Existing-overlap context refs:

- #53774 Feature Request: Custom TUI Footer Fields for Cost/Balance/Rate Limit Status
- #72557 feat: PluginStatusProvider plugin API for TUI footer status (resolves #64086)
