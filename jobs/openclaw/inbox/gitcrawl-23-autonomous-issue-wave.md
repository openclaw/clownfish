---
repo: openclaw/openclaw
cluster_id: gitcrawl-23-autonomous-issue-wave
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
  - "#70788"
  - "#77804"
  - "#79166"
  - "#80435"
  - "#84600"
  - "#87993"
  - "#89231"
  - "#91144"
cluster_refs:
  - "#70788"
  - "#77804"
  - "#79166"
  - "#80435"
  - "#84600"
  - "#87993"
  - "#89231"
  - "#91144"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#42252"
  - "#79734"
  - "#80455"
  - "#81829"
  - "#84280"
  - "#84472"
  - "#87156"
  - "#88292"
  - "#88311"
  - "#88361"
  - "#89380"
  - "#90502"
  - "#90512"
  - "#91249"
  - "#91273"
  - "#91486"
  - "#92726"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #88361 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 23 on 2026-06-15. Existing-overlap refs #42252, #79734, #80455, #81829, #84280, #84472, #87156, #88292, #88311, #88361, #89380, #90502, #90512, #91249, #91273, #91486, #92726 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 23

Generated from local gitcrawl run cluster 23 for `openclaw/openclaw`.

Display title:

> fix(daemon): clean stale Windows startup fallback

Cluster shape from gitcrawl:

- total members: 25
- issues: 10
- pull requests: 15
- open candidates in local store: 8
- excluded existing-overlap refs: #42252, #79734, #80455, #81829, #84280, #84472, #87156, #88292, #88311, #88361, #89380, #90502, #90512, #91249, #91273, #91486, #92726
- representative: #88361, currently open in local store
- latest member update: 2026-06-15T11:49:41.539163Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #70788 fix(windows): suppress startup-folder cmd window flash via wscript silent launcher
- #77804 doctor returns exit code 0 despite reporting Invalid config at end of output
- #79166 [Feature] Doctor dry-run / diff mode
- #80435 [Bug]: doctor `--fix` trailer prints unconditionally on clean state when not running with --fix
- #84600 Bug: Windows heartbeat cmd window not hidden - 'findstr /I /C:"Running"' stays visible
- #87993 [Bug]: Windows — openclaw update 期间 Scheduled Task PT3M 重复触发器重新拉起 gateway 导致竞态
- #89231 [Bug]: Windows installer-created scheduled task launches gateway.cmd with visible console — should use windowless launcher
- #91144 [Bug]: Windows native CLI gateway Scheduled Task does not stay running; foreground window worksWindows native CLI gateway Scheduled Task does not stay running; foreground window works

Existing-overlap context refs:

- #42252 Improve doctor/gateway diagnostics clarity for mixed LaunchAgent/runtime states
- #79734 [security-signal] feat(doctor): add --dry-run flag to preview config changes without applying
- #80455 [security-signal] fix(doctor): suppress --fix trailer when no pending config changes remain
- #81829 fix(doctor): exit non-zero on final invalid config (#77804)
- #84280 fix: handle SIGUSR1 restart on Windows where the signal is unsupported
- #84472 [security-signal] Doctor: expose dry-run preview reports
- #87156 [Bug]: Windows doctor update leaves Startup-folder gateway fallback stale and does not install Scheduled Task
- #88292 fix(update): guard Windows task autostart during package updates
- #88311 fix(windows): repair doctor update fallback migration
- #88361 fix(daemon): clean stale Windows startup fallback
- #89380 fix(daemon): default Windows tasks to hidden launcher
- #90502 Fix Windows gateway scheduled task normalization
- #90512 fix: ignore canonical Windows gateway task names
- #91249 [security-signal] fix(windows): hide startup fallback launcher with VBS
- #91273 fix(windows): remove findstr from scheduled-task restart probe (Fixes #84600)
- #91486 fix(windows): verify scheduled task launch source
- #92726 [security-signal] fix(windows): replace cmd handoff with Node.js subprocess for gateway restart
