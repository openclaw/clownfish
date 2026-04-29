---
repo: openclaw/openclaw
cluster_id: gitcrawl-238786-dedupe-only-20260429
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
  - "#58549"
candidates:
  - "#44930"
  - "#51182"
  - "#58443"
  - "#58549"
  - "#58611"
  - "#59113"
  - "#59132"
  - "#59331"
  - "#59951"
  - "#60202"
  - "#61575"
  - "#65701"
  - "#72176"
  - "#72536"
  - "#72702"
cluster_refs:
  - "#44930"
  - "#51182"
  - "#58443"
  - "#58549"
  - "#58611"
  - "#59113"
  - "#59132"
  - "#59331"
  - "#59951"
  - "#60202"
  - "#61575"
  - "#65701"
  - "#72176"
  - "#72536"
  - "#72702"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #58549 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238786 on 2026-04-29."
---

# Gitcrawl Cluster 238786

Generated from local gitcrawl run cluster 238786 for `openclaw/openclaw`.

Display title:

> Bug: Inbound messages re-delivered during API provider outage — missing message_id deduplication in gateway retry loop

Cluster shape from gitcrawl:

- total members: 15
- issues: 15
- pull requests: 0
- open candidates in local store: 15
- representative: #58549, currently open in local store
- latest member update: 2026-04-29T08:43:39.081Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44930 [BUG] Telegram messages silently dropped due to update offset race condition
- #51182 Telegram message replay after gateway restart despite offset file existing (regression from #739)
- #58443 [Bug] Gateway duplicates inbound messages — same message injected multiple times into session
- #58549 Bug: Inbound messages re-delivered during API provider outage — missing message_id deduplication in gateway retry loop
- #58611 Telegram: Duplicate message storm during LLM API outages (missing message_id deduplication)
- #59113 [Bug]: Telegram inbound message duplication — no dedup on identical webhook deliveries
- #59132 Retry storm: same inbound message replayed 94+ times causing excessive API usage ($149 in one day)
- #59331 Telegram: old messages reprocessed in loop after gateway restart (update_id offset not persisted)
- #59951 [Bug]: Duplicate Inbound Message Delivery
- #60202 Duplicate message delivery on Telegram persists in 2026.4.2
- #61575 [Bug]: WhatsApp gateway message duplication on reconnection
- #65701 [Bug]:  Telegram provider sends duplicate messages for every response
- #72176 [Bug]: Intermittent duplicate message delivery in 2026.4.24 across all channels
- #72536 [Bug]: Bug] WebChat channel sends duplicate messages causing double agent responses
- #72702 [Bug] Telegram messages delivered multiple times (duplicate message_id injection)
