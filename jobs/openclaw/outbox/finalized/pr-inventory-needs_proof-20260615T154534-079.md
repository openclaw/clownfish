---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-079
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
  - "#61322"
  - "#61576"
  - "#61624"
  - "#93267"
  - "#61675"
  - "#61973"
  - "#62021"
  - "#62157"
  - "#62201"
  - "#62338"
  - "#62403"
  - "#62417"
  - "#62503"
  - "#62722"
  - "#62841"
  - "#63015"
  - "#63025"
  - "#63112"
  - "#63571"
  - "#85711"
  - "#86852"
  - "#87169"
  - "#87344"
  - "#88114"
  - "#88425"
cluster_refs:
  - "#61322"
  - "#61576"
  - "#61624"
  - "#93267"
  - "#61675"
  - "#61973"
  - "#62021"
  - "#62157"
  - "#62201"
  - "#62338"
  - "#62403"
  - "#62417"
  - "#62503"
  - "#62722"
  - "#62841"
  - "#63015"
  - "#63025"
  - "#63112"
  - "#63571"
  - "#85711"
  - "#86852"
  - "#87169"
  - "#87344"
  - "#88114"
  - "#88425"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.209Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 79

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #61322 fix(sessions): remap stale same-agent paths into the current state dir

- bucket: needs_proof
- author: rbutera
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:31:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: persisted absolute `sessionFile` paths for the same agent can survive a state-root move (for example `/home/<user>/.openclaw/...` to `/Users/<user>/.openclaw/...`) and still be treated as structurally valid. - Why it matters: resumed or targete

### #61576 feat: Rust/GTK4 Linux companion app (#75, alternative track)

- bucket: needs_proof
- author: 00xglitch
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a native Linux desktop companion under `apps/linux-gtk/` written in **Rust + GTK4 + libadwaita** - Alternative-track contribution for [#75](https://github.com/openclaw/openclaw/issues/75) alongside @tiagonix's C/GTK4 work at `apps/linux/` — d

### #61624 feat(whatsapp): add dmRequireMention for DM trigger gating

- bucket: needs_proof
- author: mubbie
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: S, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `dmRequireMention` config option to WhatsApp channel (and base `ExtensionChannelConfig`) that gates DM replies behind mention-pattern matching - Reuses existing `mentionPatterns` + `resolveMentionGating` infrastructure — no new pattern config

### #93267 fix(session-memory): skip delivery-mirror entries and dedup consecutive identical assistant messages (#92563)

- bucket: needs_proof
- author: fsdwen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `getRecentSessionContent` in the session-memory hook would produce duplicate `assistant:` lines when thinking-enabled models caused two entries to be written to the session JSONL for the same assistant response. Two fixes: 1. **Skip `delivery-mirror

### #61675 feat: fire session reset hooks for daily and idle resets

- bucket: needs_proof
- author: salvormallow
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Internal hooks and `before_reset` plugin hook only fire for manual `/new` and `/reset` commands, not for daily (4AM) or idle-timeout session resets. This means `session-memory` never saves on daily/idle resets. - Why it matters: 4 communi

### #61973 feat(update): add `openclaw update review` pre-upgrade risk assessment

- bucket: needs_proof
- author: ziggy2socks
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What this adds `openclaw update review` — a read-only pre-upgrade risk assessment subcommand. Run it before `openclaw update` to understand what changed and whether it is safe to upgrade right now. ``` openclaw update review openclaw update review --json op

### #62021 fix(macos): rewrite wildcard A2UI host to loopback

- bucket: needs_proof
- author: ThanhNguyxn07
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes macOS node A2UI URL resolution by rewriting wildcard canvas hosts (`0.0.0.0` / `::`) to loopback before appending the A2UI path. - Keeps the change minimal and isolated to macOS node runtime URL handling, so existing non-wildcard host behavi

### #62157 fix: only drop streamed payloads, not all final payloads

- bucket: needs_proof
- author: ericyoshida
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When block streaming is enabled (`blockStreamingDefault: "on"`), text generated by the agent **before** tool calls is correctly streamed to the user. However, text generated **after** tool calls (final payloads) is silently dropped and never deliver

### #62201   fix: mitigate stale toolResult replay pollution

- bucket: needs_proof
- author: avatasia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This change mitigates stale diagnostic `toolResult` replay pollution in session history. It adds structured replay metadata for transient environment-diagnostic tool results, then omits stale results during replay when they are either: - older than 

### #62338 doctor(memory): surface FTS5 unavailable state in doctor checks

- bucket: needs_proof
- author: ZanderH-code
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:33:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #62328 by making `openclaw doctor` visibly report when SQLite FTS5 is unavailable in the running gateway. - Extend `doctor.memory.status` payload with `fts` probe fields (`enabled`, `available`, `error`) - Thread that payload through `probeGat

### #62403 fix(ui): keep session label edits attached to correct row after sorting

- bucket: needs_proof
- author: edwardlong-ctrl
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:33:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary * Problem: Editing a session label could visually apply the change to the wrong row when the table reorders. * Why it matters: Users may accidentally modify the wrong session label due to DOM reuse after sorting. * What changed: Use Lit `repeat()` k

### #62417 feat: add workspace file management for agents

- bucket: needs_proof
- author: WilShi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, app: web-ui, gateway, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:33:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Agents have workspace directories but no way to browse or manage files through the Control UI. - Why it matters: Users need to inspect, edit, and organize agent workspace files without SSH or CLI access. - What changed: Added `agents.work

### #62503 feat: add devcontainer for cross-platform development

- bucket: needs_proof
- author: urtabajev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:33:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw cannot be fully developed on Windows — shell-based tests and setup scripts require Linux. - Why it matters: Contributors on Windows need a portable, reproducible dev environment. - What changed: Added a `.devcontainer/` setup (Do

### #62722 fix(gateway): use already-aborted signal in stopChannel fallback

- bucket: needs_proof
- author: pruthvishetty
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:33:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - In `stopChannel`, when no `AbortController` exists for an account (i.e. no running task), the fallback `new AbortController().signal` creates a signal from an anonymous controller that **can never be aborted** - `stopAccount` implementations may u

### #62841 fix(auto-reply): accept /activate as alias for /activation command

- bucket: needs_proof
- author: pradeep7127
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:33:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The `/activate mention` and `/activate always` commands were silently ignored because the parser regex only matched `/activation` exactly - Changed regex from `/^\/activation.../` to `/^\/activate?ion.../` so both forms are accepted - Added test c

### #63015 fix: honor filePath/path/media fallbacks in outbound reply normalization

- bucket: needs_proof
- author: tombensim
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:34:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `normalizeOutboundReplyPayload` only checked `payload.mediaUrl`, silently dropping media when agents returned `filePath`, `path`, or `media` fields - This caused WhatsApp (and other channel) auto-replies to send plain text instead of attachments (

### #63025 fix(auto-reply): avoid silent completion when dispatch produces no sendable reply

- bucket: needs_proof
- author: Leon-llb
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:34:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This fixes a silent completion path in `dispatchReplyFromConfig`. In the current flow, a normal user message can make it through dispatch and still end with no sendable output, leaving the user with no reply and no visible error. In logs this shows 

### #63112 fix(cron): warn when --system-event on main session contains shell commands

- bucket: needs_proof
- author: liaoandi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: M, triage: blank-template, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T11:34:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `cron add --system-event "./run.sh" --session main` and similar commands used to create or edit the job silently even though main-session system events do not execute shell commands. - Adds a shared `looksLikeShellCommand()` helper for common runt

### #63571 feat(web-search): add explicit provider fallback support

- bucket: needs_proof
- author: scriptsth
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:34:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: When a provider is explicitly configured with a fallbacks array, retry the next configured provider on any error instead of failing immediately. Without fallbacks, explicit mode keeps existing fail-fast behavior. ## Summary Describe the problem and fix in 2–5 

### #85711 docs: add WSL build troubleshooting to CONTRIBUTING.md

- bucket: needs_proof
- author: Arvuno
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:35:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Added WSL-specific build troubleshooting section to CONTRIBUTING.md - Addresses issue #85537 (protobufjs google/protobuf descriptor resolution failure on WSL) ## Problem Building OpenClaw on Windows Subsystem for Linux (WSL) fails when resolving t

### #86852 fix(ui): render direct tool-result image blocks inline in chat (#50779)

- bucket: needs_proof
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:36:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Tool results emitted by `imageResult()` / `imageResultFromFile()` in `src/agents/tools/common.ts` produce content blocks in the bare `{type: "image", data, mimeType}` shape — the same shape `normalizeReadImageResult()` in `src/agents/pi-tools.read.t

### #87169 Support separate Teams Graph tenant

- bucket: needs_proof
- author: DanBotero
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:36:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add optional `channels.msteams.graphTenantId` to the config schema and public Teams config type - use `graphTenantId` for Microsoft Graph token acquisition while leaving bot credentials on `tenantId` - document the split and regenerate bundled cha

### #87344 fix(browser): read Chrome version from PE metadata on Windows

- bucket: needs_proof
- author: Jefsky
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:36:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Description Fixes #87312 `openclaw doctor` reports "Could not determine the installed Chrome version" even when Chrome is installed at the expected path with correct version metadata (Chrome 148.x in this case). ## Root Cause The `readBrowserVersion` functi

### #88114 fix(windows): disable scheduled task before stop to prevent PT3M re-trigger during update

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:37:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(windows): disable scheduled task before stop to prevent PT3M re-trigger during update The Windows scheduled task uses a PT3M LogonTrigger which repeats every 3 minutes. Previously, stopScheduledTask only called schtasks /End, leaving the trigger active. Du

### #88425 fix(acp): assemble prompts with context engine

- bucket: needs_proof
- author: Mijamind719
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:37:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - run ACP dispatch prompts through the active context engine before `acpManager.runTurn` - keep ACP transcript persistence on the original prompt text so injected context is not written into user history - add regression coverage for context-engine 

