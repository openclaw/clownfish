---
repo: openclaw/openclaw
cluster_id: gitcrawl-940-dedupe-cleanup-wave-3
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
  - "#85202"
candidates:
  - "#85202"
cluster_refs:
  - "#85202"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#85543"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #85202 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 940 on 2026-06-16. Existing-overlap refs #85543 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 940

Generated from local gitcrawl run cluster 940 for `openclaw/openclaw`.

Display title:

> [Bug]: Linux headless node exec fails with spawn /bin/sh ENOENT despite connected nodes and existing /bin/sh

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #85543
- representative: #85202, currently open in local store
- latest member update: 2026-06-15T19:04:11.962629Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #85202 [Bug]: Linux headless node exec fails with spawn /bin/sh ENOENT despite connected nodes and existing /bin/sh

Existing-overlap context refs:

- #85543 [security-signal] Retry node shell fallback on ENOENT
