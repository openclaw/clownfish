---
repo: openclaw/openclaw
cluster_id: gitcrawl-16-autonomous-issue-wave
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
canonical:
  - "#87928"
candidates:
  - "#43803"
  - "#54634"
  - "#79375"
  - "#82250"
  - "#83736"
  - "#83964"
  - "#84809"
  - "#85027"
  - "#85133"
  - "#85246"
  - "#85695"
  - "#86417"
  - "#87889"
  - "#87928"
  - "#88309"
  - "#92088"
cluster_refs:
  - "#43803"
  - "#54634"
  - "#75398"
  - "#79375"
  - "#82250"
  - "#83736"
  - "#83964"
  - "#84809"
  - "#85027"
  - "#85133"
  - "#85246"
  - "#85695"
  - "#86104"
  - "#86417"
  - "#87889"
  - "#87928"
  - "#88309"
  - "#90938"
  - "#92088"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#14526"
  - "#68257"
  - "#80140"
  - "#83489"
  - "#83698"
  - "#84275"
  - "#84334"
  - "#86130"
  - "#86913"
  - "#87968"
  - "#88224"
  - "#89484"
  - "#89517"
  - "#89526"
  - "#89858"
  - "#90305"
  - "#90946"
  - "#91221"
  - "#92111"
  - "#92868"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#43803"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #87928 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 16 on 2026-06-15. Security-signal refs #43803 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #14526, #68257, #80140, #83489, #83698, #84275, #84334, #86130, #86913, #87968, #88224, #89484, #89517, #89526, #89858, #90305, #90946, #91221, #92111, #92868 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 16

Generated from local gitcrawl run cluster 16 for `openclaw/openclaw`.

Display title:

> macOS update can leave manual-update loop and stale node host causing Gateway restart storm

Cluster shape from gitcrawl:

- total members: 39
- issues: 20
- pull requests: 19
- open candidates in local store: 16
- excluded existing-overlap refs: #14526, #68257, #80140, #83489, #83698, #84275, #84334, #86130, #86913, #87968, #88224, #89484, #89517, #89526, #89858, #90305, #90946, #91221, #92111, #92868
- security-signal refs requiring route_security: #43803
- representative: #87928, currently open in local store
- latest member update: 2026-06-15T11:49:41.395969Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #75398 [v29] CLI commands trigger gateway restart — "wait 5s and retry" takes over running gateway port
- #86104 macOS: launchctl submit can relaunch one-shot update jobs after clean exit
- #90938 macOS launchd update handoff can leave Gateway offline with stale restart pending state

Open candidates:

- #43803 [security-signal] [BUG] config.patch still sends SIGUSR1 for hot-reloadable paths (browser.profiles.*), bypassing reload mode
- #54634 Update 2026.3.24 silently drops config when HOME changes
- #79375 Upgrade leaves stale user-level systemd unit, dueling services kill each other on Linux
- #82250 macOS LaunchAgent KeepAlive=true restarts after clean already-running gateway exit
- #83736 [Bug]: Gateway should tolerate minor node version skew during subordinate node upgrades
- #83964 @openclaw/codex 2026.5.18 can fail with ERR_MODULE_NOT_FOUND for package 'openclaw' unless openclaw is installed locally
- #84809 [Data loss] 2026.5.19 update/backup flow removed ~/.openclaw/workspace and left plugin/npm state inconsistent
- #85027 [Bug] 2026.5.6 → 2026.5.19 upgrade left macOS LaunchAgent Gateway unrecoverable; Time Machine restore required
- #85133 Gateway launchd agent gets unloaded during self-update and never re-bootstrapped (macOS)
- #85246 UI Update button breaks Gateway when npm global + launchd (handoff deadlock)
- #85695 Invalid on-disk openclaw.json can brick managed gateway on next restart despite last-known-good
- #86417 macOS launchd Gateway still restarts via gateway-update/update.run; document and honor auto-update kill-switch
- #87889 Update from Dashboard skipped, works from CLI
- #87928 macOS update can leave manual-update loop and stale node host causing Gateway restart storm
- #88309 Restart race condition with LaunchAgent KeepAlive causes shutdown instead of restart
- #92088 Updater can leave managed gateway stopped when transient update handoff fails

Existing-overlap context refs:

- #14526 [security-signal] Proposal: safer self-update with pre-update backup + health check + auto-rollback/restore
- #68257 fix(gateway): stop restarting gateway on OAuth token refresh (auth.profiles.*) [AI-assisted]
- #80140 fix(gateway): add systemd watchdog heartbeat
- #83489 Fix gateway service startup race
- #83698 fix(gateway): rejected config.patch/apply never queues SIGUSR1 restart
- #84275 fix(codex): add openclaw runtime dependency
- #84334 fix(gateway): mark SIGUSR1 token consumed on restartIntent path, reset stale tokens on in-process restart
- #86130 fix(plugin-sdk): restore Codex task runtime export compat
- #86913 fix(gateway): expose restart pending state
- #87968 fix(ui): treat started managed-service handoff as pending update instead of skipped
- #88224 fix(update): prefer package root as managed-service handoff cwd (fixes #87889)
- #89484 Fix: gateway restart detects npm package version updates
- #89517 [security-signal] [codex] fix gateway hot-mode restart reloads
- #89526 [codex] fix gateway restart-required reload drift
- #89858 Fix systemd gateway unit scope conflicts
- #90305 [daemon] Preserve gateway drain during supervised restarts
- #90946 fix(infra): preserve inherited gateway PID across reparent during cleanup
- #91221 fix(daemon): detect and resolve dueling user+system systemd gateway units (#79375)
- #92111 fix(update): restart managed gateway when update handoff fails after stop
- #92868 fix(gateway): skip SIGUSR1 restart for browser.profiles config changes (fixes #43803)
