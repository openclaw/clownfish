---
repo: openclaw/openclaw
cluster_id: gitcrawl-283-close-canary-20260615-b
mode: execute
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
  - "#88307"
candidates:
  - "#87995"
  - "#88307"
  - "#88323"
cluster_refs:
  - "#87995"
  - "#88307"
  - "#88323"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #88307 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 283 on 2026-06-15."
---

# Gitcrawl Cluster 283

Generated from local gitcrawl run cluster 283 for `openclaw/openclaw`.

Display title:

> [Bug]: generated image completions still double-send Discord attachments after media handoff fix

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- representative: #88307, currently open in local store
- latest member update: 2026-06-14T04:46:06.658004Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87995 [Bug]: image_generate still duplicate-sends Discord attachments after terminal guard
- #88307 [Bug]: generated image completions still double-send Discord attachments after media handoff fix
- #88323 [codex] Dedupe generated media deliveries
