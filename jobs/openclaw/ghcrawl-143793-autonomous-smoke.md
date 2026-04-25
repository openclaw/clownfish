---
repo: openclaw/openclaw
cluster_id: ghcrawl-143793-autonomous-smoke
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
  - "#62258"
candidates:
  - "#45474"
  - "#46518"
  - "#47367"
  - "#49057"
  - "#50684"
  - "#51111"
  - "#57718"
  - "#58480"
  - "#59589"
  - "#60136"
  - "#60626"
  - "#61663"
  - "#61744"
  - "#63410"
  - "#63855"
  - "#65290"
  - "#66917"
  - "#66920"
  - "#70678"
  - "#70856"
cluster_refs:
  - "#40079"
  - "#45198"
  - "#45474"
  - "#46372"
  - "#46518"
  - "#47154"
  - "#47367"
  - "#47527"
  - "#49057"
  - "#50684"
  - "#51111"
  - "#54322"
  - "#54332"
  - "#54614"
  - "#55030"
  - "#55246"
  - "#55752"
  - "#56054"
  - "#57718"
  - "#58480"
  - "#59107"
  - "#59275"
  - "#59589"
  - "#60136"
  - "#60337"
  - "#60378"
  - "#60626"
  - "#61326"
  - "#61663"
  - "#61744"
  - "#62258"
  - "#63410"
  - "#63496"
  - "#63855"
  - "#64553"
  - "#65290"
  - "#66917"
  - "#66920"
  - "#70678"
  - "#70856"
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #62258 is closed; worker must verify whether an open canonical should replace it before any close action."
notes: "Autonomous smoke job derived from ghcrawl run cluster 143793 on 2026-04-25."
---

# GHCrawl Cluster 143793 Autonomous Smoke

Display title:

> WhatsApp 499 reconnection loop: inactivity timer not reset after successful reconnect

Run one live autonomous smoke pass. Classify the open candidate issues, verify live GitHub state, choose the current canonical issue if the closed representative is obsolete, and emit only high-confidence close/comment/label actions.

Do not create a fix PR, merge a PR, or close anything unless the canonical path is explicit and the item is a direct duplicate of that path. Preserve distinct WhatsApp subfamilies such as QR pairing, creds corruption, stale sockets, keepalive timeout, and group inbound loss as related or `needs_human` unless the duplicate evidence is direct.

Open candidates:

- #45474 linked/OK but inbound messages are not delivered with reconnect loop
- #46518 QR pairing fails silently
- #47367 QR not showing
- #49057 listener flaps / logs out causing cron and delivery failures
- #50684 messages dropped during 503 reconnect window
- #51111 QR login appears linked briefly, then disconnected
- #57718 creds.json repeatedly restored from backup
- #58480 creds.json corrupted on every reconnect
- #59589 cascading reconnects every 30 minutes after idle
- #60136 credentials corrupted during pre-key rotation
- #60626 reconnect loop lacks exponential backoff after status 499
- #61663 QR Code Refresh
- #61744 links successfully, peers/groups empty, reconnects with status 499
- #63410 persistent 408 session timeout loop
- #63855 stale socket causes silent message loss
- #65290 creds.json corruption/reconnect loop
- #66917 persistent 408/499 disconnects and group inbound failure
- #66920 group inbound messages silently drop after repeated 408 cycles
- #70678 channel force-reconnects every 30 minutes on quiet-device sessions
- #70856 listener repeatedly disconnects/stalls on Windows
