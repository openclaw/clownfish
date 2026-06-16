---
repo: openclaw/openclaw
cluster_id: gitcrawl-111-dedupe-cleanup-wave
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
  - "#89846"
candidates:
  - "#53467"
  - "#82253"
  - "#89625"
  - "#89846"
  - "#91415"
cluster_refs:
  - "#53467"
  - "#82253"
  - "#89625"
  - "#89846"
  - "#91415"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #89846 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 111 on 2026-06-16."
---

# Gitcrawl Cluster 111

Generated from local gitcrawl run cluster 111 for `openclaw/openclaw`.

Display title:

> feat(slack): add ignoreOtherMentions config option for channels

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 5
- representative: #89846, currently open in local store
- latest member update: 2026-06-15T19:04:11.764743Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #53467 feat(slack): add ignoreOtherMentions channel config
- #82253 feat(slack): support per-channel replyToMode
- #89625 [Feature]: Support ignoreOtherMentions config option for Slack channels
- #89846 feat(slack): add ignoreOtherMentions config option for channels
- #91415 [Feature]: Discord: add option to ignore mass mentions (@everyone & @here) for requireMention
