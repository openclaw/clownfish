---
repo: openclaw/openclaw
cluster_id: gitcrawl-7997-dedupe-only-20260429d
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
  - "#52238"
candidates:
  - "#52238"
  - "#52342"
cluster_refs:
  - "#52238"
  - "#52342"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52238 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 7997 on 2026-04-30."
---

# Gitcrawl Cluster 7997

Generated from local gitcrawl run cluster 7997 for `openclaw/openclaw`.

Display title:

> 飞书话题群(Topic Group)被识别为p2p导致消息路由错误

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #52238, currently open in local store
- latest member update: 2026-04-29T23:07:50.610776889Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #52238 飞书话题群(Topic Group)被识别为p2p导致消息路由错误
- #52342 fix(feishu): treat OpenChat (oc_) topic groups as group chats
