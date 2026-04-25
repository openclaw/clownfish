---
repo: openclaw/openclaw
cluster_id: ghcrawl-143790-discord-health-monitor-restart-crashes-gateway-with-max-reconnec
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
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#56184"
candidates:
  - "#38596"
  - "#41354"
  - "#53168"
  - "#57111"
  - "#57195"
  - "#57291"
  - "#57666"
  - "#57731"
  - "#59927"
  - "#61124"
  - "#64201"
cluster_refs:
  - "#38596"
  - "#39096"
  - "#39288"
  - "#40073"
  - "#41339"
  - "#41354"
  - "#44227"
  - "#44529"
  - "#45485"
  - "#47535"
  - "#49051"
  - "#53168"
  - "#54230"
  - "#54682"
  - "#54752"
  - "#54851"
  - "#55763"
  - "#56057"
  - "#56086"
  - "#56137"
  - "#56184"
  - "#56235"
  - "#56274"
  - "#56339"
  - "#56351"
  - "#56399"
  - "#56472"
  - "#56588"
  - "#56644"
  - "#56732"
  - "#56816"
  - "#56833"
  - "#57111"
  - "#57195"
  - "#57291"
  - "#57666"
  - "#57731"
  - "#59927"
  - "#61124"
  - "#64201"
canonical_hint: "ghcrawl representative #56184 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143790 on 2026-04-25."
---

# GHCrawl Cluster 143790

Generated from local ghcrawl run cluster 143790 for `openclaw/openclaw`.

Display title:

> Discord health-monitor restart crashes gateway with Max reconnect attempts (0) reached

Cluster shape from ghcrawl:

- total members: 40
- issues: 40
- pull requests: 0
- open candidates in local store: 11
- representative: #56184, currently closed in local store
- latest member update: 2026-04-25T11:56:54.731Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- #39096 Discord: health-monitor 'stuck' detection triggers excessive false-positive reconnects
- #39288 Discord WebSocket drops every ~15 minutes with code 1006, resume fails with 1005
- #40073 Discord health-monitor false positive: stale-socket restart kills inbound before first event (2026.3.7)
- #41339 Discord WebSocket disconnects every 10-35 minutes continuously
- #44227 Discord WebSocket disconnects with code 1005 every 10-15 minutes, triggering health-monitor restarts
- #44529 [Bug]: Gateway crashes with unhandled promise rejection when Discord API returns 503 during health-monitor bot reconnect
- #45485 [Bug]: Discord Websocket Times Out Every 10 Minutes
- #47535 Discord WebSocket stale-socket restart loop on v2026.3.13 — multi-account setup, VPS/Linux
- #49051 [Bug]: Plugin runtime WebSocket race condition crashes gateway on startup
- #54230 Discord health monitor: channel-only reconnect instead of full gateway restart
- #54682 Discord WebSocket connection drops and fails to reconnect silently
- #54752 Discord channel: uncaught exceptions crash gateway on network hiccups
- #54851 [Bug]: Discord stale-socket health-monitor recoveries are frequent and restart scope is unclear
- #55763 Discord WebSocket drops ~hourly with stale-socket; messages lost during reconnect window
- #56057 [Bug]: Channel WebSocket abnormal closure (Discord + Telegram) crashes entire gateway process
- #56086 Discord health-monitor: stale-socket triggers full gateway restart instead of surgical reconnect
- #56137 Gateway crashes on config reload: unhandled reconnect-exhausted error during abort
- #56184 Discord health-monitor restart crashes gateway with Max reconnect attempts (0) reached
- #56235 Discord health-monitor stale-socket restart causes uncaught exception crash (code 1005)
- #56274 [Bug]: Discord WebSocket stale-socket causes full gateway crash (no reconnect, uncaught exception loop)
- #56339 Discord health-monitor stale-socket restart causes uncaught exception that crashes the entire gateway
- #56351 Uncaught exception: Max reconnect attempts reached after code 1005 crashes gateway (v2026.3.24)
- #56399 [Bug]: Discord WebSocket crash — `Max reconnect attempts (0)` kills gateway process
- #56472 Discord gateway still crashes with maxReconnectAttempts (0) despite fix in #11836
- #56588 [Bug]: Discord provider crashes entire gateway process on reconnect failure — hardcoded 0 max reconnect attempts
- #56644 Discord health-monitor teardown crashes entire gateway (Max reconnect attempts 0)
- #56732 Discord gateway crashes ~25x/day: abort handler sets maxAttempts=0 on WebSocket code 1005
- #56816 Gateway crashes on provider WebSocket disconnect (code 1005) — no reconnect attempt
- #56833 Bug: SafeGatewayPlugin crashes on code 1005 when abortSignal fires (maxAttempts=0 sentinel collision)

Open candidates:

- #38596 Discord: health monitor restart loop — post-connection zombie sessions evade circuit breakers
- #41354 Discord plugin disconnects every ~10-15 minutes (health-monitor restart loop)
- #53168 [Bug]: CLI commands crash gateway via WebSocket handshake timeout
- #57111 [Bug]: health-monitor stale-socket restart causes uncaught exception crash (Discord provider)
- #57195 Discord gateway crashes on WS close code 1005 due to race condition in abort/reconnect path
- #57291 [Bug]: Gateway crashes with uncaught exception on Discord WebSocket stale-socket reconnect (code 1005)
- #57666 Discord SafeGatewayPlugin: uncaught error during health monitor teardown causes gateway crash-loop
- #57731 [Bug]: Discord plugin aggressively drops connections (stale-socket) causing delayed and duplicated messages
- #59927 Gateway crash: race condition causes maxAttempts=0 exception on disconnect
- #61124 Discord reconnect-exhausted error crashes gateway during health-monitor restart
- #64201 [Bug]: OpenClaw: Crash loop on plugin config reload (ECONNREFUSED on loopback port 18789)
