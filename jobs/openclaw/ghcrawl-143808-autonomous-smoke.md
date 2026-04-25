---
repo: openclaw/openclaw
cluster_id: ghcrawl-143808-autonomous-smoke
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
  - "#39743"
candidates:
  - "#42751"
  - "#58569"
  - "#60930"
  - "#61508"
  - "#66176"
  - "#66274"
  - "#66597"
  - "#66598"
  - "#66762"
  - "#66875"
  - "#67081"
  - "#67412"
  - "#67582"
  - "#67806"
  - "#67961"
  - "#67999"
  - "#70702"
cluster_refs:
  - "#39743"
  - "#40960"
  - "#42751"
  - "#44619"
  - "#46103"
  - "#47756"
  - "#56645"
  - "#58569"
  - "#60930"
  - "#61508"
  - "#64771"
  - "#66176"
  - "#66274"
  - "#66597"
  - "#66598"
  - "#66762"
  - "#66875"
  - "#67081"
  - "#67412"
  - "#67582"
  - "#67806"
  - "#67961"
  - "#67999"
  - "#70702"
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #39743 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143808 on 2026-04-25."
---

# GHCrawl Cluster 143808

Generated from local ghcrawl run cluster 143808 for `openclaw/openclaw`.

Display title:

> [Bug]: Webchat messages not updating in real-time, require page refresh to see new messages

Cluster shape from ghcrawl:

- total members: 24
- issues: 24
- pull requests: 0
- open candidates in local store: 17
- representative: #39743, currently closed in local store
- latest member update: 2026-04-25T17:12:54.168Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39743 [Bug]: Webchat messages not updating in real-time, require page refresh to see new messages
- #40960 [Bug]: Chat page does not auto-refresh new messages
- #44619 WebChat UI does not receive real-time updates from other channels
- #46103 [Bug]: WebSocket continuously disconnects and reconnects
- #47756 [Control UI] 消息不实时推送，需要刷新页面才能看到新内容
- #56645 [Bug]: WebSocket webchat connections drop with code 1006 during long tool calls — no server-side ping/keepalive
- #64771 [Bug]: Chat disconnects after some time in Control UI — forces page refresh

Open candidates:

- #42751 WebChat UI: Messages not refreshing in real-time, requires manual refresh
- #58569 Webchat long-running task completions often don't surface until refresh; embedded agent WS stream falls back with HTTP 500
- #60930 [Bug]: Control UI / WebChat local websocket disconnects with code=1001 during long-running tasks; reconnect recovers via chat.history instead of stable live updates
- #61508 WebChat WebSocket drops (1006) during long model turns — missing keepalive pings
- #66176 [Bug]: WebChat briefly hides newly sent message before it reappears
- #66274 Webchat flickers when lossless-claw plugin fires session.message events
- #66597 [webchat] User message flickers after sending (v2026.4.12)
- #66598 **Bug: Webchat message flickers after sending (v2026.4.12)**
- #66762 WebChat: full chat.history re-fetch on every message causes UI flicker
- #66875 Webchat race: chat final / session.message / sessions.changed triggers eager chat.history reload, causing flicker, collapse, or duplicate bubbles
- #67081 Webchat: user message not displayed immediately after sending, only appears after assistant response
- #67412 Control UI: Sent message briefly disappears then reappears (sometimes stays hidden)
- #67582 Webchat: User messages not visible immediately after sending (optimistic rendering missing)
- #67806 [Bug]: Control UI: sent messages don't render until hard refresh
- #67961 Bug: User messages not displayed immediately in Control UI (optimistic update lost after history reload)
- #67999 Control UI doesn't render new messages dynamically — requires hard refresh
- #70702 Control UI: assistant messages don't render until page reload
