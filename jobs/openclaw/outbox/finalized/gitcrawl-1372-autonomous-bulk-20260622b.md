---
repo: openclaw/openclaw
cluster_id: gitcrawl-1372-autonomous-bulk-20260622b
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
  - "#94255"
candidates:
  - "#94255"
cluster_refs:
  - "#94255"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#94257"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #94255 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1372 on 2026-06-22. Existing-overlap refs #94257 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1372

Generated from local gitcrawl run cluster 1372 for `openclaw/openclaw`.

Display title:

> Inbound MediaTypes/MediaUrls lose index-alignment: normalizeOptionalTextArray .filter(Boolean) compacts padded holes, mis-assigning attachment content-types in persisted transcripts

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #94257
- representative: #94255, currently open in local store
- latest member update: 2026-06-19T02:13:00.461538Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94255 Inbound MediaTypes/MediaUrls lose index-alignment: normalizeOptionalTextArray .filter(Boolean) compacts padded holes, mis-assigning attachment content-types in persisted transcripts

Existing-overlap context refs:

- #94257 fix(sessions): preserve Media* index alignment when reading user-turn fields
