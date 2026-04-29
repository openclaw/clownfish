---
repo: openclaw/openclaw
cluster_id: gitcrawl-238785-dedupe-only-20260429
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
  - "#57379"
candidates:
  - "#40207"
  - "#46153"
  - "#53475"
  - "#55880"
  - "#57052"
  - "#57379"
  - "#58041"
  - "#58306"
  - "#58890"
  - "#60885"
  - "#65971"
  - "#66390"
  - "#66436"
  - "#67335"
  - "#71060"
  - "#72948"
  - "#73132"
  - "#73303"
  - "#73520"
  - "#73673"
cluster_refs:
  - "#40207"
  - "#46153"
  - "#53475"
  - "#55880"
  - "#57052"
  - "#57379"
  - "#58041"
  - "#58306"
  - "#58890"
  - "#60885"
  - "#65971"
  - "#66390"
  - "#66436"
  - "#67335"
  - "#71060"
  - "#72948"
  - "#73132"
  - "#73303"
  - "#73520"
  - "#73673"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57379 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238785 on 2026-04-29."
---

# Gitcrawl Cluster 238785

Generated from local gitcrawl run cluster 238785 for `openclaw/openclaw`.

Display title:

> [Bug] Auto-upgrade v2026.3.24→2026.3.28: plist race condition kills gateway for 9+ hours on macOS (KeepAlive not respected)

Cluster shape from gitcrawl:

- total members: 20
- issues: 20
- pull requests: 0
- open candidates in local store: 20
- representative: #57379, currently open in local store
- latest member update: 2026-04-29T08:43:38.836Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40207 [Bug]: Gateway LaunchAgent crashes with EX_CONFIG when StandardOutPath targets ~/.openclaw/logs (symlinked/external volume)
- #46153 Gateway hangs silently on startup when launched by launchd (macOS)
- #53475 [Bug] macOS LaunchAgent gateway does not respawn after SIGTERM; launchd reports 'domain in on-demand-only mode'
- #55880 Scheduled auto-upgrade cron can fail without visible notification, and gateway recovery does not restore macOS LaunchAgent gateway
- #57052 [Bug]: Gateway shutdown timeout leaves lock file, preventing restart (macOS + Linux)
- #57379 [Bug] Auto-upgrade v2026.3.24→2026.3.28: plist race condition kills gateway for 9+ hours on macOS (KeepAlive not respected)
- #58041 Auto-update is not atomic: config/plugin version mismatch causes repeated crash loops
- #58306 [Bug]: Gateway process storm: KeepAlive + ThrottleInterval=1 causes 30+ zombie processes when port isn't released before restart
- #58890 [Bug] Auto-update subprocess crashes before restart handoff: piped stdout/stderr breaks when bootout kills parent gateway
- #60885 LaunchAgent: ThrottleInterval=1 causes unrecoverable gateway downtime after auto-update
- #65971 [Bug]:[macOS] Gateway stops processing messages after 15-20 minutes, requires restart
- #66390 [macOS] Gateway fails to start or crashes after `openclaw update` due to file lock conflicts during npm update
- #66436 ThrottleInterval 1s causes 37 MB error logs on missing config
- #67335 Bug: gateway LaunchAgent is sometimes removed from launchd domain and requires doctor/re-bootstrap
- #71060 gateway stop/restart can leave LaunchAgent unloaded (KeepAlive bypassed) when drain exceeds 1s
- #72948 openclaw gateway stop returns 'Gateway service disabled' without killing a foreground-launched gateway
- #73132 [Bug] openclaw gateway stop / launchctl bootout doesn't terminate underlying node process — wedged binary persists across stop
- #73303 v2026.4.26: gateway restart can hang ~3-4 min before new process starts
- #73520 [Bug] Stale plugin-runtime-deps causes Gateway crash-loop after openclaw update
- #73673 [Bug]: Gateway repeatedly restarts under launchd after crash, making it difficult to debug
