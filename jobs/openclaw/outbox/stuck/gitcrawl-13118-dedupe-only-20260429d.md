---
repo: openclaw/openclaw
cluster_id: gitcrawl-13118-dedupe-only-20260429d
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
  - "#68664"
candidates:
  - "#68664"
  - "#68685"
cluster_refs:
  - "#68664"
  - "#68685"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68664 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13118 on 2026-04-30."
---

# Gitcrawl Cluster 13118

Generated from local gitcrawl run cluster 13118 for `openclaw/openclaw`.

Display title:

> [Bug]: Config Migration Order Causes Service Failure on Schema Changes

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #68664, currently open in local store
- latest member update: 2026-04-24T18:56:19.631Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #68664 [Bug]: Config Migration Order Causes Service Failure on Schema Changes
- #68685 fix(config): strip obsolete memorySearch keys before schema validation (#68664)
