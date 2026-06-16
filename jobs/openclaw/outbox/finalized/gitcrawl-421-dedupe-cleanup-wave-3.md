---
repo: openclaw/openclaw
cluster_id: gitcrawl-421-dedupe-cleanup-wave-3
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
canonical:
  - "#36212"
candidates:
  - "#36212"
cluster_refs:
  - "#36212"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#91272"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #36212 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 421 on 2026-06-16. Existing-overlap refs #91272 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 421

Generated from local gitcrawl run cluster 421 for `openclaw/openclaw`.

Display title:

> Queued messages should preserve original platform message_id

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #91272
- representative: #36212, currently open in local store
- latest member update: 2026-06-15T19:04:12.692088Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #36212 Queued messages should preserve original platform message_id

Existing-overlap context refs:

- #91272 fix(queue): preserve queued platform message ids in collect drains (Fixes #36212)
