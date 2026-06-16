---
repo: openclaw/openclaw
cluster_id: gitcrawl-885-dedupe-cleanup-wave-3
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
  - "#90732"
cluster_refs:
  - "#90732"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#87475"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #87475 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 885 on 2026-06-16. Existing-overlap refs #87475 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 885

Generated from local gitcrawl run cluster 885 for `openclaw/openclaw`.

Display title:

> Filter noisy invalid_request_error subtypes (e.g. thinking-signature) out of user-facing assistant text

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #87475
- representative: #87475, currently closed in local store
- latest member update: 2026-06-15T19:04:11.326921Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90732 Rename "Steer now" button to non-technical language on user-facing chat surfaces

Existing-overlap context refs:

- #87475 Filter noisy invalid_request_error subtypes (e.g. thinking-signature) out of user-facing assistant text
