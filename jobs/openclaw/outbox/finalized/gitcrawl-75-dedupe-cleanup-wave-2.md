---
repo: openclaw/openclaw
cluster_id: gitcrawl-75-dedupe-cleanup-wave-2
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
canonical: []
candidates:
  - "#78495"
cluster_refs:
  - "#78495"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#40440"
  - "#68374"
  - "#83584"
  - "#84803"
  - "#85401"
  - "#85765"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #83584 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 75 on 2026-06-16. Existing-overlap refs #40440, #68374, #83584, #84803, #85401, #85765 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 75

Generated from local gitcrawl run cluster 75 for `openclaw/openclaw`.

Display title:

> [Bug]: Outbound MEDIA: directive on /v1/responses and /v1/chat/completions is passed through as raw text instead of translated to image_url / file content block

Cluster shape from gitcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #40440, #68374, #83584, #84803, #85401, #85765
- representative: #83584, currently open in local store
- latest member update: 2026-06-15T19:04:12.653907Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #78495 docs: MEDIA: directive silently ignored when wrapped in markdown formatting

Existing-overlap context refs:

- #40440 Telegram group chat history entries lose media data (only placeholder text preserved)
- #68374 [Feature]:  Expose claude-cli thinking blocks as reasoning on /v1/responses (and /v1/chat/completions)`
- #83584 [security-signal] [Bug]: Outbound MEDIA: directive on /v1/responses and /v1/chat/completions is passed through as raw text instead of translated to image_url / file content block
- #84803 WhatsApp group history drops media from unmentioned messages before later mention
- #85401 [Bug]: WhatsApp final reply MEDIA: directive can render as plain text for PDF/document attachments
- #85765 [Bug]: Telegram block streaming renders Anthropic thinking blocks AFTER the final assistant text on Claude Opus 4.7 (Anthropic Messages provider)
