---
repo: openclaw/openclaw
cluster_id: gitcrawl-47-autonomous-drip-20260706
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
  - "#93081"
cluster_refs:
  - "#93081"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#74163"
  - "#89724"
  - "#90204"
  - "#91176"
  - "#91438"
  - "#92081"
  - "#92302"
  - "#92656"
  - "#92777"
  - "#92867"
  - "#93160"
  - "#93253"
  - "#94070"
  - "#94393"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#74163"
  - "#89724"
  - "#91176"
  - "#91438"
  - "#92081"
  - "#92656"
  - "#93253"
  - "#94393"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #74163 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 47 on 2026-07-06. Existing-overlap refs #74163, #89724, #90204, #91176, #91438, #92081, #92302, #92656, #92777, #92867, #93160, #93253, #94070, #94393 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 47

Generated from local gitcrawl run cluster 47 for `openclaw/openclaw`.

Display title:

> WORKING: All Microsoft Issues and PRs (refresh)

Cluster shape from gitcrawl:

- total members: 15
- issues: 4
- pull requests: 11
- open candidates in local store: 1
- excluded existing-overlap refs: #74163, #89724, #90204, #91176, #91438, #92081, #92302, #92656, #92777, #92867, #93160, #93253, #94070, #94393
- security-signal refs requiring route_security: #74163, #89724, #91176, #91438, #92081, #92656, #93253, #94393
- representative: #74163, currently open in local store
- latest member update: 2026-06-19T02:13:01.213911Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #93081 [Bug]: Ctrl+C not working in Windows install on foreground

Existing-overlap context refs:

- #74163 [security-signal] WORKING: All Microsoft Issues and PRs (refresh)
- #89724 [security-signal] feat(voice-call): add Microsoft Teams voice provider (OpenClawTeamsBridge)
- #90204 fix(windows): resolve compatibility, path redaction, symlink EPERM, and channel sorting issues
- #91176 [security-signal] feat(voice-call): Microsoft Teams provider (msteams) — voice + inbound video + outbound call-back
- #91438 [security-signal] feat(voice-call): Microsoft Teams provider — CVI voice/video calls
- #92081 [security-signal] feat(msteams): Teams voice (CVI) + chat + governance integration
- #92302 memory.qmd.command path mangled on Windows — QMD memory backend unusable despite working CLI (CommonJS path concatenation strips separators)
- #92656 [security-signal] [Feature]: voice/chat → Microsoft Planner task creation (extends the Teams CVI work in #91438/#92081) — bundled vs standalone plugin?
- #92777 [Bug]: TUI: Backspace key stops working after agent response renders (WSL2/Ubuntu)
- #92867 fix(memory-qmd): preserve Windows absolute paths in QMD command resolution
- #93160 fix(tui): recognize DEL (0x7f) as backspace for WSL2 terminals (fixes #92777)
- #93253 [security-signal] fix(openai-completions): preserve reasoning replay for MiniMax M3 via OpenRouter
- #94070 fix(tui): normalize WSL2 backspace (^?/0x7f) to standard backspace (^H/0x08)
- #94393 [security-signal] fix(gateway): enable Ctrl+C signal handling on Windows
