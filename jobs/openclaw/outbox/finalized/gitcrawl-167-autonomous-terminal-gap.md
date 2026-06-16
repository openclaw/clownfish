---
repo: openclaw/openclaw
cluster_id: gitcrawl-167-autonomous-terminal-gap
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
canonical: []
candidates:
  - "#77702"
  - "#91383"
cluster_refs:
  - "#77702"
  - "#91383"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#72860"
  - "#75156"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #72860 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 167 on 2026-06-16. Existing-overlap refs #72860, #75156 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 167

Generated from local gitcrawl run cluster 167 for `openclaw/openclaw`.

Display title:

> Telegram ordinary assistant replies can lose image attachments while text still delivers

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 2
- excluded existing-overlap refs: #72860, #75156
- representative: #72860, currently closed in local store
- latest member update: 2026-06-15T19:04:12.288543Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77702 Telegram MEDIA directives with local image paths are sent as text instead of attachments
- #91383 Telegram normal reply can start mid-URL / lose opening text when message begins with Markdown links (2026.5.27)

Existing-overlap context refs:

- #72860 Telegram ordinary assistant replies can lose image attachments while text still delivers
- #75156 [Bug]: Telegram first assistant reply can deliver text but drop attachment when reply contains text + MEDIA:
