---
repo: openclaw/openclaw
cluster_id: gitcrawl-75-bulk-plan-20260615-a
mode: plan
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
  - "#83584"
candidates:
  - "#40440"
  - "#68374"
  - "#78495"
  - "#83584"
  - "#84803"
  - "#85401"
  - "#85765"
cluster_refs:
  - "#40440"
  - "#68374"
  - "#78495"
  - "#83584"
  - "#84803"
  - "#85401"
  - "#85765"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#83584"
canonical_hint: "gitcrawl representative #83584 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 75 on 2026-06-15. Security-signal refs #83584 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 75

Generated from local gitcrawl run cluster 75 for `openclaw/openclaw`.

Display title:

> [Bug]: Outbound MEDIA: directive on /v1/responses and /v1/chat/completions is passed through as raw text instead of translated to image_url / file content block

Cluster shape from gitcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 7
- security-signal refs requiring route_security: #83584
- representative: #83584, currently open in local store
- latest member update: 2026-06-14T04:46:07.385058Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40440 Telegram group chat history entries lose media data (only placeholder text preserved)
- #68374 [Feature]:  Expose claude-cli thinking blocks as reasoning on /v1/responses (and /v1/chat/completions)`
- #78495 docs: MEDIA: directive silently ignored when wrapped in markdown formatting
- #83584 [security-signal] [Bug]: Outbound MEDIA: directive on /v1/responses and /v1/chat/completions is passed through as raw text instead of translated to image_url / file content block
- #84803 WhatsApp group history drops media from unmentioned messages before later mention
- #85401 [Bug]: WhatsApp final reply MEDIA: directive can render as plain text for PDF/document attachments
- #85765 [Bug]: Telegram block streaming renders Anthropic thinking blocks AFTER the final assistant text on Claude Opus 4.7 (Anthropic Messages provider)
