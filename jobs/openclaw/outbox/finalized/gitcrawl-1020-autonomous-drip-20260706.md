---
repo: openclaw/openclaw
cluster_id: gitcrawl-1020-autonomous-drip-20260706
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
  - "#75852"
  - "#87314"
  - "#89785"
  - "#94476"
cluster_refs:
  - "#75852"
  - "#79099"
  - "#87314"
  - "#89785"
  - "#94476"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#45718"
  - "#54155"
  - "#55334"
  - "#56215"
  - "#71066"
  - "#71699"
  - "#77783"
  - "#79224"
  - "#79422"
  - "#79892"
  - "#84821"
  - "#84823"
  - "#84849"
  - "#84850"
  - "#85788"
  - "#86031"
  - "#86512"
  - "#86564"
  - "#86718"
  - "#86752"
  - "#87109"
  - "#87256"
  - "#88514"
  - "#89791"
  - "#89816"
  - "#91588"
  - "#92057"
  - "#93375"
  - "#93378"
  - "#93948"
  - "#94008"
  - "#94016"
  - "#94488"
  - "#94492"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#84823"
  - "#85788"
  - "#88514"
  - "#89816"
  - "#94492"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #54155 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1020 on 2026-07-06. Existing-overlap refs #45718, #54155, #55334, #56215, #71066, #71699, #77783, #79224, #79422, #79892, #84821, #84823, #84849, #84850, #85788, #86031, #86512, #86564, #86718, #86752, #87109, #87256, #88514, #89791, #89816, #91588, #92057, #93375, #93378, #93948, #94008, #94016, #94488, #94492 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1020

Generated from local gitcrawl run cluster 1020 for `openclaw/openclaw`.

Display title:

> Gateway memory leak: 389MB → 14.7GB over 4 days with session accumulation

Cluster shape from gitcrawl:

- total members: 39
- issues: 28
- pull requests: 11
- open candidates in local store: 4
- excluded existing-overlap refs: #45718, #54155, #55334, #56215, #71066, #71699, #77783, #79224, #79422, #79892, #84821, #84823, #84849, #84850, #85788, #86031, #86512, #86564, #86718, #86752, #87109, #87256, #88514, #89791, #89816, #91588, #92057, #93375, #93378, #93948, #94008, #94016, #94488, #94492
- security-signal refs requiring route_security: #84823, #85788, #88514, #89816, #94492
- representative: #54155, currently open in local store
- latest member update: 2026-06-19T02:13:01.194997Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #79099 Windows gateway probe still reports unreachable while gateway health is OK on 2026.5.6

Open candidates:

- #75852 [Bug]: Telegram polling self-conflicts on macOS 2026.4.29 even with a single local gateway process
- #87314 Gateway memory growth due to repeated file read errors
- #89785 [Bug]: Gateway crash-loops on a fixed interval under Telegram multi-account churn — health-monitor restart-cascade, often misread as config corruption
- #94476 [Bug] macOS PortGuardian kills valid launchd gateway when ps shows node dist/index.js gateway

Existing-overlap context refs:

- #45718 Session bloat: skillsSnapshot and systemPromptReport accumulated on every run
- #54155 Gateway memory leak: 389MB → 14.7GB over 4 days with session accumulation
- #55334 [perf]: sessions.json unbounded growth causes gateway OOM — skillsSnapshot duplicated per session, no pruning of ephemeral sessions
- #56215 Gateway WebSocket connections leak - CLOSE_WAIT/FIN_WAIT_2 zombie connections cause crashes
- #71066 Telegram subsystem: getUpdates polling silently non-functional despite reachable API
- #71699 [Bug]: Gateway hard-crashes with 0xC0000409 (STATUS_STACK_BUFFER_OVERRUN) on Windows during Mattermost streaming reply; auto-respawn frequently wedges
- #77783 [Bug] sessions.json can become 0 bytes (empty), breaking session aggregation with no recovery mechanism
- #79224 🐛 Bug: Auto-compaction triggers gateway crash loop — old process zombie-like after successful compaction
- #79422 [Bug]: Gateway CPU pegged at 100%+ continuously; gateway.err.log grows to 18-19 GB
- #79892 fix(daemon/launchd): cap unbounded gateway stdout/stderr log growth (refs #79422)
- #84821 [Bug]: tool and agent websocket events amplify during live tool output
- #84823 [security-signal] fix(gateway): dedupe live tool event mirrors
- #84849 [Bug]: Gateway background work causes high CPU and page fault churn
- #84850 [Bug]: Gateway pegs a CPU core during agent tool run with no read I/O
- #85788 [security-signal] Fix/spawned by cache leak
- #86031 [Bug]: Windows gateway listens but local health/status time out after Telegram polling stall (v2026.5.20)
- #86512 [Bug] v2026.5.22 启动后 Gateway CPU 持续 100%+，导致请求延迟飙升 50-100 倍
- #86564 fix(gateway): disable provider auth prewarm by default
- #86718 Gateway event loop starvation and HTTP/WS outage during sessions usage/cost under memory pressure
- #86752 [Bug]: 2026.5.22 Docker/WSL2 gateway event-loop starvation, 284s provider-auth prewarm, slow Telegram turn, and local RPC timeouts
- #87109 [Bug]: Gateway heap grows to 1073MB+ at idle on macOS, cron jobs fail silently under memory pressure (ref #86613, #86509)
- #87256 [Bug]: High idle CPU on macOS gateway, possibly related to chokidar awaitWriteFinish polling
- #88514 [security-signal] fix(gateway): avoid default provider auth startup prewarm
- #89791 5.26 supervisor mode + dual-plist install: 30s EADDRINUSE loop + silent-fail unset order
- #89816 [security-signal] docs(gateway): add launchd supervisor loop troubleshooting
- #91588 Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB over days, causing repeated OOM crashes
- #92057 Gateway becomes slow or times out under multi-session / multi-agent load
- #93375 [Bug]: Telegram polling enters silent crash loop after transient network timeout — health monitor cannot recover
- #93378 #93375: fix(telegram): recover from stale polling lease after crash loop
- #93948 fix(gateway): distinguish reachable-but-errored from unreachable in probe diagnostics
- #94008 [Bug]: Telegram channel stuck in "stopped" state after transient API outage — health monitor unable to recover
- #94016 fix: recover Telegram channel after stop timeout in health monitor
- #94488 fix(macos): allowlist Homebrew Node + git checkout gateway in PortGuardian
- #94492 [security-signal] fix(macos): prevent PortGuardian from killing launchd-managed gateway
