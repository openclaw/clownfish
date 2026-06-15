---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-046
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
  - raise_pr
require_human_for:
  - security_sensitive
  - maintainer_signal
  - active_author_followup
  - technical_correctness_judgment
canonical: []
candidates:
  - "#73455"
  - "#74503"
  - "#73897"
  - "#73984"
  - "#73635"
  - "#73792"
  - "#73917"
  - "#73165"
  - "#74411"
  - "#74200"
cluster_refs:
  - "#73455"
  - "#74503"
  - "#73897"
  - "#73984"
  - "#73635"
  - "#73792"
  - "#73917"
  - "#73165"
  - "#74411"
  - "#74200"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.605Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 46

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #73455 feat(matrix): add AI-gated participation and final-reply freshness controls

- bucket: needs_proof
- author: bdjben
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: matrix, gateway, cli, scripts, agents, size: XL, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:57:03Z
- body excerpt: # feat(matrix): add AI-gated participation and final-reply freshness controls ## Summary - Problem: In busy Matrix rooms with multiple OpenClaw bots, a bot can draft a reply while newer visible room activity arrives, or reply when the user intended only one bo

### #74503 fix(agents): disable pi-agent auto-retry + thinking repetition detection

- bucket: needs_proof
- author: y9c
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:57:12Z
- body excerpt: ## Summary Fixes #73781 Two layered fixes for the deterministic tool-call loop observed with reasoning models (Qwen3.6): ### 1. Disable pi-coding-agent SDK auto-retry (original PR #74434) The pi-coding-agent SDK has auto-retry enabled by default (up to 3 retri

### #73897 Fix Android node system.run shell wrapper

- bucket: needs_proof
- author: alixchow
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, size: XS, plugin: file-transfer, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:57:15Z
- body excerpt: Title: Fix Android node system.run shell wrapper Summary: - Use Termux's shell path for Android node system.run wrappers. - Keep Windows and other POSIX platforms unchanged. - Document the Android/Termux node-host shell behavior. Problem: Android/Termux does n

### #73984 fix(tui): autocomplete plugin commands like active-memory

- bucket: needs_proof
- author: hpt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:57:16Z
- body excerpt: ## Summary - Merge remote command entries from `commands.list` into TUI slash-command autocomplete so plugin commands (for example `/active-memory`) appear in suggestions. - Refresh remote command suggestions when command context changes (`/agent`, `/model`, a

### #73635 Errors: rewrite 403 HTML auth pages

- bucket: needs_proof
- author: sai8341
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:57:22Z
- body excerpt: ## Summary Fix incorrect user-facing error reporting when provider requests return `403` HTML auth/challenge pages. Previously these failures could be surfaced as transport or rate-limit style errors, which sent users down the wrong debugging path. This change

### #73792 fix(mcp): evict cached session runtime when transport closes unexpectedly

- bucket: needs_proof
- author: klin3867
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:57:27Z
- body excerpt: ## Problem When a stdio MCP child subprocess exits unexpectedly (idle-exit, OOM, external `SIGKILL`, crash), the MCP SDK's transport correctly fires `onclose` and the SDK's `Protocol._onclose` correctly nulls `Client._transport`. But `SessionMcpRuntime` keeps 

### #73917 feat(bootstrap): allow arbitrary extra bootstrap files

- bucket: stale_unassigned
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, clawsweeper, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:57:31Z
- body excerpt: ## Summary - allow the bundled `bootstrap-extra-files` hook to include arbitrary workspace-relative files instead of rejecting basenames outside the fixed bootstrap list - preserve existing workspace containment checks, bootstrap size budgets, ordering, and se

### #73165 Add MCP readiness gate for advertised skills

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, scripts, agents, size: M, channel: qa-channel, triage: dirty-candidate, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:57:31Z
- body excerpt: ## Summary - filters MCP-backed advertised skills behind verified readiness metadata - adds readiness parsing for skill metadata and config/mcp-readiness.json - adds dry-run smoke script for mcporter/readiness mismatch checks ## Verification Reported by Rex be

### #74411 feat(browser): add agent download actions

- bucket: needs_proof
- author: GRD-Chang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:57:41Z
- body excerpt: ## Summary - Problem: the agent-facing `browser` tool did not expose the managed browser download helpers even though the CLI/control API already supported `/download` and `/wait/download`. - Why it matters: agents could inspect pages and snapshots but could n

### #74200 fix(skills): never wipe target skills dir on sync to prevent data los…

- bucket: needs_proof
- author: luckylhb90
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-30T04:57:52Z
- body excerpt: …s on partial load `syncSkillsToWorkspace` used to call `fsp.rm(targetSkillsDir)` before recopying every skill. Any transient failure inside `loadWorkspaceSkillEntries` (a filesystem hiccup, a config parse error, an agent-filter edge case) returns fewer entrie

