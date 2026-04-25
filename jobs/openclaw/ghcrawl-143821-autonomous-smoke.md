---
repo: openclaw/openclaw
cluster_id: ghcrawl-143821-autonomous-smoke
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
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#59951"
candidates:
  - "#53895"
  - "#58443"
  - "#58549"
  - "#58611"
  - "#59113"
  - "#59951"
  - "#60202"
  - "#61222"
  - "#61575"
  - "#64606"
  - "#65701"
cluster_refs:
  - "#40048"
  - "#40915"
  - "#53895"
  - "#54324"
  - "#54708"
  - "#54836"
  - "#56849"
  - "#58443"
  - "#58549"
  - "#58611"
  - "#59113"
  - "#59951"
  - "#60202"
  - "#61222"
  - "#61575"
  - "#61758"
  - "#64038"
  - "#64606"
  - "#65701"
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59951 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 143821 on 2026-04-25."
---

# GHCrawl Cluster 143821

Generated from local ghcrawl run cluster 143821 for `openclaw/openclaw`.

Display title:

> [Bug]: Duplicate Inbound Message Delivery

Cluster shape from ghcrawl:

- total members: 19
- issues: 19
- pull requests: 0
- open candidates in local store: 11
- representative: #59951, currently open in local store
- latest member update: 2026-04-25T17:12:54.250Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40048 [Bug]: WhatsApp messages sent twice - debounceMs not effective
- #40915 [Bug]: Telegram double messages (then 1 is deleted)
- #54324 [Bug] WhatsApp messages have duplicated content (repeated text)
- #54708 [Bug]: Message Loss on Telegram Network Failure
- #54836 [Bug]: WhatsApp: responses sent twice (duplicate messages) via webchat surface
- #56849 Bug: WhatsApp Gateway - Message Duplication and Loop After Credential Recovery
- #61758 [Bug] Duplicate message ingestion - inbound messages appear 2x in session context (Telegram)
- #64038 Bug: Telegram sendMessage retried without idempotency key causes duplicate messages

Open candidates:

- #53895 Outbound message retry queue for transient Telegram failures
- #58443 [Bug] Gateway duplicates inbound messages — same message injected multiple times into session
- #58549 Bug: Inbound messages re-delivered during API provider outage — missing message_id deduplication in gateway retry loop
- #58611 Telegram: Duplicate message storm during LLM API outages (missing message_id deduplication)
- #59113 [Bug]: Telegram inbound message duplication — no dedup on identical webhook deliveries
- #59951 [Bug]: Duplicate Inbound Message Delivery
- #60202 Duplicate message delivery on Telegram persists in 2026.4.2
- #61222 Duplicate inbound messages in Telegram group sessions (same message_id delivered twice)
- #61575 [Bug]: WhatsApp gateway message duplication on reconnection
- #64606 Duplicate Telegram message sent after provider timeout + retry
- #65701 [Bug]:  Telegram provider sends duplicate messages for every response
