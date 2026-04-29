---
repo: openclaw/openclaw
cluster_id: ghcrawl-143796-telegram-polling-stall
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
  - "#63516"
candidates:
  - "#50174"
  - "#55727"
  - "#58064"
  - "#58230"
  - "#59833"
  - "#60088"
  - "#60400"
  - "#60646"
  - "#61195"
  - "#61273"
  - "#61712"
  - "#62031"
  - "#64178"
  - "#67034"
  - "#69147"
  - "#71066"
cluster_refs:
  - "#42100"
  - "#42782"
  - "#43233"
  - "#43479"
  - "#43569"
  - "#44396"
  - "#45650"
  - "#45714"
  - "#50174"
  - "#53493"
  - "#53721"
  - "#54513"
  - "#55032"
  - "#55304"
  - "#55727"
  - "#55844"
  - "#56518"
  - "#56566"
  - "#57040"
  - "#58064"
  - "#58230"
  - "#58951"
  - "#59198"
  - "#59332"
  - "#59833"
  - "#60088"
  - "#60400"
  - "#60646"
  - "#61195"
  - "#61273"
  - "#61712"
  - "#62031"
  - "#63516"
  - "#64178"
  - "#64288"
  - "#67034"
  - "#69064"
  - "#69147"
  - "#69304"
  - "#71066"
canonical_hint: "ghcrawl representative #63516 is closed; worker must verify whether an open canonical should replace it."
notes: "Smoke job generated from ghcrawl top size-sorted run cluster 143796 on 2026-04-25."
---

# GHCrawl Cluster 143796 Smoke

Top size-sorted local ghcrawl run cluster for `openclaw/openclaw`.

Display title:

> event-native-cable  [Bug]: Telegram polling stalls intermittently causing delayed/missed message delivery and heartbeat failures

Cluster shape from ghcrawl:

- total members: 40
- issues: 40
- pull requests: 0
- open candidates in local store: 16
- representative: #63516, currently closed in local store
- latest member update: 2026-04-25T11:56:13Z

## Goal

Smoke ProjectClownfish against a real high-volume ghcrawl cluster in read-only plan mode.

Classify the open candidate issues. Do not close anything. If #63516 is still the best canonical but already closed, report whether another open issue should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- #42100 macOS: Telegram polling stalls for 100s after sleep/wake or network change
- #42782 Add health-monitor auto-reconnect for Telegram polling
- #43233 Telegram polling stall detected; forcing restart
- #43479 Telegram long-polling stops receiving messages after connection drop
- #43569 409 Conflict loop when polling multiple Telegram bot accounts simultaneously
- #44396 Telegram polling stall causes significant message delivery delay
- #45650 Telegram polling stalls when AI provider returns overloaded_error
- #45714 Telegram provider stops polling for inbound messages while outbound still works
- #53493 Telegram channel stops initializing permanently after polling stall loop
- #53721 Telegram channel fails to initialize after gateway restart
- #54513 Telegram polling has no stall detection
- #55032 Slack and Telegram configured but no channel accounts loaded
- #55304 Telegram channels fail to initialize silently after gateway restart
- #55844 Channels not initializing on gateway startup
- #56518 Telegram channel not initializing on startup
- #56566 Telegram provider starts duplicate getUpdates polling loop
- #57040 Telegram channel registry stays empty after restart/update
- #58951 Persistent 409 getUpdates conflict
- #59198 Telegram getUpdates 409 conflict with multiple bot accounts
- #59332 Telegram polling watchdog feature
- #63516 Telegram polling stalls intermittently causing delayed/missed message delivery and heartbeat failures
- #64288 Telegram polling runner stopped
- #69064 Telegram stall auto-recovery completes silently without resuming polling
- #69304 Telegram inbound breaks after gateway restart/update with getUpdates 409 self-conflict

Open candidates:

- #50174 Windows native Telegram polling stalls every ~107s plus Discord disconnect restarts
- #55727 [Bug]:
- #58064 Discord/Telegram channels silently fail to initialize under LaunchAgent after restart
- #58230 gateway enters restart loop on Telegram provider startup in 2026.3.28
- #59833 Telegram polling stalls on startup in 2026.4.1 on WSL2
- #60088 Telegram Channel Stops Responding After First Message
- #60400 All channels silently fail to initialize on 2026.4.2
- #60646 Channels not loading in v2026.4.2
- #61195 Telegram provider silently fails to start on fresh gateway boots
- #61273 Telegram channel not initializing on 2026.4.2
- #61712 Telegram polling fails to start after gateway restart
- #62031 Telegram channel fails to initialize after gateway restart
- #64178 Telegram channel not loading in 2026.4.9 despite valid config
- #67034 Telegram multi-account polling avalanche
- #69147 Telegram long-poll stalls cause delayed or missing replies
- #71066 Telegram subsystem getUpdates polling silently non-functional despite reachable API
