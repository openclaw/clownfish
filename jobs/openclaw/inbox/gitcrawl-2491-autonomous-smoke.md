---
repo: openclaw/openclaw
cluster_id: gitcrawl-2491-autonomous-smoke
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
  - "#53917"
candidates:
  - "#51347"
cluster_refs:
  - "#51347"
  - "#53917"
  - "#57156"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #53917 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2491 on 2026-06-14."
---

# Gitcrawl Cluster 2491

Generated from local gitcrawl run cluster 2491 for `openclaw/openclaw`.

Display title:

> Feishu: mediaLocalRoots not passed to sendMediaFeishu, blocking local image sends

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #53917, currently closed in local store
- latest member update: 2026-06-08T05:43:46.143283296Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #53917 Feishu: mediaLocalRoots not passed to sendMediaFeishu, blocking local image sends
- #57156 Feature Request: Add mediaLocalRoots support to Feishu/Lark Plugin

Open candidates:

- #51347 Bug:  ignores  config and returns success on media failure
