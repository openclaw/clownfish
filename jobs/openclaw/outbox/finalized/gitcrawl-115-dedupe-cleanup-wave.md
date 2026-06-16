---
repo: openclaw/openclaw
cluster_id: gitcrawl-115-dedupe-cleanup-wave
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
  - "#78165"
candidates:
  - "#77443"
  - "#78165"
  - "#78419"
  - "#78511"
  - "#80177"
cluster_refs:
  - "#77443"
  - "#78165"
  - "#78419"
  - "#78511"
  - "#80177"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #78165 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 115 on 2026-06-16."
---

# Gitcrawl Cluster 115

Generated from local gitcrawl run cluster 115 for `openclaw/openclaw`.

Display title:

> [Bug]: channels.whatsapp.start-account blocks event loop ~40s, triggering reconnect storm

Cluster shape from gitcrawl:

- total members: 5
- issues: 4
- pull requests: 1
- open candidates in local store: 5
- representative: #78165, currently open in local store
- latest member update: 2026-06-15T19:04:12.333681Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77443 [Bug]: WhatsApp event loop blocked (eventLoopDelayMaxMs=12088ms) on first inbound message — 2026.5.3-1 Windows
- #78165 [Bug]: channels.whatsapp.start-account blocks event loop ~40s, triggering reconnect storm
- #78419 [Bug]: WhatsApp health-monitor re-starts channels stopped by terminal DisconnectReason (loggedOut, connectionReplaced) — 12-channel multi-tenant restart loop, 12.9GB heap, 24s RPC latency on 2026.5.3-1
- #78511 fix(gateway): skip health-monitor restart for terminal WhatsApp disconnects
- #80177 [Bug]: WhatsApp dispatch ack timeout returns DISPATCHED-UNKNOWN while send actually succeeds (10s gateway WS deadline + start-account stall)
