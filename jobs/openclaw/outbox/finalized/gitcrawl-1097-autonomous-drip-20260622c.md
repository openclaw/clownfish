---
repo: openclaw/openclaw
cluster_id: gitcrawl-1097-autonomous-drip-20260622c
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
  - "#87156"
cluster_refs:
  - "#87156"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#42252"
  - "#70788"
  - "#83489"
  - "#83560"
  - "#83698"
  - "#83736"
  - "#83862"
  - "#84001"
  - "#84012"
  - "#84280"
  - "#84334"
  - "#84600"
  - "#84698"
  - "#85002"
  - "#85133"
  - "#85246"
  - "#85695"
  - "#86417"
  - "#86913"
  - "#87889"
  - "#87928"
  - "#87968"
  - "#87993"
  - "#88224"
  - "#88292"
  - "#88311"
  - "#88361"
  - "#89231"
  - "#89380"
  - "#89484"
  - "#90502"
  - "#90512"
  - "#90946"
  - "#91249"
  - "#91273"
  - "#92088"
  - "#92111"
  - "#92726"
  - "#94149"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#83560"
  - "#83736"
  - "#91249"
  - "#92726"
  - "#94149"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #84334 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1097 on 2026-06-22. Existing-overlap refs #42252, #70788, #83489, #83560, #83698, #83736, #83862, #84001, #84012, #84280, #84334, #84600, #84698, #85002, #85133, #85246, #85695, #86417, #86913, #87889, #87928, #87968, #87993, #88224, #88292, #88311, #88361, #89231, #89380, #89484, #90502, #90512, #90946, #91249, #91273, #92088, #92111, #92726, #94149 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1097

Generated from local gitcrawl run cluster 1097 for `openclaw/openclaw`.

Display title:

> fix(gateway): mark SIGUSR1 token consumed on restartIntent path, reset stale tokens on in-process restart

Cluster shape from gitcrawl:

- total members: 40
- issues: 19
- pull requests: 21
- open candidates in local store: 1
- excluded existing-overlap refs: #42252, #70788, #83489, #83560, #83698, #83736, #83862, #84001, #84012, #84280, #84334, #84600, #84698, #85002, #85133, #85246, #85695, #86417, #86913, #87889, #87928, #87968, #87993, #88224, #88292, #88311, #88361, #89231, #89380, #89484, #90502, #90512, #90946, #91249, #91273, #92088, #92111, #92726, #94149
- security-signal refs requiring route_security: #83560, #83736, #91249, #92726, #94149
- representative: #84334, currently open in local store
- latest member update: 2026-06-19T02:13:01.205841Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87156 [Bug]: Windows doctor update leaves Startup-folder gateway fallback stale and does not install Scheduled Task

Existing-overlap context refs:

- #42252 Improve doctor/gateway diagnostics clarity for mixed LaunchAgent/runtime states
- #70788 fix(windows): suppress startup-folder cmd window flash via wscript silent launcher
- #83489 Fix gateway service startup race
- #83560 [security-signal] [Bug]: openclaw configure hangs after gateway mode selection and leaves high-CPU child process
- #83698 fix(gateway): rejected config.patch/apply never queues SIGUSR1 restart
- #83736 [security-signal] [Bug]: Gateway should tolerate minor node version skew during subordinate node upgrades
- #83862 fix(cli): add configure and onboard to interactive TTY command skip list
- #84001 Windows: openclaw status / status --json hangs in 2026.5.18 while status --all succeeds
- #84012 openclaw status CLI command hangs before connecting to gateway (v2026.5.18)
- #84280 fix: handle SIGUSR1 restart on Windows where the signal is unsupported
- #84334 fix(gateway): mark SIGUSR1 token consumed on restartIntent path, reset stale tokens on in-process restart
- #84600 Bug: Windows heartbeat cmd window not hidden - 'findstr /I /C:"Running"' stays visible
- #84698 [Bug]: openclaw status hangs and times out — regression from 2026.5.7
- #85002 openclaw config commands cause gateway to hang at 98% CPU
- #85133 Gateway launchd agent gets unloaded during self-update and never re-bootstrapped (macOS)
- #85246 UI Update button breaks Gateway when npm global + launchd (handoff deadlock)
- #85695 Invalid on-disk openclaw.json can brick managed gateway on next restart despite last-known-good
- #86417 macOS launchd Gateway still restarts via gateway-update/update.run; document and honor auto-update kill-switch
- #86913 fix(gateway): expose restart pending state
- #87889 Update from Dashboard skipped, works from CLI
- #87928 macOS update can leave manual-update loop and stale node host causing Gateway restart storm
- #87968 fix(ui): treat started managed-service handoff as pending update instead of skipped
- #87993 [Bug]: Windows — openclaw update 期间 Scheduled Task PT3M 重复触发器重新拉起 gateway 导致竞态
- #88224 fix(update): prefer package root as managed-service handoff cwd (fixes #87889)
- #88292 fix(update): guard Windows task autostart during package updates
- #88311 fix(windows): repair doctor update fallback migration
- #88361 fix(daemon): clean stale Windows startup fallback
- #89231 [Bug]: Windows installer-created scheduled task launches gateway.cmd with visible console — should use windowless launcher
- #89380 fix(daemon): default Windows tasks to hidden launcher
- #89484 Fix: gateway restart detects npm package version updates
- #90502 Fix Windows gateway scheduled task normalization
- #90512 fix: ignore canonical Windows gateway task names
- #90946 fix(infra): preserve inherited gateway PID across reparent during cleanup
- #91249 [security-signal] fix(windows): hide startup fallback launcher with VBS
- #91273 fix(windows): remove findstr from scheduled-task restart probe (Fixes #84600)
- #92088 Updater can leave managed gateway stopped when transient update handoff fails
- #92111 fix(update): restart managed gateway when update handoff fails after stop
- #92726 [security-signal] fix(windows): replace cmd handoff with Node.js subprocess for gateway restart
- #94149 [security-signal] fix(status): bound systemd service probes so status cannot hang on a wedged systemctl (#84698)
