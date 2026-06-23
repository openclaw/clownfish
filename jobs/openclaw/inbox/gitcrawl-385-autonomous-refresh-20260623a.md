---
repo: openclaw/openclaw
cluster_id: gitcrawl-385-autonomous-refresh-20260623a
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
  - "#41256"
candidates:
  - "#41256"
cluster_refs:
  - "#41256"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#41265"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#41265"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #41256 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 385 on 2026-06-23. Existing-overlap refs #41265 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 385

Generated from local gitcrawl run cluster 385 for `openclaw/openclaw`.

Display title:

> [Bug]: Discord media uploads lose content-type and animated images lose frames

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #41265
- security-signal refs requiring route_security: #41265
- representative: #41256, currently open in local store
- latest member update: 2026-06-19T02:13:00.380105Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41256 [Bug]: Discord media uploads lose content-type and animated images lose frames

Existing-overlap context refs:

- #41265 [security-signal] fix(discord): preserve content-type and skip optimization for animated/WebP images
