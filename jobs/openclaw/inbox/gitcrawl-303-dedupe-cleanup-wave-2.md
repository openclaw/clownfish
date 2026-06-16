---
repo: openclaw/openclaw
cluster_id: gitcrawl-303-dedupe-cleanup-wave-2
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
  - "#87320"
candidates:
  - "#87320"
cluster_refs:
  - "#87320"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#88529"
  - "#88683"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #87320 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 303 on 2026-06-16. Existing-overlap refs #88529, #88683 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 303

Generated from local gitcrawl run cluster 303 for `openclaw/openclaw`.

Display title:

> \`openclaw update\` dry-run passes but apply fails with `ETARGET` when version not yet on npm registry

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #88529, #88683
- representative: #87320, currently open in local store
- latest member update: 2026-06-15T19:04:12.778566Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87320 \`openclaw update\` dry-run passes but apply fails with `ETARGET` when version not yet on npm registry

Existing-overlap context refs:

- #88529 [security-signal] fix(update): warn when exact package tag is unpublished
- #88683 Reject unpublished npm targets consistently in update dry-run
