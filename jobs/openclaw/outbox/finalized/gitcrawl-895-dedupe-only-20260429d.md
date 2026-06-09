---
repo: openclaw/openclaw
cluster_id: gitcrawl-895-dedupe-only-20260429d
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
  - "#68621"
candidates:
  - "#68621"
  - "#71862"
cluster_refs:
  - "#68621"
  - "#71862"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68621 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 895 on 2026-04-30."
---

# Gitcrawl Cluster 895

Generated from local gitcrawl run cluster 895 for `openclaw/openclaw`.

Display title:

> feat(hooks): allow model hooks to prefer auth profiles

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #68621, currently open in local store
- latest member update: 2026-04-27T22:51:36.633978156Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #68621 feat(hooks): allow model hooks to prefer auth profiles
- #71862 feat(plugins): let model resolve hooks prefer auth profiles
