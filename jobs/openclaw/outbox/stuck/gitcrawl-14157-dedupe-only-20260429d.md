---
repo: openclaw/openclaw
cluster_id: gitcrawl-14157-dedupe-only-20260429d
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
  - "#58591"
candidates:
  - "#39520"
  - "#39523"
  - "#49082"
  - "#50244"
  - "#50361"
  - "#50429"
  - "#51375"
  - "#58591"
cluster_refs:
  - "#39520"
  - "#39523"
  - "#49082"
  - "#50244"
  - "#50361"
  - "#50429"
  - "#51375"
  - "#58591"
  - "#70651"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #58591 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14157 on 2026-04-30."
---

# Gitcrawl Cluster 14157

Generated from local gitcrawl run cluster 14157 for `openclaw/openclaw`.

Display title:

> fix(feishu): pass mediaLocalRoots for reply attachments

Cluster shape from gitcrawl:

- total members: 9
- issues: 0
- pull requests: 9
- open candidates in local store: 8
- representative: #58591, currently open in local store
- latest member update: 2026-04-30T00:06:34.503494748Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #70651 fix(feishu): degrade gracefully when card table count exceeds platform limit (230099/11310)

Open candidates:

- #39520 feat(feishu): add localRoots configuration for media uploads and enhance media handling tests
- #39523 fix: support mediaLocalRoots config for Feishu channel
- #49082 fix(feishu): pass mediaLocalRoots to sendMediaFeishu in reply dispatcher
- #50244 feishu: log outbound reply delivery results
- #50361 [codex] normalize Feishu duplicate final dedupe
- #50429 fix(feishu): fall back to plain text when card delivery fails
- #51375 fix(feishu): pass mediaLocalRoots to enable local media file uploads
- #58591 fix(feishu): pass mediaLocalRoots for reply attachments
