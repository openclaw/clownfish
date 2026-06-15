---
repo: openclaw/openclaw
cluster_id: gitcrawl-115-plan-ramp
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
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #78165 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 115 on 2026-06-14."
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
- latest member update: 2026-06-14T04:46:07.488926Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77443 [Bug]: WhatsApp event loop blocked (eventLoopDelayMaxMs=12088ms) on first inbound message — 2026.5.3-1 Windows
- #78165 [Bug]: channels.whatsapp.start-account blocks event loop ~40s, triggering reconnect storm
- #78419 [Bug]: WhatsApp health-monitor re-starts channels stopped by terminal DisconnectReason (loggedOut, connectionReplaced) — 12-channel multi-tenant restart loop, 12.9GB heap, 24s RPC latency on 2026.5.3-1
- #78511 fix(gateway): skip health-monitor restart for terminal WhatsApp disconnects
- #80177 [Bug]: WhatsApp dispatch ack timeout returns DISPATCHED-UNKNOWN while send actually succeeds (10s gateway WS deadline + start-account stall)
