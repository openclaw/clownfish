---
repo: openclaw/openclaw
cluster_id: ghcrawl-143794-bug-macos-openclaw-gateway-restart-fails-when-invoked-from-agent
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
  - "#40306"
candidates:
  - "#40089"
  - "#46466"
  - "#53475"
  - "#53742"
  - "#54861"
  - "#57104"
  - "#57379"
  - "#58254"
  - "#60885"
  - "#61340"
  - "#63562"
  - "#64052"
  - "#67335"
  - "#70612"
  - "#71060"
cluster_refs:
  - "#40089"
  - "#40306"
  - "#40550"
  - "#40737"
  - "#41197"
  - "#41198"
  - "#41251"
  - "#41315"
  - "#41353"
  - "#41570"
  - "#41752"
  - "#41934"
  - "#42013"
  - "#43602"
  - "#44000"
  - "#44093"
  - "#44454"
  - "#44490"
  - "#44507"
  - "#44770"
  - "#45032"
  - "#46466"
  - "#47916"
  - "#48084"
  - "#48311"
  - "#53475"
  - "#53742"
  - "#54861"
  - "#55689"
  - "#56716"
  - "#57104"
  - "#57379"
  - "#58254"
  - "#60885"
  - "#61340"
  - "#63562"
  - "#64052"
  - "#67335"
  - "#70612"
  - "#71060"
canonical_hint: "ghcrawl representative #40306 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143794 on 2026-04-25."
---

# GHCrawl Cluster 143794

Generated from local ghcrawl run cluster 143794 for `openclaw/openclaw`.

Display title:

> [Bug]: macOS openclaw gateway restart fails when invoked from agent/tool-driven automation; manual Terminal restart can work, recovery requires openclaw gateway install

Cluster shape from ghcrawl:

- total members: 40
- issues: 40
- pull requests: 0
- open candidates in local store: 15
- representative: #40306, currently closed in local store
- latest member update: 2026-04-25T11:56:54.695Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- #40306 [Bug]: macOS openclaw gateway restart fails when invoked from agent/tool-driven automation; manual Terminal restart can work, recovery requires openclaw gateway install
- #40550 [Bug] openclaw gateway stop/start fails to recover on macOS 26 — service removed but never re-registered
- #40737 macOS: gateway restart can leave LaunchAgent not loaded; prefer kickstart-first for loaded services
- #41197 [Bug] openclaw update does not restart gateway automatically
- #41198 Gateway restart from agent exec kills gateway without recovery (bootout before bootstrap)
- #41251 gateway restart unloads launchd service and fails to reload
- #41315 [Bug]: macOS LaunchAgent restart instability: gateway restart often leaves service not loaded; install+restart required
- #41353 From @Krill: `openclaw gateway restart` should attempt bootstrap when plist exists but service isn’t loaded (macOS launchd)
- #41570 gateway restart fails - launchd service not found
- #41752 [BUG] gateway restart via exec tool stops Gateway but LaunchAgent does not auto-restart (macOS, v2026.3.7)
- #41934 [macOS] Gateway fails to auto-restart after config-triggered SIGTERM — LaunchAgent becomes unloaded
- #42013 macOS: gateway install writes KeepAlive={SuccessfulExit:false} but supervisor restart relies on launchd to re-launch the process
- #43602 [Bug]: LaunchAgent silently unloads after macOS sleep/idle — gateway start/restart fail until re-install
- #44000 [Bug]: Agent fails to restart gateway due to self-termination ("Suicide Paradox")
- #44093 [Bug]: Gateway Crash And Removed After Restart Command
- #44454 Bug: `openclaw gateway restart` leaves gateway down for extended periods without error
- #44490 [Bug]: openclaw gateway restart fails to restart service (SIGTERM instead of SIGUSR1)
- #44507 openclaw gateway restart fails to restart service (SIGTERM instead of SIGUSR1)
- #44770 [Bug]: Gateway restart fails when executed from agent context (child process dies before completing restart sequence)
- #45032 update.run can leave macOS Gateway LaunchAgent in a "service not loaded" state after restart
- #47916 openclaw gateway restart fails on macOS due to KeepAlive=true in LaunchAgent
- #48084 [Bug]: openclaw gateway restart unregisters LaunchAgent and TUI fails to reconnect (macOS)
- #48311 [Bug]: `gateway start` fails after `gateway stop` is run (LaunchAgent unloaded instead of paused)
- #55689 [Bug]: Gateway restart fails when executed from agent context on Windows (schtasks)
- #56716 LaunchAgent not auto-recovering after gateway SIGTERM / full service unload

Open candidates:

- #40089 Gateway restart (update.run) can leave service dead: bootout without bootstrap
- #46466 [Bug]: Gateway install failed: Error: launchctl bootstrap failed: Bootstrap failed: 125: Domain does not support specified action for mac
- #53475 [Bug] macOS LaunchAgent gateway does not respawn after SIGTERM; launchd reports 'domain in on-demand-only mode'
- #53742 Bug: macOS gateway install --force resolves SecretRef values into plaintext LaunchAgent plist and triggers token mismatch loop
- #54861 Gateway silently dies after auto-update: launchd removes service due to rapid restart cycle
- #57104 gateway install --force keeps stale embedded OPENCLAW_GATEWAY_TOKEN in systemd unit
- #57379 [Bug] Auto-upgrade v2026.3.24→2026.3.28: plist race condition kills gateway for 9+ hours on macOS (KeepAlive not respected)
- #58254 [Bug]: gateway fails to restart after auto-update on macOS (launchd ThrottleInterval race)
- #60885 LaunchAgent: ThrottleInterval=1 causes unrecoverable gateway downtime after auto-update
- #61340 Bug: gateway install --force persists secrets into user systemd unit files
- #63562 Bug: openclaw update may stop Gateway without reliable auto-recovery in 2026.4.9
- #64052 [Bug]: gateway install --force still generates unusable launchd service on macOS 2026.4.9; manual gateway works
- #67335 Bug: gateway LaunchAgent is sometimes removed from launchd domain and requires doctor/re-bootstrap
- #70612 [Bug]: gateway install --force does not remove embedded service token in 2026.4.21
- #71060 gateway stop/restart can leave LaunchAgent unloaded (KeepAlive bypassed) when drain exceeds 1s
