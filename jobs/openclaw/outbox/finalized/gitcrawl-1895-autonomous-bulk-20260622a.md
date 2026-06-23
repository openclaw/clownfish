---
repo: openclaw/openclaw
cluster_id: gitcrawl-1895-autonomous-bulk-20260622a
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
  - "#48270"
  - "#53561"
  - "#58840"
cluster_refs:
  - "#39976"
  - "#45556"
  - "#45971"
  - "#45983"
  - "#45984"
  - "#46022"
  - "#46094"
  - "#46226"
  - "#46239"
  - "#46556"
  - "#47388"
  - "#48270"
  - "#48285"
  - "#48801"
  - "#48884"
  - "#49049"
  - "#50568"
  - "#51282"
  - "#51297"
  - "#53275"
  - "#53561"
  - "#54917"
  - "#58840"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#40413"
  - "#40624"
  - "#41027"
  - "#41030"
  - "#41420"
  - "#44962"
  - "#45712"
  - "#48950"
  - "#49751"
  - "#50046"
  - "#50751"
  - "#51172"
  - "#51252"
  - "#52142"
  - "#54475"
  - "#54692"
  - "#54774"
  - "#54847"
  - "#54945"
  - "#55042"
  - "#55540"
  - "#55719"
  - "#56486"
  - "#56493"
  - "#56568"
  - "#56664"
  - "#56840"
  - "#57603"
  - "#57781"
  - "#58216"
  - "#58988"
  - "#60536"
  - "#61134"
  - "#62060"
  - "#62451"
  - "#62721"
  - "#65084"
  - "#65355"
  - "#65641"
  - "#66297"
  - "#68213"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#50751"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #56486 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1895 on 2026-06-22. Existing-overlap refs #40413, #40624, #41027, #41030, #41420, #44962, #45712, #48950, #49751, #50046, #50751, #51172, #51252, #52142, #54475, #54692, #54774, #54847, #54945, #55042, #55540, #55719, #56486, #56493, #56568, #56664, #56840, #57603, #57781, #58216, #58988, #60536, #61134, #62060, #62451, #62721, #65084, #65355, #65641, #66297, #68213 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1895

Generated from local gitcrawl run cluster 1895 for `openclaw/openclaw`.

Display title:

> fix(discord): prevent gateway crash on health-monitor stale-socket restart

Cluster shape from gitcrawl:

- total members: 64
- issues: 2
- pull requests: 62
- open candidates in local store: 3
- excluded existing-overlap refs: #40413, #40624, #41027, #41030, #41420, #44962, #45712, #48950, #49751, #50046, #50751, #51172, #51252, #52142, #54475, #54692, #54774, #54847, #54945, #55042, #55540, #55719, #56486, #56493, #56568, #56664, #56840, #57603, #57781, #58216, #58988, #60536, #61134, #62060, #62451, #62721, #65084, #65355, #65641, #66297, #68213
- security-signal refs requiring route_security: #50751
- representative: #56486, currently closed in local store
- latest member update: 2026-06-19T08:04:27.03135917Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39976 fix(discord): honor threadId in extension outbound send paths
- #45556 fix: CLI WebSocket handshake timeout with --bind lan in 2026.3.12
- #45971 fix(gateway): increase client connect timeout to exceed server handshake timeout
- #45983 fix(gateway): increase local loopback probe budget to prevent false negative timeouts
- #45984 fix(gateway): increase local loopback probe budget to prevent false negative timeouts
- #46022 fix(gateway): increase client connect timeout to exceed server handshake timeout
- #46094 [AI-assisted] fix(gateway): preserve probe identity on authenticated loopback
- #46226 [Bug]: Gateway probe shows 3000ms budget but uses 800ms internally — false timeout on healthy local loopback
- #46239 fix(gateway): retry transient local loopback handshake closures
- #46556 Fix local gateway detail probes on loopback
- #47388 fix(gateway): handshake timeout + token-only scope grant (#47103, #48167)
- #48285 fix(gateway): allow loopback node-role sessions without device identity
- #48801 fix(cli): accept local policy closes during gateway restart health checks
- #48884 fix: race condition in WebSocket handshake on Windows + Node.js v24
- #49049 fix: increase DEFAULT_HANDSHAKE_TIMEOUT_MS from 3s to 10s
- #50568 fix(gateway): raise local loopback probe timeout from 800ms to 8s
- #51282 feat(gateway): make handshake timeout configurable via gateway.handshakeTimeoutMs
- #51297 fix(discord): add stopAccount to close stale WS on health-monitor restart
- #53275 fix(discord): add media-gallery and file block hints for models
- #54917 fix: resolve gateway handshake race with withProgress spinner

Open candidates:

- #48270 fix(gateway): prevent probe timeout from deferred ESM module evaluation
- #53561 fix gateway connect handshake timeout
- #58840 Improve gateway health URL override credential error

Existing-overlap context refs:

- #40413 fix(discord): persist hello-stall counter and add escalation across health-monitor restarts
- #40624 fix(discord): fallback to fresh identify after repeated 1005/1006 close loops
- #41027 fix(discord): break resume loop on consecutive 1005 close failures
- #41030 fix(gateway): avoid false stuck restarts with fresh events
- #41420 fix(discord): Discord WebSocket disconnects every 10-35 minutes conti…
- #44962 fix(gateway): restore loopback handshake timeout budget (#44714)
- #45712 fix(health-monitor): add reconnect grace period to prevent excessive Discord restarts
- #48950 fix(gateway): resolve {} empty auth trap causing scope rejection in loopback probes
- #49751 fix: clear WS handshake timer early, increase timeouts
- #50046 fix(discord): add WebSocket handshake timeout to prevent stuck reconnects
- #50751 [security-signal] fix(cli): resolve gateway host from bind mode and surface auth hint on silent disconnect
- #51172 fix(gateway): enable device identity for loopback probes when token SecretRef is unresolved (#51016)
- #51252 fix: prevent watchdog clock reset during reconnect stall cycles
- #52142 fix(gateway): extend websocket handshake timeout for loopback clients
- #54475 fix(gateway): tolerate transient pre-hello closes in CLI calls
- #54692 CLI: clarify gateway url override auth hints
- #54774 fix(gateway): ignore transient pre-hello close in one-shot calls
- #54847 fix(gateway): detect channels stuck before reporting connected (AI-assisted)
- #54945 fix(discord): catch gateway emitter errors to prevent whole-gateway crash on WebSocket failure
- #55042 fix(discord): suppress intentional reconnect exception during health monitor restart
- #55540 fix(discord): refresh lastEventAt from gateway metrics while connected
- #55719 fix(discord): prevent uncaught exception on stale-socket reconnect
- #56486 fix(discord): prevent gateway crash on health-monitor stale-socket restart
- #56493 fix(discord): prevent false stale-socket detection during connection idle periods
- #56568 fix(discord): harden reconnect shutdown and idle health
- #56664 fix(discord): handle reconnect-exhausted gracefully instead of crashing gateway
- #56840 fix(discord): use listener-stripping disconnect in abort handler to prevent crash
- #57603 fix(discord): treat reconnect-exhausted as clean stop to prevent gateway crash
- #57781 fix(discord): keep socket liveness from raw gateway traffic
- #58216 fix(discord): suppress reconnect-exhausted error during health-monitor stale-socket restart
- #58988 fix(discord): use safe disconnect in onAbort to prevent gateway crash
- #60536 fix(ws): downgrade internal health probe pre-handshake close from WARN to debug
- #61134 fix(discord): catch synchronous throw from Carbon during health-monitor abort
- #62060 fix(gateway/ws): raise default pre-auth handshake timeout to 15s for slower local hosts
- #62451 fix(discord): handle gateway registration failures
- #62721 fix(discord): remove leaked error listener on gateway supervisor dispose
- #65084 fix(discord): guard zombie gateway reconnects after close
- #65355 [Bug]: gateway probe false-negatives on remote configRemote because non-loopback targets are hard-capped to 1500ms
- #65641 Improve local gateway RPC diagnostics
- #66297 Gateway: retry Windows loopback CLI WS handshakes (#50380 #52424)
- #68213 fix(discord): treat heartbeat ACKs as liveness signal for stale-socket detection
