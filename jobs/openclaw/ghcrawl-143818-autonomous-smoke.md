---
repo: openclaw/openclaw
cluster_id: ghcrawl-143818-autonomous-smoke
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
  - "#49751"
candidates:
  - "#48950"
  - "#49751"
  - "#51172"
  - "#52142"
  - "#54475"
  - "#54774"
  - "#56668"
  - "#57621"
  - "#60536"
  - "#62060"
  - "#65641"
  - "#66297"
cluster_refs:
  - "#44962"
  - "#45971"
  - "#46022"
  - "#46094"
  - "#46239"
  - "#46556"
  - "#48884"
  - "#48950"
  - "#49049"
  - "#49751"
  - "#51172"
  - "#52142"
  - "#54475"
  - "#54774"
  - "#56668"
  - "#57621"
  - "#60536"
  - "#62060"
  - "#65641"
  - "#66297"
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #49751 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 143818 on 2026-04-25."
---

# GHCrawl Cluster 143818

Generated from local ghcrawl run cluster 143818 for `openclaw/openclaw`.

Display title:

> fix: clear WS handshake timer early, increase timeouts

Cluster shape from ghcrawl:

- total members: 20
- issues: 0
- pull requests: 20
- open candidates in local store: 12
- representative: #49751, currently open in local store
- latest member update: 2026-04-25T11:13:36.107Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44962 fix(gateway): restore loopback handshake timeout budget (#44714)
- #45971 fix(gateway): increase client connect timeout to exceed server handshake timeout
- #46022 fix(gateway): increase client connect timeout to exceed server handshake timeout
- #46094 [AI-assisted] fix(gateway): preserve probe identity on authenticated loopback
- #46239 fix(gateway): retry transient local loopback handshake closures
- #46556 Fix local gateway detail probes on loopback
- #48884 fix: race condition in WebSocket handshake on Windows + Node.js v24
- #49049 fix: increase DEFAULT_HANDSHAKE_TIMEOUT_MS from 3s to 10s

Open candidates:

- #48950 fix(gateway): resolve {} empty auth trap causing scope rejection in loopback probes
- #49751 fix: clear WS handshake timer early, increase timeouts
- #51172 fix(gateway): enable device identity for loopback probes when token SecretRef is unresolved (#51016)
- #52142 fix(gateway): extend websocket handshake timeout for loopback clients
- #54475 fix(gateway): tolerate transient pre-hello closes in CLI calls
- #54774 fix(gateway): ignore transient pre-hello close in one-shot calls
- #56668 fix(gateway): add WebSocket ping keepalive to prevent idle connection drops
- #57621 fix(mattermost): add WebSocket ping/pong keepalive to detect silent connection drops
- #60536 fix(ws): downgrade internal health probe pre-handshake close from WARN to debug
- #62060 fix(gateway/ws): raise default pre-auth handshake timeout to 15s for slower local hosts
- #65641 Improve local gateway RPC diagnostics
- #66297 Gateway: retry Windows loopback CLI WS handshakes (#50380 #52424)
