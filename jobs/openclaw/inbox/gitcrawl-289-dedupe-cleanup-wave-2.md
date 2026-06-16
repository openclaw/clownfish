---
repo: openclaw/openclaw
cluster_id: gitcrawl-289-dedupe-cleanup-wave-2
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
  - "#77888"
candidates:
  - "#77888"
cluster_refs:
  - "#77888"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#77895"
  - "#89371"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #77888 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 289 on 2026-06-16. Existing-overlap refs #77895, #89371 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 289

Generated from local gitcrawl run cluster 289 for `openclaw/openclaw`.

Display title:

> [Bug]: writePhaseSignalStore / writeStore do not clean up orphaned temporary files

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #77895, #89371
- representative: #77888, currently open in local store
- latest member update: 2026-06-15T19:04:12.247299Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77888 [Bug]: writePhaseSignalStore / writeStore do not clean up orphaned temporary files

Existing-overlap context refs:

- #77895 fix(memory-core): clean stale short-term temp files
- #89371 [security-signal] fix(memory): clean stale short-term temp files
