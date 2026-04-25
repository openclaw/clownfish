---
repo: openclaw/openclaw
cluster_id: ghcrawl-143813-autonomous-smoke
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
  - "#41330"
candidates:
  - "#41330"
  - "#58695"
  - "#58794"
  - "#59354"
  - "#59363"
  - "#59860"
  - "#59973"
  - "#60045"
  - "#60429"
  - "#60525"
  - "#60940"
  - "#61312"
  - "#61445"
  - "#61889"
  - "#63544"
  - "#65420"
cluster_refs:
  - "#41330"
  - "#53582"
  - "#58695"
  - "#58794"
  - "#59354"
  - "#59363"
  - "#59860"
  - "#59973"
  - "#60045"
  - "#60429"
  - "#60525"
  - "#60940"
  - "#61312"
  - "#61445"
  - "#61821"
  - "#61889"
  - "#61940"
  - "#63386"
  - "#63405"
  - "#63544"
  - "#63623"
  - "#65420"
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #41330 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 143813 on 2026-04-25."
---

# GHCrawl Cluster 143813

Generated from local ghcrawl run cluster 143813 for `openclaw/openclaw`.

Display title:

> iMessage channel duplicate message loop - messages sent by agent are re-ingested as inbound

Cluster shape from ghcrawl:

- total members: 22
- issues: 22
- pull requests: 0
- open candidates in local store: 16
- representative: #41330, currently open in local store
- latest member update: 2026-04-25T17:12:54.249Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #53582 [Bug]: iMessage self-chat creates message loop causing NO_REPLY behavior
- #61821 iMessage echo loop: NSAttributedString garbage bytes cause echo cache miss for is_from_me messages
- #61940 iMessage plugin echo loop: outbound messages treated as inbound
- #63386 iMessage echo loop: is_from_me messages not filtered correctly, bot responds to its own sent messages
- #63405 [Bug]: iMessage echo loop — agent replies re-ingested as inbound messages (reproduces on 2026.4.5 and 2026.4.8)
- #63623 [Bug]: iMessage inbound source misclassification causes self-message replay (assistant outbound treated as user inbound)

Open candidates:

- #41330 iMessage channel duplicate message loop - messages sent by agent are re-ingested as inbound
- #58695 iMessage plugin: own sent messages echo back as inbound (is_from_me not filtered)
- #58794 iMessage channel: self-sent messages (is_from_me=true) echoed back as inbound
- #59354 [Bug]: iMessage file-only outbound messages bypass echo detection and trigger auto-response
- #59363 [Bug]: imessage echo loop
- #59860 iMessage self-chat echo suppression fails: message-ID short-circuit prevents text-based fallback match
- #59973 iMessage DM echo: corrupted prefix breaks text-based dedup (v2026.3.31+)
- #60045 iMessage echo loop: agent's own outbound responses re-delivered as inbound messages
- #60429 iMessage plugin echoes own outbound messages as inbound
- #60525 iMessage: is_from_me:true messages mis-attributed + attributedBody garbage prefixes + echo into inbound queue
- #60940 iMessage (imsg): sent messages with is_from_me=true echoed back as inbound to session
- #61312 iMessage echo loop in self-chat: U+FFFD from attributedBody breaks echo cache text matching
- #61445 [Bug]: iMessage echo loop on gateway restart — echo cache not warmed, self-messages replay as inbound
- #61889 iMessage: messages incorrectly dropped when is_from_me=true but isSelfChat=false
- #63544 iMessage echo detection fails when echoed message has NUL (\0) prefix
- #65420 iMessage (imsg) channel: Echo loop when agent replies in DM - is_from_me filtering not working
